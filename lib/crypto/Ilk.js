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
    global.Ilk = mod.exports;
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

  var SvgIlk = function SvgIlk(props) {
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
      fill: "#98C23A"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.79 4C9.279 4 4 9.279 4 15.79c0 6.511 5.279 11.79 11.79 11.79 6.511 0 11.79-5.279 11.79-11.79C27.569 9.283 22.297 4.011 15.79 4zm0 22c-5.632 0-10.198-4.565-10.2-10.197-.002-5.632 4.561-10.2 10.193-10.203 5.632-.004 10.201 4.558 10.207 10.19-.006 5.631-4.569 10.194-10.2 10.2V26zm-5.21-11.26h-1.9v-4.16c0-.78.37-1.17 1.11-1.17h4.12a1 1 0 011.15 1.17v4.16h-1.88v-3.7h-2.6v3.7zm2.6 1.22h1.9v5a1 1 0 01-1.15 1.16H9.79a1 1 0 01-1.1-1.18v-5h4.5l-.01.02zm7.8.07h1.92v5a1 1 0 01-1.16 1.16h-4.17a1 1 0 01-1.14-1.16V10.67A1 1 0 0117.6 9.5h4.1a1 1 0 011.2 1.17v3h-2v-2.54h-2.5v4.9h2.58z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgIlk;
  _exports["default"] = _default;
});