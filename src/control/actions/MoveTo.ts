/* eslint-disable class-methods-use-this */
import { ActionSchema, Context, ServiceBroker } from 'moleculer'
import {
  sqrt, square, abs, sign, sin, cos, pi,
} from 'mathjs'
import Action from '@nodetron/types/task-manager/tasks/actions'
import { MoveToMessage } from '@nodetron/types/control/moveTo'
import { Point } from '@nodetron/math/Point2D'
import { OrderMessage } from '@nodetron/types/bots/order'
import { Color, Kick } from '@nodetron/types/enum'

import state from '../state'

interface RampSpeed {
  minSpeed: number,
  maxSpeed: number,
  accelerationFactor: number,
  decelerationFactor: number,
}

export default class MoveToAction extends Action {
  public name = 'moveTo';

  public xySpeed: RampSpeed = {
    minSpeed: 0.05,
    maxSpeed: 2,
    accelerationFactor: 1.3,
    decelerationFactor: 0.01,
  };

  public angularSpeed: RampSpeed = {
    minSpeed: 0.05,
    maxSpeed: pi,
    accelerationFactor: 1.3,
    decelerationFactor: 0.2,
  };

  // TODO : These three informations can moves in gameData
  public lastXLinearVelocity = 0;

  public lastYLinearVelocity = 0;

  public lastAngularVelocity = 0;

  constructor(
    public id: number,
    public target: Point,
    public orientation: number,
    public kick: Kick,
    public power: number,
    public spin: boolean,
  ) {
    super()
  }

  public static declaration: ActionSchema = {
    params: {
      id: 'number',
      target: 'object',
      orientation: 'number',
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
    },
    handler(ctx: Context<MoveToMessage>): void {
      ctx.broker.logger.debug('MoveTo packet received')
      state.actionManager.register(
        ctx.params.id,
        new MoveToAction(
          ctx.params.id, new Point(ctx.params.target.x, ctx.params.target.y), ctx.params.orientation,
          ctx.params.kick, ctx.params.power,
          ctx.params.spin,
        ),
      )
    },
  }

  public newSpeed(
    current: number,
    target: number,
    ramp: RampSpeed,
  ): number {
    // speed current can only be positive
    let currentSpeed = current
    if (currentSpeed < 0) currentSpeed = 0.0
    let nSpeed: number = currentSpeed

    if (target > currentSpeed) {
      // acceleration
      if (currentSpeed < ramp.minSpeed) nSpeed = ramp.minSpeed
      else nSpeed = currentSpeed * ramp.accelerationFactor
    } else {
      // decelaration
      nSpeed = currentSpeed * ramp.decelerationFactor
    }

    if (nSpeed < target) nSpeed = target

    if (nSpeed < 0) nSpeed = 0.0
    if (nSpeed > ramp.maxSpeed) nSpeed = ramp.maxSpeed
    return nSpeed
  }

  public calcAngle(a: number, b: number): number {
    // Positive angle
    let angleA: number = a % (2 * pi)
    if (angleA < 0) angleA += 2 * pi
    let angleB: number = b % (2 * pi)
    if (angleB < 0) angleB += 2 * pi

    // Calculate angle
    let angleR: number = angleB - angleA
    if (angleR > pi) angleR -= 2 * pi
    else if (angleR < -pi) angleR += 2 * pi

    return angleR
  }

  public compute(broker: ServiceBroker): boolean {
    if (state.world.robots) {
      const robot = state.world.robots.allies[this.id]
      if (robot) {
        let anglOk = false
        let xyOk = false

        let dx = this.target.x - robot.position.x
        let dy = this.target.y - robot.position.y

        const distance: number = sqrt(square(dx) + square(dy))
        const distAngle = this.calcAngle(robot.orientation, this.orientation)

        if (abs(distAngle) < 0.01) {
          anglOk = true
          this.lastAngularVelocity = 0
        } else {
          this.lastAngularVelocity = sign(distAngle)
            * this.newSpeed(
              abs(this.lastAngularVelocity),
              abs(distAngle),
              this.angularSpeed,
            )
        }

        if (distance < 0.01) {
          this.lastXLinearVelocity = 0
          this.lastYLinearVelocity = 0
          xyOk = true
        } else {
          const ns = this.newSpeed(
            sqrt(
              square(this.lastXLinearVelocity)
              + square(this.lastYLinearVelocity),
            ),
            distance * 2,
            this.xySpeed,
          )

          dx = (dx / distance) * ns
          dy = (dy / distance) * ns

          // const yCalc: number = dy * sin(robot.position.orientation)
          this.lastXLinearVelocity = dx * cos(robot.orientation) + dy * sin(robot.orientation)
          this.lastYLinearVelocity = -dx * sin(robot.orientation) + dy * cos(robot.orientation)
        }

        void broker.call('bots.order', {
          id: this.id,
          yellow: state.world.color === Color.YELLOW,
          spin: this.spin,
          kick: this.kick,
          power: this.power,
          velocity: {
            angular: this.lastAngularVelocity,
            tangent: this.lastXLinearVelocity,
            normal: this.lastYLinearVelocity,
          },
        } as OrderMessage)

        return xyOk && anglOk
      }
    } else {
      broker.logger.error("Doesn't see the robots")
    }

    return true
  }
}
