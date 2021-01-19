/* eslint-disable class-methods-use-this */
import { ActionSchema, Context, ServiceBroker } from 'moleculer'
import {
  sqrt, square, abs, sign, sin, cos, pi,
} from 'mathjs'
import Action from '@nodetron/types/internal/task-manager/tasks/actions'
import { MoveToPacket } from '@nodetron/types/internal/control/packet'
import Point from '@nodetron/math/Point2D'
import { Control } from '@nodetron/types/internal/control'
import { Color } from '@nodetron/types/utils/utils'

import state from '../state'

interface RampSpeed {
  minSpeed: number,
  maxSpeed: number,
  accelerationFactor: number,
  decelerationFactor: number,
}

export default class MoveToAction extends Action {
  public name = 'stop';

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
    public kick: boolean,
    public chipKick: boolean,
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
      kick: { type: 'boolean', optional: true, default: false },
      chipKick: { type: 'boolean', optional: true, default: false },
      power: { type: 'number', optional: true, default: 0 },
    },
    handler(ctx: Context<MoveToPacket>): void {
      ctx.broker.logger.debug('MoveToPacket packet received')
      state.actionManager.register(
        ctx.params.id,
        new MoveToAction(
          ctx.params.id, new Point(ctx.params.target.x, ctx.params.target.y), ctx.params.orientation,
          ctx.params.kick, ctx.params.chipkick, ctx.params.power,
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
    if (state.data.robots) {
      const robot = state.data.robots.allies[this.id]
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

        void broker.call('communication.control', {
          id: this.id,
          yellow: state.data.color === Color.YELLOW,
          spin: this.spin,
          kick: this.kick,
          chipKick: this.chipKick,
          power: this.power,
          velocity: {
            angular: this.lastAngularVelocity,
            tangent: this.lastXLinearVelocity,
            normal: this.lastYLinearVelocity,
          },
        } as Control)

        return xyOk && anglOk
      }
    } else {
      broker.logger.error("Doesn't see the robots")
    }

    return true
  }
}
