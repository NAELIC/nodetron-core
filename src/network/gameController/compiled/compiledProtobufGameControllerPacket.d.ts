/* eslint-disable */
import * as $protobuf from "protobufjs";
/** Properties of a SSL_Referee. */
export interface ISSL_Referee {

    /** SSL_Referee packetTimestamp */
    packetTimestamp: (number);

    /** SSL_Referee stage */
    stage: SSL_Referee.Stage;

    /** SSL_Referee stageTimeLeft */
    stageTimeLeft?: (number|null);

    /** SSL_Referee command */
    command: SSL_Referee.Command;

    /** SSL_Referee commandCounter */
    commandCounter: number;

    /** SSL_Referee commandTimestamp */
    commandTimestamp: (number);

    /** SSL_Referee yellow */
    yellow: SSL_Referee.ITeamInfo;

    /** SSL_Referee blue */
    blue: SSL_Referee.ITeamInfo;

    /** SSL_Referee designatedPosition */
    designatedPosition?: (SSL_Referee.IPoint|null);

    /** SSL_Referee blueTeamOnPositiveHalf */
    blueTeamOnPositiveHalf?: (boolean|null);

    /** SSL_Referee gameEvent */
    gameEvent?: (ISSL_Referee_Game_Event|null);
}

/** Represents a SSL_Referee. */
export class SSL_Referee implements ISSL_Referee {

    /**
     * Constructs a new SSL_Referee.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISSL_Referee);

    /** SSL_Referee packetTimestamp. */
    public packetTimestamp: (number);

    /** SSL_Referee stage. */
    public stage: SSL_Referee.Stage;

    /** SSL_Referee stageTimeLeft. */
    public stageTimeLeft: number;

    /** SSL_Referee command. */
    public command: SSL_Referee.Command;

    /** SSL_Referee commandCounter. */
    public commandCounter: number;

    /** SSL_Referee commandTimestamp. */
    public commandTimestamp: (number);

    /** SSL_Referee yellow. */
    public yellow: SSL_Referee.ITeamInfo;

    /** SSL_Referee blue. */
    public blue: SSL_Referee.ITeamInfo;

    /** SSL_Referee designatedPosition. */
    public designatedPosition?: (SSL_Referee.IPoint|null);

    /** SSL_Referee blueTeamOnPositiveHalf. */
    public blueTeamOnPositiveHalf: boolean;

    /** SSL_Referee gameEvent. */
    public gameEvent?: (ISSL_Referee_Game_Event|null);

    /**
     * Creates a new SSL_Referee instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SSL_Referee instance
     */
    public static create(properties?: ISSL_Referee): SSL_Referee;

    /**
     * Encodes the specified SSL_Referee message. Does not implicitly {@link SSL_Referee.verify|verify} messages.
     * @param message SSL_Referee message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISSL_Referee, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SSL_Referee message, length delimited. Does not implicitly {@link SSL_Referee.verify|verify} messages.
     * @param message SSL_Referee message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISSL_Referee, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SSL_Referee message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SSL_Referee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SSL_Referee;

    /**
     * Decodes a SSL_Referee message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SSL_Referee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SSL_Referee;

    /**
     * Verifies a SSL_Referee message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SSL_Referee message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SSL_Referee
     */
    public static fromObject(object: { [k: string]: any }): SSL_Referee;

    /**
     * Creates a plain object from a SSL_Referee message. Also converts values to other types if specified.
     * @param message SSL_Referee
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SSL_Referee, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SSL_Referee to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SSL_Referee {

    /** Stage enum. */
    enum Stage {
        NORMAL_FIRST_HALF_PRE = 0,
        NORMAL_FIRST_HALF = 1,
        NORMAL_HALF_TIME = 2,
        NORMAL_SECOND_HALF_PRE = 3,
        NORMAL_SECOND_HALF = 4,
        EXTRA_TIME_BREAK = 5,
        EXTRA_FIRST_HALF_PRE = 6,
        EXTRA_FIRST_HALF = 7,
        EXTRA_HALF_TIME = 8,
        EXTRA_SECOND_HALF_PRE = 9,
        EXTRA_SECOND_HALF = 10,
        PENALTY_SHOOTOUT_BREAK = 11,
        PENALTY_SHOOTOUT = 12,
        POST_GAME = 13
    }

