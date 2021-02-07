import { World } from '@nodetron/util/world'
import { TaskManager } from '@nodetron/types/task-manager/task'
import { ServiceBroker } from 'moleculer'
import Action from '@nodetron/types/task-manager/tasks/actions'
import { WorldMessage } from '@nodetron/types/world'
import { Color } from '@nodetron/types/enum'
import { GameControllerEvent } from '@nodetron/types/network/game-controller'

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

const initialData: WorldMessage = {
  field: {
    width: 6,
    length: 9,
    boundaryWidth: 0.05,
    centerMark: {
      center: { x: 0, y: 0 },
      radius: 0.005,
    },
    goal: {
      width: 1.0,
      depth: 0.2,
    },
    penalty: {
      width: 2.0,
      depth: 1.0,
    },
  },
  robots: {
    allies: [],
    opponents: [],
  },
  ball: {
    position: { x: 0, y: 0 },
    radius: 0.05,
  },
  color: Color.YELLOW,
  gameController: { } as GameControllerEvent,
}

const state = {
  world: new World(initialData),
  actionManager: new ActionTaskManager(),
}

export default state
