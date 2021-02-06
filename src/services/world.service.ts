/* eslint-disable object-shorthand */
import { Context, Service, ServiceBroker } from 'moleculer'
import { GameControllerEvent } from '@nodetron/types/network/game-controller'
import { HardwareInfo } from '@nodetron/types/bots/hardware'
import { Vision } from '@nodetron/types/network/vision'

import { state } from '../world/state'
import pipelineFilter from '../world/pipeline'
import processGeometry from '../world/process/geometry'

let interval: NodeJS.Timeout

export default class DataService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'world',
      dependencies: ['network'],
      created() {
        interval = setInterval(() => {
          // Copy and clean state
          const copyCameras = state.cameras.map((camera) => [...camera])
          state.cameras = new Array(4).fill(0).map(() => [])

          void broker.emit('world.state', pipelineFilter(broker, copyCameras))
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
        'bots.hardwareInfo'(ctx: Context<Array<HardwareInfo>>): void {
          state.lastHardwareInfo = ctx.params
        },
      },
    })
  }

  public static addVisionData(data: Vision, broker: ServiceBroker): void {
    if (data.detection) {
      state.cameras[data.detection.cameraId].push(data.detection)
    }

    if (data.geometry && data.geometry.field) { // TODO : Don't update everytime
      processGeometry(broker, data.geometry.field)
    }
  }

  public static updateGameController(newState: GameControllerEvent, broker: ServiceBroker): void {
    broker.logger.info('Todo')
  }
}
