function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirea66e"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirea66e"] = parcelRequire;
}
var $ffe090e55c6c677a$exports = {};
(function(root) {
    /**
   * Error thrown when any required feature is missing (Promises, navigator, getUserMedia)
   * @constructor
   */ function NotSupportedError() {
        this.name = 'NotSupportedError';
        this.message = 'getUserMedia is not implemented in this browser';
    }
    NotSupportedError.prototype = Error.prototype;
    /**
   * Fake Promise instance that behaves like a Promise except that it always rejects with a NotSupportedError.
   * Used for situations where there is no global Promise constructor.
   *
   * The message will report that the getUserMedia API is not available.
   * This is technically true because every browser that supports getUserMedia also supports promises.
   **
   * @see http://caniuse.com/#feat=stream
   * @see http://caniuse.com/#feat=promises
   * @constructor
   */ function FakePromise() {
        // make it chainable like a real promise
        this.then = function() {
            return this;
        };
        // but always reject with an error
        var err = new NotSupportedError();
        this.catch = function(cb) {
            setTimeout(function() {
                cb(err);
            });
        };
    }
    var isPromiseSupported = typeof Promise !== 'undefined';
    // checks for root.navigator to enable server-side rendering of things that depend on this
    // (will need to be updated on client, but at least doesn't throw this way)
    var navigatorExists = typeof navigator !== "undefined";
    // gump = mondern promise-based interface
    // gum = old callback-based interface
    var gump = navigatorExists && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    var gum = navigatorExists && (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    /**
   * Wrapper for navigator.mediaDevices.getUserMedia.
   * Always returns a Promise or Promise-like object, even in environments without a global Promise constructor
   *
   * @stream https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
   *
   * @param {Object} constraints - must include one or both of audio/video along with optional details for video
   * @param {Boolean} [constraints.audio] - include audio data in the stream
   * @param {Boolean|Object} [constraints.video] - include video data in the stream. May be a boolean or an object with additional constraints, see
   * @returns {Promise<MediaStream>} a promise that resolves to a MediaStream object
     */ function getUserMedia(constraints) {
        // ensure that Promises are supported and we have a navigator object
        if (!isPromiseSupported) return new FakePromise();
        // Try the more modern, promise-based MediaDevices API first
        //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        if (gump) return navigator.mediaDevices.getUserMedia(constraints);
        // fall back to the older method second, wrap it in a promise.
        return new Promise(function(resolve, reject) {
            // if navigator doesn't exist, then we can't use the getUserMedia API. (And probably aren't even in a browser.)
            // assuming it does, try getUserMedia and then all of the prefixed versions
            if (!gum) return reject(new NotSupportedError());
            gum.call(navigator, constraints, resolve, reject);
        });
    }
    getUserMedia.NotSupportedError = NotSupportedError;
    // eslint-disable-next-line no-implicit-coercion
    getUserMedia.isSupported = !!(isPromiseSupported && (gump || gum));
    // UMD, loosely based on https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define([], function() {
        return getUserMedia;
    });
    else if ("object" === 'object' && $ffe090e55c6c677a$exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    $ffe090e55c6c677a$exports = getUserMedia;
    else {
        // Browser globals
        // polyfill the MediaDevices API if it does not exist.
        root.navigator || (root.navigator = {
        });
        root.navigator.mediaDevices || (root.navigator.mediaDevices = {
        });
        root.navigator.mediaDevices.getUserMedia || (root.navigator.mediaDevices.getUserMedia = getUserMedia);
    }
})($ffe090e55c6c677a$exports);


var $75710d60307e4114$exports = {};
"use strict";
var $75710d60307e4114$var$__extends = $75710d60307e4114$exports && $75710d60307e4114$exports.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $75710d60307e4114$var$__importDefault = $75710d60307e4114$exports && $75710d60307e4114$exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty($75710d60307e4114$exports, "__esModule", {
    value: true
});
parcelRequire.register("9pVDm", function(module, exports) {

exports = module.exports = (parcelRequire("3eJKS"));
exports.Stream = exports;
exports.Readable = exports;

exports.Writable = (parcelRequire("cWhsJ"));

exports.Duplex = (parcelRequire("hOZQ4"));

exports.Transform = (parcelRequire("cdzQh"));

exports.PassThrough = (parcelRequire("jGqPD"));

exports.finished = (parcelRequire("14Hqr"));

exports.pipeline = (parcelRequire("3zrFE"));

});
parcelRequire.register("3eJKS", function(module, exports) {

var $g1iKT = parcelRequire("g1iKT");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
module.exports = $25b62bee350f1745$var$Readable;
/*<replacement>*/ var $25b62bee350f1745$var$Duplex;
/*</replacement>*/ $25b62bee350f1745$var$Readable.ReadableState = $25b62bee350f1745$var$ReadableState;

var $34gsk = parcelRequire("34gsk");
var $25b62bee350f1745$require$EE = $34gsk.EventEmitter;
var $25b62bee350f1745$var$EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};

var $972ZO = parcelRequire("972ZO");

var $fUbqx = parcelRequire("fUbqx");
var $25b62bee350f1745$require$Buffer = $fUbqx.Buffer;
var $25b62bee350f1745$var$OurUint8Array = $parcel$global.Uint8Array || function() {
};
function $25b62bee350f1745$var$_uint8ArrayToBuffer(chunk) {
    return $25b62bee350f1745$require$Buffer.from(chunk);
}
function $25b62bee350f1745$var$_isUint8Array(obj) {
    return $25b62bee350f1745$require$Buffer.isBuffer(obj) || obj instanceof $25b62bee350f1745$var$OurUint8Array;
}

var $bGfFz = parcelRequire("bGfFz");
var $25b62bee350f1745$var$debug;
if ($bGfFz && $bGfFz.debuglog) $25b62bee350f1745$var$debug = $bGfFz.debuglog('stream');
else $25b62bee350f1745$var$debug = function debug() {
};

var $gHrU2 = parcelRequire("gHrU2");

var $7BL3c = parcelRequire("7BL3c");

var $eMlA3 = parcelRequire("eMlA3");
var $25b62bee350f1745$var$getHighWaterMark = $eMlA3.getHighWaterMark;

var $j3eBO = parcelRequire("j3eBO");
var $25b62bee350f1745$require$_require$codes = $j3eBO.codes;
var $25b62bee350f1745$var$ERR_INVALID_ARG_TYPE = $25b62bee350f1745$require$_require$codes.ERR_INVALID_ARG_TYPE, $25b62bee350f1745$var$ERR_STREAM_PUSH_AFTER_EOF = $25b62bee350f1745$require$_require$codes.ERR_STREAM_PUSH_AFTER_EOF, $25b62bee350f1745$var$ERR_METHOD_NOT_IMPLEMENTED = $25b62bee350f1745$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $25b62bee350f1745$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT = $25b62bee350f1745$require$_require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.
var $25b62bee350f1745$var$StringDecoder;
var $25b62bee350f1745$var$createReadableStreamAsyncIterator;
var $25b62bee350f1745$var$from;

(parcelRequire("kkRmS"))($25b62bee350f1745$var$Readable, $972ZO);
var $25b62bee350f1745$var$errorOrDestroy = $7BL3c.errorOrDestroy;
var $25b62bee350f1745$var$kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function $25b62bee350f1745$var$prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}


function $25b62bee350f1745$var$ReadableState(options, stream, isDuplex) {
    $25b62bee350f1745$var$Duplex = $25b62bee350f1745$var$Duplex || (parcelRequire("hOZQ4"));
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof $25b62bee350f1745$var$Duplex; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = $25b62bee350f1745$var$getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new $gHrU2();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy; // has it been destroyed
    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!$25b62bee350f1745$var$StringDecoder) $25b62bee350f1745$var$StringDecoder = (parcelRequire("2ZWI6")).StringDecoder;
        this.decoder = new $25b62bee350f1745$var$StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}

function $25b62bee350f1745$var$Readable(options) {
    $25b62bee350f1745$var$Duplex = $25b62bee350f1745$var$Duplex || (parcelRequire("hOZQ4"));
    if (!(this instanceof $25b62bee350f1745$var$Readable)) return new $25b62bee350f1745$var$Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $25b62bee350f1745$var$Duplex;
    this._readableState = new $25b62bee350f1745$var$ReadableState(options, this, isDuplex); // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    $972ZO.call(this);
}
Object.defineProperty($25b62bee350f1745$var$Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
$25b62bee350f1745$var$Readable.prototype.destroy = $7BL3c.destroy;
$25b62bee350f1745$var$Readable.prototype._undestroy = $7BL3c.undestroy;
$25b62bee350f1745$var$Readable.prototype._destroy = function(err, cb) {
    cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
$25b62bee350f1745$var$Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = $25b62bee350f1745$require$Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return $25b62bee350f1745$var$readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()
$25b62bee350f1745$var$Readable.prototype.unshift = function(chunk) {
    return $25b62bee350f1745$var$readableAddChunk(this, chunk, null, true, false);
};
function $25b62bee350f1745$var$readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    $25b62bee350f1745$var$debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        $25b62bee350f1745$var$onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = $25b62bee350f1745$var$chunkInvalid(state, chunk);
        if (er) $25b62bee350f1745$var$errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== $25b62bee350f1745$require$Buffer.prototype) chunk = $25b62bee350f1745$var$_uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) $25b62bee350f1745$var$errorOrDestroy(stream, new $25b62bee350f1745$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else $25b62bee350f1745$var$addChunk(stream, state, chunk, true);
            } else if (state.ended) $25b62bee350f1745$var$errorOrDestroy(stream, new $25b62bee350f1745$var$ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) $25b62bee350f1745$var$addChunk(stream, state, chunk, false);
                    else $25b62bee350f1745$var$maybeReadMore(stream, state);
                } else $25b62bee350f1745$var$addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            $25b62bee350f1745$var$maybeReadMore(stream, state);
        }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function $25b62bee350f1745$var$addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) $25b62bee350f1745$var$emitReadable(stream);
    }
    $25b62bee350f1745$var$maybeReadMore(stream, state);
}
function $25b62bee350f1745$var$chunkInvalid(state, chunk) {
    var er;
    if (!$25b62bee350f1745$var$_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) er = new $25b62bee350f1745$var$ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer',
        'Uint8Array'
    ], chunk);
    return er;
}
$25b62bee350f1745$var$Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
}; // backwards compatibility.

