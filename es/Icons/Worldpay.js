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
    global.Worldpay = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgWorldpay = function SvgWorldpay(props) {
    return /*#__PURE__*/_react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("style", null, ".worldpay_svg__cls-2{fill:#fff}")), /*#__PURE__*/_react["default"].createElement("g", {
      id: "worldpay_svg__Layer_2",
      "data-name": "Layer 2"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "worldpay_svg__Layer_1-2",
      "data-name": "Layer 1"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#203c73"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      className: "worldpay_svg__cls-2",
      d: "M39.61 45.13h-2.7l-2.32-8.4a21.9 21.9 0 01-.52-2.56 17.11 17.11 0 01-.49 2.51l-2.29 8.45h-2.6l-3.53-13.6h2.34l2.09 8.26a21.15 21.15 0 01.53 2.68 21 21 0 01.54-2.58L33 31.53h2.4l2.38 8.38a24.7 24.7 0 01.54 2.5c.14-.85.28-1.63.48-2.38l2.12-8.5h2.2l-3.53 13.6m7.51.2c-2.78 0-4.59-1.55-4.59-5.08 0-3 2-5.34 5-5.34 2.69 0 4.58 1.49 4.58 5 0 3.08-2 5.4-5 5.4m.22-8.6c-1.31 0-2.58 1-2.58 3.3s.89 3.45 2.56 3.45c1.39 0 2.56-1.09 2.56-3.41.01-2.11-.85-3.32-2.53-3.32zm11.1.34c-2-.39-3 1-3 4v4.07h-2.12v-10h2.06a12.66 12.66 0 01-.21 2.22 3.07 3.07 0 013.33-2.4l-.1 2.12m1.29-5.66h2.16v13.73h-2.16zM70 45.13a12.13 12.13 0 01.14-1.87 3.45 3.45 0 01-3.26 2.07c-2.46 0-3.69-1.81-3.69-4.72 0-3.44 2-5.66 5.24-5.66.48 0 1 0 1.51.08V31.4H72v13.73h-2m-.1-8.28a7.34 7.34 0 00-1.59-.19c-1.71 0-2.88 1.05-2.88 3.75 0 2 .62 3.15 2 3.15 1.59 0 2.48-1.9 2.48-3.61zm6.91 3.3a9 9 0 01-1 0v5h-2.2V31.53c1 0 2.22-.08 3.49-.08 3.22 0 5 1.57 5 4.09s-2.1 4.61-5.29 4.61m.13-6.91a10.3 10.3 0 00-1.14 0v5a7.77 7.77 0 001 .08c1.84 0 3-1 3-2.62s-.89-2.46-2.86-2.46zm11.37 11.89a13.32 13.32 0 01.1-1.85 3.52 3.52 0 01-3.33 2.07 2.64 2.64 0 01-2.8-2.78c0-2.26 2.24-3.49 5.91-3.49v-.58c0-1.23-.53-1.9-2.1-1.9a6.7 6.7 0 00-2.86.73l-.43-1.73a10.64 10.64 0 013.65-.67c3 0 3.89 1.33 3.89 3.33v4.15c0 .87 0 1.89.06 2.74h-2.09m-.14-4.62c-3 0-3.83.83-3.83 1.78a1.3 1.3 0 001.37 1.35 2.68 2.68 0 002.46-2.84z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      className: "worldpay_svg__cls-2",
      d: "M96.15 45.84c-1.25 3.34-2.58 4.37-4.86 4.37a8.42 8.42 0 01-1.29-.12l.24-1.88a4.75 4.75 0 001.23.16c.94 0 1.83-.46 2.5-2.25l.36-1-3.75-10H93l1.63 4.58c.32.88.56 1.77.79 2.62.21-.81.63-2.12 1-3.13l1.43-4.07h2.32l-4 10.73m.71-14.27h-.72v-.26h1.73v.26h-.72v1.92h-.29v-1.92m1.31-.26h.43l.52 1.54c.07.22.08.26.1.33a3.07 3.07 0 01.11-.35l.52-1.52h.39v2.18H100v-1.82l-.63 1.82h-.27l-.62-1.85v1.85h-.28v-2.18"
    }))));
  };

  var _default = SvgWorldpay;
  _exports["default"] = _default;
});