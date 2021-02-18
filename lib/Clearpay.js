function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Clearpay = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgClearpay = function SvgClearpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#B2FCE4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44.099 18.062l-3.28 6.774h-1.334l1.226-2.533-1.947-4.241h1.334l1.24 2.84 1.334-2.84h1.427zm-12.482 2.4a1.334 1.334 0 10-2.668 0 1.334 1.334 0 002.668 0zm-3.8 4.361v-6.761h1.186v.627a1.88 1.88 0 011.507-.707 2.36 2.36 0 012.32 2.48 2.4 2.4 0 01-2.347 2.494 1.853 1.853 0 01-1.453-.653v2.533l-1.214-.013zm9.28-4.36a1.334 1.334 0 10-2.667 0 1.334 1.334 0 002.668 0zm0 2.4v-.627a1.933 1.933 0 01-1.52.707 2.347 2.347 0 01-2.307-2.48 2.4 2.4 0 012.347-2.494 1.88 1.88 0 011.48.693v-.6h1.187v4.814l-1.186-.013zm-11.414-4.32a1.267 1.267 0 011.56-.454v1.227a1.44 1.44 0 00-.853-.187.84.84 0 00-.667.92v2.854h-1.214v-4.841h1.174v.48zm27.59-.748l-1.4-.8-1.414-.813a1.413 1.413 0 00-2.107 1.227v.173a.266.266 0 00.134.24l.667.387a.266.266 0 00.367-.104.266.266 0 00.033-.136v-.427a.28.28 0 01.44-.253l1.333.746 1.334.747a.28.28 0 010 .48l-1.334.747-1.333.733a.28.28 0 01-.427-.24v-.213a1.414 1.414 0 00-2.12-1.16l-1.454.747-1.333.813a1.4 1.4 0 000 2.44l1.4.8 1.413.814a1.401 1.401 0 002.107-1.227v-.173a.267.267 0 00-.133-.24l-.654-.387a.28.28 0 00-.413.24v.427a.28.28 0 01-.427.253l-1.333-.747-1.334-.746a.28.28 0 010-.48l1.334-.747 1.333-.734a.28.28 0 01.427.24v.214a1.414 1.414 0 002.107 1.227l1.414-.814 1.4-.813a1.4 1.4 0 00-.027-2.44zm-42.352 3.28a2.414 2.414 0 01-2.44 1.868 2.48 2.48 0 110-4.961 2.4 2.4 0 012.4 1.84H9.667a1.333 1.333 0 00-1.16-.693 1.333 1.333 0 100 2.667 1.24 1.24 0 001.16-.76l1.254.04zm.56 1.788v-6.775h1.173v6.775h-1.173zm3.027-2.08a1.214 1.214 0 001.24 1.12 1.334 1.334 0 001.133-.627h1.24a2.36 2.36 0 01-2.4 1.667 2.36 2.36 0 01-2.467-2.48 2.426 2.426 0 012.494-2.494 2.4 2.4 0 012.467 2.493 1.15 1.15 0 010 .307l-3.707.013zm2.414-.747a1.147 1.147 0 00-1.187-1 1.186 1.186 0 00-1.214 1h2.4zm5.614 2.827v-.614a1.962 1.962 0 01-1.52.694 2.347 2.347 0 01-2.32-2.48 2.388 2.388 0 012.346-2.481 1.92 1.92 0 011.494.694v-.614h1.173v4.8h-1.173zm0-2.4a1.334 1.334 0 10-1.334 1.333 1.334 1.334 0 001.32-1.334h.014z",
      fill: "#000"
    })));
  };

  var _default = SvgClearpay;
  _exports["default"] = _default;
});