$25b62bee350f1745$var$Readable.prototype.setEncoding = function(enc) {
    if (!$25b62bee350f1745$var$StringDecoder) $25b62bee350f1745$var$StringDecoder = (parcelRequire("2ZWI6")).StringDecoder;
    var decoder = new $25b62bee350f1745$var$StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
}; // Don't raise the hwm > 1GB
var $25b62bee350f1745$var$MAX_HWM = 1073741824;
function $25b62bee350f1745$var$computeNewHighWaterMark(n) {
    if (n >= $25b62bee350f1745$var$MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = $25b62bee350f1745$var$MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $25b62bee350f1745$var$howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = $25b62bee350f1745$var$computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
} // you can override either this method, or the async _read(n) below.
$25b62bee350f1745$var$Readable.prototype.read = function(n) {
    $25b62bee350f1745$var$debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        $25b62bee350f1745$var$debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) $25b62bee350f1745$var$endReadable(this);
        else $25b62bee350f1745$var$emitReadable(this);
        return null;
    }
    n = $25b62bee350f1745$var$howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) $25b62bee350f1745$var$endReadable(this);
        return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    $25b62bee350f1745$var$debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        $25b62bee350f1745$var$debug('length less than watermark', doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        $25b62bee350f1745$var$debug('reading or ended', doRead);
    } else if (doRead) {
        $25b62bee350f1745$var$debug('do read');
        state.reading = true;
        state.sync = true; // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true; // call internal read method
        this._read(state.highWaterMark);
        state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = $25b62bee350f1745$var$howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = $25b62bee350f1745$var$fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) $25b62bee350f1745$var$endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function $25b62bee350f1745$var$onEofChunk(stream, state) {
    $25b62bee350f1745$var$debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    $25b62bee350f1745$var$emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            $25b62bee350f1745$var$emitReadable_(stream);
        }
    }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function $25b62bee350f1745$var$emitReadable(stream) {
    var state = stream._readableState;
    $25b62bee350f1745$var$debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        $25b62bee350f1745$var$debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        $g1iKT.nextTick($25b62bee350f1745$var$emitReadable_, stream);
    }
}
function $25b62bee350f1745$var$emitReadable_(stream) {
    var state = stream._readableState;
    $25b62bee350f1745$var$debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    $25b62bee350f1745$var$flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function $25b62bee350f1745$var$maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        $g1iKT.nextTick($25b62bee350f1745$var$maybeReadMore_, stream, state);
    }
}
function $25b62bee350f1745$var$maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        $25b62bee350f1745$var$debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
$25b62bee350f1745$var$Readable.prototype._read = function(n) {
    $25b62bee350f1745$var$errorOrDestroy(this, new $25b62bee350f1745$var$ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
$25b62bee350f1745$var$Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    $25b62bee350f1745$var$debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== $g1iKT.stdout && dest !== $g1iKT.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) $g1iKT.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        $25b62bee350f1745$var$debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        $25b62bee350f1745$var$debug('onend');
        dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = $25b62bee350f1745$var$pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        $25b62bee350f1745$var$debug('cleanup'); // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true; // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        $25b62bee350f1745$var$debug('ondata');
        var ret = dest.write(chunk);
        $25b62bee350f1745$var$debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && $25b62bee350f1745$var$indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                $25b62bee350f1745$var$debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        $25b62bee350f1745$var$debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if ($25b62bee350f1745$var$EElistenerCount(dest, 'error') === 0) $25b62bee350f1745$var$errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.
    $25b62bee350f1745$var$prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        $25b62bee350f1745$var$debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        $25b62bee350f1745$var$debug('unpipe');
        src.unpipe(dest);
    } // tell the dest that it's being piped to
    dest.emit('pipe', src); // start the flow if it hasn't been started already.
    if (!state.flowing) {
        $25b62bee350f1745$var$debug('pipe resume');
        src.resume();
    }
    return dest;
};
function $25b62bee350f1745$var$pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        $25b62bee350f1745$var$debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && $25b62bee350f1745$var$EElistenerCount(src, 'data')) {
            state.flowing = true;
            $25b62bee350f1745$var$flow(src);
        }
    };
}
$25b62bee350f1745$var$Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this; // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes; // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    } // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    } // try to find the right one.
    var index = $25b62bee350f1745$var$indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something
$25b62bee350f1745$var$Readable.prototype.on = function(ev, fn) {
    var res = $972ZO.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            $25b62bee350f1745$var$debug('on readable', state.length, state.reading);
            if (state.length) $25b62bee350f1745$var$emitReadable(this);
            else if (!state.reading) $g1iKT.nextTick($25b62bee350f1745$var$nReadingNextTick, this);
        }
    }
    return res;
};
$25b62bee350f1745$var$Readable.prototype.addListener = $25b62bee350f1745$var$Readable.prototype.on;
$25b62bee350f1745$var$Readable.prototype.removeListener = function(ev, fn) {
    var res = $972ZO.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    $g1iKT.nextTick($25b62bee350f1745$var$updateReadableListening, this);
    return res;
};
$25b62bee350f1745$var$Readable.prototype.removeAllListeners = function(ev) {
    var res = $972ZO.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    $g1iKT.nextTick($25b62bee350f1745$var$updateReadableListening, this);
    return res;
};
function $25b62bee350f1745$var$updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
    else if (self.listenerCount('data') > 0) self.resume();
}
function $25b62bee350f1745$var$nReadingNextTick(self) {
    $25b62bee350f1745$var$debug('readable nexttick read 0');
    self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
$25b62bee350f1745$var$Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        $25b62bee350f1745$var$debug('resume'); // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        $25b62bee350f1745$var$resume(this, state);
    }
    state.paused = false;
    return this;
};
function $25b62bee350f1745$var$resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        $g1iKT.nextTick($25b62bee350f1745$var$resume_, stream, state);
    }
}
function $25b62bee350f1745$var$resume_(stream, state) {
    $25b62bee350f1745$var$debug('resume', state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit('resume');
    $25b62bee350f1745$var$flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
$25b62bee350f1745$var$Readable.prototype.pause = function() {
    $25b62bee350f1745$var$debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        $25b62bee350f1745$var$debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function $25b62bee350f1745$var$flow(stream) {
    var state = stream._readableState;
    $25b62bee350f1745$var$debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
$25b62bee350f1745$var$Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        $25b62bee350f1745$var$debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        $25b62bee350f1745$var$debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === 'function') this[i] = (function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    })(i);
     // proxy certain important events.
    for(var n = 0; n < $25b62bee350f1745$var$kProxyEvents.length; n++)stream.on($25b62bee350f1745$var$kProxyEvents[n], this.emit.bind(this, $25b62bee350f1745$var$kProxyEvents[n]));
     // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        $25b62bee350f1745$var$debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};

if (typeof Symbol === 'function') $25b62bee350f1745$var$Readable.prototype[Symbol.asyncIterator] = function() {
    if ($25b62bee350f1745$var$createReadableStreamAsyncIterator === undefined) $25b62bee350f1745$var$createReadableStreamAsyncIterator = (parcelRequire("hfZob"));
    return $25b62bee350f1745$var$createReadableStreamAsyncIterator(this);
};
Object.defineProperty($25b62bee350f1745$var$Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty($25b62bee350f1745$var$Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty($25b62bee350f1745$var$Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
}); // exposed for testing purposes only.
$25b62bee350f1745$var$Readable._fromList = $25b62bee350f1745$var$fromList;
Object.defineProperty($25b62bee350f1745$var$Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $25b62bee350f1745$var$fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function $25b62bee350f1745$var$endReadable(stream) {
    var state = stream._readableState;
    $25b62bee350f1745$var$debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        $g1iKT.nextTick($25b62bee350f1745$var$endReadableNT, state, stream);
    }
}
function $25b62bee350f1745$var$endReadableNT(state, stream) {
    $25b62bee350f1745$var$debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}

if (typeof Symbol === 'function') $25b62bee350f1745$var$Readable.from = function(iterable, opts) {
    if ($25b62bee350f1745$var$from === undefined) $25b62bee350f1745$var$from = (parcelRequire("fNmrS"));
    return $25b62bee350f1745$var$from($25b62bee350f1745$var$Readable, iterable, opts);
};
function $25b62bee350f1745$var$indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

});
parcelRequire.register("g1iKT", function(module, exports) {
// shim for using process in browser
var $ba9b49c2d28709e2$var$process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $ba9b49c2d28709e2$var$cachedSetTimeout;
var $ba9b49c2d28709e2$var$cachedClearTimeout;
function $ba9b49c2d28709e2$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $ba9b49c2d28709e2$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $ba9b49c2d28709e2$var$cachedSetTimeout = setTimeout;
        else $ba9b49c2d28709e2$var$cachedSetTimeout = $ba9b49c2d28709e2$var$defaultSetTimout;
    } catch (e) {
        $ba9b49c2d28709e2$var$cachedSetTimeout = $ba9b49c2d28709e2$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $ba9b49c2d28709e2$var$cachedClearTimeout = clearTimeout;
        else $ba9b49c2d28709e2$var$cachedClearTimeout = $ba9b49c2d28709e2$var$defaultClearTimeout;
    } catch (e1) {
        $ba9b49c2d28709e2$var$cachedClearTimeout = $ba9b49c2d28709e2$var$defaultClearTimeout;
    }
})();
function $ba9b49c2d28709e2$var$runTimeout(fun) {
    if ($ba9b49c2d28709e2$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($ba9b49c2d28709e2$var$cachedSetTimeout === $ba9b49c2d28709e2$var$defaultSetTimout || !$ba9b49c2d28709e2$var$cachedSetTimeout) && setTimeout) {
        $ba9b49c2d28709e2$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $ba9b49c2d28709e2$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $ba9b49c2d28709e2$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $ba9b49c2d28709e2$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $ba9b49c2d28709e2$var$runClearTimeout(marker) {
    if ($ba9b49c2d28709e2$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($ba9b49c2d28709e2$var$cachedClearTimeout === $ba9b49c2d28709e2$var$defaultClearTimeout || !$ba9b49c2d28709e2$var$cachedClearTimeout) && clearTimeout) {
        $ba9b49c2d28709e2$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $ba9b49c2d28709e2$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $ba9b49c2d28709e2$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $ba9b49c2d28709e2$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $ba9b49c2d28709e2$var$queue = [];
var $ba9b49c2d28709e2$var$draining = false;
var $ba9b49c2d28709e2$var$currentQueue;
var $ba9b49c2d28709e2$var$queueIndex = -1;
function $ba9b49c2d28709e2$var$cleanUpNextTick() {
    if (!$ba9b49c2d28709e2$var$draining || !$ba9b49c2d28709e2$var$currentQueue) return;
    $ba9b49c2d28709e2$var$draining = false;
    if ($ba9b49c2d28709e2$var$currentQueue.length) $ba9b49c2d28709e2$var$queue = $ba9b49c2d28709e2$var$currentQueue.concat($ba9b49c2d28709e2$var$queue);
    else $ba9b49c2d28709e2$var$queueIndex = -1;
    if ($ba9b49c2d28709e2$var$queue.length) $ba9b49c2d28709e2$var$drainQueue();
}
function $ba9b49c2d28709e2$var$drainQueue() {
    if ($ba9b49c2d28709e2$var$draining) return;
    var timeout = $ba9b49c2d28709e2$var$runTimeout($ba9b49c2d28709e2$var$cleanUpNextTick);
    $ba9b49c2d28709e2$var$draining = true;
    var len = $ba9b49c2d28709e2$var$queue.length;
    while(len){
        $ba9b49c2d28709e2$var$currentQueue = $ba9b49c2d28709e2$var$queue;
        $ba9b49c2d28709e2$var$queue = [];
        while(++$ba9b49c2d28709e2$var$queueIndex < len)if ($ba9b49c2d28709e2$var$currentQueue) $ba9b49c2d28709e2$var$currentQueue[$ba9b49c2d28709e2$var$queueIndex].run();
        $ba9b49c2d28709e2$var$queueIndex = -1;
        len = $ba9b49c2d28709e2$var$queue.length;
    }
    $ba9b49c2d28709e2$var$currentQueue = null;
    $ba9b49c2d28709e2$var$draining = false;
    $ba9b49c2d28709e2$var$runClearTimeout(timeout);
}
$ba9b49c2d28709e2$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $ba9b49c2d28709e2$var$queue.push(new $ba9b49c2d28709e2$var$Item(fun, args));
    if ($ba9b49c2d28709e2$var$queue.length === 1 && !$ba9b49c2d28709e2$var$draining) $ba9b49c2d28709e2$var$runTimeout($ba9b49c2d28709e2$var$drainQueue);
};
// v8 likes predictible objects
function $ba9b49c2d28709e2$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$ba9b49c2d28709e2$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$ba9b49c2d28709e2$var$process.title = 'browser';
$ba9b49c2d28709e2$var$process.browser = true;
$ba9b49c2d28709e2$var$process.env = {
};
$ba9b49c2d28709e2$var$process.argv = [];
$ba9b49c2d28709e2$var$process.version = ''; // empty string to avoid regexp issues
$ba9b49c2d28709e2$var$process.versions = {
};
function $ba9b49c2d28709e2$var$noop() {
}
$ba9b49c2d28709e2$var$process.on = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.addListener = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.once = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.off = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.removeListener = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.removeAllListeners = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.emit = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.prependListener = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.prependOnceListener = $ba9b49c2d28709e2$var$noop;
$ba9b49c2d28709e2$var$process.listeners = function(name) {
    return [];
};
$ba9b49c2d28709e2$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$ba9b49c2d28709e2$var$process.cwd = function() {
    return '/';
};
$ba9b49c2d28709e2$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$ba9b49c2d28709e2$var$process.umask = function() {
    return 0;
};

});

parcelRequire.register("34gsk", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var $23be82a1fe7ba51f$var$R = typeof Reflect === 'object' ? Reflect : null;
var $23be82a1fe7ba51f$var$ReflectApply = $23be82a1fe7ba51f$var$R && typeof $23be82a1fe7ba51f$var$R.apply === 'function' ? $23be82a1fe7ba51f$var$R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var $23be82a1fe7ba51f$var$ReflectOwnKeys;
if ($23be82a1fe7ba51f$var$R && typeof $23be82a1fe7ba51f$var$R.ownKeys === 'function') $23be82a1fe7ba51f$var$ReflectOwnKeys = $23be82a1fe7ba51f$var$R.ownKeys;
else if (Object.getOwnPropertySymbols) $23be82a1fe7ba51f$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else $23be82a1fe7ba51f$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function $23be82a1fe7ba51f$var$ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var $23be82a1fe7ba51f$var$NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function $23be82a1fe7ba51f$var$EventEmitter() {
    $23be82a1fe7ba51f$var$EventEmitter.init.call(this);
}
module.exports = $23be82a1fe7ba51f$var$EventEmitter;
module.exports.once = $23be82a1fe7ba51f$var$once;
// Backwards-compat with node 0.10.x
$23be82a1fe7ba51f$var$EventEmitter.EventEmitter = $23be82a1fe7ba51f$var$EventEmitter;
$23be82a1fe7ba51f$var$EventEmitter.prototype._events = undefined;
$23be82a1fe7ba51f$var$EventEmitter.prototype._eventsCount = 0;
$23be82a1fe7ba51f$var$EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var $23be82a1fe7ba51f$var$defaultMaxListeners = 10;
function $23be82a1fe7ba51f$var$checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty($23be82a1fe7ba51f$var$EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return $23be82a1fe7ba51f$var$defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || $23be82a1fe7ba51f$var$NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        $23be82a1fe7ba51f$var$defaultMaxListeners = arg;
    }
});
$23be82a1fe7ba51f$var$EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
$23be82a1fe7ba51f$var$EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || $23be82a1fe7ba51f$var$NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function $23be82a1fe7ba51f$var$_getMaxListeners(that) {
    if (that._maxListeners === undefined) return $23be82a1fe7ba51f$var$EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
$23be82a1fe7ba51f$var$EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $23be82a1fe7ba51f$var$_getMaxListeners(this);
};
$23be82a1fe7ba51f$var$EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') $23be82a1fe7ba51f$var$ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = $23be82a1fe7ba51f$var$arrayClone(handler, len);
        for(var i = 0; i < len; ++i)$23be82a1fe7ba51f$var$ReflectApply(listeners[i], this, args);
    }
    return true;
};
function $23be82a1fe7ba51f$var$_addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    $23be82a1fe7ba51f$var$checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = $23be82a1fe7ba51f$var$_getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            $23be82a1fe7ba51f$var$ProcessEmitWarning(w);
        }
    }
    return target;
}
$23be82a1fe7ba51f$var$EventEmitter.prototype.addListener = function addListener(type, listener) {
    return $23be82a1fe7ba51f$var$_addListener(this, type, listener, false);
};
$23be82a1fe7ba51f$var$EventEmitter.prototype.on = $23be82a1fe7ba51f$var$EventEmitter.prototype.addListener;
$23be82a1fe7ba51f$var$EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return $23be82a1fe7ba51f$var$_addListener(this, type, listener, true);
};
function $23be82a1fe7ba51f$var$onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function $23be82a1fe7ba51f$var$_onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = $23be82a1fe7ba51f$var$onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
$23be82a1fe7ba51f$var$EventEmitter.prototype.once = function once(type, listener) {
    $23be82a1fe7ba51f$var$checkListener(listener);
    this.on(type, $23be82a1fe7ba51f$var$_onceWrap(this, type, listener));
    return this;
};
$23be82a1fe7ba51f$var$EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    $23be82a1fe7ba51f$var$checkListener(listener);
    this.prependListener(type, $23be82a1fe7ba51f$var$_onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
$23be82a1fe7ba51f$var$EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    $23be82a1fe7ba51f$var$checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else $23be82a1fe7ba51f$var$spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
$23be82a1fe7ba51f$var$EventEmitter.prototype.off = $23be82a1fe7ba51f$var$EventEmitter.prototype.removeListener;
$23be82a1fe7ba51f$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function $23be82a1fe7ba51f$var$_listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? $23be82a1fe7ba51f$var$unwrapListeners(evlistener) : $23be82a1fe7ba51f$var$arrayClone(evlistener, evlistener.length);
}
$23be82a1fe7ba51f$var$EventEmitter.prototype.listeners = function listeners(type) {
    return $23be82a1fe7ba51f$var$_listeners(this, type, true);
};
$23be82a1fe7ba51f$var$EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return $23be82a1fe7ba51f$var$_listeners(this, type, false);
};
$23be82a1fe7ba51f$var$EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return $23be82a1fe7ba51f$var$listenerCount.call(emitter, type);
};
$23be82a1fe7ba51f$var$EventEmitter.prototype.listenerCount = $23be82a1fe7ba51f$var$listenerCount;
function $23be82a1fe7ba51f$var$listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
$23be82a1fe7ba51f$var$EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? $23be82a1fe7ba51f$var$ReflectOwnKeys(this._events) : [];
};
function $23be82a1fe7ba51f$var$arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function $23be82a1fe7ba51f$var$spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function $23be82a1fe7ba51f$var$unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function $23be82a1fe7ba51f$var$once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        $23be82a1fe7ba51f$var$eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') $23be82a1fe7ba51f$var$addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function $23be82a1fe7ba51f$var$addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') $23be82a1fe7ba51f$var$eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function $23be82a1fe7ba51f$var$eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

});

