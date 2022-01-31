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
    global.Bcd = mod.exports;
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

  var SvgBcd = function SvgBcd(props) {
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
      fill: "#fcc339",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.585 9.694l.077.171-3.054 1.402 1.374 4.55 4.521-2.283.06.119.018-.022-2.929-3.906zm-.165-.077l-2.773-1.29h-7.171l-2.962 1.36 3.08 1.296h6.85zm-13.154.32l-2.773 3.601 4.514 2.28 1.38-4.568zm3.44 1.373l-1.425 4.72 4.713 8.332 4.714-8.332-1.426-4.72zm12.512 2.733L21 16.174l-4.205 7.433zm-10.047 9.524l-4.182-7.393-4.196-2.119zm-8.74-9.924l.033-.067-.043.056zm2.791-4.181L12.405 8h7.312l3.144 1.462L26 13.648 16 25 6 13.646zm9.201 5.372c.059.607-.192.972-.594 1.179.661.16 1.075.558.993 1.45-.1 1.106-.915 1.402-2.079 1.47v1.163h-.692v-1.147c-.18 0-.363-.002-.553-.006v1.153h-.691V18.93c-.162-.001-.327-.004-.495-.004h-.9l.137-.837s.512.008.503 0c.196 0 .248-.143.26-.232V16.02h.074a.55.55 0 00-.074-.005v-1.311c-.026-.143-.117-.307-.398-.308.009-.01-.502 0-.502 0v-.748h.954v.004c.144 0 .29-.003.44-.006v-1.151h.693v1.129c.184-.004.37-.008.552-.008v-1.12l.692-.001v1.151c.894.08 1.601.358 1.68 1.188zm-.968 2.49c0-.908-1.471-.771-1.94-.771v1.543c.469 0 1.94.098 1.94-.772zm-.322-2.177c0-.826-1.228-.7-1.618-.7v1.4c.39 0 1.618.092 1.618-.7z",
      fill: "#fff"
    }))));
  };

  var _default = SvgBcd;
  _exports["default"] = _default;
});