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
    global.San = mod.exports;
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

  var SvgSan = function SvgSan(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#2B77B3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M27 16.039c-.047 6.108-4.997 11.006-11.077 10.96C9.838 26.954 4.951 21.982 5 15.887 5.05 9.85 10.014 4.96 16.05 5c6.08.041 10.994 4.996 10.95 11.04zm-21.204-.035c.011 5.62 4.558 10.157 10.189 10.17 5.637.01 10.236-4.558 10.217-10.184-.021-5.86-4.875-10.28-10.462-10.184-5.402.092-9.955 4.684-9.944 10.198zm12.885-4.776l-.407 1.302c-.758-.125-1.46-.274-2.171-.344-.422-.041-.86.069-1.023.544-.168.487-.188 1.006.215 1.382.414.385.9.69 1.354 1.032.417.314.876.588 1.24.955.987.996 1.162 2.204.757 3.506-.24.772-.812 1.26-1.544 1.556-1.12.454-3.027.23-4.098-.49l.47-1.364c.682.18 1.306.396 1.948.498.612.097 1.253.003 1.567-.622.316-.63.216-1.293-.279-1.799-.382-.39-.861-.687-1.308-1.012-.298-.216-.631-.386-.921-.612a3.137 3.137 0 01-.955-3.78 2.077 2.077 0 011.47-1.231c1.255-.298 2.472-.163 3.685.48zm-8.08 4.59a1.27 1.27 0 01-1.257 1.27c-.7.003-1.298-.607-1.282-1.304a1.295 1.295 0 011.294-1.244c.7.01 1.25.575 1.246 1.278zm12.093-1.243c.698-.001 1.218.514 1.227 1.216a1.268 1.268 0 01-1.276 1.297 1.273 1.273 0 01-1.252-1.278c0-.732.53-1.235 1.301-1.235z"
    }))));
  };

  var _default = SvgSan;
  _exports["default"] = _default;
});