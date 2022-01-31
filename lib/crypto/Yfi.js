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
    global.Yfi = mod.exports;
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

  var SvgYfi = function SvgYfi(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#006AE3",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.21 22.36V9.754h1.372V22.36z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.197 13.954l-4.24 1.124-.945-4.4 1.26-.284.498 2.084s1.145-1.878-.382-3.824c-.9-1-1.327-1.042-2.336-1.2-.888-.127-2.952.173-3.567 2.582-.26 1.552.033 2.7 2.033 4.203l-.112 1.673s-2.233-1.573-2.809-2.676c-.445-.873-1.21-2.597.17-4.997.742-1.2 2.206-2.351 4.785-2.23 1.296.054 4.463 1.64 3.972 5.342-.085.694-.445 1.618-.445 1.618l1.74-.387.378 1.372zm-2.421 9.864c-.776 1.179-2.27 2.29-4.843 2.103-1.297-.088-4.418-1.758-3.83-5.446.103-.69.488-1.603.488-1.603l-1.749.34-.342-1.379 4.27-1.012.83 4.424-1.27.252-.442-2.1s-1.194 1.845.279 3.833c.872 1.024 1.297 1.076 2.306 1.26.882.152 2.954-.096 3.633-2.487.3-1.543.036-2.7-1.921-4.258l.157-1.67s2.191 1.63 2.737 2.749c.418.888 1.136 2.633-.303 4.994z"
    })))));
  };

  var _default = SvgYfi;
  _exports["default"] = _default;
});