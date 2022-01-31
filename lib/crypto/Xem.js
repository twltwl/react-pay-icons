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
    global.Xem = mod.exports;
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

  var SvgXem = function SvgXem(props) {
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
      r: 16,
      fill: "#67B2E8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M6.145 11.954A19.83 19.83 0 016 9.636a20.035 20.035 0 014.152-1.779 20.221 20.221 0 016.262-.853c.568.011 1.39.074 2.014.141a6.005 6.005 0 00-3.065 4.19c-.06.314-.093.64-.104.988-.016.536-.068.958-.18 1.353a4.53 4.53 0 01-8.469.672 1.475 1.475 0 01-.1-.3 20.172 20.172 0 01-.365-2.094zm16.613 8.56c-.238.37-.49.73-.752 1.085a5.898 5.898 0 00-.73-2.89 5.933 5.933 0 00-2.146-2.263l-.09-.055a7.075 7.075 0 01-.149-.09c-1.137-.723-1.83-1.735-2.074-3.041A4.518 4.518 0 0120.2 8.041c.82-.198 1.63-.17 2.437.083.619.195 1.245.45 2.008.807.44.207.884.437 1.356.704a20.113 20.113 0 01-.452 4.148 20.147 20.147 0 01-2.79 6.731zm-3.037 3.673A20.522 20.522 0 0116.001 27a15.74 15.74 0 01-1.017-.639 20.375 20.375 0 01-7.288-8.722 5.882 5.882 0 002.42.785 6.027 6.027 0 003.614-.773 4.618 4.618 0 011.706-.569 4.52 4.52 0 014.902 3.206c.335 1.121.237 2.222-.283 3.307-.044.092-.082.166-.172.343l-.044.087a.581.581 0 01-.118.162z"
    }))));
  };

  var _default = SvgXem;
  _exports["default"] = _default;
});