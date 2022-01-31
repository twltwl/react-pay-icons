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
    global.CartesBancaires = mod.exports;
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

  var SvgCartesBancaires = function SvgCartesBancaires(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 40 26"
    }, props), /*#__PURE__*/React.createElement("linearGradient", {
      id: "a",
      x1: 2.75,
      x2: 37.25,
      y1: -4.25,
      y2: 30.25,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#289847"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.49,
      stopColor: "#1787b9"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#1d3564"
    })), /*#__PURE__*/React.createElement("mask", {
      id: "b",
      width: 14.02,
      height: 11.43,
      x: 6.94,
      y: 7.57,
      maskUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M6.94 19h14.02V7.57H6.94z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "url(#a)",
      d: "M0 0h40v26H0z"
    }), /*#__PURE__*/React.createElement("g", {
      mask: "url(#b)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M13.93 12.8h7.02a5.05 5.05 0 00-1.49-3.73c-1.28-1.1-3.51-1.5-5.51-1.5-2.08 0-4.38.44-5.67 1.62a5.42 5.42 0 00-1.34 4.1 5.77 5.77 0 001.67 4.33C9.88 18.71 11.95 19 13.95 19c1.94 0 4.04-.33 5.3-1.36a5.55 5.55 0 001.7-4.36h-7.02z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M21.42 13.28v5.46h9.76a2.7 2.7 0 002.56-2.7 2.77 2.77 0 00-2.56-2.77zm12.15-2.98a2.48 2.48 0 00-2.5-2.5 3.06 3.06 0 00-.31-.01h-9.34v5.01h9.84a2.52 2.52 0 002.3-2.5"
    })));
  };

  var _default = SvgCartesBancaires;
  _exports["default"] = _default;
});