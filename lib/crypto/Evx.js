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
    global.Evx = mod.exports;
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

  var SvgEvx = function SvgEvx(props) {
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
      fill: "#044aac",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.082 17.21l-2.618 2.62-1.23 1.23A10.937 10.937 0 015 16C5 9.935 9.935 5 16 5s11 4.935 11 11-4.935 11-11 11c-2.346 0-4.522-.739-6.31-1.995a11.08 11.08 0 01-1.277-1.047l1.162-1.163 8.417-8.417a1.621 1.621 0 011.614-1.49 1.62 1.62 0 011.61 1.455l3.874 3.874A9.346 9.346 0 0025.356 16c0-5.16-4.197-9.356-9.356-9.356S6.644 10.84 6.644 16c0 .718.081 1.417.235 2.089L9.367 15.6a1.621 1.621 0 011.599-1.365 1.62 1.62 0 011.593 1.334l1.583 1.582-1.163 1.162-1.114-1.114a1.61 1.61 0 01-1.783.01zm8.709-1.306l-7.918 7.918A9.301 9.301 0 0016 25.356c3.753 0 6.997-2.221 8.486-5.418l-4.045-4.046a1.609 1.609 0 01-1.65.012zm.844-2.116a.728.728 0 10.002 1.455.728.728 0 00-.002-1.455zm-8.66 1.327a.728.728 0 100 1.456.728.728 0 000-1.456z",
      fill: "#fff"
    }))));
  };

  var _default = SvgEvx;
  _exports["default"] = _default;
});