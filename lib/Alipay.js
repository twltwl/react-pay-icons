function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.Alipay = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgAlipay = function SvgAlipay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.488 21.218a7.131 7.131 0 014.245-.36c1.684.39 3.31.99 4.844 1.788a10.54 10.54 0 01-4.394 3.393 6.29 6.29 0 01-4.028.136 3.529 3.529 0 01-1.93-1.355 2.281 2.281 0 01-.318-1.841 2.773 2.773 0 011.58-1.761zM20.683 7h18.624a4.246 4.246 0 013.098 1.918c.347.535.549 1.152.586 1.788-.004 4.485-.004 8.97 0 13.454a26.752 26.752 0 01-2.793-.725c-1.955-.57-3.86-1.293-5.78-1.96a19.99 19.99 0 002.171-5.345c-1.71.01-3.418.003-5.127.003.004-.596-.006-1.194.004-1.794 2.093.01 4.186 0 6.279.006-.008-.338.01-.678-.013-1.016-2.09.025-4.181 0-6.27.011.004-.997-.006-1.991.004-2.99-.868.005-1.736-.012-2.603.01a.412.412 0 00-.416.424c-.01.853-.002 1.706-.002 2.556-2.113-.004-4.226.002-6.336-.004-.006.336-.003.67-.003 1.008 2.113-.005 4.226.002 6.337-.005.002.602-.002 1.198.002 1.794-1.75.006-3.5-.012-5.25.01.015.331.012.664.007.995 3.392-.003 6.786.005 10.178-.003a17.906 17.906 0 01-1.424 3.399.106.106 0 01-.168.05 29.05 29.05 0 00-6.85-1.5 6.744 6.744 0 00-3.892.867 4.42 4.42 0 00-2.054 2.964 4.05 4.05 0 00.964 3.452 5.542 5.542 0 003.545 1.705 9.091 9.091 0 005.169-.966 12.848 12.848 0 003.873-3.054c.1-.1.175-.247.31-.304 3.337 1.524 6.736 2.92 10.138 4.314a3.798 3.798 0 01-.945 2.783 4.227 4.227 0 01-2.652 1.421h-18.8a4.218 4.218 0 01-2.867-1.717A4.077 4.077 0 0117 28.686V10.58a4.178 4.178 0 01.992-2.192A4.308 4.308 0 0120.682 7z",
      fill: "#2CA3DC",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgAlipay;
  _exports["default"] = _default;
});