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
    global.Blik = mod.exports;
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

  var SvgBlik = function SvgBlik(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#181818"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28.57 10.902h-3.235v18.067h3.235V10.902zM34.556 16.997h-3.234v11.972h3.234V16.997zM49 28.969l-4.836-6.328 4.463-5.644h-3.825l-4.26 5.473V10.902h-3.234v18.067h3.234v-6.142l4.26 6.142H49zM17.11 16.872a6.047 6.047 0 00-2.891.731v-6.701H11v12.096a6.128 6.128 0 006.126 6.126 6.118 6.118 0 006.126-6.126c0-3.39-2.752-6.126-6.142-6.126zm0 9.018a2.887 2.887 0 01-2.891-2.892 2.887 2.887 0 012.891-2.892 2.886 2.886 0 012.892 2.892 2.887 2.887 0 01-2.892 2.892z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.267 15.753a2.876 2.876 0 100-5.753 2.876 2.876 0 000 5.753z",
      fill: "#EA3859"
    })));
  };

  var _default = SvgBlik;
  _exports["default"] = _default;
});