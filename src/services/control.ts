/* eslint-disable object-shorthand */
import { Context, Service, ServiceBroker } from 'moleculer'
import { Data } from '@nodetron/types/internal/data'

import state from '../control/state'
import actionSet from '../control/actions'

export default class SettingService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'control',
      dependencies: [
        'communication',
        'data',
      ],
      actions: actionSet,
      events: {
        'data.state'(ctx: Context<Data>): void {
          state.data = ctx.params
          state.actionManager.computeAll(broker)
        },
      },
    })
  }
}
