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
    global.Poe = mod.exports;
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

  var SvgPoe = function SvgPoe(props) {
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
      fill: "#dcd6cc",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.758 7.732A4.283 4.283 0 0021.742 6.5c-1.145 0-2.211.44-3.016 1.232L8.87 17.438a.5.5 0 00-.145.382v4.996L6 25.5h1.503l2.018-1.987h5.044a.51.51 0 00.378-.162l9.806-9.658.01-.01A4.162 4.162 0 0026 10.724a4.171 4.171 0 00-1.242-2.99zM19.026 8.86l.417-.41a3.253 3.253 0 012.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 00.019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 00-.746 0l-2.522 2.484V8.859zM10.55 22.501l2.056-2.026h3.812l-2.056 2.026zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398zm2.978.822l-2.27 2.235H13.43l2.27-2.235zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgPoe;
  _exports["default"] = _default;
});