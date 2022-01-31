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
    global.Agrs = mod.exports;
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

  var SvgAgrs = function SvgAgrs(props) {
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
      fill: "#f49e00",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.755 17.334C22.001 13.815 23.75 8 23.75 8l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 23.267v-.973c-4.868.132-5.245-4.959-5.245-4.959m-4.739 3.659a2.369 2.369 0 01-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 01-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 011.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgAgrs;
  _exports["default"] = _default;
});