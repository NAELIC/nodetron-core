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
          if (ctx.params.detection) {
            state.cameras[ctx.params.detection.cameraId]
              .push(ctx.params.detection)
          }

          if (ctx.params.geometry && ctx.params.geometry.field) { // TODO : Don't update everytime
            processGeometry(broker, ctx.params.geometry.field)
          }
        },
        'network.gameController'(ctx: Context<GameControllerEvent>): void {
          state.gameController = ctx.params
        },
        'bots.hardwareInfo'(ctx: Context<Array<HardwareInfo>>): void {
          state.lastHardwareInfo = ctx.params
        },
      },
    })
  }
}
