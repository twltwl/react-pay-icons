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
    global.DinersClub = mod.exports;
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

  var SvgDinersClub = function SvgDinersClub(props) {
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
      d: "M16.642 19.991c.014-6.231 5.075-11.273 11.307-11.263 6.231.01 11.277 5.066 11.272 11.298-.005 6.231-5.058 11.28-11.29 11.28a11.302 11.302 0 01-11.289-11.315",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.759 19.768a6.807 6.807 0 00-4.358-6.347v12.694a6.807 6.807 0 004.358-6.347zm-9.216 6.345v-12.69a6.8 6.8 0 000 12.69zm2.43-17.075a10.729 10.729 0 1010.705 10.73c.006-5.918-4.786-10.722-10.705-10.73zm-.026 22.47c-6.46.036-11.733-5.157-11.795-11.617A11.55 11.55 0 0127.947 8.069h3.032a11.956 11.956 0 0112.228 11.822c-.305 6.523-5.698 11.647-12.228 11.617h-3.032z",
      fill: "#154A78"
    })))));
  };

  var _default = SvgDinersClub;
  _exports["default"] = _default;
});