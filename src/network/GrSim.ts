/* eslint-disable camelcase */
/* eslint-disable no-empty */
import dgram from 'dgram'

import { Context, ServiceBroker } from 'moleculer'
import { Control } from '@nodetron/types/internal/control'
import { Placement } from '@nodetron/types/internal/control/placement'

import Config from '../Config'

import {
  grSim_Packet as GrSimPacket, IgrSim_Replacement, IgrSim_RobotReplacement,
} from './grSim/compiled/compiledProtobufGrSimPacket'

let socket: dgram.Socket

export function start(
  broker: ServiceBroker,
): Promise<void> {
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

export function sendCommand(ctx: Context, payload: Control): void {
  try {
    const msg = GrSimPacket.create({
      commands: {
        timestamp: Date.now(),
        isteamyellow: payload.yellow,
        robotCommands: [
          {
            id: payload.id,
            kickspeedx: payload.kick && payload.power ? payload.power : 0,
            kickspeedz: payload.chipKick && !payload.kick && payload.power ? payload.power : 0,
            spinner: payload.dribbler,
            velnormal: payload.velocity.normal,
            velangular: payload.velocity.angular,
            veltangent: payload.velocity.tangent,
            wheelsspeed: false,
          },
        ],
      },
    })

    const buffer = GrSimPacket.encode(msg).finish()
    socket.send(
      buffer,
      Config.network.grSim.control,
      Config.network.vision.address,
    )
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    ctx.broker.logger.error(`GrSim control client send error: ${e}`)
  }
}

export function sendPlacement(ctx: Context<Placement>): void {
  try {
    const replacement: IgrSim_Replacement = {}

    const robots: Array<IgrSim_RobotReplacement> = []

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

    const buffer = GrSimPacket.encode(msg).finish()
    socket.send(
      buffer,
      Config.network.grSim.control,
      Config.network.vision.address,
    )
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    ctx.broker.logger.error(`GrSim placement client send error: ${e}`)
  }
}
