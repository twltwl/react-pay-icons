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
    global.Visa = mod.exports;
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

  var SvgVisa = function SvgVisa(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 125.43 78.39"
    }, props), /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 1"
    }, /*#__PURE__*/React.createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#3957a7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M57.72 50.97h-6.13l3.83-23.53h6.13l-3.83 23.53zM46.44 27.44L40.6 43.62l-.69-3.48-2.06-10.58a2.63 2.63 0 00-2.91-2.12h-9.66l-.11.4a22.81 22.81 0 016.41 2.69L36.9 51h6.39L53 27.44zM94.63 51h5.63l-4.9-23.53h-4.93a2.81 2.81 0 00-2.83 1.75L78.46 51h6.39l1.27-3.49h7.8zm-6.74-8.32l3.22-8.81 1.81 8.81zm-8.95-9.58l.87-5.1a17.71 17.71 0 00-5.51-1C71.26 27 64 28.35 64 34.81c0 6.08 8.48 6.15 8.48 9.35s-7.6 2.62-10.11.6l-.91 5.29a17.11 17.11 0 006.91 1.33c4.18 0 10.49-2.17 10.49-8.06 0-6.12-8.55-6.69-8.55-9.35s6.01-2.32 8.63-.87z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.91 40.14l-2.06-10.58a2.63 2.63 0 00-2.91-2.12h-9.66l-.11.4a23.73 23.73 0 019.09 4.56 18.39 18.39 0 015.65 7.74z",
      fill: "#f9a533"
    })))));
  };

  var _default = SvgVisa;
  _exports["default"] = _default;
});