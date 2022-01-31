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
    global.Iq = mod.exports;
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

  var SvgIq = function SvgIq(props) {
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
      fill: "#5DF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.83 10.12a7.62 7.62 0 012-5.12c.35-.35.39-.42.39-.7 0-.28 0-.3-.21-.3a5.63 5.63 0 00-.77.14 12.1 12.1 0 00-7.29 5.07 11.28 11.28 0 00-1.7 4 14.07 14.07 0 00-.18 4 11.67 11.67 0 004.16 7.57c1.23 1 2.61 1.8 2.61 1.44a1.43 1.43 0 00-.32-.41 6.34 6.34 0 01-1.59-5.09 7.27 7.27 0 013.4-5.6 5.58 5.58 0 01.77-.46c.15 0 .06-.3-.31-1a6.91 6.91 0 01-.96-3.54zm15.51 3.12a12 12 0 00-6.08-8.16c-.56-.31-.84-.38-.84-.19a1.4 1.4 0 00.24.44 5.5 5.5 0 011 3 4 4 0 01-1 3.12 1.08 1.08 0 01-1.51.06c-.4-.29-.4-.49-.15-.86A4.36 4.36 0 0019.75 8a2.55 2.55 0 00-.74-2.07 1.93 1.93 0 00-1.94-.51 3.17 3.17 0 00-1.92 2.3 9.15 9.15 0 00-.4 2.28 7.41 7.41 0 00.85 3.4 6.92 6.92 0 001.41 1.6c.11.072.207.16.29.26a.88.88 0 01-.33.17 6.41 6.41 0 00-3.32 3.71 7.15 7.15 0 00-.48 2.95 3.43 3.43 0 001 2.57 3.32 3.32 0 002.8.75 5.27 5.27 0 003.46-1.66c.41-.44.49-.49.57-.39.08.1.06.16-.09.41a7.5 7.5 0 01-4.27 3.38c-.35.09-.5.16-.5.24 0 .26 2.19-.1 3.52-.57a12.1 12.1 0 007.3-7.46 9.43 9.43 0 00.55-3.72 9.47 9.47 0 00-.17-2.4z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgIq;
  _exports["default"] = _default;
});