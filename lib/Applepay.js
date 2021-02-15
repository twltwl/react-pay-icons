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
    global.Applepay = mod.exports;
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

  var SvgApplepay = function SvgApplepay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 40 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M36.418 0H3.172l-.346.006a4.949 4.949 0 00-.752.067 2.513 2.513 0 00-.715.24A2.402 2.402 0 00.308 1.38c-.117.232-.19.47-.236.726-.045.252-.06.51-.066.764-.003.117-.005.234-.005.35L0 3.637V22.78c.001.117.003.234.006.35.007.255.021.512.066.764.045.256.12.494.236.726a2.427 2.427 0 001.766 1.307c.248.045.501.06.752.067.115.003.23.004.346.005l.41.001h32.836l.41-.001c.115 0 .23-.002.346-.005.25-.007.504-.022.752-.067.252-.046.486-.121.715-.24a2.44 2.44 0 001.051-1.067c.117-.232.19-.47.236-.726a5.13 5.13 0 00.066-.763c.003-.117.004-.234.005-.351l.001-.417V3.637l-.001-.417c0-.116-.002-.233-.005-.35a5.132 5.132 0 00-.066-.764 2.58 2.58 0 00-.236-.726A2.445 2.445 0 0038.641.313a2.516 2.516 0 00-.715-.24 4.963 4.963 0 00-.752-.067c-.116-.003-.231-.004-.346-.005L36.418 0z",
      fill: "#000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.418.867h.404c.11.001.219.002.329.005.191.006.415.016.624.054.181.033.333.084.48.16a1.546 1.546 0 01.677.688c.074.147.123.3.156.486.037.21.047.438.053.633a56.03 56.03 0 01.006.744v18.726c0 .137 0 .273-.002.413 0 .11-.002.22-.005.331a4.361 4.361 0 01-.053.635 1.697 1.697 0 01-.156.485 1.566 1.566 0 01-1.155.847c-.213.038-.446.049-.622.054-.11.002-.22.004-.333.004l-.403.001H3.176l-.327-.005a4.28 4.28 0 01-.624-.054 1.66 1.66 0 01-.48-.16 1.56 1.56 0 01-.677-.688 1.72 1.72 0 01-.156-.486 4.351 4.351 0 01-.053-.633 16.446 16.446 0 01-.005-.332V3.226c0-.11.002-.222.005-.333.005-.194.015-.421.053-.634.033-.184.082-.338.157-.487A1.563 1.563 0 012.225.926c.209-.038.433-.048.625-.054.109-.003.218-.004.327-.005h33.241",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.92 8.613c.342-.429.575-1.004.513-1.592-.501.025-1.113.331-1.467.76-.318.367-.6.966-.526 1.53.563.048 1.125-.282 1.48-.698zM11.427 9.42c-.817-.048-1.512.464-1.903.464-.39 0-.988-.439-1.634-.427-.842.012-1.623.488-2.05 1.245-.878 1.513-.231 3.759.623 4.991.414.61.914 1.282 1.573 1.258.622-.025.866-.403 1.622-.403.756 0 .976.403 1.635.39.683-.012 1.11-.61 1.525-1.22.475-.695.67-1.367.682-1.404-.012-.012-1.317-.512-1.329-2.014-.012-1.256 1.025-1.854 1.073-1.891-.585-.866-1.5-.964-1.817-.989zM18.543 7.72c1.777 0 3.014 1.224 3.014 3.007 0 1.789-1.263 3.02-3.058 3.02h-1.967v3.128H15.11V7.719h3.432zm-2.011 4.834h1.63c1.238 0 1.942-.666 1.942-1.82 0-1.155-.704-1.815-1.935-1.815h-1.637v3.635zM21.928 14.978c0-1.168.895-1.885 2.48-1.973l1.828-.108v-.514c0-.742-.501-1.187-1.339-1.187-.793 0-1.288.381-1.408.978h-1.294c.076-1.206 1.103-2.094 2.753-2.094 1.618 0 2.652.856 2.652 2.195v4.6h-1.313v-1.098h-.032c-.387.743-1.23 1.212-2.106 1.212-1.307 0-2.221-.812-2.221-2.011zm4.308-.603v-.527l-1.643.102c-.819.057-1.282.419-1.282.99 0 .583.482.964 1.218.964.958 0 1.707-.66 1.707-1.529zM28.84 19.33v-1.11c.101.025.33.025.444.025.634 0 .977-.266 1.186-.951 0-.013.12-.406.12-.413l-2.41-6.68h1.484l1.688 5.43h.025l1.688-5.43h1.447l-2.5 7.023c-.57 1.618-1.23 2.138-2.614 2.138-.114 0-.457-.013-.558-.032z",
      fill: "#000"
    })));
  };

  var _default = SvgApplepay;
  _exports["default"] = _default;
});