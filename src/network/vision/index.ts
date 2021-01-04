import {
  Vision,
  VisionDetectionBall, VisionDetectionFrame, VisionDetectionRobot,
  VisionFieldCircularArc, VisionFieldLineSegment,
  VisionGeometryCameraCalibration, VisionGeometry, VisionGeometryFieldSize,
} from '@nodetron/types/league/vision'
import { Color } from '@nodetron/types/utils/utils'

import Config from '../../Config'

import {
  SSL_WrapperPacket as SSLWrapperPacket,
  ISSL_GeometryData as ISSLGeometryData,
  ISSL_GeometryCameraCalibration as ISSLGeometryCameraCalibration,
  ISSL_GeometryFieldSize as ISSLGeometryFieldSize,
  ISSL_DetectionFrame as ISSLDetectionFrame,
  ISSL_FieldCicularArc as ISSLFieldCicularArc,
  ISSL_FieldLineSegment as ISSLFieldLineSegment,
  ISSL_DetectionRobot as ISSLDetectionRobot,
  ISSL_DetectionBall as ISSLDetectionBall,
} from './compiled/compiledProtobufVisionPacket'

function castProtobufVisionDetectionBall(payload: ISSLDetectionBall): VisionDetectionBall {
  return {
    confidence: payload.confidence,
    area: payload.area,
    position: {
      pixelX: payload.pixelX,
      pixelY: payload.pixelY,
      x: payload.x,
      y: payload.y,
      z: payload.z,
    },
  }
}

function castProtobufVisionDetectionRobot(payload: ISSLDetectionRobot):
  VisionDetectionRobot {
  return {
    confidence: payload.confidence,
    id: payload.robotId,
    height: payload.height,
    position: {
      pixelX: payload.pixelX,
      pixelY: payload.pixelY,
      x: payload.x,
      y: payload.y,
      orientation: payload.orientation,
    },
  }
}

function castProtobufVisionDetectionFrame(payload: ISSLDetectionFrame):
  VisionDetectionFrame {
  const robotsYellow: Array<VisionDetectionRobot> = []
  const robotsBlue: Array<VisionDetectionRobot> = []
  const balls: Array<VisionDetectionBall> = []

  if (payload.robotsYellow) {
    for (let i = 0, maxi = payload.robotsYellow.length; i < maxi; i += 1) {
      // eslint-disable-next-line security/detect-object-injection
      robotsYellow.push(castProtobufVisionDetectionRobot(payload.robotsYellow[i]))
    }
  }

  if (payload.robotsBlue) {
    for (let i = 0, maxi = payload.robotsBlue.length; i < maxi; i += 1) {
      // eslint-disable-next-line security/detect-object-injection
      robotsBlue.push(castProtobufVisionDetectionRobot(payload.robotsBlue[i]))
    }
  }

  if (payload.balls) {
    for (let i = 0, maxi = payload.balls.length; i < maxi; i += 1) {
      // eslint-disable-next-line security/detect-object-injection
      balls.push(castProtobufVisionDetectionBall(payload.balls[i]))
    }
  }

  return {
    number: payload.frameNumber,
    tCapture: payload.tCapture,
    tSent: payload.tSent,
    cameraId: payload.cameraId,
    balls,
    robots: {
      allies: Config.yellow ? robotsYellow : robotsBlue,
      opponents: Config.yellow ? robotsBlue : robotsYellow,
    },
  }
}

function castProtobufVisionFieldLineSegment(payload: ISSLFieldLineSegment):
  VisionFieldLineSegment {
  return {
    name: payload.name,
    thickness: payload.thickness,
    p1: {
      x: payload.p1.x,
      y: payload.p1.y,
    },
    p2: {
      x: payload.p2.x,
      y: payload.p2.y,
    },
  }
}

function castProtobufVisionFieldCircularArc(payload: ISSLFieldCicularArc):
  VisionFieldCircularArc {
  return {
    name: payload.name,
    thickness: payload.thickness,
    center: {
      x: payload.center.x,
      y: payload.center.y,
    },
    radius: payload.radius,
    a1: payload.a1,
    a2: payload.a2,
  }
}

function castProtobufVisionGeometryFieldSize(payload: ISSLGeometryFieldSize):
  VisionGeometryFieldSize {
  const lines: Array<VisionFieldLineSegment> = []
  const arcs: Array<VisionFieldCircularArc> = []

  if (payload.fieldLines) {
    for (let i = 0, maxi = payload.fieldLines.length; i < maxi; i += 1) {
      // eslint-disable-next-line security/detect-object-injection
      lines.push(castProtobufVisionFieldLineSegment(payload.fieldLines[i]))
    }
  }

  if (payload.fieldArcs) {
    for (let i = 0, maxi = payload.fieldArcs.length; i < maxi; i += 1) {
      // eslint-disable-next-line security/detect-object-injection
      arcs.push(castProtobufVisionFieldCircularArc(payload.fieldArcs[i]))
    }
  }

  return {
    length: payload.fieldLength,
    width: payload.fieldWidth,
    lines,
    arcs,
    boundaryWidth: payload.boundaryWidth,
    goal: {
      depth: payload.goalDepth,
      width: payload.goalWidth,
    },
  }
}

function castProtobufVisionGeometryCameraCalibration(payload: ISSLGeometryCameraCalibration):
  VisionGeometryCameraCalibration {
  return {
    cameraId: payload.cameraId,
    focalLength: payload.focalLength,
    principalPoint: {
      x: payload.principalPointX,
      y: payload.principalPointY,
    },
    distortion: payload.distortion,
    q0: payload.q0,
    q1: payload.q1,
    q2: payload.q2,
    q3: payload.q3,
    tx: payload.tx,
    ty: payload.ty,
    tz: payload.tz,
    derivedCameraWorld: {
      tx: payload?.derivedCameraWorldTx,
      ty: payload?.derivedCameraWorldTy,
      tz: payload?.derivedCameraWorldTz,
    },
  }
}

function castProtobufVisionGeometryData(payload: ISSLGeometryData): VisionGeometry {
  const calibrations: Array<VisionGeometryCameraCalibration> = []

  if (payload.calib) {
    for (let i = 0, maxi = payload.calib.length; i < maxi; i += 1) {
      // eslint-disable-next-line security/detect-object-injection
      calibrations.push(castProtobufVisionGeometryCameraCalibration(payload.calib[i]))
    }
  }

  return {
    calibrations,
    field: payload.field ? castProtobufVisionGeometryFieldSize(payload.field) : null,
  }
}

function castProtobufVisionWrapper(payload: SSLWrapperPacket): Vision {
  return {
    detection: payload.detection ? castProtobufVisionDetectionFrame(payload.detection) : null,
    geometry: payload.geometry ? castProtobufVisionGeometryData(payload.geometry) : null,
  }
}

export default function processProtobufSSLVisionPacket(buffer: Buffer): Vision {
  return castProtobufVisionWrapper(SSLWrapperPacket.decode(buffer))
}
