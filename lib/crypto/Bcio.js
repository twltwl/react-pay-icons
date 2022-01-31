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
    global.Bcio = mod.exports;
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

  var SvgBcio = function SvgBcio(props) {
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
      r: 16,
      fill: "#3F43AD"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.94 7.436a.877.877 0 000 1.751.877.877 0 000-1.751m4.05-2.43a.877.877 0 000 1.752.877.877 0 000-1.752m0 9.719a.877.877 0 000 1.751.877.877 0 000-1.751m4.049-2.43a.876.876 0 10.002 1.753.876.876 0 00-.002-1.753m4.049-2.429a.877.877 0 10.002 1.753.877.877 0 00-.002-1.753M11.94 17.155a.877.877 0 000 1.751.877.877 0 000-1.751M7.89 9.866a.876.876 0 10.002 1.752.876.876 0 00-.002-1.752m0 9.718a.876.876 0 10.002 1.753.876.876 0 00-.002-1.753m0-4.859a.877.877 0 000 1.751.877.877 0 000-1.751m8.1-4.859a.877.877 0 100 1.753.877.877 0 000-1.753m4.049-2.43a.877.877 0 10.002 1.753.877.877 0 00-.002-1.753m0 9.719a.876.876 0 10.001 1.752.876.876 0 00-.001-1.752m4.049-2.43a.877.877 0 000 1.751.877.877 0 000-1.751m-4.049 7.289a.876.876 0 10.001 1.753.876.876 0 00-.001-1.753m4.049-2.43a.877.877 0 000 1.752.877.877 0 000-1.752m-8.098 4.86a.877.877 0 000 1.751.877.877 0 00.876-.875.877.877 0 00-.876-.876m0-4.86a.877.877 0 10.001 1.754.877.877 0 00-.001-1.754m-4.05-7.289a.877.877 0 000 1.751.877.877 0 000-1.75m0 9.718a.877.877 0 000 1.751.877.877 0 000-1.751",
      fill: "#FFF"
    }))));
  };

  var _default = SvgBcio;
  _exports["default"] = _default;
});