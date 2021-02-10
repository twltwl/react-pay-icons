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
    global.SkrillMoneybookers = mod.exports;
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

  var SvgSkrillMoneybookers = function SvgSkrillMoneybookers(props) {
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
      fill: "#862165"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M84.59 22.12L90.8 21v23.86h-6.21zm9.07 0v22.74h6.22V21zM75.74 44.86H82V27.42h-6.26zm-41.08-15c-.78-.05-2.6-.17-2.6-1.8 0-2 2.62-2 3.6-2a21.55 21.55 0 015.56 1s.89.31 1.65.64h.07v-5.37h-.1A22.16 22.16 0 0034.7 21c-7 0-9.49 4.08-9.49 7.58 0 2 .87 6.76 8.89 7.31.68 0 2.49.14 2.49 1.83 0 1.4-1.48 2.23-4 2.23a19.5 19.5 0 01-7-1.36v5.57a32.48 32.48 0 008.29.95c6.85 0 9.92-3.86 9.92-7.69.06-4.33-3.38-7.15-9.14-7.54zm37.58-2.72c-5.75.19-8.66 2.76-8.66 7.89v9.81h6.26v-8c0-3.07.41-4.39 4-4.51v-5.1a8.73 8.73 0 00-1.6-.07zm-16.86.24a22 22 0 01-3.55 6.07V21l-6.41 1.27v22.59h6.41v-7a24.31 24.31 0 012.78 7h7.68c-.76-3.16-4.08-9-4.08-9a28.42 28.42 0 004.5-8.48zm23.47-1.66a3.06 3.06 0 10-3.06-3.06 3.06 3.06 0 003.06 3.08zM32.33 56.6v-3.69c0-.42-.16-.71-.58-.71a1.52 1.52 0 00-1 .52v3.88H29v-3.69c0-.42-.16-.71-.58-.71a1.49 1.49 0 00-1 .52v3.88h-1.79v-5.88h1.6l.13.8a2.49 2.49 0 011.82-.92 1.45 1.45 0 011.47.92 2.57 2.57 0 011.83-.92c1.09 0 1.67.68 1.67 1.82v4.18zm5.55.11a3.07 3.07 0 010-6.11 3.06 3.06 0 010 6.11zm0-4.63c-.69 0-1.07.62-1.07 1.58s.39 1.59 1.07 1.59S39 54.62 39 53.67s-.41-1.59-1.11-1.59zm7.21 4.52v-3.69c0-.42-.17-.71-.6-.71a1.51 1.51 0 00-1 .53v3.87h-1.81v-5.88h1.6l.13.8a2.61 2.61 0 011.83-.92c1.1 0 1.67.68 1.67 1.82v4.18zm8.08-2.49h-3.52a1.28 1.28 0 001.44 1.28 4 4 0 001.91-.61l.18 1.27a4.27 4.27 0 01-2.34.66 2.75 2.75 0 01-3-3 2.78 2.78 0 012.78-3.08c1.8 0 2.6 1.34 2.6 3a2 2 0 01-.05.48zm-2.61-2.34c-.51 0-.87.45-.93 1.35h1.85c-.06-.89-.37-1.35-.92-1.35zm6.78 4.94c-.52 1.54-1.24 2.07-2.53 2.07a3 3 0 01-.68-.07l-.23-1.46a2.13 2.13 0 00.72.1 1 1 0 001-.56l.07-.18-2.13-5.75 1.94-.23 1.14 3.71 1.08-3.62h1.75zm5.33-.04a7.26 7.26 0 01-2.52-.42v-8l1.85-.32v3.43a2.19 2.19 0 011.57-.76c1.2 0 2.12.91 2.12 2.9-.04 2.18-1.21 3.17-3.02 3.17zm.33-4.45a1.36 1.36 0 00-1 .56v2.33a2 2 0 00.66.1c.71 0 1.21-.43 1.21-1.59-.04-.99-.4-1.4-.87-1.4zm6.16 4.49a3.07 3.07 0 010-6.11 3.06 3.06 0 010 6.11zm0-4.63c-.69 0-1.07.62-1.07 1.58s.39 1.59 1.07 1.59 1.08-.63 1.08-1.58-.37-1.59-1.07-1.59zm6.32 4.63a3.07 3.07 0 010-6.11 3.06 3.06 0 010 6.11zm0-4.63c-.69 0-1.06.62-1.06 1.58s.38 1.59 1.06 1.59 1.08-.63 1.08-1.58-.37-1.59-1.07-1.59zm7.32 4.6l-1.71-2.82v2.74h-1.81v-8.38l1.81-.29v5.2l1.58-2.41h1.94l-1.85 2.67 1.92 3zm7.35-2.57h-3.53a1.29 1.29 0 001.44 1.28 4 4 0 001.94-.61l.18 1.27a4.27 4.27 0 01-2.34.66 2.75 2.75 0 01-3-3 2.78 2.78 0 012.77-3.08c1.8 0 2.61 1.34 2.61 3a2 2 0 01-.07.48zm-2.61-2.34c-.51 0-.87.45-.93 1.35h1.85c-.06-.89-.37-1.35-.92-1.35zM93 53.33v3.27h-1.84v-5.88h1.58l.19 1.16a2.09 2.09 0 011.72-1.28l.3 1.84a2.88 2.88 0 00-1.95.89zm4.8 3.36a5.27 5.27 0 01-2.42-.59l.21-1.38a4.57 4.57 0 002.22.7c.51 0 .75-.17.75-.45s-.17-.43-1-.63c-1.47-.38-2.1-.78-2.1-1.88s.82-1.83 2.26-1.83a5.49 5.49 0 012.17.43l-.23 1.38a4.4 4.4 0 00-1.93-.55c-.43 0-.62.16-.62.39s.16.37 1 .6c1.56.42 2.11.81 2.11 1.9s-.86 1.91-2.42 1.91z",
      fill: "#fff"
    })))));
  };

  var _default = SvgSkrillMoneybookers;
  _exports["default"] = _default;
});