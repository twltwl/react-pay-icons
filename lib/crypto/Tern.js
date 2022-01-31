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
    global.Tern = mod.exports;
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

  var SvgTern = function SvgTern(props) {
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
      r: 16,
      fill: "#F4C257"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.395 21.539l-1.162-.675V10.685l1.872-1.088 1.162.674-1.872 1.089v3.538l4.734 2.752v1.309l-4.734-2.751v5.33zm16.355-2.025v1.35l-8.758 5.09-1.872-1.089v-1.35l1.872 1.088 3.045-1.769v-5.502l1.126-.655v5.503l4.587-2.666zm2.233-3.74v-.23l-4.52 2.628v-1.31l4.52-2.627V9.387L15.99 3l-5.495 3.194-.198.115 4.52 2.627-1.126.654-4.52-2.627L5 9.387v12.774l5.495 3.194.199.115v-5.254l1.126.654v5.255l4.172 2.423 10.991-6.387v-6.387zm-5.695-2.424l-4.55 2.646v5.502l-.746.433-.563-.327v-5.29l-4.735-2.752v-.866l.563-.328 4.552 2.645 4.735-2.75.745.433v.655zM14.83 6.27l1.161-.674 8.758 5.09v2.175l-1.16.674v-2.176L20.542 9.59l-4.734 2.751-1.127-.654 4.735-2.752L14.83 6.27z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgTern;
  _exports["default"] = _default;
});