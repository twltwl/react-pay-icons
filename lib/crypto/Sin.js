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
    global.Sin = mod.exports;
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

  var SvgSin = function SvgSin(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#F5342E",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.001 16.124a10.195 10.195 0 01.507-3.281 9.995 9.995 0 011.815-3.287 9.788 9.788 0 013.37-2.63 9.454 9.454 0 012.732-.823 9.46 9.46 0 011.72-.096 9.62 9.62 0 013.306.716c.016.007.035.014.037.034.002.026-.021.034-.04.042l-.36.14a22.43 22.43 0 00-2.296 1.044c-.827.437-1.621.927-2.358 1.512-.64.509-1.225 1.075-1.7 1.753-.32.456-.572.946-.71 1.493-.176.692-.133 1.377.067 2.056.147.502.368.972.612 1.43.308.58.657 1.135.978 1.707.292.52.564 1.05.744 1.625.125.401.2.812.192 1.234a3.516 3.516 0 01-.412 1.567c-.303.584-.718 1.076-1.18 1.53-.427.419-.891.788-1.37 1.14-.07.052-.125.05-.198.012a9.824 9.824 0 01-1.945-1.301 9.974 9.974 0 01-1.867-2.131 10.172 10.172 0 01-1.574-4.338 8.418 8.418 0 01-.07-1.148z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.047 25.241c.018-.043.063-.044.097-.056a25.73 25.73 0 002.06-.856c.79-.372 1.559-.784 2.287-1.265a11.678 11.678 0 001.6-1.25c.488-.46.92-.964 1.256-1.544.272-.47.456-.971.516-1.512a3.812 3.812 0 00-.137-1.463c-.15-.529-.385-1.022-.649-1.503-.316-.577-.675-1.13-1.006-1.698-.281-.483-.543-.975-.733-1.502a3.8 3.8 0 01-.238-1.588c.027-.37.123-.726.272-1.068.224-.514.547-.963.922-1.377.548-.607 1.185-1.11 1.849-1.584.073-.053.134-.059.215-.018.706.354 1.366.776 1.975 1.277.623.513 1.177 1.09 1.66 1.733a9.886 9.886 0 011.972 5.232c.022.315.042.63.033.946a10.24 10.24 0 01-.432 2.713 10.025 10.025 0 01-2.773 4.425 10.194 10.194 0 01-5.14 2.56 10.422 10.422 0 01-2.052.154 10.244 10.244 0 01-3.456-.695c-.036-.016-.078-.02-.098-.06z"
    })))));
  };

  var _default = SvgSin;
  _exports["default"] = _default;
});