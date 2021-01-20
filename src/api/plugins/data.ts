/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable object-shorthand */
import { DataMessage } from '@nodetron/types/data'
import {
  Context,
} from 'moleculer'

import { manager } from '../MessageManager'

import Plugin from './plugin'

const data: Plugin = {
  dependencies: ['data'],
  events: {
    'data.state'(ctx: Context<DataMessage>): void {
      manager.addMessage(ctx.params, ctx.broker)
    },
  },
  actions: {},
}

export default data
