import { Kick } from '@nodetron/types/enum'

import { state, CamerasDetection, DetectionWorld } from '../state'

import Filters from './filters'

export default class Merge extends Filters {
  public initData(): DetectionWorld {
    return {
      robots: {
        allies: [],
        opponents: [],
      },
      ball: {
        position: {
          x: 0,
          y: 0,
        },
        radius: 0.0025,
      },
    }
  }

  // TODO : Improve that
  public filter(visionData: CamerasDetection): DetectionWorld {
    const world = this.initData()
    visionData.forEach((camerasDetection) => {
      camerasDetection.forEach((detections) => {
        detections.balls.forEach((ball) => {
          world.ball = {
            position: {
              x: ball.position.x / 1000.0,
              y: ball.position.y / 1000.0,
            },
            radius: 0.021375, // TODO : Move this in constant
          }
        })

        detections.robots.allies.forEach((robot) => {
          if (robot.id != null && robot.position.orientation != null) {
            world.robots.allies[robot.id] = {
              id: robot.id,
              position: {
                x: robot.position.x / 1000.0,
                y: robot.position.y / 1000.0,
              },
              orientation: robot.position.orientation,
              radius: 0.9, // TODO : Move this
              infrared: state.lastHardwareInfo[robot.id]?.infrared ?? false,
              kick: state.lastHardwareInfo[robot.id]?.kick ?? Kick.NO,
            }
          }
        })

        detections.robots.opponents.forEach((robot) => {
          if (robot.id != null && robot.position.orientation != null) {
            world.robots.opponents[robot.id] = {
              id: robot.id,
              position: {
                x: robot.position.x / 1000.0,
                y: robot.position.y / 1000.0,
              },
              orientation: robot.position.orientation,
              radius: 0.9,
              infrared: false,
              kick: Kick.NO,
            }
          }
        })
      })
    })
    return world
  }
}
