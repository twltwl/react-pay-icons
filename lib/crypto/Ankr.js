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
    global.Ankr = mod.exports;
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

  var SvgAnkr = function SvgAnkr(props) {
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
      fill: "#2E6BF6",
      fillRule: "nonzero",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.314 6.3l6.62 3.35c.96.5 1.566 1.45 1.566 2.55v1.55h-2.426V12.2c0-.15-.1-.3-.252-.4l-6.62-3.35c-.1-.05-.253-.05-.404 0l-6.62 3.35c-.151.05-.252.2-.252.4v1.55H6.5V12.2c0-1.05.606-2.05 1.566-2.55l6.62-3.35c.809-.4 1.769-.4 2.628 0zm.758 9.6c0-1.15-.96-2.05-2.072-2.05-1.162 0-2.072.9-2.072 2.05s.96 2.05 2.072 2.05 2.072-.9 2.072-2.05zm4.7 4.3c.15-.05.252-.2.252-.4v-1.55h2.425v1.55c0 1.05-.606 2.05-1.566 2.55l-6.62 3.35c-.404.2-.859.3-1.314.3-.454 0-.91-.1-1.313-.3l-6.57-3.35c-.96-.5-1.566-1.45-1.566-2.55v-1.55h2.426v1.55c0 .15.1.3.252.4l5.61 2.8v-2.8c-1.921-.55-3.285-2.25-3.285-4.3 0-2.45 2.02-4.5 4.548-4.5 2.476 0 4.547 2 4.547 4.5 0 2.05-1.414 3.8-3.284 4.3V23l5.457-2.8z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgAnkr;
  _exports["default"] = _default;
});