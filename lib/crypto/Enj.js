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
    global.Enj = mod.exports;
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

  var SvgEnj = function SvgEnj(props) {
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
      fill: "#624dbf",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.313 9c.494.057.994.088 1.482.176.967.183 1.283.643 1.119 1.576-.066.378-.31.611-.698.674a5.12 5.12 0 01-.698.05c-3.173.007-6.353.013-9.526.026-.48 0-.955.044-1.422.12-1.574.246-2.166.87-2.298 2.388-.06.713-.06.713.685.713h13.028c.205.006.402.044.573.15.58.354.435.908.402 1.419-.026.41-.283.636-.724.718a3.341 3.341 0 01-.56.038h-12.99c-.48 0-.473 0-.434.454.033.416.06.826.165 1.229.197.75.678 1.216 1.455 1.424.862.233 1.751.284 2.64.29 3.1.019 6.195.013 9.296.013.395 0 .763.05.994.397.448.668.099 1.6-.685 1.84-.671.208-1.376.258-2.074.265-2.91.05-5.82.057-8.73 0a15.91 15.91 0 01-2.672-.296c-2.074-.41-3.108-1.418-3.457-3.41-.079-.46-.125-.926-.184-1.387v-3.636c.04-.36.072-.718.119-1.071.276-2.257 1.33-3.366 3.647-3.857.823-.177 1.665-.215 2.495-.297C16.27 9 19.29 9 22.313 9z",
      fill: "#fff"
    }))));
  };

  var _default = SvgEnj;
  _exports["default"] = _default;
});