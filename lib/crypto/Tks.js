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
    global.Tks = mod.exports;
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

  var SvgTks = function SvgTks(props) {
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
      r: 16,
      fill: "#895AF8",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.77 14.25a4 4 0 01.48 0c1.48.1 2.16 2.11 3.1 2a8.16 8.16 0 01-3 1.55 2 2 0 01-2.17-1.3v4L22 17.18V12l-4.23 2.25zm-2.89-.01a2.05 2.05 0 01-.74-1.49v-.08c0-1.16 1.87-3 1.93-3 .06.06 1.93 1.85 1.93 3v.09a2 2 0 01-.6 1.36l4.6-2.47-6-2.94-6 2.91 4.88 2.62zm.98 2.3a2 2 0 01-2.17 1.31 8.16 8.16 0 01-3-1.55c.94.07 1.61-1.95 3.1-2a4 4 0 01.48 0L10 12v5.19l5.87 3.39-.01-4.04z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm-6.7 7.19L16 7.94l6.71 3.25v6.39L16 21.45l-6.7-3.87v-6.39zm13.43 9l-6.68 3.86-6.76-3.9v-.37l6.76 3.9 6.68-3.86v.37zm0-.75l-6.68 3.86-6.76-3.9V19l6.76 3.91 6.68-3.86v.39zm0-.75l-6.68 3.86-6.76-3.9v-.37l6.76 3.91 6.68-3.86v.36z",
      fillRule: "nonzero"
    })))));
  };

  var _default = SvgTks;
  _exports["default"] = _default;
});