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
    global.Payco = mod.exports;
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

  var SvgPayco = function SvgPayco(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F61A23",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M48.142 16.5a3.104 3.104 0 00-1.817.46 3.347 3.347 0 00-1.39 3.52 3.091 3.091 0 003.164 2.6 2.897 2.897 0 002.216-1.05 3.43 3.43 0 00.719-2.923 3.053 3.053 0 00-2.892-2.607zm.001-2.088c.209.027.417.058.626.081a5.214 5.214 0 014.57 4.434 5.3 5.3 0 01-4.404 6.127 5.423 5.423 0 01-4.45-1.12 5.041 5.041 0 01-1.882-3.522 5.276 5.276 0 011.096-3.938 5.182 5.182 0 013.287-1.943c.218-.04.442-.047.663-.073.065-.012.13-.027.193-.046h.301zM8.82 18.157c0 .469.007.938-.002 1.407-.004.166.06.22.213.217.612-.011 1.225-.002 1.837-.029a1.534 1.534 0 001.572-1.5 1.389 1.389 0 00-.854-1.517 2.726 2.726 0 00-.89-.191c-.555-.03-1.113-.004-1.67-.012-.165-.003-.21.06-.208.218.008.469.003.938.003 1.407M6.595 15.6c.02-.052.036-.106.049-.16.086-.52.532-.902 1.059-.908 1.114-.004 2.23-.029 3.343.007a3.786 3.786 0 012.697 1.088c.482.498.792 1.138.884 1.825.12.7.05 1.418-.204 2.081a3.308 3.308 0 01-2.047 1.916c-.557.2-1.144.303-1.736.307-.54.011-1.081.007-1.622 0-.155-.003-.201.05-.2.203.007.644.003 1.289.003 1.933a1.113 1.113 0 01-1.002 1.155 1.098 1.098 0 01-1.179-.941.887.887 0 00-.045-.126V15.6M38.14 14.412l.745.082a4.99 4.99 0 012.551 1.012c.432.355.535.975.241 1.451-.301.475-.919.638-1.415.372-.172-.093-.325-.219-.494-.318a3.032 3.032 0 00-3.297-.08 2.968 2.968 0 00-1.4 2.117 3.522 3.522 0 00.717 3.007 2.77 2.77 0 002.12 1.027 3.374 3.374 0 002.33-.815.97.97 0 011.157-.11 1.013 1.013 0 01.215 1.615 4.575 4.575 0 01-2.294 1.222 5.532 5.532 0 01-3.868-.461 5.028 5.028 0 01-2.675-3.82 5.375 5.375 0 01.987-4.2 5.025 5.025 0 013.472-2.018c.202-.029.405-.055.608-.083h.3zM19.287 17.215l-.057-.002-1.421 3.438c.11.009.174.018.238.018.807.001 1.615.002 2.423 0 .245 0 .253-.013.156-.247l-1.253-3.03c-.025-.06-.057-.118-.086-.177m-.03 5.425c-.697 0-1.393.004-2.09-.003a.23.23 0 00-.251.165c-.211.517-.428 1.031-.649 1.544a1.06 1.06 0 01-.946.7 1.018 1.018 0 01-.991-1.419c.305-.678.595-1.364.893-2.046l2.663-6.11c.144-.472.52-.837.997-.966.733-.241 1.523.15 1.776.877l2.017 4.62c.51 1.168 1.016 2.338 1.532 3.503a1.06 1.06 0 01-.926 1.546 1.042 1.042 0 01-.869-.46 2.22 2.22 0 01-.215-.4c-.199-.46-.394-.923-.583-1.388a.23.23 0 00-.25-.166c-.703.007-1.405.003-2.108.003M27.886 18.862c.055-.07.098-.12.136-.173l2.42-3.498a2.13 2.13 0 01.366-.415c.334-.295.816-.35 1.208-.14a.99.99 0 01.552 1.004 1.47 1.47 0 01-.346.83l-3.136 4.292a.62.62 0 00-.125.39c.003.928.003 1.855 0 2.783a1.09 1.09 0 01-1.957.684 1.025 1.025 0 01-.223-.643c0-.922-.004-1.844 0-2.765a.67.67 0 00-.137-.422c-1.056-1.45-2.11-2.902-3.162-4.356a1.359 1.359 0 01-.286-.746c-.045-.417.17-.818.542-1.01a1.04 1.04 0 011.197.07c.171.135.32.297.44.48.792 1.142 1.573 2.292 2.358 3.439.043.063.094.12.153.196"
    }))))));
  };

  var _default = SvgPayco;
  _exports["default"] = _default;
});