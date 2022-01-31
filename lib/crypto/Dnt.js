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
    global.Dnt = mod.exports;
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

  var SvgDnt = function SvgDnt(props) {
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
      fill: "#2c398f",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.075 19.1a2.338 2.338 0 001.425-.577c-.551 2.816-2.091 5.587-4.734 7.11-2.022 1.178-4.55 1.57-7.008 1.27-.368-1.062-1.333-2.193-3.01-3.047-2.643-1.362-3.884-3.717-5.01-2.563-.104.1-.19.217-.253.346a4.353 4.353 0 01-.138-.323c-2.16-5.356 0-10.736 4.32-14.591 2.574-2.286 5.584-2.032 8.273-.785a1.362 1.362 0 00-.506 1.085v5.402a5.435 5.435 0 00-6.944 1.258 5.498 5.498 0 00.104 7.088 5.435 5.435 0 006.978 1.051 1.398 1.398 0 002.666-.6V7.302c2.068 1.454 3.722 3.301 4.48 4.571.37.638.634 1.332.782 2.055-.325-.24-.704-.4-1.103-.462-.85-.046-1.494 1.109-1.057 2.77.368 1.502-.092 2.818.735 2.864zm-10.363.092c-2.896-1.662-.46-5.933 2.436-4.271.873.485.965 2.032.804 3.024-.299 1.709-1.907 2.009-3.24 1.247zm1.356-11.036c-.644.023-1.103.808-1.08 1.155.022.346.505.554 1.171.323.598-.208 1.15-.07 1.126-.416-.023-.346-.597-1.085-1.217-1.062z",
      fill: "#fff"
    }))));
  };

  var _default = SvgDnt;
  _exports["default"] = _default;
});