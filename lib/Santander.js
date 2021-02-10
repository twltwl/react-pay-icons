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
    global.Santander = mod.exports;
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

  var SvgSantander = function SvgSantander(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#EA1D25",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.679 38.745c-.047-.687-.233-1.374-.606-1.97l-3.169-5.447A4.624 4.624 0 0117.392 30l-.14.229a4.277 4.277 0 000 4.35l2.563 4.349a4.277 4.277 0 010 4.35l-.14.228a4.624 4.624 0 00-.513-1.328l-2.33-3.983-1.49-2.564a4.624 4.624 0 01-.513-1.327l-.14.229c-.792 1.327-.792 2.975 0 4.349l2.563 4.35a4.277 4.277 0 010 4.349l-.14.229a4.624 4.624 0 00-.513-1.328l-3.215-5.448c-.42-.733-.606-1.557-.606-2.381C9.377 39.523 7 41.4 7 43.552 7 46.573 11.567 49 17.205 49c5.639 0 10.206-2.427 10.206-5.448.046-2.06-2.284-3.938-5.732-4.807zm9.646 9.294c.047-.779.14-1.282.373-1.923 1.072.503 2.47.732 3.495.732 1.77 0 2.796-.55 2.796-1.694 0-1.099-.746-1.602-2.517-2.38l-.978-.367c-1.818-.778-3.03-1.785-3.03-3.754 0-2.152 1.539-3.525 4.614-3.525 1.258 0 2.423.183 3.495.55a7.073 7.073 0 01-.373 1.876 10.272 10.272 0 00-3.169-.55c-1.677 0-2.423.642-2.423 1.649 0 .961.746 1.557 2.097 2.106l1.025.412c2.424 1.007 3.449 2.106 3.449 3.937 0 2.152-1.678 3.663-4.94 3.663-1.537 0-2.842-.229-3.914-.732zm19.152-9.02v9.432H48.52l-.093-1.145c-.56.824-1.351 1.374-2.703 1.374-2.516 0-4.24-1.832-4.24-4.99 0-3.297 1.817-5.22 5.359-5.22 1.398.046 2.563.183 3.634.55zM48.38 46.3v-5.906c-.419-.092-.932-.092-1.537-.092-2.19 0-3.216 1.328-3.216 3.434 0 1.923.792 3.296 2.656 3.296.886-.045 1.538-.32 2.097-.732zm12.908-4.166v6.318h-2.097V42.5c0-1.511-.512-2.198-2.61-2.198-.512 0-1.07.046-1.677.138v8.012h-2.097V39.02c1.352-.32 2.843-.55 3.821-.55 3.542.047 4.66 1.374 4.66 3.664zm5.872 4.807c.606 0 1.212-.092 1.63-.275-.046.55-.139 1.19-.232 1.74-.56.229-1.212.32-1.77.32-2.051 0-3.356-.915-3.356-3.205v-9.934c.652-.23 1.445-.32 2.097-.32v3.57h3.355c-.046.641-.093 1.236-.186 1.786h-3.169v4.624c0 1.19.606 1.694 1.63 1.694zm11.324-7.92v9.43h-1.958l-.093-1.144c-.559.824-1.351 1.374-2.703 1.374-2.516 0-4.24-1.832-4.24-4.99 0-3.297 1.817-5.22 5.359-5.22 1.398.046 2.516.183 3.635.55zM76.34 46.3v-5.906c-.42-.092-.932-.092-1.538-.092-2.19 0-3.215 1.328-3.215 3.434 0 1.923.792 3.296 2.656 3.296.885-.045 1.584-.32 2.097-.732zm12.955-4.166v6.318H87.15V42.5c0-1.511-.512-2.198-2.61-2.198-.512 0-1.071.046-1.677.138v8.012h-2.097V39.02c1.351-.32 2.843-.55 3.821-.55 3.542.047 4.707 1.374 4.707 3.664zm10.671-6.868v13.186h-1.957l-.093-1.19c-.56.87-1.352 1.419-2.75 1.419-2.516 0-4.24-1.832-4.24-4.99 0-3.297 1.817-5.22 5.359-5.22a8.92 8.92 0 011.584.137v-3.113c.652-.183 1.398-.229 2.097-.229zM97.869 46.3v-5.815c-.56-.091-1.118-.183-1.678-.183-2.097 0-3.075 1.282-3.075 3.434 0 1.923.792 3.296 2.656 3.296a3.829 3.829 0 002.097-.732zm12.722-1.877h-6.757c.28 1.694 1.258 2.472 3.169 2.472 1.165 0 2.33-.229 3.355-.733-.094.55-.187 1.282-.327 1.878-.978.412-1.957.595-3.122.595-3.541 0-5.219-1.923-5.219-5.128 0-2.793 1.305-5.036 4.66-5.036 3.03 0 4.334 1.923 4.334 4.303 0 .641 0 1.1-.093 1.649zm-6.757-1.74h4.753c0-1.557-.839-2.472-2.283-2.472-1.538.045-2.33.87-2.47 2.472zM118 38.607a9.17 9.17 0 01-.186 1.786c-.513-.046-.979-.092-1.585-.092-.512 0-1.025.046-1.538.092v8.058h-2.097v-9.432c.886-.32 2.424-.55 3.589-.55.605.047 1.351.047 1.817.138z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgSantander;
  _exports["default"] = _default;
});