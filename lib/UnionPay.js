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
    global.UnionPay = mod.exports;
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

  var SvgUnionPay = function SvgUnionPay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 40 26"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 45.3,
      height: 27,
      x: -3.3,
      y: -0.79,
      fill: "#fff",
      rx: 2.82
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#01798a",
      d: "M27.27-.79a4.06 4.06 0 00-3.6 2.8l-4.96 23.42a2.14 2.14 0 002 2.8h18.35a2.81 2.81 0 002.8-2.82V1.15A2.25 2.25 0 0040-.8"
    }), /*#__PURE__*/React.createElement("rect", {
      width: 20.38,
      height: 29.02,
      x: -4,
      y: -0.79,
      fill: "#dc1f2b",
      rx: 2.82
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#1a4580",
      d: "M24.37 2.02a3.98 3.98 0 013.48-2.8H14.18a3.97 3.97 0 00-3.5 2.8l-4.85 23.4a2.13 2.13 0 001.94 2.81h13.7a2.13 2.13 0 01-1.94-2.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M16.63 15.04h.18a.32.32 0 00.32-.17l.46-.7h1.24l-.26.47h1.49l-.2.7H18.1a.82.82 0 01-.75.44h-.92zm-.2 1h3.25l-.21.77h-1.3l-.2.74h1.27l-.21.77h-1.27l-.3 1.09c-.07.18.02.26.29.24h1.03l-.19.71H16.6q-.57 0-.39-.65l.38-1.4h-.81l.2-.76h.82l.2-.74h-.78l.2-.76zm5.19-1.87l-.06.45a2.37 2.37 0 011.18-.47h2.05l-.78 2.88q-.1.5-.84.5h-2.34l-.54 2.01c-.03.11.01.17.13.17h.46l-.17.62h-1.17q-.67 0-.56-.4l1.54-5.76zm1.74.81h-1.84l-.22.78a1.52 1.52 0 01.82-.23h1.1zm-.67 1.8c.14.02.22-.03.22-.16l.12-.4h-1.84l-.16.57zm-1.24.93h1.06l-.02.47h.29c.14 0 .2-.05.2-.14l.1-.3h.87l-.11.44a.76.76 0 01-.8.57h-.56v.8c-.01.12.1.18.33.18h.53l-.17.63H21.9c-.36.02-.53-.15-.53-.52zM8.6 10.34a2.62 2.62 0 01-1 1.64 3.24 3.24 0 01-1.98.58 2.16 2.16 0 01-1.68-.59 1.54 1.54 0 01-.37-1.06 2.86 2.86 0 01.06-.57l.87-4.2h1.3l-.85 4.15a1.35 1.35 0 00-.04.32.82.82 0 00.16.52.89.89 0 00.75.3 1.56 1.56 0 001-.3 1.37 1.37 0 00.5-.84l.84-4.15h1.3zm5.47-1.65h1.02l-.8 3.74h-1.02zm.32-1.37h1.03l-.2.91H14.2l.19-.9M16 12.15a1.39 1.39 0 01-.41-1.05 2.45 2.45 0 01.01-.25l.04-.27a2.55 2.55 0 01.78-1.45 2.07 2.07 0 011.43-.54 1.5 1.5 0 011.1.39 1.4 1.4 0 01.4 1.06 2.59 2.59 0 01-.02.26l-.05.28a2.48 2.48 0 01-.77 1.42 2.08 2.08 0 01-1.43.53 1.5 1.5 0 01-1.09-.38m1.95-.74a1.84 1.84 0 00.38-.9.58.58 0 00.03-.19 1.74 1.74 0 00.01-.17.76.76 0 00-.17-.54.64.64 0 00-.5-.2.89.89 0 00-.7.3 1.9 1.9 0 00-.38.92l-.03.18a1.36 1.36 0 00-.01.17.75.75 0 00.17.54.64.64 0 00.5.18.9.9 0 00.7-.3m8.02 3.67l.25-.87h1.24l-.05.32a3.1 3.1 0 011.09-.32h1.54l-.25.87h-.24l-1.16 4.12h.24l-.23.82h-.24l-.1.36h-1.2l.1-.36h-2.38l.23-.82h.24l1.16-4.12zm1.34 0L27 16.2a5.13 5.13 0 011-.27c.1-.4.24-.85.24-.85zm-.46 1.64l-.32 1.17a3.44 3.44 0 011.01-.33l.24-.84zm.23 2.48l.24-.84h-.93l-.24.84zm3.01-5.05h1.17l.05.44c0 .11.06.16.2.16h.2l-.2.74h-.87c-.32.02-.5-.1-.5-.38zm-.34 1.59h3.79l-.23.79h-1.2l-.2.74h1.2l-.23.79h-1.34l-.3.46h.65l.16.93c.01.09.1.13.23.13h.2l-.2.77h-.73c-.37.02-.57-.1-.58-.38l-.18-.85-.6.9a.65.65 0 01-.65.36h-1.1l.22-.77h.34a.46.46 0 00.36-.19l.94-1.36h-1.2l.22-.8h1.3l.21-.73h-1.3l.22-.8zM9.8 8.69h.92l-.1.54.12-.16a1.43 1.43 0 011.1-.48 1 1 0 01.83.34 1.15 1.15 0 01.14.95l-.5 2.56h-.95l.46-2.32a.74.74 0 00-.04-.53.44.44 0 00-.4-.17.88.88 0 00-.62.23 1.14 1.14 0 00-.34.63L10 12.44h-.94zm10.55 0h.92l-.1.54.13-.16a1.43 1.43 0 011.08-.48.99.99 0 01.85.34 1.14 1.14 0 01.13.95l-.5 2.56h-.95l.46-2.32a.75.75 0 00-.04-.53.45.45 0 00-.4-.17.89.89 0 00-.62.23 1.12 1.12 0 00-.33.63l-.43 2.16h-.94zm4.55-2.33h2.67a1.8 1.8 0 011.19.35 1.25 1.25 0 01.4 1v.02a3.77 3.77 0 01-.06.59 2.38 2.38 0 01-.81 1.4 2.29 2.29 0 01-1.5.52h-1.44l-.44 2.2h-1.24zm.67 2.82h1.19a1.14 1.14 0 00.73-.21 1.14 1.14 0 00.36-.67l.03-.15v-.13a.52.52 0 00-.22-.47 1.35 1.35 0 00-.72-.15h-1zm9.15 3.98a5.91 5.91 0 01-.98 1.56 1.99 1.99 0 01-1.7.71l.08-.64c.89-.27 1.36-1.51 1.64-2.06l-.33-4.03.68-.01h.58l.06 2.53 1.07-2.53h1.09zM31.68 9l-.43.3a1.35 1.35 0 00-1.66-.21c-1.08.5-1.98 4.4 1 3.11l.17.2 1.17.04.77-3.54zm-.66 1.92c-.2.56-.61.94-.94.83-.33-.1-.45-.64-.26-1.2.19-.57.61-.94.94-.83.33.1.45.64.26 1.2"
    })));
  };

  var _default = SvgUnionPay;
  _exports["default"] = _default;
});