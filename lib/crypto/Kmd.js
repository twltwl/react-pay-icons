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
    global.Kmd = mod.exports;
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

  var SvgKmd = function SvgKmd(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 96 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z",
      fill: "#2B6680"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15 48a33 33 0 1066 .127v-.253a33.175 33.175 0 00-.903-7.541 3.54 3.54 0 10-6.886 1.64 25.934 25.934 0 11-19.197-19.186 3.54 3.54 0 001.64-6.886A32.996 32.996 0 0015 48"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64.68 23.862c-.048.045-.079.098-.124.146a5.218 5.218 0 00-1.402 3.12v.561c0 .13-.028.255-.042.384a9.425 9.425 0 01-12.235 8.053 12.14 12.14 0 00-11.148 2.91c-.12.112-.252.207-.37.325A12.21 12.21 0 0056.627 56.63c.505-.512.963-1.07 1.368-1.665a12.205 12.205 0 001.868-9.813 9.374 9.374 0 01-.18-.665c0-.033-.02-.064-.028-.098a9.428 9.428 0 018.397-11.515c.07 0 .138-.02.208-.022.199 0 .398-.023.597-.023h.048a5.224 5.224 0 003.224-1.517c.205-.212.392-.441.56-.684a5.26 5.26 0 00-8.007-6.762"
    }))));
  };

  var _default = SvgKmd;
  _exports["default"] = _default;
});