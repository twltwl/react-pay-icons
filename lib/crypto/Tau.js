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
    global.Tau = mod.exports;
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

  var SvgTau = function SvgTau(props) {
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
      fill: "#7b346e",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.094 13.678l2.11 2.11H6zm2.11 2.55l-2.11 2.094L6 16.228zm2.852-2.853l-2.11 2.094v-4.203zm-2.55 2.094l-2.093-2.094 2.094-2.11zm2.854-2.413l-2.094-2.094h4.203zm0-4.643l2.109 2.109h-4.203zm4.962-.304l-2.11 2.094V6zm-2.55 2.094L13.678 8.11 15.772 6zm-2.716 8.437l-2.11 2.094v-4.203zm-4.643 0l2.094-2.109v4.203zm10.212-5.584l-2.094-2.094h4.203zm-2.094-2.534l2.094-2.11 2.11 2.11zM15.47 21.493l-2.11 2.094-2.093-2.094zm-2.11-2.55l2.11 2.11h-4.203zm10.228-5.568l-2.109 2.094v-4.203zm-4.643 0l2.094-2.11v4.204zm-5.266 10.53l2.094-2.108V26zm2.534-2.108l2.11 2.109L16.212 26zm2.413 1.79l-2.094-2.094h4.203zm0-4.643l2.11 2.11H16.53zm2.853-2.413l2.11 2.11-2.11 2.093zm-2.534 2.11l2.094-2.11v4.203zm4.947-.32l-2.094-2.093H26zm0-4.643L26 15.788h-4.203z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgTau;
  _exports["default"] = _default;
});