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
    global.Chips = mod.exports;
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

  var SvgChips = function SvgChips(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#598182",
      fillRule: "nonzero",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.548 25.408a295794.354 295794.354 0 002.536-3.277c.949.148 1.884.064 2.778-.324.323-.14.612-.358.916-.542.043-.026.083-.06.116-.085l3.072 3.038c-.255.17-.508.354-.777.512a9.368 9.368 0 01-3.379 1.17 10.47 10.47 0 01-2.122.08 11.919 11.919 0 01-3.14-.572zm-.966-.376a9.992 9.992 0 01-.996-.514 8.953 8.953 0 01-3.71-4.15 9.975 9.975 0 01-.787-2.86 12.322 12.322 0 01-.062-2.308c.123-1.975.724-3.79 1.935-5.387 1.118-1.474 2.586-2.483 4.323-3.13a9.661 9.661 0 012.565-.59c.663-.057 1.333-.114 1.996-.085.41.017.813.057 1.21.12a683038.836 683038.836 0 01-2.572 3.734 5.29 5.29 0 00-2.41.816c-1.33.844-2.126 2.06-2.5 3.56a7.241 7.241 0 00-.216 1.934c.009.342.038.677.089 1.004l-.308.447c-.248.36.057.836.498.778l.112-.014c.258.729.649 1.41 1.19 2.035.336.386.711.71 1.124.97l-1.445 3.491a.49.49 0 00-.036.15zm7.443-18.698a8.188 8.188 0 012.496 1.141c.138.094.264.205.396.308.025.019.051.036.083.058-.042.048-.066.08-.095.108-.911.898-1.824 1.793-2.732 2.694-.1.1-.163.116-.284.03a4.28 4.28 0 00-1.201-.596l1.283-3.375.034-.087a.488.488 0 00.02-.281zm-3.704 10.948l-4.753.621L19.476 6.42l.044.02-3.055 8.031 5.575-.88-8.899 11.51-.043-.03 3.223-7.789z",
      fill: "#fff"
    }))));
  };

  var _default = SvgChips;
  _exports["default"] = _default;
});