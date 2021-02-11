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
    global.Dotpay = mod.exports;
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

  var SvgDotpay = function SvgDotpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      x: 2000,
      viewBox: "0 0 1918.807 555.403"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M237.49 119.738h-78.486c-44.593 0-78.486 9.296-102.453 27.937C20.626 175.612 0 225.531 0 284.069c0 52.582 15.978 96.449 44.593 123.756s58.537 35.926 120.416 35.926h147.675V0H237.49v119.738zm0 264.798h-72.627c-59.215 0-87.83-33.893-87.83-105.116.145-67.204 31.423-100.274 93.302-100.274h67.156v205.39zm466.169-264.798h-59.215v59.409h59.215v156.148c0 46.578 6.633 69.189 24.596 87.152 17.285 15.978 35.926 21.304 76.5 21.304h63.863v-59.215h-36.604c-45.222 0-53.26-8.667-53.26-59.215V179.147h89.815v-59.409H778.85V0h-75.193l.002 119.738z",
      fill: "#a01813"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M888.229 119.641v435.762h75.29V443.654h69.189c61.878 0 90.493-8.667 117.753-34.57 28.615-27.937 45.9-74.515 45.9-125.887 0-56.552-15.978-101.145-47.256-129.712-28.615-25.952-55.197-33.893-117.753-33.893l-143.123.049zm75.29 59.215h61.878c63.186 0 93.156 31.907 93.156 99.112 0 37.911-8.667 67.785-24.596 84.489-13.315 14.525-37.911 21.933-71.852 21.933h-58.586V178.856zm369.139 67.301c-37.234 0-61.2 3.341-76.5 10.652-31.181 13.944-50.548 48.563-50.548 89.815 0 32.585 12.637 60.523 35.248 77.856 21.304 15.978 39.267 19.367 105.115 19.367h174.305V248.82c0-51.226-6.004-74.515-24.596-96.449-21.304-25.274-45.9-32.585-113.782-32.585h-159.005v59.36h151.694c37.282 0 51.226 4.842 61.2 18.641 7.989 11.33 9.296 20.626 9.296 48.418l-112.427-.048zm112.426 59.215v79.163h-105.793c-40.574 0-56.552-10.652-56.552-38.734 0-17.963 7.989-31.278 21.304-36.604 7.989-3.341 15.3-3.97 35.248-3.97l105.793.145zm307.939 79.164h-77.759c-46.578 0-59.893-17.285-59.893-79.841V119.738h-75.242v179.631c0 63.863 4.019 83.182 22.611 106.52 22.611 27.259 51.904 37.911 105.116 37.911h85.167c-1.307 26.727-3.341 33.893-13.315 40.72-8.667 7.311-18.641 8.667-51.226 8.667h-148.353v59.215h150.338c59.215 0 85.167-7.311 106.52-28.615 21.352-21.304 31.278-58.537 31.278-111.894V119.738h-75.242v264.798zM1874.746.775c25.149.829 44.865 21.889 44.035 47.038s-21.889 44.865-47.038 44.036c-24.612-.811-44.125-21.032-44.06-45.657.263-25.349 21.025-45.685 46.374-45.422.133.001.266.003.398.006l.291-.001zm-.533 8.909c-19.466.206-35.08 16.153-34.874 35.619.002.215.007.431.013.646-.669 19.402 14.517 35.673 33.919 36.342a34.5 34.5 0 001.474.02c19.948.291 34.619-16.075 34.619-36.265.722-19.347-14.376-35.616-33.723-36.338a33.522 33.522 0 00-1.187-.024h-.241zm-6.923 59.796h-10.507V24.548a88.064 88.064 0 0117.431-1.646c5.51-.536 11.046.72 15.784 3.583a12.447 12.447 0 014.455 9.684 11.667 11.667 0 01-9.393 10.797v.533c4.406 1.404 6.924 4.842 8.28 11.088a29.686 29.686 0 003.341 11.088h-11.33a36.522 36.522 0 01-3.583-10.797c-.823-4.842-3.583-7.214-9.393-7.214h-4.842l-.243 17.816zm.29-25.468h4.842c5.81 0 10.507-1.937 10.507-6.633s-3.05-6.924-9.684-6.924a25.19 25.19 0 00-5.81.533l.145 13.024z",
      fill: "#1d1d1b"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M521.268 211.345H464.28a6.005 6.005 0 00-4.406 2.034 8.136 8.136 0 00-2.179 5.616v48.418h70.061v-48.418a8.131 8.131 0 00-2.179-5.616 5.998 5.998 0 00-4.309-2.034zm-28.324-89.428c-88.672.08-160.489 72.028-160.409 160.699s72.028 160.489 160.699 160.409c88.615-.08 160.409-71.939 160.409-160.554 0-88.672-71.883-160.554-160.554-160.554h-.145zm72.288 235.166c-.053 12.252-9.972 22.171-22.224 22.224H440.217c-12.252-.053-22.171-9.972-22.224-22.224v-66.575a22.322 22.322 0 0113.557-20.481v-50.113c-.27-17.639 13.785-32.17 31.423-32.488h56.94c17.638.318 31.693 14.849 31.423 32.488v49.871a22.321 22.321 0 0113.848 20.723l.048 66.575z",
      fill: "#a01813"
    })));
  };

  var _default = SvgDotpay;
  _exports["default"] = _default;
});