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
    global.Hodl = mod.exports;
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

  var SvgHodl = function SvgHodl(props) {
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
      fill: "#D59143"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.973 16.453c-.518.412-.98 1.144-.957 2.263.017.774.433 1.304.957 1.664v1.382c0 .864.42 1.673 1.128 2.168l4.853 3.319V10.29l-5.981 1.75v4.413zm1.303-.408c1.007.737 1.007 5.116 1.007 5.116s-1.139-.11-2.08-.636c.776.261 1.399.203 1.67.233l.018.001h.004l.014.002.038.003.013.002h.013s.16-3.822-.997-4.492c-.188-.065-.52-.027-.886.09.466-.314.953-.42 1.186-.319zm5.097 6.904h3.263v4.306h-3.262V22.95zm-.74-12.98l-5.66 1.622V5.52a.51.51 0 01.87-.362l5.08 5.1-.29-.29zm.74 6.071h3.263v6.494h-3.262V16.04zm3.993-6.07l-.21.21 5-5.02a.51.51 0 01.871.36v6.07l-5.66-1.62zm-3.992.321h3.262v5.33h-3.262v-5.33zm9.653 6.162V12.04l-5.971-1.746v16.961l4.843-3.325a2.647 2.647 0 001.128-2.167V20.38c.524-.36.94-.89.957-1.664.024-1.119-.439-1.851-.957-2.263zm-1.96 4.374h.013l.012-.001.017-.002h.004l.035-.003h.002l.016-.002.149-.017h.007c.326-.042.726-.038 1.34-.23l.136-.045c-.942.526-2.08.636-2.08.636s0-4.378 1.007-5.115c.233-.102.72.004 1.185.32-.366-.117-.697-.155-.886-.09-1.157.669-.958 4.55-.958 4.55z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgHodl;
  _exports["default"] = _default;
});