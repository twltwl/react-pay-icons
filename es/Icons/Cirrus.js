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
    global.Cirrus = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgCirrus = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
    viewBox: "0 0 125.43 78.39"
  }, props), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, ".cirrus_svg__cls-3{fill:#009ddd}")), /*#__PURE__*/_react.default.createElement("g", {
    id: "cirrus_svg__Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "cirrus_svg__Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: 125.43,
    height: 78.39,
    rx: 4.18,
    ry: 4.18,
    fill: "#13457c"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: 47.63,
    cy: 39.2,
    r: 22.47,
    transform: "rotate(-76.72 47.63 39.197)",
    fill: "#007cc3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "cirrus_svg__cls-3",
    d: "M77.8 16.73a22.41 22.41 0 00-15.09 5.81 23.06 23.06 0 00-2.26 2.38H65a22.11 22.11 0 011.7 2.38h-8a21.88 21.88 0 00-1.29 2.38H68a22.26 22.26 0 011 2.38H56.49a21.48 21.48 0 00-.66 2.38h13.76a22.48 22.48 0 01-.65 11.89H56.49a21.45 21.45 0 00.95 2.38H68a22.7 22.7 0 01-1.29 2.38h-8a21.16 21.16 0 001.72 2.38H65a20.42 20.42 0 01-2.27 2.38A22.47 22.47 0 1077.8 16.73z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "cirrus_svg__cls-3",
    d: "M97.27 51.72A.73.73 0 0198 51a.72.72 0 01.72.72.73.73 0 01-.72.73.73.73 0 01-.73-.73zm.73.55a.55.55 0 00.55-.55.55.55 0 00-.55-.55.55.55 0 00-.55.55.54.54 0 00.55.55zm-.1-.27h-.15v-.6H98a.3.3 0 01.16 0 .21.21 0 01.08.16.18.18 0 01-.11.17l.12.28h-.15l-.1-.22h-.1zm0-.36h.17a.09.09 0 000-.08.08.08 0 000-.06h-.17z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M89.73 44.21a.73.73 0 01.73-.72.72.72 0 01.72.72.73.73 0 01-.72.73.73.73 0 01-.73-.73zm.73.56a.56.56 0 000-1.11.56.56 0 000 1.11zm-.1-.24h-.15v-.64h.27a.29.29 0 01.16 0 .18.18 0 01.08.16.16.16 0 01-.11.16l.12.28h-.17l-.09-.25h-.11zm0-.36h.17a.09.09 0 000-.07.08.08 0 000-.07h-.17zM47 33.35c-.2.88-.31 1.38-.58 2.45-1.69-.71-4-1.09-5.69 0a4.59 4.59 0 00-2.08 4.48 2.75 2.75 0 001.69 2.08 5.68 5.68 0 004.8-.49c-.24 1.09-.42 1.94-.63 2.72a9.85 9.85 0 01-6 .07 5 5 0 01-3.4-4 6.69 6.69 0 013.69-7 12.39 12.39 0 018.2-.31zm28.67 10.04a4.73 4.73 0 01-3.91 1.7c-2.25 0-3.67-1.65-2.88-5.37l.93-4.38h3.43l-.93 4.38c-.31 1.49-.24 2.62 1.27 2.62 1.79 0 2.32-1.08 2.66-2.62l.93-4.38h3.43l-1.54 7c-.18.82-.34 1.7-.44 2.56H75.4s.2-1.13.27-1.51zm6.06-5.01c0 1.21.8 2 2.62 2.67 1.4.49 1.62.63 1.62 1.06 0 .61-.62.86-2 .86a12.6 12.6 0 01-3.1-.37s-.43 2-.47 2.22a25.41 25.41 0 003.59.27c3.63 0 5.31-1 5.31-3.2 0-1.31-.7-2.08-2.43-2.67-1.45-.48-1.61-.59-1.61-1s.58-.78 1.69-.78c.67 0 1.61.05 2.49.14l.56-2.26a30 30 0 00-3-.2c-3.94 0-5.28 1.49-5.27 3.26zM48.5 35.34h3.43l-2.04 9.6h-3.44l2.05-9.6zm20.34-.04a3.91 3.91 0 00-3.93 1.52 6.84 6.84 0 00.2-1.48H62c-.45 3-1.26 6-1.89 8.95l-.16.65h3.58c.43-1.95.92-4.89 1.49-5.78A2.31 2.31 0 0167.74 38zm-7.84 0a3.93 3.93 0 00-3.94 1.52 6.86 6.86 0 00.21-1.48h-3.13c-.45 3-1.26 6-1.89 8.95l-.16.65h3.58c.42-1.95.92-4.89 1.49-5.78A2.31 2.31 0 0159.92 38z",
    fill: "#fff"
  }))));

  var _default = SvgCirrus;
  _exports.default = _default;
});