parcelRequire.register("972ZO", function(module, exports) {

module.exports = (parcelRequire("34gsk")).EventEmitter;

});

parcelRequire.register("fUbqx", function(module, exports) {

$parcel$export(module.exports, "Buffer", () => $b944f327406e77d1$export$a143d493d941bafc, (v) => $b944f327406e77d1$export$a143d493d941bafc = v);
$parcel$export(module.exports, "SlowBuffer", () => $b944f327406e77d1$export$e4cf37d7f6fb9e0a, (v) => $b944f327406e77d1$export$e4cf37d7f6fb9e0a = v);
$parcel$export(module.exports, "INSPECT_MAX_BYTES", () => $b944f327406e77d1$export$f99ded8fe4b79145, (v) => $b944f327406e77d1$export$f99ded8fe4b79145 = v);
$parcel$export(module.exports, "kMaxLength", () => $b944f327406e77d1$export$599f31c3813fae4d, (v) => $b944f327406e77d1$export$599f31c3813fae4d = v);
var $b944f327406e77d1$export$a143d493d941bafc;
var $b944f327406e77d1$export$e4cf37d7f6fb9e0a;
var $b944f327406e77d1$export$f99ded8fe4b79145;
var $b944f327406e77d1$export$599f31c3813fae4d;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';

var $88LF6 = parcelRequire("88LF6");

var $2KEWM = parcelRequire("2KEWM");
var $b944f327406e77d1$var$customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
$b944f327406e77d1$export$a143d493d941bafc = $b944f327406e77d1$var$Buffer;
$b944f327406e77d1$export$e4cf37d7f6fb9e0a = $b944f327406e77d1$var$SlowBuffer;
$b944f327406e77d1$export$f99ded8fe4b79145 = 50;
var $b944f327406e77d1$var$K_MAX_LENGTH = 2147483647;
$b944f327406e77d1$export$599f31c3813fae4d = $b944f327406e77d1$var$K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ $b944f327406e77d1$var$Buffer.TYPED_ARRAY_SUPPORT = $b944f327406e77d1$var$typedArraySupport();
if (!$b944f327406e77d1$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function $b944f327406e77d1$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty($b944f327406e77d1$var$Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!$b944f327406e77d1$var$Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty($b944f327406e77d1$var$Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!$b944f327406e77d1$var$Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function $b944f327406e77d1$var$createBuffer(length) {
    if (length > $b944f327406e77d1$var$K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $b944f327406e77d1$var$Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function $b944f327406e77d1$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return $b944f327406e77d1$var$allocUnsafe(arg);
    }
    return $b944f327406e77d1$var$from(arg, encodingOrOffset, length);
}
$b944f327406e77d1$var$Buffer.poolSize = 8192 // not used by this implementation
;
function $b944f327406e77d1$var$from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return $b944f327406e77d1$var$fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return $b944f327406e77d1$var$fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if ($b944f327406e77d1$var$isInstance(value, ArrayBuffer) || value && $b944f327406e77d1$var$isInstance(value.buffer, ArrayBuffer)) return $b944f327406e77d1$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && ($b944f327406e77d1$var$isInstance(value, SharedArrayBuffer) || value && $b944f327406e77d1$var$isInstance(value.buffer, SharedArrayBuffer))) return $b944f327406e77d1$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return $b944f327406e77d1$var$Buffer.from(valueOf, encodingOrOffset, length);
    var b = $b944f327406e77d1$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return $b944f327406e77d1$var$Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ $b944f327406e77d1$var$Buffer.from = function(value, encodingOrOffset, length) {
    return $b944f327406e77d1$var$from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf($b944f327406e77d1$var$Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf($b944f327406e77d1$var$Buffer, Uint8Array);
function $b944f327406e77d1$var$assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function $b944f327406e77d1$var$alloc(size, fill, encoding) {
    $b944f327406e77d1$var$assertSize(size);
    if (size <= 0) return $b944f327406e77d1$var$createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? $b944f327406e77d1$var$createBuffer(size).fill(fill, encoding) : $b944f327406e77d1$var$createBuffer(size).fill(fill);
    return $b944f327406e77d1$var$createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ $b944f327406e77d1$var$Buffer.alloc = function(size, fill, encoding) {
    return $b944f327406e77d1$var$alloc(size, fill, encoding);
};
function $b944f327406e77d1$var$allocUnsafe(size) {
    $b944f327406e77d1$var$assertSize(size);
    return $b944f327406e77d1$var$createBuffer(size < 0 ? 0 : $b944f327406e77d1$var$checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ $b944f327406e77d1$var$Buffer.allocUnsafe = function(size) {
    return $b944f327406e77d1$var$allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ $b944f327406e77d1$var$Buffer.allocUnsafeSlow = function(size) {
    return $b944f327406e77d1$var$allocUnsafe(size);
};
function $b944f327406e77d1$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!$b944f327406e77d1$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = $b944f327406e77d1$var$byteLength(string, encoding) | 0;
    var buf = $b944f327406e77d1$var$createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function $b944f327406e77d1$var$fromArrayLike(array) {
    var length = array.length < 0 ? 0 : $b944f327406e77d1$var$checked(array.length) | 0;
    var buf = $b944f327406e77d1$var$createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function $b944f327406e77d1$var$fromArrayView(arrayView) {
    if ($b944f327406e77d1$var$isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return $b944f327406e77d1$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $b944f327406e77d1$var$fromArrayLike(arrayView);
}
function $b944f327406e77d1$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $b944f327406e77d1$var$Buffer.prototype);
    return buf;
}
function $b944f327406e77d1$var$fromObject(obj) {
    if ($b944f327406e77d1$var$Buffer.isBuffer(obj)) {
        var len = $b944f327406e77d1$var$checked(obj.length) | 0;
        var buf = $b944f327406e77d1$var$createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || $b944f327406e77d1$var$numberIsNaN(obj.length)) return $b944f327406e77d1$var$createBuffer(0);
        return $b944f327406e77d1$var$fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return $b944f327406e77d1$var$fromArrayLike(obj.data);
}
function $b944f327406e77d1$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $b944f327406e77d1$var$K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $b944f327406e77d1$var$K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function $b944f327406e77d1$var$SlowBuffer(length) {
    if (+length != length) length = 0;
    return $b944f327406e77d1$var$Buffer.alloc(+length);
}
$b944f327406e77d1$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $b944f327406e77d1$var$Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
$b944f327406e77d1$var$Buffer.compare = function compare(a, b) {
    if ($b944f327406e77d1$var$isInstance(a, Uint8Array)) a = $b944f327406e77d1$var$Buffer.from(a, a.offset, a.byteLength);
    if ($b944f327406e77d1$var$isInstance(b, Uint8Array)) b = $b944f327406e77d1$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$b944f327406e77d1$var$Buffer.isBuffer(a) || !$b944f327406e77d1$var$Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
$b944f327406e77d1$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
$b944f327406e77d1$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return $b944f327406e77d1$var$Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = $b944f327406e77d1$var$Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if ($b944f327406e77d1$var$isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) $b944f327406e77d1$var$Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!$b944f327406e77d1$var$Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function $b944f327406e77d1$var$byteLength(string, encoding) {
    if ($b944f327406e77d1$var$Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || $b944f327406e77d1$var$isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return $b944f327406e77d1$var$utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return $b944f327406e77d1$var$base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : $b944f327406e77d1$var$utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
$b944f327406e77d1$var$Buffer.byteLength = $b944f327406e77d1$var$byteLength;
function $b944f327406e77d1$var$slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return $b944f327406e77d1$var$hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return $b944f327406e77d1$var$utf8Slice(this, start, end);
        case 'ascii':
            return $b944f327406e77d1$var$asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return $b944f327406e77d1$var$latin1Slice(this, start, end);
        case 'base64':
            return $b944f327406e77d1$var$base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $b944f327406e77d1$var$utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
$b944f327406e77d1$var$Buffer.prototype._isBuffer = true;
function $b944f327406e77d1$var$swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
$b944f327406e77d1$var$Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)$b944f327406e77d1$var$swap(this, i, i + 1);
    return this;
};
$b944f327406e77d1$var$Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        $b944f327406e77d1$var$swap(this, i, i + 3);
        $b944f327406e77d1$var$swap(this, i + 1, i + 2);
    }
    return this;
};
$b944f327406e77d1$var$Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        $b944f327406e77d1$var$swap(this, i, i + 7);
        $b944f327406e77d1$var$swap(this, i + 1, i + 6);
        $b944f327406e77d1$var$swap(this, i + 2, i + 5);
        $b944f327406e77d1$var$swap(this, i + 3, i + 4);
    }
    return this;
};
$b944f327406e77d1$var$Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return $b944f327406e77d1$var$utf8Slice(this, 0, length);
    return $b944f327406e77d1$var$slowToString.apply(this, arguments);
};
$b944f327406e77d1$var$Buffer.prototype.toLocaleString = $b944f327406e77d1$var$Buffer.prototype.toString;
$b944f327406e77d1$var$Buffer.prototype.equals = function equals(b) {
    if (!$b944f327406e77d1$var$Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return $b944f327406e77d1$var$Buffer.compare(this, b) === 0;
};
$b944f327406e77d1$var$Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = $b944f327406e77d1$export$f99ded8fe4b79145;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if ($b944f327406e77d1$var$customInspectSymbol) $b944f327406e77d1$var$Buffer.prototype[$b944f327406e77d1$var$customInspectSymbol] = $b944f327406e77d1$var$Buffer.prototype.inspect;
$b944f327406e77d1$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($b944f327406e77d1$var$isInstance(target, Uint8Array)) target = $b944f327406e77d1$var$Buffer.from(target, target.offset, target.byteLength);
    if (!$b944f327406e77d1$var$Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function $b944f327406e77d1$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if ($b944f327406e77d1$var$numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = $b944f327406e77d1$var$Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($b944f327406e77d1$var$Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return $b944f327406e77d1$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return $b944f327406e77d1$var$arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function $b944f327406e77d1$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
$b944f327406e77d1$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
$b944f327406e77d1$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $b944f327406e77d1$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
$b944f327406e77d1$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $b944f327406e77d1$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function $b944f327406e77d1$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if ($b944f327406e77d1$var$numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function $b944f327406e77d1$var$utf8Write(buf, string, offset, length) {
    return $b944f327406e77d1$var$blitBuffer($b944f327406e77d1$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function $b944f327406e77d1$var$asciiWrite(buf, string, offset, length) {
    return $b944f327406e77d1$var$blitBuffer($b944f327406e77d1$var$asciiToBytes(string), buf, offset, length);
}
function $b944f327406e77d1$var$base64Write(buf, string, offset, length) {
    return $b944f327406e77d1$var$blitBuffer($b944f327406e77d1$var$base64ToBytes(string), buf, offset, length);
}
function $b944f327406e77d1$var$ucs2Write(buf, string, offset, length) {
    return $b944f327406e77d1$var$blitBuffer($b944f327406e77d1$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
$b944f327406e77d1$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return $b944f327406e77d1$var$hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return $b944f327406e77d1$var$utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return $b944f327406e77d1$var$asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return $b944f327406e77d1$var$base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $b944f327406e77d1$var$ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
$b944f327406e77d1$var$Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function $b944f327406e77d1$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return $88LF6.fromByteArray(buf);
    else return $88LF6.fromByteArray(buf.slice(start, end));
}
function $b944f327406e77d1$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return $b944f327406e77d1$var$decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var $b944f327406e77d1$var$MAX_ARGUMENTS_LENGTH = 4096;
function $b944f327406e77d1$var$decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= $b944f327406e77d1$var$MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += $b944f327406e77d1$var$MAX_ARGUMENTS_LENGTH));
    return res;
}
function $b944f327406e77d1$var$asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function $b944f327406e77d1$var$latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function $b944f327406e77d1$var$hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += $b944f327406e77d1$var$hexSliceLookupTable[buf[i]];
    return out;
}
function $b944f327406e77d1$var$utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
$b944f327406e77d1$var$Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $b944f327406e77d1$var$Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function $b944f327406e77d1$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
$b944f327406e77d1$var$Buffer.prototype.readUintLE = $b944f327406e77d1$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
$b944f327406e77d1$var$Buffer.prototype.readUintBE = $b944f327406e77d1$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
    return val;
};
$b944f327406e77d1$var$Buffer.prototype.readUint8 = $b944f327406e77d1$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 1, this.length);
    return this[offset];
};
$b944f327406e77d1$var$Buffer.prototype.readUint16LE = $b944f327406e77d1$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
$b944f327406e77d1$var$Buffer.prototype.readUint16BE = $b944f327406e77d1$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
$b944f327406e77d1$var$Buffer.prototype.readUint32LE = $b944f327406e77d1$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
$b944f327406e77d1$var$Buffer.prototype.readUint32BE = $b944f327406e77d1$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
$b944f327406e77d1$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$b944f327406e77d1$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$b944f327406e77d1$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
$b944f327406e77d1$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
$b944f327406e77d1$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
$b944f327406e77d1$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
$b944f327406e77d1$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
$b944f327406e77d1$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 4, this.length);
    return $2KEWM.read(this, offset, true, 23, 4);
};
$b944f327406e77d1$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 4, this.length);
    return $2KEWM.read(this, offset, false, 23, 4);
};
$b944f327406e77d1$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 8, this.length);
    return $2KEWM.read(this, offset, true, 52, 8);
};
$b944f327406e77d1$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkOffset(offset, 8, this.length);
    return $2KEWM.read(this, offset, false, 52, 8);
};
function $b944f327406e77d1$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$b944f327406e77d1$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
$b944f327406e77d1$var$Buffer.prototype.writeUintLE = $b944f327406e77d1$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $b944f327406e77d1$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
$b944f327406e77d1$var$Buffer.prototype.writeUintBE = $b944f327406e77d1$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $b944f327406e77d1$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
$b944f327406e77d1$var$Buffer.prototype.writeUint8 = $b944f327406e77d1$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
$b944f327406e77d1$var$Buffer.prototype.writeUint16LE = $b944f327406e77d1$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$b944f327406e77d1$var$Buffer.prototype.writeUint16BE = $b944f327406e77d1$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
$b944f327406e77d1$var$Buffer.prototype.writeUint32LE = $b944f327406e77d1$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
$b944f327406e77d1$var$Buffer.prototype.writeUint32BE = $b944f327406e77d1$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
$b944f327406e77d1$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        $b944f327406e77d1$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
$b944f327406e77d1$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        $b944f327406e77d1$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
$b944f327406e77d1$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
$b944f327406e77d1$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$b944f327406e77d1$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
$b944f327406e77d1$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
$b944f327406e77d1$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function $b944f327406e77d1$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function $b944f327406e77d1$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    $2KEWM.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
$b944f327406e77d1$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $b944f327406e77d1$var$writeFloat(this, value, offset, true, noAssert);
};
$b944f327406e77d1$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $b944f327406e77d1$var$writeFloat(this, value, offset, false, noAssert);
};
function $b944f327406e77d1$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $b944f327406e77d1$var$checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    $2KEWM.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
$b944f327406e77d1$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $b944f327406e77d1$var$writeDouble(this, value, offset, true, noAssert);
};
$b944f327406e77d1$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $b944f327406e77d1$var$writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
$b944f327406e77d1$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$b944f327406e77d1$var$Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
$b944f327406e77d1$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !$b944f327406e77d1$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = $b944f327406e77d1$var$Buffer.isBuffer(val) ? val : $b944f327406e77d1$var$Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var $b944f327406e77d1$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function $b944f327406e77d1$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($b944f327406e77d1$var$INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function $b944f327406e77d1$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function $b944f327406e77d1$var$asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function $b944f327406e77d1$var$utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function $b944f327406e77d1$var$base64ToBytes(str) {
    return $88LF6.toByteArray($b944f327406e77d1$var$base64clean(str));
}
function $b944f327406e77d1$var$blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function $b944f327406e77d1$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function $b944f327406e77d1$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var $b944f327406e77d1$var$hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

});
parcelRequire.register("88LF6", function(module, exports) {

$parcel$export(module.exports, "toByteArray", () => $5ed40abdbaf740e2$export$d622b2ad8d90c771, (v) => $5ed40abdbaf740e2$export$d622b2ad8d90c771 = v);
$parcel$export(module.exports, "fromByteArray", () => $5ed40abdbaf740e2$export$6100ba28696e12de, (v) => $5ed40abdbaf740e2$export$6100ba28696e12de = v);
var $5ed40abdbaf740e2$export$a48f0734ac7c2329;
var $5ed40abdbaf740e2$export$d622b2ad8d90c771;
var $5ed40abdbaf740e2$export$6100ba28696e12de;
'use strict';
$5ed40abdbaf740e2$export$a48f0734ac7c2329 = $5ed40abdbaf740e2$var$byteLength;
$5ed40abdbaf740e2$export$d622b2ad8d90c771 = $5ed40abdbaf740e2$var$toByteArray;
$5ed40abdbaf740e2$export$6100ba28696e12de = $5ed40abdbaf740e2$var$fromByteArray;
var $5ed40abdbaf740e2$var$lookup = [];
var $5ed40abdbaf740e2$var$revLookup = [];
var $5ed40abdbaf740e2$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var $5ed40abdbaf740e2$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var $5ed40abdbaf740e2$var$i = 0, $5ed40abdbaf740e2$var$len = $5ed40abdbaf740e2$var$code.length; $5ed40abdbaf740e2$var$i < $5ed40abdbaf740e2$var$len; ++$5ed40abdbaf740e2$var$i){
    $5ed40abdbaf740e2$var$lookup[$5ed40abdbaf740e2$var$i] = $5ed40abdbaf740e2$var$code[$5ed40abdbaf740e2$var$i];
    $5ed40abdbaf740e2$var$revLookup[$5ed40abdbaf740e2$var$code.charCodeAt($5ed40abdbaf740e2$var$i)] = $5ed40abdbaf740e2$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$5ed40abdbaf740e2$var$revLookup['-'.charCodeAt(0)] = 62;
$5ed40abdbaf740e2$var$revLookup['_'.charCodeAt(0)] = 63;
function $5ed40abdbaf740e2$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $5ed40abdbaf740e2$var$byteLength(b64) {
    var lens = $5ed40abdbaf740e2$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $5ed40abdbaf740e2$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $5ed40abdbaf740e2$var$toByteArray(b64) {
    var tmp;
    var lens = $5ed40abdbaf740e2$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $5ed40abdbaf740e2$var$Arr($5ed40abdbaf740e2$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i)] << 18 | $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i)] << 2 | $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i)] << 10 | $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $5ed40abdbaf740e2$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function $5ed40abdbaf740e2$var$tripletToBase64(num) {
    return $5ed40abdbaf740e2$var$lookup[num >> 18 & 63] + $5ed40abdbaf740e2$var$lookup[num >> 12 & 63] + $5ed40abdbaf740e2$var$lookup[num >> 6 & 63] + $5ed40abdbaf740e2$var$lookup[num & 63];
}
function $5ed40abdbaf740e2$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push($5ed40abdbaf740e2$var$tripletToBase64(tmp));
    }
    return output.join('');
}
function $5ed40abdbaf740e2$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($5ed40abdbaf740e2$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($5ed40abdbaf740e2$var$lookup[tmp >> 2] + $5ed40abdbaf740e2$var$lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($5ed40abdbaf740e2$var$lookup[tmp >> 10] + $5ed40abdbaf740e2$var$lookup[tmp >> 4 & 63] + $5ed40abdbaf740e2$var$lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

});

parcelRequire.register("2KEWM", function(module, exports) {

$parcel$export(module.exports, "read", () => $200fa3e1759bfae0$export$aafa59e2e03f2942, (v) => $200fa3e1759bfae0$export$aafa59e2e03f2942 = v);
$parcel$export(module.exports, "write", () => $200fa3e1759bfae0$export$68d8715fc104d294, (v) => $200fa3e1759bfae0$export$68d8715fc104d294 = v);
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $200fa3e1759bfae0$export$aafa59e2e03f2942;
var $200fa3e1759bfae0$export$68d8715fc104d294;
$200fa3e1759bfae0$export$aafa59e2e03f2942 = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
$200fa3e1759bfae0$export$68d8715fc104d294 = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

});


parcelRequire.register("bGfFz", function(module, exports) {
"use strict";

});

parcelRequire.register("gHrU2", function(module, exports) {
'use strict';
function $c2864e6c12f309da$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $c2864e6c12f309da$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) $c2864e6c12f309da$var$ownKeys(Object(source), true).forEach(function(key) {
            $c2864e6c12f309da$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $c2864e6c12f309da$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $c2864e6c12f309da$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $c2864e6c12f309da$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $c2864e6c12f309da$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $c2864e6c12f309da$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $c2864e6c12f309da$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $c2864e6c12f309da$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

var $fUbqx = parcelRequire("fUbqx");
var $c2864e6c12f309da$var$Buffer = $fUbqx.Buffer;

var $bGfFz = parcelRequire("bGfFz");
var $c2864e6c12f309da$var$inspect = $bGfFz.inspect;
var $c2864e6c12f309da$var$custom = $c2864e6c12f309da$var$inspect && $c2864e6c12f309da$var$inspect.custom || 'inspect';
function $c2864e6c12f309da$var$copyBuffer(src, target, offset) {
    $c2864e6c12f309da$var$Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ (function() {
    function BufferList() {
        $c2864e6c12f309da$var$_classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    $c2864e6c12f309da$var$_createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return $c2864e6c12f309da$var$Buffer.alloc(0);
                var ret = $c2864e6c12f309da$var$Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    $c2864e6c12f309da$var$copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            } // Consumes a specified amount of bytes or characters from the buffered data.
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            } // Consumes a specified amount of characters from the buffered data.
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Consumes a specified amount of bytes from the buffered data.
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = $c2864e6c12f309da$var$Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Make sure the linked list only shows the minimal necessary information.
        },
        {
            key: $c2864e6c12f309da$var$custom,
            value: function value(_, options) {
                return $c2864e6c12f309da$var$inspect(this, $c2864e6c12f309da$var$_objectSpread({
                }, options, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
})();

});

parcelRequire.register("7BL3c", function(module, exports) {

var $g1iKT = parcelRequire("g1iKT");
'use strict'; // undocumented cb() API, needed for core, not for public API
function $58a07c5ceb9a4a61$var$destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitErrorNT, this, err);
            }
        }
        return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
     // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitErrorAndCloseNT, _this, err);
            } else $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitCloseNT, _this);
        } else if (cb) {
            $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitCloseNT, _this);
            cb(err);
        } else $g1iKT.nextTick($58a07c5ceb9a4a61$var$emitCloseNT, _this);
    });
    return this;
}
function $58a07c5ceb9a4a61$var$emitErrorAndCloseNT(self, err) {
    $58a07c5ceb9a4a61$var$emitErrorNT(self, err);
    $58a07c5ceb9a4a61$var$emitCloseNT(self);
}
function $58a07c5ceb9a4a61$var$emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function $58a07c5ceb9a4a61$var$undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function $58a07c5ceb9a4a61$var$emitErrorNT(self, err) {
    self.emit('error', err);
}
function $58a07c5ceb9a4a61$var$errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: $58a07c5ceb9a4a61$var$destroy,
    undestroy: $58a07c5ceb9a4a61$var$undestroy,
    errorOrDestroy: $58a07c5ceb9a4a61$var$errorOrDestroy
};

});

