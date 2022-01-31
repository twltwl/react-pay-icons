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
    global.Paywithgoogle = mod.exports;
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

  var SvgPaywithgoogle = function SvgPaywithgoogle(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("g", {
      fill: "#5F6369"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M29.2 13.328v4.228h2.607a2.06 2.06 0 0 0 1.541-.627 2.123 2.123 0 0 0-1.54-3.602H29.2Zm0 5.716v4.904h-1.558V11.84h4.131a3.737 3.737 0 0 1 2.675 1.048 3.496 3.496 0 0 1 0 5.124 3.73 3.73 0 0 1-2.675 1.03H29.2v.002ZM37.14 21.412c-.003.401.19.78.516 1.014.345.27.772.414 1.21.406a2.485 2.485 0 0 0 1.752-.727c.49-.432.77-1.054.77-1.707a3.201 3.201 0 0 0-2.031-.575 2.638 2.638 0 0 0-1.583.457c-.39.244-.63.67-.634 1.131m2.015-6.02a3.866 3.866 0 0 1 2.726.922 3.271 3.271 0 0 1 .998 2.528v5.107h-1.49v-1.15h-.067a2.973 2.973 0 0 1-2.573 1.42 3.346 3.346 0 0 1-2.294-.81 2.591 2.591 0 0 1-.923-2.03 2.46 2.46 0 0 1 .973-2.046 4.106 4.106 0 0 1 2.599-.762c.792-.03 1.58.144 2.285.508v-.356a1.771 1.771 0 0 0-.644-1.378 2.207 2.207 0 0 0-1.506-.566 2.386 2.386 0 0 0-2.065 1.1l-1.372-.864a3.827 3.827 0 0 1 3.353-1.623M51.428 15.662l-5.198 11.94h-1.607l1.93-4.178-3.42-7.762h1.693l2.471 5.952h.034l2.405-5.952z"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M22.906 17.987c.001-.474-.04-.948-.12-1.415h-6.568v2.68h3.762a3.221 3.221 0 0 1-1.391 2.114v1.74h2.245a6.804 6.804 0 0 0 2.072-5.12",
      fill: "#547DBE"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.218 24.786a6.67 6.67 0 0 0 4.616-1.68l-2.245-1.74a4.225 4.225 0 0 1-6.282-2.206H9.994v1.793a6.966 6.966 0 0 0 6.224 3.833",
      fill: "#34A751"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.307 19.16a4.165 4.165 0 0 1 0-2.664v-1.792H9.994a6.948 6.948 0 0 0 0 6.249l2.313-1.793Z",
      fill: "#F7BA16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.218 13.624a3.783 3.783 0 0 1 2.672 1.044v.001l1.988-1.986a6.696 6.696 0 0 0-4.66-1.813 6.966 6.966 0 0 0-6.224 3.834l2.313 1.793a4.166 4.166 0 0 1 3.91-2.873",
      fill: "#E84334"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M8.982 10.6H51.73v18.638H8.981z"
    }))));
  };

  var _default = SvgPaywithgoogle;
  _exports["default"] = _default;
});