/* eslint-disable max-len */
import { Ball } from '@nodetron/types/internal/data'
import { Robot } from '@nodetron/types/internal/robot'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'

import Filters from './filters'

export default class Merge extends Filters {
  public initData(): { ball: Ball, robots: { allies: Array<Robot>, opponents: Array<Robot> } } {
    return {
      robots: {
        allies: [] as Array<Robot>,
        opponents: [] as Array<Robot>,
      },
      ball: {
        position: {},
      } as Ball,
    }
  }

  // TODO : Improve that
  public filter(visionData: VisionDetectionFrame[][]): { ball: Ball, robots: { allies: Array<Robot>, opponents: Array<Robot> } } {
    const data = this.initData()
    visionData.forEach((camerasDetection) => {
      camerasDetection.forEach((detections) => {
        detections.balls.forEach((ball) => {
          data.ball = {
            position: {
              x: ball.position.x / 1000.0,
              y: ball.position.y / 1000.0,
            },
          }
        })

        detections.robots.allies.forEach((robot) => {
          if (robot.id != null && robot.position.orientation != null) {
            data.robots.allies[robot.id] = {
              id: robot.id,
              position: {
                x: robot.position.x / 1000.0,
                y: robot.position.y / 1000.0,
              },
              orientation: robot.position.orientation,
              status: {
                infrared: false, kick: { chip: false, flat: false },
              },
            }
          }
        })

        detections.robots.opponents.forEach((robot) => {
          if (robot.id != null && robot.position.orientation != null) {
            data.robots.opponents[robot.id] = {
              id: robot.id,
              position: {
                x: robot.position.x / 1000.0,
                y: robot.position.y / 1000.0,
              },
              orientation: robot.position.orientation,
              status: {
                infrared: false, kick: { chip: false, flat: false },
              },
            }
          }
        })
      })
    })
    return data
  }
}
