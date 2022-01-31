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
    global.$pac = mod.exports;
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

  var SvgPac = function SvgPac(props) {
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
      fill: "#F5EB16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.935 4C9.342 4.001 4 9.347 4 15.94c.001 6.592 5.347 11.936 11.94 11.935 6.592-.002 11.936-5.347 11.935-11.94A11.937 11.937 0 0015.935 4zm-4.847 5.23a.123.123 0 01.125-.12h4.973a6.98 6.98 0 013.027.628c.18.088.357.186.528.292l-3.237 1.853h-1.689a.123.123 0 00-.12.126v.932l-3.607 2.086V9.23zM9.749 19.708l-2.162-2.184 7.12-4.108v2.662a.123.123 0 00.125.12h1.017l-6.093 3.51h-.007zm10.662-2.03c-1.044.872-2.477 1.308-4.299 1.308h-1.297a.123.123 0 00-.123.123v2.688l-1.81 1.042-1.69.977-.107.06v-4.455l5.603-3.224a2.056 2.056 0 001.297-.513 1.74 1.74 0 00.318-.432l3.578-2.071c.06.328.09.66.089.994.004 1.463-.516 2.63-1.56 3.503zm-1.92-3.019c.024-.153.036-.309.037-.464a2.417 2.417 0 00-.563-1.674A1.823 1.823 0 0017.15 12l4.973-2.871 2.182 2.183-5.814 3.347z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgPac;
  _exports["default"] = _default;
});