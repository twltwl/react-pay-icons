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
    global.Pre = mod.exports;
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

  var SvgPre = function SvgPre(props) {
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
      r: 16,
      fill: "#3A8CBD"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.47 18.045h1.678a3.23 3.23 0 001.387-.308c.41-.203.776-.484 1.077-.828.299-.356.53-.763.684-1.201a3.92 3.92 0 00.248-1.388 3.393 3.393 0 00-.27-1.346 4.143 4.143 0 00-.724-1.18 3.636 3.636 0 00-1.098-.848 2.974 2.974 0 00-1.384-.332h-4.41v10.703h2.816l-.004-3.272zm0-4.846h1.427a.77.77 0 01.518.249c.166.165.27.456.27.911s-.103.725-.25.872c-.123.145-.289.248-.475.248h-1.49V13.2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.023 8.03v15.888c0 .57.461 1.03 1.03 1.03h15.888c.569 0 1.03-.46 1.03-1.03V8.03a1.03 1.03 0 00-1.03-1.031H8.053a1.03 1.03 0 00-1.03 1.03zm14.803 14.804h-11.68a1.03 1.03 0 01-1.031-1.03v-11.68a1.03 1.03 0 011.031-1.031h11.68c.57 0 1.03.461 1.03 1.03v11.68c0 .57-.46 1.031-1.03 1.031z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.733 19.309h6.607v2.03h-6.607z"
    })))));
  };

  var _default = SvgPre;
  _exports["default"] = _default;
});