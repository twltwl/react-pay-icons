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
    global.Stone = mod.exports;
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

  var SvgStone = function SvgStone(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#D6EBCE",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M108.777 34.796l-8.295-8.146c-.308-.3-.482-.71-.482-1.137 0-.427.174-.837.482-1.138l8.295-8.17a.728.728 0 01.784-.15c.267.11.44.369.439.654v17.583a.704.704 0 01-.44.653.727.727 0 01-.783-.15zm2.937-18.794a.644.644 0 00-.505.19.727.727 0 00-.209.524v3.805c0 .344.235.638.555.693 2.023.293 3.53 2.124 3.53 4.287s-1.507 3.994-3.53 4.287c-.32.055-.556.349-.555.693v3.803a.74.74 0 00.213.52.656.656 0 00.501.195c4.678-.39 8.286-4.526 8.286-9.498 0-4.973-3.608-9.109-8.286-9.498v-.001zM12.932 53.454a1.841 1.841 0 01-.93-1.681 1.94 1.94 0 01.575-1.404 1.969 1.969 0 011.412-.572c.37.008.731.102 1.057.274a11.37 11.37 0 006.152 2.06c2.114 0 3.32-.883 3.32-2.291v-.082c0-1.638-2.262-2.206-4.778-2.984-3.15-.883-6.68-2.165-6.68-6.22v-.082c0-4.014 3.36-6.472 7.61-6.472 2.346.041 4.65.632 6.723 1.723a2.053 2.053 0 011.184 1.85 1.95 1.95 0 01-.591 1.418 1.975 1.975 0 01-1.438.557 2.075 2.075 0 01-.973-.23 11.757 11.757 0 00-5.032-1.45c-1.903 0-3.002.882-3.002 2.08v.08c0 1.577 2.305 2.207 4.82 3.008 3.13.967 6.639 2.375 6.639 6.2v.081C29 53.773 25.511 56 21.051 56a14.945 14.945 0 01-8.118-2.543M42 45.097v-.081c.137-6.109 4.998-10.994 10.962-11.016C58.925 33.978 63.82 38.828 64 44.935v.081a11.168 11.168 0 01-3.276 7.875 10.63 10.63 0 01-7.785 3.105 10.51 10.51 0 01-7.715-3.085A11.043 11.043 0 0142 45.097m17.256 0v-.081a6.605 6.605 0 00-1.759-4.772 6.285 6.285 0 00-4.576-2.01c-3.79 0-6.213 3.027-6.213 6.701v.081a6.585 6.585 0 001.754 4.736 6.267 6.267 0 004.54 2.005c3.83 0 6.254-3.026 6.254-6.658m16.138-11.097c-2.483-.044-4.88.881-6.648 2.566-1.768 1.685-2.758 3.987-2.746 6.386v9.7C66 53.95 67.087 55 68.428 55c1.34 0 2.428-1.05 2.428-2.345v-9.86a4.308 4.308 0 011.3-3.154 4.622 4.622 0 013.24-1.313c2.581-.018 4.698 1.973 4.748 4.466v9.862c0 1.295 1.087 2.345 2.428 2.345S85 53.95 85 52.655v-9.7c-.035-2.422-1.07-4.728-2.873-6.41-1.803-1.68-4.227-2.596-6.733-2.543z",
      fill: "#91C92C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.002 48.502c-.103 4.023 3.207 7.365 7.396 7.47.433.028.867.035 1.3.02a2.341 2.341 0 001.63-.644c.433-.415.675-.979.672-1.566-.004-1.22-1.032-2.207-2.302-2.21h-.66a3.144 3.144 0 01-2.182-.88 2.896 2.896 0 01-.887-2.107V39.15h3.793c1.235 0 2.237-.961 2.237-2.148 0-1.186-1.002-2.148-2.237-2.148h-3.813v-3.48c0-1.31-1.108-2.374-2.473-2.374-1.366 0-2.474 1.063-2.474 2.375v17.128zm64.166-3.877c.003.55.22 1.078.604 1.465.384.388.903.604 1.443.6h7.738c1.122 0 2.034-.921 2.047-2.065C107 38.593 103.05 34 97.542 34 91.3 34 87 38.989 87 45.021v.08a10.923 10.923 0 003.15 7.775 10.498 10.498 0 007.659 3.122 10.84 10.84 0 006.899-2.4 2.213 2.213 0 00.818-1.656 2.217 2.217 0 00-.716-1.705 2.195 2.195 0 00-2.866.021 6.254 6.254 0 01-4.033 1.503c-3.623 0-6.223-3.068-6.223-6.742v-.081c0-3.674 2.047-6.701 5.793-6.701 2.477 0 4.218 1.815 4.893 4.32h-5.159a2.016 2.016 0 00-1.444.601c-.384.388-.6.916-.603 1.467z",
      fill: "#91C92C"
    }))));
  };

  var _default = SvgStone;
  _exports["default"] = _default;
});