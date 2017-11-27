/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(28);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(70),
    getValue = __webpack_require__(93);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    getRawTag = __webpack_require__(91),
    objectToString = __webpack_require__(119);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_WORLD_WIDTH = exports.INITIAL_WORLD_WIDTH = 200;
var INITIAL_WORLD_HEIGHT = exports.INITIAL_WORLD_HEIGHT = 200;
var INITIAL_CYCLE_PERIOD = exports.INITIAL_CYCLE_PERIOD = 1000;
var MIN_CYCLE_PERIOD = exports.MIN_CYCLE_PERIOD = 20;
var MAX_CYCLE_PERIOD = exports.MAX_CYCLE_PERIOD = 5000;
var ALIVE_CELLS_PERCENT = exports.ALIVE_CELLS_PERCENT = 35;
var DIED_CHAR = exports.DIED_CHAR = '.';
var ALIVE_CHAR = exports.ALIVE_CHAR = '*';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(105),
    listCacheDelete = __webpack_require__(106),
    listCacheGet = __webpack_require__(107),
    listCacheHas = __webpack_require__(108),
    listCacheSet = __webpack_require__(109);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(17);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(25),
    baseAssignValue = __webpack_require__(26);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(103);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractRenderer = function () {
  function AbstractRenderer() {
    _classCallCheck(this, AbstractRenderer);

    if (this.constructor === AbstractRenderer) {
      throw new Error('Can\'t instantiate abstract class!');
    }
  }

  /**
   * Render the given word
   * @param {World} world
   */


  _createClass(AbstractRenderer, [{
    key: 'render',
    value: function render(world) {}

    /**
     * Mount renderer node to given node
     * @param {Element} node
     */

  }, {
    key: 'mountTo',
    value: function mountTo(node) {
      node.appendChild(this._getStylesheets());
      node.appendChild(this._node);
    }

    /**
     * Fire given callback when any world point will be clicked
     * @param {Function} cb
     */

  }, {
    key: 'onPointClick',
    value: function onPointClick(cb) {

      this._node.addEventListener('click', function (e) {

        var rect = this._node.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        cb(this._getPointCoordsByEventCoords(x, y));
      }.bind(this));
    }
  }]);

  return AbstractRenderer;
}();

exports.default = AbstractRenderer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(59);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(64),
    stubArray = __webpack_require__(39);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
    isLength = __webpack_require__(37);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(22),
    baseKeys = __webpack_require__(72),
    isArrayLike = __webpack_require__(19);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(75),
    isArguments = __webpack_require__(126),
    isArray = __webpack_require__(18),
    isBuffer = __webpack_require__(35),
    isIndex = __webpack_require__(31),
    isTypedArray = __webpack_require__(128);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(26),
    eq = __webpack_require__(17);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(88);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(23),
    isArray = __webpack_require__(18);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(293)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(32);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(23),
    getPrototype = __webpack_require__(29),
    getSymbols = __webpack_require__(15),
    stubArray = __webpack_require__(39);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(67);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(130);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(22),
    baseKeysIn = __webpack_require__(73),
    isArrayLike = __webpack_require__(19);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Figure = function () {

  /**
   * @param {string} template
   */
  function Figure(template) {
    _classCallCheck(this, Figure);

    this._textTemplate = template;
    this._dataTemplate = [];
    this._width = null;
    this._height = null;
    this._parseTextTemplate();
  }

  /**
   * Return array with figure data
   * @returns {Array}
   */


  _createClass(Figure, [{
    key: 'getData',
    value: function getData() {
      return this._dataTemplate;
    }

    /**
     * Return figure width
     * @returns {number|*}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this._width;
    }

    /**
     * Return figure height
     * @returns {number|*}
     */

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this._height;
    }

    /**
     * Parse text template to data template
     * @private
     */

  }, {
    key: '_parseTextTemplate',
    value: function _parseTextTemplate() {
      var _this = this;

      var figureRows = this._textTemplate.split('\n');

      figureRows.forEach(function (row) {
        _this._width = row.trim().length;
        _this._height += 1;

        row.split('').forEach(function (char) {
          if (char === _config.DIED_CHAR) {
            _this._dataTemplate.push(false);
          } else if (char === _config.ALIVE_CHAR) {
            _this._dataTemplate.push(true);
          }
        });
      });
    }
  }]);

  return Figure;
}();

exports.default = Figure;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = __webpack_require__(134);

var _2 = _interopRequireDefault(_);

var _diamond = __webpack_require__(135);

var _diamond2 = _interopRequireDefault(_diamond);

var _inARow = __webpack_require__(136);

var _inARow2 = _interopRequireDefault(_inARow);

var _engineCordership = __webpack_require__(133);

var _engineCordership2 = _interopRequireDefault(_engineCordership);

var _aForAll = __webpack_require__(137);

var _aForAll2 = _interopRequireDefault(_aForAll);

var _acorn = __webpack_require__(138);

var _acorn2 = _interopRequireDefault(_acorn);

var _aircraftCarrier = __webpack_require__(139);

var _aircraftCarrier2 = _interopRequireDefault(_aircraftCarrier);

var _airforce = __webpack_require__(140);

var _airforce2 = _interopRequireDefault(_airforce);

var _ants = __webpack_require__(141);

var _ants2 = _interopRequireDefault(_ants);

var _average = __webpack_require__(142);

var _average2 = _interopRequireDefault(_average);

var _bHeptominoShuttle = __webpack_require__(143);

var _bHeptominoShuttle2 = _interopRequireDefault(_bHeptominoShuttle);

var _bHeptomino = __webpack_require__(144);

var _bHeptomino2 = _interopRequireDefault(_bHeptomino);

var _bakery4Loaves = __webpack_require__(145);

var _bakery4Loaves2 = _interopRequireDefault(_bakery4Loaves);

var _barberpole = __webpack_require__(146);

var _barberpole2 = _interopRequireDefault(_barberpole);

var _barge = __webpack_require__(147);

var _barge2 = _interopRequireDefault(_barge);

var _beacon = __webpack_require__(148);

var _beacon2 = _interopRequireDefault(_beacon);

var _beehiveAndDock = __webpack_require__(149);

var _beehiveAndDock2 = _interopRequireDefault(_beehiveAndDock);

var _beehiveWithTail = __webpack_require__(150);

var _beehiveWithTail2 = _interopRequireDefault(_beehiveWithTail);

var _beehive = __webpack_require__(151);

var _beehive2 = _interopRequireDefault(_beehive);

var _biLoaf = __webpack_require__(152);

var _biLoaf2 = _interopRequireDefault(_biLoaf);

var _biblock = __webpack_require__(153);

var _biblock2 = _interopRequireDefault(_biblock);

var _bigS = __webpack_require__(154);

var _bigS2 = _interopRequireDefault(_bigS);

var _bipole = __webpack_require__(155);

var _bipole2 = _interopRequireDefault(_bipole);

var _blinkerShip = __webpack_require__(156);

var _blinkerShip2 = _interopRequireDefault(_blinkerShip);

var _blinker = __webpack_require__(157);

var _blinker2 = _interopRequireDefault(_blinker);

var _blockAndDock = __webpack_require__(158);

var _blockAndDock2 = _interopRequireDefault(_blockAndDock);

var _blockOnTable = __webpack_require__(159);

var _blockOnTable2 = _interopRequireDefault(_blockOnTable);

var _block = __webpack_require__(160);

var _block2 = _interopRequireDefault(_block);

var _blocker = __webpack_require__(161);

var _blocker2 = _interopRequireDefault(_blocker);

var _boatOnBoat = __webpack_require__(162);

var _boatOnBoat2 = _interopRequireDefault(_boatOnBoat);

var _boat = __webpack_require__(163);

var _boat2 = _interopRequireDefault(_boat);

var _bookends = __webpack_require__(164);

var _bookends2 = _interopRequireDefault(_bookends);

var _boss = __webpack_require__(165);

var _boss2 = _interopRequireDefault(_boss);

var _brain = __webpack_require__(166);

var _brain2 = _interopRequireDefault(_brain);

var _bunnies = __webpack_require__(167);

var _bunnies2 = _interopRequireDefault(_bunnies);

var _burloaferimeter = __webpack_require__(168);

var _burloaferimeter2 = _interopRequireDefault(_burloaferimeter);

var _caterer = __webpack_require__(169);

var _caterer2 = _interopRequireDefault(_caterer);

var _centinal = __webpack_require__(170);

var _centinal2 = _interopRequireDefault(_centinal);

var _chemist = __webpack_require__(171);

var _chemist2 = _interopRequireDefault(_chemist);

var _cisBoatWithTail = __webpack_require__(172);

var _cisBoatWithTail2 = _interopRequireDefault(_cisBoatWithTail);

var _cisMirroredRBee = __webpack_require__(173);

var _cisMirroredRBee2 = _interopRequireDefault(_cisMirroredRBee);

var _clock = __webpack_require__(174);

var _clock2 = _interopRequireDefault(_clock);

var _cloverleaf = __webpack_require__(175);

var _cloverleaf2 = _interopRequireDefault(_cloverleaf);

var _confusedEaters = __webpack_require__(176);

var _confusedEaters2 = _interopRequireDefault(_confusedEaters);

var _cross = __webpack_require__(177);

var _cross2 = _interopRequireDefault(_cross);

var _dart = __webpack_require__(178);

var _dart2 = _interopRequireDefault(_dart);

var _deadSparkCoil = __webpack_require__(179);

var _deadSparkCoil2 = _interopRequireDefault(_deadSparkCoil);

var _diamondRing = __webpack_require__(180);

var _diamondRing2 = _interopRequireDefault(_diamondRing);

var _doubleWing = __webpack_require__(181);

var _doubleWing2 = _interopRequireDefault(_doubleWing);

var _eater = __webpack_require__(182);

var _eater2 = _interopRequireDefault(_eater);

var _elevener = __webpack_require__(183);

var _elevener2 = _interopRequireDefault(_elevener);

var _figure = __webpack_require__(184);

var _figure2 = _interopRequireDefault(_figure);

var _fleet4Ships = __webpack_require__(185);

var _fleet4Ships2 = _interopRequireDefault(_fleet4Ships);

var _fourteener = __webpack_require__(186);

var _fourteener2 = _interopRequireDefault(_fourteener);

var _fumarole = __webpack_require__(187);

var _fumarole2 = _interopRequireDefault(_fumarole);

var _glider = __webpack_require__(188);

var _glider2 = _interopRequireDefault(_glider);

var _gosperGun = __webpack_require__(189);

var _gosperGun2 = _interopRequireDefault(_gosperGun);

var _gourmet = __webpack_require__(190);

var _gourmet2 = _interopRequireDefault(_gourmet);

var _grayCounter = __webpack_require__(191);

var _grayCounter2 = _interopRequireDefault(_grayCounter);

var _greatOnOff = __webpack_require__(192);

var _greatOnOff2 = _interopRequireDefault(_greatOnOff);

var _hat = __webpack_require__(193);

var _hat2 = _interopRequireDefault(_hat);

var _heart = __webpack_require__(194);

var _heart2 = _interopRequireDefault(_heart);

var _heavyweightEmulator = __webpack_require__(195);

var _heavyweightEmulator2 = _interopRequireDefault(_heavyweightEmulator);

var _heavyweightSpaceship = __webpack_require__(196);

var _heavyweightSpaceship2 = _interopRequireDefault(_heavyweightSpaceship);

var _heavyweightVolcano = __webpack_require__(197);

var _heavyweightVolcano2 = _interopRequireDefault(_heavyweightVolcano);

var _hertzOscillator = __webpack_require__(198);

var _hertzOscillator2 = _interopRequireDefault(_hertzOscillator);

var _honeyfarm4Beehives = __webpack_require__(199);

var _honeyfarm4Beehives2 = _interopRequireDefault(_honeyfarm4Beehives);

var _hustler = __webpack_require__(200);

var _hustler2 = _interopRequireDefault(_hustler);

var _inductionCoil = __webpack_require__(201);

var _inductionCoil2 = _interopRequireDefault(_inductionCoil);

var _integralSign = __webpack_require__(202);

var _integralSign2 = _interopRequireDefault(_integralSign);

