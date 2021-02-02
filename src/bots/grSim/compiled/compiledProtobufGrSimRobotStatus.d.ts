/* eslint-disable */

import * as $protobuf from 'protobufjs'
/** Properties of a Robots_Status. */
export interface IRobots_Status {

    /** Robots_Status robotsStatus */
    robotsStatus?: (IRobot_Status[]|null),
}

/** Represents a Robots_Status. */
export class Robots_Status implements IRobots_Status {
  /**
     * Constructs a new Robots_Status.
     * @param [properties] Properties to set
     */
  constructor(properties?: IRobots_Status);

    /** Robots_Status robotsStatus. */
    public robotsStatus: IRobot_Status[];

    /**
     * Creates a new Robots_Status instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Robots_Status instance
     */
    public static create(properties?: IRobots_Status): Robots_Status;

    /**
     * Encodes the specified Robots_Status message. Does not implicitly {@link Robots_Status.verify|verify} messages.
     * @param message Robots_Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRobots_Status, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Robots_Status message, length delimited. Does not implicitly {@link Robots_Status.verify|verify} messages.
     * @param message Robots_Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRobots_Status, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Robots_Status message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Robots_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Robots_Status;

    /**
     * Decodes a Robots_Status message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Robots_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Robots_Status;

    /**
     * Verifies a Robots_Status message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Robots_Status message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Robots_Status
     */
    public static fromObject(object: { [k: string]: any }): Robots_Status;

    /**
     * Creates a plain object from a Robots_Status message. Also converts values to other types if specified.
     * @param message Robots_Status
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Robots_Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Robots_Status to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Robot_Status. */
export interface IRobot_Status {

    /** Robot_Status robotId */
    robotId: number,

    /** Robot_Status infrared */
    infrared: boolean,

    /** Robot_Status flatKick */
    flatKick: boolean,

    /** Robot_Status chipKick */
    chipKick: boolean,
}

/** Represents a Robot_Status. */
export class Robot_Status implements IRobot_Status {
  /**
     * Constructs a new Robot_Status.
     * @param [properties] Properties to set
     */
  constructor(properties?: IRobot_Status);

    /** Robot_Status robotId. */
    public robotId: number;

    /** Robot_Status infrared. */
    public infrared: boolean;

    /** Robot_Status flatKick. */
    public flatKick: boolean;

    /** Robot_Status chipKick. */
    public chipKick: boolean;

    /**
     * Creates a new Robot_Status instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Robot_Status instance
     */
    public static create(properties?: IRobot_Status): Robot_Status;

    /**
     * Encodes the specified Robot_Status message. Does not implicitly {@link Robot_Status.verify|verify} messages.
     * @param message Robot_Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRobot_Status, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Robot_Status message, length delimited. Does not implicitly {@link Robot_Status.verify|verify} messages.
     * @param message Robot_Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRobot_Status, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Robot_Status message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Robot_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Robot_Status;

    /**
     * Decodes a Robot_Status message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Robot_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Robot_Status;

    /**
     * Verifies a Robot_Status message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Robot_Status message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Robot_Status
     */
    public static fromObject(object: { [k: string]: any }): Robot_Status;

    /**
     * Creates a plain object from a Robot_Status message. Also converts values to other types if specified.
     * @param message Robot_Status
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Robot_Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Robot_Status to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
