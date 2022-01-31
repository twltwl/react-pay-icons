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
    global.Wtc = mod.exports;
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

  var SvgWtc = function SvgWtc(props) {
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
      fill: "#8200FF",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M18.414 13.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 01-.836-.492.662.662 0 01-.02-.164V11.52c0-.31.215-.58.522-.656l3.448-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58l-2.074.508a.69.69 0 01-.836-.492.662.662 0 01-.021-.164V11.52c0-.31.215-.58.522-.656l3.449-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.45zm10.867-2.239l3.448-.844a.69.69 0 01.836.491.653.653 0 01.021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V11.54c0-.31.215-.58.522-.655z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z",
      opacity: 0.504
    }))));
  };

  var _default = SvgWtc;
  _exports["default"] = _default;
});