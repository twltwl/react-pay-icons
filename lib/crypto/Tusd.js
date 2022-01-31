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
    global.Tusd = mod.exports;
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

  var SvgTusd = function SvgTusd(props) {
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
      fill: "#2B2E7F"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.057 19.028v-5.86h.77c2.545 0 3.172-2.373 3.172-2.373h-6.683c-3.172 0-3.71 2.374-3.71 2.374h3.943v8.817s2.508-.753 2.508-2.958z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.395 23.594c2.248-2.336 3.11-5.58 2.301-8.683a9.339 9.339 0 00-2.48-4.28c-.108-.106-.216-.214-.342-.32l-.108-.107a2.185 2.185 0 00-.234-.196l-.144-.107-.215-.16-.127-.09a4.15 4.15 0 01-.251-.178l-.163-.106a1.22 1.22 0 00-.215-.125l-.162-.107c-.072-.036-.144-.09-.216-.125l-.162-.09c-.072-.035-.144-.071-.234-.106l-.055-.018c.198.16.395.339.575.517a8.75 8.75 0 010 12.427c-4.386 4.35-11.505 4.35-15.893 0-.162-.16-.306-.32-.467-.48l-.126-.143a5.762 5.762 0 01-.27-.339 11.856 11.856 0 002.176 2.995c4.584 4.546 12.026 4.546 16.61 0a.614.614 0 00.202-.18z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.4 22.386a8.168 8.168 0 01-.576-.517 8.758 8.758 0 010-12.439c4.391-4.354 11.516-4.354 15.907 0 .306.304.593.625.863.964a11.784 11.784 0 00-2.177-2.98c-4.588-4.551-12.038-4.551-16.626 0-.054.053-.108.125-.18.178-3.041 3.177-3.455 7.924-1.025 11.529.954 1.39 2.284 2.55 3.814 3.265z"
    })))));
  };

  var _default = SvgTusd;
  _exports["default"] = _default;
});