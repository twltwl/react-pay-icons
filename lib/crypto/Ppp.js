function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
    global.Ppp = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgPpp = function SvgPpp(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#348f8d",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.312 7.044a1.33 1.33 0 010 1.846l-3.13 3.209a1.29 1.29 0 01-.342.25 1.19 1.19 0 01-1.442-.211L15.28 8.944l-6.005 6.159 1.45 1.483a1.17 1.17 0 01-.007 1.62 1.105 1.105 0 01-1.582.007L6.83 15.86a1.174 1.174 0 010-1.632l.016-.015a.198.198 0 00.014-.015l7.624-7.82h.001l.001-.001.025-.026A1.147 1.147 0 0116 6.21c.072.049.14.104.2.167l2.984 3.053 2.327-2.386a1.255 1.255 0 011.802 0zm1.858 9.102a1.165 1.165 0 01.001 1.627l-.016.015a.198.198 0 00-.015.015l-7.654 7.847a1.148 1.148 0 01-1.754-.121l-2.917-2.984-2.313 2.378c-.322.332-.792.463-1.233.342s-.786-.473-.904-.925c-.117-.451.01-.933.335-1.262l3.129-3.208c.178-.186.407-.312.657-.362.404-.09.826.036 1.119.336l3.126 3.198 5.994-6.144-1.45-1.483a1.17 1.17 0 01.007-1.62 1.105 1.105 0 011.582-.007l2.273 2.325.002.002.003.002z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgPpp;
  _exports["default"] = _default;
});