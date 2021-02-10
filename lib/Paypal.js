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
    global.Paypal = mod.exports;
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

  var SvgPaypal = function SvgPaypal(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 125.43 78.39"
    }, props), /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 1"
    }, /*#__PURE__*/React.createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#1c3663"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60.63 34.44a1.79 1.79 0 00-1.31.8s-3 5.13-3.28 5.64c-.16.28-.32.1-.35 0l-.93-5.61a1.13 1.13 0 00-1.14-.81h-1.86a.62.62 0 00-.63.79s1.42 8.09 1.7 10c.14 1 0 1.24 0 1.24L51 49.7c-.27.44-.12.8.32.8h2.17a1.73 1.73 0 001.3-.79l8.32-14.07s.79-1.2.06-1.19h-2.51M34.38 37.3a4.39 4.39 0 01-2.64.69h-.51a.62.62 0 01-.63-.8l.62-2.7a1.08 1.08 0 011-.8h.68a3.25 3.25 0 011.82.41 1.36 1.36 0 01.6 1.24 2.26 2.26 0 01-.94 2m4.51-4.17a3.09 3.09 0 00-1.15-1.23 5.12 5.12 0 00-1.81-.67 14.59 14.59 0 00-2.47-.2h-4.35a1.07 1.07 0 00-1 .79l-2.94 12.75a.62.62 0 00.63.8h2.09a1.07 1.07 0 001-.8l.72-3.1a1 1 0 011-.79h.6a10 10 0 006-1.57A4.91 4.91 0 0039.29 35a3.93 3.93 0 00-.4-1.88M49 35a8 8 0 00-3.73-.66 16.67 16.67 0 00-2.53.19c-.62.1-.68.11-1.07.2a1.21 1.21 0 00-.91 1l-.26 1c-.14.68.24.65.41.6a9.72 9.72 0 011.24-.37 9.1 9.1 0 012-.27 5.08 5.08 0 011.89.27 1 1 0 01.63.95.54.54 0 010 .29c0 .09-.1.17-.3.19-1.19.07-2 .18-3.08.33a9.79 9.79 0 00-2.65.73 4.07 4.07 0 00-1.8 1.42 3.85 3.85 0 00-.6 2.18A2.54 2.54 0 0039 45a3.19 3.19 0 002.2.75 5.6 5.6 0 001.31-.12 7 7 0 001-.34 5.52 5.52 0 00.87-.48l.78-.52-.08.34a.62.62 0 00.56.78h2a1.07 1.07 0 00.89-.78L50 38.05a3.6 3.6 0 00.07-.53v-.51A2.2 2.2 0 0049 35zm-3.69 7.84a5.34 5.34 0 01-.82.43 3 3 0 01-1.09.23 2.39 2.39 0 01-1.19-.23.82.82 0 01-.41-.78 1.59 1.59 0 01.31-1 2.12 2.12 0 01.89-.6 7.79 7.79 0 011.37-.31l1.54-.17c.12 0 .2-.06.15.26 0 .14-.3 1.25-.42 1.76a1.05 1.05 0 01-.38.36zM86.87 35a8 8 0 00-3.73-.66 16.67 16.67 0 00-2.53.19c-.62.1-.69.11-1.07.2a1.22 1.22 0 00-.92 1l-.25 1.05c-.15.67.24.64.41.59a9.21 9.21 0 011.22-.44 9 9 0 012-.27 5.08 5.08 0 011.89.27 1 1 0 01.63 1 .68.68 0 010 .29.31.31 0 01-.3.19c-1.2.07-2 .18-3.08.33a9.79 9.79 0 00-2.65.73 4.07 4.07 0 00-1.8 1.42A3.85 3.85 0 0076 43a2.56 2.56 0 00.85 2 3.23 3.23 0 002.21.75 5.66 5.66 0 001.31-.12 7.9 7.9 0 001-.34 5.05 5.05 0 00.86-.48l.79-.52-.08.34a.63.63 0 00.56.79h2a1.1 1.1 0 00.9-.78l1.52-6.58a2.8 2.8 0 00.08-.54v-.51A2.2 2.2 0 0086.87 35zm-3.7 7.84a4.83 4.83 0 01-.81.43 3.09 3.09 0 01-1.09.23 2.39 2.39 0 01-1.19-.23.82.82 0 01-.41-.78 1.63 1.63 0 01.3-1 2.22 2.22 0 01.9-.6 7.79 7.79 0 011.37-.31c.48-.06 1.42-.17 1.54-.17s.2-.06.15.26c0 .14-.3 1.25-.42 1.76a1 1 0 01-.34.37zm-10.88-5.49a4.37 4.37 0 01-2.63.69h-.52a.63.63 0 01-.64-.8l.63-2.71a1.06 1.06 0 011-.79h.69a3.39 3.39 0 011.81.41 1.39 1.39 0 01.61 1.24 2.29 2.29 0 01-.94 2m4.51-4.18a3.3 3.3 0 00-1.15-1.23 5.18 5.18 0 00-1.82-.67 14.56 14.56 0 00-2.46-.19H67a1.1 1.1 0 00-1 .8l-2.92 12.74a.61.61 0 00.62.79h2.1a1.1 1.1 0 001-.79l.71-3.1a1.06 1.06 0 011-.79h.6a9.81 9.81 0 006-1.58 4.9 4.9 0 002.13-4.14 4.06 4.06 0 00-.39-1.88m17.22-1.98H92.2a1.06 1.06 0 00-1 .72v.07l-.11.47-2.58 11.69-.11.51a.61.61 0 00.55.77h1.95a1.05 1.05 0 001-.73v-.06L94.7 32a.63.63 0 00-.63-.81zm2.83 2.57l-.21.05h-.2a.61.61 0 01-.47-.16.76.76 0 01-.16-.54V32h-.24v-.29h.24v-.58h.34v.58h.7V32h-.7v1a1.7 1.7 0 000 .25.31.31 0 00.05.17.2.2 0 00.11.11.51.51 0 00.21 0h.3zm3.38.02h-.34v-1.15a2.26 2.26 0 000-.26.74.74 0 00-.05-.19.34.34 0 00-.12-.12.47.47 0 00-.23 0 .65.65 0 00-.29.07 2.2 2.2 0 00-.28.18.34.34 0 000 .1v1.41h-.34v-1.45a.74.74 0 00-.05-.19.28.28 0 00-.12-.12.5.5 0 00-.23 0 .61.61 0 00-.28.07 1.47 1.47 0 00-.28.18v1.51h-.34v-2h.34V32a1.46 1.46 0 01.32-.21.77.77 0 01.34-.08.65.65 0 01.35.09.49.49 0 01.21.24 2 2 0 01.38-.25 1 1 0 01.37-.08.57.57 0 01.49.21.85.85 0 01.16.56z",
      fill: "#fff"
    })))));
  };

  var _default = SvgPaypal;
  _exports["default"] = _default;
});