parcelRequire.register("eMlA3", function(module, exports) {
'use strict';

var $j3eBO = parcelRequire("j3eBO");
var $ac2649ce3bbf7563$var$ERR_INVALID_OPT_VALUE = $j3eBO.codes.ERR_INVALID_OPT_VALUE;
function $ac2649ce3bbf7563$var$highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function $ac2649ce3bbf7563$var$getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = $ac2649ce3bbf7563$var$highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new $ac2649ce3bbf7563$var$ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    } // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: $ac2649ce3bbf7563$var$getHighWaterMark
};

});
parcelRequire.register("j3eBO", function(module, exports) {

$parcel$export(module.exports, "codes", () => $dde9a121cbdbc9ea$export$e45cb6485273080e, (v) => $dde9a121cbdbc9ea$export$e45cb6485273080e = v);
var $dde9a121cbdbc9ea$export$e45cb6485273080e;
'use strict';
function $dde9a121cbdbc9ea$var$_inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var $dde9a121cbdbc9ea$var$codes = {
};
function $dde9a121cbdbc9ea$var$createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        $dde9a121cbdbc9ea$var$_inheritsLoose(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError;
    }(Base);
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    $dde9a121cbdbc9ea$var$codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function $dde9a121cbdbc9ea$var$oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function $dde9a121cbdbc9ea$var$startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $dde9a121cbdbc9ea$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function $dde9a121cbdbc9ea$var$includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
$dde9a121cbdbc9ea$var$createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
$dde9a121cbdbc9ea$var$createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && $dde9a121cbdbc9ea$var$startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if ($dde9a121cbdbc9ea$var$endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat($dde9a121cbdbc9ea$var$oneOf(expected, 'type'));
    else {
        var type = $dde9a121cbdbc9ea$var$includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat($dde9a121cbdbc9ea$var$oneOf(expected, 'type'));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
$dde9a121cbdbc9ea$var$createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
$dde9a121cbdbc9ea$var$createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
$dde9a121cbdbc9ea$var$createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
$dde9a121cbdbc9ea$var$createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
$dde9a121cbdbc9ea$export$e45cb6485273080e = $dde9a121cbdbc9ea$var$codes;

});


parcelRequire.register("kkRmS", function(module, exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});

parcelRequire.register("hOZQ4", function(module, exports) {

var $g1iKT = parcelRequire("g1iKT");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/ var $cf9713113d34fe17$var$objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = $cf9713113d34fe17$var$Duplex;

var $3eJKS = parcelRequire("3eJKS");

var $cWhsJ = parcelRequire("cWhsJ");

(parcelRequire("kkRmS"))($cf9713113d34fe17$var$Duplex, $3eJKS);
// Allow the keys array to be GC'ed.
var $cf9713113d34fe17$var$keys = $cf9713113d34fe17$var$objectKeys($cWhsJ.prototype);
for(var $cf9713113d34fe17$var$v = 0; $cf9713113d34fe17$var$v < $cf9713113d34fe17$var$keys.length; $cf9713113d34fe17$var$v++){
    var $cf9713113d34fe17$var$method = $cf9713113d34fe17$var$keys[$cf9713113d34fe17$var$v];
    if (!$cf9713113d34fe17$var$Duplex.prototype[$cf9713113d34fe17$var$method]) $cf9713113d34fe17$var$Duplex.prototype[$cf9713113d34fe17$var$method] = $cWhsJ.prototype[$cf9713113d34fe17$var$method];
}
function $cf9713113d34fe17$var$Duplex(options) {
    if (!(this instanceof $cf9713113d34fe17$var$Duplex)) return new $cf9713113d34fe17$var$Duplex(options);
    $3eJKS.call(this, options);
    $cWhsJ.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', $cf9713113d34fe17$var$onend);
        }
    }
}
Object.defineProperty($cf9713113d34fe17$var$Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty($cf9713113d34fe17$var$Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty($cf9713113d34fe17$var$Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
}); // the no-half-open enforcer
function $cf9713113d34fe17$var$onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.
    $g1iKT.nextTick($cf9713113d34fe17$var$onEndNT, this);
}
function $cf9713113d34fe17$var$onEndNT(self) {
    self.end();
}
Object.defineProperty($cf9713113d34fe17$var$Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

});
parcelRequire.register("cWhsJ", function(module, exports) {

var $g1iKT = parcelRequire("g1iKT");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
module.exports = $96b8727d0d16d052$var$Writable;
/* <replacement> */ function $96b8727d0d16d052$var$WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream
function $96b8727d0d16d052$var$CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        $96b8727d0d16d052$var$onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var $96b8727d0d16d052$var$Duplex;
/*</replacement>*/ $96b8727d0d16d052$var$Writable.WritableState = $96b8727d0d16d052$var$WritableState;

/*<replacement>*/ var $96b8727d0d16d052$var$internalUtil = {
    deprecate: (parcelRequire("5uB5Y"))
};

var $972ZO = parcelRequire("972ZO");

var $fUbqx = parcelRequire("fUbqx");
var $96b8727d0d16d052$require$Buffer = $fUbqx.Buffer;
var $96b8727d0d16d052$var$OurUint8Array = $parcel$global.Uint8Array || function() {
};
function $96b8727d0d16d052$var$_uint8ArrayToBuffer(chunk) {
    return $96b8727d0d16d052$require$Buffer.from(chunk);
}
function $96b8727d0d16d052$var$_isUint8Array(obj) {
    return $96b8727d0d16d052$require$Buffer.isBuffer(obj) || obj instanceof $96b8727d0d16d052$var$OurUint8Array;
}

var $7BL3c = parcelRequire("7BL3c");

var $eMlA3 = parcelRequire("eMlA3");
var $96b8727d0d16d052$var$getHighWaterMark = $eMlA3.getHighWaterMark;

var $j3eBO = parcelRequire("j3eBO");
var $96b8727d0d16d052$require$_require$codes = $j3eBO.codes;
var $96b8727d0d16d052$var$ERR_INVALID_ARG_TYPE = $96b8727d0d16d052$require$_require$codes.ERR_INVALID_ARG_TYPE, $96b8727d0d16d052$var$ERR_METHOD_NOT_IMPLEMENTED = $96b8727d0d16d052$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $96b8727d0d16d052$var$ERR_MULTIPLE_CALLBACK = $96b8727d0d16d052$require$_require$codes.ERR_MULTIPLE_CALLBACK, $96b8727d0d16d052$var$ERR_STREAM_CANNOT_PIPE = $96b8727d0d16d052$require$_require$codes.ERR_STREAM_CANNOT_PIPE, $96b8727d0d16d052$var$ERR_STREAM_DESTROYED = $96b8727d0d16d052$require$_require$codes.ERR_STREAM_DESTROYED, $96b8727d0d16d052$var$ERR_STREAM_NULL_VALUES = $96b8727d0d16d052$require$_require$codes.ERR_STREAM_NULL_VALUES, $96b8727d0d16d052$var$ERR_STREAM_WRITE_AFTER_END = $96b8727d0d16d052$require$_require$codes.ERR_STREAM_WRITE_AFTER_END, $96b8727d0d16d052$var$ERR_UNKNOWN_ENCODING = $96b8727d0d16d052$require$_require$codes.ERR_UNKNOWN_ENCODING;
var $96b8727d0d16d052$var$errorOrDestroy = $7BL3c.errorOrDestroy;

(parcelRequire("kkRmS"))($96b8727d0d16d052$var$Writable, $972ZO);
function $96b8727d0d16d052$var$nop() {
}

function $96b8727d0d16d052$var$WritableState(options, stream, isDuplex) {
    $96b8727d0d16d052$var$Duplex = $96b8727d0d16d052$var$Duplex || (parcelRequire("hOZQ4"));
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof $96b8727d0d16d052$var$Duplex; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = $96b8727d0d16d052$var$getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called
    this.finalCalled = false; // drain event flag.
    this.needDrain = false; // at the start of calling end()
    this.ending = false; // when end() has been called, and returned
    this.ended = false; // when 'finish' is emitted
    this.finished = false; // has it been destroyed
    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0; // a flag to see when we're in the middle of a write.
    this.writing = false; // when true all writes will be buffered until .uncork() call
    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        $96b8727d0d16d052$var$onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null; // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false; // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy; // count buffered requests
    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new $96b8727d0d16d052$var$CorkedRequest(this);
}
$96b8727d0d16d052$var$WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty($96b8727d0d16d052$var$WritableState.prototype, 'buffer', {
            get: $96b8727d0d16d052$var$internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
    } catch (_) {
    }
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var $96b8727d0d16d052$var$realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    $96b8727d0d16d052$var$realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty($96b8727d0d16d052$var$Writable, Symbol.hasInstance, {
        value: function value(object) {
            if ($96b8727d0d16d052$var$realHasInstance.call(this, object)) return true;
            if (this !== $96b8727d0d16d052$var$Writable) return false;
            return object && object._writableState instanceof $96b8727d0d16d052$var$WritableState;
        }
    });
} else $96b8727d0d16d052$var$realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};

function $96b8727d0d16d052$var$Writable(options) {
    $96b8727d0d16d052$var$Duplex = $96b8727d0d16d052$var$Duplex || (parcelRequire("hOZQ4")); // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $96b8727d0d16d052$var$Duplex;
    if (!isDuplex && !$96b8727d0d16d052$var$realHasInstance.call($96b8727d0d16d052$var$Writable, this)) return new $96b8727d0d16d052$var$Writable(options);
    this._writableState = new $96b8727d0d16d052$var$WritableState(options, this, isDuplex); // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    $972ZO.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.
$96b8727d0d16d052$var$Writable.prototype.pipe = function() {
    $96b8727d0d16d052$var$errorOrDestroy(this, new $96b8727d0d16d052$var$ERR_STREAM_CANNOT_PIPE());
};
function $96b8727d0d16d052$var$writeAfterEnd(stream, cb) {
    var er = new $96b8727d0d16d052$var$ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb
    $96b8727d0d16d052$var$errorOrDestroy(stream, er);
    $g1iKT.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function $96b8727d0d16d052$var$validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new $96b8727d0d16d052$var$ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== 'string' && !state.objectMode) er = new $96b8727d0d16d052$var$ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer'
    ], chunk);
    if (er) {
        $96b8727d0d16d052$var$errorOrDestroy(stream, er);
        $g1iKT.nextTick(cb, er);
        return false;
    }
    return true;
}
$96b8727d0d16d052$var$Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && $96b8727d0d16d052$var$_isUint8Array(chunk);
    if (isBuf && !$96b8727d0d16d052$require$Buffer.isBuffer(chunk)) chunk = $96b8727d0d16d052$var$_uint8ArrayToBuffer(chunk);
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = $96b8727d0d16d052$var$nop;
    if (state.ending) $96b8727d0d16d052$var$writeAfterEnd(this, cb);
    else if (isBuf || $96b8727d0d16d052$var$validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = $96b8727d0d16d052$var$writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
$96b8727d0d16d052$var$Writable.prototype.cork = function() {
    this._writableState.corked++;
};
$96b8727d0d16d052$var$Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) $96b8727d0d16d052$var$clearBuffer(this, state);
    }
};
$96b8727d0d16d052$var$Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new $96b8727d0d16d052$var$ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty($96b8727d0d16d052$var$Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function $96b8727d0d16d052$var$decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') chunk = $96b8727d0d16d052$require$Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty($96b8727d0d16d052$var$Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function $96b8727d0d16d052$var$writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = $96b8727d0d16d052$var$decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else $96b8727d0d16d052$var$doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function $96b8727d0d16d052$var$doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new $96b8727d0d16d052$var$ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function $96b8727d0d16d052$var$onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        $g1iKT.nextTick(cb, er); // this can emit finish, and it will always happen
        // after error
        $g1iKT.nextTick($96b8727d0d16d052$var$finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        $96b8727d0d16d052$var$errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        $96b8727d0d16d052$var$errorOrDestroy(stream, er); // this can emit finish, but finish must
        // always follow error
        $96b8727d0d16d052$var$finishMaybe(stream, state);
    }
}
function $96b8727d0d16d052$var$onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function $96b8727d0d16d052$var$onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new $96b8727d0d16d052$var$ERR_MULTIPLE_CALLBACK();
    $96b8727d0d16d052$var$onwriteStateUpdate(state);
    if (er) $96b8727d0d16d052$var$onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = $96b8727d0d16d052$var$needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) $96b8727d0d16d052$var$clearBuffer(stream, state);
        if (sync) $g1iKT.nextTick($96b8727d0d16d052$var$afterWrite, stream, state, finished, cb);
        else $96b8727d0d16d052$var$afterWrite(stream, state, finished, cb);
    }
}
function $96b8727d0d16d052$var$afterWrite(stream, state, finished, cb) {
    if (!finished) $96b8727d0d16d052$var$onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    $96b8727d0d16d052$var$finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function $96b8727d0d16d052$var$onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
} // if there's something in the buffer waiting, then process it
function $96b8727d0d16d052$var$clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        $96b8727d0d16d052$var$doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new $96b8727d0d16d052$var$CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            $96b8727d0d16d052$var$doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
$96b8727d0d16d052$var$Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new $96b8727d0d16d052$var$ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
$96b8727d0d16d052$var$Writable.prototype._writev = null;
$96b8727d0d16d052$var$Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    } // ignore unnecessary end() calls.
    if (!state.ending) $96b8727d0d16d052$var$endWritable(this, state, cb);
    return this;
};
Object.defineProperty($96b8727d0d16d052$var$Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function $96b8727d0d16d052$var$needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function $96b8727d0d16d052$var$callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) $96b8727d0d16d052$var$errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit('prefinish');
        $96b8727d0d16d052$var$finishMaybe(stream, state);
    });
}
function $96b8727d0d16d052$var$prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            $g1iKT.nextTick($96b8727d0d16d052$var$callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function $96b8727d0d16d052$var$finishMaybe(stream, state) {
    var need = $96b8727d0d16d052$var$needFinish(state);
    if (need) {
        $96b8727d0d16d052$var$prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function $96b8727d0d16d052$var$endWritable(stream, state, cb) {
    state.ending = true;
    $96b8727d0d16d052$var$finishMaybe(stream, state);
    if (cb) {
        if (state.finished) $g1iKT.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function $96b8727d0d16d052$var$onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    } // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty($96b8727d0d16d052$var$Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
$96b8727d0d16d052$var$Writable.prototype.destroy = $7BL3c.destroy;
$96b8727d0d16d052$var$Writable.prototype._undestroy = $7BL3c.undestroy;
$96b8727d0d16d052$var$Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

});
parcelRequire.register("5uB5Y", function(module, exports) {
/**
 * Module exports.
 */ module.exports = $3ffc877275f94131$var$deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function $3ffc877275f94131$var$deprecate(fn, msg) {
    if ($3ffc877275f94131$var$config('noDeprecation')) return fn;
    var warned = false;
    function deprecated() {
        if (!warned) {
            if ($3ffc877275f94131$var$config('throwDeprecation')) throw new Error(msg);
            else if ($3ffc877275f94131$var$config('traceDeprecation')) console.trace(msg);
            else console.warn(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function $3ffc877275f94131$var$config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!$parcel$global.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = $parcel$global.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === 'true';
}

});



parcelRequire.register("2ZWI6", function(module, exports) {

$parcel$export(module.exports, "StringDecoder", () => $22eed1e76d5647f0$export$63a7aa211a91ed69, (v) => $22eed1e76d5647f0$export$63a7aa211a91ed69 = v);
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var $22eed1e76d5647f0$export$63a7aa211a91ed69;
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var $3dnr9 = parcelRequire("3dnr9");
var $22eed1e76d5647f0$require$Buffer = $3dnr9.Buffer;
/*</replacement>*/ var $22eed1e76d5647f0$var$isEncoding = $22eed1e76d5647f0$require$Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function $22eed1e76d5647f0$var$_normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true)switch(enc){
        case 'utf8':
        case 'utf-8':
            return 'utf8';
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return 'utf16le';
        case 'latin1':
        case 'binary':
            return 'latin1';
        case 'base64':
        case 'ascii':
        case 'hex':
            return enc;
        default:
            if (retried) return; // undefined
            enc = ('' + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function $22eed1e76d5647f0$var$normalizeEncoding(enc) {
    var nenc = $22eed1e76d5647f0$var$_normalizeEncoding(enc);
    if (typeof nenc !== 'string' && ($22eed1e76d5647f0$require$Buffer.isEncoding === $22eed1e76d5647f0$var$isEncoding || !$22eed1e76d5647f0$var$isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
$22eed1e76d5647f0$export$63a7aa211a91ed69 = $22eed1e76d5647f0$var$StringDecoder;
function $22eed1e76d5647f0$var$StringDecoder(encoding) {
    this.encoding = $22eed1e76d5647f0$var$normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = $22eed1e76d5647f0$var$utf16Text;
            this.end = $22eed1e76d5647f0$var$utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = $22eed1e76d5647f0$var$utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = $22eed1e76d5647f0$var$base64Text;
            this.end = $22eed1e76d5647f0$var$base64End;
            nb = 3;
            break;
        default:
            this.write = $22eed1e76d5647f0$var$simpleWrite;
            this.end = $22eed1e76d5647f0$var$simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = $22eed1e76d5647f0$require$Buffer.allocUnsafe(nb);
}
$22eed1e76d5647f0$var$StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
$22eed1e76d5647f0$var$StringDecoder.prototype.end = $22eed1e76d5647f0$var$utf8End;
// Returns only complete characters in a Buffer
$22eed1e76d5647f0$var$StringDecoder.prototype.text = $22eed1e76d5647f0$var$utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
$22eed1e76d5647f0$var$StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function $22eed1e76d5647f0$var$utf8CheckByte(byte) {
    if (byte <= 127) return 0;
    else if (byte >> 5 === 6) return 2;
    else if (byte >> 4 === 14) return 3;
    else if (byte >> 3 === 30) return 4;
    return byte >> 6 === 2 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function $22eed1e76d5647f0$var$utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = $22eed1e76d5647f0$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = $22eed1e76d5647f0$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = $22eed1e76d5647f0$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function $22eed1e76d5647f0$var$utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function $22eed1e76d5647f0$var$utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = $22eed1e76d5647f0$var$utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function $22eed1e76d5647f0$var$utf8Text(buf, i) {
    var total = $22eed1e76d5647f0$var$utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function $22eed1e76d5647f0$var$utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function $22eed1e76d5647f0$var$utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function $22eed1e76d5647f0$var$utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function $22eed1e76d5647f0$var$base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function $22eed1e76d5647f0$var$base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function $22eed1e76d5647f0$var$simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function $22eed1e76d5647f0$var$simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}

});
parcelRequire.register("3dnr9", function(module, exports) {

var $fUbqx = parcelRequire("fUbqx");
var $2574c40eca7d7a1b$var$Buffer = $fUbqx.Buffer;
// alternative to using Object.keys for old browsers
function $2574c40eca7d7a1b$var$copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if ($2574c40eca7d7a1b$var$Buffer.from && $2574c40eca7d7a1b$var$Buffer.alloc && $2574c40eca7d7a1b$var$Buffer.allocUnsafe && $2574c40eca7d7a1b$var$Buffer.allocUnsafeSlow) module.exports = $fUbqx;
else {
    // Copy properties from require('buffer')
    $2574c40eca7d7a1b$var$copyProps($fUbqx, module.exports);
    module.exports.Buffer = $2574c40eca7d7a1b$var$SafeBuffer;
}
function $2574c40eca7d7a1b$var$SafeBuffer(arg, encodingOrOffset, length) {
    return $2574c40eca7d7a1b$var$Buffer(arg, encodingOrOffset, length);
}
$2574c40eca7d7a1b$var$SafeBuffer.prototype = Object.create($2574c40eca7d7a1b$var$Buffer.prototype);
// Copy static methods from Buffer
$2574c40eca7d7a1b$var$copyProps($2574c40eca7d7a1b$var$Buffer, $2574c40eca7d7a1b$var$SafeBuffer);
$2574c40eca7d7a1b$var$SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return $2574c40eca7d7a1b$var$Buffer(arg, encodingOrOffset, length);
};
$2574c40eca7d7a1b$var$SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = $2574c40eca7d7a1b$var$Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
$2574c40eca7d7a1b$var$SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return $2574c40eca7d7a1b$var$Buffer(size);
};
$2574c40eca7d7a1b$var$SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return $fUbqx.SlowBuffer(size);
};

});


parcelRequire.register("hfZob", function(module, exports) {

var $g1iKT = parcelRequire("g1iKT");
'use strict';
var $c90374f804518e6f$var$_Object$setPrototypeO;
function $c90374f804518e6f$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

var $14Hqr = parcelRequire("14Hqr");
var $c90374f804518e6f$var$kLastResolve = Symbol('lastResolve');
var $c90374f804518e6f$var$kLastReject = Symbol('lastReject');
var $c90374f804518e6f$var$kError = Symbol('error');
var $c90374f804518e6f$var$kEnded = Symbol('ended');
var $c90374f804518e6f$var$kLastPromise = Symbol('lastPromise');
var $c90374f804518e6f$var$kHandlePromise = Symbol('handlePromise');
var $c90374f804518e6f$var$kStream = Symbol('stream');
function $c90374f804518e6f$var$createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function $c90374f804518e6f$var$readAndResolve(iter) {
    var resolve = iter[$c90374f804518e6f$var$kLastResolve];
    if (resolve !== null) {
        var data = iter[$c90374f804518e6f$var$kStream].read(); // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[$c90374f804518e6f$var$kLastPromise] = null;
            iter[$c90374f804518e6f$var$kLastResolve] = null;
            iter[$c90374f804518e6f$var$kLastReject] = null;
            resolve($c90374f804518e6f$var$createIterResult(data, false));
        }
    }
}
function $c90374f804518e6f$var$onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    $g1iKT.nextTick($c90374f804518e6f$var$readAndResolve, iter);
}
function $c90374f804518e6f$var$wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[$c90374f804518e6f$var$kEnded]) {
                resolve($c90374f804518e6f$var$createIterResult(undefined, true));
                return;
            }
            iter[$c90374f804518e6f$var$kHandlePromise](resolve, reject);
        }, reject);
    };
}
var $c90374f804518e6f$var$AsyncIteratorPrototype = Object.getPrototypeOf(function() {
});
var $c90374f804518e6f$var$ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(($c90374f804518e6f$var$_Object$setPrototypeO = {
    get stream () {
        return this[$c90374f804518e6f$var$kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[$c90374f804518e6f$var$kError];
        if (error !== null) return Promise.reject(error);
        if (this[$c90374f804518e6f$var$kEnded]) return Promise.resolve($c90374f804518e6f$var$createIterResult(undefined, true));
        if (this[$c90374f804518e6f$var$kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            $g1iKT.nextTick(function() {
                if (_this[$c90374f804518e6f$var$kError]) reject(_this[$c90374f804518e6f$var$kError]);
                else resolve($c90374f804518e6f$var$createIterResult(undefined, true));
            });
        });
         // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[$c90374f804518e6f$var$kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise($c90374f804518e6f$var$wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[$c90374f804518e6f$var$kStream].read();
            if (data !== null) return Promise.resolve($c90374f804518e6f$var$createIterResult(data, false));
            promise = new Promise(this[$c90374f804518e6f$var$kHandlePromise]);
        }
        this[$c90374f804518e6f$var$kLastPromise] = promise;
        return promise;
    }
}, $c90374f804518e6f$var$_defineProperty($c90374f804518e6f$var$_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), $c90374f804518e6f$var$_defineProperty($c90374f804518e6f$var$_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[$c90374f804518e6f$var$kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve($c90374f804518e6f$var$createIterResult(undefined, true));
        });
    });
}), $c90374f804518e6f$var$_Object$setPrototypeO), $c90374f804518e6f$var$AsyncIteratorPrototype);
var $c90374f804518e6f$var$createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create($c90374f804518e6f$var$ReadableStreamAsyncIteratorPrototype, (_Object$create = {
    }, $c90374f804518e6f$var$_defineProperty(_Object$create, $c90374f804518e6f$var$kStream, {
        value: stream,
        writable: true
    }), $c90374f804518e6f$var$_defineProperty(_Object$create, $c90374f804518e6f$var$kLastResolve, {
        value: null,
        writable: true
    }), $c90374f804518e6f$var$_defineProperty(_Object$create, $c90374f804518e6f$var$kLastReject, {
        value: null,
        writable: true
    }), $c90374f804518e6f$var$_defineProperty(_Object$create, $c90374f804518e6f$var$kError, {
        value: null,
        writable: true
    }), $c90374f804518e6f$var$_defineProperty(_Object$create, $c90374f804518e6f$var$kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), $c90374f804518e6f$var$_defineProperty(_Object$create, $c90374f804518e6f$var$kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[$c90374f804518e6f$var$kStream].read();
            if (data) {
                iterator[$c90374f804518e6f$var$kLastPromise] = null;
                iterator[$c90374f804518e6f$var$kLastResolve] = null;
                iterator[$c90374f804518e6f$var$kLastReject] = null;
                resolve($c90374f804518e6f$var$createIterResult(data, false));
            } else {
                iterator[$c90374f804518e6f$var$kLastResolve] = resolve;
                iterator[$c90374f804518e6f$var$kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[$c90374f804518e6f$var$kLastPromise] = null;
    $14Hqr(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[$c90374f804518e6f$var$kLastReject]; // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[$c90374f804518e6f$var$kLastPromise] = null;
                iterator[$c90374f804518e6f$var$kLastResolve] = null;
                iterator[$c90374f804518e6f$var$kLastReject] = null;
                reject(err);
            }
            iterator[$c90374f804518e6f$var$kError] = err;
            return;
        }
        var resolve = iterator[$c90374f804518e6f$var$kLastResolve];
        if (resolve !== null) {
            iterator[$c90374f804518e6f$var$kLastPromise] = null;
            iterator[$c90374f804518e6f$var$kLastResolve] = null;
            iterator[$c90374f804518e6f$var$kLastReject] = null;
            resolve($c90374f804518e6f$var$createIterResult(undefined, true));
        }
        iterator[$c90374f804518e6f$var$kEnded] = true;
    });
    stream.on('readable', $c90374f804518e6f$var$onReadable.bind(null, iterator));
    return iterator;
};
module.exports = $c90374f804518e6f$var$createReadableStreamAsyncIterator;

});
parcelRequire.register("14Hqr", function(module, exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var $j3eBO = parcelRequire("j3eBO");
var $0c87d991ce94dc0d$var$ERR_STREAM_PREMATURE_CLOSE = $j3eBO.codes.ERR_STREAM_PREMATURE_CLOSE;
function $0c87d991ce94dc0d$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function $0c87d991ce94dc0d$var$noop() {
}
function $0c87d991ce94dc0d$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function $0c87d991ce94dc0d$var$eos(stream, opts, callback) {
    if (typeof opts === 'function') return $0c87d991ce94dc0d$var$eos(stream, null, opts);
    if (!opts) opts = {
    };
    callback = $0c87d991ce94dc0d$var$once(callback || $0c87d991ce94dc0d$var$noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new $0c87d991ce94dc0d$var$ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new $0c87d991ce94dc0d$var$ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on('finish', onfinish);
    };
    if ($0c87d991ce94dc0d$var$isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
}
module.exports = $0c87d991ce94dc0d$var$eos;

});


parcelRequire.register("fNmrS", function(module, exports) {
module.exports = function() {
    throw new Error('Readable.from is not available in the browser');
};

});


parcelRequire.register("cdzQh", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';
module.exports = $8e528076b85f8a70$var$Transform;

var $j3eBO = parcelRequire("j3eBO");
var $8e528076b85f8a70$require$_require$codes = $j3eBO.codes;
var $8e528076b85f8a70$var$ERR_METHOD_NOT_IMPLEMENTED = $8e528076b85f8a70$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $8e528076b85f8a70$var$ERR_MULTIPLE_CALLBACK = $8e528076b85f8a70$require$_require$codes.ERR_MULTIPLE_CALLBACK, $8e528076b85f8a70$var$ERR_TRANSFORM_ALREADY_TRANSFORMING = $8e528076b85f8a70$require$_require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, $8e528076b85f8a70$var$ERR_TRANSFORM_WITH_LENGTH_0 = $8e528076b85f8a70$require$_require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var $hOZQ4 = parcelRequire("hOZQ4");

(parcelRequire("kkRmS"))($8e528076b85f8a70$var$Transform, $hOZQ4);
function $8e528076b85f8a70$var$afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit('error', new $8e528076b85f8a70$var$ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function $8e528076b85f8a70$var$Transform(options) {
    if (!(this instanceof $8e528076b85f8a70$var$Transform)) return new $8e528076b85f8a70$var$Transform(options);
    $hOZQ4.call(this, options);
    this._transformState = {
        afterTransform: $8e528076b85f8a70$var$afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }; // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', $8e528076b85f8a70$var$prefinish);
}
function $8e528076b85f8a70$var$prefinish() {
    var _this = this;
    if (typeof this._flush === 'function' && !this._readableState.destroyed) this._flush(function(er, data) {
        $8e528076b85f8a70$var$done(_this, er, data);
    });
    else $8e528076b85f8a70$var$done(this, null, null);
}
$8e528076b85f8a70$var$Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return $hOZQ4.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
$8e528076b85f8a70$var$Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new $8e528076b85f8a70$var$ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
$8e528076b85f8a70$var$Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
$8e528076b85f8a70$var$Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
$8e528076b85f8a70$var$Transform.prototype._destroy = function(err, cb) {
    $hOZQ4.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function $8e528076b85f8a70$var$done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new $8e528076b85f8a70$var$ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new $8e528076b85f8a70$var$ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

});

parcelRequire.register("jGqPD", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';
module.exports = $e546c0cd304862e6$var$PassThrough;

var $cdzQh = parcelRequire("cdzQh");

(parcelRequire("kkRmS"))($e546c0cd304862e6$var$PassThrough, $cdzQh);
function $e546c0cd304862e6$var$PassThrough(options) {
    if (!(this instanceof $e546c0cd304862e6$var$PassThrough)) return new $e546c0cd304862e6$var$PassThrough(options);
    $cdzQh.call(this, options);
}
$e546c0cd304862e6$var$PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

});

parcelRequire.register("3zrFE", function(module, exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var $299a1acc9427630e$var$eos;
function $299a1acc9427630e$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}

var $j3eBO = parcelRequire("j3eBO");
var $299a1acc9427630e$require$_require$codes = $j3eBO.codes;
var $299a1acc9427630e$var$ERR_MISSING_ARGS = $299a1acc9427630e$require$_require$codes.ERR_MISSING_ARGS, $299a1acc9427630e$var$ERR_STREAM_DESTROYED = $299a1acc9427630e$require$_require$codes.ERR_STREAM_DESTROYED;
function $299a1acc9427630e$var$noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function $299a1acc9427630e$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}

function $299a1acc9427630e$var$destroyer(stream, reading, writing, callback) {
    callback = $299a1acc9427630e$var$once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if ($299a1acc9427630e$var$eos === undefined) $299a1acc9427630e$var$eos = (parcelRequire("14Hqr"));
    $299a1acc9427630e$var$eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true; // request.destroy just do .end - .abort is what we want
        if ($299a1acc9427630e$var$isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new $299a1acc9427630e$var$ERR_STREAM_DESTROYED('pipe'));
    };
}
function $299a1acc9427630e$var$call(fn) {
    fn();
}
function $299a1acc9427630e$var$pipe(from, to) {
    return from.pipe(to);
}
function $299a1acc9427630e$var$popCallback(streams) {
    if (!streams.length) return $299a1acc9427630e$var$noop;
    if (typeof streams[streams.length - 1] !== 'function') return $299a1acc9427630e$var$noop;
    return streams.pop();
}
function $299a1acc9427630e$var$pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = $299a1acc9427630e$var$popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new $299a1acc9427630e$var$ERR_MISSING_ARGS('streams');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return $299a1acc9427630e$var$destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach($299a1acc9427630e$var$call);
            if (reading) return;
            destroys.forEach($299a1acc9427630e$var$call);
            callback(error);
        });
    });
    return streams.reduce($299a1acc9427630e$var$pipe);
}
module.exports = $299a1acc9427630e$var$pipeline;

});



