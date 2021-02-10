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
    global.DirectDebit = mod.exports;
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

  var SvgDirectDebit = function SvgDirectDebit(props) {
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
      fill: "#231f20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60.49 32.15h3.9s3.86-.08 3.82 3.42c0 2.61-3.74 3-3.74 3h-4v-6.42zm11.66 12.58c.11.51.47 1.07 1.7 1.13a4.71 4.71 0 002.58-.59v1.21a16.71 16.71 0 01-2.65.43c-.9 0-3.55-.2-3.55-2.65 0-2 2.18-2.61 3.43-2.61 2.18.08 3.23.86 3.19 3.08h-4.7zm0-1h3s0-1.13-1.44-1.13a1.37 1.37 0 00-1.55 1.13zm9.46-1.22a3 3 0 012.39-.82 2.55 2.55 0 012.77 2.57c0 .54-.23 2.61-3 2.61a2.62 2.62 0 01-2.1-.81v.65H79.7v-7h1.91v2.83zm1.63 3.25a1.67 1.67 0 001.64-1.48c0-.47-.27-1.44-1.72-1.44a1.51 1.51 0 00-1.55 1.26v.5a1.48 1.48 0 001.63 1.16zm16.48-.2v1.09a8.79 8.79 0 01-1.48.2c-.58 0-2.11-.35-2.11-1.83v-2.24h-1.55v-1h1.59v-1.22h2v1.21h1.6v1h-1.6v1.95s0 1 .78 1 .82-.12.82-.12zM93.8 33.2h2.26v5.41H98V33.2h2.29v-1.13H93.8v1.13zm-.78.27l.23-1.13a7.17 7.17 0 00-2.68-.43c-1.68 0-4.37.94-4.37 3.47s2.84 3.35 4.6 3.35a6.47 6.47 0 002.34-.27l-.2-1.25a8.15 8.15 0 01-2.1.23c-1.29 0-2.61-1-2.61-2.18A2.64 2.64 0 0191 33.12a6.28 6.28 0 012.06.35zM75.8 32.11S79 32 79 33.82c0 1.6-1.83 1.72-1.83 1.72a1.16 1.16 0 01.73.42c.2.32 1.48 2.65 1.48 2.65h-1.94A5.85 5.85 0 0177 38c-.12-.27-.47-.86-.47-.86a1.33 1.33 0 00-1.21-1h-.69v2.52h-1.91v-6.5zM74.6 35h1s1.4-.08 1.48-.94-1.37-.93-1.37-.93H74.6V35zm7.82 1h3.12v-1.17h-3.12v-1.48h3.39v-1.24h-5.29v6.5h5.33v-1.17h-3.43V36zM90 41h1.91v-1.3H90V41zm0 5.68h1.91v-4.91H90v4.94zm-20.8-8.1h1.87v-6.5h-1.85v6.5zm-8.73 1.64h3.9s3.86-.08 3.82 3.43c0 2.61-3.74 3-3.74 3h-4v-6.4zm1.91 5.22h1.25s2.57-.16 2.57-2.15-2.73-2.18-2.73-2.18H62.4v4.33zm0-8.1h1.25s2.57-.2 2.57-2.15S63.49 33 63.49 33H62.4v4.33zM43 36v13s-7.56-1.36-7.56-6.54c0-4.13 5.59-6 7.56-6.49zm0-.24c-4.55-.33-14.85 1.8-14.85 6.45 0 3 5.46 7.48 14.34 7.6.35 0 10.44-.39 10.28-11.22-.13-9.09-6.94-10.69-9.11-11v-.56c8.67.55 15.5 5.77 15.5 12.11 0 6.7-7.63 12.15-17 12.15s-17-5.45-17-12.15S32.76 27 42.15 27h.86v8.72z",
      fill: "#fff",
      fillRule: "evenodd"
    })))));
  };

  var _default = SvgDirectDebit;
  _exports["default"] = _default;
});