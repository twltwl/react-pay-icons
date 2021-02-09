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
    global.Shopify = mod.exports;
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

  var SvgShopify = props => /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 126 79"
  }, props), /*#__PURE__*/_react.default.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: "#8BB43F",
    width: 125.43,
    height: 78.39,
    rx: 4.18
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26 42.9a6.43 6.43 0 002.91.77c1 0 1.55-.54 1.55-1.21 0-.67-.39-1.08-1.47-1.7a3.94 3.94 0 01-2.34-3.27c0-2.5 2.13-4.28 5.25-4.28a6.33 6.33 0 013 .59l-.82 2.53a5.37 5.37 0 00-2.22-.49c-1 0-1.65.46-1.65 1.19 0 .56.47 1 1.37 1.46 1.39.8 2.55 1.89 2.55 3.4 0 2.84-2.29 4.44-5.49 4.41a7 7 0 01-3.5-.87L26 42.9zm8.88 3.17l3.45-18.17h3.56L40.53 35a4.79 4.79 0 013.76-1.89c1.86 0 2.91 1.22 2.91 3.23a12.85 12.85 0 01-.2 2.39l-1.4 7.34h-3.55L43.39 39c.1-.517.15-1.043.15-1.57 0-.78-.31-1.32-1.11-1.32-1.13 0-2.34 1.44-2.81 3.79l-1.18 6.21-3.56-.04zm25.23-7.91c0 4.41-2.83 8.17-7 8.17a4.64 4.64 0 01-4.9-5c0-4.31 2.84-8.18 7.11-8.18 3.3.03 4.79 2.46 4.79 5.01zm-8.3 3.12c0 1.29.52 2.32 1.73 2.32 1.88 0 2.94-3.35 2.94-5.55 0-1-.41-2.13-1.68-2.13-1.93 0-2.99 3.32-2.99 5.36zm7.45 9.84l2.48-13c.28-1.47.56-3.43.72-4.72h3.14l-.2 1.91a4.7 4.7 0 013.76-2.12c2.6 0 3.66 2.14 3.66 4.54 0 4.33-2.73 8.61-6.91 8.61a4.39 4.39 0 01-2.08-.46h-.03l-1 5.25-3.54-.01zm5.08-8c.41.349.933.534 1.47.52 2 0 3.35-3.27 3.35-5.57 0-.95-.34-2-1.42-2-1.24 0-2.4 1.47-2.81 3.69l-.59 3.36zM73 46.07l2.4-12.6H79l-2.42 12.6H73zm4.62-14.15a1.64 1.64 0 01-1.68-1.78 2 2 0 012-2.06 1.7 1.7 0 011.78 1.78 2 2 0 01-2.09 2.06h-.01zm2 14.15l1.88-10h-1.64l.51-2.68H82l.1-.59a6.75 6.75 0 012.06-4 5.28 5.28 0 013.48-1.19 5.05 5.05 0 011.96.39l-.7 2.79a3.28 3.28 0 00-1.13-.19c-1.19 0-1.91 1.09-2.12 2.3l-.13.59H88l-.49 2.68h-2.45l-1.88 10-3.56-.1zm12.79-12.6l.59 5.67c.16 1.26.26 2.16.31 3 .29-.85.55-1.65 1.06-3l2.16-5.64h3.72l-4.34 9.3a24 24 0 01-4.67 7.06 8.09 8.09 0 01-3.47 1.93l-1-3a7.88 7.88 0 002-1 6 6 0 001.93-2.14.77.77 0 00.08-.59l-2.11-11.59h3.74z",
    fill: "#FFF"
  })));

  var _default = SvgShopify;
  _exports.default = _default;
});