import Action from '@nodetron/types/task-manager/tasks/actions'
import { StopMessage } from '@nodetron/types/control/stop'
import { OrderMessage } from '@nodetron/types/bots/order'
import { ActionSchema, Context, ServiceBroker } from 'moleculer'
import { Color } from '@nodetron/types/enum'

import state from '../state'

export default class StopAction extends Action {
  public name = 'stop';

  constructor(public id : number) {
    super()
  }

  public static declaration: ActionSchema = {
    params: {
      id: 'number',
    },
    handler(ctx: Context<StopMessage>): void {
      ctx.broker.logger.debug('stop packet received')
      state.actionManager.register(ctx.params.id, new StopAction(ctx.params.id))
    },
  }

  public compute(broker: ServiceBroker): boolean {
    void broker.call('bots.order', {
      id: this.id,
      yellow: state.world.color === Color.YELLOW,
      velocity: {
        angular: 0,
        tangent: 0,
        normal: 0,
      },
    } as OrderMessage)

    return true
  }
}
