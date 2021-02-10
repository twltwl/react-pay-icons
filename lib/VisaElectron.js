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
    global.VisaElectron = mod.exports;
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

  var SvgVisaElectron = function SvgVisaElectron(props) {
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
      fill: "#045ea0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.24 44.15a65 65 0 0140.45-4.06l.18-4.48c-18.61-2-32 3.9-40.63 8.1v.44z",
      fillRule: "evenodd",
      fill: "#faa929"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.11 47.44h8.94v2.69h-5.56l-.03 2.49H34v2.58h-5.56l.02 2.49h5.48v2.7h-8.83V47.44zm11.19-1.09h3.25l.02 14.04h-3.26l-.01-14.04zm14.45 12.97a6.83 6.83 0 01-4.28 1.4 4.66 4.66 0 01-5-4.84 5.11 5.11 0 015.07-5.26c3.59 0 4.72 2.54 4.72 5.78h-6.51a2 2 0 002.26 2 4.18 4.18 0 002.66-.93l1.08 1.89zm-2.39-4.83c0-1-.47-1.85-1.55-1.85a2.24 2.24 0 00-2 1.85zm12.8 5.26a7.43 7.43 0 01-3.46 1c-3 0-5.15-1.72-5.15-4.82a5 5 0 015.35-5.28 6.64 6.64 0 013.2.82l-1.05 2.13a4.09 4.09 0 00-1.53-.37 2.46 2.46 0 00-2.71 2.53 2.39 2.39 0 002.43 2.41A4.16 4.16 0 0060 57.6l1.16 2.15zm1.2-8.75h1.47v-3.2H67l-.11 3.2h2.67v2.35h-2.73c0 1.31-.09 2.7-.09 3.5S67 58 67.68 58a2.38 2.38 0 001.19-.45l.71 2.21a6.33 6.33 0 01-3.21.93c-2.64 0-2.77-1.66-2.77-3.83 0-1.16.09-2.32.09-3.58h-1.4l.07-2.28zm8.87 0h3.26v1.32a2.69 2.69 0 012.39-1.59 4.59 4.59 0 011.06.12L77.55 54a3.9 3.9 0 00-1.15-.18 2.29 2.29 0 00-1.93 1.1l-.06 5.45h-3.25l.07-9.37zm12.65-.38c3.48 0 5.28 2.21 5.28 5.05s-1.8 5-5.28 5-5.27-2.21-5.27-5 1.79-5.05 5.27-5.05zm0 7.63c1.56 0 2-1.34 2-2.58s-.46-2.58-2-2.58-2 1.35-2 2.58.47 2.58 2 2.58zM90.93 51h3.26v1a4.59 4.59 0 013-1.36c2 0 3.08 1.1 3.08 3.68v6.09H97v-5.6c0-.77-.21-1.37-1.18-1.37a3.08 3.08 0 00-1.7.86v6.11h-3.27l.08-9.41zM51.89 31.53L56 17.97h3.67l-4.11 13.56h-3.67zM50.25 18L47 23.72a14.24 14.24 0 00-1.57 3.22h-.05c.06-1.21-.11-2.69-.13-3.52L44.84 18h-6.18l-.06.37a2.55 2.55 0 012.78 2.42l1.21 10.77h3.8L54.08 18zm28.54 13.53l-.1-2h-4.58l-.94 2h-4L76.41 18h4.89l1.22 13.54zm-.42-8c0-1-.07-2.36 0-3.19-.22.68-1.19 2.7-1.6 3.69l-1.37 3h3.22l-.19-3.48zm-14.84 8.39A10.27 10.27 0 0158 30.36l1.75-2.67A6.72 6.72 0 0063.69 29a1.71 1.71 0 001.61-.77c.51-.89-.11-1.36-1.55-2.17l-.75-.44c-2.12-1.45-3-2.83-2-5.24.64-1.54 2.33-2.71 5.11-2.71a8.2 8.2 0 014.77 1.64l-2 2.36A4.49 4.49 0 0066 20.42a1.74 1.74 0 00-1.57.7c-.38.76.13 1.28 1.25 2l.84.54c2.58 1.63 3.19 3.33 2.55 4.93-1.12 2.74-3.3 3.36-5.57 3.36z",
      fillRule: "evenodd",
      fill: "#fff"
    })))));
  };

  var _default = SvgVisaElectron;
  _exports["default"] = _default;
});