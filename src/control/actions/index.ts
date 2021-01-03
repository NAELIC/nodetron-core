import { ServiceActionsSchema } from 'moleculer'

import MoveToAction from './MoveTo'
import StopAction from './Stop'

export default {
  stop: StopAction.declaration,
  moveTo: MoveToAction.declaration,
} as ServiceActionsSchema
