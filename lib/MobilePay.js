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
    global.MobilePay = mod.exports;
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

  var SvgMobilePay = function SvgMobilePay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0V40H60V0Z",
      fill: "#5A78FF"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.0078 24.3549C32.5913 23.5675 34.777 23.1716 36.5649 23.1672C39.5208 23.1599 41.999 23.7466 43.9996 24.9274V16.3405C41.9888 15.2993 39.7169 14.7435 37.1837 14.6731C34.6506 14.6027 32.2586 15.1186 30.0078 16.2208V24.3549Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M25.8105 15.0057L28.9991 22.5955V15.3217C30.679 14.4221 32.4575 13.8456 34.3346 13.5921C36.2116 13.3387 38.3451 13.3796 40.7351 13.7147L39.001 9.57132C36.4886 9.40908 34.0953 9.81383 31.8211 10.7856C29.5468 11.7573 27.5433 13.164 25.8105 15.0057Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.1179 9.62743C31.8388 8.95034 31.4202 7.9347 30.8621 6.58052C30.2747 5.15537 28.6502 4.47335 27.2337 5.05718L18.5648 8.63026C17.1483 9.21409 16.4762 10.8427 17.0636 12.2678L25.4224 32.5478C26.0098 33.973 27.6343 34.655 29.0508 34.0712L37.7197 30.4981C39.1362 29.9143 39.8083 28.2857 39.2209 26.8605C38.6915 25.5762 38.3461 24.7381 38.1846 24.3463C37.7129 24.3185 37.3678 24.3017 37.1493 24.2961C36.9185 24.2901 36.5896 24.2894 36.1627 24.2939C36.3708 24.7988 36.8202 25.8892 37.511 27.5653C37.7068 28.0403 37.4828 28.5832 37.0106 28.7778L28.3417 32.3509C27.8695 32.5455 27.328 32.3181 27.1322 31.8431L18.7734 11.5631C18.5776 11.088 18.8017 10.5452 19.2738 10.3506L27.9428 6.77749C28.4149 6.58288 28.9564 6.81022 29.1522 7.28527L30.4216 10.365C30.8132 10.1739 31.1143 10.0362 31.3247 9.95183C31.5352 9.86749 31.7996 9.75935 32.1179 9.62743Z",
      fill: "white"
    })));
  };

  var _default = SvgMobilePay;
  _exports["default"] = _default;
});