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
    global.SantanderTransparent = mod.exports;
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

  var SvgSantanderTransparent = function SvgSantanderTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 240.5 45.5"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M31.5 19.5c-.1-1.5-.5-3-1.3-4.3L23.4 3.3c-.5-.9-.9-1.9-1.1-2.9l-.3.5c-1.7 2.9-1.7 6.6 0 9.5l5.5 9.5c1.7 2.9 1.7 6.6 0 9.5l-.3.5c-.2-1-.6-2-1.1-2.9l-5-8.7-3.2-5.6c-.5-.9-.9-1.9-1.1-2.9l-.3.5c-1.7 2.9-1.7 6.5 0 9.5l5.5 9.5c1.7 2.9 1.7 6.6 0 9.5l-.3.5c-.2-1-.6-2-1.1-2.9l-6.9-11.9c-.9-1.6-1.3-3.4-1.3-5.2C5.1 21.2 0 25.3 0 30c0 6.6 9.8 11.9 21.9 11.9 12.1 0 21.9-5.3 21.9-11.9.1-4.5-4.9-8.6-12.3-10.5zm20.7 20.3c.1-1.7.3-2.8.8-4.2 2.3 1.1 5.3 1.6 7.5 1.6 3.8 0 6-1.2 6-3.7 0-2.4-1.6-3.5-5.4-5.2l-2.1-.8c-3.9-1.7-6.5-3.9-6.5-8.2 0-4.7 3.3-7.7 9.9-7.7 2.7 0 5.2.4 7.5 1.2-.1 1.6-.4 2.9-.8 4.1-2.2-.8-4.9-1.2-6.8-1.2-3.6 0-5.2 1.4-5.2 3.6 0 2.1 1.6 3.4 4.5 4.6l2.2.9c5.2 2.2 7.4 4.6 7.4 8.6 0 4.7-3.6 8-10.6 8-3.3 0-6.1-.5-8.4-1.6zm41.1-19.7v20.6h-4.2l-.2-2.5c-1.2 1.8-2.9 3-5.8 3-5.4 0-9.1-4-9.1-10.9 0-7.2 3.9-11.4 11.5-11.4 3 .1 5.5.4 7.8 1.2zM88.8 36V23.1c-.9-.2-2-.2-3.3-.2-4.7 0-6.9 2.9-6.9 7.5 0 4.2 1.7 7.2 5.7 7.2 1.9-.1 3.3-.7 4.5-1.6zm27.7-9.1v13.8H112v-13c0-3.3-1.1-4.8-5.6-4.8-1.1 0-2.3.1-3.6.3v17.5h-4.5V20.1c2.9-.7 6.1-1.2 8.2-1.2 7.6.1 10 3 10 8zm12.6 10.5c1.3 0 2.6-.2 3.5-.6-.1 1.2-.3 2.6-.5 3.8-1.2.5-2.6.7-3.8.7-4.4 0-7.2-2-7.2-7V12.6c1.4-.5 3.1-.7 4.5-.7v7.8h7.2c-.1 1.4-.2 2.7-.4 3.9h-6.8v10.1c0 2.6 1.3 3.7 3.5 3.7zm24.3-17.3v20.6h-4.2l-.2-2.5c-1.2 1.8-2.9 3-5.8 3-5.4 0-9.1-4-9.1-10.9 0-7.2 3.9-11.4 11.5-11.4 3 .1 5.4.4 7.8 1.2zM148.8 36V23.1c-.9-.2-2-.2-3.3-.2-4.7 0-6.9 2.9-6.9 7.5 0 4.2 1.7 7.2 5.7 7.2 1.9-.1 3.4-.7 4.5-1.6zm27.8-9.1v13.8H172v-13c0-3.3-1.1-4.8-5.6-4.8-1.1 0-2.3.1-3.6.3v17.5h-4.5V20.1c2.9-.7 6.1-1.2 8.2-1.2 7.6.1 10.1 3 10.1 8zm22.9-15v28.8h-4.2l-.2-2.6c-1.2 1.9-2.9 3.1-5.9 3.1-5.4 0-9.1-4-9.1-10.9 0-7.2 3.9-11.4 11.5-11.4 1.2 0 2.3.1 3.4.3v-6.8c1.4-.4 3-.5 4.5-.5zM195 36V23.3c-1.2-.2-2.4-.4-3.6-.4-4.5 0-6.6 2.8-6.6 7.5 0 4.2 1.7 7.2 5.7 7.2 1.8-.1 3.3-.7 4.5-1.6zm27.3-4.1h-14.5c.6 3.7 2.7 5.4 6.8 5.4 2.5 0 5-.5 7.2-1.6-.2 1.2-.4 2.8-.7 4.1-2.1.9-4.2 1.3-6.7 1.3-7.6 0-11.2-4.2-11.2-11.2 0-6.1 2.8-11 10-11 6.5 0 9.3 4.2 9.3 9.4 0 1.4 0 2.4-.2 3.6zm-14.5-3.8H218c0-3.4-1.8-5.4-4.9-5.4-3.3.1-5 1.9-5.3 5.4zm30.4-8.9c0 1.4-.2 3-.4 3.9-1.1-.1-2.1-.2-3.4-.2-1.1 0-2.2.1-3.3.2v17.6h-4.5V20.1c1.9-.7 5.2-1.2 7.7-1.2 1.3.1 2.9.1 3.9.3z",
      fill: "#ea1d25"
    })));
  };

  var _default = SvgSantanderTransparent;
  _exports["default"] = _default;
});