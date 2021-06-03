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
    global.Trtl = mod.exports;
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

  var SvgTrtl = function SvgTrtl(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "trtl_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "trtl_svg__a"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5,
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0",
      "in": "shadowBlurOuter1"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "trtl_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#trtl_svg__a)",
      xlinkHref: "#trtl_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00843D",
      xlinkHref: "#trtl_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#trtl_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#trtl_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16.005 5.454c.359 0 .71.094 1.02.273l6.51 3.758a2.041 2.041 0 011.02 1.768v7.668c0 .729-.39 1.403-1.02 1.767l-6.51 3.76a2.041 2.041 0 01-2.042 0l-6.51-3.76a2.041 2.041 0 01-1.02-1.767v-7.667c0-.73.389-1.404 1.02-1.768l6.51-3.759a2.04 2.04 0 011.02-.273h.002zm-.001-1.419c-.607 0-1.204.16-1.73.464l-6.51 3.758a3.47 3.47 0 00-1.73 2.997v7.667a3.47 3.47 0 001.73 2.996l6.51 3.759a3.46 3.46 0 003.46 0l6.51-3.759a3.47 3.47 0 001.73-2.996v-7.667a3.47 3.47 0 00-1.73-2.997l-6.51-3.759a3.464 3.464 0 00-1.73-.463z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.206 16.29a.426.426 0 01-.368-.212l-.784-1.357a.426.426 0 010-.426l.784-1.357a.426.426 0 01.368-.212h1.598c.152 0 .293.08.369.212l.783 1.357a.426.426 0 010 .426l-.783 1.357a.426.426 0 01-.369.213h-1.598zm-2.135-2.136a.426.426 0 00.369-.213l.783-1.357a.426.426 0 000-.426l-.977-1.692-1.906 1.04a.426.426 0 00-.221.383c.016.762.104 1.52.265 2.265h1.687zm5.868 0a.426.426 0 01-.368-.213l-.784-1.357a.426.426 0 010-.426l.977-1.692 1.906 1.04c.14.076.225.224.221.383-.016.762-.104 1.52-.264 2.265h-1.688zM16.21 9.071a.426.426 0 00-.409 0l-1.932 1.055.969 1.678a.426.426 0 00.368.213h1.599a.426.426 0 00.368-.213l.969-1.678-1.933-1.055zm-4.65 5.792a11.884 11.884 0 001.723 3.624l.94-1.629a.426.426 0 000-.425l-.783-1.357a.426.426 0 00-.368-.213H11.56zm8.89 0a11.884 11.884 0 01-1.724 3.624l-.94-1.629a.426.426 0 010-.425l.784-1.357a.426.426 0 01.368-.213h1.511zM15.206 17a.426.426 0 00-.368.213l-1.09 1.89c.586.73 1.257 1.389 1.997 1.963a.426.426 0 00.522 0 12.009 12.009 0 001.998-1.963l-1.091-1.89a.426.426 0 00-.369-.213h-1.599z"
    })))));
  };

  var _default = SvgTrtl;
  _exports["default"] = _default;
});