var $9pVDm = parcelRequire("9pVDm");
parcelRequire.register("78eeV", function(module, exports) {

var $fUbqx = parcelRequire("fUbqx");
var $5314537280db96ef$require$Buffer = $fUbqx.Buffer;
/* eslint-disable node/no-deprecated-api */ var $5314537280db96ef$var$toString = Object.prototype.toString;
var $5314537280db96ef$var$isModern = typeof $5314537280db96ef$require$Buffer !== 'undefined' && typeof $5314537280db96ef$require$Buffer.alloc === 'function' && typeof $5314537280db96ef$require$Buffer.allocUnsafe === 'function' && typeof $5314537280db96ef$require$Buffer.from === 'function';
function $5314537280db96ef$var$isArrayBuffer(input) {
    return $5314537280db96ef$var$toString.call(input).slice(8, -1) === 'ArrayBuffer';
}
function $5314537280db96ef$var$fromArrayBuffer(obj, byteOffset, length) {
    byteOffset >>>= 0;
    var maxLength = obj.byteLength - byteOffset;
    if (maxLength < 0) throw new RangeError("'offset' is out of bounds");
    if (length === undefined) length = maxLength;
    else {
        length >>>= 0;
        if (length > maxLength) throw new RangeError("'length' is out of bounds");
    }
    return $5314537280db96ef$var$isModern ? $5314537280db96ef$require$Buffer.from(obj.slice(byteOffset, byteOffset + length)) : new $5314537280db96ef$require$Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
}
function $5314537280db96ef$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!$5314537280db96ef$require$Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
    return $5314537280db96ef$var$isModern ? $5314537280db96ef$require$Buffer.from(string, encoding) : new $5314537280db96ef$require$Buffer(string, encoding);
}
function $5314537280db96ef$var$bufferFrom(value, encodingOrOffset, length) {
    if (typeof value === 'number') throw new TypeError('"value" argument must not be a number');
    if ($5314537280db96ef$var$isArrayBuffer(value)) return $5314537280db96ef$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'string') return $5314537280db96ef$var$fromString(value, encodingOrOffset);
    return $5314537280db96ef$var$isModern ? $5314537280db96ef$require$Buffer.from(value) : new $5314537280db96ef$require$Buffer(value);
}
module.exports = $5314537280db96ef$var$bufferFrom;

});


