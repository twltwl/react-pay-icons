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
    global.KakaoPay = mod.exports;
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

  var SvgKakaoPay = function SvgKakaoPay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#FFCD01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.59 27.125c-.416-.712.02-1.245.118-1.78.099-.553.277-1.086.435-1.68-.296-.217-.593-.414-.89-.632-2.984-2.273-3.004-6.068-.059-8.361 3.163-2.451 8.144-2.174 10.852.613 2.075 2.075 2.056 5.04 0 7.116-1.621 1.6-3.617 2.233-5.851 2.233-.593 0-1.087.119-1.581.475a56.765 56.765 0 01-2.254 1.541c-.217.159-.454.277-.77.475zM27.331 14.534h1.523c.098.158.237.355.336.494.593-.257 1.126-.554 1.72-.712 1.462-.356 2.846.336 3.439 1.76.632 1.521.652 3.083.098 4.605-.632 1.76-2.036 2.61-3.913 2.53-.277-.02-.534-.04-.93-.06V26.177h-2.253c-.02-3.894-.02-7.729-.02-11.642zm2.254 1.996v4.803c1.522.415 2.47-.415 2.708-1.443.198-.89.217-1.759-.02-2.629-.138-.514-.435-.909-.949-1.008-.573-.118-1.146-.138-1.74.277zM49.746 14.158c.791.218 1.483.415 2.254.652-.395 1.107-.751 2.135-1.147 3.163-.691 1.858-1.363 3.756-2.115 5.574-.612 1.483-1.462 2.392-2.49 2.985-.435-.395-.89-.81-1.325-1.226.633-.77 1.226-1.522 1.819-2.253-1.008-2.767-1.977-5.456-3.005-8.243l2.293-.632c.613 2.115 1.206 4.15 1.8 6.187h.157c.573-2.016 1.147-4.052 1.76-6.207zM42.828 22.954h-1.561a18.36 18.36 0 00-.316-.553c-.08.02-.159.04-.218.059-.672.237-1.304.633-1.996.712-1.838.177-2.945-.989-2.787-2.926.118-1.482 1.107-2.313 2.826-2.45.593-.04 1.186 0 1.74 0 .217-.99-.158-1.582-1.068-1.543-.79.02-1.58.238-2.49.396-.158-.376-.376-.85-.613-1.404 1.245-.81 2.55-1.186 3.993-.909 1.522.296 2.392 1.146 2.47 2.708.1 1.937.02 3.874.02 5.91zm-2.233-2.135v-1.482c-.494 0-.949-.04-1.364 0-1.087.119-1.443.81-.949 1.858.83.375 1.582.099 2.313-.376z",
      fill: "#000"
    })));
  };

  var _default = SvgKakaoPay;
  _exports["default"] = _default;
});