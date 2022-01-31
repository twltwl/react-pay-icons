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
    global.Green = mod.exports;
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

  var SvgGreen = function SvgGreen(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      id: "green_svg__Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 80.5 26.8",
      style: {
        enableBackground: "new 0 0 80.5 26.8"
      },
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".green_svg__st0{fill:#8cbc06}"), /*#__PURE__*/React.createElement("path", {
      className: "green_svg__st0",
      d: "M10.2 17.2c-3.6 0-6.4-2.9-6.4-6.6S6.7 4 10.2 4s6.4 2.9 6.4 6.6c.1 3.7-2.8 6.6-6.4 6.6zm0-16.7C4.6.5.2 4.9.2 10.6s4.4 10.1 10 10.1 10-4.4 10-10.1S15.8.5 10.2.5M61.5 10.3c0-5.4-4.4-9.8-9.6-9.8-5.4 0-9.7 4.4-9.7 10 0 2.6 1 5.2 2.8 7.1s4.3 3 6.8 3c2.9 0 7.1-1.4 9-5.5l.1-.1H57c-1.1 1.3-3.1 2.1-5 2.1-2.4 0-5.3-1.6-6.1-5.2h15.6c-.1-.4 0-1.1 0-1.6zM45.9 8.7c.5-2.4 2.8-4.8 5.9-4.8 3.1 0 5.4 2.4 5.9 4.8H45.9zM31.2 3.8c-3.5 0-5.3 1.9-5.3 5.7v11.1h-3.6V9.2c0-2 .4-3.4 1.2-4.7 1-1.5 3.2-4 7.7-4s6.8 2.5 7.7 4c.8 1.3 1.2 2.7 1.2 4.7v11.4h-3.6V9.4c0-3.7-1.8-5.6-5.3-5.6M80.3.5l-7.6 18.7-1.9 4.6-1 2.6H66l2.9-7.2L61.1.5h4l5.7 14.1L76.5.5h3.8z"
    })));
  };

  var _default = SvgGreen;
  _exports["default"] = _default;
});