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
    global.Mnz = mod.exports;
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

  var SvgMnz = function SvgMnz(props) {
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
      fill: "#7F368A"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M25.569 21.316c.065.263-.197.394-.394.329h-3.278c-.197 0-.328-.066-.46-.132-.196-.066-.327-.328-.393-.591v-.066L17.962 9.49c-.065 0-.262.197-.328.197-.065.065-.197.131-.262.065-.131-.065-.197-.262-.131-.394.13-.328.459-.526.787-.591.393-.066.721-.066 1.114-.066h2.427c.196 0 .393 0 .59.066.197.131.262.394.328.591.13.46.196.92.328 1.38l1.573 5.914.59 2.365c.197.723.46 1.512.59 2.3zm-7.607 0c.066.263-.197.394-.393.329H14.29c-.197 0-.328-.066-.46-.132-.196-.066-.327-.328-.393-.591v-.066L10.356 9.49c-.066 0-.263.197-.328.197-.066.065-.197.131-.263.065-.13-.065-.196-.262-.13-.394.13-.328.458-.526.786-.591.394-.066.721-.066 1.115-.066h2.426c.197 0 .394 0 .59.066.197.131.263.394.328.591.131.46.197.92.328 1.38l1.574 5.914.59 2.365c.197.723.459 1.512.59 2.3zm-6.033-2.497l-.787 2.497a.63.63 0 01-.59.46H7.077a.658.658 0 01-.656-.657v-.132l2.754-10.381c.066-.132.197-.263.328-.263.197 0 .328.131.328.263l2.098 8.213zm7.738-.197l-.459 1.38c-.066.131-.131.197-.262.197s-.197-.066-.263-.197l-2.295-8.017.46-1.642c0-.132.13-.197.262-.197.13 0 .262.065.262.197l2.295 8.279z"
    }))));
  };

  var _default = SvgMnz;
  _exports["default"] = _default;
});