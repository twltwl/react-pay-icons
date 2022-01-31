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
    global.Gin = mod.exports;
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

  var SvgGin = function SvgGin(props) {
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
      fill: "#008DDE"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M24.029 17.326a.727.727 0 100-1.453h-1.66v-1.642h3.471a.727.727 0 100-1.453h-3.485a3.536 3.536 0 00-2.934-3.168V7.861a.727.727 0 10-1.453 0v1.7h-1.642V5.74a.727.727 0 10-1.453 0v3.82H13.23v-1.7a.727.727 0 00-1.453 0v1.75a3.536 3.536 0 00-2.934 3.168H4.74a.727.727 0 100 1.453h4.09v1.642H7.17a.727.727 0 100 1.453h1.66v1.642H5.667a.727.727 0 100 1.453h3.176a3.536 3.536 0 002.934 3.168v1.13a.727.727 0 101.453 0v-1.081h1.642v3.291a.727.727 0 001.453 0v-3.291h1.642v1.7a.727.727 0 101.453 0V23.59a3.536 3.536 0 002.934-3.168h4.811a.727.727 0 100-1.453H22.37v-1.642h1.659zm-2.82 2.782a2.372 2.372 0 01-2.37 2.37h-6.48a2.372 2.372 0 01-2.37-2.37V13.09a2.372 2.372 0 012.37-2.37h6.48a2.372 2.372 0 012.37 2.37v7.017z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.901 12.435a8.335 8.335 0 00-.841.029c-.442.05-.767.45-.781.884-.022.984-.004 1.97-.01 2.954.014.502-.034 1.01.04 1.507.071.444.505.73.936.729 1.34.009 2.68.003 4.02.004v.555H12.95l-.555 1.665h4.294c.502-.014 1.009.034 1.507-.039.444-.071.729-.505.728-.936.01-1.753.002-3.506.005-5.26-.016-.47.041-.949-.054-1.413-.101-.473-.608-.706-1.056-.677h-3.076c-.28.005-.562-.001-.843-.003zm.033 1.667h3.33v2.775h-3.33v-2.775z"
    })))));
  };

  var _default = SvgGin;
  _exports["default"] = _default;
});