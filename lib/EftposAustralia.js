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
    global.EftposAustralia = mod.exports;
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

  var SvgEftposAustralia = function SvgEftposAustralia(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#7E1336",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.6 14.44H23v2.236h-2.728v-1.202c0-.623.183-.943.716-.943.208.011.414.057.608.136v-2.023a5.687 5.687 0 00-1.08-.136c-1.887 0-2.845.883-2.845 2.632v1.536h-1.125v1.87h1.125v5.627h2.601v-5.626H23v5.626h2.602v-5.626h1.125v-1.871H25.6V14.44zm-13.08 1.992a3.914 3.914 0 00-4.068 4.076 3.99 3.99 0 004.063 3.955 3.927 3.927 0 003.447-1.947l-1.947-.881c-.286.556-.875.89-1.5.85a1.643 1.643 0 01-1.712-1.535h5.631a3.936 3.936 0 00-3.913-4.518zm-1.626 3.027a1.622 1.622 0 013.217 0h-3.217zm38.064.167c-1.05-.319-1.718-.35-1.718-.867 0-.35.303-.548.91-.548a3.797 3.797 0 012.161.73l.549-1.824a7.33 7.33 0 00-2.998-.685c-1.962 0-3.04 1.034-3.04 2.404 0 1.14.714 1.825 2.264 2.234.99.26 1.598.26 1.598.884 0 .394-.35.623-1.02.623a4.14 4.14 0 01-2.676-1.05l-.547 2.023c1.03.623 2.217.94 3.42.913 1.993 0 3.225-1.065 3.225-2.57 0-1.203-.699-1.84-2.128-2.267zm-8.574-3.203a4.015 4.015 0 10.002 8.03 4.015 4.015 0 00-.002-8.03zm0 5.818a1.803 1.803 0 11.001-3.605 1.803 1.803 0 01-.001 3.605zm-8.278-5.807a2.94 2.94 0 00-2.28.913v-.67h-2.434v10.815h2.524v-2.774a9.206 9.206 0 00-.075-1.314 2.668 2.668 0 002.27 1.058 4.022 4.022 0 003.837-4.013 3.978 3.978 0 00-3.842-4.015zm-.43 5.918a1.913 1.913 0 11-.004-3.826 1.913 1.913 0 01.003 3.826z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgEftposAustralia;
  _exports["default"] = _default;
});