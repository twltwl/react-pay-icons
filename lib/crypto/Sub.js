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
    global.Sub = mod.exports;
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

  var SvgSub = function SvgSub(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#E53431"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M12.117 5.314a.24.24 0 01.15-.05.25.25 0 01.15.05l1.257.942a.25.25 0 11-.301.4l-1.106-.827L8.67 8.526l15.8 11.854a.252.252 0 010 .403l-1.161.87a.25.25 0 01-.3-.402l.893-.67L8.101 8.729a.248.248 0 010-.4l4.016-3.014zm4.017 0a.247.247 0 01.3-.002l8.035 6.027a.246.246 0 01.086.279.249.249 0 01-.237.172h-4.017a.255.255 0 01-.15-.05l-5.273-3.954a.25.25 0 11.301-.402l5.207 3.904h3.179l-7.28-5.46-5.04 3.78a.25.25 0 11-.301-.402l5.19-3.892zM9.21 10.509a.252.252 0 01.3.402l-.841.63L24.47 23.395a.25.25 0 010 .402l-4.017 3.013a.253.253 0 01-.3 0l-1.163-.872a.251.251 0 01.303-.402l1.01.757 3.6-2.7L8.098 11.742a.253.253 0 010-.402l1.11-.83zm-.959 9.819v.002h4.015a.24.24 0 01.15.05l5.216 3.911a.25.25 0 11-.3.402l-5.146-3.861H9.005l7.281 5.46 5.03-3.772a.251.251 0 01.302.402l-5.181 3.884a.25.25 0 01-.15.05.246.246 0 01-.151-.05l-8.037-6.025a.251.251 0 11.152-.453z"
    }))));
  };

  var _default = SvgSub;
  _exports["default"] = _default;
});