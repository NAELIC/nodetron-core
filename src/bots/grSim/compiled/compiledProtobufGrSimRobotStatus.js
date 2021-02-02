/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Robots_Status = (function() {

    /**
     * Properties of a Robots_Status.
     * @exports IRobots_Status
     * @interface IRobots_Status
     * @property {Array.<IRobot_Status>|null} [robotsStatus] Robots_Status robotsStatus
     */

    /**
     * Constructs a new Robots_Status.
     * @exports Robots_Status
     * @classdesc Represents a Robots_Status.
     * @implements IRobots_Status
     * @constructor
     * @param {IRobots_Status=} [properties] Properties to set
     */
    function Robots_Status(properties) {
        this.robotsStatus = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Robots_Status robotsStatus.
     * @member {Array.<IRobot_Status>} robotsStatus
     * @memberof Robots_Status
     * @instance
     */
    Robots_Status.prototype.robotsStatus = $util.emptyArray;

    /**
     * Creates a new Robots_Status instance using the specified properties.
     * @function create
     * @memberof Robots_Status
     * @static
     * @param {IRobots_Status=} [properties] Properties to set
     * @returns {Robots_Status} Robots_Status instance
     */
    Robots_Status.create = function create(properties) {
        return new Robots_Status(properties);
    };

    /**
     * Encodes the specified Robots_Status message. Does not implicitly {@link Robots_Status.verify|verify} messages.
     * @function encode
     * @memberof Robots_Status
     * @static
     * @param {IRobots_Status} message Robots_Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Robots_Status.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.robotsStatus != null && message.robotsStatus.length)
            for (var i = 0; i < message.robotsStatus.length; ++i)
                $root.Robot_Status.encode(message.robotsStatus[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Robots_Status message, length delimited. Does not implicitly {@link Robots_Status.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Robots_Status
     * @static
     * @param {IRobots_Status} message Robots_Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Robots_Status.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Robots_Status message from the specified reader or buffer.
     * @function decode
     * @memberof Robots_Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Robots_Status} Robots_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Robots_Status.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Robots_Status();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.robotsStatus && message.robotsStatus.length))
                    message.robotsStatus = [];
                message.robotsStatus.push($root.Robot_Status.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Robots_Status message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Robots_Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Robots_Status} Robots_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Robots_Status.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Robots_Status message.
     * @function verify
     * @memberof Robots_Status
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Robots_Status.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.robotsStatus != null && message.hasOwnProperty("robotsStatus")) {
            if (!Array.isArray(message.robotsStatus))
                return "robotsStatus: array expected";
            for (var i = 0; i < message.robotsStatus.length; ++i) {
                var error = $root.Robot_Status.verify(message.robotsStatus[i]);
                if (error)
                    return "robotsStatus." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Robots_Status message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Robots_Status
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Robots_Status} Robots_Status
     */
    Robots_Status.fromObject = function fromObject(object) {
        if (object instanceof $root.Robots_Status)
            return object;
        var message = new $root.Robots_Status();
        if (object.robotsStatus) {
            if (!Array.isArray(object.robotsStatus))
                throw TypeError(".Robots_Status.robotsStatus: array expected");
            message.robotsStatus = [];
            for (var i = 0; i < object.robotsStatus.length; ++i) {
                if (typeof object.robotsStatus[i] !== "object")
                    throw TypeError(".Robots_Status.robotsStatus: object expected");
                message.robotsStatus[i] = $root.Robot_Status.fromObject(object.robotsStatus[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Robots_Status message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Robots_Status
     * @static
     * @param {Robots_Status} message Robots_Status
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Robots_Status.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.robotsStatus = [];
        if (message.robotsStatus && message.robotsStatus.length) {
            object.robotsStatus = [];
            for (var j = 0; j < message.robotsStatus.length; ++j)
                object.robotsStatus[j] = $root.Robot_Status.toObject(message.robotsStatus[j], options);
        }
        return object;
    };

    /**
     * Converts this Robots_Status to JSON.
     * @function toJSON
     * @memberof Robots_Status
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Robots_Status.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Robots_Status;
})();

$root.Robot_Status = (function() {

    /**
     * Properties of a Robot_Status.
     * @exports IRobot_Status
     * @interface IRobot_Status
     * @property {number} robotId Robot_Status robotId
     * @property {boolean} infrared Robot_Status infrared
     * @property {boolean} flatKick Robot_Status flatKick
     * @property {boolean} chipKick Robot_Status chipKick
     */

    /**
     * Constructs a new Robot_Status.
     * @exports Robot_Status
     * @classdesc Represents a Robot_Status.
     * @implements IRobot_Status
     * @constructor
     * @param {IRobot_Status=} [properties] Properties to set
     */
    function Robot_Status(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Robot_Status robotId.
     * @member {number} robotId
     * @memberof Robot_Status
     * @instance
     */
    Robot_Status.prototype.robotId = 0;

    /**
     * Robot_Status infrared.
     * @member {boolean} infrared
     * @memberof Robot_Status
     * @instance
     */
    Robot_Status.prototype.infrared = false;

    /**
     * Robot_Status flatKick.
     * @member {boolean} flatKick
     * @memberof Robot_Status
     * @instance
     */
    Robot_Status.prototype.flatKick = false;

    /**
     * Robot_Status chipKick.
     * @member {boolean} chipKick
     * @memberof Robot_Status
     * @instance
     */
    Robot_Status.prototype.chipKick = false;

    /**
     * Creates a new Robot_Status instance using the specified properties.
     * @function create
     * @memberof Robot_Status
     * @static
     * @param {IRobot_Status=} [properties] Properties to set
     * @returns {Robot_Status} Robot_Status instance
     */
    Robot_Status.create = function create(properties) {
        return new Robot_Status(properties);
    };

    /**
     * Encodes the specified Robot_Status message. Does not implicitly {@link Robot_Status.verify|verify} messages.
     * @function encode
     * @memberof Robot_Status
     * @static
     * @param {IRobot_Status} message Robot_Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Robot_Status.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.robotId);
        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.infrared);
        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.flatKick);
        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.chipKick);
        return writer;
    };

    /**
     * Encodes the specified Robot_Status message, length delimited. Does not implicitly {@link Robot_Status.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Robot_Status
     * @static
     * @param {IRobot_Status} message Robot_Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Robot_Status.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Robot_Status message from the specified reader or buffer.
     * @function decode
     * @memberof Robot_Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Robot_Status} Robot_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Robot_Status.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Robot_Status();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.robotId = reader.int32();
                break;
            case 2:
                message.infrared = reader.bool();
                break;
            case 3:
                message.flatKick = reader.bool();
                break;
            case 4:
                message.chipKick = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("robotId"))
            throw $util.ProtocolError("missing required 'robotId'", { instance: message });
        if (!message.hasOwnProperty("infrared"))
            throw $util.ProtocolError("missing required 'infrared'", { instance: message });
        if (!message.hasOwnProperty("flatKick"))
            throw $util.ProtocolError("missing required 'flatKick'", { instance: message });
        if (!message.hasOwnProperty("chipKick"))
            throw $util.ProtocolError("missing required 'chipKick'", { instance: message });
        return message;
    };

    /**
     * Decodes a Robot_Status message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Robot_Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Robot_Status} Robot_Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Robot_Status.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Robot_Status message.
     * @function verify
     * @memberof Robot_Status
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Robot_Status.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.robotId))
            return "robotId: integer expected";
        if (typeof message.infrared !== "boolean")
            return "infrared: boolean expected";
        if (typeof message.flatKick !== "boolean")
            return "flatKick: boolean expected";
        if (typeof message.chipKick !== "boolean")
            return "chipKick: boolean expected";
        return null;
    };

    /**
     * Creates a Robot_Status message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Robot_Status
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Robot_Status} Robot_Status
     */
    Robot_Status.fromObject = function fromObject(object) {
        if (object instanceof $root.Robot_Status)
            return object;
        var message = new $root.Robot_Status();
        if (object.robotId != null)
            message.robotId = object.robotId | 0;
        if (object.infrared != null)
            message.infrared = Boolean(object.infrared);
        if (object.flatKick != null)
            message.flatKick = Boolean(object.flatKick);
        if (object.chipKick != null)
            message.chipKick = Boolean(object.chipKick);
        return message;
    };

    /**
     * Creates a plain object from a Robot_Status message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Robot_Status
     * @static
     * @param {Robot_Status} message Robot_Status
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Robot_Status.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.robotId = 0;
            object.infrared = false;
            object.flatKick = false;
            object.chipKick = false;
        }
        if (message.robotId != null && message.hasOwnProperty("robotId"))
            object.robotId = message.robotId;
        if (message.infrared != null && message.hasOwnProperty("infrared"))
            object.infrared = message.infrared;
        if (message.flatKick != null && message.hasOwnProperty("flatKick"))
            object.flatKick = message.flatKick;
        if (message.chipKick != null && message.hasOwnProperty("chipKick"))
            object.chipKick = message.chipKick;
        return object;
    };

    /**
     * Converts this Robot_Status to JSON.
     * @function toJSON
     * @memberof Robot_Status
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Robot_Status.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Robot_Status;
})();

module.exports = $root;
