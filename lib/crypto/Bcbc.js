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
    global.Bcbc = mod.exports;
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

  var SvgBcbc = function SvgBcbc(props) {
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
      fill: "#004ab5",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.483 7.793a8.755 8.755 0 1010.75 12.427l-7.662-4.235L18.68 7.8a8.755 8.755 0 00-6.196-.007zm.546 1.573a7.089 7.089 0 015.018.006l-2.517 6.627 6.204 3.43a7.089 7.089 0 11-8.705-10.063zm2.936-4.386c1.191.047 2.366.287 3.48.71L15.53 15.999l9.651 5.335A11.028 11.028 0 1115.965 4.98zm7.529 3.812c.264 0 .51.031.736.095.666.183 1.116.597 1.35 1.241.143.391.174.775.094 1.152-.072.374-.245.71-.519 1.01.514-.023.963.092 1.35.342.383.242.666.613.847 1.111.257.706.18 1.351-.233 1.935-.408.574-1.137 1.053-2.188 1.435l-4.164 1.516-2.931-8.053 3.934-1.432c.644-.234 1.219-.352 1.724-.352zm-.61 1.666c-.24 0-.517.058-.833.173l-1.852.674.69 1.899 1.853-.675c.46-.167.78-.374.958-.622.18-.248.212-.529.097-.843-.114-.314-.318-.505-.612-.572a1.221 1.221 0 00-.301-.034zm1.562 3.122c-.252.003-.548.066-.888.19l-2.174.791.724 1.99 2.174-.791c.49-.179.83-.393 1.016-.644.195-.253.23-.548.108-.886-.16-.437-.48-.654-.96-.65z",
      fill: "#fff"
    }))));
  };

  var _default = SvgBcbc;
  _exports["default"] = _default;
});