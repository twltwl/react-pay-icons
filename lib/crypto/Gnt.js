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
    global.Gnt = mod.exports;
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

  var SvgGnt = function SvgGnt(props) {
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
      fill: "#001D57"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      fillRule: "nonzero",
      d: "M20.499 5.288l1.203 1.204-2.277 2.34c.48.73.738 1.591.738 2.479a4.448 4.448 0 01-1.258 3.131 4.183 4.183 0 01-2.217 1.226v2.039a4.273 4.273 0 012.213 1.22 4.451 4.451 0 011.262 3.136 4.451 4.451 0 01-1.262 3.135 4.262 4.262 0 01-3.07 1.302 4.24 4.24 0 01-3.07-1.302 4.474 4.474 0 01-1.261-3.135c0-1.18.448-2.299 1.258-3.132a4.183 4.183 0 012.217-1.225v-2.04a4.274 4.274 0 01-2.213-1.22A4.474 4.474 0 0111.5 11.31c0-1.18.448-2.299 1.262-3.135a4.262 4.262 0 013.07-1.303c.86 0 1.687.262 2.395.749L20.5 5.288zm-4.667 14.057a2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79 2.53 2.53 0 001.856-.79 2.751 2.751 0 00.775-1.927c0-.725-.275-1.402-.778-1.931a2.527 2.527 0 00-1.853-.787zm1.853-6.09a2.754 2.754 0 00.778-1.931 2.7 2.7 0 00-.775-1.928 2.578 2.578 0 00-1.856-.79 2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79c.711 0 1.367-.276 1.853-.786z"
    }))));
  };

  var _default = SvgGnt;
  _exports["default"] = _default;
});