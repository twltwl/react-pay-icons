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
    global.Unity = mod.exports;
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

  var SvgUnity = function SvgUnity(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#f58634",
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#fff",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.288 22.732h.004c1.189-.144 2.189-.504 3-1.08 1.074-.77 1.611-1.748 1.611-2.934 0-1-.393-1.837-1.178-2.522-.787-.683-1.853-1.098-3.198-1.242-.457-.059-1.105-.102-1.937-.15-1.814-.11-2.991-.358-3.537-.747a1.742 1.742 0 01-.48-.522 1.236 1.236 0 01-.156-.61c0-.561.324-1.035.977-1.408.652-.372 1.476-.562 2.478-.562.949 0 1.89.162 2.78.48 3.826 1.364 7.48 6.132 9.913 9.546-1.983 1.205-4.684 1.948-7.66 1.948-.876 0-1.751-.065-2.617-.197zM9.009 20.79c-3.493-1.275-5.022-4.426-3.297-7.486.048.43.207.843.463 1.2.32.449.79.814 1.407 1.101 2.155.936 6.118.338 7.75 1.527.549.4.824.911.824 1.534 0 .783-.383 1.424-1.149 1.922-.765.498-1.761.747-2.987.747a8.86 8.86 0 01-3.01-.545z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.912 18.875v-5.854c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461c-2.343-3.326-5.844-7.511-10.147-8.909a10.616 10.616 0 00-2.293-.477A16.87 16.87 0 0115.905 9c3.34 0 6.335.936 8.358 2.415z",
      opacity: 0.5
    })))));
  };

  var _default = SvgUnity;
  _exports["default"] = _default;
});