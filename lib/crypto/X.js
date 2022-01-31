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
    global.X = mod.exports;
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

  var SvgX = function SvgX(props) {
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
      r: 16,
      fill: "#3B5998",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14.116 6.01h1.88v5.882l-1.88-1.963z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.011 7.993h4.949c1.677 1.755 3.361 3.507 5.038 5.266.971-1.009 1.939-2.025 2.906-3.037.715-.741 1.427-1.486 2.14-2.23h4.937c-2.304 2.33-4.605 4.662-6.91 6.99-.242.243-.485.488-.722.734.058.062.12.123.172.189l6.771 6.846.691.696h-3.83c-.099 0-.198.006-.295-.007-.273-.008-.547.004-.82-.006-.495-.511-.984-1.029-1.479-1.542-.973-1.012-1.942-2.03-2.915-3.044-.216-.224-.427-.454-.648-.672-.47.5-.952.993-1.425 1.493l-2.677 2.794c-.312.325-.62.652-.934.971-.27.008-.542 0-.814.004-.155.019-.312.006-.467.01H6.01l7.268-7.35c.125-.126.249-.253.37-.382L6.01 7.993z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 19.531c.626.663 1.26 1.319 1.888 1.98.004 1.307 0 2.612 0 3.92h-1.89c0-1.967 0-3.933.004-5.9H16z"
    })))));
  };

  var _default = SvgX;
  _exports["default"] = _default;
});