/* eslint-disable object-shorthand */
import { Context, Service, ServiceBroker } from 'moleculer'
import { WorldMessage } from '@nodetron/types/world'
import { World } from '@nodetron/util/world'

import state from '../control/state'
import actionSet from '../control/actions'

export default class SettingService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'control',
      dependencies: [
        'bots',
        'world',
      ],
      actions: actionSet,
      events: {
        'world.state'(ctx: Context<WorldMessage>): void {
          state.world = new World(ctx.params)
          state.actionManager.computeAll(broker)
        },
      },
    })
  }
}
