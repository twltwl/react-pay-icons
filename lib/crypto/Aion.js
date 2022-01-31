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
    global.Aion = mod.exports;
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

  var SvgAion = function SvgAion(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#00BFEC"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.971 23.15c-3.957 0-7.176-3.199-7.176-7.13 0-3.932 3.22-7.13 7.176-7.13 3.957 0 7.176 3.198 7.176 7.13 0 3.931-3.219 7.13-7.176 7.13zm0-12.864c-3.181 0-5.77 2.572-5.77 5.734 0 3.161 2.589 5.733 5.77 5.733 3.182 0 5.77-2.572 5.77-5.733 0-3.162-2.588-5.734-5.77-5.734zm5.025-2.415a9.638 9.638 0 00-5.025-1.406 9.67 9.67 0 00-4.666 1.198l-.684-1.22a11.083 11.083 0 015.35-1.376c2.04 0 4.032.558 5.761 1.614l-.736 1.19zm2.095 16.51l-.909-1.067a9.519 9.519 0 003.405-7.294h1.406c0 3.226-1.422 6.273-3.902 8.36zm-7.12 2.59c-2.557 0-5.049-.89-7.016-2.505l.896-1.076a9.667 9.667 0 006.12 2.185c1.56 0 3.048-.36 4.422-1.068l.647 1.24a11.107 11.107 0 01-5.069 1.225z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.35 13.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM6.86 21.976a10.742 10.742 0 01-1.793-5.956c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z",
      opacity: 0.5
    })))));
  };

  var _default = SvgAion;
  _exports["default"] = _default;
});