/* eslint-disable */
import * as $protobuf from 'protobufjs'
/** Properties of a grSim_Packet. */
export interface IgrSim_Packet {

    /** grSim_Packet commands */
    commands?: (IgrSim_Commands|null),

    /** grSim_Packet replacement */
    replacement?: (IgrSim_Replacement|null),
}

/** Represents a grSim_Packet. */
export class grSim_Packet implements IgrSim_Packet {
  /**
     * Constructs a new grSim_Packet.
     * @param [properties] Properties to set
     */
  constructor(properties?: IgrSim_Packet);

    /** grSim_Packet commands. */
    public commands?: (IgrSim_Commands|null);

    /** grSim_Packet replacement. */
    public replacement?: (IgrSim_Replacement|null);

    /**
     * Creates a new grSim_Packet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grSim_Packet instance
     */
    public static create(properties?: IgrSim_Packet): grSim_Packet;

    /**
     * Encodes the specified grSim_Packet message. Does not implicitly {@link grSim_Packet.verify|verify} messages.
     * @param message grSim_Packet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgrSim_Packet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grSim_Packet message, length delimited. Does not implicitly {@link grSim_Packet.verify|verify} messages.
     * @param message grSim_Packet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgrSim_Packet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grSim_Packet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grSim_Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grSim_Packet;

    /**
     * Decodes a grSim_Packet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grSim_Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grSim_Packet;

    /**
     * Verifies a grSim_Packet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grSim_Packet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grSim_Packet
     */
    public static fromObject(object: { [k: string]: any }): grSim_Packet;

    /**
     * Creates a plain object from a grSim_Packet message. Also converts values to other types if specified.
     * @param message grSim_Packet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grSim_Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grSim_Packet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a grSim_Robot_Command. */
export interface IgrSim_Robot_Command {

    /** grSim_Robot_Command id */
    id: number,

    /** grSim_Robot_Command kickspeedx */
    kickspeedx: number,

    /** grSim_Robot_Command kickspeedz */
    kickspeedz: number,

    /** grSim_Robot_Command veltangent */
    veltangent: number,

    /** grSim_Robot_Command velnormal */
    velnormal: number,

    /** grSim_Robot_Command velangular */
    velangular: number,

    /** grSim_Robot_Command spinner */
    spinner: boolean,

    /** grSim_Robot_Command wheelsspeed */
    wheelsspeed: boolean,

    /** grSim_Robot_Command wheel1 */
    wheel1?: (number|null),

    /** grSim_Robot_Command wheel2 */
    wheel2?: (number|null),

    /** grSim_Robot_Command wheel3 */
    wheel3?: (number|null),

    /** grSim_Robot_Command wheel4 */
    wheel4?: (number|null),
}

/** Represents a grSim_Robot_Command. */
export class grSim_Robot_Command implements IgrSim_Robot_Command {
  /**
     * Constructs a new grSim_Robot_Command.
     * @param [properties] Properties to set
     */
  constructor(properties?: IgrSim_Robot_Command);

    /** grSim_Robot_Command id. */
    public id: number;

    /** grSim_Robot_Command kickspeedx. */
    public kickspeedx: number;

    /** grSim_Robot_Command kickspeedz. */
    public kickspeedz: number;

    /** grSim_Robot_Command veltangent. */
    public veltangent: number;

    /** grSim_Robot_Command velnormal. */
    public velnormal: number;

    /** grSim_Robot_Command velangular. */
    public velangular: number;

    /** grSim_Robot_Command spinner. */
    public spinner: boolean;

    /** grSim_Robot_Command wheelsspeed. */
    public wheelsspeed: boolean;

    /** grSim_Robot_Command wheel1. */
    public wheel1: number;

    /** grSim_Robot_Command wheel2. */
    public wheel2: number;

    /** grSim_Robot_Command wheel3. */
    public wheel3: number;

    /** grSim_Robot_Command wheel4. */
    public wheel4: number;

    /**
     * Creates a new grSim_Robot_Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grSim_Robot_Command instance
     */
    public static create(properties?: IgrSim_Robot_Command): grSim_Robot_Command;

