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
    global.Afterpay = mod.exports;
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

  var SvgAfterpay = function SvgAfterpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#B2FCE4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M53.34 16.893l-1.442-.83-1.443-.872a1.457 1.457 0 00-2.178 1.266v.177a.312.312 0 00.136.259l.68.38a.273.273 0 00.382-.108.258.258 0 000-.136v-.436a.286.286 0 01.272-.3h.164l1.36.777 1.362.762a.3.3 0 01.095.408l-.095.095-1.361.762-1.361.776a.286.286 0 01-.395-.095.325.325 0 010-.163v-.218a1.457 1.457 0 00-2.178-1.266l-1.47.844-1.443.83a1.47 1.47 0 00-.544 1.988c.125.23.314.419.544.544l1.443.83 1.47.83a1.455 1.455 0 002.178-1.265v-.177a.313.313 0 00-.136-.259l-.68-.395a.272.272 0 00-.382.11.313.313 0 000 .149v.436a.288.288 0 01-.164.272.287.287 0 01-.108.027.369.369 0 01-.163 0l-1.361-.776-1.362-.762a.3.3 0 01-.15-.381l.096-.095 1.361-.763 1.361-.775a.286.286 0 01.395.095.325.325 0 010 .163v.218a1.457 1.457 0 002.178 1.266l1.47-.844 1.442-.83a1.443 1.443 0 00.463-2.001c-.1-.207-.25-.384-.436-.517zm-9.5.245l-3.389 6.996H39.09l1.266-2.614-1.987-4.382h1.442l1.28 2.926 1.36-2.926h1.39zM9.963 19.615a1.361 1.361 0 100 .068v-.068zm0 2.49v-.653a2.027 2.027 0 01-1.58.735 2.437 2.437 0 01-2.381-2.49v-.082a2.477 2.477 0 012.382-2.573 2 2 0 011.551.722v-.626h1.212v4.967H9.963zm7.173-1.13c-.436 0-.545-.163-.545-.57v-2.151h.776v-1.076h-.776v-1.252H15.34v1.212h-1.633v-.504c0-.408.163-.572.599-.572h.272v-.966h-.585c-1.035 0-1.525.34-1.525 1.361v.667h-.694v1.13h.694v3.892h1.239v-3.892h1.633v2.436c0 1.02.381 1.456 1.361 1.456h.68v-1.17h-.244zm4.491-1.81a1.184 1.184 0 00-1.238-1.02 1.211 1.211 0 00-1.253 1.02h2.491zm-2.477.776a1.239 1.239 0 001.28 1.157 1.361 1.361 0 001.17-.64h1.28a2.436 2.436 0 01-2.478 1.73 2.45 2.45 0 01-2.613-2.274v-.3a2.572 2.572 0 015.145 0c.013.105.013.21 0 .314l-3.784.013zm11.787-.326a1.36 1.36 0 100 .068v-.068zm-3.934 4.519v-6.996h1.212v.64a2.028 2.028 0 011.579-.736 2.436 2.436 0 012.395 2.477v.096a2.475 2.475 0 01-2.382 2.572 1.96 1.96 0 01-1.51-.667v2.614h-1.294zm9.596-4.52a1.36 1.36 0 10-1.429 1.43h.068a1.361 1.361 0 001.361-1.361v-.068zm0 2.491v-.653a1.987 1.987 0 01-1.565.735 2.436 2.436 0 01-2.396-2.477v-.095a2.475 2.475 0 012.382-2.573 1.973 1.973 0 011.538.722v-.626h1.225v4.967H36.6zm-11.8-4.477a1.239 1.239 0 011.075-.586c.183-.004.364.033.53.11v1.279a1.565 1.565 0 00-.884-.232.871.871 0 00-.68.967v2.94h-1.267v-4.968H24.8v.49z",
      fill: "#000"
    })));
  };

  var _default = SvgAfterpay;
  _exports["default"] = _default;
});