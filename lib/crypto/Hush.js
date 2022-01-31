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
    global.Hush = mod.exports;
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

  var SvgHush = function SvgHush(props) {
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
      fill: "#292929",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.007 18.657c0-.46.002-.919-.001-1.378-.001-.128.036-.226.155-.278.11-.048.225-.014.321.098.286.334.57.67.855 1.006.1.117.201.233.298.354a.175.175 0 01.038.1c.002.485.003.97.001 1.454a.848.848 0 01-.771.855.842.842 0 01-.888-.726c-.009-.055-.008-.112-.008-.168v-1.317zm.003-9.01c-.001-.02-.003-.039-.003-.059V6.856c.001-.42.289-.774.679-.843a.831.831 0 01.983.821c.01.931.004 1.863.006 2.794l-.005.048c-.194-.332-.462-.498-.828-.497-.362 0-.632.16-.832.468zm-.003 12.613c.204.31.476.468.841.467.364-.001.629-.167.827-.475v2.314c-.001.227.006.456-.014.68a.829.829 0 01-.87.753.838.838 0 01-.782-.832c-.005-.893-.002-1.786-.002-2.68v-.227zm1.668-8.826v1.661c0 .158-.05.244-.17.292a.309.309 0 01-.36-.094l-.724-.848c-.125-.146-.25-.291-.373-.44a.174.174 0 01-.04-.1c-.002-.714-.003-1.429 0-2.143a.84.84 0 01.766-.842c.395-.044.787.25.879.664.015.069.02.141.02.212.002.546.002 1.092.002 1.638zm1.731-3.377v-2.22c.002-.402.231-.73.587-.842.54-.171 1.08.237 1.083.825.003.554 0 1.108 0 1.661v2.795c0 .413-.248.747-.627.85-.493.133-.996-.23-1.037-.749a1.965 1.965 0 01-.005-.153v-2.167zM13.362 20.76v2.565a.845.845 0 01-.693.847c-.48.092-.959-.298-.973-.797-.004-.143-.001-.286-.001-.429v-4.753c0-.399.256-.736.628-.832a.834.834 0 011.038.812c.003.862 0 1.725 0 2.587zm0-9.446v3.499a.845.845 0 01-.656.84.836.836 0 01-1.01-.81c-.005-.506-.001-1.011-.002-1.517V7.82c0-.412.268-.756.653-.843a.835.835 0 011.014.821c.003.899 0 1.797 0 2.696zm5.044 8.186v-3.8c0-.379.162-.66.5-.818.542-.251 1.15.15 1.17.763v7.648c0 .418-.239.75-.616.858-.494.142-1.006-.22-1.048-.741a2.013 2.013 0 01-.005-.16v-3.752zm5.094-3.866v5.94a.85.85 0 01-.671.852c-.492.107-.982-.286-.996-.799V9.707c0-.385.193-.692.519-.828.55-.23 1.147.184 1.147.798v5.956zm-13.333-.009v5.949c0 .42-.26.757-.652.85-.5.12-1.001-.274-1.015-.799V9.688c0-.409.245-.741.62-.845a.834.834 0 011.046.802c.005.655.001 1.311.001 1.967v4.012z",
      fill: "#fff"
    }))));
  };

  var _default = SvgHush;
  _exports["default"] = _default;
});