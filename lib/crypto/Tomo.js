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
    global.Tomo = mod.exports;
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

  var SvgTomo = function SvgTomo(props) {
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
      fill: "#1A1F36"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.525 14.464a.548.548 0 00.048-1.094h-3.84v-.96a.634.634 0 00-1.22 0v.96h-1.027a.547.547 0 100 1.094h1.028v3.34a3.187 3.187 0 003.177 3.169 3.11 3.11 0 001.92-.701l.23-.192a.643.643 0 10-.844-.96l-.173.144a1.843 1.843 0 01-1.997.23 1.92 1.92 0 01-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 00-.375-.567h-.24a.47.47 0 00-.46.365 7.488 7.488 0 11-14.132-4.733 6.845 6.845 0 013.706-3.705 7.546 7.546 0 019.331 2.669.48.48 0 00.653.134l.086-.058a.518.518 0 00.164-.71A8.64 8.64 0 0013.37 8.33a8.102 8.102 0 00-4.992 4.924 8.582 8.582 0 1016.387 4.935zM16.874 4.95h-.96A11.443 11.443 0 005.41 19.59a.547.547 0 00.682.365h.077a.547.547 0 00.288-.643 10.349 10.349 0 117.68 7.2.518.518 0 00-.519.192.557.557 0 00.317.893A11.434 11.434 0 1016.874 4.95z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgTomo;
  _exports["default"] = _default;
});