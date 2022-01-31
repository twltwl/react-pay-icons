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
    global.CaixaTransparent = mod.exports;
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

  var SvgCaixaTransparent = function SvgCaixaTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 205.513 46.554"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M62.866 15.446L57.544 28.71h7.365l-2.02-13.317-.023.054zM34.672 45.893L56.502.944H73.01l9.204 44.95h-14.49l-1.068-5.992H52.597l-3.234 5.991H34.672zm54.402 0L95.398.944h14.6l-6.32 44.95H89.074zm97.113-30.5l-5.343 13.316h7.362l-2.02-13.317zm-28.218 30.5L179.803.944h16.503l9.207 44.95H191.02l-1.065-5.992h-14.061l-3.234 5.991h-14.691m-32.28-21.018h18.297l12.537 20.763h-18.3l-12.534-20.763",
      fill: "#0070af"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M127.59 21.686h18.913L162.928 1.01h-18.912L127.59 21.686m-18.908 24.078h18.909l16.425-20.928h-18.912l-16.422 20.928",
      fill: "#f6822a"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M115.5.758h17.65l12.093 20.928H127.59L115.5.758M35.104 2.552L33.7 15.773c-5.382-7.425-17.855-2.3-18.835 6.948-1.245 11.74 10.76 14.475 17.293 7.563L30.75 43.535c-1.95.957-3.857 1.701-5.739 2.202a23.42 23.42 0 01-5.609.81c-2.34.051-4.46-.195-6.37-.732a15.581 15.581 0 01-5.168-2.502c-2.95-2.157-5.082-4.899-6.396-8.235C.155 31.73-.277 27.953.171 23.732c.36-3.393 1.215-6.486 2.577-9.29 1.35-2.803 3.22-5.353 5.601-7.663 2.252-2.202 4.703-3.864 7.356-4.992C18.348.668 21.232.071 24.349.005a21.268 21.268 0 015.462.576c1.783.426 3.54 1.092 5.293 1.971",
      fill: "#0070af"
    }))));
  };

  var _default = SvgCaixaTransparent;
  _exports["default"] = _default;
});