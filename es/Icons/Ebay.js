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
    global.Ebay = mod.exports;
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

  var SvgEbay = props => /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 125.43 78.39"
  }, props), /*#__PURE__*/_react.default.createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/_react.default.createElement("g", {
    "data-name": "Layer 1"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: 125.43,
    height: 78.39,
    rx: 4.18,
    ry: 4.18,
    fill: "#1d1e1e"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M34.37 31.22c-8.9 0-9.25 6.93-9.2 8.73 0 0-.44 8.11 9 8.11 8.1 0 8.5-5.09 8.5-5.09h-3.74s-.73 2.8-4.76 2.73c-5.18-.1-5.38-5.12-5.38-5.12h14.35s1.09-9.36-8.77-9.36zm-5.46 6.91s.25-4.54 5.38-4.54 5.1 4.54 5.1 4.54z",
    fill: "#ee3a3f"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M53.11 31.22c-4.48 0-6.4 2.65-6.4 2.65v-8.95h-3.59l.06 18.93s0 2.2-.16 3.66h3.49l.15-2.13s1.62 2.68 6.38 2.68 8.5-2.93 8.6-8.36-4.05-8.45-8.53-8.48zm-.82 14.42c-5.66.07-5.56-6-5.56-6s-.21-5.84 5.55-6 5.57 6.12 5.57 6.12.09 5.81-5.56 5.88z",
    fill: "#0067b2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M78.23 43.77c0-2.45.08-4.63 0-6.18-.1-1.78.07-6.1-7.66-6.42 0 0-7.41-.67-8.18 4.84h3.79s.3-2.52 4.14-2.45c3.64.07 4.31 1.85 4.29 4h-4.16c-1.88 0-8.44.22-9.06 4.22-.73 4.75 3.52 6.24 6.84 6.22s5.21-1 6.62-2.8l.15 2.28h3.3s-.08-1.26-.07-3.71zm-9.38 2s-3.6 0-3.81-2.87c-.23-3.07 5.53-2.9 5.53-2.9h4.07s.66 5.85-5.79 5.77z",
    fill: "#faac18"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#6ab845",
    d: "M76.27 31.82h4.16l6.09 12.15 6.11-12.15h3.76L85.37 53.48h-4.03l3.19-6.02-8.26-15.64z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M97.8 32.69v-.45h-.14v-.17h.14v-.23h.25v.23h.3v.17h-.3v.42c0 .07 0 .11.14.11h.15v.16a.67.67 0 01-.22 0c-.19.01-.32-.05-.32-.24zm.8-.62h.25v.13a.42.42 0 01.34-.15.38.38 0 01.32.15.53.53 0 01.37-.15c.24 0 .39.12.39.33v.54H100v-.48a.2.2 0 00-.22-.21.21.21 0 00-.23.21v.48h-.25v-.48a.2.2 0 00-.22-.21.21.21 0 00-.24.21v.48h-.24z",
    fill: "#231f20"
  }))));

  var _default = SvgEbay;
  _exports.default = _default;
});