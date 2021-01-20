/* eslint-disable max-len */
import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import Point from '@nodetron/math/Point2D'
import { IBall, IRobot } from '@nodetron/types/data'

import Filters from './filters'

export default class Merge extends Filters {
  public initData(): { ball: IBall, robots: { allies: Array<IRobot>, opponents: Array<IRobot> } } {
    return {
      robots: {
        allies: [] as Array<IRobot>,
        opponents: [] as Array<IRobot>,
      },
      ball: {
        position: {},
      } as IBall,
    }
  }

  // TODO : Improve that
  public filter(visionData: VisionDetectionFrame[][]): { ball: IBall, robots: { allies: Array<IRobot>, opponents: Array<IRobot> } } {
    const data = this.initData()
    visionData.forEach((camerasDetection) => {
      camerasDetection.forEach((detections) => {
        detections.balls.forEach((ball) => {
          data.ball = {
            position: new Point(ball.position.x / 1000.0, ball.position.y / 1000.0),
            radius: 0.021375, // TODO : Move this in constant
          }
        })

        detections.robots.allies.forEach((robot) => {
          if (robot.id != null && robot.position.orientation != null) {
            data.robots.allies[robot.id] = {
              id: robot.id,
              position: new Point(
                robot.position.x / 1000.0,
                robot.position.y / 1000.0,
              ),
              orientation: robot.position.orientation,
              radius: 0.9, // TODO : Move this
              infrared: false,
              kick: { chip: false, flat: false },
            }
          }
        })

        detections.robots.opponents.forEach((robot) => {
          if (robot.id != null && robot.position.orientation != null) {
            data.robots.opponents[robot.id] = {
              id: robot.id,
              position: new Point(
                robot.position.x / 1000.0,
                robot.position.y / 1000.0,
              ),
              orientation: robot.position.orientation,
              radius: 0.9,
              infrared: false,
              kick: { chip: false, flat: false },
            }
          }
        })
      })
    })
    return data
  }
}
