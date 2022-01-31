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
    global.Blk = mod.exports;
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

  var SvgBlk = function SvgBlk(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#181818",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.1 11.13a3.803 3.803 0 01-2.436 3.732s1.012-1 .965-3.563c-.048-2.563-1.93-3.83-1.93-3.83s3.354.747 3.4 3.66zM11.936 24.819l-3.436.169v-.321s2.103-.217 2.103-3.99v-9.64C10.603 7.843 8.5 7.29 8.5 7.29V7l3.436.168zm5.492.18c-1.495.013-4.268-.196-4.268-.196V7.193c1.828-.025 2.467-.277 3.973-.06 1.507.216 2.801 1.721 3.154 3.226.353 1.505-.023 2.938-.506 3.72s-1.541 1.325-1.541 1.325 1.6.554 2.165 1.035c.565.482 1.66 1.794 1.236 4.648-.424 2.854-2.719 3.9-4.213 3.912zm3.971-.65s1.63-1.42 1.558-4.301-1.558-4.235-1.558-4.235 3.066.77 3.1 4.202c.036 3.431-3.1 4.335-3.1 4.335zm-3.1-10.334c1.098-1.461.753-4.21-.577-5.15-1.33-.94-2.73-.47-3-.205-.272.265-.26 6.43-.26 6.43s2.738.386 3.836-1.075zm.203 2.625c-1.028-.458-4.04-.338-4.04-.338s-.047 1.557.063 4.471 1.083 2.898 2.095 2.938c1.012.04 2.942-.032 3.577-2.545.636-2.512-.667-4.069-1.695-4.526z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgBlk;
  _exports["default"] = _default;
});