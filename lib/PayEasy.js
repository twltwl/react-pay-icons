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
    global.PayEasy = mod.exports;
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

  var SvgPayEasy = function SvgPayEasy(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.425 18.363h1.4a7.49 7.49 0 01-1.09-3.956c0-3.215 1.892-5.883 4.375-6.399v-.286h5.05a8.205 8.205 0 00-3.853-2.957V4.38h-2.254c-4.545 0-8.23 4.54-8.23 10.142a10.562 10.562 0 004.602 9.104v-5.263z",
      fill: "#2C80C2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.412 14.314a3.65 3.65 0 11-7.3 0 3.65 3.65 0 017.3 0",
      fill: "#9CCB3B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.242 7.71a4.4 4.4 0 00-.487.028 6.85 6.85 0 011.96 4.922c0 3.4-2.234 6.172-5.033 6.31a4.739 4.739 0 003.56 1.719c2.9 0 5.252-2.906 5.252-6.49 0-3.583-2.352-6.489-5.252-6.489",
      fill: "#2C80C2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.242 20.689c-2.9 0-5.252-2.906-5.252-6.49 0-3.583 2.352-6.489 5.252-6.489s5.252 2.906 5.252 6.49c0 3.583-2.352 6.489-5.252 6.489M23.308 4.173a7.465 7.465 0 00-5.67 2.791c-.134-.265-.213-.402-.213-.402-.172.45-.335.894-.489 1.333a11.622 11.622 0 00-1.858 6.419c0 .124.002.25.006.373-2.374 12.454 2.161 19.29 2.11 19.421A41.936 41.936 0 0019.94 23.57a6.912 6.912 0 003.367.886c4.545 0 8.23-4.541 8.23-10.142 0-5.601-3.685-10.141-8.23-10.141",
      fill: "#263B90"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.425 6.562s-.656-.077-2.893-.193c-6.019 16.165 0 25.733 0 25.733l2.661 2.006c.063-.158-6.479-9.964.232-27.546",
      fill: "#2C80C2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.47 14.314a1.201 1.201 0 11-2.402 0 1.201 1.201 0 012.402 0M25.78 14.314a2.302 2.302 0 11-4.602 0 2.302 2.302 0 014.603 0M32.715 14.314a2.778 2.778 0 11-5.556 0 2.778 2.778 0 015.556 0",
      fill: "#9CCB3B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.85 32.193c-.007.147.05.29.155.392a.534.534 0 00.385.148c.294-.015.571-.141.775-.353v-1.177c-.265.085-.523.19-.772.315a1.396 1.396 0 00-.412.302.55.55 0 00-.131.373m.717-3.359c.468-.032.932.097 1.316.366.306.249.474.628.455 1.022v2.186c0 .17.068.254.205.254a.625.625 0 00.242-.074c.094-.044.182-.101.26-.17v.68a2.203 2.203 0 01-1.128.377.925.925 0 01-.486-.106.578.578 0 01-.237-.373c-.39.298-.864.466-1.354.479a1.167 1.167 0 01-.83-.325 1.032 1.032 0 01-.347-.78c-.018-.34.107-.671.345-.914a2.939 2.939 0 011.205-.584l.952-.277v-.206c0-.437-.264-.656-.794-.656-.28.002-.556.066-.808.187a2.3 2.3 0 00-.733.55v-1.057a2.718 2.718 0 011.737-.579M25.228 28.92l1.058 2.402 1.072-2.402h1.263l-3.087 6.722h-1.262l1.42-3.077-1.736-3.645zM28.288 31.967h1.788v-.813h-1.788zM33.993 30.676a1.296 1.296 0 00-.296-.763.878.878 0 00-.685-.275.98.98 0 00-.715.263 1.301 1.301 0 00-.342.775h2.038zm-1.029-1.842a2.005 2.005 0 011.56.631c.407.489.612 1.113.575 1.747v.177h-3.163c.025.353.185.683.447.921.293.23.66.344 1.032.323.277 0 .551-.049.81-.146.287-.112.558-.26.806-.443v.876a3.208 3.208 0 01-1.904.555 2.404 2.404 0 01-1.727-.637 2.224 2.224 0 01-.67-1.693 2.308 2.308 0 01.62-1.665 2.139 2.139 0 011.614-.646zM36.933 32.193c-.006.147.05.29.156.392a.534.534 0 00.385.148c.294-.015.571-.141.775-.353v-1.177c-.265.085-.523.19-.773.315a1.396 1.396 0 00-.41.302.55.55 0 00-.132.373m.717-3.359c.467-.032.932.097 1.316.366.305.249.474.628.455 1.022v2.186c0 .17.068.254.205.254a.625.625 0 00.241-.074c.095-.044.183-.101.261-.17v.68a2.203 2.203 0 01-1.128.377.925.925 0 01-.486-.106.578.578 0 01-.237-.373c-.39.298-.864.466-1.354.479a1.167 1.167 0 01-.83-.325 1.032 1.032 0 01-.347-.78c-.018-.34.107-.671.344-.914a2.938 2.938 0 011.206-.584l.952-.277v-.206c0-.437-.264-.656-.794-.656-.28.002-.556.066-.808.187a2.3 2.3 0 00-.733.55v-1.057a2.719 2.719 0 011.737-.579M42.491 28.834c.234-.002.467.026.694.084.238.064.47.153.689.265v.943a3.34 3.34 0 00-.718-.347c-.22-.081-.45-.125-.684-.131a.71.71 0 00-.397.095.31.31 0 00-.143.272.275.275 0 00.119.201c.208.142.427.265.656.369.394.179.757.42 1.074.716.203.21.314.494.308.787.018.39-.148.767-.45 1.016-.348.263-.778.394-1.214.37-.301.003-.601-.032-.893-.104a2.995 2.995 0 01-.686-.254v-.98c.436.276.934.44 1.45.478.169.007.337-.03.487-.108a.32.32 0 00.187-.285.307.307 0 00-.067-.191.872.872 0 00-.201-.176c-.09-.062-.368-.207-.837-.437a2.396 2.396 0 01-.8-.561 1.078 1.078 0 01-.258-.72 1.13 1.13 0 01.465-.948c.356-.25.785-.375 1.22-.354M45.438 28.75l1.058 2.402 1.072-2.401h1.262l-3.086 6.72h-1.263l1.421-3.076-1.736-3.644z",
      fill: "#263B90"
    })))));
  };

  var _default = SvgPayEasy;
  _exports["default"] = _default;
});