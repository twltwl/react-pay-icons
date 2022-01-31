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
    global.Ion = mod.exports;
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

  var SvgIon = function SvgIon(props) {
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
      fill: "#57beea",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.026 19.009A2.712 2.712 0 014 16.309a2.712 2.712 0 012.682-2.718c.96-4.41 4.87-7.711 9.546-7.711.873 0 1.72.115 2.525.33A2.7 2.7 0 0121.005 5a2.712 2.712 0 012.705 2.718c0 .469-.118.91-.326 1.294A9.809 9.809 0 0126 15.698a9.811 9.811 0 01-2.904 6.985c.326.448.518 1.001.518 1.599A2.712 2.712 0 0120.908 27a2.707 2.707 0 01-2.519-1.724 9.76 9.76 0 01-2.16.24c-4.241 0-7.851-2.714-9.203-6.507zm.49-.105c1.3 3.568 4.71 6.115 8.712 6.115.695 0 1.372-.077 2.023-.222a2.712 2.712 0 012.657-3.233c.72 0 1.376.283 1.86.744a9.314 9.314 0 002.737-6.61c0-2.41-.91-4.606-2.405-6.26-.496.61-1.25.999-2.095.999a2.712 2.712 0 01-2.706-2.719c0-.374.076-.731.212-1.056a9.253 9.253 0 00-2.283-.284c-4.416 0-8.112 3.101-9.047 7.255a2.715 2.715 0 012.23 2.676 2.718 2.718 0 01-1.896 2.595zm8.712-.484a2.715 2.715 0 01-2.708-2.722c0-1.503 1.212-2.721 2.708-2.721s2.709 1.218 2.709 2.721a2.715 2.715 0 01-2.709 2.722z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgIon;
  _exports["default"] = _default;
});