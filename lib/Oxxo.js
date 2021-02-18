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
    global.Oxxo = mod.exports;
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

  var SvgOxxo = function SvgOxxo(props) {
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
      fill: "#EDA42D",
      d: "M-2 0h61.538v40H-2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FEFEFE",
      d: "M-2 31.794h61.605V8.635H-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.208 14.65a5.193 5.193 0 105.116 5.193 5.164 5.164 0 00-5.116-5.193M8.04 14.65a5.193 5.193 0 105.115 5.193 5.164 5.164 0 00-5.116-5.193",
      fill: "#ED1C24"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.208 28.047a8.205 8.205 0 118.083-8.204 8.16 8.16 0 01-8.083 8.204zm-34.086-8.204a8.16 8.16 0 01-8.083 8.204 8.205 8.205 0 010-16.408 8.159 8.159 0 018.083 8.204zm33.685-9.763c-4.737-.11-6.963 2.972-10.195 6.774l-3.048 3.585 4.827 5.866c1.15 1.802-1.045 3.59-2.406 1.941l-4.464-5.403-4.349 5.117c-1.385 1.629-3.555-.19-2.38-1.976l4.721-5.572-3.093-3.745 1.99-2.501L34.556 18l2.71-3.201a21.53 21.53 0 014.447-4.72H-2v20.27H8.22c4.737 0 6.887-2.874 10.031-6.75l2.967-3.657-4.96-5.75c-1.19-1.775.963-3.614 2.362-1.998l4.585 5.298 4.232-5.218c1.348-1.661 3.558.108 2.424 1.92l-4.593 5.682 3.177 3.672-2.002 2.406-3.163-3.62-2.637 3.263a21.192 21.192 0 01-4.34 4.752h43.301V10.08h-9.797z",
      fill: "#ED1C24"
    }))));
  };

  var _default = SvgOxxo;
  _exports["default"] = _default;
});