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
    global.Eway = mod.exports;
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

  var SvgEway = function SvgEway(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), _react["default"].createElement("defs", null, _react["default"].createElement("style", null, ".eway_svg__cls-2,.eway_svg__cls-3{fill:#231f20}.eway_svg__cls-3{fill-rule:evenodd}")), _react["default"].createElement("g", {
      id: "eway_svg__Layer_2",
      "data-name": "Layer 2"
    }, _react["default"].createElement("g", {
      id: "eway_svg__Layer_1-2",
      "data-name": "Layer 1"
    }, _react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#ffb92c"
    }), _react["default"].createElement("path", {
      className: "eway_svg__cls-2",
      d: "M54.66 33.58h5.44v.59h-1.74L62 44.63h.06l2.12-6.21-1.41-4.25h-1.64v-.59h6.75v.59h-2.56l3.59 10.46 3.7-10.46h-2.17v-.59h3.64v.59h-.6l-4.79 13.34h-1.41l-2.72-8-2.83 8h-1.41L55.7 34.17h-1zm20.01 4.66v-4.4a15.67 15.67 0 012.06-.7 8.06 8.06 0 012.1-.27 6.87 6.87 0 012.2.31 5.12 5.12 0 011.53.8 3.06 3.06 0 01.9 1.12 3 3 0 01.29 1.25v10.18h1.3v.59h-3.68v-2.39h-.07a4.47 4.47 0 01-1.58 2.05 4.29 4.29 0 01-2.56.78 4.41 4.41 0 01-3-1A3.5 3.5 0 0173 43.77a3.79 3.79 0 01.43-1.92 3.17 3.17 0 011.13-1.14 5.33 5.33 0 011.59-.62c.59-.14 1.2-.26 1.82-.37s1.22-.23 1.81-.37a5.65 5.65 0 001.57-.61v-2.86a2.41 2.41 0 00-.62-1.88 2.58 2.58 0 00-1.73-.54 3.07 3.07 0 00-1.2.21 2.36 2.36 0 00-.88.75 6.58 6.58 0 00-.78 1.47c-.25.63-.55 1.41-.87 2.35zm6.7 1.21a8.67 8.67 0 01-2.17.73 9.23 9.23 0 00-1.78.51 2.59 2.59 0 00-1.21 1 3.82 3.82 0 00-.45 2.12 3.31 3.31 0 00.55 2.19 2.11 2.11 0 001.65.63 3 3 0 002.48-1.43 6.4 6.4 0 00.93-3.64z"
    }), _react["default"].createElement("path", {
      className: "eway_svg__cls-2",
      d: "M83.52 33.58h5.81v.59h-2l4 9.49 3.28-9.49h-2.43v-.59h4.35v.59H95.3l-5 14.33a12.09 12.09 0 01-.75 1.85 4.14 4.14 0 01-.77 1.1 2.18 2.18 0 01-.87.53 3.74 3.74 0 01-1 .14 2.74 2.74 0 01-2.07-.65v-4.24h.59l.73 2.64a3.4 3.4 0 00.61 1.36.93.93 0 00.64.3 1.17 1.17 0 00.78-.33 3.79 3.79 0 00.69-.9 8.59 8.59 0 00.58-1.3c.19-.51.37-1.06.53-1.64l-5.45-13.19h-1z"
    }), _react["default"].createElement("path", {
      className: "eway_svg__cls-3",
      d: "M40.45 21.73a15 15 0 1015 15 15 15 0 00-15-15z",
      id: "eway_svg__Shape_2",
      "data-name": "Shape 2"
    }), _react["default"].createElement("path", {
      id: "eway_svg__e_Clipping_Path",
      "data-name": "e Clipping Path",
      d: "M43.23 42.56a4.15 4.15 0 01-2.42.42 4.38 4.38 0 01-3.42-1.37c-.75-.8-1.11-1.31-1.14-3.4h14.57V36.7a11.55 11.55 0 00-2.88-7.93c-1.73-1.76-4.54-2.54-7.27-2.54A10.92 10.92 0 0033.09 29a11.26 11.26 0 00-2.78 7.92 11.34 11.34 0 002.89 7.86c1.74 1.74 4.66 2.51 7.65 2.51a11.43 11.43 0 006.32-1.69 9 9 0 003.42-4.76l-5.9-.08a3.37 3.37 0 01-1.46 1.8zM37.72 31.7a4 4 0 012.81-1 4.46 4.46 0 013.23 1.39 3.47 3.47 0 011 2.64h-8.3a3.68 3.68 0 011.26-3.03z",
      fill: "#fff"
    }), _react["default"].createElement("path", {
      className: "eway_svg__cls-3",
      d: "M61.85 49.77c-15.78.15-29.79 2.47-39 6.89 0 0 9.73-3.3 39-3.3 15.7 0 21.1.21 39 3.18.15.03-14.22-7.01-39-6.77z",
      id: "eway_svg__Shape_1",
      "data-name": "Shape 1"
    }), _react["default"].createElement("path", {
      className: "eway_svg__cls-2",
      d: "M98.24 34.05h-.77v-.47h2.09v.47h-.77v2.07h-.55zm1.61-.47h.79l.59 1.75.56-1.75h.79v2.54h-.52v-1.8l-.62 1.8H101l-.62-1.78v1.78h-.52z"
    }))));
  };

  var _default = SvgEway;
  _exports["default"] = _default;
});