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
    global.Eqli = mod.exports;
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

  var SvgEqli = function SvgEqli(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "eqli_svg__c",
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
    })), /*#__PURE__*/React.createElement("filter", {
      id: "eqli_svg__a",
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
    })), /*#__PURE__*/React.createElement("circle", {
      id: "eqli_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#eqli_svg__a)",
      xlinkHref: "#eqli_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#C9A35E",
      fillRule: "evenodd",
      xlinkHref: "#eqli_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#eqli_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#eqli_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 15,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeLinejoin: "square",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M9.4 18.168a.349.349 0 01-.313.197H5.27a.345.345 0 01-.295-.17.348.348 0 01-.01-.349l6.94-12.51c.125-.224.483-.224.608 0l5.41 9.729a.37.37 0 01-.008.349.324.324 0 01-.295.17h-1.583a.357.357 0 01-.304-.18l-3.515-6.393-3.935 7.27h1.503c.116 0 .232.063.295.161a.354.354 0 01.018.34L9.4 18.168zm15.632-.322a.328.328 0 01-.009.349.324.324 0 01-.295.17H14.31a.35.35 0 01-.349-.349V16.63a.35.35 0 01.349-.349h7.413l-3.925-7.244-.743 1.485c-.125.232-.51.232-.626 0l-.697-1.386a.382.382 0 010-.313l1.735-3.479a.366.366 0 01.304-.188c.116 0 .25.063.313.18l6.948 12.51zm-4.516 1.386l1.726 3.13a.347.347 0 010 .349.324.324 0 01-.295.17H8.05a.357.357 0 01-.304-.179.348.348 0 01.009-.349l2.781-4.516 2.772-4.856a.336.336 0 01.313-.179c.134 0 .25.072.304.188l.698 1.386a.335.335 0 01-.01.331l-3.523 6.081h7.816l-.724-1.207a.328.328 0 01-.009-.349.357.357 0 01.304-.179h1.735c.125 0 .242.072.304.18z"
    }))));
  };

  var _default = SvgEqli;
  _exports["default"] = _default;
});