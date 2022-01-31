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
    global.Ftc = mod.exports;
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

  var SvgFtc = function SvgFtc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#27323a",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.603 6s1.647 1.464.478 4.443a5.53 5.53 0 01-.914 1.506l-4.065 4.77-3.262 4.258s-3.746-.616-5.202.895l6.174.274s-1.318 1.443-6.52.41c0 0 .07 1.448 2.429 1.86 0 0-2.083.689-3.332-1.307 0 0 0 1.448 1.456 2.064 0 0-1.18.274-2.152-.963L8.03 25.994s-.345.069-.138-.273l1.387-1.648s.138-1.169-.696-.758c0 0-.553.205-.346.826 0 0-.834-.684.139-1.579L6.5 20.704l2.428 1.305-1.041-2.543 1.732 2.201s-.144-2.474.622-3.159c0 0 .207 2.406 1.18 2.612l-.07-5.018 1.042-.894.138 3.158s.276.342.552-.068c0 0 .627-1.032.627-4.054l1.663-1.58.208 1.238s.281.479.627.068l.345-2.405s2.22-2.543 8.05-5.565zm-11.1 13.95c5.754-5.29 8.81-10.444 8.804-10.444-2.842 1.99-8.804 10.445-8.804 10.445z",
      fill: "#fff"
    }))));
  };

  var _default = SvgFtc;
  _exports["default"] = _default;
});