    /** Command enum. */
    enum Command {
        HALT = 0,
        STOP = 1,
        NORMAL_START = 2,
        FORCE_START = 3,
        PREPARE_KICKOFF_YELLOW = 4,
        PREPARE_KICKOFF_BLUE = 5,
        PREPARE_PENALTY_YELLOW = 6,
        PREPARE_PENALTY_BLUE = 7,
        DIRECT_FREE_YELLOW = 8,
        DIRECT_FREE_BLUE = 9,
        INDIRECT_FREE_YELLOW = 10,
        INDIRECT_FREE_BLUE = 11,
        TIMEOUT_YELLOW = 12,
        TIMEOUT_BLUE = 13,
        GOAL_YELLOW = 14,
        GOAL_BLUE = 15,
        BALL_PLACEMENT_YELLOW = 16,
        BALL_PLACEMENT_BLUE = 17
    }

    /** Properties of a TeamInfo. */
    interface ITeamInfo {

        /** TeamInfo name */
        name: string;

        /** TeamInfo score */
        score: number;

        /** TeamInfo redCards */
        redCards: number;

        /** TeamInfo yellowCardTimes */
        yellowCardTimes?: (number[]|null);

        /** TeamInfo yellowCards */
        yellowCards: number;

        /** TeamInfo timeouts */
        timeouts: number;

        /** TeamInfo timeoutTime */
        timeoutTime: number;

        /** TeamInfo goalie */
        goalie: number;
    }

    /** Represents a TeamInfo. */
    class TeamInfo implements ITeamInfo {

        /**
         * Constructs a new TeamInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SSL_Referee.ITeamInfo);

        /** TeamInfo name. */
        public name: string;

        /** TeamInfo score. */
        public score: number;

        /** TeamInfo redCards. */
        public redCards: number;

        /** TeamInfo yellowCardTimes. */
        public yellowCardTimes: number[];

        /** TeamInfo yellowCards. */
        public yellowCards: number;

        /** TeamInfo timeouts. */
        public timeouts: number;

        /** TeamInfo timeoutTime. */
        public timeoutTime: number;

        /** TeamInfo goalie. */
        public goalie: number;

        /**
         * Creates a new TeamInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamInfo instance
         */
        public static create(properties?: SSL_Referee.ITeamInfo): SSL_Referee.TeamInfo;

        /**
         * Encodes the specified TeamInfo message. Does not implicitly {@link SSL_Referee.TeamInfo.verify|verify} messages.
         * @param message TeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SSL_Referee.ITeamInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamInfo message, length delimited. Does not implicitly {@link SSL_Referee.TeamInfo.verify|verify} messages.
         * @param message TeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SSL_Referee.ITeamInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SSL_Referee.TeamInfo;

        /**
         * Decodes a TeamInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SSL_Referee.TeamInfo;

        /**
         * Verifies a TeamInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamInfo
         */
        public static fromObject(object: { [k: string]: any }): SSL_Referee.TeamInfo;

        /**
         * Creates a plain object from a TeamInfo message. Also converts values to other types if specified.
         * @param message TeamInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SSL_Referee.TeamInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x: number;

        /** Point y */
        y: number;
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: SSL_Referee.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: SSL_Referee.IPoint): SSL_Referee.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link SSL_Referee.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SSL_Referee.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link SSL_Referee.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SSL_Referee.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SSL_Referee.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SSL_Referee.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): SSL_Referee.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SSL_Referee.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a SSL_Referee_Game_Event. */
export interface ISSL_Referee_Game_Event {

    /** SSL_Referee_Game_Event gameEventType */
    gameEventType: SSL_Referee_Game_Event.GameEventType;

    /** SSL_Referee_Game_Event originator */
    originator?: (SSL_Referee_Game_Event.IOriginator|null);

    /** SSL_Referee_Game_Event message */
    message?: (string|null);
}

/** Represents a SSL_Referee_Game_Event. */
export class SSL_Referee_Game_Event implements ISSL_Referee_Game_Event {

    /**
     * Constructs a new SSL_Referee_Game_Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISSL_Referee_Game_Event);

    /** SSL_Referee_Game_Event gameEventType. */
    public gameEventType: SSL_Referee_Game_Event.GameEventType;

    /** SSL_Referee_Game_Event originator. */
    public originator?: (SSL_Referee_Game_Event.IOriginator|null);

