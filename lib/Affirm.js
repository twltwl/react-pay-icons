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
    global.Affirm = mod.exports;
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

  var SvgAffirm = function SvgAffirm(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 120 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("mask", {
      id: "mask0",
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 26,
      width: 19,
      height: 22
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 26.9693H18.3392V47.8823H0V26.9693Z",
      fill: "white"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#mask0)"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.86878 43.7577C6.38441 43.7577 5.64488 43.0288 5.64488 41.8237C5.64488 39.5945 8.14012 38.831 12.6943 38.3495C12.6943 41.3316 10.6779 43.7577 7.86878 43.7577ZM9.83199 26.9693C6.5786 26.9693 2.83308 28.5042 0.800711 30.1243L2.65751 34.0321C4.28819 32.5397 6.92442 31.2655 9.30262 31.2655C11.5611 31.2655 12.8087 32.021 12.8087 33.5399C12.8087 34.5668 11.9814 35.0828 10.4172 35.285C4.58081 36.0458 0 37.6552 0 42.1562C0 45.7235 2.54046 47.8836 6.50944 47.8836C9.33986 47.8836 11.8617 46.3088 13.0614 44.2312V47.301H18.3392V34.4391C18.3392 29.1267 14.6469 26.9693 9.83199 26.9693Z",
      fill: "#060809"
    })), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M62.8335 27.5498V47.3016H68.4837V37.7861C68.4837 33.2612 71.221 31.9338 73.131 31.9338C73.8758 31.9338 74.8814 32.1492 75.5464 32.6467L76.5759 27.4248C75.7034 27.0523 74.7909 26.9699 74.0434 26.9699C71.1385 26.9699 69.3137 28.2574 68.1086 30.8697V27.5498H62.8335Z",
      fill: "#060809"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M102.766 26.9704C99.7785 26.9704 97.5466 28.7368 96.3841 30.4393C95.3041 28.2393 93.0163 26.9704 90.279 26.9704C87.2916 26.9704 85.2247 28.6303 84.2697 30.5377V27.5503H78.8243V47.3021H84.4772V37.1349C84.4772 33.4825 86.3872 31.7348 88.1721 31.7348C89.7869 31.7348 91.2712 32.7802 91.2712 35.475V47.3021H96.9161V37.1349C96.9161 33.4426 98.7836 31.7348 100.651 31.7348C102.143 31.7348 103.718 32.8201 103.718 35.4351V47.3021H109.363V33.6501C109.363 29.2103 106.376 26.9704 102.766 26.9704Z",
      fill: "#060809"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M49.082 27.5498H43.9638V25.5414C43.9638 22.9291 45.4562 22.1816 46.7437 22.1816C48.1642 22.1816 49.2709 22.812 49.2709 22.812L51.0133 18.8297C51.0133 18.8297 49.2469 17.6752 46.0361 17.6752C42.4263 17.6752 38.319 19.7103 38.319 26.0973V27.5498H29.7505V25.5414C29.7505 22.9291 31.2429 22.1816 32.5278 22.1816C33.2593 22.1816 34.2436 22.3518 35.0576 22.812L36.8 18.8297C35.7599 18.2179 34.0893 17.6752 31.8228 17.6752C28.213 17.6752 24.1057 19.7103 24.1057 26.0973V27.5498H20.8283V31.9071H24.1057V47.3015H29.7505V31.9071H38.319V47.3015H43.9638V31.9071H49.082V27.5498Z",
      fill: "#060809"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M52.4524 47.3024H58.092V27.5506H52.4524V47.3024Z",
      fill: "#060809"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M85.3539 0C70.1058 0 56.515 10.5848 52.6578 24.1942H58.1856C61.4071 14.059 72.343 5.16339 85.3539 5.16339C101.169 5.16339 114.837 17.2033 114.837 35.9469C114.837 40.1553 114.291 43.9487 113.259 47.3005H118.622L118.675 47.1169C119.553 43.6587 120 39.9025 120 35.9469C120 15.0433 104.768 0 85.3539 0Z",
      fill: "#0FA0EA"
    })));
  };

  var _default = SvgAffirm;
  _exports["default"] = _default;
});