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
    global.Mastercard = mod.exports;
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

  var SvgMastercard = function SvgMastercard(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      id: "mastercard_svg__Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 125.4 78.4",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".mastercard_svg__st1{fill:#fbb231}.mastercard_svg__st2{fill:#ec1c2e}.mastercard_svg__st3{fill:#fff}.mastercard_svg__st4{fill:none;stroke:#fff;stroke-width:.22;stroke-miterlimit:2.61}"), /*#__PURE__*/React.createElement("g", {
      id: "mastercard_svg__Layer_2_1_"
    }, /*#__PURE__*/React.createElement("g", {
      id: "mastercard_svg__Layer_1-2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4.2.1h117.1c2.3 0 4.2 1.9 4.2 4.2v70c0 2.3-1.9 4.2-4.2 4.2H4.2c-2.3 0-4.2-1.9-4.2-4.2v-70C0 1.9 1.9.1 4.2.1z",
      fill: "#13457c"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st1",
      d: "M77.8 59.4l1.1-.1h1.2l1.1-.2 1.1-.2 1.1-.2 1.1-.3 1-.4 1-.4 1-.4 1-.5 1-.6.9-.6.9-.6.8-.7.8-.7.8-.7.8-.8.7-.8.6-.9.7-.9.6-.9.5-.9.5-1 .4-1 .4-1 .4-1.1.3-1 .3-1.1.2-1.1.1-1.2.1-1.1v-2.3l-.1-1.2-.1-1.1-.2-1.1-.3-1.1-.3-1-.4-1.1-.4-1-.4-1-.5-1-.5-.9-.6-.9-.7-.9-.6-.8-.7-.9-.8-.7-.8-.8-.8-.7-.8-.7-.9-.6-.9-.6-1-.5-1-.5-1-.5-1-.4-1-.3-1.1-.3-1.1-.3-1.1-.2-1.1-.1-1.2-.1h-2.3l-1.1.1-1.2.1-1.1.2-1 .3-1.1.3-1.1.3-1 .4-1 .5-.9.5-1 .5-.9.6-.9.6-.8.7-.8.7-.8.8-.8.7-.7.9-.6.8-.7.9-.6.9-.5.9-.5 1-.4 1-.4 1-.4 1.1-.3 1-.2 1.1-.2 1.1-.2 1.1-.1 1.2V38l.1 1.1.2 1.2.2 1.1.2 1.1.3 1 .4 1.1.4 1 .4 1 .5 1 .5.9.6.9.7.9.6.9.7.8.8.8.8.7.8.7.8.7.9.6.9.6 1 .6.9.5 1 .4 1 .4 1.1.4 1.1.3 1 .2 1.1.2 1.2.2h1.1l1.2.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st2",
      d: "M47.7 59.4l1.1-.1H50l1.1-.2 1.1-.2 1.1-.2 1-.3 1.1-.4 1-.4 1-.4 1-.5.9-.6.9-.6.9-.6.9-.7.8-.7.7-.7.8-.8.7-.8.7-.9.6-.9.6-.9.5-.9.5-1 .5-1 .4-1 .3-1.1.3-1 .3-1.1.2-1.1.1-1.2.1-1.1v-2.3l-.1-1.2-.1-1.1-.2-1.1-.3-1.1-.3-1-.3-1.1-.4-1-.5-1-.5-1-.5-.9-.6-.9-.6-.9-.7-.8-.7-.9-.8-.7-.7-.8-.8-.7-.9-.7-.9-.6-.9-.6-.9-.5-1-.5-1-.5-1-.4-1.1-.3-1-.3-1.1-.3-1.1-.2-1.1-.1-1.2-.1h-2.3l-1.2.1-1.1.1-1.1.2-1.1.3-1 .3-1.1.3-1 .4-1 .5-1 .5-.9.5-1 .6-.8.6-.9.7-.8.7-.8.8-.7.7-.7.9-.7.8-.6.9-.6.9-.6.9-.5 1-.4 1-.4 1-.4 1.1-.3 1-.2 1.1-.2 1.1-.2 1.1-.1 1.2V38l.1 1.1.2 1.2.2 1.1.2 1.1.3 1 .4 1.1.4 1 .4 1 .5 1 .6.9.6.9.6.9.7.9.7.8.7.8.8.7.8.7.9.7.8.6 1 .6.9.6 1 .5 1 .4 1 .4 1.1.4 1 .3 1.1.2 1.1.2 1.1.2h1.2l1.2.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st1",
      d: "M60.1 23H72v-1.2H61.1l-1 1.2zm-1.8 2.7H72v-1.2H59l-.7 1.2zM57 28.4h15v-1.2H57.5l-.5 1.2zm-1 2.7h16v-1.2H56.4l-.4 1.2zm.6 13.2h15.5v-1.2H56.2l.4 1.2zm1.1 2.7h14.4v-1.2h-15l.6 1.2zm1.6 2.7h12.8v-1.2H58.5l.8 1.2zm2.2 2.7h10.6v-1.2H60.5l1 1.2zm-6-18.5H72v-1.3H55.7l-.2 1.3zm10.1 7.7h6.3v-1.3h-6.1l-.2 1.3zm.5-2.7h5.8v-1.3h-5.6l-.2 1.3zm-11-1.3h1.6v1.3h-1.5l-.1-1.3z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M52 36.1h-.6l-.1-.1H50l-.2.1h-.3l-.1.1h-.1l-.1.1-.1.1-.1.1v.5l.1.1.1.1.1.1.2.1.2.1.2.1.3.1.2.1.3.1.2.1.3.1.2.2.1.1.2.3.1.3.1.3v.9l-.1.4v.3l-.2.3-.1.2-.2.2-.2.2-.2.2-.2.1-.3.1-.2.1-.3.1-.2.1h-.6l-.2.1h-1.1l-.3-.1h-.9l-.2-.1h-.3l-.1-.1h-.2l-.2-.1.4-1.7v.1h.4l.1.1h.3l.2.1h.6l.2.1h.9l.2-.1h.2l.1-.1.1-.1.1-.1.1-.1v-.7l-.2-.1-.1-.2-.3-.1-.2-.1-.3-.1-.3-.1-.3-.2-.3-.1-.3-.2-.2-.3-.2-.2-.1-.4-.1-.4v-.8l.1-.3.1-.2v-.3l.2-.2.1-.2.2-.2.2-.1.2-.2.2-.1.3-.1.3-.1.3-.1h.4l.4-.1h1l.2.1h1l.1.1h.5l-.4 1.7z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M52 36.1h-.6l-.1-.1H50l-.2.1h-.3l-.1.1h-.1l-.1.1-.1.1-.1.1v.5l.1.1.1.1.1.1.2.1.2.1.2.1.3.1.2.1.3.1.2.1.3.1.2.2.1.1.2.3.1.3.1.3v.9l-.1.4v.3l-.2.3-.1.2-.2.2-.2.2-.2.2-.2.1-.3.1-.2.1-.3.1-.2.1h-.6l-.2.1h-1.1l-.3-.1h-.9l-.2-.1h-.3l-.1-.1h-.2l-.2-.1.4-1.7v.1h.4l.1.1h.3l.2.1h.6l.2.1h.9l.2-.1h.2l.1-.1.1-.1.1-.1.1-.1v-.7l-.2-.1-.1-.2-.3-.1-.2-.1-.3-.1-.3-.1-.3-.2-.3-.1-.3-.2-.2-.3-.2-.2-.1-.4-.1-.4v-.8l.1-.3.1-.2v-.3l.2-.2.1-.2.2-.2.2-.1.2-.2.2-.1.3-.1.3-.1.3-.1h.4l.4-.1h1l.2.1h1l.1.1h.5l-.4 1.7"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M53.8 32.6h2.1l-.3 1.8h1.3l-.3 1.7h-1.3l-.8 4.2v.2l.1.1v.1l.1.1h.2l.1.1h.8l.2-.1h.2l-.3 1.4h-.1v.1h-.2l-.1.1h-.3l-.1.1h-1.6l-.2-.1h-.2l-.2-.1-.1-.1-.2-.1-.1-.1-.1-.1v-.1l-.1-.1V41l.1-.2 1.4-8.2z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M53.8 32.6h2.1l-.3 1.8h1.3l-.3 1.7h-1.3l-.8 4.2v.2l.1.1v.1l.1.1h.2l.1.1h.8l.2-.1h.2l-.3 1.4h-.1v.1h-.2l-.1.1h-.3l-.1.1h-1.6l-.2-.1h-.2l-.2-.1-.1-.1-.2-.1-.1-.1-.1-.1v-.1l-.1-.1V41l.1-.2 1.4-8.2"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M58.5 39v.4l.1.1v.2l.1.1.1.2.1.1.1.1.1.1.1.1.1.1.2.1.1.1h.2l.1.1h.6l.2.1h.6l.2-.1h.4l.2-.1h.2l.2-.1.3-.1.2-.1.2-.2-.3 1.9-.1.1h-.1l-.2.1h-.2l-.1.1h-.3l-.1.1h-2.1l-.4-.1-.4-.1-.4-.1-.3-.1-.4-.2-.3-.2-.3-.3-.2-.3-.2-.4-.2-.4-.2-.4v-.5l-.1-.6.1-.6V38l.1-.3v-.3l.1-.3.1-.4.1-.3.2-.3.2-.3.3-.3.3-.3.3-.3.4-.2.4-.2.5-.1.6-.1.6-.1h.3l.3.1h.3l.3.1.3.1.3.2.3.1.2.2.3.3.1.3.2.4.1.4.1.4v.5l-.1.6-.1.6v.5h-5.6l.4-1.5h3.3v-.7l-.1-.1v-.2l-.1-.1-.1-.1-.1-.1h-.1l-.1-.1-.1-.1h-.2l-.2-.1h-.4l-.1.1h-.2l-.1.1-.1.1h-.1l-.1.1-.1.1-.1.1-.1.2-.1.1v.1l-.1.2v.3l-.4 1.6"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M76.7 34.8h-.2l-.1-.1-.2-.1H76l-.1-.1h-.2l-.1-.1h-.3l-.2-.1h-1.3l-.2.1h-.2l-.2.1-.2.1-.2.2-.3.1-.2.2-.1.3-.2.3-.2.3-.1.4-.2.4-.1.5-.1.3v1l.1.2v.3l.1.2.1.2.2.2.1.2.2.1.2.2.3.1.2.1.3.1h.5l.2.1h.3l.2-.1h.4l.2-.1h.2l.2-.1.2-.1.1-.1.2-.2-.4 2v.1h-.1v.1h-.1l-.1.1H75l-.1.1h-.1l-.2.1h-.2l-.2.1h-1.8l-.3-.1h-.3l-.4-.1-.3-.2-.4-.2-.3-.2-.3-.3-.3-.3-.2-.3-.2-.4-.2-.4-.2-.5-.1-.5v-1.1l.1-.7.1-.3v-.3l.1-.3.1-.2.1-.3.1-.3.1-.2.1-.3.1-.2.1-.2.1-.2.2-.2.1-.2.2-.2.1-.2.2-.1.1-.2.2-.1.2-.1.2-.2.2-.1.2-.1.2-.1.2-.1h.3l.2-.1h.3l.2-.1h.3l.2-.1h1.1l.2.1h.5l.2.1h.1l.2.1h.4l.1.1h.1l.1.1h.2l-.3 2.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M76.7 34.8h-.2l-.1-.1-.2-.1H76l-.1-.1h-.2l-.1-.1h-.3l-.2-.1h-1.3l-.2.1h-.2l-.2.1-.2.1-.2.2-.3.1-.2.2-.1.3-.2.3-.2.3-.1.4-.2.4-.1.5-.1.3v1l.1.2v.3l.1.2.1.2.2.2.1.2.2.1.2.2.3.1.2.1.3.1h.5l.2.1h.3l.2-.1h.4l.2-.1h.2l.2-.1.2-.1.1-.1.2-.2-.4 2v.1h-.1v.1h-.1l-.1.1H75l-.1.1h-.1l-.2.1h-.2l-.2.1h-1.8l-.3-.1h-.3l-.4-.1-.3-.2-.4-.2-.3-.2-.3-.3-.3-.3-.2-.3-.2-.4-.2-.4-.2-.5-.1-.5v-1.1l.1-.7.1-.3v-.3l.1-.3.1-.2.1-.3.1-.3.1-.2.1-.3.1-.2.1-.2.1-.2.2-.2.1-.2.2-.2.1-.2.2-.1.1-.2.2-.1.2-.1.2-.2.2-.1.2-.1.2-.1.2-.1h.3l.2-.1h.3l.2-.1h.3l.2-.1h1.1l.2.1h.5l.2.1h.1l.2.1h.4l.1.1h.1l.1.1h.2l-.3 2.1"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M95.3 42.5h-2.1l.2-.8v-.1l-.1.2-.1.1-.2.1-.1.1-.2.1-.1.1-.1.1h-.2l-.1.1H92l-.1.1h-1.1l-.4-.1-.3-.1-.4-.2-.2-.2-.3-.3-.2-.2-.2-.4-.1-.3-.1-.4-.1-.3-.1-.4v-1.2l.1-.4.1-.4.2-.4.1-.4.2-.4.2-.3.2-.3.3-.3.2-.3.3-.2.3-.2.2-.1.3-.2.3-.1h.4l.3-.1h.7l.2.1h.2l.1.1h.2l.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1v.1l.1.1.5-3h2.1l-1.8 9.9z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M95.3 42.5h-2.1l.2-.8v-.1l-.1.2-.1.1-.2.1-.1.1-.2.1-.1.1-.1.1h-.2l-.1.1H92l-.1.1h-1.1l-.4-.1-.3-.1-.4-.2-.2-.2-.3-.3-.2-.2-.2-.4-.1-.3-.1-.4-.1-.3-.1-.4v-1.2l.1-.4.1-.4.2-.4.1-.4.2-.4.2-.3.2-.3.3-.3.2-.3.3-.2.3-.2.2-.1.3-.2.3-.1h.4l.3-.1h.7l.2.1h.2l.1.1h.2l.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1v.1l.1.1.5-3h2.1l-1.8 9.9"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st1",
      d: "M91.9 40.7h.2l.2-.1h.2l.2-.1.1-.1.2-.1.1-.1.2-.2.1-.1.1-.2.1-.2.1-.2v-.1l.1-.2v-.2l.1-.3v-1.2l-.1-.2V37l-.1-.2-.1-.1-.1-.2-.1-.1-.1-.1h-.2l-.1-.1h-.4l-.2.1h-.1l-.2.1-.2.1-.1.1-.1.2-.2.1-.1.2-.1.1-.1.2-.1.2-.1.2v.2l-.1.3v.2l-.1.3v.4l.1.3.1.4.2.3.1.3.3.1.3.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M45.3 40.8l-.3 1.7h-1.9v-.3l.1-.3v-.3l-.1.1-.1.1-.1.2-.2.1-.2.1-.2.1-.2.1h-.2l-.2.1-.2.1h-.7l-.2.1-.2-.1h-.2l-.3-.1h-.2l-.2-.1-.2-.2-.2-.1-.1-.1-.2-.2-.1-.1-.1-.2-.1-.1V41l-.1-.1V40l.1-.2v-.3l.1-.3.1-.2.2-.2.1-.2.2-.2.2-.2.2-.2.2-.1.3-.1.2-.1.3-.1.2-.1h.5l.1-.1h.7l.1-.1h1.3l.1.1h.1v-.1l.1-.1v-.5l-.1-.2-.1-.1-.1-.1-.2-.1-.1-.1h-2l-.3.1h-.4l-.2.1h-.4l-.1.1h-.1l-.1.1.5-1.8.2-.1.2-.1h.2l.1-.1h.4l.2-.1h2.4l.2.1h.2l.3.1.2.1.2.1.3.1.2.2.1.1.2.2.2.2.1.2.1.3v.8l-.8 4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M45.3 40.8l-.3 1.7h-1.9v-.3l.1-.3v-.3l-.1.1-.1.1-.1.2-.2.1-.2.1-.2.1-.2.1h-.2l-.2.1-.2.1h-.7l-.2.1-.2-.1h-.2l-.3-.1h-.2l-.2-.1-.2-.2-.2-.1-.1-.1-.2-.2-.1-.1-.1-.2-.1-.1V41l-.1-.1V40l.1-.2v-.3l.1-.3.1-.2.2-.2.1-.2.2-.2.2-.2.2-.2.2-.1.3-.1.2-.1.3-.1.2-.1h.5l.1-.1h.7l.1-.1h1.3l.1.1h.1v-.1l.1-.1v-.5l-.1-.2-.1-.1-.1-.1-.2-.1-.1-.1h-2l-.3.1h-.4l-.2.1h-.4l-.1.1h-.1l-.1.1.5-1.8.2-.1.2-.1h.2l.1-.1h.4l.2-.1h2.4l.2.1h.2l.3.1.2.1.2.1.3.1.2.2.1.1.2.2.2.2.1.2.1.3v.8l-.8 4"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st2",
      d: "M43.5 38.9v-.1h-.1l-.1-.1h-.7l-.1.1h-.4l-.1.1h-.2l-.1.1h-.1l-.1.1h-.1l-.1.1-.1.1h-.1l-.1.1-.1.1v.1l-.1.1v.3l-.1.2.1.2v.2l.2.1.1.1h1l.1-.1h.2l.1-.1.2-.1h.1l.1-.1.1-.1v-.1l.1-.1.1-.1v-.1l.1-.1v-.3l.1-.2v-.2l.1-.2z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M29.3 42.5h-2l1.7-9.9h3.6l.3 5.9 2.5-5.9h3.7l-1.7 9.9h-2.1l1.3-7.4h-.1l-3 7.4h-2.4v-.3l-.1-.8v-1.2l-.1-1.3-.1-1.4v-1.2l-.1-.9v-.3h-.1l-1.3 7.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M29.3 42.5h-2l1.7-9.9h3.6l.3 5.9 2.5-5.9h3.7l-1.7 9.9h-2.1l1.3-7.4h-.1l-3 7.4h-2.4v-.3l-.1-.8v-1.2l-.1-1.3-.1-1.4v-1.2l-.1-.9v-.3h-.1l-1.3 7.4"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M83 40.8l-.3 1.7h-1.9v-.9l-.1.2-.1.1-.2.1-.1.1-.2.1-.2.1-.1.1h-.2l-.2.1-.2.1h-.7l-.2.1-.2-.1h-.2l-.3-.1h-.2l-.2-.1-.3-.2-.1-.1-.2-.1-.1-.2-.1-.1-.1-.2v-.1l-.1-.2V41l-.1-.1V40l.1-.2v-.3l.1-.3.1-.2.2-.2.1-.2.2-.2.2-.2.2-.2.2-.1.3-.1.2-.1.2-.1.3-.1h.4l.1-.1h.8l.1-.1h1.3l.1.1h.1V37l.1-.1-.1-.2v-.2l-.1-.1-.1-.1-.2-.1-.1-.1h-2l-.3.1h-.4l-.2.1h-.4l-.1.1h-.1l-.1.1.5-1.8.2-.1.2-.1h.2l.1-.1h.4l.2-.1h2.3l.3.1h.2l.2.1.3.1.2.1.2.1.2.2.2.1.2.2.2.2.1.2.1.3v.8l-.8 4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M82.7 42.6v-.1l.3-1.7h-.1l-.3 1.7h.1v.1-.1.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M80.7 42.5l.1.1h1.9v-.1h-2v.1h.1l-.1-.1zm.1-.8v-.1l-.1.1v.8h.1v-.9.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M77.9 42.6l.2.1h.6l.2-.1h.3l.2-.1h.2l.2-.1.2-.1.2-.1.1-.1.2-.1.1-.1.1-.1.1-.1v-.1l-.1.1-.1.1-.2.1-.1.1-.2.1-.2.1-.2.1-.1.1-.3.1h-.2l-.2.1h-1zM76 40.3v.2l.1.2v.3l.1.2v.2l.1.2.1.1.1.2.1.1.2.2.1.1.2.1.2.1.3.1h.3l-.3-.1-.2-.1-.2-.1-.2-.1-.2-.1-.1-.1-.1-.2-.2-.1v-.2l-.1-.2-.1-.1v-.5l-.1-.2v-.2H76z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M78.8 37.4l-.3.1h-.3l-.2.1-.3.1-.2.2-.2.1-.2.2-.2.1-.2.2-.2.3-.1.2-.1.2-.1.3-.1.3v.2l-.1.3h.1l.1-.3v-.2l.1-.3.1-.2.1-.3.1-.2.2-.2.1-.2.2-.2.2-.1.3-.2.2-.1.2-.1.3-.1h.2l.3-.1v-.1zm1.5-.1h-.8l-.1.1h-.6v.1h.5l.1-.1h.9v-.1zm1 .1l.1-.1h-1.1v.1h1.1-.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M81.4 36.9v.4l-.1.1h.1v-.1l.1-.1v-.3h-.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M80.5 36.1h.2l.2.1h.1l.1.1.1.1.1.2.1.1v.2h.1v-.2l-.1-.2-.1-.1-.1-.1-.1-.1-.2-.1-.2-.1h-.2v.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M77.3 36.5h.1l.1-.1h.1l.2-.1h.4l.2-.1h.5l.2-.1h1.4V36h-1.2l-.2.1h-.7l-.2.1H78l-.2.1h-.3l-.1.1-.1.1h.1-.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M77.8 34.6v.1l-.5 1.8h.1l.5-1.8-.1-.1v.1-.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M81.2 34.3h-.3l-.2-.1H80l-.2.1h-.9l-.2.1h-.4l-.1.1H78l-.2.1.1.1.1-.1h.2l.2-.1h.2l.1-.1h.8l.3-.1h.9l.2.1h.3v-.1zm2.6 2.5V36l-.1-.3-.1-.2-.2-.2-.2-.2-.1-.2-.3-.1-.2-.2-.2-.1-.3-.1h-.2l-.2-.1h-.5v.1h.4l.3.1h.2l.2.1.3.1.2.1.2.2.2.2.2.1.1.2.1.3.1.2.1.2v.3l-.1.3h.1zm-.8 4l.8-4h-.1l-.8 4h.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st1",
      d: "M81.1 38.9v-.1H81l-.1-.1h-.5l-.1.1h-.5l-.1.1h-.3l-.1.1h-.1l-.1.1-.1.1h-.1l-.1.1-.1.1v.1l-.1.1-.1.1v.3l-.1.2.1.2.1.2v.1l.2.1h1l.1-.1h.2l.2-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1v-.2l.1-.2v-.6z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M83.5 42.5h2.2l.7-4.3.1-.2v-.1l.1-.2v-.2l.1-.1.1-.2.1-.1.1-.2.2-.1.1-.1.2-.2h.2l.2-.1.2-.1h.8l.3-2h-.4l-.2.1h-.2l-.1.1-.2.1-.1.1-.2.1-.1.1-.1.1-.2.1-.1.1-.1.1-.1.2-.1.1-.1.2.2-1.4h-2.2l-1.4 8.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M83.5 42.5h2.2l.7-4.3.1-.2v-.1l.1-.2v-.2l.1-.1.1-.2.1-.1.1-.2.2-.1.1-.1.2-.2h.2l.2-.1.2-.1h.8l.3-2h-.4l-.2.1h-.2l-.1.1-.2.1-.1.1-.2.1-.1.1-.1.1-.2.1-.1.1-.1.1-.1.2-.1.1-.1.2.2-1.4h-2.2l-1.4 8.1"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M63.4 42.5h2.2l.7-4.3.1-.2v-.3l.1-.1.1-.2v-.1l.1-.2.1-.1.2-.1.1-.1.2-.1.1-.1.3-.1h.2l.3-.1h.4l.1.1v-.3l.1-.2v-.2l.1-.2v-.2l.1-.2.1-.2.1-.1v-.1l.1-.2.1-.1v-.1h.1v-.1h-.8l-.2.1h-.2l-.2.1-.1.1h-.2l-.1.1-.1.1-.2.1-.1.2-.1.1-.1.1-.1.2-.1.1-.1.2.2-1.4h-2.1l-1.5 8.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st4",
      d: "M63.4 42.5h2.2l.7-4.3.1-.2v-.3l.1-.1.1-.2v-.1l.1-.2.1-.1.2-.1.1-.1.2-.1.1-.1.3-.1h.2l.3-.1h.4l.1.1v-.3l.1-.2v-.2l.1-.2v-.2l.1-.2.1-.2.1-.1v-.1l.1-.2.1-.1v-.1h.1v-.1h-.8l-.2.1h-.2l-.2.1-.1.1h-.2l-.1.1-.1.1-.2.1-.1.2-.1.1-.1.1-.1.2-.1.1-.1.2.2-1.4h-2.1l-1.5 8.1"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mastercard_svg__st3",
      d: "M63.7 36.8l-.1-.5-.1-.3-.2-.3-.2-.3-.2-.4-.2-.2-.3-.2-.3-.1-.3-.1-.3-.1H60l-.5.1-.5.1-.4.2-.5.3-.3.2-.3.3-.2.3-.3.3-.2.3-.1.3-.1.3-.1.3-.1.3v1.8l.1.5.1.5.2.4.2.3.3.3.3.3.3.2.3.2.4.2.4.1.4.1h3.2l.1-.1.1-.1.3-1.9-.2.1-.2.1-.2.1-.2.1-.2.1h-2.3l-.2-.3-.2-.1-.1-.1-.1-.1-.1-.1H59l-.1-.1-.1-.1-.1-.2-.1-.1V39h4.9v-.5l.1-.6.1-.6v-.5zm-2.1.7h-2.8V37l.1-.2.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1h.8l.1.1.1.1.1.1.1.1.1.1.1.1v.1l.1.2v.5l.3.2z"
    })))));
  };

  var _default = SvgMastercard;
  _exports["default"] = _default;
});