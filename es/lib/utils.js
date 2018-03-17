"use strict";

var _typeof4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAroundLatLngFromString = exports.deprecate = exports.isReactElement = exports.checkRendering = exports.unescapeRefinement = exports.escapeRefinement = exports.prefixKeys = exports.clearRefinementsAndSearch = exports.clearRefinementsFromState = exports.getRefinements = exports.isDomElement = exports.isSpecialClick = exports.renderTemplate = exports.prepareTemplateProps = exports.bemHelper = exports.getContainerNode = undefined;

var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
};

var _reduce3 = require("lodash/reduce");

var _reduce4 = _interopRequireDefault2(_reduce3);

var _forEach3 = require("lodash/forEach");

var _forEach4 = _interopRequireDefault2(_forEach3);

var _find3 = require("lodash/find");

var _find4 = _interopRequireDefault2(_find3);

var _get3 = require("lodash/get");

var _get4 = _interopRequireDefault2(_get3);

var _isEmpty3 = require("lodash/isEmpty");

var _isEmpty4 = _interopRequireDefault2(_isEmpty3);

var _keys3 = require("lodash/keys");

var _keys4 = _interopRequireDefault2(_keys3);

var _uniq3 = require("lodash/uniq");

var _uniq4 = _interopRequireDefault2(_uniq3);

var _mapKeys3 = require("lodash/mapKeys");

var _mapKeys4 = _interopRequireDefault2(_mapKeys3);

var _mapValues3 = require("lodash/mapValues");

var _mapValues4 = _interopRequireDefault2(_mapValues3);

var _curry3 = require("lodash/curry");

var _curry4 = _interopRequireDefault2(_curry3);

var _hogan3 = require("hogan.js");

var _hogan4 = _interopRequireDefault2(_hogan3);

function _interopRequireDefault2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAroundLatLngFromString = exports.deprecate = exports.isReactElement = exports.checkRendering = exports.unescapeRefinement = exports.escapeRefinement = exports.prefixKeys = exports.clearRefinementsAndSearch = exports.clearRefinementsFromState = exports.getRefinements = exports.isDomElement = exports.isSpecialClick = exports.renderTemplate = exports.prepareTemplateProps = exports.bemHelper = exports.getContainerNode = undefined;

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

