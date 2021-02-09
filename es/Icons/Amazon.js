(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.react);
    global.Amazon = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _extends2, _react) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);

  var SvgAmazon = props => /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 125.43 78.39"
  }, props), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, ".amazon_svg__cls-2{fill:#231f20;fill-rule:evenodd}")), /*#__PURE__*/_react.default.createElement("g", {
    id: "amazon_svg__Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "amazon_svg__Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: 125.43,
    height: 78.39,
    rx: 4.18,
    ry: 4.18,
    fill: "#f90"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "amazon_svg__cls-2",
    d: "M71.76 47.15c-4.37 3.23-10.7 4.94-16.15 4.94a29.16 29.16 0 01-19.72-7.53c-.41-.37 0-.87.44-.58a39.82 39.82 0 0019.74 5.23 39.24 39.24 0 0015.06-3.08c.74-.31 1.36.49.63 1.02z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "amazon_svg__cls-2",
    d: "M73.58 45.08c-.56-.72-3.69-.34-5.1-.17-.43.05-.49-.32-.11-.59 2.5-1.76 6.6-1.25 7.07-.66s-.12 4.69-2.47 6.66c-.35.3-.7.14-.54-.26.57-1.32 1.71-4.27 1.15-4.98zm-5-13.17v-1.7a.42.42 0 01.43-.43h7.65a.43.43 0 01.44.44v1.46a2.34 2.34 0 01-.58 1.07l-4 5.66a8.32 8.32 0 014.36.94.78.78 0 01.41.66v1.82c0 .25-.28.54-.56.39a8.8 8.8 0 00-8.08 0c-.27.14-.55-.15-.55-.4V40.1a2 2 0 01.29-1.17L73 32.34h-4a.42.42 0 01-.42-.43zM40.69 42.57h-2.33a.42.42 0 01-.41-.39V30.24a.44.44 0 01.45-.43h2.16a.44.44 0 01.43.4v1.56a3.2 3.2 0 016.08 0 3.44 3.44 0 015.93-.91c.73 1 .58 2.46.58 3.74v7.54a.44.44 0 01-.45.43h-2.3a.44.44 0 01-.42-.43v-6.33a16.48 16.48 0 00-.06-2.23 1.22 1.22 0 00-1.37-1 1.53 1.53 0 00-1.39 1 7.14 7.14 0 00-.22 2.28v6.33a.44.44 0 01-.45.43H44.6a.45.45 0 01-.42-.43v-6.38c0-1.33.21-3.29-1.43-3.29s-1.61 1.91-1.61 3.29v6.33a.44.44 0 01-.45.43zm42.99-13.01c3.45 0 5.32 3 5.32 6.73s-2.06 6.53-5.32 6.53-5.23-3-5.23-6.66 1.86-6.6 5.23-6.6zm0 2.43c-1.71 0-1.82 2.34-1.82 3.8s0 4.57 1.8 4.57 1.89-2.51 1.89-4a10.8 10.8 0 00-.35-3.16 1.46 1.46 0 00-1.5-1.2zm9.8 10.58h-2.32a.45.45 0 01-.42-.43V30.2a.44.44 0 01.45-.39h2.15a.45.45 0 01.42.33V32c.65-1.63 1.56-2.41 3.17-2.41A3.06 3.06 0 0199.69 31a7.72 7.72 0 01.6 3.72v7.51a.44.44 0 01-.44.38h-2.33a.44.44 0 01-.42-.38v-6.52c0-1.31.15-3.21-1.45-3.21a1.51 1.51 0 00-1.35 1 5.25 5.25 0 00-.37 2.26v6.43a.44.44 0 01-.45.38zm-31-5.7a4.56 4.56 0 01-.43 2.47 1.89 1.89 0 01-1.61 1c-.89 0-1.42-.68-1.42-1.68 0-2 1.78-2.35 3.46-2.35zm2.35 5.67a.47.47 0 01-.55.05A5.65 5.65 0 0163 41a4.62 4.62 0 01-3.84 1.69 3.29 3.29 0 01-3.48-3.62 3.94 3.94 0 012.48-3.8 15.77 15.77 0 014.37-.81v-.3a3 3 0 00-.28-1.69 1.54 1.54 0 00-1.31-.6A1.76 1.76 0 0059 33.3c-.05.21-.2.42-.41.43l-2.25-.24A.41.41 0 0156 33c.52-2.73 3-3.56 5.2-3.56a5.25 5.25 0 013.5 1.16c1.14 1.06 1 2.47 1 4v3.63a3.15 3.15 0 00.88 2.15.44.44 0 010 .62c-.48.4-1.32 1.13-1.79 1.55zM32 36.87a4.65 4.65 0 01-.43 2.47 1.89 1.89 0 01-1.61 1c-.9 0-1.42-.68-1.42-1.68 0-2 1.78-2.35 3.46-2.35zm2.35 5.67a.47.47 0 01-.55.05A5.71 5.71 0 0132.45 41a4.6 4.6 0 01-3.83 1.69 3.29 3.29 0 01-3.48-3.62 3.94 3.94 0 012.48-3.8A15.77 15.77 0 0132 34.5v-.3a3.05 3.05 0 00-.28-1.69 1.56 1.56 0 00-1.31-.6 1.77 1.77 0 00-1.87 1.39.49.49 0 01-.4.43l-2.25-.24a.4.4 0 01-.35-.49c.51-2.73 3-3.56 5.2-3.56a5.25 5.25 0 013.5 1.16c1.13 1.06 1 2.47 1 4v3.63a3.19 3.19 0 00.88 2.15.44.44 0 010 .62c-.47.4-1.32 1.13-1.78 1.55z"
  }))));

  var _default = SvgAmazon;
  _exports.default = _default;
});