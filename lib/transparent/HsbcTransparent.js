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
    global.HsbcTransparent = mod.exports;
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

  var SvgHsbcTransparent = function SvgHsbcTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 300 56.18"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "hsbc_transparent_svg__a",
      clipPathUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M106.549 591.874h129.293v27.246H106.549v-27.246z"
    }))), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#hsbc_transparent_svg__a)",
      transform: "matrix(2.32049 0 0 -2.32049 -245.246 1438.661)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M123.047 607.02c-.015 0 0-7.775 0-7.775 0-.978-.84-1.835-1.94-1.835h-1.054v-.396h8.921v.396h-1.054c-1.085 0-1.94.871-1.94 1.835v17.322c0 .948.84 1.833 1.94 1.833h1.054v.398h-8.92v-.398h1.053c1.115 0 1.94-.885 1.94-1.833v-8.447h-10.57v8.447c0 .948.855 1.833 1.94 1.833h1.053v.398h-8.92v-.398h1.054c1.1 0 1.94-.885 1.94-1.833v-17.322c0-.964-.84-1.835-1.94-1.835h-1.055v-.396h8.921v.396h-1.053c-1.085 0-1.94.871-1.94 1.835 0 0 .014 7.775 0 7.775h10.57zm21.215-4.306c.077-1.28-.717-3.223-1.818-4.215-1.058-.956-2.566-1.788-4.582-1.788-2.29 0-4.262 1.222-4.98 1.497-.435.167-1.005.149-1.345-.061-.397-.245-.64-.641-.733-1.375h-.336v7.547h.336c.306-2.322 1.39-3.686 2.063-4.461 1.1-1.268 3.177-1.986 5.178-1.665 1.59.255 3.33 1.98 3.14 4.117-.069.77-.238 1.893-1.84 2.94-1.007.658-2.436 1.59-3.79 2.49-1.709 1.133-3.26 2.36-3.696 2.857-.572.65-1.284 1.588-1.284 3.086 0 1.283.49 2.749 1.528 3.727 1.04.977 2.444 1.71 4.46 1.71 2.017 0 3.545-1.07 4.064-1.313s1.093-.187 1.42 0c.321.184.535.459.627 1.192h.336v-7.15h-.336c-.306 2.323-1.314 4.063-2.017 4.705-.702.642-2.077 1.528-4.124 1.13-1.964-.38-2.92-1.268-3.1-2.84-.139-1.198.511-1.935.885-2.383.764-.916 5.611-3.663 7.806-5.561 1.131-.977 2.017-2.14 2.138-4.186m7.102-4.468c1.509-.467 4.382-.826 6.384.609 2.402 1.719 2.908 5.92-.482 8.109-1.365.882-4.771.82-5.902.555v-9.273zm0 10.5c1.069-.273 4.217-.347 5.438.429 1.914 1.215 2.578 3.165 2.225 4.889-.212 1.036-.76 1.992-1.706 2.657-1.863 1.314-4.551 1.1-5.957.673v-8.647zm7.027-.61c3.883-1.332 4.99-4.073 4.269-6.897-.846-3.32-4.59-3.995-5.804-4.156-.548-.071-1.947-.065-3.33-.065-2.468-.003-5.59.005-8.097.005v.397h1.284c.816 0 1.748.688 1.748 1.726v17.392c0 1.039-.932 1.74-1.741 1.74h-1.283v.399h7.745c1.863 0 2.875-.18 3.529-.306 1.099-.213 4.308-1.161 5.07-4.154.592-2.318-.564-5.24-3.39-6.08m24.689 10.28l.313-7.378-.443-.016c-.214 1.865-.917 3.178-1.803 4.034-.255.246-.739.744-1.437 1.184-1.163.733-2.893 1.38-4.948 1.015-3.086-.55-4.675-2.59-5.469-4.552-.978-2.413-1.597-6.54.062-10.022 1.345-2.826 3.931-4.003 5.926-4.307 1.7-.26 5.47-.18 8.341 3.696l.458-.305c-2.23-3.147-5.194-5.163-8.585-5.132-4.338.038-7.064 2.429-8.31 3.849-1.314 1.497-2.322 4.338-2.335 6.813-.01 2.2.475 4.648 1.265 6.08 1.36 2.459 4.201 4.903 7.943 5.27 2.803.274 4.645-.275 6.22-1.176.785-.451 1.227-.503 1.655-.321.427.184.772.55.772 1.268h.374z",
      fill: "#1a1818"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M223.224 597.016H201.46v21.759h21.764v-21.759z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M190.575 607.896l10.883-10.882v21.765l-10.883-10.883zm10.885-10.882h21.765l-10.883 10.882-10.882-10.882zm10.882 10.882l10.883 10.883H201.46l10.882-10.883zm10.883 10.883v-21.765l10.883 10.882-10.883 10.883z",
      fill: "#e71d1c"
    }))));
  };

  var _default = SvgHsbcTransparent;
  _exports["default"] = _default;
});