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
    global.Ost = mod.exports;
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

  var SvgOst = function SvgOst(props) {
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
      r: 16,
      fill: "#34445B"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.937 10.222l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zm-.915 12.122a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.937 10.222l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zm-.915 12.122a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z"
    })))));
  };

  var _default = SvgOst;
  _exports["default"] = _default;
});