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
    global.Alfamart = mod.exports;
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

  var SvgAlfamart = function SvgAlfamart(props) {
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
      fill: "#E02529",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4.8 8.4h50.4c.5 0 1 .4 1 1v21.9c0 .5-.4 1-1 1H4.8c-.5 0-1-.4-1-1v-22c0-.5.5-.9 1-.9z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M53.2 19.8c.1 0 .3 1.2-1.7 1.2-.8 0-1.2-.2-1.4-.5-.4-.8.3-2 .6-2.8-.4 0-.8 0-1.2.1-.1-.1 0-.2 0-.4 0-.1 0-.2.1-.2 0-.1.2-.2.4-.2.3 0 .5-.1.8-.1 0 0 .1 0 .1-.1.2-.4.3-.7.3-1.1v-.3s-.1-.1 0-.1c.5-.1 1-.2 1.5-.1h.1c.2.1.2.3.1.5-.1.4-.3.7-.4 1.1 0 0 0 .1.1.1h1.6c.1 0-.1.5-.4.6-.3.1-.7.2-1.1.2-.1 0-.3 0-.4-.1-.1 0-.1 0-.2.1-.3.7-.9 1.9-.6 2.2.1.2.3.2.5.2.6-.1 1-.4 1.2-.3",
      fill: "#EB2027"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.5 15.3v.6c.2 0 .5-.1.7-.1.7.1.6 1.1-.5.9-.1 0-.2-.1-.2 0V20c0 .3-.6.5-1.1.4-.7 0-1.2-.3-1.2-.6 0-1 .1-2 0-3l-.1-.1H19c-1.1.1-1.3-1-.1-.9H19.2v-.1c0-.3-.2-.9.3-1.1.8-.3 1.7-.4 2.6-.3.3 0 .5.1.5.2s.1.5-.3.6c-.2.1-.5.2-.8.2M15.2 19.8v-4.6c.1-.5.1-.8 1.2-.9 1 .1 1.1.4 1.2.8l-.1 4.7c0 .4-.2.8-1.1.8-.9-.1-1.1-.4-1.2-.8",
      fill: "#243F8F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48.5 17.8c-.1-.1-.3-.2-.4-.2-.2 0-.4.1-.5.2-.6.5-1.1 1.1-1.5 1.8-.1.2-.4.7-.3.9v.1c0 .2-.7.2-1 .2-.6-.1-.7-.3-.6-.6.5-1 .9-2.1 1.2-3.3.1-.2.1-.3.1-.5 0-.1 0-.2.1-.2.5-.1 1.4-.2 1.6.1.1.3-.2.9-.3 1.2 0 .1-.1.1-.1.2l.2-.2c.3-.3 1.3-1.5 2.2-1.4.3 0 .4.1.4.2-.1.4-.5 1.2-1.1 1.5M37.6 19.6l.9-2.7c.1-.2.3-1-.4-1-1.5-.2-2.4 1.1-2.8 1.7h-.1c-.1 0-.1-.1 0-.1.1-.3.7-1.5-.3-1.6-1.3-.1-2.4 1.4-2.6 1.3-.3-.1.8-1-.1-1.3-.4-.1-.8 0-1.2.1-.2 1.3-.6 2.6-1.2 3.8-.1.2-.3.9.6.9.3 0 .6-.1.9-.2v-.1c0-.2 0-.5.1-.7.1-.1.1-.2.2-.4.2-.2 1.8-2.5 2.2-2.4.4 0-.9 2.9-1 3.1-.1.2-.1.5.4.6h1c.1 0 .1-.1.1-.2V20c.6-1.2 1.4-2.2 2.4-3 0 0 .1-.1.2-.1s.1.1.1.1c-.4.9-.6 1.8-.9 2.7 0 .2-.1.8.4.9.3.1 1.3-.1 1.3-.3-.1-.2-.2-.4-.2-.7M42.8 17.2c-.6.9-1.4 1.7-2.2 2.4 0 0-.1.1-.2.1s-.1-.1-.1-.1c-.2-1.1.2-2.2 1.1-2.7.2-.1.5-.2.7-.1.3 0 .5.2.7.4.1-.1 0 0 0 0m1.9-1c0-.1-.4-.1-.6-.1-.3 0-.5 0-.8.1-.1 0-.1.1-.2.1s-.7-.2-.9-.2c-1.1 0-2.1.5-2.7 1.3-.8.9-1.4 2.1-.9 3.1.2.3.5.4.8.4 1-.1 1.9-.7 2.5-1.6l.1-.1c-.1.3-.1.7-.1 1 .1.3.3.5.6.5.4.1 1.1-.1 1.1-.3V20v-.2-.2c0-.5.1-1.1.4-1.6.2-.5.5-1.1.7-1.8",
      fill: "#EB2027"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.8 17.8H9.4c.2-.6.4-1.1.7-1.6h.1s.1 0 .1.1c.2.4.4.9.5 1.5m3.5 2l-2.5-5c-.4-.5-1-.8-1.6-.7-.7-.1-1.4.2-1.9.8l-1.9 3.7c-.3.5-1.3 1.9.6 1.9 1.8.1 1.6-1.6 1.9-1.6h2.4c.2.6.2 1.5 1.8 1.6.9.1 1.4-.4 1.2-.7M26.6 19.2c-.1.1-.2.1-.4.1-.7 0-.9-.3-.9-.7-.1-.4-.1-.9 0-1.3.1-.3.4-.6.8-.6.4-.1.8.2.9.6.1.4.2 1.6-.4 1.9m2.5-3.3c0-.4-1.5-.4-1.9-.2l-.2.1c-.2 0-.5-.1-.8-.2-.6-.1-1.2-.1-1.8.1-1.8.7-2.4 4.1.4 4.5.7.1 1.5 0 2.2-.2.1 0 .1 0 .1.1.1.1.1.1.2.1.3.1.7.1 1 .1.5 0 .9-.3.9-.5-.1-1.2 0-2.5-.1-3.9",
      fill: "#243F8F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.8 25.3h47.7c.8-.6.8-1.6.8-3.6H10.8c-2.5 0-4.4 0-5 3.6",
      fill: "#E02529"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.7 25.8h47.5c-.5.5-1.2.8-2 .8H5.7v-.8z",
      fill: "#F8D705"
    }))));
  };

  var _default = SvgAlfamart;
  _exports["default"] = _default;
});