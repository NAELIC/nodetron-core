/* eslint-disable object-shorthand */
import {
  Context,
} from 'moleculer'

import Plugin from './plugin'

const graph: Plugin = {
  dependencies: [],
  events: { },
  actions: {
    graph_init: {
      params: {
        id: { type: 'number', min: 0, max: 15 },
      },
      handler(ctx: Context<unknown>): void {
        ctx.broker.logger.info('todo')
      },
    },
  },
}

export default graph