var _reduce = require("lodash/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _forEach = require("lodash/forEach");

var _forEach2 = _interopRequireDefault(_forEach);

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _keys = require("lodash/keys");

var _keys2 = _interopRequireDefault(_keys);

var _uniq = require("lodash/uniq");

var _uniq2 = _interopRequireDefault(_uniq);

var _mapKeys = require("lodash/mapKeys");

var _mapKeys2 = _interopRequireDefault(_mapKeys);

var _mapValues = require("lodash/mapValues");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _curry = require("lodash/curry");

var _curry2 = _interopRequireDefault(_curry);

var _hogan = require("hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

exports.getContainerNode = getContainerNode;
exports.bemHelper = bemHelper;
exports.prepareTemplateProps = prepareTemplateProps;
exports.renderTemplate = renderTemplate;
exports.isSpecialClick = isSpecialClick;
exports.isDomElement = isDomElement;
exports.getRefinements = getRefinements;
exports.clearRefinementsFromState = clearRefinementsFromState;
exports.clearRefinementsAndSearch = clearRefinementsAndSearch;
exports.prefixKeys = prefixKeys;
exports.escapeRefinement = escapeRefinement;
exports.unescapeRefinement = unescapeRefinement;
exports.checkRendering = checkRendering;
exports.isReactElement = isReactElement;
exports.deprecate = deprecate;
exports.parseAroundLatLngFromString = parseAroundLatLngFromString;

/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 * @param {string|HTMLElement} selectorOrHTMLElement a selector or a node
 * @return {HTMLElement} The resolved HTMLElement
 * @throws Error when the type is not correct
 */

function getContainerNode(selectorOrHTMLElement) {
  var isFromString = typeof selectorOrHTMLElement === 'string';
  var domElement = void 0;
  if (isFromString) {
    domElement = document.querySelector(selectorOrHTMLElement);
  } else {
    domElement = selectorOrHTMLElement;
  }

  if (!isDomElement(domElement)) {
    var errorMessage = 'Container must be `string` or `HTMLElement`.';
    if (isFromString) {
      errorMessage += ' Unable to find ' + selectorOrHTMLElement;
    }
    throw new Error(errorMessage);
  }

  return domElement;
}

/**
 * Returns true if the parameter is a DOMElement.
 * @param {any} o the value to test
 * @return {boolean} true if o is a DOMElement
 */
function isDomElement(o) {
  return o instanceof window.HTMLElement || Boolean(o) && o.nodeType > 0;
}

function isSpecialClick(event) {
  var isMiddleClick = event.button === 1;
  return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

/**
 * Creates BEM class name according the vanilla BEM style.
 * @param {string} block the main block
 * @return {function} function that takes up to 2 parameters
 * that determine the element and the modifier of the BEM class.
 */
function bemHelper(block) {
  return function (element, modifier) {
    // block--element
    if (element && !modifier) {
      return block + '--' + element;
    }
    // block--element__modifier
    if (element && modifier) {
      return block + '--' + element + '__' + modifier;
    }
    // block__modifier
    if (!element && modifier) {
      return block + '__' + modifier;
    }

    return block;
  };
}

/**
 * Prepares an object to be passed to the Template widget
 * @param {object} unknownBecauseES6 an object with the following attributes:
 *  - transformData
 *  - defaultTemplate
 *  - templates
 *  - templatesConfig
 * @return {object} the configuration with the attributes:
 *  - transformData
 *  - defaultTemplate
 *  - templates
 *  - useCustomCompileOptions
 */
function prepareTemplateProps(_ref) {
  var transformData = _ref.transformData,
      defaultTemplates = _ref.defaultTemplates,
      templates = _ref.templates,
      templatesConfig = _ref.templatesConfig;

  var preparedTemplates = prepareTemplates(defaultTemplates, templates);

  return _extends({
    transformData: transformData,
    templatesConfig: templatesConfig
  }, preparedTemplates);
}

function prepareTemplates() {
  var defaultTemplates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var allKeys = (0, _uniq2.default)([].concat(_toConsumableArray((0, _keys2.default)(defaultTemplates)), _toConsumableArray((0, _keys2.default)(templates))));

  return (0, _reduce2.default)(allKeys, function (config, key) {
    var defaultTemplate = defaultTemplates[key];
    var customTemplate = templates[key];
    var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;

    config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
    config.useCustomCompileOptions[key] = isCustomTemplate;

    return config;
  }, { templates: {}, useCustomCompileOptions: {} });
}

function renderTemplate(_ref2) {
  var templates = _ref2.templates,
      templateKey = _ref2.templateKey,
      compileOptions = _ref2.compileOptions,
      helpers = _ref2.helpers,
      data = _ref2.data;

  var template = templates[templateKey];
  var templateType = typeof template === 'undefined' ? 'undefined' : _typeof(template);
  var isTemplateString = templateType === 'string';
  var isTemplateFunction = templateType === 'function';

  if (!isTemplateString && !isTemplateFunction) {
    throw new Error('Template must be \'string\' or \'function\', was \'' + templateType + '\' (key: ' + templateKey + ')');
  }

  if (isTemplateFunction) {
    return template(data);
  }

  var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);

  return _hogan2.default.compile(template, compileOptions).render(_extends({}, data, {
    helpers: transformedHelpers
  }));
}

// We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan(helpers, compileOptions, data) {
  return (0, _mapValues2.default)(helpers, function (method) {
    return (0, _curry2.default)(function (text) {
      var _this = this;

      var render = function render(value) {
        return _hogan2.default.compile(value, compileOptions).render(_this);
      };
      return method.call(data, text, render);
    });
  });
}

function getRefinement(state, type, attributeName, name, resultsFacets) {
  var res = { type: type, attributeName: attributeName, name: name };
  var facet = (0, _find2.default)(resultsFacets, { name: attributeName });
  var count = void 0;
  if (type === 'hierarchical') {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var split = name.split(facetDeclaration.separator);
    res.name = split[split.length - 1];
    for (var i = 0; facet !== undefined && i < split.length; ++i) {
      facet = (0, _find2.default)(facet.data, { name: split[i] });
    }
    count = (0, _get2.default)(facet, 'count');
  } else {
    count = (0, _get2.default)(facet, 'data["' + res.name + '"]');
  }
  var exhaustive = (0, _get2.default)(facet, 'exhaustive');
  if (count !== undefined) {
    res.count = count;
  }
  if (exhaustive !== undefined) {
    res.exhaustive = exhaustive;
  }
  return res;
}

function getRefinements(results, state, clearsQuery) {
  var res = clearsQuery && state.query && state.query.trim() ? [{
    type: 'query',
    name: state.query,
    query: state.query
  }] : [];

  (0, _forEach2.default)(state.facetsRefinements, function (refinements, attributeName) {
    (0, _forEach2.default)(refinements, function (name) {
      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
    });
  });

  (0, _forEach2.default)(state.facetsExcludes, function (refinements, attributeName) {
    (0, _forEach2.default)(refinements, function (name) {
      res.push({ type: 'exclude', attributeName: attributeName, name: name, exclude: true });
    });
  });

  (0, _forEach2.default)(state.disjunctiveFacetsRefinements, function (refinements, attributeName) {
    (0, _forEach2.default)(refinements, function (name) {
      res.push(getRefinement(state, 'disjunctive', attributeName,
      // we unescapeRefinement any disjunctive refined value since they can be escaped
      // when negative numeric values search `escapeRefinement` usage in code
      unescapeRefinement(name), results.disjunctiveFacets));
    });
  });

  (0, _forEach2.default)(state.hierarchicalFacetsRefinements, function (refinements, attributeName) {
    (0, _forEach2.default)(refinements, function (name) {
      res.push(getRefinement(state, 'hierarchical', attributeName, name, results.hierarchicalFacets));
    });
  });

  (0, _forEach2.default)(state.numericRefinements, function (operators, attributeName) {
    (0, _forEach2.default)(operators, function (values, operator) {
      (0, _forEach2.default)(values, function (value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: '' + value,
          numericValue: value,
          operator: operator
        });
      });
    });
  });

  (0, _forEach2.default)(state.tagRefinements, function (name) {
    res.push({ type: 'tag', attributeName: '_tags', name: name });
  });

  return res;
}

