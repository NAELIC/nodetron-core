import { PlacementMessage } from '@nodetron/types/bots/placement'
import { ActionParams, Context, ServiceActionsSchema } from 'moleculer'

import Config from '../Config'

import { sendSimPlacement } from './communication/simulation'

const robotParams = {
  type: 'object',
  props: {
    id: { type: 'number', min: 0, max: 15 },
    yellow: { type: 'boolean', optional: true, default: true },
    x: { type: 'number' },
    y: { type: 'number' },
    orientation: { type: 'number', optional: true, default: 0 },
    turnOn: { type: 'boolean', optional: true, default: true },
  },
}

const params: ActionParams = {
  ball: {
    type: 'object',
    optional: true,
    props: {
      x: { type: 'number' },
      y: { type: 'number' },
      vx: { type: 'number', optional: true, default: 0 },
      vy: { type: 'number', optional: true, default: 0 },
    },
  },
  robots: {
    type: 'object',
    optional: true,
    default: { blue: [], yellow: [] },
    props: {
      blue: {
        type: 'array',
        items: robotParams,
      },
      yellow: {
        type: 'array',
        items: robotParams,
      },
    },
  },
}
function handler(ctx: Context<PlacementMessage>): void {
  if (Config.simulation) {
    sendSimPlacement(ctx)
  } else {
    ctx.broker.logger.error(
      'If you want to use placement in real, use control service',
    )
  }
}

export default {
  params,
  handler,
} as ServiceActionsSchema
