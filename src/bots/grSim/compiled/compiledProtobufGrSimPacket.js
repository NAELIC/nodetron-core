/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.grSim_Packet = (function() {

    /**
     * Properties of a grSim_Packet.
     * @exports IgrSim_Packet
     * @interface IgrSim_Packet
     * @property {IgrSim_Commands|null} [commands] grSim_Packet commands
     * @property {IgrSim_Replacement|null} [replacement] grSim_Packet replacement
     */

    /**
     * Constructs a new grSim_Packet.
     * @exports grSim_Packet
     * @classdesc Represents a grSim_Packet.
     * @implements IgrSim_Packet
     * @constructor
     * @param {IgrSim_Packet=} [properties] Properties to set
     */
    function grSim_Packet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * grSim_Packet commands.
     * @member {IgrSim_Commands|null|undefined} commands
     * @memberof grSim_Packet
     * @instance
     */
    grSim_Packet.prototype.commands = null;

    /**
     * grSim_Packet replacement.
     * @member {IgrSim_Replacement|null|undefined} replacement
     * @memberof grSim_Packet
     * @instance
     */
    grSim_Packet.prototype.replacement = null;

    /**
     * Creates a new grSim_Packet instance using the specified properties.
     * @function create
     * @memberof grSim_Packet
     * @static
     * @param {IgrSim_Packet=} [properties] Properties to set
     * @returns {grSim_Packet} grSim_Packet instance
     */
    grSim_Packet.create = function create(properties) {
        return new grSim_Packet(properties);
    };

    /**
     * Encodes the specified grSim_Packet message. Does not implicitly {@link grSim_Packet.verify|verify} messages.
     * @function encode
     * @memberof grSim_Packet
     * @static
     * @param {IgrSim_Packet} message grSim_Packet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Packet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.commands != null && message.hasOwnProperty("commands"))
            $root.grSim_Commands.encode(message.commands, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.replacement != null && message.hasOwnProperty("replacement"))
            $root.grSim_Replacement.encode(message.replacement, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified grSim_Packet message, length delimited. Does not implicitly {@link grSim_Packet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof grSim_Packet
     * @static
     * @param {IgrSim_Packet} message grSim_Packet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Packet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a grSim_Packet message from the specified reader or buffer.
     * @function decode
     * @memberof grSim_Packet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {grSim_Packet} grSim_Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Packet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grSim_Packet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.commands = $root.grSim_Commands.decode(reader, reader.uint32());
                break;
            case 2:
                message.replacement = $root.grSim_Replacement.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a grSim_Packet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof grSim_Packet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {grSim_Packet} grSim_Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Packet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a grSim_Packet message.
     * @function verify
     * @memberof grSim_Packet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    grSim_Packet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.commands != null && message.hasOwnProperty("commands")) {
            var error = $root.grSim_Commands.verify(message.commands);
            if (error)
                return "commands." + error;
        }
        if (message.replacement != null && message.hasOwnProperty("replacement")) {
            var error = $root.grSim_Replacement.verify(message.replacement);
            if (error)
                return "replacement." + error;
        }
        return null;
    };

    /**
     * Creates a grSim_Packet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof grSim_Packet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {grSim_Packet} grSim_Packet
     */
    grSim_Packet.fromObject = function fromObject(object) {
        if (object instanceof $root.grSim_Packet)
            return object;
        var message = new $root.grSim_Packet();
        if (object.commands != null) {
            if (typeof object.commands !== "object")
                throw TypeError(".grSim_Packet.commands: object expected");
            message.commands = $root.grSim_Commands.fromObject(object.commands);
        }
        if (object.replacement != null) {
            if (typeof object.replacement !== "object")
                throw TypeError(".grSim_Packet.replacement: object expected");
            message.replacement = $root.grSim_Replacement.fromObject(object.replacement);
        }
        return message;
    };

    /**
     * Creates a plain object from a grSim_Packet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof grSim_Packet
     * @static
     * @param {grSim_Packet} message grSim_Packet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    grSim_Packet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.commands = null;
            object.replacement = null;
        }
        if (message.commands != null && message.hasOwnProperty("commands"))
            object.commands = $root.grSim_Commands.toObject(message.commands, options);
        if (message.replacement != null && message.hasOwnProperty("replacement"))
            object.replacement = $root.grSim_Replacement.toObject(message.replacement, options);
        return object;
    };

    /**
     * Converts this grSim_Packet to JSON.
     * @function toJSON
     * @memberof grSim_Packet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    grSim_Packet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return grSim_Packet;
})();

$root.grSim_Robot_Command = (function() {

    /**
     * Properties of a grSim_Robot_Command.
     * @exports IgrSim_Robot_Command
     * @interface IgrSim_Robot_Command
     * @property {number} id grSim_Robot_Command id
     * @property {number} kickspeedx grSim_Robot_Command kickspeedx
     * @property {number} kickspeedz grSim_Robot_Command kickspeedz
     * @property {number} veltangent grSim_Robot_Command veltangent
     * @property {number} velnormal grSim_Robot_Command velnormal
     * @property {number} velangular grSim_Robot_Command velangular
     * @property {boolean} spinner grSim_Robot_Command spinner
     * @property {boolean} wheelsspeed grSim_Robot_Command wheelsspeed
     * @property {number|null} [wheel1] grSim_Robot_Command wheel1
     * @property {number|null} [wheel2] grSim_Robot_Command wheel2
     * @property {number|null} [wheel3] grSim_Robot_Command wheel3
     * @property {number|null} [wheel4] grSim_Robot_Command wheel4
     */

    /**
     * Constructs a new grSim_Robot_Command.
     * @exports grSim_Robot_Command
     * @classdesc Represents a grSim_Robot_Command.
     * @implements IgrSim_Robot_Command
     * @constructor
     * @param {IgrSim_Robot_Command=} [properties] Properties to set
     */
    function grSim_Robot_Command(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * grSim_Robot_Command id.
     * @member {number} id
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.id = 0;

    /**
     * grSim_Robot_Command kickspeedx.
     * @member {number} kickspeedx
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.kickspeedx = 0;

    /**
     * grSim_Robot_Command kickspeedz.
     * @member {number} kickspeedz
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.kickspeedz = 0;

    /**
     * grSim_Robot_Command veltangent.
     * @member {number} veltangent
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.veltangent = 0;

    /**
     * grSim_Robot_Command velnormal.
     * @member {number} velnormal
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.velnormal = 0;

    /**
     * grSim_Robot_Command velangular.
     * @member {number} velangular
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.velangular = 0;

    /**
     * grSim_Robot_Command spinner.
     * @member {boolean} spinner
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.spinner = false;

    /**
     * grSim_Robot_Command wheelsspeed.
     * @member {boolean} wheelsspeed
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.wheelsspeed = false;

    /**
     * grSim_Robot_Command wheel1.
     * @member {number} wheel1
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.wheel1 = 0;

    /**
     * grSim_Robot_Command wheel2.
     * @member {number} wheel2
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.wheel2 = 0;

    /**
     * grSim_Robot_Command wheel3.
     * @member {number} wheel3
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.wheel3 = 0;

    /**
     * grSim_Robot_Command wheel4.
     * @member {number} wheel4
     * @memberof grSim_Robot_Command
     * @instance
     */
    grSim_Robot_Command.prototype.wheel4 = 0;

    /**
     * Creates a new grSim_Robot_Command instance using the specified properties.
     * @function create
     * @memberof grSim_Robot_Command
     * @static
     * @param {IgrSim_Robot_Command=} [properties] Properties to set
     * @returns {grSim_Robot_Command} grSim_Robot_Command instance
     */
    grSim_Robot_Command.create = function create(properties) {
        return new grSim_Robot_Command(properties);
    };

    /**
     * Encodes the specified grSim_Robot_Command message. Does not implicitly {@link grSim_Robot_Command.verify|verify} messages.
     * @function encode
     * @memberof grSim_Robot_Command
     * @static
     * @param {IgrSim_Robot_Command} message grSim_Robot_Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Robot_Command.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        writer.uint32(/* id 2, wireType 5 =*/21).float(message.kickspeedx);
        writer.uint32(/* id 3, wireType 5 =*/29).float(message.kickspeedz);
        writer.uint32(/* id 4, wireType 5 =*/37).float(message.veltangent);
        writer.uint32(/* id 5, wireType 5 =*/45).float(message.velnormal);
        writer.uint32(/* id 6, wireType 5 =*/53).float(message.velangular);
        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.spinner);
        writer.uint32(/* id 8, wireType 0 =*/64).bool(message.wheelsspeed);
        if (message.wheel1 != null && message.hasOwnProperty("wheel1"))
            writer.uint32(/* id 9, wireType 5 =*/77).float(message.wheel1);
        if (message.wheel2 != null && message.hasOwnProperty("wheel2"))
            writer.uint32(/* id 10, wireType 5 =*/85).float(message.wheel2);
        if (message.wheel3 != null && message.hasOwnProperty("wheel3"))
            writer.uint32(/* id 11, wireType 5 =*/93).float(message.wheel3);
        if (message.wheel4 != null && message.hasOwnProperty("wheel4"))
            writer.uint32(/* id 12, wireType 5 =*/101).float(message.wheel4);
        return writer;
    };

    /**
     * Encodes the specified grSim_Robot_Command message, length delimited. Does not implicitly {@link grSim_Robot_Command.verify|verify} messages.
     * @function encodeDelimited
     * @memberof grSim_Robot_Command
     * @static
     * @param {IgrSim_Robot_Command} message grSim_Robot_Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Robot_Command.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a grSim_Robot_Command message from the specified reader or buffer.
     * @function decode
     * @memberof grSim_Robot_Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {grSim_Robot_Command} grSim_Robot_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Robot_Command.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grSim_Robot_Command();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.kickspeedx = reader.float();
                break;
            case 3:
                message.kickspeedz = reader.float();
                break;
            case 4:
                message.veltangent = reader.float();
                break;
            case 5:
                message.velnormal = reader.float();
                break;
            case 6:
                message.velangular = reader.float();
                break;
            case 7:
                message.spinner = reader.bool();
                break;
            case 8:
                message.wheelsspeed = reader.bool();
                break;
            case 9:
                message.wheel1 = reader.float();
                break;
            case 10:
                message.wheel2 = reader.float();
                break;
            case 11:
                message.wheel3 = reader.float();
                break;
            case 12:
                message.wheel4 = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("kickspeedx"))
            throw $util.ProtocolError("missing required 'kickspeedx'", { instance: message });
        if (!message.hasOwnProperty("kickspeedz"))
            throw $util.ProtocolError("missing required 'kickspeedz'", { instance: message });
        if (!message.hasOwnProperty("veltangent"))
            throw $util.ProtocolError("missing required 'veltangent'", { instance: message });
        if (!message.hasOwnProperty("velnormal"))
            throw $util.ProtocolError("missing required 'velnormal'", { instance: message });
        if (!message.hasOwnProperty("velangular"))
            throw $util.ProtocolError("missing required 'velangular'", { instance: message });
        if (!message.hasOwnProperty("spinner"))
            throw $util.ProtocolError("missing required 'spinner'", { instance: message });
        if (!message.hasOwnProperty("wheelsspeed"))
            throw $util.ProtocolError("missing required 'wheelsspeed'", { instance: message });
        return message;
    };

    /**
     * Decodes a grSim_Robot_Command message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof grSim_Robot_Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {grSim_Robot_Command} grSim_Robot_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Robot_Command.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a grSim_Robot_Command message.
     * @function verify
     * @memberof grSim_Robot_Command
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    grSim_Robot_Command.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id))
            return "id: integer expected";
        if (typeof message.kickspeedx !== "number")
            return "kickspeedx: number expected";
        if (typeof message.kickspeedz !== "number")
            return "kickspeedz: number expected";
        if (typeof message.veltangent !== "number")
            return "veltangent: number expected";
        if (typeof message.velnormal !== "number")
            return "velnormal: number expected";
        if (typeof message.velangular !== "number")
            return "velangular: number expected";
        if (typeof message.spinner !== "boolean")
            return "spinner: boolean expected";
        if (typeof message.wheelsspeed !== "boolean")
            return "wheelsspeed: boolean expected";
        if (message.wheel1 != null && message.hasOwnProperty("wheel1"))
            if (typeof message.wheel1 !== "number")
                return "wheel1: number expected";
        if (message.wheel2 != null && message.hasOwnProperty("wheel2"))
            if (typeof message.wheel2 !== "number")
                return "wheel2: number expected";
        if (message.wheel3 != null && message.hasOwnProperty("wheel3"))
            if (typeof message.wheel3 !== "number")
                return "wheel3: number expected";
        if (message.wheel4 != null && message.hasOwnProperty("wheel4"))
            if (typeof message.wheel4 !== "number")
                return "wheel4: number expected";
        return null;
    };

    /**
     * Creates a grSim_Robot_Command message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof grSim_Robot_Command
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {grSim_Robot_Command} grSim_Robot_Command
     */
    grSim_Robot_Command.fromObject = function fromObject(object) {
        if (object instanceof $root.grSim_Robot_Command)
            return object;
        var message = new $root.grSim_Robot_Command();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.kickspeedx != null)
            message.kickspeedx = Number(object.kickspeedx);
        if (object.kickspeedz != null)
            message.kickspeedz = Number(object.kickspeedz);
        if (object.veltangent != null)
            message.veltangent = Number(object.veltangent);
        if (object.velnormal != null)
            message.velnormal = Number(object.velnormal);
        if (object.velangular != null)
            message.velangular = Number(object.velangular);
        if (object.spinner != null)
            message.spinner = Boolean(object.spinner);
        if (object.wheelsspeed != null)
            message.wheelsspeed = Boolean(object.wheelsspeed);
        if (object.wheel1 != null)
            message.wheel1 = Number(object.wheel1);
        if (object.wheel2 != null)
            message.wheel2 = Number(object.wheel2);
        if (object.wheel3 != null)
            message.wheel3 = Number(object.wheel3);
        if (object.wheel4 != null)
            message.wheel4 = Number(object.wheel4);
        return message;
    };

    /**
     * Creates a plain object from a grSim_Robot_Command message. Also converts values to other types if specified.
     * @function toObject
     * @memberof grSim_Robot_Command
     * @static
     * @param {grSim_Robot_Command} message grSim_Robot_Command
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    grSim_Robot_Command.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.kickspeedx = 0;
            object.kickspeedz = 0;
            object.veltangent = 0;
            object.velnormal = 0;
            object.velangular = 0;
            object.spinner = false;
            object.wheelsspeed = false;
            object.wheel1 = 0;
            object.wheel2 = 0;
            object.wheel3 = 0;
            object.wheel4 = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.kickspeedx != null && message.hasOwnProperty("kickspeedx"))
            object.kickspeedx = options.json && !isFinite(message.kickspeedx) ? String(message.kickspeedx) : message.kickspeedx;
        if (message.kickspeedz != null && message.hasOwnProperty("kickspeedz"))
            object.kickspeedz = options.json && !isFinite(message.kickspeedz) ? String(message.kickspeedz) : message.kickspeedz;
        if (message.veltangent != null && message.hasOwnProperty("veltangent"))
            object.veltangent = options.json && !isFinite(message.veltangent) ? String(message.veltangent) : message.veltangent;
        if (message.velnormal != null && message.hasOwnProperty("velnormal"))
            object.velnormal = options.json && !isFinite(message.velnormal) ? String(message.velnormal) : message.velnormal;
        if (message.velangular != null && message.hasOwnProperty("velangular"))
            object.velangular = options.json && !isFinite(message.velangular) ? String(message.velangular) : message.velangular;
        if (message.spinner != null && message.hasOwnProperty("spinner"))
            object.spinner = message.spinner;
        if (message.wheelsspeed != null && message.hasOwnProperty("wheelsspeed"))
            object.wheelsspeed = message.wheelsspeed;
        if (message.wheel1 != null && message.hasOwnProperty("wheel1"))
            object.wheel1 = options.json && !isFinite(message.wheel1) ? String(message.wheel1) : message.wheel1;
        if (message.wheel2 != null && message.hasOwnProperty("wheel2"))
            object.wheel2 = options.json && !isFinite(message.wheel2) ? String(message.wheel2) : message.wheel2;
        if (message.wheel3 != null && message.hasOwnProperty("wheel3"))
            object.wheel3 = options.json && !isFinite(message.wheel3) ? String(message.wheel3) : message.wheel3;
        if (message.wheel4 != null && message.hasOwnProperty("wheel4"))
            object.wheel4 = options.json && !isFinite(message.wheel4) ? String(message.wheel4) : message.wheel4;
        return object;
    };

    /**
     * Converts this grSim_Robot_Command to JSON.
     * @function toJSON
     * @memberof grSim_Robot_Command
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    grSim_Robot_Command.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return grSim_Robot_Command;
})();

$root.grSim_Commands = (function() {

    /**
     * Properties of a grSim_Commands.
     * @exports IgrSim_Commands
     * @interface IgrSim_Commands
     * @property {number} timestamp grSim_Commands timestamp
     * @property {boolean} isteamyellow grSim_Commands isteamyellow
     * @property {Array.<IgrSim_Robot_Command>|null} [robotCommands] grSim_Commands robotCommands
     */

    /**
     * Constructs a new grSim_Commands.
     * @exports grSim_Commands
     * @classdesc Represents a grSim_Commands.
     * @implements IgrSim_Commands
     * @constructor
     * @param {IgrSim_Commands=} [properties] Properties to set
     */
    function grSim_Commands(properties) {
        this.robotCommands = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * grSim_Commands timestamp.
     * @member {number} timestamp
     * @memberof grSim_Commands
     * @instance
     */
    grSim_Commands.prototype.timestamp = 0;

    /**
     * grSim_Commands isteamyellow.
     * @member {boolean} isteamyellow
     * @memberof grSim_Commands
     * @instance
     */
    grSim_Commands.prototype.isteamyellow = false;

    /**
     * grSim_Commands robotCommands.
     * @member {Array.<IgrSim_Robot_Command>} robotCommands
     * @memberof grSim_Commands
     * @instance
     */
    grSim_Commands.prototype.robotCommands = $util.emptyArray;

    /**
     * Creates a new grSim_Commands instance using the specified properties.
     * @function create
     * @memberof grSim_Commands
     * @static
     * @param {IgrSim_Commands=} [properties] Properties to set
     * @returns {grSim_Commands} grSim_Commands instance
     */
    grSim_Commands.create = function create(properties) {
        return new grSim_Commands(properties);
    };

    /**
     * Encodes the specified grSim_Commands message. Does not implicitly {@link grSim_Commands.verify|verify} messages.
     * @function encode
     * @memberof grSim_Commands
     * @static
     * @param {IgrSim_Commands} message grSim_Commands message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Commands.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 1 =*/9).double(message.timestamp);
        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isteamyellow);
        if (message.robotCommands != null && message.robotCommands.length)
            for (var i = 0; i < message.robotCommands.length; ++i)
                $root.grSim_Robot_Command.encode(message.robotCommands[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified grSim_Commands message, length delimited. Does not implicitly {@link grSim_Commands.verify|verify} messages.
     * @function encodeDelimited
     * @memberof grSim_Commands
     * @static
     * @param {IgrSim_Commands} message grSim_Commands message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Commands.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a grSim_Commands message from the specified reader or buffer.
     * @function decode
     * @memberof grSim_Commands
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {grSim_Commands} grSim_Commands
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Commands.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grSim_Commands();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.double();
                break;
            case 2:
                message.isteamyellow = reader.bool();
                break;
            case 3:
                if (!(message.robotCommands && message.robotCommands.length))
                    message.robotCommands = [];
                message.robotCommands.push($root.grSim_Robot_Command.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
        if (!message.hasOwnProperty("isteamyellow"))
            throw $util.ProtocolError("missing required 'isteamyellow'", { instance: message });
        return message;
    };

    /**
     * Decodes a grSim_Commands message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof grSim_Commands
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {grSim_Commands} grSim_Commands
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Commands.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a grSim_Commands message.
     * @function verify
     * @memberof grSim_Commands
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    grSim_Commands.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (typeof message.timestamp !== "number")
            return "timestamp: number expected";
        if (typeof message.isteamyellow !== "boolean")
            return "isteamyellow: boolean expected";
        if (message.robotCommands != null && message.hasOwnProperty("robotCommands")) {
            if (!Array.isArray(message.robotCommands))
                return "robotCommands: array expected";
            for (var i = 0; i < message.robotCommands.length; ++i) {
                var error = $root.grSim_Robot_Command.verify(message.robotCommands[i]);
                if (error)
                    return "robotCommands." + error;
            }
        }
        return null;
    };

    /**
     * Creates a grSim_Commands message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof grSim_Commands
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {grSim_Commands} grSim_Commands
     */
    grSim_Commands.fromObject = function fromObject(object) {
        if (object instanceof $root.grSim_Commands)
            return object;
        var message = new $root.grSim_Commands();
        if (object.timestamp != null)
            message.timestamp = Number(object.timestamp);
        if (object.isteamyellow != null)
            message.isteamyellow = Boolean(object.isteamyellow);
        if (object.robotCommands) {
            if (!Array.isArray(object.robotCommands))
                throw TypeError(".grSim_Commands.robotCommands: array expected");
            message.robotCommands = [];
            for (var i = 0; i < object.robotCommands.length; ++i) {
                if (typeof object.robotCommands[i] !== "object")
                    throw TypeError(".grSim_Commands.robotCommands: object expected");
                message.robotCommands[i] = $root.grSim_Robot_Command.fromObject(object.robotCommands[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a grSim_Commands message. Also converts values to other types if specified.
     * @function toObject
     * @memberof grSim_Commands
     * @static
     * @param {grSim_Commands} message grSim_Commands
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    grSim_Commands.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.robotCommands = [];
        if (options.defaults) {
            object.timestamp = 0;
            object.isteamyellow = false;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = options.json && !isFinite(message.timestamp) ? String(message.timestamp) : message.timestamp;
        if (message.isteamyellow != null && message.hasOwnProperty("isteamyellow"))
            object.isteamyellow = message.isteamyellow;
        if (message.robotCommands && message.robotCommands.length) {
            object.robotCommands = [];
            for (var j = 0; j < message.robotCommands.length; ++j)
                object.robotCommands[j] = $root.grSim_Robot_Command.toObject(message.robotCommands[j], options);
        }
        return object;
    };

    /**
     * Converts this grSim_Commands to JSON.
     * @function toJSON
     * @memberof grSim_Commands
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    grSim_Commands.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return grSim_Commands;
})();

$root.grSim_RobotReplacement = (function() {

    /**
     * Properties of a grSim_RobotReplacement.
     * @exports IgrSim_RobotReplacement
     * @interface IgrSim_RobotReplacement
     * @property {number} x grSim_RobotReplacement x
     * @property {number} y grSim_RobotReplacement y
     * @property {number} dir grSim_RobotReplacement dir
     * @property {number} id grSim_RobotReplacement id
     * @property {boolean} yellowteam grSim_RobotReplacement yellowteam
     * @property {boolean|null} [turnon] grSim_RobotReplacement turnon
     */

    /**
     * Constructs a new grSim_RobotReplacement.
     * @exports grSim_RobotReplacement
     * @classdesc Represents a grSim_RobotReplacement.
     * @implements IgrSim_RobotReplacement
     * @constructor
     * @param {IgrSim_RobotReplacement=} [properties] Properties to set
     */
    function grSim_RobotReplacement(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * grSim_RobotReplacement x.
     * @member {number} x
     * @memberof grSim_RobotReplacement
     * @instance
     */
    grSim_RobotReplacement.prototype.x = 0;

    /**
     * grSim_RobotReplacement y.
     * @member {number} y
     * @memberof grSim_RobotReplacement
     * @instance
     */
    grSim_RobotReplacement.prototype.y = 0;

    /**
     * grSim_RobotReplacement dir.
     * @member {number} dir
     * @memberof grSim_RobotReplacement
     * @instance
     */
    grSim_RobotReplacement.prototype.dir = 0;

    /**
     * grSim_RobotReplacement id.
     * @member {number} id
     * @memberof grSim_RobotReplacement
     * @instance
     */
    grSim_RobotReplacement.prototype.id = 0;

    /**
     * grSim_RobotReplacement yellowteam.
     * @member {boolean} yellowteam
     * @memberof grSim_RobotReplacement
     * @instance
     */
    grSim_RobotReplacement.prototype.yellowteam = false;

    /**
     * grSim_RobotReplacement turnon.
     * @member {boolean} turnon
     * @memberof grSim_RobotReplacement
     * @instance
     */
    grSim_RobotReplacement.prototype.turnon = false;

    /**
     * Creates a new grSim_RobotReplacement instance using the specified properties.
     * @function create
     * @memberof grSim_RobotReplacement
     * @static
     * @param {IgrSim_RobotReplacement=} [properties] Properties to set
     * @returns {grSim_RobotReplacement} grSim_RobotReplacement instance
     */
    grSim_RobotReplacement.create = function create(properties) {
        return new grSim_RobotReplacement(properties);
    };

    /**
     * Encodes the specified grSim_RobotReplacement message. Does not implicitly {@link grSim_RobotReplacement.verify|verify} messages.
     * @function encode
     * @memberof grSim_RobotReplacement
     * @static
     * @param {IgrSim_RobotReplacement} message grSim_RobotReplacement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_RobotReplacement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
        writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
        writer.uint32(/* id 3, wireType 1 =*/25).double(message.dir);
        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.id);
        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.yellowteam);
        if (message.turnon != null && message.hasOwnProperty("turnon"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.turnon);
        return writer;
    };

    /**
     * Encodes the specified grSim_RobotReplacement message, length delimited. Does not implicitly {@link grSim_RobotReplacement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof grSim_RobotReplacement
     * @static
     * @param {IgrSim_RobotReplacement} message grSim_RobotReplacement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_RobotReplacement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a grSim_RobotReplacement message from the specified reader or buffer.
     * @function decode
     * @memberof grSim_RobotReplacement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {grSim_RobotReplacement} grSim_RobotReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_RobotReplacement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grSim_RobotReplacement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.double();
                break;
            case 2:
                message.y = reader.double();
                break;
            case 3:
                message.dir = reader.double();
                break;
            case 4:
                message.id = reader.uint32();
                break;
            case 5:
                message.yellowteam = reader.bool();
                break;
            case 6:
                message.turnon = reader.bool();
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
        if (!message.hasOwnProperty("dir"))
            throw $util.ProtocolError("missing required 'dir'", { instance: message });
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("yellowteam"))
            throw $util.ProtocolError("missing required 'yellowteam'", { instance: message });
        return message;
    };

    /**
     * Decodes a grSim_RobotReplacement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof grSim_RobotReplacement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {grSim_RobotReplacement} grSim_RobotReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_RobotReplacement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a grSim_RobotReplacement message.
     * @function verify
     * @memberof grSim_RobotReplacement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    grSim_RobotReplacement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (typeof message.x !== "number")
            return "x: number expected";
        if (typeof message.y !== "number")
            return "y: number expected";
        if (typeof message.dir !== "number")
            return "dir: number expected";
        if (!$util.isInteger(message.id))
            return "id: integer expected";
        if (typeof message.yellowteam !== "boolean")
            return "yellowteam: boolean expected";
        if (message.turnon != null && message.hasOwnProperty("turnon"))
            if (typeof message.turnon !== "boolean")
                return "turnon: boolean expected";
        return null;
    };

    /**
     * Creates a grSim_RobotReplacement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof grSim_RobotReplacement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {grSim_RobotReplacement} grSim_RobotReplacement
     */
    grSim_RobotReplacement.fromObject = function fromObject(object) {
        if (object instanceof $root.grSim_RobotReplacement)
            return object;
        var message = new $root.grSim_RobotReplacement();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.dir != null)
            message.dir = Number(object.dir);
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.yellowteam != null)
            message.yellowteam = Boolean(object.yellowteam);
        if (object.turnon != null)
            message.turnon = Boolean(object.turnon);
        return message;
    };

    /**
     * Creates a plain object from a grSim_RobotReplacement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof grSim_RobotReplacement
     * @static
     * @param {grSim_RobotReplacement} message grSim_RobotReplacement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    grSim_RobotReplacement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.dir = 0;
            object.id = 0;
            object.yellowteam = false;
            object.turnon = false;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.dir != null && message.hasOwnProperty("dir"))
            object.dir = options.json && !isFinite(message.dir) ? String(message.dir) : message.dir;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.yellowteam != null && message.hasOwnProperty("yellowteam"))
            object.yellowteam = message.yellowteam;
        if (message.turnon != null && message.hasOwnProperty("turnon"))
            object.turnon = message.turnon;
        return object;
    };

    /**
     * Converts this grSim_RobotReplacement to JSON.
     * @function toJSON
     * @memberof grSim_RobotReplacement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    grSim_RobotReplacement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return grSim_RobotReplacement;
})();

$root.grSim_BallReplacement = (function() {

    /**
     * Properties of a grSim_BallReplacement.
     * @exports IgrSim_BallReplacement
     * @interface IgrSim_BallReplacement
     * @property {number|null} [x] grSim_BallReplacement x
     * @property {number|null} [y] grSim_BallReplacement y
     * @property {number|null} [vx] grSim_BallReplacement vx
     * @property {number|null} [vy] grSim_BallReplacement vy
     */

    /**
     * Constructs a new grSim_BallReplacement.
     * @exports grSim_BallReplacement
     * @classdesc Represents a grSim_BallReplacement.
     * @implements IgrSim_BallReplacement
     * @constructor
     * @param {IgrSim_BallReplacement=} [properties] Properties to set
     */
    function grSim_BallReplacement(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * grSim_BallReplacement x.
     * @member {number} x
     * @memberof grSim_BallReplacement
     * @instance
     */
    grSim_BallReplacement.prototype.x = 0;

    /**
     * grSim_BallReplacement y.
     * @member {number} y
     * @memberof grSim_BallReplacement
     * @instance
     */
    grSim_BallReplacement.prototype.y = 0;

    /**
     * grSim_BallReplacement vx.
     * @member {number} vx
     * @memberof grSim_BallReplacement
     * @instance
     */
    grSim_BallReplacement.prototype.vx = 0;

    /**
     * grSim_BallReplacement vy.
     * @member {number} vy
     * @memberof grSim_BallReplacement
     * @instance
     */
    grSim_BallReplacement.prototype.vy = 0;

    /**
     * Creates a new grSim_BallReplacement instance using the specified properties.
     * @function create
     * @memberof grSim_BallReplacement
     * @static
     * @param {IgrSim_BallReplacement=} [properties] Properties to set
     * @returns {grSim_BallReplacement} grSim_BallReplacement instance
     */
    grSim_BallReplacement.create = function create(properties) {
        return new grSim_BallReplacement(properties);
    };

    /**
     * Encodes the specified grSim_BallReplacement message. Does not implicitly {@link grSim_BallReplacement.verify|verify} messages.
     * @function encode
     * @memberof grSim_BallReplacement
     * @static
     * @param {IgrSim_BallReplacement} message grSim_BallReplacement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_BallReplacement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && message.hasOwnProperty("x"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
        if (message.y != null && message.hasOwnProperty("y"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
        if (message.vx != null && message.hasOwnProperty("vx"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.vx);
        if (message.vy != null && message.hasOwnProperty("vy"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.vy);
        return writer;
    };

    /**
     * Encodes the specified grSim_BallReplacement message, length delimited. Does not implicitly {@link grSim_BallReplacement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof grSim_BallReplacement
     * @static
     * @param {IgrSim_BallReplacement} message grSim_BallReplacement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_BallReplacement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a grSim_BallReplacement message from the specified reader or buffer.
     * @function decode
     * @memberof grSim_BallReplacement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {grSim_BallReplacement} grSim_BallReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_BallReplacement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grSim_BallReplacement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.double();
                break;
            case 2:
                message.y = reader.double();
                break;
            case 3:
                message.vx = reader.double();
                break;
            case 4:
                message.vy = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a grSim_BallReplacement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof grSim_BallReplacement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {grSim_BallReplacement} grSim_BallReplacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_BallReplacement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a grSim_BallReplacement message.
     * @function verify
     * @memberof grSim_BallReplacement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    grSim_BallReplacement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.vx != null && message.hasOwnProperty("vx"))
            if (typeof message.vx !== "number")
                return "vx: number expected";
        if (message.vy != null && message.hasOwnProperty("vy"))
            if (typeof message.vy !== "number")
                return "vy: number expected";
        return null;
    };

    /**
     * Creates a grSim_BallReplacement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof grSim_BallReplacement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {grSim_BallReplacement} grSim_BallReplacement
     */
    grSim_BallReplacement.fromObject = function fromObject(object) {
        if (object instanceof $root.grSim_BallReplacement)
            return object;
        var message = new $root.grSim_BallReplacement();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.vx != null)
            message.vx = Number(object.vx);
        if (object.vy != null)
            message.vy = Number(object.vy);
        return message;
    };

    /**
     * Creates a plain object from a grSim_BallReplacement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof grSim_BallReplacement
     * @static
     * @param {grSim_BallReplacement} message grSim_BallReplacement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    grSim_BallReplacement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.vx = 0;
            object.vy = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.vx != null && message.hasOwnProperty("vx"))
            object.vx = options.json && !isFinite(message.vx) ? String(message.vx) : message.vx;
        if (message.vy != null && message.hasOwnProperty("vy"))
            object.vy = options.json && !isFinite(message.vy) ? String(message.vy) : message.vy;
        return object;
    };

    /**
     * Converts this grSim_BallReplacement to JSON.
     * @function toJSON
     * @memberof grSim_BallReplacement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    grSim_BallReplacement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return grSim_BallReplacement;
})();

$root.grSim_Replacement = (function() {

    /**
     * Properties of a grSim_Replacement.
     * @exports IgrSim_Replacement
     * @interface IgrSim_Replacement
     * @property {IgrSim_BallReplacement|null} [ball] grSim_Replacement ball
     * @property {Array.<IgrSim_RobotReplacement>|null} [robots] grSim_Replacement robots
     */

    /**
     * Constructs a new grSim_Replacement.
     * @exports grSim_Replacement
     * @classdesc Represents a grSim_Replacement.
     * @implements IgrSim_Replacement
     * @constructor
     * @param {IgrSim_Replacement=} [properties] Properties to set
     */
    function grSim_Replacement(properties) {
        this.robots = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * grSim_Replacement ball.
     * @member {IgrSim_BallReplacement|null|undefined} ball
     * @memberof grSim_Replacement
     * @instance
     */
    grSim_Replacement.prototype.ball = null;

    /**
     * grSim_Replacement robots.
     * @member {Array.<IgrSim_RobotReplacement>} robots
     * @memberof grSim_Replacement
     * @instance
     */
    grSim_Replacement.prototype.robots = $util.emptyArray;

    /**
     * Creates a new grSim_Replacement instance using the specified properties.
     * @function create
     * @memberof grSim_Replacement
     * @static
     * @param {IgrSim_Replacement=} [properties] Properties to set
     * @returns {grSim_Replacement} grSim_Replacement instance
     */
    grSim_Replacement.create = function create(properties) {
        return new grSim_Replacement(properties);
    };

    /**
     * Encodes the specified grSim_Replacement message. Does not implicitly {@link grSim_Replacement.verify|verify} messages.
     * @function encode
     * @memberof grSim_Replacement
     * @static
     * @param {IgrSim_Replacement} message grSim_Replacement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Replacement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ball != null && message.hasOwnProperty("ball"))
            $root.grSim_BallReplacement.encode(message.ball, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.robots != null && message.robots.length)
            for (var i = 0; i < message.robots.length; ++i)
                $root.grSim_RobotReplacement.encode(message.robots[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified grSim_Replacement message, length delimited. Does not implicitly {@link grSim_Replacement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof grSim_Replacement
     * @static
     * @param {IgrSim_Replacement} message grSim_Replacement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    grSim_Replacement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a grSim_Replacement message from the specified reader or buffer.
     * @function decode
     * @memberof grSim_Replacement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {grSim_Replacement} grSim_Replacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Replacement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grSim_Replacement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ball = $root.grSim_BallReplacement.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.robots && message.robots.length))
                    message.robots = [];
                message.robots.push($root.grSim_RobotReplacement.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a grSim_Replacement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof grSim_Replacement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {grSim_Replacement} grSim_Replacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    grSim_Replacement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a grSim_Replacement message.
     * @function verify
     * @memberof grSim_Replacement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    grSim_Replacement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ball != null && message.hasOwnProperty("ball")) {
            var error = $root.grSim_BallReplacement.verify(message.ball);
            if (error)
                return "ball." + error;
        }
        if (message.robots != null && message.hasOwnProperty("robots")) {
            if (!Array.isArray(message.robots))
                return "robots: array expected";
            for (var i = 0; i < message.robots.length; ++i) {
                var error = $root.grSim_RobotReplacement.verify(message.robots[i]);
                if (error)
                    return "robots." + error;
            }
        }
        return null;
    };

    /**
     * Creates a grSim_Replacement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof grSim_Replacement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {grSim_Replacement} grSim_Replacement
     */
    grSim_Replacement.fromObject = function fromObject(object) {
        if (object instanceof $root.grSim_Replacement)
            return object;
        var message = new $root.grSim_Replacement();
        if (object.ball != null) {
            if (typeof object.ball !== "object")
                throw TypeError(".grSim_Replacement.ball: object expected");
            message.ball = $root.grSim_BallReplacement.fromObject(object.ball);
        }
        if (object.robots) {
            if (!Array.isArray(object.robots))
                throw TypeError(".grSim_Replacement.robots: array expected");
            message.robots = [];
            for (var i = 0; i < object.robots.length; ++i) {
                if (typeof object.robots[i] !== "object")
                    throw TypeError(".grSim_Replacement.robots: object expected");
                message.robots[i] = $root.grSim_RobotReplacement.fromObject(object.robots[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a grSim_Replacement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof grSim_Replacement
     * @static
     * @param {grSim_Replacement} message grSim_Replacement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    grSim_Replacement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.robots = [];
        if (options.defaults)
            object.ball = null;
        if (message.ball != null && message.hasOwnProperty("ball"))
            object.ball = $root.grSim_BallReplacement.toObject(message.ball, options);
        if (message.robots && message.robots.length) {
            object.robots = [];
            for (var j = 0; j < message.robots.length; ++j)
                object.robots[j] = $root.grSim_RobotReplacement.toObject(message.robots[j], options);
        }
        return object;
    };

    /**
     * Converts this grSim_Replacement to JSON.
     * @function toJSON
     * @memberof grSim_Replacement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    grSim_Replacement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return grSim_Replacement;
})();

module.exports = $root;