function clearRefinementsFromState(inputState, attributeNames) {
  var clearsQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var state = inputState;

  if (clearsQuery) {
    state = state.setQuery('');
  }

  if ((0, _isEmpty2.default)(attributeNames)) {
    state = state.clearTags();
    state = state.clearRefinements();
    return state;
  }

  (0, _forEach2.default)(attributeNames, function (attributeName) {
    if (attributeName === '_tags') {
      state = state.clearTags();
    } else {
      state = state.clearRefinements(attributeName);
    }
  });

  return state;
}

function clearRefinementsAndSearch(helper, attributeNames) {
  var clearsQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  helper.setState(clearRefinementsFromState(helper.state, attributeNames, clearsQuery)).search();
}

function prefixKeys(prefix, obj) {
  if (obj) {
    return (0, _mapKeys2.default)(obj, function (v, k) {
      return prefix + k;
    });
  }

  return undefined;
}

function escapeRefinement(value) {
  if (typeof value === 'number' && value < 0) {
    value = String(value).replace(/^-/, '\\-');
  }

  return value;
}

function unescapeRefinement(value) {
  return String(value).replace(/^\\-/, '-');
}

function checkRendering(rendering, usage) {
  if (rendering === undefined || typeof rendering !== 'function') {
    throw new Error(usage);
  }
}

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' && Symbol.for && Symbol.for('react.element') || 0xeac7;

