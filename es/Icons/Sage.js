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
    global.Sage = mod.exports;
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

  var SvgSage = function SvgSage(props) {
    return /*#__PURE__*/_react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), /*#__PURE__*/_react["default"].createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      "data-name": "Layer 1"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#008060"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M100.27 38.45c0-3.2-2.49-9.16-10.5-9.18a11.67 11.67 0 00-7.31 2.53v-2.26H77.1v2.26a9.64 9.64 0 00-4.52-2.4 12 12 0 00-5.53.46 7.94 7.94 0 00-4 2.53c-2.24-2.5-5.78-3-8.6-3.1-3.21-.12-6.45.27-9 2.11a19.47 19.47 0 00-8.91-2.19 12 12 0 00-7.91 2.45 4.65 4.65 0 00-1.43 2 5.37 5.37 0 00.39 4.91c1.49 2 3.17 2.78 6.19 3.11 2.64.3 4.49.3 6.45.66a2 2 0 011.78 1.87c0 1.19-1.66 3.12-5.66 2.86-3.33-.21-4.58-.68-7.72-2.72l-3.53 2.86s.6.48 1 .75a13.73 13.73 0 001.23.73 19.81 19.81 0 0012.26 2.11 14.09 14.09 0 005.54-2.06A10 10 0 0052.44 51c2.66-.12 4.63 0 6.48-2.15V51h5.18v-2.14a15.75 15.75 0 001.39 1c3.29 2 8.53 1.23 11.62-1.12v2.74c-.09 1.7-1.65 2.86-3.29 3.51-2.82 1.13-5.4.12-7.7-1.5l-3.92 2.62a10.94 10.94 0 003.54 2.37 14 14 0 0012.63-.75c2.26-1.34 3.14-3 3.68-5.51a18.62 18.62 0 00.37-3.5v-.1l.13.1a11.76 11.76 0 003.55 1.78 14.8 14.8 0 008.14 0A11.37 11.37 0 0098 48.72a12.83 12.83 0 001.69-1.45l-3.39-2.41A9.73 9.73 0 0191.52 47c-2.25.28-4.8-.13-6.18-1.62-.74-.81-1-1.06-1-3.11h15.94zm-33.92 1.48c0-1.17.15-2.43.27-3.67.07-.6.79-1.33 1.82-1.88a7 7 0 013.24-.88 6.86 6.86 0 012.55.46 3.53 3.53 0 012.54 2.69c.1 1.13.22 2.2.27 3.23a12.64 12.64 0 01-.24 3.66 3.4 3.4 0 01-1.32 2 5.64 5.64 0 01-3.8 1.21c-2.22-.12-4.22-1-4.8-2.24a10.63 10.63 0 01-.53-4.58zm-9.46 6.86a12.32 12.32 0 01-4.77.29c-1.58-.19-3.08-.3-3.69-1.71a1.93 1.93 0 01.26-2.12c.81-1 2.68-1.23 3.81-1.24h6.17c.16 1.61.68 3.99-1.78 4.78zM38.57 38c-2.48-.14-4.75-.18-6-1.17a1.9 1.9 0 01.43-2.8 7.42 7.42 0 014.17-.77 12.69 12.69 0 016.19 2l2.15-2s2.27 2.07 2.27 2a8.06 8.06 0 016-1.84c3.37 0 4.34.66 4.84 1.4.31.46 0 3.31 0 3.31s-3 .1-5.12 0a17.34 17.34 0 00-4.37.19 7.06 7.06 0 00-3.66 1.58 13.27 13.27 0 00-1.91-1.09c-1.76-.81-3.05-.69-4.99-.81zm45.89.37a5.33 5.33 0 01.89-3.11 5.94 5.94 0 015-2.28 6.28 6.28 0 014.94 2.14 5.1 5.1 0 011 3.25z",
      fill: "#fff",
      fillRule: "evenodd"
    }))));
  };

  var _default = SvgSage;
  _exports["default"] = _default;
});