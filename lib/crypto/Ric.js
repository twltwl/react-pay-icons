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
    global.Ric = mod.exports;
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

  var SvgRic = function SvgRic(props) {
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
      fill: "#60e4dd",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.144 20.024c.3-.455.584-.881.852-1.28H7.932a.093.093 0 01-.093-.093v-.636c0-.051.042-.093.093-.093h3.622c1.937-2.829 2.905-3.994 2.905-4.113 0-.183-.04-.274-.7-.274-1.304 0-3.449-.931-3.449-3.473C10.31 8.679 12.547 7 13.853 7c.606 0 .699.257.42.274-.746.046-2.378 1.536-2.378 2.97 0 .96.852 2.605 2.75 2.605 2.242 0 4.157-3.564 8.812-3.564 2.797 0 3.543 2.188 3.543 2.788 0 .6-.873.914-2.051.914-1.178 0-1.222-2.103-3.59-2.103-3.718 0-6.884 4.026-8.405 7.038h2.624c.052 0 .093.042.093.093v.636a.093.093 0 01-.093.094h-3.01c-.208.48-.363.915-.46 1.28h2.63c.052 0 .094.04.094.092v.637a.093.093 0 01-.093.093H11.99c.049 1.166 1.027 2.217 2.936 3.153h-7.32a185.324 185.324 0 012-3.153H7.094A.093.093 0 017 20.754v-.637c0-.051.042-.093.093-.093z",
      fill: "#fff"
    }))));
  };

  var _default = SvgRic;
  _exports["default"] = _default;
});