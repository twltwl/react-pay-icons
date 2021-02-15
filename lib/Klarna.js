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
    global.Klarna = mod.exports;
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

  var SvgKlarna = function SvgKlarna(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 40 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#FFB3C7",
      d: "M0 0h40v26H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.203 14.67a.8.8 0 00-.797.805.8.8 0 00.797.804.8.8 0 00.797-.804.8.8 0 00-.797-.804zm-2.623-.621c0-.608-.515-1.101-1.15-1.101-.636 0-1.151.493-1.151 1.1 0 .609.515 1.102 1.15 1.102.636 0 1.151-.493 1.151-1.101zm.005-2.14h1.27v4.28h-1.27v-.274a2.213 2.213 0 01-1.26.392 2.249 2.249 0 01-2.238-2.258 2.248 2.248 0 012.239-2.259c.467 0 .9.145 1.258.392v-.274zm-10.164.557v-.557h-1.3v4.28h1.303V14.19c0-.675.724-1.037 1.227-1.037h.015V11.91c-.516 0-.99.223-1.245.557zm-3.239 1.583c0-.608-.515-1.101-1.15-1.101-.636 0-1.151.493-1.151 1.1 0 .609.515 1.102 1.15 1.102.636 0 1.151-.493 1.151-1.101zm.004-2.14h1.27v4.28h-1.27v-.274a2.213 2.213 0 01-1.258.392 2.248 2.248 0 01-2.239-2.258 2.248 2.248 0 012.239-2.259c.466 0 .9.145 1.258.392v-.274zm7.645-.116c-.508 0-.988.16-1.309.598v-.482h-1.264v4.28h1.28v-2.25c0-.65.432-.97.953-.97.558 0 .88.337.88.962v2.258h1.268v-2.722c0-.996-.785-1.674-1.808-1.674zM11.839 16.19h1.33V10h-1.33v6.188zM6 16.19h1.408V10H6v6.19zM10.923 10c0 1.34-.517 2.587-1.44 3.514l1.946 2.677H9.69l-2.114-2.91.546-.412A3.566 3.566 0 009.546 10h1.377z",
      fill: "#0A0B09"
    })));
  };

  var _default = SvgKlarna;
  _exports["default"] = _default;
});