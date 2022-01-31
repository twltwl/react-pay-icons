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
    global.Ae = mod.exports;
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

  var SvgAe = function SvgAe(props) {
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
      fill: "#DE3F6B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      fillRule: "nonzero",
      d: "M9.752 11h.904c1.413.134 2.72.821 3.687 1.81 2.009 2.039 3.113 4.916 5.67 6.433 1.848 1.097 4.433.2 5.341-1.654.462-.008.927-.008 1.389-.006-.636 1.883-2.489 3.236-4.515 3.417h-.746c-1.247-.1-2.46-.564-3.403-1.366-1.37-1.123-2.25-2.664-3.315-4.036-.916-1.213-1.85-2.577-3.366-3.128-1.873-.679-4.16.383-4.843 2.187-.6 1.486-.112 3.328 1.23 4.28 1.006.752 2.407 1.033 3.615.595 1.342-.468 2.338-1.532 3.102-2.66.301.417.594.84.884 1.266-1.188 1.447-2.836 2.69-4.796 2.862h-.803C7.317 20.834 5.17 18.804 5 16.406v-.785c.16-2.393 2.28-4.447 4.752-4.621zm11.68 0h.75c2.493.157 4.613 2.228 4.818 4.626v1.23c-2.057.018-4.116.006-6.173.008.002-.36.002-.717 0-1.077 1.626-.004 3.25.007 4.873-.004-.115-.636-.264-1.287-.654-1.826-.95-1.404-2.959-1.978-4.565-1.37-1.28.46-2.244 1.466-2.987 2.54-.286-.397-.57-.8-.845-1.206 1.173-1.468 2.81-2.738 4.783-2.921z"
    }))));
  };

  var _default = SvgAe;
  _exports["default"] = _default;
});