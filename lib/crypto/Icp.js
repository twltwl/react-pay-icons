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
    global.Icp = mod.exports;
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

  var SvgIcp = function SvgIcp(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#292A2E",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22.17 10.5c-1.34 0-2.803.667-4.348 1.982a19.032 19.032 0 00-1.843 1.824l.002.002.002-.002s.752.794 1.578 1.643a17.474 17.474 0 011.827-1.842c1.374-1.169 2.272-1.414 2.783-1.414 1.927 0 3.495 1.484 3.495 3.307 0 1.814-1.569 3.296-3.498 3.308-.088 0-.2-.01-.34-.04.562.235 1.166.405 1.742.405 3.533 0 4.223-2.237 4.27-2.396.105-.41.16-.837.16-1.276 0-3.034-2.615-5.501-5.83-5.501zm-12.34 11c1.34 0 2.803-.667 4.348-1.982a19.032 19.032 0 001.843-1.824l-.002-.002a.025.025 0 01-.002.002s-.752-.794-1.578-1.643a17.474 17.474 0 01-1.827 1.842c-1.374 1.169-2.272 1.414-2.783 1.414-1.927 0-3.495-1.484-3.495-3.307 0-1.814 1.569-3.296 3.498-3.308.088 0 .2.01.34.04-.562-.235-1.166-.405-1.742-.405-3.533 0-4.223 2.237-4.27 2.396-.105.41-.16.837-.16 1.276C4 19.033 6.615 21.5 9.83 21.5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.563 19.617c-1.809-.043-3.689-1.427-4.072-1.771-.991-.89-3.278-3.297-3.457-3.486-1.676-1.822-3.948-3.86-6.205-3.86h-.005c-2.744.013-5.05 1.817-5.663 4.224.047-.159.948-2.439 4.267-2.36 1.809.044 3.698 1.447 4.081 1.79.991.89 3.279 3.298 3.457 3.487 1.676 1.821 3.948 3.859 6.205 3.859h.005c2.744-.013 5.05-1.817 5.663-4.224-.046.159-.957 2.42-4.276 2.341z"
    })))));
  };

  var _default = SvgIcp;
  _exports["default"] = _default;
});