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
    global.MobilePay = mod.exports;
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

  var SvgMobilePay = function SvgMobilePay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#5A78FF"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.008 24.355c2.583-.788 4.769-1.183 6.557-1.188 2.956-.007 5.434.58 7.435 1.76V16.34c-2.011-1.04-4.283-1.597-6.816-1.667a15.124 15.124 0 00-7.176 1.548v8.134z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M25.81 15.006l3.19 7.59v-7.274c1.679-.9 3.458-1.476 5.335-1.73 1.877-.253 4.01-.212 6.4.123L39.001 9.57c-2.512-.162-4.906.243-7.18 1.215a17.763 17.763 0 00-6.01 4.22z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.118 9.627l-1.256-3.046a2.783 2.783 0 00-3.628-1.524l-8.67 3.573a2.783 2.783 0 00-1.5 3.638l8.358 20.28a2.783 2.783 0 003.629 1.523l8.669-3.573a2.783 2.783 0 001.5-3.638l-1.035-2.514a34.915 34.915 0 00-1.036-.05c-.23-.006-.56-.007-.986-.002l1.348 3.271a.927.927 0 01-.5 1.213l-8.67 3.573a.928.928 0 01-1.209-.508l-8.359-20.28a.928.928 0 01.5-1.212l8.67-3.574a.927.927 0 011.21.508l1.269 3.08c.391-.191.692-.329.903-.413.21-.085.475-.193.793-.325z",
      fill: "#fff"
    })));
  };

  var _default = SvgMobilePay;
  _exports["default"] = _default;
});