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
    global.Max = mod.exports;
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

  var SvgMax = function SvgMax(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#2D4692",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.988 14.617c0-.798-.21-1.425-.652-1.896-.454-.484-.946-.732-1.475-.732h-4.093V9.818h5.708s.467-.17.467-.929c0-.758-.467-.889-.467-.889H8.467S8 8.131 8 8.89c0 .758.467.928.467.928h5.785v2.17h-4.094c-.528 0-1.02.25-1.475.733-.43.471-.652 1.099-.652 1.896l-.012 6.578s-.012 1.334.811 2.053c.7.615 1.758.51 1.758.51h1.684c.197 0 .59-.314.59-.85 0-.903-.688-.994-.688-.994h-1.45c-1.034 0-.996-1.007-.996-1.007v-5.91c0-.785.393-1.178 1.155-1.178h3.369v10.567s.049.614.651.614h.651V13.82h.91V25h.652c.602 0 .651-.614.651-.614V13.819h3.369c.774 0 1.156.393 1.156 1.177v5.911s.036 1.007-.996 1.007h-1.451s-.688.091-.688.994c0 .536.393.85.59.85h1.684s1.045.105 1.758-.51c.823-.72.811-2.053.811-2.053l-.012-6.578zm-7.511-2.59h-.922v-2.21h.922v2.21z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgMax;
  _exports["default"] = _default;
});