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
      async started() {
        await UDPClient(
          broker,
          Config.vision.address,
          Config.vision.port,
          Config.host.address,
          'network-gateway.vision',
          processProtobufSSLVisionPacket,
        )

        await UDPClient(
          broker,
          Config.gameController.address,
          Config.gameController.port,
          Config.host.address,
          'network-gateway.gameController',
          processProtobufSSLRefereeMessage,
        )
      },
    })
  }
}