function isReactElement(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

function deprecate(fn, message) {
  var hasAlreadyPrint = false;

  return function () {
    if (!hasAlreadyPrint) {
      hasAlreadyPrint = true;

      // eslint-disable-next-line no-console
      console.warn('[InstantSearch.js]: ' + message);
    }

    return fn.apply(undefined, arguments);
  };
}

var latLngRegExp = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;
function parseAroundLatLngFromString(value) {
  var pattern = value.match(latLngRegExp);

  // Since the value provided is the one send with the query, the API should
  // throw an error due to the wrong format. So throw an error should be safe..
  if (!pattern) {
    throw new Error('Invalid value for "aroundLatLng" parameter: "' + value + '"');
  }

  return {
    lat: parseFloat(pattern[1]),
    lng: parseFloat(pattern[2])
  };
}
exports.getContainerNode = getContainerNode;
exports.bemHelper = bemHelper;
exports.prepareTemplateProps = prepareTemplateProps;
exports.renderTemplate = renderTemplate;
exports.isSpecialClick = isSpecialClick;
exports.isDomElement = isDomElement;
exports.getRefinements = getRefinements;
exports.clearRefinementsFromState = clearRefinementsFromState;
exports.clearRefinementsAndSearch = clearRefinementsAndSearch;
exports.prefixKeys = prefixKeys;
exports.escapeRefinement = escapeRefinement;
exports.unescapeRefinement = unescapeRefinement;
exports.checkRendering = checkRendering;
exports.isReactElement = isReactElement;
exports.deprecate = deprecate;
exports.parseAroundLatLngFromString = parseAroundLatLngFromString;

/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 * @param {string|HTMLElement} selectorOrHTMLElement a selector or a node
 * @return {HTMLElement} The resolved HTMLElement
 * @throws Error when the type is not correct
 */

function getContainerNode(selectorOrHTMLElement) {
  var isFromString = typeof selectorOrHTMLElement === 'string';
  var domElement = void 0;
  if (isFromString) {
    domElement = document.querySelector(selectorOrHTMLElement);
  } else {
    domElement = selectorOrHTMLElement;
  }

  if (!isDomElement(domElement)) {
    var errorMessage = 'Container must be `string` or `HTMLElement`.';
    if (isFromString) {
      errorMessage += ' Unable to find ' + selectorOrHTMLElement;
    }
    throw new Error(errorMessage);
  }

  return domElement;
}

/**
 * Returns true if the parameter is a DOMElement.
 * @param {any} o the value to test
 * @return {boolean} true if o is a DOMElement
 */
function isDomElement(o) {
  return o instanceof window.HTMLElement || Boolean(o) && o.nodeType > 0;
}

function isSpecialClick(event) {
  var isMiddleClick = event.button === 1;
  return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

/**
 * Creates BEM class name according the vanilla BEM style.
 * @param {string} block the main block
 * @return {function} function that takes up to 2 parameters
 * that determine the element and the modifier of the BEM class.
 */
function bemHelper(block) {
  return function (element, modifier) {
    // block--element
    if (element && !modifier) {
      return block + '--' + element;
    }
    // block--element__modifier
    if (element && modifier) {
      return block + '--' + element + '__' + modifier;
    }
    // block__modifier
    if (!element && modifier) {
      return block + '__' + modifier;
    }

    return block;
  };
}

/**
 * Prepares an object to be passed to the Template widget
 * @param {object} unknownBecauseES6 an object with the following attributes:
 *  - transformData
 *  - defaultTemplate
 *  - templates
 *  - templatesConfig
 * @return {object} the configuration with the attributes:
 *  - transformData
 *  - defaultTemplate
 *  - templates
 *  - useCustomCompileOptions
 */
function prepareTemplateProps(_ref) {
  var transformData = _ref.transformData,
      defaultTemplates = _ref.defaultTemplates,
      templates = _ref.templates,
      templatesConfig = _ref.templatesConfig;

  var preparedTemplates = prepareTemplates(defaultTemplates, templates);

  return _extends({
    transformData: transformData,
    templatesConfig: templatesConfig
  }, preparedTemplates);
}

function prepareTemplates() {
  var defaultTemplates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var allKeys = (0, _uniq4.default)([].concat(_toConsumableArray((0, _keys4.default)(defaultTemplates)), _toConsumableArray((0, _keys4.default)(templates))));

  return (0, _reduce4.default)(allKeys, function (config, key) {
    var defaultTemplate = defaultTemplates[key];
    var customTemplate = templates[key];
    var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;

    config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
    config.useCustomCompileOptions[key] = isCustomTemplate;

    return config;
  }, { templates: {}, useCustomCompileOptions: {} });
}

function renderTemplate(_ref2) {
  var templates = _ref2.templates,
      templateKey = _ref2.templateKey,
      compileOptions = _ref2.compileOptions,
      helpers = _ref2.helpers,
      data = _ref2.data;

  var template = templates[templateKey];
  var templateType = typeof template === 'undefined' ? 'undefined' : _typeof(template);
  var isTemplateString = templateType === 'string';
  var isTemplateFunction = templateType === 'function';

  if (!isTemplateString && !isTemplateFunction) {
    throw new Error('Template must be \'string\' or \'function\', was \'' + templateType + '\' (key: ' + templateKey + ')');
  }

  if (isTemplateFunction) {
    return template(data);
  }

  var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);

  return _hogan4.default.compile(template, compileOptions).render(_extends({}, data, {
    helpers: transformedHelpers
  }));
}

// We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan(helpers, compileOptions, data) {
  return (0, _mapValues4.default)(helpers, function (method) {
    return (0, _curry4.default)(function (text) {
      var _this = this;

      var render = function render(value) {
        return _hogan4.default.compile(value, compileOptions).render(_this);
      };
      return method.call(data, text, render);
    });
  });
}

