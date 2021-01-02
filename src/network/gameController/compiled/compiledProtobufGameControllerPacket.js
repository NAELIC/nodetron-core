/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SSL_Referee = (function() {

    /**
     * Properties of a SSL_Referee.
     * @exports ISSL_Referee
     * @interface ISSL_Referee
     * @property {number|Long} packetTimestamp SSL_Referee packetTimestamp
     * @property {SSL_Referee.Stage} stage SSL_Referee stage
     * @property {number|null} [stageTimeLeft] SSL_Referee stageTimeLeft
     * @property {SSL_Referee.Command} command SSL_Referee command
     * @property {number} commandCounter SSL_Referee commandCounter
     * @property {number|Long} commandTimestamp SSL_Referee commandTimestamp
     * @property {SSL_Referee.ITeamInfo} yellow SSL_Referee yellow
     * @property {SSL_Referee.ITeamInfo} blue SSL_Referee blue
     * @property {SSL_Referee.IPoint|null} [designatedPosition] SSL_Referee designatedPosition
     * @property {boolean|null} [blueTeamOnPositiveHalf] SSL_Referee blueTeamOnPositiveHalf
     * @property {ISSL_Referee_Game_Event|null} [gameEvent] SSL_Referee gameEvent
     */

    /**
     * Constructs a new SSL_Referee.
     * @exports SSL_Referee
     * @classdesc Represents a SSL_Referee.
     * @implements ISSL_Referee
     * @constructor
     * @param {ISSL_Referee=} [properties] Properties to set
     */
    function SSL_Referee(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SSL_Referee packetTimestamp.
     * @member {number|Long} packetTimestamp
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.packetTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SSL_Referee stage.
     * @member {SSL_Referee.Stage} stage
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.stage = 0;

    /**
     * SSL_Referee stageTimeLeft.
     * @member {number} stageTimeLeft
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.stageTimeLeft = 0;

    /**
     * SSL_Referee command.
     * @member {SSL_Referee.Command} command
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.command = 0;

    /**
     * SSL_Referee commandCounter.
     * @member {number} commandCounter
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.commandCounter = 0;

    /**
     * SSL_Referee commandTimestamp.
     * @member {number|Long} commandTimestamp
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.commandTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SSL_Referee yellow.
     * @member {SSL_Referee.ITeamInfo} yellow
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.yellow = null;

    /**
     * SSL_Referee blue.
     * @member {SSL_Referee.ITeamInfo} blue
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.blue = null;

    /**
     * SSL_Referee designatedPosition.
     * @member {SSL_Referee.IPoint|null|undefined} designatedPosition
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.designatedPosition = null;

    /**
     * SSL_Referee blueTeamOnPositiveHalf.
     * @member {boolean} blueTeamOnPositiveHalf
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.blueTeamOnPositiveHalf = false;

    /**
     * SSL_Referee gameEvent.
     * @member {ISSL_Referee_Game_Event|null|undefined} gameEvent
     * @memberof SSL_Referee
     * @instance
     */
    SSL_Referee.prototype.gameEvent = null;

    /**
     * Creates a new SSL_Referee instance using the specified properties.
     * @function create
     * @memberof SSL_Referee
     * @static
     * @param {ISSL_Referee=} [properties] Properties to set
     * @returns {SSL_Referee} SSL_Referee instance
     */
    SSL_Referee.create = function create(properties) {
        return new SSL_Referee(properties);
    };

    /**
     * Encodes the specified SSL_Referee message. Does not implicitly {@link SSL_Referee.verify|verify} messages.
     * @function encode
     * @memberof SSL_Referee
     * @static
     * @param {ISSL_Referee} message SSL_Referee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SSL_Referee.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.packetTimestamp);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stage);
        if (message.stageTimeLeft != null && message.hasOwnProperty("stageTimeLeft"))
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.stageTimeLeft);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.command);
        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.commandCounter);
        writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.commandTimestamp);
        $root.SSL_Referee.TeamInfo.encode(message.yellow, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        $root.SSL_Referee.TeamInfo.encode(message.blue, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.designatedPosition != null && message.hasOwnProperty("designatedPosition"))
            $root.SSL_Referee.Point.encode(message.designatedPosition, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.blueTeamOnPositiveHalf != null && message.hasOwnProperty("blueTeamOnPositiveHalf"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.blueTeamOnPositiveHalf);
        if (message.gameEvent != null && message.hasOwnProperty("gameEvent"))
            $root.SSL_Referee_Game_Event.encode(message.gameEvent, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SSL_Referee message, length delimited. Does not implicitly {@link SSL_Referee.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SSL_Referee
     * @static
     * @param {ISSL_Referee} message SSL_Referee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SSL_Referee.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SSL_Referee message from the specified reader or buffer.
     * @function decode
     * @memberof SSL_Referee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SSL_Referee} SSL_Referee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SSL_Referee.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Referee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.packetTimestamp = reader.uint64();
                break;
            case 2:
                message.stage = reader.int32();
                break;
            case 3:
                message.stageTimeLeft = reader.sint32();
                break;
            case 4:
                message.command = reader.int32();
                break;
            case 5:
                message.commandCounter = reader.uint32();
                break;
            case 6:
                message.commandTimestamp = reader.uint64();
                break;
            case 7:
                message.yellow = $root.SSL_Referee.TeamInfo.decode(reader, reader.uint32());
                break;
            case 8:
                message.blue = $root.SSL_Referee.TeamInfo.decode(reader, reader.uint32());
                break;
            case 9:
                message.designatedPosition = $root.SSL_Referee.Point.decode(reader, reader.uint32());
                break;
            case 10:
                message.blueTeamOnPositiveHalf = reader.bool();
                break;
            case 11:
                message.gameEvent = $root.SSL_Referee_Game_Event.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("packetTimestamp"))
            throw $util.ProtocolError("missing required 'packetTimestamp'", { instance: message });
        if (!message.hasOwnProperty("stage"))
            throw $util.ProtocolError("missing required 'stage'", { instance: message });
        if (!message.hasOwnProperty("command"))
            throw $util.ProtocolError("missing required 'command'", { instance: message });
        if (!message.hasOwnProperty("commandCounter"))
            throw $util.ProtocolError("missing required 'commandCounter'", { instance: message });
        if (!message.hasOwnProperty("commandTimestamp"))
            throw $util.ProtocolError("missing required 'commandTimestamp'", { instance: message });
        if (!message.hasOwnProperty("yellow"))
            throw $util.ProtocolError("missing required 'yellow'", { instance: message });
        if (!message.hasOwnProperty("blue"))
            throw $util.ProtocolError("missing required 'blue'", { instance: message });
        return message;
    };

    /**
     * Decodes a SSL_Referee message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SSL_Referee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SSL_Referee} SSL_Referee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SSL_Referee.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SSL_Referee message.
     * @function verify
     * @memberof SSL_Referee
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SSL_Referee.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.packetTimestamp) && !(message.packetTimestamp && $util.isInteger(message.packetTimestamp.low) && $util.isInteger(message.packetTimestamp.high)))
            return "packetTimestamp: integer|Long expected";
        switch (message.stage) {
        default:
            return "stage: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            break;
        }
        if (message.stageTimeLeft != null && message.hasOwnProperty("stageTimeLeft"))
            if (!$util.isInteger(message.stageTimeLeft))
                return "stageTimeLeft: integer expected";
        switch (message.command) {
        default:
            return "command: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            break;
        }
        if (!$util.isInteger(message.commandCounter))
            return "commandCounter: integer expected";
        if (!$util.isInteger(message.commandTimestamp) && !(message.commandTimestamp && $util.isInteger(message.commandTimestamp.low) && $util.isInteger(message.commandTimestamp.high)))
            return "commandTimestamp: integer|Long expected";
        {
            var error = $root.SSL_Referee.TeamInfo.verify(message.yellow);
            if (error)
                return "yellow." + error;
        }
        {
            var error = $root.SSL_Referee.TeamInfo.verify(message.blue);
            if (error)
                return "blue." + error;
        }
        if (message.designatedPosition != null && message.hasOwnProperty("designatedPosition")) {
            var error = $root.SSL_Referee.Point.verify(message.designatedPosition);
            if (error)
                return "designatedPosition." + error;
        }
        if (message.blueTeamOnPositiveHalf != null && message.hasOwnProperty("blueTeamOnPositiveHalf"))
            if (typeof message.blueTeamOnPositiveHalf !== "boolean")
                return "blueTeamOnPositiveHalf: boolean expected";
        if (message.gameEvent != null && message.hasOwnProperty("gameEvent")) {
            var error = $root.SSL_Referee_Game_Event.verify(message.gameEvent);
            if (error)
                return "gameEvent." + error;
        }
        return null;
    };

    /**
     * Creates a SSL_Referee message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SSL_Referee
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SSL_Referee} SSL_Referee
     */
    SSL_Referee.fromObject = function fromObject(object) {
        if (object instanceof $root.SSL_Referee)
            return object;
        var message = new $root.SSL_Referee();
        if (object.packetTimestamp != null)
            if ($util.Long)
                (message.packetTimestamp = $util.Long.fromValue(object.packetTimestamp)).unsigned = true;
            else if (typeof object.packetTimestamp === "string")
                message.packetTimestamp = parseInt(object.packetTimestamp, 10);
            else if (typeof object.packetTimestamp === "number")
                message.packetTimestamp = object.packetTimestamp;
            else if (typeof object.packetTimestamp === "object")
                message.packetTimestamp = new $util.LongBits(object.packetTimestamp.low >>> 0, object.packetTimestamp.high >>> 0).toNumber(true);
        switch (object.stage) {
        case "NORMAL_FIRST_HALF_PRE":
        case 0:
            message.stage = 0;
            break;
        case "NORMAL_FIRST_HALF":
        case 1:
            message.stage = 1;
            break;
        case "NORMAL_HALF_TIME":
        case 2:
            message.stage = 2;
            break;
        case "NORMAL_SECOND_HALF_PRE":
        case 3:
            message.stage = 3;
            break;
        case "NORMAL_SECOND_HALF":
        case 4:
            message.stage = 4;
            break;
        case "EXTRA_TIME_BREAK":
        case 5:
            message.stage = 5;
            break;
        case "EXTRA_FIRST_HALF_PRE":
        case 6:
            message.stage = 6;
            break;
        case "EXTRA_FIRST_HALF":
        case 7:
            message.stage = 7;
            break;
        case "EXTRA_HALF_TIME":
        case 8:
            message.stage = 8;
            break;
        case "EXTRA_SECOND_HALF_PRE":
        case 9:
            message.stage = 9;
            break;
        case "EXTRA_SECOND_HALF":
        case 10:
            message.stage = 10;
            break;
        case "PENALTY_SHOOTOUT_BREAK":
        case 11:
            message.stage = 11;
            break;
        case "PENALTY_SHOOTOUT":
        case 12:
            message.stage = 12;
            break;
        case "POST_GAME":
        case 13:
            message.stage = 13;
            break;
        }
        if (object.stageTimeLeft != null)
            message.stageTimeLeft = object.stageTimeLeft | 0;
        switch (object.command) {
        case "HALT":
        case 0:
            message.command = 0;
            break;
        case "STOP":
        case 1:
            message.command = 1;
            break;
        case "NORMAL_START":
        case 2:
            message.command = 2;
            break;
        case "FORCE_START":
        case 3:
            message.command = 3;
            break;
        case "PREPARE_KICKOFF_YELLOW":
        case 4:
            message.command = 4;
            break;
        case "PREPARE_KICKOFF_BLUE":
        case 5:
            message.command = 5;
            break;
        case "PREPARE_PENALTY_YELLOW":
        case 6:
            message.command = 6;
            break;
        case "PREPARE_PENALTY_BLUE":
        case 7:
            message.command = 7;
            break;
        case "DIRECT_FREE_YELLOW":
        case 8:
            message.command = 8;
            break;
        case "DIRECT_FREE_BLUE":
        case 9:
            message.command = 9;
            break;
        case "INDIRECT_FREE_YELLOW":
        case 10:
            message.command = 10;
            break;
        case "INDIRECT_FREE_BLUE":
        case 11:
            message.command = 11;
            break;
        case "TIMEOUT_YELLOW":
        case 12:
            message.command = 12;
            break;
        case "TIMEOUT_BLUE":
        case 13:
            message.command = 13;
            break;
        case "GOAL_YELLOW":
        case 14:
            message.command = 14;
            break;
        case "GOAL_BLUE":
        case 15:
            message.command = 15;
            break;
        case "BALL_PLACEMENT_YELLOW":
        case 16:
            message.command = 16;
            break;
        case "BALL_PLACEMENT_BLUE":
        case 17:
            message.command = 17;
            break;
        }
        if (object.commandCounter != null)
            message.commandCounter = object.commandCounter >>> 0;
        if (object.commandTimestamp != null)
            if ($util.Long)
                (message.commandTimestamp = $util.Long.fromValue(object.commandTimestamp)).unsigned = true;
            else if (typeof object.commandTimestamp === "string")
                message.commandTimestamp = parseInt(object.commandTimestamp, 10);
            else if (typeof object.commandTimestamp === "number")
                message.commandTimestamp = object.commandTimestamp;
            else if (typeof object.commandTimestamp === "object")
                message.commandTimestamp = new $util.LongBits(object.commandTimestamp.low >>> 0, object.commandTimestamp.high >>> 0).toNumber(true);
        if (object.yellow != null) {
            if (typeof object.yellow !== "object")
                throw TypeError(".SSL_Referee.yellow: object expected");
            message.yellow = $root.SSL_Referee.TeamInfo.fromObject(object.yellow);
        }
        if (object.blue != null) {
            if (typeof object.blue !== "object")
                throw TypeError(".SSL_Referee.blue: object expected");
            message.blue = $root.SSL_Referee.TeamInfo.fromObject(object.blue);
        }
        if (object.designatedPosition != null) {
            if (typeof object.designatedPosition !== "object")
                throw TypeError(".SSL_Referee.designatedPosition: object expected");
            message.designatedPosition = $root.SSL_Referee.Point.fromObject(object.designatedPosition);
        }
        if (object.blueTeamOnPositiveHalf != null)
            message.blueTeamOnPositiveHalf = Boolean(object.blueTeamOnPositiveHalf);
        if (object.gameEvent != null) {
            if (typeof object.gameEvent !== "object")
                throw TypeError(".SSL_Referee.gameEvent: object expected");
            message.gameEvent = $root.SSL_Referee_Game_Event.fromObject(object.gameEvent);
        }
        return message;
    };

    /**
     * Creates a plain object from a SSL_Referee message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SSL_Referee
     * @static
     * @param {SSL_Referee} message SSL_Referee
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SSL_Referee.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.packetTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.packetTimestamp = options.longs === String ? "0" : 0;
            object.stage = options.enums === String ? "NORMAL_FIRST_HALF_PRE" : 0;
            object.stageTimeLeft = 0;
            object.command = options.enums === String ? "HALT" : 0;
            object.commandCounter = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.commandTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.commandTimestamp = options.longs === String ? "0" : 0;
            object.yellow = null;
            object.blue = null;
            object.designatedPosition = null;
            object.blueTeamOnPositiveHalf = false;
            object.gameEvent = null;
        }
        if (message.packetTimestamp != null && message.hasOwnProperty("packetTimestamp"))
            if (typeof message.packetTimestamp === "number")
                object.packetTimestamp = options.longs === String ? String(message.packetTimestamp) : message.packetTimestamp;
            else
                object.packetTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.packetTimestamp) : options.longs === Number ? new $util.LongBits(message.packetTimestamp.low >>> 0, message.packetTimestamp.high >>> 0).toNumber(true) : message.packetTimestamp;
        if (message.stage != null && message.hasOwnProperty("stage"))
            object.stage = options.enums === String ? $root.SSL_Referee.Stage[message.stage] : message.stage;
        if (message.stageTimeLeft != null && message.hasOwnProperty("stageTimeLeft"))
            object.stageTimeLeft = message.stageTimeLeft;
        if (message.command != null && message.hasOwnProperty("command"))
            object.command = options.enums === String ? $root.SSL_Referee.Command[message.command] : message.command;
        if (message.commandCounter != null && message.hasOwnProperty("commandCounter"))
            object.commandCounter = message.commandCounter;
        if (message.commandTimestamp != null && message.hasOwnProperty("commandTimestamp"))
            if (typeof message.commandTimestamp === "number")
                object.commandTimestamp = options.longs === String ? String(message.commandTimestamp) : message.commandTimestamp;
            else
                object.commandTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.commandTimestamp) : options.longs === Number ? new $util.LongBits(message.commandTimestamp.low >>> 0, message.commandTimestamp.high >>> 0).toNumber(true) : message.commandTimestamp;
        if (message.yellow != null && message.hasOwnProperty("yellow"))
            object.yellow = $root.SSL_Referee.TeamInfo.toObject(message.yellow, options);
        if (message.blue != null && message.hasOwnProperty("blue"))
            object.blue = $root.SSL_Referee.TeamInfo.toObject(message.blue, options);
        if (message.designatedPosition != null && message.hasOwnProperty("designatedPosition"))
            object.designatedPosition = $root.SSL_Referee.Point.toObject(message.designatedPosition, options);
        if (message.blueTeamOnPositiveHalf != null && message.hasOwnProperty("blueTeamOnPositiveHalf"))
            object.blueTeamOnPositiveHalf = message.blueTeamOnPositiveHalf;
        if (message.gameEvent != null && message.hasOwnProperty("gameEvent"))
            object.gameEvent = $root.SSL_Referee_Game_Event.toObject(message.gameEvent, options);
        return object;
    };

    /**
     * Converts this SSL_Referee to JSON.
     * @function toJSON
     * @memberof SSL_Referee
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SSL_Referee.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Stage enum.
     * @name SSL_Referee.Stage
     * @enum {string}
     * @property {number} NORMAL_FIRST_HALF_PRE=0 NORMAL_FIRST_HALF_PRE value
     * @property {number} NORMAL_FIRST_HALF=1 NORMAL_FIRST_HALF value
     * @property {number} NORMAL_HALF_TIME=2 NORMAL_HALF_TIME value
     * @property {number} NORMAL_SECOND_HALF_PRE=3 NORMAL_SECOND_HALF_PRE value
     * @property {number} NORMAL_SECOND_HALF=4 NORMAL_SECOND_HALF value
     * @property {number} EXTRA_TIME_BREAK=5 EXTRA_TIME_BREAK value
     * @property {number} EXTRA_FIRST_HALF_PRE=6 EXTRA_FIRST_HALF_PRE value
     * @property {number} EXTRA_FIRST_HALF=7 EXTRA_FIRST_HALF value
     * @property {number} EXTRA_HALF_TIME=8 EXTRA_HALF_TIME value
     * @property {number} EXTRA_SECOND_HALF_PRE=9 EXTRA_SECOND_HALF_PRE value
     * @property {number} EXTRA_SECOND_HALF=10 EXTRA_SECOND_HALF value
     * @property {number} PENALTY_SHOOTOUT_BREAK=11 PENALTY_SHOOTOUT_BREAK value
     * @property {number} PENALTY_SHOOTOUT=12 PENALTY_SHOOTOUT value
     * @property {number} POST_GAME=13 POST_GAME value
     */
    SSL_Referee.Stage = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL_FIRST_HALF_PRE"] = 0;
        values[valuesById[1] = "NORMAL_FIRST_HALF"] = 1;
        values[valuesById[2] = "NORMAL_HALF_TIME"] = 2;
        values[valuesById[3] = "NORMAL_SECOND_HALF_PRE"] = 3;
        values[valuesById[4] = "NORMAL_SECOND_HALF"] = 4;
        values[valuesById[5] = "EXTRA_TIME_BREAK"] = 5;
        values[valuesById[6] = "EXTRA_FIRST_HALF_PRE"] = 6;
        values[valuesById[7] = "EXTRA_FIRST_HALF"] = 7;
        values[valuesById[8] = "EXTRA_HALF_TIME"] = 8;
        values[valuesById[9] = "EXTRA_SECOND_HALF_PRE"] = 9;
        values[valuesById[10] = "EXTRA_SECOND_HALF"] = 10;
        values[valuesById[11] = "PENALTY_SHOOTOUT_BREAK"] = 11;
        values[valuesById[12] = "PENALTY_SHOOTOUT"] = 12;
        values[valuesById[13] = "POST_GAME"] = 13;
        return values;
    })();

    /**
     * Command enum.
     * @name SSL_Referee.Command
     * @enum {string}
     * @property {number} HALT=0 HALT value
     * @property {number} STOP=1 STOP value
     * @property {number} NORMAL_START=2 NORMAL_START value
     * @property {number} FORCE_START=3 FORCE_START value
     * @property {number} PREPARE_KICKOFF_YELLOW=4 PREPARE_KICKOFF_YELLOW value
     * @property {number} PREPARE_KICKOFF_BLUE=5 PREPARE_KICKOFF_BLUE value
     * @property {number} PREPARE_PENALTY_YELLOW=6 PREPARE_PENALTY_YELLOW value
     * @property {number} PREPARE_PENALTY_BLUE=7 PREPARE_PENALTY_BLUE value
     * @property {number} DIRECT_FREE_YELLOW=8 DIRECT_FREE_YELLOW value
     * @property {number} DIRECT_FREE_BLUE=9 DIRECT_FREE_BLUE value
     * @property {number} INDIRECT_FREE_YELLOW=10 INDIRECT_FREE_YELLOW value
     * @property {number} INDIRECT_FREE_BLUE=11 INDIRECT_FREE_BLUE value
     * @property {number} TIMEOUT_YELLOW=12 TIMEOUT_YELLOW value
     * @property {number} TIMEOUT_BLUE=13 TIMEOUT_BLUE value
     * @property {number} GOAL_YELLOW=14 GOAL_YELLOW value
     * @property {number} GOAL_BLUE=15 GOAL_BLUE value
     * @property {number} BALL_PLACEMENT_YELLOW=16 BALL_PLACEMENT_YELLOW value
     * @property {number} BALL_PLACEMENT_BLUE=17 BALL_PLACEMENT_BLUE value
     */
    SSL_Referee.Command = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HALT"] = 0;
        values[valuesById[1] = "STOP"] = 1;
        values[valuesById[2] = "NORMAL_START"] = 2;
        values[valuesById[3] = "FORCE_START"] = 3;
        values[valuesById[4] = "PREPARE_KICKOFF_YELLOW"] = 4;
        values[valuesById[5] = "PREPARE_KICKOFF_BLUE"] = 5;
        values[valuesById[6] = "PREPARE_PENALTY_YELLOW"] = 6;
        values[valuesById[7] = "PREPARE_PENALTY_BLUE"] = 7;
        values[valuesById[8] = "DIRECT_FREE_YELLOW"] = 8;
        values[valuesById[9] = "DIRECT_FREE_BLUE"] = 9;
        values[valuesById[10] = "INDIRECT_FREE_YELLOW"] = 10;
        values[valuesById[11] = "INDIRECT_FREE_BLUE"] = 11;
        values[valuesById[12] = "TIMEOUT_YELLOW"] = 12;
        values[valuesById[13] = "TIMEOUT_BLUE"] = 13;
        values[valuesById[14] = "GOAL_YELLOW"] = 14;
        values[valuesById[15] = "GOAL_BLUE"] = 15;
        values[valuesById[16] = "BALL_PLACEMENT_YELLOW"] = 16;
        values[valuesById[17] = "BALL_PLACEMENT_BLUE"] = 17;
        return values;
    })();

    SSL_Referee.TeamInfo = (function() {

        /**
         * Properties of a TeamInfo.
         * @memberof SSL_Referee
         * @interface ITeamInfo
         * @property {string} name TeamInfo name
         * @property {number} score TeamInfo score
         * @property {number} redCards TeamInfo redCards
         * @property {Array.<number>|null} [yellowCardTimes] TeamInfo yellowCardTimes
         * @property {number} yellowCards TeamInfo yellowCards
         * @property {number} timeouts TeamInfo timeouts
         * @property {number} timeoutTime TeamInfo timeoutTime
         * @property {number} goalie TeamInfo goalie
         */

        /**
         * Constructs a new TeamInfo.
         * @memberof SSL_Referee
         * @classdesc Represents a TeamInfo.
         * @implements ITeamInfo
         * @constructor
         * @param {SSL_Referee.ITeamInfo=} [properties] Properties to set
         */
        function TeamInfo(properties) {
            this.yellowCardTimes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamInfo name.
         * @member {string} name
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.name = "";

        /**
         * TeamInfo score.
         * @member {number} score
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.score = 0;

        /**
         * TeamInfo redCards.
         * @member {number} redCards
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.redCards = 0;

        /**
         * TeamInfo yellowCardTimes.
         * @member {Array.<number>} yellowCardTimes
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.yellowCardTimes = $util.emptyArray;

        /**
         * TeamInfo yellowCards.
         * @member {number} yellowCards
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.yellowCards = 0;

        /**
         * TeamInfo timeouts.
         * @member {number} timeouts
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.timeouts = 0;

        /**
         * TeamInfo timeoutTime.
         * @member {number} timeoutTime
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.timeoutTime = 0;

        /**
         * TeamInfo goalie.
         * @member {number} goalie
         * @memberof SSL_Referee.TeamInfo
         * @instance
         */
        TeamInfo.prototype.goalie = 0;

        /**
         * Creates a new TeamInfo instance using the specified properties.
         * @function create
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {SSL_Referee.ITeamInfo=} [properties] Properties to set
         * @returns {SSL_Referee.TeamInfo} TeamInfo instance
         */
        TeamInfo.create = function create(properties) {
            return new TeamInfo(properties);
        };

        /**
         * Encodes the specified TeamInfo message. Does not implicitly {@link SSL_Referee.TeamInfo.verify|verify} messages.
         * @function encode
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {SSL_Referee.ITeamInfo} message TeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.score);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.redCards);
            if (message.yellowCardTimes != null && message.yellowCardTimes.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.yellowCardTimes.length; ++i)
                    writer.uint32(message.yellowCardTimes[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.yellowCards);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.timeouts);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.timeoutTime);
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.goalie);
            return writer;
        };

        /**
         * Encodes the specified TeamInfo message, length delimited. Does not implicitly {@link SSL_Referee.TeamInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {SSL_Referee.ITeamInfo} message TeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamInfo message from the specified reader or buffer.
         * @function decode
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SSL_Referee.TeamInfo} TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Referee.TeamInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.score = reader.uint32();
                    break;
                case 3:
                    message.redCards = reader.uint32();
                    break;
                case 4:
                    if (!(message.yellowCardTimes && message.yellowCardTimes.length))
                        message.yellowCardTimes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.yellowCardTimes.push(reader.uint32());
                    } else
                        message.yellowCardTimes.push(reader.uint32());
                    break;
                case 5:
                    message.yellowCards = reader.uint32();
                    break;
                case 6:
                    message.timeouts = reader.uint32();
                    break;
                case 7:
                    message.timeoutTime = reader.uint32();
                    break;
                case 8:
                    message.goalie = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("score"))
                throw $util.ProtocolError("missing required 'score'", { instance: message });
            if (!message.hasOwnProperty("redCards"))
                throw $util.ProtocolError("missing required 'redCards'", { instance: message });
            if (!message.hasOwnProperty("yellowCards"))
                throw $util.ProtocolError("missing required 'yellowCards'", { instance: message });
            if (!message.hasOwnProperty("timeouts"))
                throw $util.ProtocolError("missing required 'timeouts'", { instance: message });
            if (!message.hasOwnProperty("timeoutTime"))
                throw $util.ProtocolError("missing required 'timeoutTime'", { instance: message });
            if (!message.hasOwnProperty("goalie"))
                throw $util.ProtocolError("missing required 'goalie'", { instance: message });
            return message;
        };

        /**
         * Decodes a TeamInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SSL_Referee.TeamInfo} TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamInfo message.
         * @function verify
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.score))
                return "score: integer expected";
            if (!$util.isInteger(message.redCards))
                return "redCards: integer expected";
            if (message.yellowCardTimes != null && message.hasOwnProperty("yellowCardTimes")) {
                if (!Array.isArray(message.yellowCardTimes))
                    return "yellowCardTimes: array expected";
                for (var i = 0; i < message.yellowCardTimes.length; ++i)
                    if (!$util.isInteger(message.yellowCardTimes[i]))
                        return "yellowCardTimes: integer[] expected";
            }
            if (!$util.isInteger(message.yellowCards))
                return "yellowCards: integer expected";
            if (!$util.isInteger(message.timeouts))
                return "timeouts: integer expected";
            if (!$util.isInteger(message.timeoutTime))
                return "timeoutTime: integer expected";
            if (!$util.isInteger(message.goalie))
                return "goalie: integer expected";
            return null;
        };

        /**
         * Creates a TeamInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SSL_Referee.TeamInfo} TeamInfo
         */
        TeamInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.SSL_Referee.TeamInfo)
                return object;
            var message = new $root.SSL_Referee.TeamInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.score != null)
                message.score = object.score >>> 0;
            if (object.redCards != null)
                message.redCards = object.redCards >>> 0;
            if (object.yellowCardTimes) {
                if (!Array.isArray(object.yellowCardTimes))
                    throw TypeError(".SSL_Referee.TeamInfo.yellowCardTimes: array expected");
                message.yellowCardTimes = [];
                for (var i = 0; i < object.yellowCardTimes.length; ++i)
                    message.yellowCardTimes[i] = object.yellowCardTimes[i] >>> 0;
            }
            if (object.yellowCards != null)
                message.yellowCards = object.yellowCards >>> 0;
            if (object.timeouts != null)
                message.timeouts = object.timeouts >>> 0;
            if (object.timeoutTime != null)
                message.timeoutTime = object.timeoutTime >>> 0;
            if (object.goalie != null)
                message.goalie = object.goalie >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SSL_Referee.TeamInfo
         * @static
         * @param {SSL_Referee.TeamInfo} message TeamInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.yellowCardTimes = [];
            if (options.defaults) {
                object.name = "";
                object.score = 0;
                object.redCards = 0;
                object.yellowCards = 0;
                object.timeouts = 0;
                object.timeoutTime = 0;
                object.goalie = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.redCards != null && message.hasOwnProperty("redCards"))
                object.redCards = message.redCards;
            if (message.yellowCardTimes && message.yellowCardTimes.length) {
                object.yellowCardTimes = [];
                for (var j = 0; j < message.yellowCardTimes.length; ++j)
                    object.yellowCardTimes[j] = message.yellowCardTimes[j];
            }
            if (message.yellowCards != null && message.hasOwnProperty("yellowCards"))
                object.yellowCards = message.yellowCards;
            if (message.timeouts != null && message.hasOwnProperty("timeouts"))
                object.timeouts = message.timeouts;
            if (message.timeoutTime != null && message.hasOwnProperty("timeoutTime"))
                object.timeoutTime = message.timeoutTime;
            if (message.goalie != null && message.hasOwnProperty("goalie"))
                object.goalie = message.goalie;
            return object;
        };

        /**
         * Converts this TeamInfo to JSON.
         * @function toJSON
         * @memberof SSL_Referee.TeamInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamInfo;
    })();

    SSL_Referee.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof SSL_Referee
         * @interface IPoint
         * @property {number} x Point x
         * @property {number} y Point y
         */

        /**
         * Constructs a new Point.
         * @memberof SSL_Referee
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {SSL_Referee.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number} x
         * @memberof SSL_Referee.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof SSL_Referee.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof SSL_Referee.Point
         * @static
         * @param {SSL_Referee.IPoint=} [properties] Properties to set
         * @returns {SSL_Referee.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link SSL_Referee.Point.verify|verify} messages.
         * @function encode
         * @memberof SSL_Referee.Point
         * @static
         * @param {SSL_Referee.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link SSL_Referee.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SSL_Referee.Point
         * @static
         * @param {SSL_Referee.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof SSL_Referee.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SSL_Referee.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Referee.Point();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SSL_Referee.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SSL_Referee.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof SSL_Referee.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SSL_Referee.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SSL_Referee.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.SSL_Referee.Point)
                return object;
            var message = new $root.SSL_Referee.Point();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SSL_Referee.Point
         * @static
         * @param {SSL_Referee.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof SSL_Referee.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    return SSL_Referee;
})();

$root.SSL_Referee_Game_Event = (function() {

    /**
     * Properties of a SSL_Referee_Game_Event.
     * @exports ISSL_Referee_Game_Event
     * @interface ISSL_Referee_Game_Event
     * @property {SSL_Referee_Game_Event.GameEventType} gameEventType SSL_Referee_Game_Event gameEventType
     * @property {SSL_Referee_Game_Event.IOriginator|null} [originator] SSL_Referee_Game_Event originator
     * @property {string|null} [message] SSL_Referee_Game_Event message
     */

    /**
     * Constructs a new SSL_Referee_Game_Event.
     * @exports SSL_Referee_Game_Event
     * @classdesc Represents a SSL_Referee_Game_Event.
     * @implements ISSL_Referee_Game_Event
     * @constructor
     * @param {ISSL_Referee_Game_Event=} [properties] Properties to set
     */
    function SSL_Referee_Game_Event(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SSL_Referee_Game_Event gameEventType.
     * @member {SSL_Referee_Game_Event.GameEventType} gameEventType
     * @memberof SSL_Referee_Game_Event
     * @instance
     */
    SSL_Referee_Game_Event.prototype.gameEventType = 0;

    /**
     * SSL_Referee_Game_Event originator.
     * @member {SSL_Referee_Game_Event.IOriginator|null|undefined} originator
     * @memberof SSL_Referee_Game_Event
     * @instance
     */
    SSL_Referee_Game_Event.prototype.originator = null;

    /**
     * SSL_Referee_Game_Event message.
     * @member {string} message
     * @memberof SSL_Referee_Game_Event
     * @instance
     */
    SSL_Referee_Game_Event.prototype.message = "";

    /**
     * Creates a new SSL_Referee_Game_Event instance using the specified properties.
     * @function create
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {ISSL_Referee_Game_Event=} [properties] Properties to set
     * @returns {SSL_Referee_Game_Event} SSL_Referee_Game_Event instance
     */
    SSL_Referee_Game_Event.create = function create(properties) {
        return new SSL_Referee_Game_Event(properties);
    };

    /**
     * Encodes the specified SSL_Referee_Game_Event message. Does not implicitly {@link SSL_Referee_Game_Event.verify|verify} messages.
     * @function encode
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {ISSL_Referee_Game_Event} message SSL_Referee_Game_Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SSL_Referee_Game_Event.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameEventType);
        if (message.originator != null && message.hasOwnProperty("originator"))
            $root.SSL_Referee_Game_Event.Originator.encode(message.originator, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.message != null && message.hasOwnProperty("message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified SSL_Referee_Game_Event message, length delimited. Does not implicitly {@link SSL_Referee_Game_Event.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {ISSL_Referee_Game_Event} message SSL_Referee_Game_Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SSL_Referee_Game_Event.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SSL_Referee_Game_Event message from the specified reader or buffer.
     * @function decode
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SSL_Referee_Game_Event} SSL_Referee_Game_Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SSL_Referee_Game_Event.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Referee_Game_Event();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameEventType = reader.int32();
                break;
            case 2:
                message.originator = $root.SSL_Referee_Game_Event.Originator.decode(reader, reader.uint32());
                break;
            case 3:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("gameEventType"))
            throw $util.ProtocolError("missing required 'gameEventType'", { instance: message });
        return message;
    };

    /**
     * Decodes a SSL_Referee_Game_Event message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SSL_Referee_Game_Event} SSL_Referee_Game_Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SSL_Referee_Game_Event.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SSL_Referee_Game_Event message.
     * @function verify
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SSL_Referee_Game_Event.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.gameEventType) {
        default:
            return "gameEventType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            break;
        }
        if (message.originator != null && message.hasOwnProperty("originator")) {
            var error = $root.SSL_Referee_Game_Event.Originator.verify(message.originator);
            if (error)
                return "originator." + error;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a SSL_Referee_Game_Event message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SSL_Referee_Game_Event} SSL_Referee_Game_Event
     */
    SSL_Referee_Game_Event.fromObject = function fromObject(object) {
        if (object instanceof $root.SSL_Referee_Game_Event)
            return object;
        var message = new $root.SSL_Referee_Game_Event();
        switch (object.gameEventType) {
        case "UNKNOWN":
        case 0:
            message.gameEventType = 0;
            break;
        case "CUSTOM":
        case 1:
            message.gameEventType = 1;
            break;
        case "NUMBER_OF_PLAYERS":
        case 2:
            message.gameEventType = 2;
            break;
        case "BALL_LEFT_FIELD":
        case 3:
            message.gameEventType = 3;
            break;
        case "GOAL":
        case 4:
            message.gameEventType = 4;
            break;
        case "KICK_TIMEOUT":
        case 5:
            message.gameEventType = 5;
            break;
        case "NO_PROGRESS_IN_GAME":
        case 6:
            message.gameEventType = 6;
            break;
        case "BOT_COLLISION":
        case 7:
            message.gameEventType = 7;
            break;
        case "MULTIPLE_DEFENDER":
        case 8:
            message.gameEventType = 8;
            break;
        case "MULTIPLE_DEFENDER_PARTIALLY":
        case 9:
            message.gameEventType = 9;
            break;
        case "ATTACKER_IN_DEFENSE_AREA":
        case 10:
            message.gameEventType = 10;
            break;
        case "ICING":
        case 11:
            message.gameEventType = 11;
            break;
        case "BALL_SPEED":
        case 12:
            message.gameEventType = 12;
            break;
        case "ROBOT_STOP_SPEED":
        case 13:
            message.gameEventType = 13;
            break;
        case "BALL_DRIBBLING":
        case 14:
            message.gameEventType = 14;
            break;
        case "ATTACKER_TOUCH_KEEPER":
        case 15:
            message.gameEventType = 15;
            break;
        case "DOUBLE_TOUCH":
        case 16:
            message.gameEventType = 16;
            break;
        case "ATTACKER_TO_DEFENCE_AREA":
        case 17:
            message.gameEventType = 17;
            break;
        case "DEFENDER_TO_KICK_POINT_DISTANCE":
        case 18:
            message.gameEventType = 18;
            break;
        case "BALL_HOLDING":
        case 19:
            message.gameEventType = 19;
            break;
        case "INDIRECT_GOAL":
        case 20:
            message.gameEventType = 20;
            break;
        case "BALL_PLACEMENT_FAILED":
        case 21:
            message.gameEventType = 21;
            break;
        case "CHIP_ON_GOAL":
        case 22:
            message.gameEventType = 22;
            break;
        }
        if (object.originator != null) {
            if (typeof object.originator !== "object")
                throw TypeError(".SSL_Referee_Game_Event.originator: object expected");
            message.originator = $root.SSL_Referee_Game_Event.Originator.fromObject(object.originator);
        }
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a SSL_Referee_Game_Event message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SSL_Referee_Game_Event
     * @static
     * @param {SSL_Referee_Game_Event} message SSL_Referee_Game_Event
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SSL_Referee_Game_Event.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.gameEventType = options.enums === String ? "UNKNOWN" : 0;
            object.originator = null;
            object.message = "";
        }
        if (message.gameEventType != null && message.hasOwnProperty("gameEventType"))
            object.gameEventType = options.enums === String ? $root.SSL_Referee_Game_Event.GameEventType[message.gameEventType] : message.gameEventType;
        if (message.originator != null && message.hasOwnProperty("originator"))
            object.originator = $root.SSL_Referee_Game_Event.Originator.toObject(message.originator, options);
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this SSL_Referee_Game_Event to JSON.
     * @function toJSON
     * @memberof SSL_Referee_Game_Event
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SSL_Referee_Game_Event.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * GameEventType enum.
     * @name SSL_Referee_Game_Event.GameEventType
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} CUSTOM=1 CUSTOM value
     * @property {number} NUMBER_OF_PLAYERS=2 NUMBER_OF_PLAYERS value
     * @property {number} BALL_LEFT_FIELD=3 BALL_LEFT_FIELD value
     * @property {number} GOAL=4 GOAL value
     * @property {number} KICK_TIMEOUT=5 KICK_TIMEOUT value
     * @property {number} NO_PROGRESS_IN_GAME=6 NO_PROGRESS_IN_GAME value
     * @property {number} BOT_COLLISION=7 BOT_COLLISION value
     * @property {number} MULTIPLE_DEFENDER=8 MULTIPLE_DEFENDER value
     * @property {number} MULTIPLE_DEFENDER_PARTIALLY=9 MULTIPLE_DEFENDER_PARTIALLY value
     * @property {number} ATTACKER_IN_DEFENSE_AREA=10 ATTACKER_IN_DEFENSE_AREA value
     * @property {number} ICING=11 ICING value
     * @property {number} BALL_SPEED=12 BALL_SPEED value
     * @property {number} ROBOT_STOP_SPEED=13 ROBOT_STOP_SPEED value
     * @property {number} BALL_DRIBBLING=14 BALL_DRIBBLING value
     * @property {number} ATTACKER_TOUCH_KEEPER=15 ATTACKER_TOUCH_KEEPER value
     * @property {number} DOUBLE_TOUCH=16 DOUBLE_TOUCH value
     * @property {number} ATTACKER_TO_DEFENCE_AREA=17 ATTACKER_TO_DEFENCE_AREA value
     * @property {number} DEFENDER_TO_KICK_POINT_DISTANCE=18 DEFENDER_TO_KICK_POINT_DISTANCE value
     * @property {number} BALL_HOLDING=19 BALL_HOLDING value
     * @property {number} INDIRECT_GOAL=20 INDIRECT_GOAL value
     * @property {number} BALL_PLACEMENT_FAILED=21 BALL_PLACEMENT_FAILED value
     * @property {number} CHIP_ON_GOAL=22 CHIP_ON_GOAL value
     */
    SSL_Referee_Game_Event.GameEventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "CUSTOM"] = 1;
        values[valuesById[2] = "NUMBER_OF_PLAYERS"] = 2;
        values[valuesById[3] = "BALL_LEFT_FIELD"] = 3;
        values[valuesById[4] = "GOAL"] = 4;
        values[valuesById[5] = "KICK_TIMEOUT"] = 5;
        values[valuesById[6] = "NO_PROGRESS_IN_GAME"] = 6;
        values[valuesById[7] = "BOT_COLLISION"] = 7;
        values[valuesById[8] = "MULTIPLE_DEFENDER"] = 8;
        values[valuesById[9] = "MULTIPLE_DEFENDER_PARTIALLY"] = 9;
        values[valuesById[10] = "ATTACKER_IN_DEFENSE_AREA"] = 10;
        values[valuesById[11] = "ICING"] = 11;
        values[valuesById[12] = "BALL_SPEED"] = 12;
        values[valuesById[13] = "ROBOT_STOP_SPEED"] = 13;
        values[valuesById[14] = "BALL_DRIBBLING"] = 14;
        values[valuesById[15] = "ATTACKER_TOUCH_KEEPER"] = 15;
        values[valuesById[16] = "DOUBLE_TOUCH"] = 16;
        values[valuesById[17] = "ATTACKER_TO_DEFENCE_AREA"] = 17;
        values[valuesById[18] = "DEFENDER_TO_KICK_POINT_DISTANCE"] = 18;
        values[valuesById[19] = "BALL_HOLDING"] = 19;
        values[valuesById[20] = "INDIRECT_GOAL"] = 20;
        values[valuesById[21] = "BALL_PLACEMENT_FAILED"] = 21;
        values[valuesById[22] = "CHIP_ON_GOAL"] = 22;
        return values;
    })();

    /**
     * Team enum.
     * @name SSL_Referee_Game_Event.Team
     * @enum {string}
     * @property {number} TEAM_UNKNOWN=0 TEAM_UNKNOWN value
     * @property {number} TEAM_YELLOW=1 TEAM_YELLOW value
     * @property {number} TEAM_BLUE=2 TEAM_BLUE value
     */
    SSL_Referee_Game_Event.Team = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TEAM_UNKNOWN"] = 0;
        values[valuesById[1] = "TEAM_YELLOW"] = 1;
        values[valuesById[2] = "TEAM_BLUE"] = 2;
        return values;
    })();

    SSL_Referee_Game_Event.Originator = (function() {

        /**
         * Properties of an Originator.
         * @memberof SSL_Referee_Game_Event
         * @interface IOriginator
         * @property {SSL_Referee_Game_Event.Team} team Originator team
         * @property {number|null} [botId] Originator botId
         */

        /**
         * Constructs a new Originator.
         * @memberof SSL_Referee_Game_Event
         * @classdesc Represents an Originator.
         * @implements IOriginator
         * @constructor
         * @param {SSL_Referee_Game_Event.IOriginator=} [properties] Properties to set
         */
        function Originator(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Originator team.
         * @member {SSL_Referee_Game_Event.Team} team
         * @memberof SSL_Referee_Game_Event.Originator
         * @instance
         */
        Originator.prototype.team = 0;

        /**
         * Originator botId.
         * @member {number} botId
         * @memberof SSL_Referee_Game_Event.Originator
         * @instance
         */
        Originator.prototype.botId = 0;

        /**
         * Creates a new Originator instance using the specified properties.
         * @function create
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {SSL_Referee_Game_Event.IOriginator=} [properties] Properties to set
         * @returns {SSL_Referee_Game_Event.Originator} Originator instance
         */
        Originator.create = function create(properties) {
            return new Originator(properties);
        };

        /**
         * Encodes the specified Originator message. Does not implicitly {@link SSL_Referee_Game_Event.Originator.verify|verify} messages.
         * @function encode
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {SSL_Referee_Game_Event.IOriginator} message Originator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Originator.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.team);
            if (message.botId != null && message.hasOwnProperty("botId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.botId);
            return writer;
        };

        /**
         * Encodes the specified Originator message, length delimited. Does not implicitly {@link SSL_Referee_Game_Event.Originator.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {SSL_Referee_Game_Event.IOriginator} message Originator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Originator.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Originator message from the specified reader or buffer.
         * @function decode
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SSL_Referee_Game_Event.Originator} Originator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Originator.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Referee_Game_Event.Originator();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team = reader.int32();
                    break;
                case 2:
                    message.botId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("team"))
                throw $util.ProtocolError("missing required 'team'", { instance: message });
            return message;
        };

        /**
         * Decodes an Originator message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SSL_Referee_Game_Event.Originator} Originator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Originator.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Originator message.
         * @function verify
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Originator.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.team) {
            default:
                return "team: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId))
                    return "botId: integer expected";
            return null;
        };

        /**
         * Creates an Originator message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SSL_Referee_Game_Event.Originator} Originator
         */
        Originator.fromObject = function fromObject(object) {
            if (object instanceof $root.SSL_Referee_Game_Event.Originator)
                return object;
            var message = new $root.SSL_Referee_Game_Event.Originator();
            switch (object.team) {
            case "TEAM_UNKNOWN":
            case 0:
                message.team = 0;
                break;
            case "TEAM_YELLOW":
            case 1:
                message.team = 1;
                break;
            case "TEAM_BLUE":
            case 2:
                message.team = 2;
                break;
            }
            if (object.botId != null)
                message.botId = object.botId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Originator message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SSL_Referee_Game_Event.Originator
         * @static
         * @param {SSL_Referee_Game_Event.Originator} message Originator
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Originator.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.team = options.enums === String ? "TEAM_UNKNOWN" : 0;
                object.botId = 0;
            }
            if (message.team != null && message.hasOwnProperty("team"))
                object.team = options.enums === String ? $root.SSL_Referee_Game_Event.Team[message.team] : message.team;
            if (message.botId != null && message.hasOwnProperty("botId"))
                object.botId = message.botId;
            return object;
        };

        /**
         * Converts this Originator to JSON.
         * @function toJSON
         * @memberof SSL_Referee_Game_Event.Originator
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Originator.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Originator;
    })();

    return SSL_Referee_Game_Event;
})();

module.exports = $root;
