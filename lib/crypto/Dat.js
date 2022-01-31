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
    global.Dat = mod.exports;
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

  var SvgDat = function SvgDat(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#2d9cdb",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.054 5.606c.392 0 .708.12.947.359s.358.554.358.947v11.674c0 1.33-.315 2.543-.947 3.635a6.882 6.882 0 01-2.534 2.56c-1.058.614-2.244.921-3.559.921-1.314 0-2.517-.307-3.61-.921a6.882 6.882 0 01-2.534-2.56c-.614-1.092-.921-2.304-.921-3.635s.281-2.535.845-3.61c.58-1.092 1.365-1.946 2.355-2.56 1.007-.614 2.125-.922 3.353-.922a6.306 6.306 0 014.941 2.33V6.912c0-.393.12-.708.359-.947a1.33 1.33 0 01.947-.359zm-5.735 17.792c.854 0 1.622-.204 2.304-.614a4.468 4.468 0 001.639-1.74c.392-.735.589-1.554.589-2.458s-.197-1.716-.59-2.432a4.287 4.287 0 00-1.638-1.716c-.682-.426-1.45-.64-2.304-.64-.853 0-1.63.214-2.33.64a4.528 4.528 0 00-1.638 1.716c-.392.716-.588 1.527-.588 2.432s.196 1.723.588 2.457a4.73 4.73 0 001.639 1.741c.7.41 1.476.614 2.33.614z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgDat;
  _exports["default"] = _default;
});