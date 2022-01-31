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
    global.Pink = mod.exports;
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

  var SvgPink = function SvgPink(props) {
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
      fill: "#ed79aa",
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M23.452 8.929l-1.87 1.883a7.238 7.238 0 00-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 016.5 16c0-5.523 4.446-10 9.93-10a9.865 9.865 0 017.022 2.929zm0 14.142A9.865 9.865 0 0116.592 26v-2.664a7.238 7.238 0 004.99-2.147z",
      opacity: 0.5
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.681 24.784v-9.11h.007C11.828 13.069 13.97 11 16.592 11c2.712 0 4.911 2.214 4.911 4.946 0 2.731-2.199 4.945-4.91 4.945a4.862 4.862 0 01-2.483-.677v5.511a9.822 9.822 0 01-2.429-.94zm4.911-6.338a2.491 2.491 0 002.483-2.5c0-1.381-1.112-2.5-2.483-2.5a2.491 2.491 0 00-2.482 2.5c0 1.38 1.111 2.5 2.482 2.5z"
    })))));
  };

  var _default = SvgPink;
  _exports["default"] = _default;
});