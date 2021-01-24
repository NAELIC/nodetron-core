import {
  Context,
  Service, ServiceBroker,
} from 'moleculer'
import { OrderMessage } from '@nodetron/types/bots/order'
import { PlacementMessage } from '@nodetron/types/bots/placement'
import { Kick } from '@nodetron/types/enum'

import UDPClient from '../network/UDPClient'
import Config from '../Config'
import { start as startGrSimControl, sendCommand as sendGrSimCommand, sendPlacement as sendGrSimPlacement } from '../network/GrSim'
import { start as startCOMCard, sendCommand as sendCOMCardCommand } from '../network/ComCard'
import processProtobufGrSimRobotsStatusMessage from '../network/grSim'

export default class BotsGatewayService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'bots',
      async started() {
        if (Config.simulation) {
          await startGrSimControl(
            broker,
          )
          await UDPClient(
            broker,
            Config.network.vision.address,
            Config.network.grSim.status.yellow,
            Config.network.host_address,
            'bots.hardwareInfo',
            processProtobufGrSimRobotsStatusMessage,
          )
        } else {
          await startCOMCard(
            broker,
          )
        }
      },

      actions: {
        order: {
          params: {
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
          },
          handler(ctx: Context<OrderMessage>): void {
            if (Config.simulation) {
              sendGrSimCommand(ctx, ctx.params)
            } else {
              sendCOMCardCommand(ctx, ctx.params)
            }
          },
        },
        placement: {
          params: {
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
                  items: {
                    type: 'object',
                    props: {
                      id: { type: 'number', min: 0, max: 15 },
                      yellow: { type: 'boolean', optional: true, default: true },
                      x: { type: 'number' },
                      y: { type: 'number' },
                      orientation: { type: 'number', optional: true, default: 0 },
                      turnOn: { type: 'boolean', optional: true, default: true },
                    },
                  },
                },
                yellow: {
                  type: 'array',
                  items: {
                    type: 'object',
                    props: {
                      id: { type: 'number', min: 0, max: 15 },
                      yellow: { type: 'boolean', optional: true, default: true },
                      x: { type: 'number' },
                      y: { type: 'number' },
                      orientation: { type: 'number', optional: true, default: 0 },
                      turnOn: { type: 'boolean', optional: true, default: true },
                    },
                  },
                },
              },
            },
          },
          handler(ctx: Context<PlacementMessage>): void {
            if (Config.simulation) {
              sendGrSimPlacement(ctx)
            } else {
              broker.logger.error("Placement doesn't work in real (for the moment)")
            }
          },
        },
      },
    })
  }
}
