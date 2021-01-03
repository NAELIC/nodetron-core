import dgram from 'dgram'

import { GameControllerEvent } from '@nodetron/types/league/game-controller'
import { Vision } from '@nodetron/types/league/vision'
import { HardwareInfo } from '@nodetron/types/league/grsim'
import { ServiceBroker } from 'moleculer'

let socket: dgram.Socket

/**
 * Create a receiver socket (adress, port).
 * The received message is process in a function and the result is emitted.
 */
export default (
  broker: ServiceBroker,
  address: string,
  port: number,
  hostAddress: string,
  eventName: string,
  processingFunction: (buffer: Buffer) => Vision | GameControllerEvent | Array<HardwareInfo>,
): Promise<void> => new Promise((resolve, reject) => {
  socket = dgram.createSocket({ type: 'udp4', reuseAddr: true })

  socket.on('listening', () => {
    broker.logger.info(`UDP client listening on ${hostAddress}:${port}...`)
    socket.setMulticastTTL(128)
    socket.addMembership(address, hostAddress)
    broker.logger.info(`UDP client subscribed to ${address}...`)
    resolve()
  })

  socket.on('message', (message) => {
    try {
      void broker.emit(eventName, processingFunction(message))
    } catch (e) {
      broker.logger.error(e)
    }
  })

  socket.on('error', (e) => {
    broker.logger.error('UDP client error')
    reject(e)
  })

  try {
    socket.bind(port)
  } catch (e) {
    reject(e)
  }
})
