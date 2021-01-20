/* eslint-disable object-shorthand */
import { Context, Service, ServiceBroker } from 'moleculer'
import { DataMessage } from '@nodetron/types/data'
import { Data } from '@nodetron/util/data'

import state from '../control/state'
import actionSet from '../control/actions'

export default class SettingService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'control',
      dependencies: [
        'bots',
        'data',
      ],
      actions: actionSet,
      events: {
        'data.state'(ctx: Context<DataMessage>): void {
          state.data = new Data(ctx.params)
          state.actionManager.computeAll(broker)
        },
      },
    })
  }
}
