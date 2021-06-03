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
    global.Chips = mod.exports;
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

  var SvgChips = function SvgChips(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "chips_svg__a",
      width: "111.7%",
      height: "111.7%",
      x: "-5.8%",
      y: "-4.2%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "shadowBlurOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
    })), /*#__PURE__*/React.createElement("filter", {
      id: "chips_svg__d",
      width: "121.9%",
      height: "117.5%",
      x: "-10.9%",
      y: "-6.2%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "shadowBlurOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "chips_svg__c",
      x1: "50%",
      x2: "50%",
      y1: "0%",
      y2: "100%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#FFF",
      stopOpacity: 0.5
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopOpacity: 0.5
    })), /*#__PURE__*/React.createElement("circle", {
      id: "chips_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "chips_svg__e",
      d: "M13.548 24.408a295794.353 295794.353 0 002.536-3.277c.949.148 1.884.064 2.778-.324.323-.14.612-.358.916-.542.043-.026.083-.06.116-.085l3.072 3.038c-.255.17-.508.354-.777.512a9.368 9.368 0 01-3.379 1.17 10.47 10.47 0 01-2.122.08 11.919 11.919 0 01-3.14-.572zm-.966-.376a9.992 9.992 0 01-.996-.514 8.953 8.953 0 01-3.71-4.15 9.975 9.975 0 01-.787-2.86 12.322 12.322 0 01-.062-2.308c.123-1.975.724-3.79 1.935-5.387 1.118-1.474 2.586-2.483 4.323-3.13a9.661 9.661 0 012.565-.59c.663-.057 1.333-.114 1.996-.085.41.017.813.057 1.21.12a683038.835 683038.835 0 01-2.572 3.734 5.29 5.29 0 00-2.41.816c-1.33.844-2.126 2.06-2.5 3.56a7.241 7.241 0 00-.216 1.934c.009.342.038.677.089 1.004l-.308.447c-.248.36.057.836.498.778l.112-.014c.258.729.649 1.41 1.19 2.035.336.386.711.71 1.124.97l-1.445 3.491a.49.49 0 00-.036.15zm7.443-18.698a8.188 8.188 0 012.496 1.141c.138.094.264.205.396.308.025.019.051.036.083.058-.042.048-.066.08-.095.108-.911.898-1.824 1.793-2.732 2.694-.1.1-.163.116-.284.03a4.28 4.28 0 00-1.201-.596l1.283-3.375.034-.087a.488.488 0 00.02-.281zm-3.704 10.948l-4.753.621L19.476 5.42l.044.02-3.055 8.031 5.575-.88-8.899 11.51-.043-.03 3.223-7.789z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#chips_svg__a)",
      xlinkHref: "#chips_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#598182",
      fillRule: "evenodd",
      xlinkHref: "#chips_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#chips_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#chips_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    })), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#chips_svg__d)",
      xlinkHref: "#chips_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#chips_svg__e"
    }))));
  };

  var _default = SvgChips;
  _exports["default"] = _default;
});