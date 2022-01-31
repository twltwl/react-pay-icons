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
    global.Hsbc = mod.exports;
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

  var SvgHsbc = function SvgHsbc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#420003",
      x: 0.57,
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M27 26h27v27H27z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#DB0011",
      d: "M68 39.516L54 26v27zM40.5 40L54 26H27z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#DB0011",
      d: "M14 39.516L28 53V26z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#DB0011",
      d: "M40.5 39L27 53h27z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M79.5 40.876h-5V46H72V34h2.5v4.921h5V34H82v12h-2.5zM87.376 46c-2.39 0-4.345-1.008-4.376-3.772h2.39c.03 1.235.713 1.983 2.017 1.983.962 0 2.08-.52 2.08-1.658 0-.91-.746-1.17-1.987-1.561l-.807-.228c-1.738-.52-3.476-1.236-3.476-3.317 0-2.569 2.297-3.447 4.376-3.447 2.141 0 4.004.78 4.035 3.35h-2.39c-.093-1.041-.683-1.659-1.8-1.659-.9 0-1.769.488-1.769 1.529 0 .845.745 1.105 2.297 1.626l.93.292C90.79 39.756 92 40.44 92 42.39c-.031 2.602-2.452 3.61-4.624 3.61zM94 34.012h3.943a9.87 9.87 0 012.227.135c1.367.338 2.417 1.283 2.417 2.904 0 1.554-.923 2.33-2.258 2.702 1.526.304 2.671 1.114 2.671 2.904 0 2.735-2.544 3.343-4.516 3.343h-4.452L94 34.012zm3.943 4.998c1.082 0 2.195-.236 2.195-1.621 0-1.25-1.018-1.587-2.036-1.587h-1.717v3.208h1.558zm.223 5.2c1.145 0 2.258-.27 2.258-1.756s-.954-1.756-2.13-1.756h-1.94v3.512h1.812zM109.304 46c-3.675 0-5.304-2.368-5.304-5.903 0-3.535 1.821-6.097 5.431-6.097 2.269 0 4.473 1.038 4.537 3.632h-2.556c-.128-1.167-.894-1.75-1.98-1.75-2.237 0-2.908 2.432-2.908 4.28 0 1.849.67 3.99 2.811 3.99 1.119 0 1.95-.617 2.11-1.784H114c-.256 2.659-2.332 3.632-4.696 3.632z"
    }))));
  };

  var _default = SvgHsbc;
  _exports["default"] = _default;
});