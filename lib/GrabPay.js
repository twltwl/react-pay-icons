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
    global.GrabPay = mod.exports;
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

  var SvgGrabPay = function SvgGrabPay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0Z",
      fill: "#00B14F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 19.17v.523c0 3.142 1.222 5.934 3.316 8.029 2.094 2.094 4.887 3.316 7.854 3.316 2.443 0 4.538-.524 6.457-1.571 1.571-.873 2.095-1.745 2.27-1.92v-9.424H30.82v1.745h7.33v7.156c-.873.872-2.793 2.268-6.807 2.268-2.618 0-4.887-1.047-6.806-2.792-1.745-1.745-2.793-4.189-2.793-6.807v-.523c0-2.444 1.047-4.887 2.967-6.632 1.92-1.92 4.538-2.793 7.156-2.793 2.443 0 4.189.35 5.585 1.222V8.873C36.23 8.349 34.486 8 32.043 8 25.584 8 20 13.061 20 19.17Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37.627 14.283v-2.094c-1.57-.873-3.316-1.222-5.585-1.222-2.268 0-4.537.873-6.283 2.443-1.745 1.571-2.617 3.666-2.617 5.76v.523a8.193 8.193 0 0 0 8.202 8.203c3.665 0 5.062-1.222 5.585-1.57V21.09h-5.934v1.745h4.189v2.618c-.524.174-1.745.698-3.84.698-1.745 0-3.316-.698-4.537-1.92-1.222-1.222-1.92-2.792-1.92-4.538v-.523c0-3.49 3.316-6.458 7.155-6.458 2.618 0 4.364.35 5.585 1.571Z",
      fill: "#fff"
    })));
  };

  var _default = SvgGrabPay;
  _exports["default"] = _default;
});