var _jam = __webpack_require__(203);

var _jam2 = _interopRequireDefault(_jam);

var _keys = __webpack_require__(204);

var _keys2 = _interopRequireDefault(_keys);

var _kickbackReaction = __webpack_require__(205);

var _kickbackReaction2 = _interopRequireDefault(_kickbackReaction);

var _koksGalaxy = __webpack_require__(206);

var _koksGalaxy2 = _interopRequireDefault(_koksGalaxy);

var _lightBulb = __webpack_require__(207);

var _lightBulb2 = _interopRequireDefault(_lightBulb);

var _lightspeedWire = __webpack_require__(208);

var _lightspeedWire2 = _interopRequireDefault(_lightspeedWire);

var _lightweightEmulator = __webpack_require__(209);

var _lightweightEmulator2 = _interopRequireDefault(_lightweightEmulator);

var _lightweightSpaceship = __webpack_require__(210);

var _lightweightSpaceship2 = _interopRequireDefault(_lightweightSpaceship);

var _loaf = __webpack_require__(211);

var _loaf2 = _interopRequireDefault(_loaf);

var _longBarge = __webpack_require__(212);

var _longBarge2 = _interopRequireDefault(_longBarge);

var _longBoat = __webpack_require__(213);

var _longBoat2 = _interopRequireDefault(_longBoat);

var _longShip = __webpack_require__(214);

var _longShip2 = _interopRequireDefault(_longShip);

var _loop = __webpack_require__(215);

var _loop2 = _interopRequireDefault(_loop);

var _lumpsOfMuck = __webpack_require__(216);

var _lumpsOfMuck2 = _interopRequireDefault(_lumpsOfMuck);

var _mango = __webpack_require__(217);

var _mango2 = _interopRequireDefault(_mango);

var _mazing = __webpack_require__(218);

var _mazing2 = _interopRequireDefault(_mazing);

var _middleweightEmulator = __webpack_require__(219);

var _middleweightEmulator2 = _interopRequireDefault(_middleweightEmulator);

var _middleweightSpaceship = __webpack_require__(220);

var _middleweightSpaceship2 = _interopRequireDefault(_middleweightSpaceship);

var _middleweightVolcano = __webpack_require__(221);

var _middleweightVolcano2 = _interopRequireDefault(_middleweightVolcano);

var _mitOscillator = __webpack_require__(222);

var _mitOscillator2 = _interopRequireDefault(_mitOscillator);

var _mold = __webpack_require__(223);

var _mold2 = _interopRequireDefault(_mold);

var _monogram = __webpack_require__(224);

var _monogram2 = _interopRequireDefault(_monogram);

var _negentropy = __webpack_require__(225);

var _negentropy2 = _interopRequireDefault(_negentropy);

var _octagon = __webpack_require__(226);

var _octagon2 = _interopRequireDefault(_octagon);

var _orion = __webpack_require__(227);

var _orion2 = _interopRequireDefault(_orion);

var _paperclip = __webpack_require__(228);

var _paperclip2 = _interopRequireDefault(_paperclip);

var _pedestle = __webpack_require__(229);

var _pedestle2 = _interopRequireDefault(_pedestle);

var _pennyLane = __webpack_require__(230);

var _pennyLane2 = _interopRequireDefault(_pennyLane);

var _pentadecathlon = __webpack_require__(231);

var _pentadecathlon2 = _interopRequireDefault(_pentadecathlon);

var _phoenix = __webpack_require__(232);

var _phoenix2 = _interopRequireDefault(_phoenix);

var _piHeptomino = __webpack_require__(233);

var _piHeptomino2 = _interopRequireDefault(_piHeptomino);

var _pondOnPond = __webpack_require__(234);

var _pondOnPond2 = _interopRequireDefault(_pondOnPond);

var _pond = __webpack_require__(235);

var _pond2 = _interopRequireDefault(_pond);

var _pressureCooker = __webpack_require__(236);

var _pressureCooker2 = _interopRequireDefault(_pressureCooker);

var _pseudoBarberpole = __webpack_require__(237);

var _pseudoBarberpole2 = _interopRequireDefault(_pseudoBarberpole);

var _pulsar = __webpack_require__(238);

var _pulsar2 = _interopRequireDefault(_pulsar);

var _pushalong = __webpack_require__(239);

var _pushalong2 = _interopRequireDefault(_pushalong);

var _pyrotechneczum = __webpack_require__(240);

var _pyrotechneczum2 = _interopRequireDefault(_pyrotechneczum);

var _quad = __webpack_require__(241);

var _quad2 = _interopRequireDefault(_quad);

var _quapole = __webpack_require__(242);

var _quapole2 = _interopRequireDefault(_quapole);

var _queenBeeShuttle = __webpack_require__(243);

var _queenBeeShuttle2 = _interopRequireDefault(_queenBeeShuttle);

var _queenBee = __webpack_require__(244);

var _queenBee2 = _interopRequireDefault(_queenBee);

var _r2d = __webpack_require__(246);

var _r2d2 = _interopRequireDefault(_r2d);

var _rPentomino = __webpack_require__(245);

var _rPentomino2 = _interopRequireDefault(_rPentomino);

var _rabbits = __webpack_require__(247);

var _rabbits2 = _interopRequireDefault(_rabbits);

var _rephaser = __webpack_require__(248);

var _rephaser2 = _interopRequireDefault(_rephaser);

var _revolver = __webpack_require__(249);

var _revolver2 = _interopRequireDefault(_revolver);

var _roteightor = __webpack_require__(250);

var _roteightor2 = _interopRequireDefault(_roteightor);

var _schickEngine = __webpack_require__(251);

var _schickEngine2 = _interopRequireDefault(_schickEngine);

var _scorpion = __webpack_require__(252);

var _scorpion2 = _interopRequireDefault(_scorpion);

var _scrubber = __webpack_require__(253);

var _scrubber2 = _interopRequireDefault(_scrubber);

var _shillelagh = __webpack_require__(254);

var _shillelagh2 = _interopRequireDefault(_shillelagh);

var _shipOnBoat = __webpack_require__(255);

var _shipOnBoat2 = _interopRequireDefault(_shipOnBoat);

var _ship = __webpack_require__(256);

var _ship2 = _interopRequireDefault(_ship);

var _shiptie = __webpack_require__(257);

var _shiptie2 = _interopRequireDefault(_shiptie);

var _siesta = __webpack_require__(258);

var _siesta2 = _interopRequireDefault(_siesta);

var _sinkingShip = __webpack_require__(259);

var _sinkingShip2 = _interopRequireDefault(_sinkingShip);

var _skewedQuad = __webpack_require__(260);

var _skewedQuad2 = _interopRequireDefault(_skewedQuad);

var _smiley = __webpack_require__(261);

var _smiley2 = _interopRequireDefault(_smiley);

var _snacker = __webpack_require__(262);

var _snacker2 = _interopRequireDefault(_snacker);

var _snakePit = __webpack_require__(263);

var _snakePit2 = _interopRequireDefault(_snakePit);

var _snake = __webpack_require__(264);

var _snake2 = _interopRequireDefault(_snake);

var _sombreros = __webpack_require__(265);

var _sombreros2 = _interopRequireDefault(_sombreros);

var _sparkCoil = __webpack_require__(266);

var _sparkCoil2 = _interopRequireDefault(_sparkCoil);

var _sparky = __webpack_require__(267);

var _sparky2 = _interopRequireDefault(_sparky);

var _spiral = __webpack_require__(268);

var _spiral2 = _interopRequireDefault(_spiral);

var _star = __webpack_require__(269);

var _star2 = _interopRequireDefault(_star);

var _switchEngine = __webpack_require__(270);

var _switchEngine2 = _interopRequireDefault(_switchEngine);

var _tableOnTable = __webpack_require__(271);

var _tableOnTable2 = _interopRequireDefault(_tableOnTable);

var _technicianFinishedProduct = __webpack_require__(272);

var _technicianFinishedProduct2 = _interopRequireDefault(_technicianFinishedProduct);

var _testTubeBaby = __webpack_require__(273);

var _testTubeBaby2 = _interopRequireDefault(_testTubeBaby);

var _toad = __webpack_require__(274);

var _toad2 = _interopRequireDefault(_toad);

var _toadsucker = __webpack_require__(275);

var _toadsucker2 = _interopRequireDefault(_toadsucker);

var _toaster = __webpack_require__(276);

var _toaster2 = _interopRequireDefault(_toaster);

var _trafficCircle = __webpack_require__(277);

var _trafficCircle2 = _interopRequireDefault(_trafficCircle);

var _trafficLights = __webpack_require__(278);

var _trafficLights2 = _interopRequireDefault(_trafficLights);

var _transBoatWithTail = __webpack_require__(279);

var _transBoatWithTail2 = _interopRequireDefault(_transBoatWithTail);

var _triceTongs = __webpack_require__(280);

var _triceTongs2 = _interopRequireDefault(_triceTongs);

var _tripole = __webpack_require__(281);

var _tripole2 = _interopRequireDefault(_tripole);

var _tubWithTail = __webpack_require__(282);

var _tubWithTail2 = _interopRequireDefault(_tubWithTail);

var _tub = __webpack_require__(283);

var _tub2 = _interopRequireDefault(_tub);

var _tubber = __webpack_require__(284);

var _tubber2 = _interopRequireDefault(_tubber);

var _tumbler = __webpack_require__(285);

var _tumbler2 = _interopRequireDefault(_tumbler);

var _turtle = __webpack_require__(286);

var _turtle2 = _interopRequireDefault(_turtle);

var _twinhat = __webpack_require__(287);

var _twinhat2 = _interopRequireDefault(_twinhat);

var _twoEaters = __webpack_require__(288);

var _twoEaters2 = _interopRequireDefault(_twoEaters);

var _unix = __webpack_require__(289);

var _unix2 = _interopRequireDefault(_unix);

var _veryLongBarge = __webpack_require__(290);

var _veryLongBarge2 = _interopRequireDefault(_veryLongBarge);

var _veryLongBoat = __webpack_require__(291);

var _veryLongBoat2 = _interopRequireDefault(_veryLongBoat);

var _veryLongShip = __webpack_require__(292);

