/* eslint-disable security/detect-object-injection */
import { GameControllerEvent, GameControllerTeamInfo } from '@nodetron/types/league/game-controller'

import { SSL_Referee as SSLReferee } from './compiled/compiledProtobufGameControllerPacket'

function castProtobufGameControllerTeamInfo(
  payload: SSLReferee.ITeamInfo,
): GameControllerTeamInfo {
  const times: Array<number> = []

  if (payload.yellowCardTimes) {
    for (let i = 0, maxi = payload.yellowCardTimes.length; i < maxi; i += 1) {
      times.push(payload.yellowCardTimes[i])
    }
  }

  return {
    name: payload.name,
    score: payload.score,
    goalie: payload.goalie,
    timeouts: {
      time: payload.timeoutTime,
      counter: payload.timeouts,
    },
    cards: {
      red: {
        counter: payload.redCards,
      },
      yellow: {
        counter: payload.yellowCards,
        times,
      },
    },
  }
}

function castProtobufGameControllerEvent(payload: SSLReferee): GameControllerEvent {
  return {
    timestamp: payload.packetTimestamp,
    stage: payload.stage,
    timeLeft: payload.stageTimeLeft,
    command: {
      value: payload.command,
      counter: payload.commandCounter,
      timestamp: payload.commandTimestamp,
    },
    teams: {
      yellow: castProtobufGameControllerTeamInfo(payload.yellow),
      blue: castProtobufGameControllerTeamInfo(payload.blue),
    },
    blueTeamOnPositiveHalf: payload.blueTeamOnPositiveHalf,
    designatedPosition: payload.designatedPosition,
  }
}

export default function processProtobufSSLRefereeMessage(buffer: Buffer): GameControllerEvent {
  return castProtobufGameControllerEvent(SSLReferee.decode(buffer))
}
