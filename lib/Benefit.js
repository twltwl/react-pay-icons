function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.Benefit = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgBenefit = function SvgBenefit(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.235 20.302c-1.694 2.039-3.755 3.606-6.214 4.603a4.986 4.986 0 01-1.814.33h-.503l-.15.217c-.044.045-.074.097-.112.157 1.027 1.035 2.032 2.047 3.014 3.044 2.646-2.654 5.315-5.322 7.93-7.939-.471-.48-.959-.974-1.446-1.461-.21.33-.427.72-.705 1.049zM27.754 20.04c1.387-1.882 3.238-2.962 5.195-3.771-1.177-1.185-2.369-2.384-3.583-3.598l-2.19 2.211c-.741.742-1.484 1.484-2.233 2.226.015.015.022.03.037.038.9-.487 1.8-.975 2.766-1.492.008 1.47.008 2.879.008 4.386z",
      fill: "#DC352A"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.217 18.06c-1.694.39-3.456 2.092-3.448 4.393.022.3.022.6.082.893.143.72.57.974 1.282.794 2.294-.585 3.793-2.901 3.381-5.225-.135-.712-.585-1.02-1.297-.854zM24.073 23.3v-5.292c-.907.907-1.784 1.784-2.624 2.616.885.907 1.762 1.8 2.624 2.677z",
      fill: "#DC352A"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.43 7.468l-.397.547c.18.218.33.39.532.63-.817 0-2.158.007-4.302.015.044-.622-.878-1.342-.878-1.342s-.285.375-.404.577c.232.21.562.54.48.765h-4.146c-.09 0-.218-.165-.255-.277-.12-.338-.165-.705-.3-1.035-.375-.885-1.597-1.035-2.204-.292-.337.412-.27.884.18 1.162.202.127.412.254.622.382-.81.06-1.604.052-2.399.067h-.375c-.03-.577-.742-1.102-.742-1.102s-.285.375-.404.578c.27.247.344.442.344.584a2.82 2.82 0 00-.465.105 1.834 1.834 0 01-.217.06c-1.47.33-3.036.428-4.535.218-.623-.09-1.477-.248-1.822-.847-.127-.218-.12-.48-.157-.72-.008-.03-.293.082-.323.105a.628.628 0 00-.225.24c-.292.547.128 1.072.593 1.334.337.188.727.315 1.102.397 1.416.315 2.848.3 4.28.12.652-.082 1.297-.314 1.95-.322 4.377-.022 8.763-.007 13.14 0 .615 0 1.223.015 1.837-.007.12-.008.308-.128.345-.233.195-.6-.247-1.477-.854-1.71zm-11.237-.12c.308-.42 1.05-.075 1.117.9 0 .045-1.432-.48-1.117-.9zM26.277 11.674l2.256-.93v-.352l-2.256.937v.345zM38.1 11.883l2.263-.93v-.351l-2.264.937v.344z",
      fill: "#000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.578 7.003l-.914-.382-.54.457.93.42.524-.495zM21.81 7.048l-.915-.375-.54.458.93.412.524-.495zM30.19 5.541l-.914-.382-.54.457.93.42.524-.495zM35.22 5.969l-.914-.383-.54.458.93.42.525-.495zM39.231 9.664l-.54.458.93.412.525-.495-.915-.375zM19.058 30.1c.495 0 .585.201.585.689v1.327c0 .3-.083.465-.323.532.233.082.323.232.323.532v.72c0 .427-.173.607-.585.607h-.555v-1.8h-.315v-.142h.315v-2.48h.555v.014zm-.367 2.48h.322c.36 0 .442-.09.442-.48V30.73c0-.383-.075-.48-.442-.48h-.322v2.332zm0 1.792h.322c.36 0 .442-.097.442-.487v-.682c0-.383-.075-.488-.442-.488h-.322v1.657zM23.51 34.515h-1.124v-1.799h-.314v-.142h.314v-2.482h1.117v.15h-.93v2.332h.938v.142h-.937v1.657h.937v.142zM26.12 30.1h.187v.127a.543.543 0 01.39-.172c.42 0 .57.225.57.667v3.793h-.188v-3.8c0-.345-.082-.51-.382-.51-.165 0-.293.075-.39.24v4.07h-.187V30.1zM31.112 34.515h-1.117v-1.799h-.315v-.142h.315v-2.482h1.117v.15h-.937v2.332h.937v.142h-.937v1.657h.937v.142zM33.804 34.515v-1.799h-.315v-.142h.315v-2.482h1.116v.15h-.937v2.332h.938v.142h-.938v1.8h-.18zM37.694 34.515h-.18V30.1h.188v4.415h-.008zM40.213 30.1h1.192v.15h-.502v4.273h-.188V30.25h-.502v-.15z",
      fill: "#000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.075 32.844a.232.232 0 100-.465.232.232 0 000 .465zM25.055 32.844a.232.232 0 100-.465.232.232 0 000 .465zM28.886 32.844a.232.232 0 100-.465.232.232 0 000 .465zM32.477 32.844a.232.232 0 100-.465.232.232 0 000 .465zM36.33 32.844a.232.232 0 100-.465.232.232 0 000 .465zM39.598 32.754a.232.232 0 100-.465.232.232 0 000 .465z",
      fill: "#DC352A"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.69 36.884H18.083a2.61 2.61 0 01-2.608-2.608V5.608A2.61 2.61 0 0118.083 3H41.69a2.61 2.61 0 012.609 2.609v28.667a2.61 2.61 0 01-2.61 2.608zM18.083 3.15a2.46 2.46 0 00-2.458 2.459v28.667a2.46 2.46 0 002.458 2.458H41.69a2.46 2.46 0 002.459-2.459V5.61a2.46 2.46 0 00-2.46-2.46H18.084z",
      fill: "#DC352A"
    })));
  };

  var _default = SvgBenefit;
  _exports["default"] = _default;
});