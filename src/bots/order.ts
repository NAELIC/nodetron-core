import { OrderMessage } from '@nodetron/types/bots/order'
import { ActionParams, Context, ServiceActionsSchema } from 'moleculer'
import { Kick } from '@nodetron/types/enum'

import Config from '../Config'

import { sendCardCommand } from './communication/card'
import { sendSimCommand } from './communication/simulation'

const params : ActionParams = {
  id: { type: 'number', min: 0, max: 15 },
  yellow: { type: 'boolean', optional: true, default: true },
  spin: { type: 'boolean', optional: true, default: false },
  kick: {
    type: 'enum',
    optional: true,
    values: [
      Kick.CHIP,
      Kick.FLAT,
      Kick.NO,
    ],
    default: Kick.NO,
  },
  power: { type: 'number', optional: true, default: 0 },
  velocity: {
    type: 'object',
    optional: true,
    props: {
      normal: { type: 'number', optional: true, default: 0 },
      tangent: { type: 'number', optional: true, default: 0 },
      angular: { type: 'number', optional: true, default: 0 },
    },
  },
}

const handler = (ctx: Context<OrderMessage>): void => {
  if (Config.simulation) {
    sendSimCommand(ctx)
  } else {
    sendCardCommand(ctx, ctx.params)
  }
}

export default {
  params,
  handler,
} as ServiceActionsSchema