    /**
     * Encodes the specified grSim_Robot_Command message. Does not implicitly {@link grSim_Robot_Command.verify|verify} messages.
     * @param message grSim_Robot_Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgrSim_Robot_Command, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grSim_Robot_Command message, length delimited. Does not implicitly {@link grSim_Robot_Command.verify|verify} messages.
     * @param message grSim_Robot_Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgrSim_Robot_Command, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grSim_Robot_Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grSim_Robot_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grSim_Robot_Command;

    /**
     * Decodes a grSim_Robot_Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grSim_Robot_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grSim_Robot_Command;

    /**
     * Verifies a grSim_Robot_Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grSim_Robot_Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grSim_Robot_Command
     */
    public static fromObject(object: { [k: string]: any }): grSim_Robot_Command;

    /**
     * Creates a plain object from a grSim_Robot_Command message. Also converts values to other types if specified.
     * @param message grSim_Robot_Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grSim_Robot_Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grSim_Robot_Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a grSim_Commands. */
export interface IgrSim_Commands {

    /** grSim_Commands timestamp */
    timestamp: number,

    /** grSim_Commands isteamyellow */
    isteamyellow: boolean,

    /** grSim_Commands robotCommands */
    robotCommands?: (IgrSim_Robot_Command[]|null),
}

/** Represents a grSim_Commands. */
export class grSim_Commands implements IgrSim_Commands {
  /**
     * Constructs a new grSim_Commands.
     * @param [properties] Properties to set
     */
  constructor(properties?: IgrSim_Commands);

    /** grSim_Commands timestamp. */
    public timestamp: number;

    /** grSim_Commands isteamyellow. */
    public isteamyellow: boolean;

    /** grSim_Commands robotCommands. */
    public robotCommands: IgrSim_Robot_Command[];

    /**
     * Creates a new grSim_Commands instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grSim_Commands instance
     */
    public static create(properties?: IgrSim_Commands): grSim_Commands;

    /**
     * Encodes the specified grSim_Commands message. Does not implicitly {@link grSim_Commands.verify|verify} messages.
     * @param message grSim_Commands message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgrSim_Commands, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grSim_Commands message, length delimited. Does not implicitly {@link grSim_Commands.verify|verify} messages.
     * @param message grSim_Commands message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgrSim_Commands, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grSim_Commands message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grSim_Commands
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grSim_Commands;

    /**
     * Decodes a grSim_Commands message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grSim_Commands
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grSim_Commands;

    /**
     * Verifies a grSim_Commands message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grSim_Commands message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grSim_Commands
     */
    public static fromObject(object: { [k: string]: any }): grSim_Commands;

    /**
     * Creates a plain object from a grSim_Commands message. Also converts values to other types if specified.
     * @param message grSim_Commands
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grSim_Commands, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grSim_Commands to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a grSim_RobotReplacement. */
export interface IgrSim_RobotReplacement {

    /** grSim_RobotReplacement x */
    x: number,

    /** grSim_RobotReplacement y */
    y: number,

    /** grSim_RobotReplacement dir */
    dir: number,

    /** grSim_RobotReplacement id */
    id: number,

    /** grSim_RobotReplacement yellowteam */
    yellowteam: boolean,

    /** grSim_RobotReplacement turnon */
    turnon?: (boolean|null),
}

/** Represents a grSim_RobotReplacement. */
export class grSim_RobotReplacement implements IgrSim_RobotReplacement {
  /**
     * Constructs a new grSim_RobotReplacement.
     * @param [properties] Properties to set
     */
  constructor(properties?: IgrSim_RobotReplacement);

    /** grSim_RobotReplacement x. */
    public x: number;

    /** grSim_RobotReplacement y. */
    public y: number;

    /** grSim_RobotReplacement dir. */
    public dir: number;

    /** grSim_RobotReplacement id. */
    public id: number;

    /** grSim_RobotReplacement yellowteam. */
    public yellowteam: boolean;

    /** grSim_RobotReplacement turnon. */
    public turnon: boolean;

    /**
     * Creates a new grSim_RobotReplacement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grSim_RobotReplacement instance
     */
    public static create(properties?: IgrSim_RobotReplacement): grSim_RobotReplacement;

    /**
     * Encodes the specified grSim_RobotReplacement message. Does not implicitly {@link grSim_RobotReplacement.verify|verify} messages.
     * @param message grSim_RobotReplacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgrSim_RobotReplacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grSim_RobotReplacement message, length delimited. Does not implicitly {@link grSim_RobotReplacement.verify|verify} messages.
     * @param message grSim_RobotReplacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgrSim_RobotReplacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grSim_RobotReplacement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grSim_RobotReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grSim_RobotReplacement;

    /**
     * Decodes a grSim_RobotReplacement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grSim_RobotReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grSim_RobotReplacement;

    /**
     * Verifies a grSim_RobotReplacement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grSim_RobotReplacement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grSim_RobotReplacement
     */
    public static fromObject(object: { [k: string]: any }): grSim_RobotReplacement;

