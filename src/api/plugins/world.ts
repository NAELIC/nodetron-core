/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable object-shorthand */
import { WorldMessage } from '@nodetron/types/world'
import {
  Context,
} from 'moleculer'

import { manager } from '../MessageManager'

import Plugin from './plugin'

const world: Plugin = {
  dependencies: ['world'],
  events: {
    'world.state'(ctx: Context<WorldMessage>): void {
      manager.addMessage(ctx.params, ctx.broker)
    },
  },
  actions: {},
}

export default world
