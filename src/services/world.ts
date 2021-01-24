/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable object-shorthand */
import { Context, Service, ServiceBroker } from 'moleculer'
import { GameControllerEvent } from '@nodetron/types/league/game-controller'
import { HardwareInfo } from '@nodetron/types/league/grsim'
import { Vision } from '@nodetron/types/league/vision'
import { WorldMessage } from '@nodetron/types/world'
import { Color } from '@nodetron/types/enum'

import { state, fieldState } from '../world/state'
import pipeline from '../world/pipeline'
import Config from '../Config'
import processGeometry from '../world/process/geometry'
// import constant from '../data/constant'

let interval: NodeJS.Timeout

export default class DataService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'world',
      dependencies: ['network'],
      async started() {
        interval = setInterval(() => {
          const data = pipeline(broker, state.cameras)

          state.cameras.forEach((value) => {
            while (value.length) { value.pop() }
          })

          void broker.emit('world.state', {
            field: fieldState,
            robots: data.robots,
            ball: data.ball,
            color: Config.yellow === true ? Color.YELLOW : Color.BLUE,
            // constant, TODO : READ THIS !
          } as WorldMessage)
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
    if (data.detection) {
      state.cameras[data.detection.cameraId].push(data.detection)
    }

    if (data.geometry && data.geometry.field) { // TODO : Don't update everytime
      processGeometry(broker, data.geometry.field)
    }
  }

  public static updateGameController(newState: GameControllerEvent, broker: ServiceBroker): void {
    broker.logger.info(newState)
  }

  public static updateHardwareInfo(newState: Array<HardwareInfo>, broker: ServiceBroker): void {
    broker.logger.info(newState)
  }
}
