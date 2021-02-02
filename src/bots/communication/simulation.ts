import dgram from 'dgram'

import { Context, ServiceBroker } from 'moleculer'
import { OrderMessage } from '@nodetron/types/bots/order'
import { PlacementMessage } from '@nodetron/types/bots/placement'
import { Kick } from '@nodetron/types/enum'

import Config from '../../Config'
import {
  grSim_Packet as GrSimPacket,
  IgrSim_Replacement as grSimReplacement,
  IgrSim_RobotReplacement as grSimRobotReplacement,
} from '../grSim/compiled/compiledProtobufGrSimPacket'

let socket: dgram.Socket

export function startSimulationSocket(broker: ServiceBroker): Promise<void> {
  return new Promise((resolve, reject) => {
    socket = dgram.createSocket({ type: 'udp4', reuseAddr: true })

    socket.on('listening', () => {
      socket.setMulticastTTL(1)
      broker.logger.info('GrSim control client socket connected')
      resolve()
    })

    socket.on('message', (buffer) => {
      broker.logger.debug(buffer)
      reject()
    })

    socket.on('error', () => {
      broker.logger.error('GrSim control client socket error')
      reject()
    })

    try {
      socket.bind(undefined, Config.network.host_address)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

export function sendSimCommand(ctx: Context<OrderMessage>): void {
  const msg = GrSimPacket.create({
    commands: {
      timestamp: Date.now(),
      isteamyellow: ctx.params.yellow,
      robotCommands: [
        {
          id: ctx.params.id,
          kickspeedx: ctx.params.kick === Kick.FLAT && ctx.params.power ? ctx.params.power : 0,
          kickspeedz: ctx.params.kick === Kick.CHIP && ctx.params.power ? ctx.params.power : 0,
          spinner: ctx.params.spin,
          velnormal: ctx.params.velocity.normal,
          velangular: ctx.params.velocity.angular,
          veltangent: ctx.params.velocity.tangent,
          wheelsspeed: false,
        },
      ],
    },
  })

  socket.send(
    GrSimPacket.encode(msg).finish(),
    Config.network.grSim.control,
    Config.network.grSim.address,
  )
}

export function sendSimPlacement(ctx: Context<PlacementMessage>): void {
  const replacement: grSimReplacement = {}

  const robots: Array<grSimRobotReplacement> = []

  ctx.params.robots.yellow?.forEach((robot) => robots.push({
    id: robot.id,
    x: robot.x,
    y: robot.y,
    dir: robot.orientation * (180 / Math.PI),
    yellowteam: true,
    turnon: robot.turnOn,
  }))

  ctx.params.robots.blue?.forEach((robot) => robots.push({
    id: robot.id,
    x: robot.x,
    y: robot.y,
    dir: robot.orientation * (180 / Math.PI),
    yellowteam: false,
    turnon: robot.turnOn,
  }))

  replacement.robots = robots

  if (ctx.params.ball) {
    replacement.ball = {
      x: ctx.params.ball.x,
      y: ctx.params.ball.y,
      vx: ctx.params.ball.vx,
      vy: ctx.params.ball.vy,
    }
  }

  const msg = GrSimPacket.create({
    replacement,
  })

  socket.send(
    GrSimPacket.encode(msg).finish(),
    Config.network.grSim.control,
    Config.network.grSim.address,
  )
}