var _veryLongShip2 = _interopRequireDefault(_veryLongShip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  _101: _2.default,
  _4_8_12_diamond: _diamond2.default,
  _7_in_a_row: _inARow2.default,
  _10_engine_cordership: _engineCordership2.default,
  a_for_all: _aForAll2.default,
  acorn: _acorn2.default,
  aircraft_carrier: _aircraftCarrier2.default,
  airforce: _airforce2.default,
  ants: _ants2.default,
  average: _average2.default,
  b$heptomino_shuttle: _bHeptominoShuttle2.default,
  b$heptomino: _bHeptomino2.default,
  bakery_$_4_loaves: _bakery4Loaves2.default,
  barberpole: _barberpole2.default,
  barge: _barge2.default,
  beacon: _beacon2.default,
  beehive_and_dock: _beehiveAndDock2.default,
  beehive_with_tail: _beehiveWithTail2.default,
  beehive: _beehive2.default,
  bi$loaf: _biLoaf2.default,
  biblock: _biblock2.default,
  big_S: _bigS2.default,
  bipole: _bipole2.default,
  blinker_ship: _blinkerShip2.default,
  blinker: _blinker2.default,
  block_and_dock: _blockAndDock2.default,
  block_on_table: _blockOnTable2.default,
  block: _block2.default,
  blocker: _blocker2.default,
  boat_on_boat: _boatOnBoat2.default,
  boat: _boat2.default,
  bookends: _bookends2.default,
  boss: _boss2.default,
  brain: _brain2.default,
  bunnies: _bunnies2.default,
  burloaferimeter: _burloaferimeter2.default,
  caterer: _caterer2.default,
  centinal: _centinal2.default,
  chemist: _chemist2.default,
  cis$boat_with_tail: _cisBoatWithTail2.default,
  cis$mirrored_R$bee: _cisMirroredRBee2.default,
  clock: _clock2.default,
  cloverleaf: _cloverleaf2.default,
  confused_eaters: _confusedEaters2.default,
  cross: _cross2.default,
  dart: _dart2.default,
  dead_spark_coil: _deadSparkCoil2.default,
  diamond_ring: _diamondRing2.default,
  double_wing: _doubleWing2.default,
  eater: _eater2.default,
  elevener: _elevener2.default,
  figure_8: _figure2.default,
  fleet_$_4_ships: _fleet4Ships2.default,
  fourteener: _fourteener2.default,
  fumarole: _fumarole2.default,
  glider: _glider2.default,
  gosper_gun: _gosperGun2.default,
  gourmet: _gourmet2.default,
  gray_counter: _grayCounter2.default,
  great_on$off: _greatOnOff2.default,
  hat: _hat2.default,
  heart: _heart2.default,
  heavyweight_emulator: _heavyweightEmulator2.default,
  heavyweight_spaceship: _heavyweightSpaceship2.default,
  heavyweight_volcano: _heavyweightVolcano2.default,
  hertz_oscillator: _hertzOscillator2.default,
  honeyfarm_$_4_beehives: _honeyfarm4Beehives2.default,
  hustler: _hustler2.default,
  induction_coil: _inductionCoil2.default,
  integral_sign: _integralSign2.default,
  jam: _jam2.default,
  keys: _keys2.default,
  kickback_reaction: _kickbackReaction2.default,
  koks_galaxy: _koksGalaxy2.default,
  light_bulb: _lightBulb2.default,
  lightspeed_wire: _lightspeedWire2.default,
  lightweight_emulator: _lightweightEmulator2.default,
  lightweight_spaceship: _lightweightSpaceship2.default,
  loaf: _loaf2.default,
  long_barge: _longBarge2.default,
  long_boat: _longBoat2.default,
  long_ship: _longShip2.default,
  loop: _loop2.default,
  lumps_of_muck: _lumpsOfMuck2.default,
  mango: _mango2.default,
  mazing: _mazing2.default,
  middleweight_emulator: _middleweightEmulator2.default,
  middleweight_spaceship: _middleweightSpaceship2.default,
  _volcano: _middleweightVolcano2.default,
  mit_oscillator: _mitOscillator2.default,
  mold: _mold2.default,
  monogram: _monogram2.default,
  negentropy: _negentropy2.default,
  octagon_2: _octagon2.default,
  orion: _orion2.default,
  paperclip: _paperclip2.default,
  pedestle: _pedestle2.default,
  penny_lane: _pennyLane2.default,
  pentadecathlon: _pentadecathlon2.default,
  phoenix: _phoenix2.default,
  pi_heptomino: _piHeptomino2.default,
  pond_on_pond: _pondOnPond2.default,
  pond: _pond2.default,
  pressure_cooker: _pressureCooker2.default,
  pseudo_barberpole: _pseudoBarberpole2.default,
  pulsar: _pulsar2.default,
  pushalong: _pushalong2.default,
  pyrotechneczum: _pyrotechneczum2.default,
  quad: _quad2.default,
  quapole: _quapole2.default,
  queen_bee_shuttle: _queenBeeShuttle2.default,
  queen_bee: _queenBee2.default,
  r2d2: _r2d2.default,
  r$pentomino: _rPentomino2.default,
  rabbits: _rabbits2.default,
  rephaser: _rephaser2.default,
  revolver: _revolver2.default,
  roteightor: _roteightor2.default,
  schick_engine: _schickEngine2.default,
  scorpion: _scorpion2.default,
  scrubber: _scrubber2.default,
  shillelagh: _shillelagh2.default,
  ship_on_boat: _shipOnBoat2.default,
  ship: _ship2.default,
  shiptie: _shiptie2.default,
  siesta: _siesta2.default,
  sinking_ship: _sinkingShip2.default,
  skewed_quad: _skewedQuad2.default,
  smiley: _smiley2.default,
  snacker: _snacker2.default,
  snake_pit: _snakePit2.default,
  snake: _snake2.default,
  sombreros: _sombreros2.default,
  spark_coil: _sparkCoil2.default,
  sparky: _sparky2.default,
  spiral: _spiral2.default,
  star: _star2.default,
  switch_engine: _switchEngine2.default,
  table_on_table: _tableOnTable2.default,
  technician_finished_product: _technicianFinishedProduct2.default,
  test_tube_baby: _testTubeBaby2.default,
  toad: _toad2.default,
  toadsucker: _toadsucker2.default,
  toaster: _toaster2.default,
  traffic_circle: _trafficCircle2.default,
  traffic_lights: _trafficLights2.default,
  trans$boat_with_tail: _transBoatWithTail2.default,
  trice_tongs: _triceTongs2.default,
  tripole: _tripole2.default,
  tub_with_tail: _tubWithTail2.default,
  tub: _tub2.default,
  tubber: _tubber2.default,
  tumbler: _tumbler2.default,
  turtle: _turtle2.default,
  twinhat: _twinhat2.default,
  two_eaters: _twoEaters2.default,
  unix: _unix2.default,
  very_long_barge: _veryLongBarge2.default,
  very_long_boat: _veryLongBoat2.default,
  very_long_ship: _veryLongShip2.default
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(4);

var _World = __webpack_require__(47);

var _World2 = _interopRequireDefault(_World);

var _HistoryExplorer = __webpack_require__(49);

var _HistoryExplorer2 = _interopRequireDefault(_HistoryExplorer);

var _clone = __webpack_require__(34);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {

  /**
   * @param {AbstractRenderer} renderer
   */
  function Game(renderer) {
    var _this = this;

    _classCallCheck(this, Game);

    this._renderer = renderer;
    this._world = new _World2.default(_config.INITIAL_WORLD_WIDTH, _config.INITIAL_WORLD_HEIGHT);
    this._historyExplorer = new _HistoryExplorer2.default();

    this._cyclePeriod = _config.INITIAL_CYCLE_PERIOD;
    this._lastRenderTime = null;
    this._isPaused = true;

    this._renderer.render(this._world);
    this._loop();

    this._renderer.onPointClick(function (_ref) {
      var x = _ref.x,
          y = _ref.y;

      _this._world.togglePointByCoords(x, y);
      _this._renderer.render(_this._world);
    });
  }

  /**
   * Set cycle period
   * @param {number|*} period
   */


  _createClass(Game, [{
    key: 'setCyclePeriod',
    value: function setCyclePeriod(period) {
      this._cyclePeriod = parseInt(period);
    }
  }, {
    key: 'pause',


    /**
     * Pause the game
     */
    value: function pause() {
      this._isPaused = true;
    }

    /**
     * Start/continue the game
     */

  }, {
    key: 'start',
    value: function start() {
      this._isPaused = false;
    }

    /**
     * Make a step forward in the history
     */

  }, {
    key: 'forward',
    value: function forward() {
      var nextState = this._historyExplorer.forward();
      if (nextState) {
        this._world = nextState;
        this._renderer.render(this._world);
      }
    }

    /**
     * Make a step backward in the history
     */

  }, {
    key: 'backward',
    value: function backward() {
      var prevState = this._historyExplorer.backward();
      if (prevState) {
        this._world = prevState;
        this._renderer.render(this._world);
      }
    }

    /**
     * Stop the game and reset the history
     */

  }, {
    key: 'stop',
    value: function stop() {
      this._isPaused = true;
      this._world = this._historyExplorer.getStepFromHistory(1);
      this._historyExplorer.deleteHistory();
      this._historyExplorer.pushToHistory((0, _clone2.default)(this._world));
      this._renderer.render(this._world);
    }

    /**
     * Fill game with random generation
     */

  }, {
    key: 'fill',
    value: function fill() {
      this._world.createGeneration();
      this._historyExplorer.deleteHistory();
      this._historyExplorer.pushToHistory((0, _clone2.default)(this._world));
      this._renderer.render(this._world);
    }

    /**
     * Insert given figure in the world
     * @param {Figure} figure
     */

  }, {
    key: 'insertFigure',
    value: function insertFigure(figure) {
      this._world.insertFigure(figure);
      this._historyExplorer.pushToHistory((0, _clone2.default)(this._world));
      this._renderer.render(this._world);
    }

    /**
     * Clear the world
     */

  }, {
    key: 'clear',
    value: function clear() {
      this._world.clear();
      this._historyExplorer.pushToHistory((0, _clone2.default)(this._world));
      this._renderer.render(this._world);
    }

    /**
     * Reset history from the initial state
     */

  }, {
    key: 'cleanUpHistory',
    value: function cleanUpHistory() {
      this._historyExplorer.deleteHistory(1);
    }

    /**
     * Main game loop
     * @param {number|*} time
     * @private
     */

  }, {
    key: '_loop',
    value: function _loop(time) {
      if (this._shouldGameToBeContinued(time)) {
        this._lastRenderTime = time;
        this._world.act();
        this._historyExplorer.pushToHistory((0, _clone2.default)(this._world));
        this._renderer.render(this._world);
      }
      requestAnimationFrame(this._loop.bind(this));
    }

    /**
     * Decide is it time to change and render next cycle
     * @param {number|*} time
     * @returns {boolean}
     * @private
     */

  }, {
    key: '_shouldGameToBeContinued',
    value: function _shouldGameToBeContinued(time) {
      var isTimeToNextFrame = time && time - this._lastRenderTime >= this._cyclePeriod;
      return isTimeToNextFrame && !this._isPaused;
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractRenderer2 = __webpack_require__(11);

var _AbstractRenderer3 = _interopRequireDefault(_AbstractRenderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasRenderer = function (_AbstractRenderer) {
  _inherits(CanvasRenderer, _AbstractRenderer);

  function CanvasRenderer() {
    _classCallCheck(this, CanvasRenderer);

    var _this = _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this));

    _this.SCALE_RATIO = window.devicePixelRatio || 1;
    _this.POINT_HEIGHT = 2 * _this.SCALE_RATIO;
    _this.POINT_WIDTH = 2 * _this.SCALE_RATIO;
    _this._node = document.createElement('canvas');
    _this._node.className = 'canvas-renderer';
    _this._isInitialized = false;
    _this._context = null;
    return _this;
  }

  /**
   * Render the given word
   * @param {World} world
   */


  _createClass(CanvasRenderer, [{
    key: 'render',
    value: function render(world) {

      if (this._isInitialized) {

        var worldData = world.getState();
        var width = world.getWidth();
        var height = world.getHeight();

        this._context.clearRect(0, 0, this._width, this._height);

        for (var y = 0; y < height; y += 1) {

          var previousColor = null;
          var previousRectWidth = 0;

          for (var x = 0; x < width; x += 1) {

            var index = world.getPointIndexByCoords(x, y);
            var color = worldData[index] ? 'black' : 'white';

            if (previousColor) {

              if (previousColor !== color) {
                this._context.fillStyle = previousColor;
                this._context.fillRect(x * this.POINT_WIDTH - previousRectWidth, y * this.POINT_HEIGHT, previousRectWidth, this.POINT_HEIGHT);
                previousColor = color;
                previousRectWidth = this.POINT_WIDTH;
              } else {
                previousRectWidth += this.POINT_WIDTH;
              }
            } else {
              previousColor = color;
              previousRectWidth = this.POINT_WIDTH;
            }
          }

          this._context.fillStyle = previousColor;
          this._context.fillRect(width * this.POINT_WIDTH - previousRectWidth, y * this.POINT_HEIGHT, previousRectWidth, this.POINT_HEIGHT);
        }
      } else {
        this._init(world);
      }
    }

    /**
     * Init renderer data
     * @param {World} world
     * @private
     */

  }, {
    key: '_init',
    value: function _init(world) {

      var width = world.getWidth();
      var height = world.getHeight();

      this._height = this.POINT_HEIGHT * height;
      this._width = this.POINT_WIDTH * width;
      this._node.setAttribute('height', '' + this._height);
      this._node.setAttribute('width', '' + this._width);
      this._node.style.height = this._height / this.SCALE_RATIO + 'px';
      this._node.style.width = this._width / this.SCALE_RATIO + 'px';
      this._context = this._node.getContext('2d');

      this._isInitialized = true;

      this.render(world);
    }

    /**
     * Calculate clicked point coordinates by click event coordinates
     * @param {number} x
     * @param {number} y
     * @returns {{x: number, y: number}}
     * @private
     */

  }, {
    key: '_getPointCoordsByEventCoords',
    value: function _getPointCoordsByEventCoords(x, y) {
      return {
        x: Math.ceil(x / this.POINT_WIDTH * this.SCALE_RATIO) - 1,
        y: Math.ceil(y / this.POINT_HEIGHT * this.SCALE_RATIO) - 1
      };
    }

    /**
     * Return renderer styles
     * @returns {Element}
     * @private
     */

  }, {
    key: '_getStylesheets',
    value: function _getStylesheets() {

      var styles = document.createElement('style');

      styles.innerHTML += '\n      .canvas-renderer {\n        display: inline-block;\n        border: 1px solid #b2b2b2;\n        box-sizing: content-box;\n      }';

      return styles;
    }
  }]);

  return CanvasRenderer;
}(_AbstractRenderer3.default);

exports.default = CanvasRenderer;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractRenderer2 = __webpack_require__(11);

var _AbstractRenderer3 = _interopRequireDefault(_AbstractRenderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CssRenderer = function (_AbstractRenderer) {
  _inherits(CssRenderer, _AbstractRenderer);

  function CssRenderer() {
    _classCallCheck(this, CssRenderer);

    var _this = _possibleConstructorReturn(this, (CssRenderer.__proto__ || Object.getPrototypeOf(CssRenderer)).call(this));

    _this.POINT_HEIGHT = 2;
    _this.POINT_WIDTH = 2;
    _this._node = document.createElement('div');
    _this._node.className = 'css-renderer';
    _this._isInitialized = false;
    _this._styleNode = null;
    return _this;
  }

  /**
   * Render the given word
   * @param {World} world
   */


  _createClass(CssRenderer, [{
    key: 'render',
    value: function render(world) {

      if (this._isInitialized) {

        var worldData = world.getState();
        var width = world.getWidth();
        var height = world.getHeight();
        var worldStyle = '';
        var pointWidthAsPercent = 100 / world.getWidth();

        for (var y = 0; y < height; y += 1) {

          var rowStyle = '.__row-' + y + ' { background-image: linear-gradient(to right';
          var previousColor = null;

          for (var x = 0; x < width; x += 1) {

            var index = world.getPointIndexByCoords(x, y);
            var color = worldData[index] ? 'black' : 'white';

            if (previousColor) {

              if (previousColor !== color) {
                rowStyle += ', ' + previousColor + ' ' + x * pointWidthAsPercent + '%, ' + color + ' ' + x * pointWidthAsPercent + '%';
                previousColor = color;
              }
            } else {
              previousColor = color;
              rowStyle += ', ' + color + ' ' + x * pointWidthAsPercent + '%';
            }
          }
          rowStyle += ', ' + previousColor + ' ' + width * pointWidthAsPercent + '%';
          rowStyle += ');} \n';
          worldStyle += rowStyle;
        }

        this._styleNode.innerHTML = worldStyle;
      } else {
        this._init(world);
      }
    }

    /**
     * Init renderer data
     * @param {World} world
     * @private
     */

  }, {
    key: '_init',
    value: function _init(world) {

      var width = world.getWidth();
      var height = world.getHeight();

      var fragment = document.createDocumentFragment();
      this._styleNode = document.createElement('style');
      this._node.parentNode.appendChild(this._styleNode);

      for (var y = 0; y < height; y += 1) {

        var htmlRow = document.createElement('div');
        htmlRow.className = 'css-renderer__row __row-' + y;
        htmlRow.style.height = this.POINT_HEIGHT + 'px';
        htmlRow.style.width = this.POINT_WIDTH * width + 'px';
        fragment.appendChild(htmlRow);
      }

      this._node.appendChild(fragment);
      this._isInitialized = true;
      this.render(world);
    }

    /**
     * Calculate clicked point coordinates by click event coordinates
     * @param {number} x
     * @param {number} y
     * @returns {{x: number, y: number}}
     * @private
     */

  }, {
    key: '_getPointCoordsByEventCoords',
    value: function _getPointCoordsByEventCoords(x, y) {
      return {
        x: Math.ceil(x / this.POINT_WIDTH) - 1,
        y: Math.ceil(y / this.POINT_HEIGHT) - 1
      };
    }

    /**
     * Return renderer styles
     * @returns {Element}
     * @private
     */

  }, {
    key: '_getStylesheets',
    value: function _getStylesheets() {

      var styles = document.createElement('style');

      styles.innerHTML += '\n      .css-renderer {\n        display: inline-block;\n        border: 1px solid #b2b2b2;\n      }';
      styles.innerHTML += '\n      .css-renderer__row {\n        display: block;\n        overflow: hidden;\n      }';

      return styles;
    }
  }]);

  return CssRenderer;
}(_AbstractRenderer3.default);

exports.default = CssRenderer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractRenderer2 = __webpack_require__(11);

var _AbstractRenderer3 = _interopRequireDefault(_AbstractRenderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HtmlRenderer = function (_AbstractRenderer) {
  _inherits(HtmlRenderer, _AbstractRenderer);

  function HtmlRenderer() {
    _classCallCheck(this, HtmlRenderer);

    var _this = _possibleConstructorReturn(this, (HtmlRenderer.__proto__ || Object.getPrototypeOf(HtmlRenderer)).call(this));

    _this.POINT_HEIGHT = 2;
    _this.POINT_WIDTH = 2;
    _this._node = document.createElement('div');
    _this._node.className = 'html-renderer';
    _this._isInitialized = false;
    _this._pointLinks = [];
    _this._previousWorldData = [];
    return _this;
  }

  /**
   * Render the given word
   * @param {World} world
   */


  _createClass(HtmlRenderer, [{
    key: 'render',
    value: function render(world) {

      if (this._isInitialized) {

        var worldData = world.getState();
        var width = world.getWidth();
        var height = world.getHeight();

        for (var y = 0; y < height; y += 1) {
          for (var x = 0; x < width; x += 1) {

            var index = world.getPointIndexByCoords(x, y);

            if (this._previousWorldData[index] !== worldData[index]) {
              this._pointLinks[index].style.backgroundColor = worldData[index] ? 'black' : 'white';
              this._previousWorldData[index] = worldData[index];
            }
          }
        }
      } else {
        this._init(world);
      }
    }

    /**
     * Init renderer data
     * @param {World} world
     * @private
     */

  }, {
    key: '_init',
    value: function _init(world) {

      var worldData = world.getState();
      var width = world.getWidth();
      var height = world.getHeight();

      var fragment = document.createDocumentFragment();

      for (var y = 0; y < height; y += 1) {

        var htmlRow = document.createElement('div');
        htmlRow.className = 'html-renderer__row';

        for (var x = 0; x < width; x += 1) {

          var htmlPoint = document.createElement('div');
          var index = world.getPointIndexByCoords(x, y);
          htmlPoint.className = 'html-renderer__point';
          htmlRow.appendChild(htmlPoint);
          htmlPoint.style.backgroundColor = worldData[index] ? 'black' : 'white';
          this._pointLinks[index] = htmlPoint;
          this._previousWorldData[index] = worldData[index];
        }

        fragment.appendChild(htmlRow);
      }

      this._node.appendChild(fragment);
      this._isInitialized = true;
    }

    /**
     * Calculate clicked point coordinates by click event coordinates
     * @param {number} x
     * @param {number} y
     * @returns {{x: number, y: number}}
     * @private
     */

  }, {
    key: '_getPointCoordsByEventCoords',
    value: function _getPointCoordsByEventCoords(x, y) {
      return {
        x: Math.ceil(x / this.POINT_WIDTH) - 1,
        y: Math.ceil(y / this.POINT_HEIGHT) - 1
      };
    }

    /**
     * Return renderer styles
     * @returns {Element}
     * @private
     */

  }, {
    key: '_getStylesheets',
    value: function _getStylesheets() {

      var styles = document.createElement('style');

      styles.innerHTML += '\n      .html-renderer {\n        display: inline-block;\n        border: 1px solid #b2b2b2;\n      }';
      styles.innerHTML += '\n      .html-renderer__row {\n        display: block;\n        overflow: hidden;\n      }';
      styles.innerHTML += '\n      .html-renderer__point {\n        height: ' + this.POINT_HEIGHT + 'px; \n        width: ' + this.POINT_WIDTH + 'px; \n        float: left;\n      }';

      return styles;
    }
  }]);

  return HtmlRenderer;
}(_AbstractRenderer3.default);

exports.default = HtmlRenderer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point() {
    _classCallCheck(this, Point);
  }

  _createClass(Point, null, [{
    key: "willPointBeAlive",


    /**
     * Decide point state for the next cycle
     * @param {boolean} isPointAlive
     * @param {Array} neighbours
     * @returns {boolean}
     */
    value: function willPointBeAlive(isPointAlive, neighbours) {

      var aliveNeighboursCount = neighbours.filter(function (neighbour) {
        return neighbour;
      }).length;
      var result = false;

      if (isPointAlive && (aliveNeighboursCount <= 1 || aliveNeighboursCount >= 4)) {
        result = false;
      } else if (!isPointAlive && aliveNeighboursCount === 3) {
        result = true;
      } else if (isPointAlive && aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
        result = true;
      }

      return result;
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _random = __webpack_require__(129);

var _random2 = _interopRequireDefault(_random);

var _config = __webpack_require__(4);

var _Point = __webpack_require__(46);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {

  /**
   * @param {number} width 
   * @param {number} height
   */
  function World(width, height) {
    _classCallCheck(this, World);

    this._grid = null;
    this._height = height;
    this._width = width;
    this._init();
  }

  /**
   * Calculate the next state of the world
   */


  _createClass(World, [{
    key: 'act',
    value: function act() {

      var updatedGrid = [];

      for (var y = 0; y < this._height; y += 1) {
        for (var x = 0; x < this._width; x += 1) {
          var index = this.getPointIndexByCoords(x, y);
          updatedGrid[index] = _Point2.default.willPointBeAlive(this._grid[index], this._getPointNeighboursByCoords(x, y));
        }
      }

      this._grid = updatedGrid;
    }

    /**
     * Toggle point with given coordinates
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'togglePointByCoords',
    value: function togglePointByCoords(x, y) {
      var index = this.getPointIndexByCoords(x, y);
      this._grid[index] = !this._grid[index];
    }

    /**
     * Create random generation
     */

  }, {
    key: 'createGeneration',
    value: function createGeneration() {
      this._grid = this._grid.map(function (point) {
        return (0, _random2.default)(1, 100) <= _config.ALIVE_CELLS_PERCENT;
      });
    }

    /**
     * Insert given figure in the center of the world
     * @param {Figure} figure
     */

  }, {
    key: 'insertFigure',
    value: function insertFigure(figure) {

      if (figure.getHeight() < this._height && figure.getWidth() < this._width) {

        var figureData = figure.getData();

        var updatedGrid = [];
        var figuredDataIndex = 0;

        for (var y = 0; y < this._height; y += 1) {
          for (var x = 0; x < this._width; x += 1) {

            var index = this.getPointIndexByCoords(x, y);

            if (this._isAreaForFigure(x, y, figure)) {
              updatedGrid[index] = figureData[figuredDataIndex];
              figuredDataIndex += 1;
            } else {
              updatedGrid[index] = false;
            }
          }
        }

        this._grid = updatedGrid;
      }
    }

    /**
     * Return current world state
     * @returns {Array|null}
     */

  }, {
    key: 'getState',
    value: function getState() {
      return this._grid;
    }

    /**
     * Return the width of the world
     * @returns {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this._width;
    }

    /**
     * Return the height of the world
     * @returns {number}
     */

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this._height;
    }

    /**
     * Clear the world
     */

  }, {
    key: 'clear',
    value: function clear() {
      this._init();
    }

    /**
     * Return point index by given coordinates
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */

  }, {
    key: 'getPointIndexByCoords',
    value: function getPointIndexByCoords(x, y) {

      if (x > this._width - 1) {
        x = 0;
      } else if (x < 0) {
        x = this._width - 1;
      }

      if (y > this._height - 1) {
        y = 0;
      } else if (y < 0) {
        y = this._height - 1;
      }

      return x + y * this._width;
    }

    /**
     * Return array with point neighbours
     * @param {number} x
     * @param {number} y
     * @returns {Array}
     * @private
     */

  }, {
    key: '_getPointNeighboursByCoords',
    value: function _getPointNeighboursByCoords(x, y) {

      var neighbours = [];

      neighbours.push(this._grid[this.getPointIndexByCoords(x - 1, y - 1)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x, y - 1)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x + 1, y - 1)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x - 1, y)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x + 1, y)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x - 1, y + 1)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x, y + 1)]);
      neighbours.push(this._grid[this.getPointIndexByCoords(x + 1, y + 1)]);

      return neighbours;
    }

    /**
     * Return if given coordinates are in the figure area
     * @param {number} x
     * @param {number} y
     * @param {Figure} figure
     * @returns {boolean}
     * @private
     */

  }, {
    key: '_isAreaForFigure',
    value: function _isAreaForFigure(x, y, figure) {

      var figureXCoord = Math.floor((this._width - 1 - figure.getWidth()) / 2);
      var figureYCoord = Math.floor((this._height - 1 - figure.getHeight()) / 2);

      var top = y > figureYCoord;
      var right = x <= figureXCoord + figure.getWidth();
      var bottom = y <= figureYCoord + figure.getHeight();
      var left = x > figureXCoord;

      return top && right && bottom && left;
    }

    /**
     * Create array to store world data
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      this._grid = new Array(this._width * this._height).fill(false);
    }
  }]);

  return World;
}();

exports.default = World;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(34);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var History = function () {
  function History() {
    _classCallCheck(this, History);

    this._pool = [];
    this.length = this._pool.length;
  }

  /**
   * Set history length
   * @param {number} newLength
   */


  _createClass(History, [{
    key: 'setLength',
    value: function setLength(newLength) {
      this._pool.length = newLength;
      this.length = this._pool.length;
    }

    /**
     * Push new state to history
     * @param {*} state
     */

  }, {
    key: 'push',
    value: function push(state) {
      this._pool.push(state);
      this.length = this._pool.length;
    }

    /**
     * Return state with the given index from history
     * @param {number} index
     * @returns {*}
     */

  }, {
    key: 'get',
    value: function get(index) {
      return (0, _clone2.default)(this._pool[index - 1]);
    }
  }]);

  return History;
}();

exports.default = History;
;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _History = __webpack_require__(48);

var _History2 = _interopRequireDefault(_History);

var _Notifier = __webpack_require__(51);

var _Notifier2 = _interopRequireDefault(_Notifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HistoryExplorer = function () {
  function HistoryExplorer() {
    _classCallCheck(this, HistoryExplorer);

    this._currentState = 0;
    this._history = new _History2.default();
    this._historyCleared = true;
  }

  _createClass(HistoryExplorer, [{
    key: 'forward',


    /**
     * Return the next history state
     * @returns {*}
     */
    value: function forward() {
      if (this._history.length > this._currentState) {
        this._currentState += 1;
        return this._history.get(this._currentState);
      } else {
        _Notifier2.default.showWarning('There isn\'t the next game state!', 7000);
      }
    }

    /**
     * Return the prev history state
     * @returns {*}
     */

  }, {
    key: 'backward',
    value: function backward() {
      if (this._currentState > 1) {
        this._currentState -= 1;
        return this._history.get(this._currentState);
      } else {
        _Notifier2.default.showWarning('There isn\'t the prev game state!', 7000);
      }
    }

    /**
     * Push state to history
     * @param {*} data
     */

  }, {
    key: 'pushToHistory',
    value: function pushToHistory(data) {

      this._history.setLength(this._currentState);
      this._history.push(data);
      this._currentState += 1;

      if (this._history.length >= 1000 && this._historyCleared) {
        this._historyCleared = false;
        _Notifier2.default.showWarning('History entries amount is more than 1000. <br> Let\'s clean up the history and make your browser fast again.');
      }
    }

    /**
     * Clear history from the given index
     * @param {number|*} fromStep
     */

  }, {
    key: 'deleteHistory',
    value: function deleteHistory(fromStep) {
      this._historyCleared = true;
      this._history.setLength(fromStep || 0);
      this._currentState = fromStep || 0;
    }

    /**
     * Return step from history by the given index
     * @param {number} step
     * @returns {*}
     */

  }, {
    key: 'getStepFromHistory',
    value: function getStepFromHistory(step) {
      return this._history.get(step);
    }
  }]);

  return HistoryExplorer;
}();

exports.default = HistoryExplorer;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = function () {

  /**
   * @param {string} message
   * @param {string} level
   */
  function Notification(message, level) {
    _classCallCheck(this, Notification);

    this._defaultLevel = 'info';
    this._level = level || this._defaultLevel;
    this._message = message;

    this._init();
  }

  /**
   * Create notification node
   * @private
   */


  _createClass(Notification, [{
    key: '_init',
    value: function _init() {
      this._node = document.createElement('li');
      this._node.className = 'notification __' + this._level;
      this._node.innerHTML = this._message;
    }

    /**
     * return notification node
     * @returns {Element}
     */

  }, {
    key: 'getNode',
    value: function getNode() {
      return this._node;
    }

    /**
     * Prepare notification instance to deleting
     * @returns {Promise}
     */

  }, {
    key: 'prepareToDie',
    value: function prepareToDie() {
      var _this = this;

      return new Promise(function (resolve) {
        if (_this._clickHandler) {
          _this._node.removeEventListener('click', _this._clickHandler);
        }
        _this._node.className += ' __dying';
        setTimeout(resolve, 500);
      });
    }

    /**
     * Fire given callback when notification node is clicked
     * @param {Function} cb
     */

  }, {
    key: 'onClick',
    value: function onClick(cb) {
      this._clickHandler = cb;
      this._node.addEventListener('click', cb);
    }
  }]);

  return Notification;
}();

exports.default = Notification;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Notification = __webpack_require__(50);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifier = function () {
  function Notifier() {
    _classCallCheck(this, Notifier);

    this._node = document.createElement('ul');
    this._node.className = 'notifier';
    document.querySelector('body').appendChild(this._node);
  }

  /**
   * Show info message
   * @param {string} message
   * @param {number} timeout
   */


  _createClass(Notifier, [{
    key: 'showInfo',
    value: function showInfo(message, timeout) {
      this._notify(message, 'info', timeout);
    }

    /**
     * Show warning message
     * @param {string} message
     * @param {number} timeout
     */

  }, {
    key: 'showWarning',
    value: function showWarning(message, timeout) {
      this._notify(message, 'warning', timeout);
    }

    /**
     * Show error message
     * @param {string} message
     * @param {number} timeout
     */

  }, {
    key: 'showError',
    value: function showError(message, timeout) {
      this._notify(message, 'error', timeout);
    }

    /**
     * Create and handle Notification instance
     * @param {string} message
     * @param {string} level
     * @param {number} timeout
     * @private
     */

  }, {
    key: '_notify',
    value: function _notify(message, level, timeout) {
      var _this = this;

      var notification = new _Notification2.default(message, level);
      this._node.appendChild(notification.getNode());
      var notificationTimeout = void 0;

      if (timeout) {
        notificationTimeout = setTimeout(function () {
          notification.prepareToDie().then(function () {
            _this._node.removeChild(notification.getNode());
          });
        }, timeout);
      }

      notification.onClick(function () {
        clearTimeout(notificationTimeout);
        notification.prepareToDie().then(function () {
          _this._node.removeChild(notification.getNode());
        });
      });
    }
  }]);

  return Notifier;
}();

exports.default = new Notifier();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = __webpack_require__(42);

var _Game2 = _interopRequireDefault(_Game);

var _HtmlRenderer = __webpack_require__(45);

var _HtmlRenderer2 = _interopRequireDefault(_HtmlRenderer);

var _CanvasRenderer = __webpack_require__(43);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _CssRenderer = __webpack_require__(44);

var _CssRenderer2 = _interopRequireDefault(_CssRenderer);

var _SvgRendered = __webpack_require__(294);

var _SvgRendered2 = _interopRequireDefault(_SvgRendered);

var _Figure = __webpack_require__(40);

var _Figure2 = _interopRequireDefault(_Figure);

var _templates = __webpack_require__(41);

var _templates2 = _interopRequireDefault(_templates);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this._renderer = null;
    this._game = null;
    this._avaliableRenderers = {
      'Html Renderer': _HtmlRenderer2.default,
      'Canvas Renderer': _CanvasRenderer2.default,
      'Css Renderer': _CssRenderer2.default,
      'Svg Renderer': _SvgRendered2.default
    };

    this._showRendererVariants();
    this._setUpAppBindings();
  }

  /**
   * Show available render methods
   * @private
   */


  _createClass(App, [{
    key: '_showRendererVariants',
    value: function _showRendererVariants() {

      var renderersList = Object.keys(this._avaliableRenderers);
      var rendererMenu = document.querySelector('.renderer-menu');
      var rendererList = document.createElement('ul');

      rendererList.className = 'renderer-list';

      renderersList.forEach(function (renderer) {
        var item = document.createElement('li');
        item.className = 'renderer-item';
        item.setAttribute('data-renderer', renderer);
        item.innerHTML = renderer;
        rendererList.appendChild(item);
      });

      rendererMenu.appendChild(rendererList);
    }

    /**
     * Set up binding which are needed for the app initializing
     * @private
     */

  }, {
    key: '_setUpAppBindings',
    value: function _setUpAppBindings() {
      var _this = this;

      var list = document.querySelectorAll('.renderer-item');

      list.forEach(function (item) {
        item.addEventListener('click', function (e) {
          _this._setRenderer(new _this._avaliableRenderers[e.target.getAttribute('data-renderer')]());
          var menu = document.querySelector('.renderer-menu');
          menu.parentNode.removeChild(menu);
          document.querySelector('.panel').className += ' __visible';
        });
      });
    }

    /**
     * Set chosen app renderer
     * @param {AbstractRenderer} renderer
     * @private
     */

  }, {
    key: '_setRenderer',
    value: function _setRenderer(renderer) {
      this._renderer = renderer;
      this._renderer.mountTo(document.querySelector('#game'));
      this._initGame();
      this._setUpGameBindings();
      this._initFiguresSelect();
    }

    /**
     * Create game instance
     * @private
     */

  }, {
    key: '_initGame',
    value: function _initGame() {
      this._game = new _Game2.default(this._renderer);
    }

    /**
     * Set up bindings which are needed for game control
     * @private
     */

  }, {
    key: '_setUpGameBindings',
    value: function _setUpGameBindings() {
      var _this2 = this;

      var cyclePeriodInput = document.querySelector('.js-period-input');
      var cyclePeriodOutput = document.querySelector('.js-period-output');

      cyclePeriodInput.setAttribute('min', _config.MIN_CYCLE_PERIOD);
      cyclePeriodInput.setAttribute('max', _config.MAX_CYCLE_PERIOD);
      cyclePeriodInput.setAttribute('step', _config.MIN_CYCLE_PERIOD);
      cyclePeriodInput.value = _config.INITIAL_CYCLE_PERIOD;
      cyclePeriodOutput.innerHTML = 'Cycle duration: ' + _config.INITIAL_CYCLE_PERIOD + ' (ms)';

      cyclePeriodInput.addEventListener('change', function (e) {
        _this2._game.setCyclePeriod(e.target.value);
        cyclePeriodOutput.innerHTML = 'Cycle duration: ' + e.target.value + ' (ms)';
      });

      document.querySelector('.js-start-button').addEventListener('click', function () {
        _this2._game.start();
      });

      document.querySelector('.js-pause-button').addEventListener('click', function () {
        _this2._game.pause();
      });

      document.querySelector('.js-stop-button').addEventListener('click', function () {
        _this2._game.stop();
      });

      document.querySelector('.js-clear-button').addEventListener('click', function () {
        _this2._game.clear();
      });

      document.querySelector('.js-fill-button').addEventListener('click', function () {
        _this2._game.fill();
      });

      document.querySelector('.js-backward-button').addEventListener('click', function () {
        _this2._game.backward();
      });

      document.querySelector('.js-forward-button').addEventListener('click', function () {
        _this2._game.forward();
      });

      document.querySelector('.js-clean-history-button').addEventListener('click', function () {
        _this2._game.cleanUpHistory();
      });
    }

    /**
     * Show figures select
     * @private
     */

  }, {
    key: '_initFiguresSelect',
    value: function _initFiguresSelect() {
      var _this3 = this;

      var figuresList = [];

      for (var key in _templates2.default) {
        if (_templates2.default.hasOwnProperty(key)) {
          figuresList.push({
            label: key.replace(/_/g, ' ').replace(/\$/g, '-'),
            value: key
          });
        }
      }

      var figuresOptions = document.createDocumentFragment();

      figuresList.forEach(function (figure) {
        var option = document.createElement('option');
        option.setAttribute('value', figure.value);
        option.innerHTML = figure.label;
        figuresOptions.appendChild(option);
      });

      var select = document.querySelector('.js-figure-select');
      select.appendChild(figuresOptions);
      select.addEventListener('change', function (e) {
        _this3._game.insertFigure(new _Figure2.default(_templates2.default[e.target.value]));
      });
    }
  }]);

  return App;
}();

new App();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(94),
    hashDelete = __webpack_require__(95),
    hashGet = __webpack_require__(96),
    hashHas = __webpack_require__(97),
    hashSet = __webpack_require__(98);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(110),
    mapCacheDelete = __webpack_require__(111),
    mapCacheGet = __webpack_require__(112),
    mapCacheHas = __webpack_require__(113),
    mapCacheSet = __webpack_require__(114);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(5),
    stackClear = __webpack_require__(121),
    stackDelete = __webpack_require__(122),
    stackGet = __webpack_require__(123),
    stackHas = __webpack_require__(124),
    stackSet = __webpack_require__(125);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(7),
    keys = __webpack_require__(20);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(7),
    keysIn = __webpack_require__(38);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(58),
    arrayEach = __webpack_require__(63),
    assignValue = __webpack_require__(25),
    baseAssign = __webpack_require__(65),
    baseAssignIn = __webpack_require__(66),
    cloneBuffer = __webpack_require__(77),
    copyArray = __webpack_require__(84),
    copySymbols = __webpack_require__(85),
    copySymbolsIn = __webpack_require__(86),
    getAllKeys = __webpack_require__(89),
    getAllKeysIn = __webpack_require__(90),
    getTag = __webpack_require__(92),
    initCloneArray = __webpack_require__(99),
    initCloneByTag = __webpack_require__(100),
    initCloneObject = __webpack_require__(101),
    isArray = __webpack_require__(18),
    isBuffer = __webpack_require__(35),
    isObject = __webpack_require__(2),
    keys = __webpack_require__(20);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
    isMasked = __webpack_require__(104),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(33);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isLength = __webpack_require__(37),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(16),
    nativeKeys = __webpack_require__(116);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(16),
    nativeKeysIn = __webpack_require__(117);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(14);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(61),
    arrayReduce = __webpack_require__(24),
    mapToArray = __webpack_require__(115);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(62),
    arrayReduce = __webpack_require__(24),
    setToArray = __webpack_require__(120);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(14);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(7),
    getSymbols = __webpack_require__(15);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(7),
    getSymbolsIn = __webpack_require__(30);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(27),
    getSymbols = __webpack_require__(15),
    keys = __webpack_require__(20);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(27),
    getSymbolsIn = __webpack_require__(30),
    keysIn = __webpack_require__(38);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(53),
    Map = __webpack_require__(12),
    Promise = __webpack_require__(56),
    Set = __webpack_require__(57),
    WeakMap = __webpack_require__(60),
    baseGetTag = __webpack_require__(3),
    toSource = __webpack_require__(33);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(9);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(9);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(9);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(14),
    cloneDataView = __webpack_require__(78),
    cloneMap = __webpack_require__(79),
    cloneRegExp = __webpack_require__(80),
    cloneSet = __webpack_require__(81),
    cloneSymbol = __webpack_require__(82),
    cloneTypedArray = __webpack_require__(83);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(68),
    getPrototype = __webpack_require__(29),
    isPrototype = __webpack_require__(16);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(17),
    isArrayLike = __webpack_require__(19),
    isIndex = __webpack_require__(31),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(87);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(6);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(6);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(6);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(6);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(54),
    ListCache = __webpack_require__(5),
    Map = __webpack_require__(12);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(32);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(28);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(5);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(5),
    Map = __webpack_require__(12),
    MapCache = __webpack_require__(55);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(69),
    isObjectLike = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(71),
    baseUnary = __webpack_require__(76),
    nodeUtil = __webpack_require__(118);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(74),
    isIterateeCall = __webpack_require__(102),
    toFinite = __webpack_require__(131);

/** Built-in method references without a dependency on `root`. */
var freeParseFloat = parseFloat;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min,
    nativeRandom = Math.random;

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    }
    else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = toFinite(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }
  return baseRandom(lower, upper);
}

module.exports = random;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(132);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isSymbol = __webpack_require__(127);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "..........................................*.............................................\n..........................................*.............................................\n............................................*.....*.....................................\n...........................................*......*.*...................................\n..........................................*...*..*......................................\n...........................................*..*.*.**....................................\n................................................*.**....................................\n..............................................................**........................\n..............................................................**........................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n......................................................................**................\n..........................**..*.......................................**................\n.............................*.*........................................................\n............................*...........................................................\n........................................................................................\n..............................**........................................................\n........................................................................................\n...............................**.......................................................\n..............................*...............................................**........\n............................**.**.............................................**........\n...............................**.......................................................\n................*............*..........................................................\n................*......................***..............................................\n..................*.....*.............*.................................................\n.................*......*.*..........*....**............................................\n................*...*..*............*...*...............................................\n.................*..*.*.**..........*..*....*.........................................**\n......................*.**..........*...*...*................................*........**\n.....................................**.*.***...............................*.*.........\n........................................*...............................................\n.........................................****...............................*..*........\n..............................***..........**.................................**........\n.............................*...*.............................................*........\n............................*....*......................................................\n...........................*...*........................................................\n...........................*..*.***.....................................................\n...........................*.......*....................................................\n**..*........................*...*.*........................................**..........\n...*.*.......................*...*.**.........................................*.........\n..*............................***.**.......................................**..........\n........................................................................................\n....**..................................................................................\n........................................................................................\n.....**.................................................................................\n....*...................................................................................\n..**.**....................................................*.*......*.*.................\n.....**...................................................*.........*.*.................\n...*.......................................................*..*......*..................\n.............................................................***........................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n...................................................*....................................\n..................................................*.*...................................\n........................................................................................\n..................................................*..*..................................\n.......**...........................................**..................................\n.......**............................................*..................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n..................................................**....................................\n....................................................*...................................\n...............**.................................**....................................\n...............**.......................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n.................................*.*......*.*...........................................\n................................*.........*.*...........................................\n.......................**........*..*......*............................................\n.......................**..........***..................................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n........................................................................................\n...............................**.......................................................\n...............................**......................................................."

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "....**......**....\n...*.*......*.*...\n...*..........*...\n**.*..........*.**\n**.*.*..**..*.*.**\n...*.*.*..*.*.*...\n...*.*.*..*.*.*...\n**.*.*..**..*.*.**\n**.*..........*.**\n...*..........*...\n...*.*......*.*...\n....**......**...."

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "....****....\n............\n..********..\n............\n************\n............\n..********..\n............\n....****...."

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "...............................................................................................*..................\n..............................................................................***........*.....*..................\n.............................................................................*...*......*.......*.................\n..............................................................................**.........****..**.................\n................................................................................**.**.........***.................\n..................................................................................**...........*.*................\n................................................................................................*.......**........\n................................................................................................*.......**........\n...........................................................................*......................................\n...........................................................................*......................................\n........................................................................................*.........................\n.......................................................................................*.*........................\n.......................................................................................*.*........................\n..........................................................................***...........*.........................\n...........................................................................*....................................**\n...........................................................................*..*.................................**\n...........................................................................*..*...................................\n............................................................................*.*...................................\n................................................................................................*.................\n...............................................................................................*.*................\n...............................................................................................*.*................\n................................................................................................*.................\n..................................................................................................................\n...........................................................................**.....................................\n.....................................................*.*..................**......................................\n....................................................*...................***.......................................\n.....................................................*..*.........................................................\n.......................................................*.*..............**........................................\n..........................................................*.......................................................\n.........................................................***......................................................\n.........................................................*........................................................\n.......................................*...............**.........................................................\n.......................................*.....***.........*.............***........................................\n......................................*.*...**..*......*..*............***........................................\n.......................................*...*.....*.....*.*.............**.........................................\n.......................................*...*...........*..............*.....................***...................\n............................................*..**...................**..*.....................*...................\n.............................................**......................*...*...................*....................\n.....................................................................*..*.........................................\n......................................................................***.........................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n.......................................................**.........................................................\n.......................................................**.........................................................\n..........................................**......................................................................\n..........................................**......................................................................\n.........................................**.*.....................................................................\n............................*.*.............*.....................................................................\n...........................*................**.***................................................................\n............................*..*............*.**.*................................................................\n..............................*.*.........**...**..............**.................................................\n.................................*........**...................**.................................................\n................................***....*.***.........**...........................................................\n................................*......*.............**...........................................................\n..............................**..................................................................................\n................................*.................................................................................\n..............................*..*................................................................................\n..............................*.*.................................................................................\n..............................*...................................................................................\n..................................................................................................................\n......................................................*.*.........................................................\n......................................................*..*........................................................\n..................................................................................................................\n......................***..............................*.*........................................................\n.......................*...............................***........................................................\n.......................*..*.............................*.*.......................................................\n.......................*..*..............................**.*.....................................................\n........................*.*...............................***.....................................................\n..................................................................................................................\n................................................*.................................................................\n................................................*.*...............................................................\n................................................**................................................................\n..................................................................................................................\n.......................**.........................................................................................\n..................................................................................................................\n..................................................................................................................\n.***........**....................................................................................................\n*...*......*..*...................................................................................................\n.**.........**....................................................................................................\n...**.**..........................................................................................................\n.....**...........................................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n....................**............................................................................................\n...................*..*...........................................................................................\n....................**............................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n..........................**......................................................................................\n.......**...............*...*.**..................................................................................\n.......**...............*...*.**..................................................................................\n........................*...**....................................................................................\n.........................***......................................................................................\n.........................***......................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n...............**...............*.................................................................................\n...............**...............*.*...............................................................................\n................................**................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n..................................................................................................................\n.......................**.........................................................................................\n.......................**........................................................................................."

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "....**.... \n...*..*...\n...****...\n.*.*..*.*.\n*........*\n*........*\n.*.*..*.*.\n...****...\n...*..*...\n....**...."

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = ".*.....\n...*...\n**..***"

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "**.. \n*..*\n..**"

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = ".......*...... \n......*.*.....\n.......*......\n..............\n.....*****....\n....*.....*.**\n...*.**...*.**\n...*.*..*.*...\n**.*...**.*...\n**.*.....*....\n....*****.....\n..............\n......*.......\n.....*.*......\n......*......."

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "**........**...**...**...**...**...**..\n..**.**.....**...**...**...**...**...**\n..**...**...**...**...**...**...**...**\n**.....**.**...**...**...**...**...**..\n.....**................................"

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = ".....*.....\n....*.*....\n.....*.....\n...........\n...*****...\n..*..*..*..\n.*.**.**.*.\n.*.*...*.*.\n**.*...*.**\n*..*.*.*..*\n..*.....*..\n...*****...\n.....*....."

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = ".................*........... \n**...............**........**\n**................**.......**\n.................**..........\n.............................\n.............................\n.............................\n.................**..........\n..................**.........\n.................**..........\n.................*..........."

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = ".*..\n***.\n*.**"

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = "....**....\n...*..*...\n...*.*....\n.**.*...*.\n*..*...*.*\n*.*...*..*\n.*...*.**.\n....*.*...\n...*..*...\n....**...."

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = ".....**\n......*\n...*.*.\n.......\n.*.*...\n*......\n**....."

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = ".*..\n*.*.\n.*.*\n..*."

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "**..\n*...\n...*\n..**"

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = "**..**\n*....*\n.****.\n......\n...**.\n..*..*\n...**."

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = ".*... \n*.*..\n*.*..\n.*...\n..***\n....*"

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = ".**. \n*..*\n.**."

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = ".*..... \n*.*....\n*..*...\n.**.*..\n...*.*.\n...*..*\n....**."

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "**.** \n**.**"

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = "....**. \n...*..*\n...*.**\n**.*...\n*..*...\n.**...."

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "**... \n*.*..\n.....\n..*.*\n...**"

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "...........*..*...............\n..........*...................\n..........*...*...............\n..**......****................\n.****.........................\n**.**.........................\n.**.....**.***................\n.......*.....**.......*....***\n......**.......*......*....*.*\n.......*.....**.......*....***\n.**.....**.***................\n**.**.........................\n.****.........................\n..**......****................\n..........*...*...............\n..........*...................\n...........*..*..............."

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "... \n***\n..."

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "**..** \n*....*\n.****.\n......\n...**.\n...**."

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "**... \n.*...\n.*.**\n**.**"

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = "** \n**"

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = ".......*.* \n......*...\n**..*....*\n**.*..*.**\n.....**..."

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = ".*.... \n*.*...\n.**...\n...**.\n...*.*\n....*."

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = ".*. \n*.*\n.**"

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "**...** \n*.*.*.*\n..*.*..\n.**.**."

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = ".....*..... \n....*.*....\n....*.*....\n...**.**...\n..*.....*..\n.*.*.*.*.*.\n.*.*...*.*.\n**.*...*.**\n*..*.*.*..*\n..*.....*..\n...**.**...\n....*.*....\n....*.*....\n.....*....."

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = ".**........\n*..*.....**\n***...***..\n*..*.****..\n.***...*...\n.*..***....\n...*....**.\n...*****.*.\n...........\n...*****.*.\n...*....**.\n.*..***....\n.***...*...\n*..*.****..\n***...***..\n*..*.....**\n.**........"

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = "*.....*.\n..*...*.\n..*..*.*\n.*.*...."

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = ".....*..... \n....*.*....\n...*.*.*...\n...*.*.*...\n**.*.*.*.**\n**.*....*.*\n....****...\n...........\n....**.....\n....**....."

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = ".....*.. \n****...*\n...*...*\n.......*\n....*...\n.....**."

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = "**................................................**\n.*................................................*.\n.*.*.....................**.....................*.*.\n..**........*............**............**.......**..\n...........**..........................*.*..........\n..........**.............................*..........\n...........**..**......................***..........\n....................................................\n....................................................\n....................................................\n...........**..**......................***..........\n..........**.............................*..........\n...........**..........................*.*..........\n..**........*............**............**.......**..\n.*.*.....................**.....................*.*.\n.*................................................*.\n**................................................**"

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = ".......*.......\n.......***.....\n..........*....\n.....***..*..**\n....*.*.*.*.*.*\n....*...*.*.*..\n.**.*.*.*.*.**.\n..*.*.*...*....\n*.*.*.*.*.*....\n**..*..***.....\n....*..........\n.....***.......\n.......*......."

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = "....* \n..***\n.*...\n*.*..\n.**.."

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = ".**. \n*..*\n***.\n....\n***.\n*..*\n.**."

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "..*. \n**..\n..**\n.*.."

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "...*.*... \n.***.***.\n*...*...*\n*.*.*.*.*\n.*******.\n.........\n.*******.\n*.*.*.*.*\n*...*...*\n.***.***.\n...*.*..."

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "*.......... \n***........\n...*.......\n..*........\n..*..*.....\n.....*.....\n...*.*.....\n...**..**..\n.......*.*.\n.........*.\n.........**"

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = "..****..\n..*..*..\n***..***\n*......*\n*......*\n***..***\n..*..*..\n..****.."

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "........*.\n.......*.*\n......**..\n.........*\n.....*...*\n..*..*....\n.*.*..****\n*..*......\n.*.*..****\n..*..*....\n.....*...*\n.........*\n......**..\n.......*.*\n........*."

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = "**...** \n*.*.*.*\n..*.*..\n*.*.*.*\n**...**"

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "......*......  \n.....*.*..... \n....*.*.*....\n....*...*.... \n..**..*..**.. \n.*....*....*.\n*.*.**.**.*.*\n.*....*....*.\n..**..*..**..\n....*...*....\n....*.*.*....\n.....*.*.....\n......*......"

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "**.....** \n*.......*\n.***.***.\n...*.*...\n....*...."

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "**.. \n*.*.\n..*.\n..**"

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = "....** \n.....*\n..***.\n..*...\n*.*...\n**...."

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "***... \n***...\n***...\n...***\n...***\n...***"

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = "....**.... \n....*.*...\n.....**...\n.......**.\n**.....*.*\n*.*.....**\n.**.......\n...**.....\n...*.*....\n....**...."

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "....**. \n**..*.*\n*.....*\n.*****.\n...*..."

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = "...**... \n.*....*.\n.*....*.\n.*....*.\n..*..*..\n*.*..*.*\n**....**"

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = "..* \n*.*\n.**"

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = ".........................*..........\n......................****....*.....\n.............*.......****.....*.....\n............*.*......*..*.........**\n...........*...**....****.........**\n**.........*...**.....****..........\n**.........*...**........*..........\n............*.*.....................\n.............*......................"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "..........**........\n..........*.........\n..*.**.**.*.....**..\n..**.*.*.*......*...\n........*........*..\n................**..\n....................\n...........*....**..\n*.........*.*..*.*..\n***......**.**..*...\n...*.............***\n..*.*..............*\n..**................\n....................\n..**................\n..*........*........\n...*......*.*.*.**..\n..**.....*.**.**.*..\n.........*..........\n........**.........."

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "....*....\n...*.*...\n....*....\n.........\n..*****..\n.*.....*.\n*.*...*.*\n.*.....*.\n..*****..\n.........\n....*....\n...*.*...\n....*...."

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "..**.... \n.*..*...\n.*.**...\n**.*.**.\n....**.*\n.......*\n....***.\n....*..."

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "..*.. \n.*.*.\n.*.*.\n**.**"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = ".....*.....\n....*..*...\n.*..*..*...\n*.*.*.*.**.\n.*..*..*...\n....*.....*\n.....*****.\n...........\n.......*...\n......*.*..\n.......*..."

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = ".......**.......\n..**.*....*.**..\n..*..........*..\n...**......**...\n***..******..***\n*..*........*..*\n.**..........**."

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = ".******\n*.....*\n......*\n*....*.\n..**..."

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = ".........*..........................\n........*.*.........................\n......***.*.........................\n.....*....**.*......................\n.....*.**...**......**..............\n....**.*.**.........*.*.............\n.........*.*****......*..*.**.......\n..*.**.**.*.....*....**.*.**.*......\n.....**.....****........*....*......\n*...*.*..*...*.*....**.*.****.**....\n*...*.*..**.*.**.**....*.*....*.*...\n.....**...***.**.*.***.*..***...*...\n..*.**.**.**.............*.*..*.*.**\n...........*......*.*.*.*..**.*.*.*.\n....**.*.*.**......**.*.*.*...*.*.*.\n.....*.**.*..*.......*.**..****.**..\n.....*....*.*........*...**.........\n....**....**........**...*..*.......\n...........................**......."

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "...**.*.... \n...*.**....\n...........\n....***....\n...*.*.*.**\n...*...*.**\n**.*...*...\n**.*...*...\n....***....\n...........\n....**.*...\n....*.**..."

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "......*...... \n.....*.*.....\n.....*.*.....\n......*......\n.............\n.**.......**.\n*..*.....*..*\n.**.......**.\n.............\n......*......\n.....*.*.....\n.....*.*.....\n......*......"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = ".....**.... \n.....**....\n...........\n...****....\n*.*....*...\n**.*...*...\n...*...*.**\n...*....*.*\n....****...\n...........\n....**.....\n....**....."

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = ".**.... \n.*..*..\n..***..\n.......\n*******\n*..*..*"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "...** \n..*.*\n..*..\n*.*..\n**..."

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "....**. \n...*..*\n.*..*.*\n*....*.\n*......\n..***.."

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = ".*........*. \n*.***..***.*\n.*..*..*..*.\n....*..*...."

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "....*.*\n***..**\n..*..*.\n.*....."

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "******.** \n******.**\n.......**\n**.....**\n**.....**\n**.....**\n**.......\n**.******\n**.******"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = ".**.*.. \n.*.**..\n.......\n..***..\n.*...*.\n.*...*.\n..*.*..\n*.*.*.*\n**...**"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "...*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*...\n...**********************************************************...\n................................................................\n.**************************************************************.\n*.................................*.......*..........*.........*\n****.**.*..*****..***************....*****....*******...********\n....*...**.....**.......*.......*........*............*.........\n******..*..*****..*****....******....*****....*******...********\n*......................*.........*........*..........*.........*\n.**************************************************************.\n................................................................\n...**********************************************************...\n...*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..."

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "..**.*..*.**..\n..*........*..\n...**....**...\n***..****..***\n*..*......*..*\n.**........**."

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = ".****\n*...*\n....*\n*..*."

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = ".*.. \n*.*.\n*..*\n.**."

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = ".*... \n*.*..\n.*.*.\n..*.*\n...*."

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = ".*.. \n*.*.\n.*.*\n..**"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "**.. \n*.*.\n.*.*\n..**"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "*... \n***.\n...*\n**.*\n*.*."

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "**.....................\n**.....................\n.......................\n.......................\n.**.................**.\n.**.................**.\n.......................\n.......................\n.....................**\n.....................**"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = ".**.. \n*..*.\n.*..*\n..**."

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "...**.. \n.*.*...\n*.....*\n.*...**\n.......\n...*.*.\n....*.."

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = ".......*....... \n..**.*...*.**..\n..*.........*..\n...**.....**...\n***..*****..***\n*..*.......*..*\n.**.........**."

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = ".*****\n*....*\n.....*\n*...*.\n..*..."

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = "...*******... \n.***.***.***.\n*....***....*\n.****.*.***.*\n...........*.\n*.**.*.*.*...\n**.*.*.*.**..\n....*..*.*...\n.....**..*...\n.........**.."

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = "....**... \n...*.*...\n...*.....\n**.*.....\n**.*..*..\n....**.*.\n.......*.\n.......**"

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = ".**... \n*..*..\n*.*..*\n.*....\n..**.*\n....*."

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = "**...** \n.*.*.*.\n.**.**.\n.*.*.*.\n**...**"

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = "......**.... \n......**....\n............\n....****..**\n**.*..*.*..*\n.*.*...**.*.\n*..*....*.**\n**..****....\n............\n....**......\n....**......"

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = "...**... \n..*..*..\n.*....*.\n*......*\n*......*\n.*....*.\n..*..*..\n...**..."

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = "...**.........\n...*.*........\n...*..........\n**.*..........\n*....*........\n*.**......***.\n.....***....**\n......***.*.*.\n.............*\n......*.*.....\n.....**.*.....\n......*.......\n....**.*......\n.......*......\n.....**......."

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "..**. \n.*..*\n.*.**\n**.*.\n*..*.\n.**.. "

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = ".....*..... \n....*.*....\n.*..**.....\n.***.......\n.....***...\n...**...*..\n..*....*..*\n.*.*.*.*.**\n.*.*...*.*.\n**.*.*.*.*.\n*..*....*..\n..*...**...\n...***.....\n.......***.\n.....**..*.\n....*.*....\n.....*....."

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = "...**.....**... \n...*.......*...\n**.*.......*.**\n**.*.*****.*.**\n....*..*..*....\n.....*****.....\n...............\n.......*.......\n......*.*......\n.......*......."

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = "..*....*..\n**.****.**\n..*....*.."

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "...*.... \n...*.*..\n.*......\n......**\n**......\n......*.\n..*.*...\n....*..."

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = "***\n*.*\n*.*"

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = ".**.... \n*..*...\n*..*...\n.**.**.\n...*..*\n...*..*\n....**."

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = ".**. \n*..*\n*..*\n.**."

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = ".....*..... \n....*.*....\n....*.*....\n...**.**...\n*.*.....*.*\n**.*.*.*.**\n...*...*...\n...*...*...\n....***....\n...........\n...*.**....\n...**.*...."

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "..........** \n...........*\n.........*..\n.......*.*..\n............\n.....*.*....\n............\n...*.*......\n............\n..**........\n*...........\n**.........."

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "..***...***.. \n.............\n*....*.*....*\n*....*.*....*\n*....*.*....*\n..***...***..\n.............\n..***...***..\n*....*.*....*\n*....*.*....*\n*....*.*....*\n.............\n..***...***.."

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = "..***.*.....\n.****.*.....\n**..........\n.*.*........\n..****.*....\n...***......\n............\n............\n......*****.\n......*....*\n......*.....\n.......*...*\n.........*.."

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = ".......*........ \n.....*****......\n....*.....*.....\n.*..*..***.*....\n*.*.*.*....*..*.\n.*..*....*.*.*.*\n....*.***..*..*.\n.....*.....*....\n......*****.....\n........*......."

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "**..** \n*..*.*\n.*....\n....*.\n*.*..*\n**..**"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "**..... \n*.*....\n.......\n..*.*..\n.......\n....*.*\n.....**"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = "..........*...........\n..........****........\n**.........****.....**\n**.........*..*.....**\n...........****.......\n..........****........\n..........*..........."

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "*....\n****.\n.****\n.*..*\n.****\n****.\n*...."

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = ".**\n**.\n.*."

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "...**... \n...**...\n........\n.******.\n*......*\n***...**\n........\n********\n*......*\n...**...\n...**..."

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "*...***\n***..*.\n.*....."

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "...**...\n...**...\n........\n........\n.**..**.\n*.*..*.*\n..*..*.."

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "**....**\n.*....*.\n.*.**.*.\n..*..*..\n...*....\n.....*..\n.**.....\n.....**.\n..*.....\n....*...\n..*..*..\n.*.**.*.\n.*....*.\n**....**"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = ".*............ \n.***........**\n....*.......*.\n...**.....*.*.\n..........**..\n..............\n.....***......\n.....*..*.....\n.....*........\n..**..*...*...\n.*.*......*...\n.*.......*....\n**........***.\n............*."

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = ".....****\n....*...*\n........*\n**..*..*.\n***......\n**..*..*.\n........*\n....*...*\n.....****"

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "...*... \n.***...\n*...**.\n*.*.*.*\n.**.*.*\n.....*."

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = "....*...... \n..***......\n.*.........\n.*..***....\n**.*...*...\n...*...*...\n...*...*.**\n....***..*.\n.........*.\n......***..\n......*...."

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "**... \n*..**\n.**.*"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "**.... \n*.*...\n.**...\n...**.\n...*.*\n....*."

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "**. \n*.*\n.**"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "**.... \n*.*...\n.**...\n...**.\n...*.*\n....**"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "...........**... \n...**.....*.*...\n...*.*....*.....\n.....*...**.*...\n...*.**.....***.\n.***.....*.*...*\n*...*.*.....***.\n.***.....**.*...\n...*.**...*.....\n.....*....*.*...\n...*.*.....**...\n...**..........."

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "...** \n....*\n...*.\n*.*..\n**..."

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = ".**.... \n.*...**\n..*.*.*\n.......\n*.*.*..\n**...*.\n....**."

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "**.*.** \n...*...\n*.....*\n.*****.\n.......\n.......\n***.***"

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = "**................** \n.*................*.\n.*.*............*.*.\n..**............**..\n.......*....*.......\n.....**.****.**.....\n.......*....*.......\n..**............**..\n.*.*............*.*.\n.*................*.\n**................**"

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = "*.**.** \n**.*.*.\n......*\n***.***\n*......\n.*.*.**\n**.**.*"

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "*.** \n**.*"

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = "...**........**... \n...*.*......*.*...\n.....*......*.....\n...*.**....**.*...\n.***..........***.\n*...*.*....*.*...*\n.***..........***.\n...*.**....**.*...\n.....*......*.....\n...*.*......*.*...\n...**........**..."

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = "**....** \n*.*..*.*\n..*..*..\n*.*..*.*\n**....**"

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = "..........*....................\n..........*...............**...\n......**.*.***..........**...*.\n*.**.**.**..*.*...**.****......\n*...**..*.**..***..*.**..**...*\n*.**....***.*.***......**..*...\n........**.*...............*..*\n*.**....***.*.***......**..*...\n*...**..*.**..***..*.**..**...*\n*.**.**.**..*.*...**.****......\n......**.*.***..........**...*.\n..........*...............**...\n..........*...................."

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = "**....*\n.*..***\n.*.*...\n..*.*..\n...*.*.\n***..*.\n*....**"

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = ".....*.....\n....***....\n..***.***..\n..*.....*..\n.**.....**.\n**.......**\n.**.....**.\n..*.....*..\n..***.***..\n....***....\n.....*....."

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = ".*.*..\n*.....\n.*..*.\n...***"

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = "*..* \n****\n....\n****\n*..*"

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = ".....*..... \n....*.*....\n....**.....\n..**.......\n.*...***...\n*..**...*.*\n.**....*.**\n...*.*.*...\n...*...*...\n....***....\n......*.*..\n.......**.."

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = "**....** \n*.*..*.*\n..*..*..\n..*..*..\n...**..."

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = ".*** \n***."

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = "...*....*..\n.**.****.**\n...*....*..\n...........\n...........\n...........\n...........\n...........\n.....***...\n....***....\n...........\n...........\n...........\n...........\n...........\n..*....*...\n**.****.**.\n..*....*..."

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = "...**..**... \n.***.**.***.\n*..........*\n.****..****.\n....*..*....\n.**......**.\n.*..*..*..*.\n..***..***..\n............\n****.**.****\n*..**..**..*"

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = ".....................**....**...................\n.....................*.*..*.*...................\n.......................*..*.....................\n......................*....*....................\n......................*....*....................\n......................*....*....................\n........................**.....**...............\n...............................***..............\n...............................**.*.............\n.................................*.*............\n.........................***....*..*............\n.................................**.............\n.........**............*.....*..................\n........*..*...........*.....*..................\n......*..*.*...........*.....*..................\n..........*.....................................\n......*.**...............***....................\n.......*.....*..................................\n.............*..................................\n**...........*..................................\n*..***..........................................\n.**......***...***............................**\n......*...................................***..*\n......*......*...............................**.\n.**..........*........*..................*......\n*..***.......*......**.**............*...*......\n**....................*............**.**.....**.\n.....................................*....***..*\n..............................................**\n................................................\n......................................*.*.......\n....................***..................*......\n.....................................*..*.......\n..................*.....*...........*.*.*.......\n..................*.....*...........*..*........\n..................*.....*............**.........\n.............**.................................\n............*..*....***.........................\n............*.*.*...............................\n.............*.***..............................\n...............***..............................\n......................**........................\n....................*....*......................\n....................*....*......................\n....................*....*......................\n.....................*..*.......................\n...................*.*..*.*.....................\n...................**....**....................."

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = "....*.... \n....*....\n....*....\n.........\n***...***\n.........\n....*....\n....*....\n....*...."

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = "...** \n..*.*\n.*.*.\n.*...\n**..."

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = "**..... \n**..*..\n..**.*.\n..*..*\n.*...**\n..***..\n....*.."

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = "**.... \n*.*...\n......\n..*.*.\n.....*\n....**"

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = ".*... \n*.*..\n.*.*.\n...*.\n...**"

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = ".*. \n*.*\n.*."

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = "....*.*...... \n....**.*.....\n.......***...\n....**....*..\n**.*..**..*..\n.*.*....*.**.\n*...*...*...*\n.**.*....*.*.\n..*..**..*.**\n..*....**....\n...***.......\n.....*.**....\n......*.*...."

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = ".**.**.\n.**.**.\n..*.*..\n*.*.*.*\n*.*.*.*\n**...**"

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = ".***.......*..\n.**..*.**.**..\n...***....*...\n.*..*.*...*...\n*....*....*..*\n*....*....*..*\n.*..*.*...*...\n...***....*...\n.**..*.**.**..\n.***.......*.."

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = "..*...*.. \n.*.*.*.*.\n.*.*.*.*.\n**.*.*.**\n....*...."

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = "**....... \n.*.......\n.*.*.....\n..**.....\n.....**..\n.....*.*.\n.......*.\n.......**"

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = ".**..... \n.**.....\n........\n.*......\n*.*.....\n*..*..**\n....*.**\n..**...."

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = ".*.... \n*.*...\n.*.*..\n..*.*.\n...*.*\n....*."

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = ".*... \n*.*..\n.*.*.\n..*.*\n...**"

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = "**... \n*.*..\n.*.*.\n..*.*\n...**"

/***/ }),
/* 293 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractRenderer2 = __webpack_require__(11);

var _AbstractRenderer3 = _interopRequireDefault(_AbstractRenderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgRendered = function (_AbstractRenderer) {
  _inherits(SvgRendered, _AbstractRenderer);

  function SvgRendered() {
    _classCallCheck(this, SvgRendered);

    var _this = _possibleConstructorReturn(this, (SvgRendered.__proto__ || Object.getPrototypeOf(SvgRendered)).call(this));

    _this.POINT_HEIGHT = 2;
    _this.POINT_WIDTH = 2;
    _this._node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _this._node.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    _this._node.setAttribute('class', 'svg-renderer');
    _this._isInitialized = false;
    _this._pointLinks = [];
    _this._previousWorldData = [];
    return _this;
  }

  /**
   * Render the given word
   * @param {World} world
   */


  _createClass(SvgRendered, [{
    key: 'render',
    value: function render(world) {

      if (this._isInitialized) {

        var worldData = world.getState();
        var width = world.getWidth();
        var height = world.getHeight();

        for (var y = 0; y < height; y += 1) {
          for (var x = 0; x < width; x += 1) {

            var index = world.getPointIndexByCoords(x, y);

            if (this._previousWorldData[index] !== worldData[index]) {
              this._pointLinks[index].setAttribute('fill', worldData[index] ? 'black' : 'white');
              this._previousWorldData[index] = worldData[index];
            }
          }
        }
      } else {
        this._init(world);
      }
    }

    /**
     * Init renderer data
     * @param {World} world
     * @private
     */

  }, {
    key: '_init',
    value: function _init(world) {

      var worldData = world.getState();
      var width = world.getWidth();
      var height = world.getHeight();

      var fragment = document.createDocumentFragment();

      for (var y = 0; y < height; y += 1) {
        for (var x = 0; x < width; x += 1) {

          var svgPoint = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
          var index = world.getPointIndexByCoords(x, y);
          svgPoint.setAttribute('fill', worldData[index] ? 'black' : 'white');
          svgPoint.setAttribute('x', x * this.POINT_WIDTH + 'px');
          svgPoint.setAttribute('y', y * this.POINT_WIDTH + 'px');
          svgPoint.setAttribute('width', this.POINT_WIDTH + 'px');
          svgPoint.setAttribute('height', this.POINT_WIDTH + 'px');
          this._pointLinks[index] = svgPoint;
          this._previousWorldData[index] = worldData[index];
          fragment.appendChild(svgPoint);
        }
      }

      this._node.appendChild(fragment);
      this._node.setAttribute('width', width * this.POINT_WIDTH + 'px');
      this._node.setAttribute('height', width * this.POINT_WIDTH + 'px');
      this._isInitialized = true;
    }

    /**
     * Calculate clicked point coordinates by click event coordinates
     * @param {number} x
     * @param {number} y
     * @returns {{x: number, y: number}}
     * @private
     */

  }, {
    key: '_getPointCoordsByEventCoords',
    value: function _getPointCoordsByEventCoords(x, y) {
      return {
        x: Math.ceil(x / this.POINT_WIDTH) - 1,
        y: Math.ceil(y / this.POINT_HEIGHT) - 1
      };
    }

    /**
     * Return renderer styles
     * @returns {Element}
     * @private
     */

  }, {
    key: '_getStylesheets',
    value: function _getStylesheets() {

      var styles = document.createElement('style');

      styles.innerHTML += '\n      .svg-renderer {\n        display: inline-block;\n        border: 1px solid #b2b2b2;\n        box-sizing: content-box;\n      }';

      return styles;
    }
  }]);

  return SvgRendered;
}(_AbstractRenderer3.default);

exports.default = SvgRendered;

/***/ })
/******/ ]);