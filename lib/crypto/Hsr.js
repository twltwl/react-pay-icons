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
    global.Hsr = mod.exports;
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

  var SvgHsr = function SvgHsr(props) {
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
      fill: "#56428E"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M10.75 7.5h4.354c-.524.83-.845 1.747-.825 2.74 1.295.013 2.594.013 3.89 0 .017-.987-.248-1.93-.815-2.74h4.384c-.302.633-.815 1.22-.766 1.963-.02 3.324.007 6.65-.003 9.974.43 0 .865 0 1.3.003.317-.63.599-1.273.824-1.94 1.302.033 2.611-.037 3.907.137-1.282 1.106-1.952 2.68-2.787 4.113-3.314.007-6.627-.01-9.944.01-.156 1.21.59 2.043 1.454 2.74h-5.597c.487-.643 1.468-1.057 1.365-2 .033-3.213 0-6.43.01-9.647h2.84v1.98h3.768v-2.27h-7.867L8.287 16c.65 1.147 1.302 2.292 1.958 3.437h.968v2.313H8.254C7.174 19.83 6.054 17.933 5 16v-.003c1.057-1.93 2.18-3.827 3.254-5.747 1.104 0 2.207 0 3.31-.01a4.772 4.772 0 00-.815-2.74zm3.592 9.667v2.27h3.767v-2.27h-3.767zm6.915-6.917h2.95c.808 1.3 1.364 2.8 2.53 3.84.024.077.067.234.09.31-1.246.164-2.508.037-3.764.1-.16-.693-.474-1.33-.822-1.94l-.984.003V10.25zm-3.045 11.79c.871.003 1.746 0 2.618-.003-.02 1.113.759 1.803 1.524 2.463h-5.637c.723-.686 1.568-1.337 1.495-2.46z"
    }))));
  };

  var _default = SvgHsr;
  _exports["default"] = _default;
});