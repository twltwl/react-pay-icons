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
    global.Boleto = mod.exports;
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

  var SvgBoleto = function SvgBoleto(props) {
    return /*#__PURE__*/_react["default"].createElement("svg", _extends({
      viewBox: "0 0 100 60"
    }, props), /*#__PURE__*/_react["default"].createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      width: 100,
      height: 60,
      fill: "#F5F5F5",
      rx: 4,
      transform: "matrix(1 0 0 -1 0 60)"
    }), /*#__PURE__*/_react["default"].createElement("g", {
      fill: "#242021"
    }, /*#__PURE__*/_react["default"].createElement("text", {
      fontFamily: "Rubik-Regular, Rubik",
      fontSize: 13,
      letterSpacing: 1.25,
      transform: "translate(-1 10)"
    }, /*#__PURE__*/_react["default"].createElement("tspan", {
      x: 22.935,
      y: 35
    }, "BOLET"), /*#__PURE__*/_react["default"].createElement("tspan", {
      x: 69.29,
      y: 35
    }, "O")), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M16 10h3v27h-3zm-2 0h-2v27h2zm73 0h-3v27h3zm-67 0h3v22h-3zm4 0h2v22h-2zm44 0h5v22h-5zm-15 0h-7v22h7zm4 0h-2v22h2zm5 0h-3v22h3zm-32 0h3v22h-3zm5 0h2v22h-2zm29 0h1v22h-1zm-36 0h1v22h-1zm10 0h2v22h-2zm3 0h3v22h-3zm34 0h3v22h-3zm5 0h2v27h-2z",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgBoleto;
  _exports["default"] = _default;
});