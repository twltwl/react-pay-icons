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
    global.BoletoTransparent = mod.exports;
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

  var SvgBoletoTransparent = function SvgBoletoTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 60"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      width: 100,
      height: 60,
      fill: "#F5F5F5",
      rx: 4,
      transform: "matrix(1 0 0 -1 0 60)"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#242021"
    }, /*#__PURE__*/React.createElement("text", {
      fontFamily: "Rubik-Regular, Rubik",
      fontSize: 13,
      letterSpacing: 1.25,
      transform: "translate(-1 10)"
    }, /*#__PURE__*/React.createElement("tspan", {
      x: 22.935,
      y: 35
    }, "BOLET"), /*#__PURE__*/React.createElement("tspan", {
      x: 69.29,
      y: 35
    }, "O")), /*#__PURE__*/React.createElement("path", {
      d: "M16 10h3v27h-3zm-2 0h-2v27h2zm73 0h-3v27h3zm-67 0h3v22h-3zm4 0h2v22h-2zm44 0h5v22h-5zm-15 0h-7v22h7zm4 0h-2v22h2zm5 0h-3v22h3zm-32 0h3v22h-3zm5 0h2v22h-2zm29 0h1v22h-1zm-36 0h1v22h-1zm10 0h2v22h-2zm3 0h3v22h-3zm34 0h3v22h-3zm5 0h2v27h-2z",
      fillRule: "nonzero"
    })))));
  };

  var _default = SvgBoletoTransparent;
  _exports["default"] = _default;
});