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
    global.Oax = mod.exports;
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

  var SvgOax = function SvgOax(props) {
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
      fill: "#164b79",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.09 18.668l-.623 1.33h-1.382L15.838 12l2.503 5.333h-1.415l-1.12-2.315-1.122 2.354zm5.454 1.3l2.93-3.95-2.951-3.98h1.615l2.141 2.91-.779 1.07.779 1.07-2.14 2.91h-2.963l-.626-1.33h1.382zm4.526-3.967l-.791-1.087 2.141-2.91H27zm0 0L27 19.999h-1.58l-2.14-2.91zm-12.648-2.842a3.965 3.965 0 011.085 2.843 4.124 4.124 0 01-1.085 2.842C10.7 19.653 9.807 20 8.754 20a3.575 3.575 0 01-2.668-1.156A4 4 0 015 16.002a3.965 3.965 0 01.691-2.315l.92.98a2.822 2.822 0 00.362 3.265 2.396 2.396 0 001.78.81c.672 0 1.314-.293 1.78-.81a2.65 2.65 0 00.723-1.895 2.82 2.82 0 00-.724-1.896 2.333 2.333 0 00-1.78-.77 2.19 2.19 0 00-1.249.35l-.92-.98a3.416 3.416 0 012.173-.736 3.51 3.51 0 012.665 1.154z",
      fill: "#fff"
    }))));
  };

  var _default = SvgOax;
  _exports["default"] = _default;
});