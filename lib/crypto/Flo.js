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
    global.Flo = mod.exports;
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

  var SvgFlo = function SvgFlo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "flo_svg__a",
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
      id: "flo_svg__d",
      width: "117.5%",
      height: "117.5%",
      x: "-8.8%",
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
      id: "flo_svg__c",
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
      id: "flo_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "flo_svg__e",
      d: "M15.98 19.297c-1.145 1.307-1.173 3.1.013 4.294 1.121-1.08 1.122-3.093-.013-4.294m.001-12.192c-2.705 3.128-2.603 6.826-.002 9.899 2.648-3.136 2.655-6.816.002-9.9m1.912 9.026c2.25-2.3 4.995-2.826 8.107-2.328-1.003 2.3-2.418 4.137-4.918 5.098.552-.433 1.055-.787 1.51-1.193.76-.677 1.298-1.497 1.567-2.482.085-.311-.025-.399-.311-.445-1.047-.168-2.03.052-2.969.48-1.58.72-2.867 1.829-4.074 3.034-.021.022-.03.054-.068.123 2.365.09 4.166 1.034 5.233 3.215-1.386.308-2.654.243-3.83-.513.886.272 1.77.47 2.74.01-.12-.2-.19-.434-.35-.565-.437-.357-.885-.718-1.38-.99-.765-.418-1.62-.614-2.566-.808 1.277 2.237.957 4.268-.604 6.234-.726-.915-1.234-1.872-1.373-3.002-.14-1.134.179-2.164.726-3.15-1.21-.194-3.821 1.207-4.225 2.287.937.474 1.851.258 2.792-.092-.676.696-2.625.981-3.896.562 1.055-2.15 2.847-3.097 5.265-3.187-.178-.18-.31-.319-.448-.452-1.006-.97-2.075-1.86-3.331-2.508-1.027-.53-2.104-.862-3.287-.685-.14.021-.279.055-.475.095.36 1.85 1.6 2.997 3.134 3.964C9.25 18.637 6.53 15.82 6 13.798c3.11-.504 5.87.048 8.11 2.399-1.853-4.127-.867-7.78 1.87-11.197 2.715 3.39 3.711 7.017 1.913 11.13"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#flo_svg__a)",
      xlinkHref: "#flo_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#2080A2",
      xlinkHref: "#flo_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#flo_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#flo_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#flo_svg__d)",
      xlinkHref: "#flo_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#flo_svg__e"
    }))));
  };

  var _default = SvgFlo;
  _exports["default"] = _default;
});