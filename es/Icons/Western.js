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
    global.Western = mod.exports;
  }
})(this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgWestern = function SvgWestern(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), _react["default"].createElement("g", {
      "data-name": "Layer 2"
    }, _react["default"].createElement("g", {
      "data-name": "Layer 1"
    }, _react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#121212"
    }), _react["default"].createElement("path", {
      d: "M95.89 47.22h-.63V31.37h.63v15.85zm-7.59-.05h-.62V31.32h.62v15.85zm-58.51-8.76l.63-4.57.64 4.57h3.08l1.5-7.06h-2.41l-.66 4.46-.66-4.46h-2.94l-.66 4.35-.65-4.35h-2.51l1.51 7.06h3.13zm7.06 0h6.13v-1.84h-3.09v-.83h2.91v-1.82h-2.91v-.76h2.99v-1.81h-6.03v7.06zm7.44-2.27a2.35 2.35 0 000 .26c0 1.34 1.23 2.13 3.52 2.13s3.5-.81 3.5-2.31c0-1.28-.72-1.66-2.52-2.27-1-.33-1.53-.31-1.53-.8 0-.26.17-.46.58-.46a.66.66 0 01.68.78h2.61v-.3c0-1.24-1.13-2-3.21-2-2.29 0-3.51.88-3.51 2.27 0 1 .62 1.57 1.88 1.93a12.26 12.26 0 011.86.66.44.44 0 01.26.5c0 .28-.21.45-.62.45s-.66-.31-.66-.79v-.06zm14.49-4.79h-6.71v1.88h1.87v5.18h2.98v-5.18h1.86v-1.88zm1.29 7.06h6.13v-1.84h-3.09v-.83h2.88v-1.82h-2.88v-.76h2.99v-1.81h-6.03v7.06zm7.99 0H71v-2.52h.27c.71 0 .81.26.93 1l.07.51a6.67 6.67 0 00.23 1h3a12.37 12.37 0 01-.27-1.26l-.1-.75c-.13-1-.52-1.41-1.31-1.57a1.71 1.71 0 001.41-1.65c0-1.41-.89-1.83-3-1.83h-4.17v7.06zM71 34.16v-1.23h.34c.66 0 1 .16 1 .6s-.36.65-1.07.65zm8.27.22l1.57 4.03h3.42v-7.06h-2.31v3.59l-1.31-3.59h-3.68v7.06h2.31v-4.03zM55.9 42.8l1.58 4.03h3.41v-7.06h-2.31v3.6l-1.3-3.6h-3.69v7.06h2.31V42.8zm23.44 0l1.57 4.03h3.42v-7.06h-2.31v3.6l-1.3-3.6h-3.69v7.06h2.31V42.8zm-34.88-3.03V44a2.51 2.51 0 00.68 2.07 4 4 0 002.93.86C50.54 47 51.7 46 51.7 44v-4.23h-2.94v4.36c0 .58-.26.89-.69.89s-.69-.29-.69-.89v-4.36zm21.36 0h-3.01v7.06h3.01v-7.06zm5.51 7.17c2.67 0 4.1-1.29 4.1-3.69s-1.44-3.7-4-3.7-4 1.34-4 3.71 1.45 3.68 4 3.68zm.08-5.75c.7 0 .86.61.86 2s-.17 2.17-.87 2.17-.86-.67-.86-2 .16-2.1.87-2.1zm27.71-9.94a1.09 1.09 0 00-.79.32 1.15 1.15 0 000 1.63 1.11 1.11 0 00.81.35 1.19 1.19 0 00.83-.34 1.16 1.16 0 000-1.62 1.12 1.12 0 00-.83-.34zm1 1.16a1 1 0 01-.29.69 1 1 0 01-.72.3 1 1 0 01-.7-.3 1 1 0 01-.29-.7 1.06 1.06 0 01.3-.72 1 1 0 011.41 0 1 1 0 01.29.72zm-1-.69h-.49V33h.24v-.56h.24l.27.56h.27l-.29-.6a.33.33 0 00.3-.35q0-.36-.54-.36zm0 .16c.23 0 .34.07.34.23s-.11.2-.33.2h-.21v-.43z",
      fill: "#ffde37",
      fillRule: "evenodd"
    }))));
  };

  var _default = SvgWestern;
  _exports["default"] = _default;
});