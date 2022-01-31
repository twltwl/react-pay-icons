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
    global.Uma = mod.exports;
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

  var SvgUma = function SvgUma(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#FF4A4A",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19.328 18.981h-1.012a.346.346 0 01-.347-.347v-2.662l-1.772 1.106a.458.458 0 01-.488 0l-1.762-1.106v2.662c0 .188-.15.347-.347.347h-1.003a.346.346 0 01-.347-.347v-5.137a.46.46 0 01.46-.46c.093 0 .177.029.252.085l2.794 1.922a.323.323 0 00.385 0l2.793-1.922a.464.464 0 01.722.375v5.137a.33.33 0 01-.328.347zm-8.588-.009H4.46a.46.46 0 01-.46-.46v-5.165A.354.354 0 014.356 13H5.37c.187 0 .347.15.347.347v3.928h3.806v-3.928c0-.188.15-.347.347-.347h.984c.188 0 .347.15.347.347v5.166a.46.46 0 01-.46.459zM21.184 13h6.282a.46.46 0 01.459.46v5.165c0 .188-.15.347-.338.347h-1.012a.346.346 0 01-.347-.347v-3.703a.228.228 0 00-.225-.225h-3.347a.228.228 0 00-.225.225v3.703c0 .188-.15.347-.347.347h-1.012a.346.346 0 01-.347-.347v-5.166a.46.46 0 01.46-.459z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.819 15.784h1.003c.187 0 .347.15.347.347v1.022c0 .188-.15.347-.347.347h-1.003a.346.346 0 01-.347-.347v-1.031c0-.188.16-.338.347-.338z"
    })))));
  };

  var _default = SvgUma;
  _exports["default"] = _default;
});