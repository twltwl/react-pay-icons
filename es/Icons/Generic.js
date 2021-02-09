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
    global.Generic = mod.exports;
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

  var SvgGeneric = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
    viewBox: "0 0 126 79"
  }, props), /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: "#F1F2F2",
    fillRule: "nonzero",
    width: 125.43,
    height: 78.39,
    rx: 4.18
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M73.947 31.421v5.036s-3.351.017-3.368 0V31.42h-5.053s.017-3.352 0-3.368h5.053V23h3.368v5.053H79v3.368h-5.053zm-5.052 6.737v-5.053h-5.053v-5.052H50.368A3.378 3.378 0 0047 31.42v20.21A3.378 3.378 0 0050.368 55h20.21a3.378 3.378 0 003.37-3.368V38.158h-5.053zM50.368 51.632l5.053-6.737 3.368 5.052 5.053-6.736 6.737 8.42h-20.21z",
    fill: "#9B9B9B",
    fillRule: "nonzero"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M42 20h40v40H42z"
  })));

  var _default = SvgGeneric;
  _exports.default = _default;
});