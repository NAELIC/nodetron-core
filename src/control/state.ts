import { Data } from '@nodetron/types/internal/data'
import { TaskManager } from '@nodetron/types/internal/task-manager/task'
import { ServiceBroker } from 'moleculer'
import Action from '@nodetron/types/internal/task-manager/tasks/actions'

class ActionTaskManager implements TaskManager<Action> {
  private actions = new Map<number, Action>()

  register(id: number, elt: Action): void {
    this.actions.set(id, elt)
  }

  computeAll(broker: ServiceBroker): void {
    broker.logger.debug('Compute all actions')
    this.actions.forEach((elt, key, map) => {
      if (elt.compute(broker)) {
        map.delete(key)
      }
    })
  }
}

const state = {
  data: {} as Data,
  actionManager: new ActionTaskManager(),
}

export default state
