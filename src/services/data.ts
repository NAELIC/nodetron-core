/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable object-shorthand */
import { Context, Service, ServiceBroker } from 'moleculer'
import { GameControllerEvent } from '@nodetron/types/league/game-controller'
import { HardwareInfo } from '@nodetron/types/league/grsim'
import { Vision } from '@nodetron/types/league/vision'

import cameraData from '../data/state'

// Put all data in an dimension array of queue
// (Don't forgot to put in the field only if it is not in late)
// Filter and merge when you have enough (~ 60ms)
// Filters (MVP) :
// - Ignore a part of the field
// - Merge all position
// - Chgt de transformation pour l'IA.

let interval: NodeJS.Timeout
export default class DataService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'data',
      dependencies: ['network'],
      async started() {
        interval = setInterval(() => {
          cameraData.forEach((value) => {
            while (value.length) { value.pop() }
          })
        }, 60)
      },
      async stopped() {
        clearInterval(interval)
      },
      events: {
        'network.vision'(ctx: Context<Vision>): void {
          DataService.addVisionData(ctx.params, broker)
        },
        'network.gameController'(ctx: Context<GameControllerEvent>): void {
          DataService.updateGameController(ctx.params, broker)
        },
        'network.hardwareInfo'(ctx: Context<Array<HardwareInfo>>): void {
          DataService.updateHardwareInfo(ctx.params, broker)
        },
      },
    })
  }

  public static addVisionData(data: Vision, broker: ServiceBroker): void {
    // TODO : Prefilter
    if (data.detection) { cameraData[data.detection.cameraId].push(data.detection) }

    // TODO : Don't update everytime
    if (data.geometry) { broker.logger.debug(data.geometry) }
  }

  public static updateGameController(newState: GameControllerEvent, broker: ServiceBroker): void {
    broker.logger.info(newState)
  }

  public static updateHardwareInfo(newState: Array<HardwareInfo>, broker: ServiceBroker): void {
    broker.logger.info(newState)
  }
}