function getRefinement(state, type, attributeName, name, resultsFacets) {
  var res = { type: type, attributeName: attributeName, name: name };
  var facet = (0, _find4.default)(resultsFacets, { name: attributeName });
  var count = void 0;
  if (type === 'hierarchical') {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var split = name.split(facetDeclaration.separator);
    res.name = split[split.length - 1];
    for (var i = 0; facet !== undefined && i < split.length; ++i) {
      facet = (0, _find4.default)(facet.data, { name: split[i] });
    }
    count = (0, _get4.default)(facet, 'count');
  } else {
    count = (0, _get4.default)(facet, 'data["' + res.name + '"]');
  }
  var exhaustive = (0, _get4.default)(facet, 'exhaustive');
  if (count !== undefined) {
    res.count = count;
  }
  if (exhaustive !== undefined) {
    res.exhaustive = exhaustive;
  }
  return res;
}

function getRefinements(results, state, clearsQuery) {
  var res = clearsQuery && state.query && state.query.trim() ? [{
    type: 'query',
    name: state.query,
    query: state.query
  }] : [];

  (0, _forEach4.default)(state.facetsRefinements, function (refinements, attributeName) {
    (0, _forEach4.default)(refinements, function (name) {
      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
    });
  });

  (0, _forEach4.default)(state.facetsExcludes, function (refinements, attributeName) {
    (0, _forEach4.default)(refinements, function (name) {
      res.push({ type: 'exclude', attributeName: attributeName, name: name, exclude: true });
    });
  });

  (0, _forEach4.default)(state.disjunctiveFacetsRefinements, function (refinements, attributeName) {
    (0, _forEach4.default)(refinements, function (name) {
      res.push(getRefinement(state, 'disjunctive', attributeName,
      // we unescapeRefinement any disjunctive refined value since they can be escaped
      // when negative numeric values search `escapeRefinement` usage in code
      unescapeRefinement(name), results.disjunctiveFacets));
    });
  });

  (0, _forEach4.default)(state.hierarchicalFacetsRefinements, function (refinements, attributeName) {
    (0, _forEach4.default)(refinements, function (name) {
      res.push(getRefinement(state, 'hierarchical', attributeName, name, results.hierarchicalFacets));
    });
  });

  (0, _forEach4.default)(state.numericRefinements, function (operators, attributeName) {
    (0, _forEach4.default)(operators, function (values, operator) {
      (0, _forEach4.default)(values, function (value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: '' + value,
          numericValue: value,
          operator: operator
        });
      });
    });
  });

  (0, _forEach4.default)(state.tagRefinements, function (name) {
    res.push({ type: 'tag', attributeName: '_tags', name: name });
  });

  return res;
}

function clearRefinementsFromState(inputState, attributeNames) {
  var clearsQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var state = inputState;

  if (clearsQuery) {
    state = state.setQuery('');
  }

  if ((0, _isEmpty4.default)(attributeNames)) {
    state = state.clearTags();
    state = state.clearRefinements();
    return state;
  }

  (0, _forEach4.default)(attributeNames, function (attributeName) {
    if (attributeName === '_tags') {
      state = state.clearTags();
    } else {
      state = state.clearRefinements(attributeName);
    }
  });

  return state;
}

function clearRefinementsAndSearch(helper, attributeNames) {
  var clearsQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  helper.setState(clearRefinementsFromState(helper.state, attributeNames, clearsQuery)).search();
}

function prefixKeys(prefix, obj) {
  if (obj) {
    return (0, _mapKeys4.default)(obj, function (v, k) {
      return prefix + k;
    });
  }

  return undefined;
}

function escapeRefinement(value) {
  if (typeof value === 'number' && value < 0) {
    value = String(value).replace(/^-/, '\\-');
  }

  return value;
}

function unescapeRefinement(value) {
  return String(value).replace(/^\\-/, '-');
}

function checkRendering(rendering, usage) {
  if (rendering === undefined || typeof rendering !== 'function') {
    throw new Error(usage);
  }
}

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' && Symbol.for && Symbol.for('react.element') || 0xeac7;

function isReactElement(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

function deprecate(fn, message) {
  var hasAlreadyPrint = false;

  return function () {
    if (!hasAlreadyPrint) {
      hasAlreadyPrint = true;

      // eslint-disable-next-line no-console
      console.warn('[InstantSearch.js]: ' + message);
    }

    return fn.apply(undefined, arguments);
  };
}

var latLngRegExp = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;
function parseAroundLatLngFromString(value) {
  var pattern = value.match(latLngRegExp);

  // Since the value provided is the one send with the query, the API should
  // throw an error due to the wrong format. So throw an error should be safe..
  if (!pattern) {
    throw new Error('Invalid value for "aroundLatLng" parameter: "' + value + '"');
  }

  return {
    lat: parseFloat(pattern[1]),
    lng: parseFloat(pattern[2])
  };
}