    /** SSL_Referee_Game_Event message. */
    public message: string;

    /**
     * Creates a new SSL_Referee_Game_Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SSL_Referee_Game_Event instance
     */
    public static create(properties?: ISSL_Referee_Game_Event): SSL_Referee_Game_Event;

    /**
     * Encodes the specified SSL_Referee_Game_Event message. Does not implicitly {@link SSL_Referee_Game_Event.verify|verify} messages.
     * @param message SSL_Referee_Game_Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISSL_Referee_Game_Event, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SSL_Referee_Game_Event message, length delimited. Does not implicitly {@link SSL_Referee_Game_Event.verify|verify} messages.
     * @param message SSL_Referee_Game_Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISSL_Referee_Game_Event, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SSL_Referee_Game_Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SSL_Referee_Game_Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SSL_Referee_Game_Event;

    /**
     * Decodes a SSL_Referee_Game_Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SSL_Referee_Game_Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SSL_Referee_Game_Event;

    /**
     * Verifies a SSL_Referee_Game_Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SSL_Referee_Game_Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SSL_Referee_Game_Event
     */
    public static fromObject(object: { [k: string]: any }): SSL_Referee_Game_Event;

    /**
     * Creates a plain object from a SSL_Referee_Game_Event message. Also converts values to other types if specified.
     * @param message SSL_Referee_Game_Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SSL_Referee_Game_Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SSL_Referee_Game_Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SSL_Referee_Game_Event {

    /** GameEventType enum. */
    enum GameEventType {
        UNKNOWN = 0,
        CUSTOM = 1,
        NUMBER_OF_PLAYERS = 2,
        BALL_LEFT_FIELD = 3,
        GOAL = 4,
        KICK_TIMEOUT = 5,
        NO_PROGRESS_IN_GAME = 6,
        BOT_COLLISION = 7,
        MULTIPLE_DEFENDER = 8,
        MULTIPLE_DEFENDER_PARTIALLY = 9,
        ATTACKER_IN_DEFENSE_AREA = 10,
        ICING = 11,
        BALL_SPEED = 12,
        ROBOT_STOP_SPEED = 13,
        BALL_DRIBBLING = 14,
        ATTACKER_TOUCH_KEEPER = 15,
        DOUBLE_TOUCH = 16,
        ATTACKER_TO_DEFENCE_AREA = 17,
        DEFENDER_TO_KICK_POINT_DISTANCE = 18,
        BALL_HOLDING = 19,
        INDIRECT_GOAL = 20,
        BALL_PLACEMENT_FAILED = 21,
        CHIP_ON_GOAL = 22
    }

    /** Team enum. */
    enum Team {
        TEAM_UNKNOWN = 0,
        TEAM_YELLOW = 1,
        TEAM_BLUE = 2
    }

    /** Properties of an Originator. */
    interface IOriginator {

        /** Originator team */
        team: SSL_Referee_Game_Event.Team;

        /** Originator botId */
        botId?: (number|null);
    }

    /** Represents an Originator. */
    class Originator implements IOriginator {

        /**
         * Constructs a new Originator.
         * @param [properties] Properties to set
         */
        constructor(properties?: SSL_Referee_Game_Event.IOriginator);

        /** Originator team. */
        public team: SSL_Referee_Game_Event.Team;

        /** Originator botId. */
        public botId: number;

        /**
         * Creates a new Originator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Originator instance
         */
        public static create(properties?: SSL_Referee_Game_Event.IOriginator): SSL_Referee_Game_Event.Originator;

        /**
         * Encodes the specified Originator message. Does not implicitly {@link SSL_Referee_Game_Event.Originator.verify|verify} messages.
         * @param message Originator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SSL_Referee_Game_Event.IOriginator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Originator message, length delimited. Does not implicitly {@link SSL_Referee_Game_Event.Originator.verify|verify} messages.
         * @param message Originator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SSL_Referee_Game_Event.IOriginator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Originator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Originator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SSL_Referee_Game_Event.Originator;

        /**
         * Decodes an Originator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Originator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SSL_Referee_Game_Event.Originator;

        /**
         * Verifies an Originator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Originator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Originator
         */
        public static fromObject(object: { [k: string]: any }): SSL_Referee_Game_Event.Originator;

        /**
         * Creates a plain object from an Originator message. Also converts values to other types if specified.
         * @param message Originator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SSL_Referee_Game_Event.Originator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Originator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
