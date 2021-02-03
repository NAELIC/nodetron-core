import { Service, ServiceBroker } from 'moleculer'

import UDPClient from '../network/UDPClient'
import Config from '../Config'
import { startSimulationSocket } from '../bots/communication/simulation'
import { startCard } from '../bots/communication/card'
import processProtobufGrSimRobotsStatusMessage from '../bots/grSim'
import placementSchema from '../bots/placement'
import orderSchema from '../bots/order'

export default class BotsGatewayService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'bots',
      async started() {
        if (Config.simulation) {
          await startSimulationSocket(
            broker,
          )

          await UDPClient(
            broker,
            Config.network.vision.address,
            Config.yellow ? Config.network.grSim.status.yellow : Config.network.grSim.status.blue,
            Config.network.host_address,
            'bots.hardwareInfo',
            processProtobufGrSimRobotsStatusMessage,
          )
        } else {
          await startCard(
            broker,
          )
        }
      },

      actions: {
        order: orderSchema,
        placement: placementSchema,
      },
    })
  }
}