    /**
     * Creates a plain object from a grSim_RobotReplacement message. Also converts values to other types if specified.
     * @param message grSim_RobotReplacement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grSim_RobotReplacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grSim_RobotReplacement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a grSim_BallReplacement. */
export interface IgrSim_BallReplacement {

    /** grSim_BallReplacement x */
    x?: (number|null),

    /** grSim_BallReplacement y */
    y?: (number|null),

    /** grSim_BallReplacement vx */
    vx?: (number|null),

    /** grSim_BallReplacement vy */
    vy?: (number|null),
}

/** Represents a grSim_BallReplacement. */
export class grSim_BallReplacement implements IgrSim_BallReplacement {
  /**
     * Constructs a new grSim_BallReplacement.
     * @param [properties] Properties to set
     */
  constructor(properties?: IgrSim_BallReplacement);

    /** grSim_BallReplacement x. */
    public x: number;

    /** grSim_BallReplacement y. */
    public y: number;

    /** grSim_BallReplacement vx. */
    public vx: number;

    /** grSim_BallReplacement vy. */
    public vy: number;

    /**
     * Creates a new grSim_BallReplacement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grSim_BallReplacement instance
     */
    public static create(properties?: IgrSim_BallReplacement): grSim_BallReplacement;

    /**
     * Encodes the specified grSim_BallReplacement message. Does not implicitly {@link grSim_BallReplacement.verify|verify} messages.
     * @param message grSim_BallReplacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgrSim_BallReplacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grSim_BallReplacement message, length delimited. Does not implicitly {@link grSim_BallReplacement.verify|verify} messages.
     * @param message grSim_BallReplacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgrSim_BallReplacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grSim_BallReplacement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grSim_BallReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grSim_BallReplacement;

    /**
     * Decodes a grSim_BallReplacement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grSim_BallReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grSim_BallReplacement;

    /**
     * Verifies a grSim_BallReplacement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grSim_BallReplacement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grSim_BallReplacement
     */
    public static fromObject(object: { [k: string]: any }): grSim_BallReplacement;

    /**
     * Creates a plain object from a grSim_BallReplacement message. Also converts values to other types if specified.
     * @param message grSim_BallReplacement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grSim_BallReplacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grSim_BallReplacement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a grSim_Replacement. */
export interface IgrSim_Replacement {

    /** grSim_Replacement ball */
    ball?: (IgrSim_BallReplacement|null),

    /** grSim_Replacement robots */
    robots?: (IgrSim_RobotReplacement[]|null),
}

/** Represents a grSim_Replacement. */
export class grSim_Replacement implements IgrSim_Replacement {
  /**
     * Constructs a new grSim_Replacement.
     * @param [properties] Properties to set
     */
  constructor(properties?: IgrSim_Replacement);

    /** grSim_Replacement ball. */
    public ball?: (IgrSim_BallReplacement|null);

    /** grSim_Replacement robots. */
    public robots: IgrSim_RobotReplacement[];

    /**
     * Creates a new grSim_Replacement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grSim_Replacement instance
     */
    public static create(properties?: IgrSim_Replacement): grSim_Replacement;

    /**
     * Encodes the specified grSim_Replacement message. Does not implicitly {@link grSim_Replacement.verify|verify} messages.
     * @param message grSim_Replacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgrSim_Replacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grSim_Replacement message, length delimited. Does not implicitly {@link grSim_Replacement.verify|verify} messages.
     * @param message grSim_Replacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgrSim_Replacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grSim_Replacement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grSim_Replacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grSim_Replacement;

    /**
     * Decodes a grSim_Replacement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grSim_Replacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grSim_Replacement;

    /**
     * Verifies a grSim_Replacement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grSim_Replacement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grSim_Replacement
     */
    public static fromObject(object: { [k: string]: any }): grSim_Replacement;

    /**
     * Creates a plain object from a grSim_Replacement message. Also converts values to other types if specified.
     * @param message grSim_Replacement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grSim_Replacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grSim_Replacement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
