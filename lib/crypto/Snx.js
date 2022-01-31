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
    global.Snx = mod.exports;
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

  var SvgSnx = function SvgSnx(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#5FCDF9",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.092 12.264a.617.617 0 00-.493-.24h-3.98a.13.13 0 01-.086-.035.11.11 0 01-.033-.077v-2.8a.11.11 0 01.033-.077.097.097 0 01.086-.034h4.206c1.06 0 1.975.454 2.747 1.359l1.023 1.303-1.992 2.534-1.511-1.933zm7.351-1.917c.768-.896 1.688-1.346 2.76-1.346h4.193a.102.102 0 01.078.026.1.1 0 01.025.085v2.8c0 .03-.008.056-.025.077a.084.084 0 01-.078.034h-3.98a.617.617 0 00-.492.24L17.99 15.99l2.945 3.752c.12.141.296.227.477.223h3.98a.09.09 0 01.077.034.14.14 0 01.025.09v2.8a.12.12 0 01-.025.077.084.084 0 01-.078.034h-4.189c-1.072 0-1.984-.454-2.748-1.359l-2.44-3.108-2.439 3.108c-.768.905-1.688 1.36-2.76 1.36H6.62a.09.09 0 01-.078-.035.121.121 0 01-.025-.09v-2.8c0-.03.009-.056.025-.077a.084.084 0 01.078-.034h3.98c.189 0 .37-.09.493-.24l2.879-3.67 4.472-5.707z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgSnx;
  _exports["default"] = _default;
});