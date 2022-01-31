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
    global.Rhoc = mod.exports;
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

  var SvgRhoc = function SvgRhoc(props) {
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
      fill: "#CC1E46"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M11.816 9.24a11.174 11.174 0 015.753-2.2c.212-.043.442.091.435.325.02.56.006 1.12.006 1.68.014.174-.078.4-.278.405-1.846.204-3.6.958-5.124 2-.144.081-.112.268-.1.404.106.982.034 1.971.063 2.956 4.974.014 9.95-.002 14.926.008.237-.02.487.115.468.38.025 1.675.005 3.35.01 5.024.004.91-.19 1.852-.741 2.596-.87 1.169-2.4 1.87-3.854 1.612-1.03-.154-1.92-.793-2.544-1.604a11.207 11.207 0 01-5.844 2.215c-.215.003-.376-.208-.343-.414.007-.586-.012-1.174.01-1.76.05-.31.432-.25.659-.301 1.744-.272 3.412-1.003 4.836-2.04a37.333 37.333 0 01-.077-3.269c-4.992-.032-9.986-.002-14.978-.016-.22.025-.432-.14-.411-.373-.004-1.763-.003-3.527.002-5.29.01-.922.301-1.854.912-2.557.805-.916 2.019-1.501 3.251-1.429 1.18.047 2.263.718 2.963 1.648zM6.7 11.882c-.002 1.033-.003 2.067.002 3.102 1.234-.001 2.466.017 3.699-.01.002-1.008.015-2.015-.006-3.023-.019-.966-.892-1.82-1.862-1.8-.947-.039-1.81.79-1.833 1.73zm15.709 5.29c-.01.982-.002 1.965-.006 2.947-.006.393.113.777.34 1.097.474.677 1.418.973 2.19.674.713-.264 1.184-1.01 1.176-1.76 0-.986.005-1.97-.004-2.956-1.232-.01-2.464-.005-3.696-.003z"
    }))));
  };

  var _default = SvgRhoc;
  _exports["default"] = _default;
});