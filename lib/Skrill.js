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
    global.Skrill = mod.exports;
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

  var SvgSkrill = function SvgSkrill(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 125.43 78.39"
    }, props), /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 1"
    }, /*#__PURE__*/React.createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#862165"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m84.86 28.9 6.24-1.11v24h-6.24zm9.12 0v22.85h6.24v-24zM76 51.75h6.24V34.22H76zM34.7 36.7c-.79-.05-2.61-.17-2.61-1.81 0-2 2.62-2 3.61-2a21.7 21.7 0 0 1 5.59 1s.89.32 1.66.64h.07v-5.41h-.1a22.16 22.16 0 0 0-8.18-1.3c-7 0-9.53 4.1-9.53 7.61 0 2 .87 6.79 8.93 7.34.68 0 2.49.15 2.49 1.85 0 1.4-1.48 2.23-4 2.23a19.63 19.63 0 0 1-7-1.36v5.6A32.72 32.72 0 0 0 34 52c6.89 0 10-3.88 10-7.73-.06-4.35-3.51-7.18-9.3-7.57zM72.45 34c-5.77.18-8.7 2.77-8.7 7.92v9.86H70v-8c0-3.08.41-4.41 4.07-4.53v-5.19a8.83 8.83 0 0 0-1.62-.06zm-16.94.23A21.68 21.68 0 0 1 52 40.3V27.79l-6.44 1.27v22.69H52v-7a24.31 24.31 0 0 1 2.79 7h7.72c-.76-3.18-4.1-9-4.1-9a28.44 28.44 0 0 0 4.52-8.52zm23.58-1.66A3.08 3.08 0 1 0 76 29.46a3.08 3.08 0 0 0 3.09 3.08z",
      fill: "#fff"
    })))));
  };

  var _default = SvgSkrill;
  _exports["default"] = _default;
});