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
    global.Chat = mod.exports;
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

  var SvgChat = function SvgChat(props) {
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
      fill: "#1C98F7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M16.28 23.325a11.45 11.45 0 002.084-.34 5.696 5.696 0 002.602.17.627.627 0 01.104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 01.311-.531c.258-.146.498-.314.717-.499.864-.732 1.352-1.708 1.352-2.742 0-.347-.055-.684-.159-1.006.261-.487.472-.999.627-1.53A4.59 4.59 0 0126 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 01-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 00-1.2-.81 2.986 2.986 0 00-.368-.187c-.34.051-.688.077-1.039.077-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12 5.2 0 9.458 3.607 9.458 8.12 0 4.514-4.259 8.121-9.458 8.121-.584 0-1.162-.045-1.728-.135-.245.058-1.224.64-2.635 1.67-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 01-1.044-.765zm4.949.666c.043 0 .087.003.13.01.51.086 1.034.13 1.564.13 4.392 0 7.907-2.978 7.907-6.589 0-3.61-3.515-6.588-7.907-6.588-4.39 0-7.907 2.978-7.907 6.588 0 1.746.821 3.39 2.273 4.62.365.308.766.588 1.196.832.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104zm-2.337-4.916c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226z"
    }))));
  };

  var _default = SvgChat;
  _exports["default"] = _default;
});