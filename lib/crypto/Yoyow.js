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
    global.Yoyow = mod.exports;
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

  var SvgYoyow = function SvgYoyow(props) {
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
      fill: "#21a5de",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.49 16.575c.34.364.546.849.546 1.381 0 1.129-.928 2.044-2.072 2.044-1.143 0-2.07-.915-2.07-2.044 0-.532.206-1.017.544-1.381A.743.743 0 0117.243 16a.72.72 0 01.157-.45c-.369.334-.86.538-1.4.538s-1.031-.204-1.4-.538a.72.72 0 01.157.45c0 .403-.33.73-.74.73a.743.743 0 01-.455-.155c.338.364.545.849.545 1.381 0 1.129-.928 2.044-2.071 2.044-1.144 0-2.072-.915-2.072-2.044 0-.532.207-1.017.545-1.381A.743.743 0 019.314 16a.72.72 0 01.157-.45c-.369.334-.86.538-1.4.538-1.144 0-2.071-.915-2.071-2.044S6.927 12 8.071 12c1.144 0 2.071.915 2.071 2.044a2.02 2.02 0 01-.545 1.381.743.743 0 011.196.575.72.72 0 01-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 01-.158-.45.743.743 0 111.196-.575 2.022 2.022 0 01-.545-1.381c0-1.129.927-2.044 2.071-2.044s2.071.915 2.071 2.044a2.02 2.02 0 01-.545 1.381.743.743 0 011.196.575.72.72 0 01-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 01-.158-.45.743.743 0 111.196-.575 2.022 2.022 0 01-.545-1.381c0-1.129.927-2.044 2.071-2.044S26 12.915 26 14.044s-.927 2.044-2.071 2.044c-.54 0-1.031-.204-1.4-.538a.72.72 0 01.157.45c0 .403-.33.73-.74.73a.743.743 0 01-.455-.155z",
      fill: "#fff"
    }))));
  };

  var _default = SvgYoyow;
  _exports["default"] = _default;
});