// some versions of the buffer browser lib don't support Buffer.from (such as the one included by the
// current version of express-browserify)
var $75710d60307e4114$var$buffer_from_1 = $75710d60307e4114$var$__importDefault((parcelRequire("78eeV")));
/**
 * Turns a MediaStream object (from getUserMedia) into a Node.js Readable stream
 * and optionally converts the audio to Buffers
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
 */ var $75710d60307e4114$var$MicrophoneStream = function(_super) {
    $75710d60307e4114$var$__extends(MicrophoneStream, _super);
    /**
     * Turns a MediaStream object (from getUserMedia) into a Node.js Readable stream
     * and optionally converts the audio to Buffers
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
     *
     * @param {Object} [opts] options
     * @param {MediaStream} [opts.stream] https://developer.mozilla.org/en-US/docs/Web/API/MediaStream - for iOS compatibility, it is recommended that you create the MicrophoneStream instance in response to the tap - before you have a MediaStream, and then later call setStream() with the MediaStream.
     * @param {Boolean} [opts.objectMode=false] Puts the stream into ObjectMode where it emits AudioBuffers instead of Buffers - see https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer
     * @param {Number|null} [opts.bufferSize=null] https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
     * @param {AudioContext} [opts.context] - AudioContext - will be automatically created if not passed in
     * @constructor
     */ function MicrophoneStream(opts) {
        if (opts === void 0) opts = {
            objectMode: false
        };
        var _this = _super.call(this, {
            objectMode: opts.objectMode
        }) || this;
        _this.audioInput = null;
        _this.recording = true;
        var stream = opts.stream, objectMode = opts.objectMode, bufferSize = opts.bufferSize, context = opts.context;
        _this.objectMode = objectMode;
        // "It is recommended for authors to not specify this buffer size and allow the implementation
        // to pick a good buffer size to balance between latency and audio quality."
        // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
        // however, webkitAudioContext (safari) requires it to be set'
        // Possible values: null, 256, 512, 1024, 2048, 4096, 8192, 16384
        _this.bufferSize = bufferSize || typeof window.AudioContext === "undefined" ? 4096 : null;
        // @ts-expect-error Property 'webkitAudioContext' does not exist on type 'Window & typeof globalThis'
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        _this.context = context || new AudioContext();
        // We can only emit one channel's worth of audio, so only one input.
        // (Who has multiple microphones anyways?)
        var inputChannels = 1;
        // We shouldn't need any output channels (going back to the browser),
        // but chrome is buggy and won't give us any audio without one.
        var outputChannels = 1;
        _this.recorder = _this.context.createScriptProcessor(bufferSize, inputChannels, outputChannels);
        // Other half of workaround for chrome bugs.
        _this.recorder.connect(_this.context.destination);
        if (stream) _this.setStream(stream);
        setTimeout(function() {
            _this.emit("format", {
                channels: 1,
                bitDepth: 32,
                sampleRate: _this.context.sampleRate,
                signed: true,
                float: true
            });
        }, 0);
        return _this;
    }
    /**
     * Sets the MediaStream.
     *
     * This was separated from the constructor to enable better compatibility with Safari on iOS 11.
     *
     * Typically the stream is only available asynchronously, but the context must be created or
     * resumed directly in response to a user's tap on iOS.
     *
     * @param {MediaStream} stream https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
     * @type {function(MediaStream): void}
     */ MicrophoneStream.prototype.setStream = function(stream) {
        var _this = this;
        this.stream = stream;
        this.audioInput = this.context.createMediaStreamSource(stream);
        this.audioInput.connect(this.recorder);
        /**
         * Convert and emit the raw audio data
         * @see https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/onaudioprocess
         * @param {AudioProcessingEvent} e https://developer.mozilla.org/en-US/docs/Web/API/AudioProcessingEvent
         */ var recorderProcess = function(e) {
            // onaudioprocess can be called at least once after we've stopped
            if (_this.recording) _this.push(_this.objectMode ? e.inputBuffer : $75710d60307e4114$var$buffer_from_1.default(e.inputBuffer.getChannelData(0).buffer));
        };
        this.recorder.onaudioprocess = recorderProcess;
    };
    /**
     * Temporarily stop emitting new data. Audio data recieved from the microphone
     * after this will be dropped.
     *
     * Note: the underlying Stream interface has a .pause() API that causes new data
     * to bebuffered rather than dropped.
     */ MicrophoneStream.prototype.pauseRecording = function() {
        this.recording = false;
    };
    /**
     * Resume emitting new audio data after pauseRecording() was called.
     */ MicrophoneStream.prototype.playRecording = function() {
        this.recording = true;
    };
    /**
     * Stops the recording.
     *
     * Note: Some versions of Firefox leave the recording icon in place after recording has stopped.
     */ MicrophoneStream.prototype.stop = function() {
        if (this.context.state === "closed") return;
        try {
            this.stream.getTracks()[0].stop();
        } catch (ex) {
        // This fails in some older versions of chrome. Nothing we can do about it.
        }
        this.recorder.disconnect();
        if (this.audioInput) this.audioInput.disconnect();
        try {
            this.context.close(); // returns a promise;
        } catch (ex1) {
        // this can also fail in older versions of chrome
        }
        this.recording = false;
        this.push(null);
        this.emit("close");
    };
    /**
     * no-op, (flow-control doesn't really work on live audio)
     */ MicrophoneStream.prototype._read = function() {
    // no-op, (flow-control doesn't really work on live audio)
    };
    /**
     * Converts a Buffer back into the raw Float32Array format that browsers use.
     * Note: this is just a new DataView for the same underlying buffer -
     * the actual audio data is not copied or changed here.
     *
     * @memberof MicrophoneStream
     * @param {Buffer} chunk node-style buffer of audio data from a 'data' event or read() call
     * @return {Float32Array} raw 32-bit float data view of audio data
     */ MicrophoneStream.toRaw = function(chunk) {
        return new Float32Array(chunk.buffer);
    };
    return MicrophoneStream;
}($9pVDm.Readable);
$75710d60307e4114$exports.default = $75710d60307e4114$var$MicrophoneStream;


