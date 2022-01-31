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
    global.Bacs = mod.exports;
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

  var SvgBacs = function SvgBacs(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#E71C44",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.663 27.31a6.318 6.318 0 0 0 5.951-5.357l1.773-9.233H7.069L4.255 27.311h8.408Z",
      fill: "#E71C44"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m24.477 12.8-1.295 6.321h.04a4.139 4.139 0 0 1 3.444-1.993c2.148 0 2.957 1.772 2.957 3.503 0 2.98-2.167 6.683-6.098 6.683-1.722 0-3.018-.705-3.018-2.516a9.668 9.668 0 0 1 .16-1.51l2.129-10.487h1.681ZM22.35 23.329a4.22 4.22 0 0 0-.122 1.229c0 .924.527 1.45 1.582 1.45 2.532 0 4.071-3 4.071-5.155 0-1.208-.526-2.335-1.864-2.335-1.458 0-2.958 1.49-3.444 3.785l-.223 1.026ZM36.574 27.092c.032-.842.106-1.681.223-2.515h-.04a4.292 4.292 0 0 1-3.81 2.737 2.894 2.894 0 0 1-2.817-3.22 6.824 6.824 0 0 1 6.788-6.966c.893 0 1.78.128 2.635.383l-.992 5.073a22.08 22.08 0 0 0-.426 4.508h-1.56Zm1.095-8.494a4.58 4.58 0 0 0-1.177-.14c-2.532 0-4.6 2.636-4.62 5.333 0 1.088.385 2.155 1.682 2.155 1.4 0 3.06-1.813 3.547-4.41l.568-2.938ZM46.419 26.71a6.728 6.728 0 0 1-2.837.605 3.525 3.525 0 0 1-3.768-3.785 6.186 6.186 0 0 1 5.998-6.382 5.04 5.04 0 0 1 2.047.423l-.487 1.328a3.835 3.835 0 0 0-1.662-.362 4.548 4.548 0 0 0-4.154 4.79 2.302 2.302 0 0 0 2.43 2.598 5.192 5.192 0 0 0 2.272-.543l.16 1.328ZM6.778 22.645c-.536 0-1.07-.046-1.597-.139l1.822-9.45c3.584.086 6.453 2.199 6.453 4.793 0 2.649-2.99 4.796-6.678 4.796Zm3.365.495c3.264-.685 5.637-2.75 5.637-5.196 0-2.479-2.436-4.567-5.77-5.223h-.812c3.354.53 5.863 2.672 5.863 5.236 0 2.682-2.748 4.906-6.335 5.302.09-.003.181-.005.273-.01.39-.021.77-.058 1.144-.11Zm1.761-10.419c3.501.745 6.047 2.826 6.185 5.401.18 3.411-3.934 6.399-9.19 6.675a13.921 13.921 0 0 1-4.087-.375l-.558 2.89h8.41a6.315 6.315 0 0 0 5.95-5.359l1.773-9.232h-8.483Zm5.448 4.762c-.127-2.399-2.82-4.288-6.4-4.762h-.398c3.506.657 6.068 2.746 6.068 5.223a5.34 5.34 0 0 1-3.711 4.511c2.738-1.027 4.55-2.912 4.441-4.972ZM47.941 25.402c.642.373 1.366.58 2.108.604a1.688 1.688 0 0 0 1.863-1.59c0-.766-.344-1.23-1.358-1.792a2.91 2.91 0 0 1-1.761-2.476 3.22 3.22 0 0 1 3.545-3.02 4.103 4.103 0 0 1 2.047.483l-.466 1.268a3.53 3.53 0 0 0-1.703-.443 1.57 1.57 0 0 0-1.741 1.47c0 .704.466 1.147 1.336 1.63a3.068 3.068 0 0 1 1.844 2.556 3.346 3.346 0 0 1-3.75 3.222 4.468 4.468 0 0 1-2.43-.685l.466-1.227Z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgBacs;
  _exports["default"] = _default;
});