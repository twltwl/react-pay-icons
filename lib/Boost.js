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
    global.Boost = mod.exports;
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

  var SvgBoost = function SvgBoost(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      id: "boost_svg__Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 60 40",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".boost_svg__st1{fill-rule:evenodd;clip-rule:evenodd}.boost_svg__st1,.boost_svg__st2{fill:#ec3024}"), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M-1.2-.3h62.4v40.6H-1.2z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      className: "boost_svg__st1",
      d: "M52.5 15.7v.2h.4V17h.2v-1.2h.4v-.2h-1zm1.2 0l-.1 1.3h.2l.1-1.1.4 1.1h.1l.4-1.1V17h.2l-.1-1.4h-.2l-.4 1.1-.4-1.1h-.2z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "boost_svg__st2",
      d: "M48.5 18.2v-2.6h1.8v2.6H52v1.4h-1.7v4.2c0 .9.4.9.8 1 .3 0 .9-.2 1.1-.3l.4 1.4c-.3.2-1.1.7-2.4.5-1.4-.2-1.7-1.2-1.7-1.9v-4.9h-1.1v-1.4h1.1zM43.4 19.4c1.1 0 2.1.6 2.4.9l.8-1.1c-1-.8-2.6-1.1-3.3-1.1-1.2 0-2.9.5-3.1 2.4-.2 1.9 1.9 2.1 2.8 2.4.3.1 2.2.4 2.1 1.3-.2 1-1.2.9-2.1.9-.7 0-1.9-.7-2.5-1-.3.4-.8 1.2-.8 1.2.1.1 2 1.3 3.9 1.1 2-.2 3-1 3.1-2.5.1-1.5-1.9-2.2-3.3-2.4-1.4-.3-1.6-.8-1.6-1.1.2-.4.2-1 1.6-1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "boost_svg__st1",
      d: "M26.1 26.5c2.3 0 4.1-1.9 4.1-4.2s-1.9-4.2-4.1-4.2S22 20 22 22.3s1.8 4.2 4.1 4.2zm0-1.6c1.3 0 2.3-1.2 2.3-2.7 0-1.5-1-2.7-2.3-2.7-1.3 0-2.3 1.2-2.3 2.7 0 1.6 1 2.7 2.3 2.7zM35.2 26.5c2.3 0 4.1-1.9 4.1-4.2s-1.9-4.2-4.1-4.2c-2.3 0-4.1 1.9-4.1 4.2s1.8 4.2 4.1 4.2zm0-1.6c1.3 0 2.3-1.2 2.3-2.7 0-1.5-1-2.7-2.3-2.7-1.3 0-2.3 1.2-2.3 2.7 0 1.6 1.1 2.7 2.3 2.7zM7.4 12C6.1 12 5 13.1 5 14.4v11.2C5 26.9 6.1 28 7.4 28h11.2c1.3 0 2.4-1.1 2.4-2.4V14.4c0-1.3-1.1-2.4-2.4-2.4H7.4zm3.5 14.2h4.6c2.3-.1 4.1-1.9 4.1-4.2s-1.8-4.1-4.1-4.2c-.1-2.3-1.9-4.1-4.2-4.1-2.3 0-4.1 1.8-4.2 4.1v4.6c0 2.1 1.7 3.8 3.8 3.8z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "boost_svg__st2",
      d: "M11.1 24.5c-1.3 0-2.3-1-2.3-2.3v-4.4c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4v1.8h1.8c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.5h-4.3z"
    }))));
  };

  var _default = SvgBoost;
  _exports["default"] = _default;
});