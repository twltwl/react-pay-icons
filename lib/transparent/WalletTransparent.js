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
    global.WalletTransparent = mod.exports;
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

  var SvgWalletTransparent = function SvgWalletTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "21.4 22.1 236.6 254.9"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "#1476C6"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M156.1 261.2c-.5.3-1 .6-1.6.9-1.6.7-3.2.9-4.6.9-1.5 0-3.9-.1-6.3-1.9-3.4-2.4-4.9-6.5-4.9-10.1 0-7.4 6-11 10.9-11 1.7 0 3.5.4 4.9 1.3 2.4 1.6 3 3.6 3.3 4.7l-11.2 4.5-3.7.3c1.2 6.1 5.3 9.6 9.8 9.6 2.4 0 4.2-.9 5.8-1.7l-2.4 2.5zm-4.5-14.2c.9-.3 1.4-.6 1.4-1.3 0-1.9-2.1-4.1-4.7-4.1-1.9 0-5.5 1.5-5.5 6.6 0 .8.1 1.7.1 2.5l8.7-3.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M137.6 262.2h-8.4c1.1-1.4 1.3-1.6 1.3-2.5v-7.8c0-3.7.1-9 .2-14 0-2.4.2-5.5.3-7.7h-3.7l3.6-1.7h6.8c-1.5.9-2 1.1-2.1 2.8-.4 3.7-.4 9.5-.4 16.3v11c0 1.9.3 2.2 1.9 2.3.8.1 1.6.2 2.4.2l-1.9 1.1m-15.7-19.9c1.1.9 3.4 2.8 3.4 6.5 0 3.5-2 5.2-4 6.8-.6.6-1.3 1.3-1.3 2.3 0 1 .7 1.6 1.2 2l1.7 1.3c2.1 1.8 4 3.4 4 6.7 0 4.5-4.3 9-12.6 9-6.9 0-10.3-3.3-10.3-6.8 0-1.7.9-4.2 3.7-5.8 3-1.8 7-2.1 9.1-2.2-.7-.9-1.4-1.8-1.4-3.2 0-.8.2-1.3.5-1.9-.5 0-1.1.1-1.5.1-5.1 0-7.9-3.8-7.9-7.5 0-2.2 1-4.6 3.1-6.4 2.7-2.2 6-2.6 8.5-2.6h9.8l-3.1 1.7h-2.9zm-3.4 21.2h-1.1c-.4 0-3 .1-5 .8-1.1.4-4.1 1.5-4.1 4.9 0 3.4 3.3 5.8 8.4 5.8 4.6 0 7-2.2 7-5.2 0-2.4-1.6-3.7-5.2-6.3m1.4-9c1.1-1.1 1.2-2.6 1.2-3.5 0-3.4-2.1-8.8-6-8.8-1.2 0-2.6.6-3.3 1.6-.8 1-1.1 2.3-1.1 3.5 0 3.2 1.9 8.5 6 8.5 1.1 0 2.4-.6 3.2-1.3m-27.5 8.4c-7.6 0-11.6-5.9-11.6-11.3 0-6.3 5.1-11.6 12.4-11.6 7 0 11.4 5.5 11.4 11.3-.1 5.6-4.5 11.6-12.2 11.6m5.9-3.9c1.1-1.5 1.4-3.4 1.4-5.3 0-4.2-2-12.2-7.9-12.2-1.6 0-3.1.6-4.3 1.6-1.9 1.7-2.2 3.8-2.2 5.8 0 4.7 2.3 12.5 8.1 12.5 1.9 0 3.8-.9 4.9-2.4M67 262.9c-7.6 0-11.6-5.9-11.6-11.3 0-6.3 5.1-11.6 12.4-11.6 7 0 11.4 5.5 11.4 11.3-.1 5.6-4.5 11.6-12.2 11.6m5.9-3.9c1.1-1.5 1.4-3.4 1.4-5.3 0-4.2-2-12.2-7.9-12.2-1.6 0-3.2.6-4.3 1.6-1.9 1.7-2.2 3.8-2.2 5.8 0 4.7 2.3 12.5 8.1 12.5 1.9 0 3.8-.9 4.9-2.4m-20.7 2.2l-6.4 1.5c-2.6.4-4.9.8-7.4.8-12.4 0-17.1-9.1-17.1-16.2 0-8.7 6.7-16.7 18.1-16.7 2.4 0 4.7.4 6.8.9 3.4.9 4.9 2.1 5.9 2.8l-3.7 3.5-1.6.4 1.1-1.8c-1.5-1.5-4.3-4.2-9.6-4.2-7.1 0-12.4 5.4-12.4 13.2 0 8.4 6.1 16.3 15.8 16.3 2.9 0 4.3-.6 5.7-1.1v-7.2l-6.8.4 3.6-1.9h9.5l-1.2 1.1c-.3.3-.4.4-.4.7 0 .4-.1 1.7-.1 2.1v5.4m124.6 1h-3.4l-5-21.6h2.7L175 260l4.2-19.4h3.4L187 260l4-19.4h2.6l-4.9 21.6h-3.4L181 243l-4.4 19.2m32.8-15c0-3.5-1.6-4.9-5.1-4.9-2.8 0-4.4 1.5-4.8 4l-2.5-.3c.5-3.5 3.3-5.9 7.3-5.9 4.8 0 7.5 2.1 7.5 6.8v11c0 1.9.1 3.2.4 4.2h-2.5c-.2-.6-.3-1.7-.3-2.3-1 1.5-3.4 2.8-5.7 2.8-4 0-7.1-2.4-7.1-7.2 0-4.4 3.2-6.9 7.7-6.9 2.2 0 4 .4 5.1.9v-2.2zm0 4.7c-1.2-.6-2.9-1.1-5.2-1.1-3 0-5.2 1.5-5.2 4.7 0 3.3 2 5 4.8 5 2.5 0 4.7-1.8 5.6-3.7v-4.9m7.3 10.3h2.5v-30.8h-2.5v30.8zm7.7 0h2.5v-30.8h-2.5v30.8zm14.6-1.8c2.6 0 4.6-1.6 5-5.6l2.5.4c-.6 5.2-3.6 7.6-7.5 7.6-5.1 0-8.2-3.8-8.2-11.5 0-6.9 2.6-11.1 7.9-11.1 5.6 0 7.8 4.6 7.8 10.9v.8h-13.2c.1 5.9 2.3 8.5 5.7 8.5m4.9-10.7c-.1-4.1-1.7-7.2-5.2-7.2-3.4 0-5.2 2.8-5.4 7.2h10.6m14.1 12.4c-.5.2-1.5.4-2.6.4-3.2 0-4.2-1.6-4.2-4.7v-15h-2.8v-2.2h2.8v-7l2.5-1v8h4.3v2.2h-4.3v14.6c0 2.1.4 2.6 2.1 2.6.9 0 1.6-.2 2.2-.5v2.6"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#1476C6",
      d: "M111.1 105.6c-10.6-14.6-25.3-27.4-42-36.3-2.5-1.4-5.4-2.1-8.3-2.1-6.5 0-12.4 3.5-15.5 9.3-4.6 8.5-1.3 19.2 7.2 23.7 25.7 13.8 42.3 40 44.3 70.4v-.1c-.3-3.4.3-6.7 1.8-9.8.2-.4.5-.9.8-1.4 8-13.2 12.3-28.4 12.3-44 0-3.3-.3-6.5-.6-9.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#47AE33",
      d: "M212.9 72.6c-3.1-13.6-7.7-26.8-13.7-39.4-3.2-6.7-10.1-11.1-17.5-11.1-2.9 0-5.7.6-8.3 1.9-9.7 4.6-13.8 16.2-9.2 25.8 9.8 20.8 14.7 42.7 14.7 65.5 0 22.8-4.9 44.7-14.5 65.1-.1.3-1.8 3.9-1.8 8.1 0 1.2.1 2.9.5 4.5 1.3 5.5 4.8 10.5 10.6 13.2 2.6 1.2 5.4 1.9 8.3 1.9 7.1 0 13.6-3.9 17-10.1 3.9-7.3 7.8-16.8 11.2-29.1 1.1-3.7 2-7.2 2.8-10.9 3.1-13.9 4.8-28.1 4.8-42.7-.1-14.4-1.8-28.9-4.9-42.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ED114C",
      d: "M131 52.3c-.3-.6-.7-1.1-1.1-1.6-1.3-1.7-2.8-3.1-4.6-4.2-2.9-1.9-6.4-3-10-3-3 0-4.5.4-6.6 1.2-2.2.9-4.5 2.1-6.6 4.3-2.1 2.2-3.3 4.4-4.2 6.8-1.8 4.7-1.5 10.8 1.5 15.8 6.4 10.3 10.2 22.1 11.6 34.2.4 3.2.6 6.5.6 9.7 0 15.6-4.2 30.8-12.3 44-.3.5-.5.9-.8 1.4-1.6 3.1-2.1 6.6-1.8 9.9.5 5.6 3.6 10.9 8.8 14.1 1.3.8 2.8 1.4 4.2 1.9 1.7.5 3.5.8 5.3.8 6.5 0 12.4-3.3 15.8-8.9 10.2-16.7 16.1-35.7 17.4-55.2.2-2.6.3-5.3.3-7.9.1-22.6-6-44.4-17.5-63.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBF16",
      d: "M164.3 180.4c9.7-20.4 14.6-42.3 14.6-65.1 0-7.8-.5-13.5-.9-17.2-12.7-20.3-31.1-38.5-52.7-51.7 0 0 .5.3.5.4 1.5 1.1 2.7 2.2 4.1 3.9.3.4.8 1 1.1 1.6 11.5 19 17.5 40.7 17.5 63 0 2.7-.1 5.3-.3 7.9 9.2 17.5 14.2 37.4 14.2 58.3v6.3c.1-2.2.6-4.5 1.4-6.5.3-.3.4-.6.5-.9"
    })));
  };

  var _default = SvgWalletTransparent;
  _exports["default"] = _default;
});