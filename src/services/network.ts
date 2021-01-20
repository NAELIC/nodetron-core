import { Service, ServiceBroker } from 'moleculer'

import processProtobufSSLRefereeMessage from '../network/gameController'
import processProtobufSSLVisionPacket from '../network/vision'
import UDPClient from '../network/UDPClient'
import Config from '../Config'

export default class NetworkService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'network',
      dependencies: ['bots'],
      async started() {
        await UDPClient(
          broker,
          Config.network.vision.address,
          Config.network.vision.port,
          Config.network.host_address,
          'network.vision',
          processProtobufSSLVisionPacket,
        )

        await UDPClient(
          broker,
          Config.gameController.address,
          Config.gameController.port,
          Config.network.host_address,
          'network.gameController',
          processProtobufSSLRefereeMessage,
        )
      },
    })
  }
}