var $4ccea11b7f25baa0$var$audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var $4ccea11b7f25baa0$var$all = [];
document.getElementById('my-start-button').onclick = function() {
    // Note: in most browsers, this constructor must be called in response to a click/tap, 
    // or else the AudioContext will remain suspended and will not provide any audio data.
    // Stop when ready
    var micStream = new (/*@__PURE__*/$parcel$interopDefault($75710d60307e4114$exports))();
    micStream.on('format', function(format) {
        console.log('whyyy');
        console.log(format);
    });
    (/*@__PURE__*/$parcel$interopDefault($ffe090e55c6c677a$exports))({
        video: false,
        audio: true
    }).then(function(stream) {
        micStream.setStream(stream);
    }).catch(function(error) {
        console.log(error);
    });
    // get Buffers (Essentially a Uint8Array DataView of the same Float32 values)
    micStream.on('data', function(chunk) {
        // Optionally convert the Buffer back into a Float32Array
        // (This actually just creates a new DataView - the underlying audio data is not copied or modified.)
        const raw = (/*@__PURE__*/$parcel$interopDefault($75710d60307e4114$exports)).toRaw(chunk);
        $4ccea11b7f25baa0$var$all = $4ccea11b7f25baa0$var$Float32Concat($4ccea11b7f25baa0$var$all, raw);
        console.log($4ccea11b7f25baa0$var$all);
    });
};
document.getElementById('my-stop-button').onclick = function() {
    micStream.stop();
    $4ccea11b7f25baa0$var$playAudio();
};
// https://stackoverflow.com/questions/4554252/typed-arrays-in-gecko-2-float32array-concatenation-and-expansion
function $4ccea11b7f25baa0$var$playAudio() {
    var myArrayBuffer = $4ccea11b7f25baa0$var$audioCtx.createBuffer(1, $4ccea11b7f25baa0$var$audioCtx.sampleRate * $4ccea11b7f25baa0$var$all.length, $4ccea11b7f25baa0$var$audioCtx.sampleRate);
    var nowBuffering = myArrayBuffer.getChannelData(0);
    for(var i = 0; i < myArrayBuffer.length; i++)nowBuffering[i] = $4ccea11b7f25baa0$var$all[i];
    var source = $4ccea11b7f25baa0$var$audioCtx.createBufferSource();
    source.buffer = myArrayBuffer;
    source.connect($4ccea11b7f25baa0$var$audioCtx.destination);
    source.start();
}
function $4ccea11b7f25baa0$var$Float32Concat(first, second) {
    var firstLength = first.length, result = new Float32Array(firstLength + second.length);
    result.set(first);
    result.set(second, firstLength);
    return result;
}


//# sourceMappingURL=send.2852c756.js.map
