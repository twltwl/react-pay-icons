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
    global.Aion = mod.exports;
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

  var SvgAion = function SvgAion(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "aion_svg__a",
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
      id: "aion_svg__d",
      width: "115.9%",
      height: "115.9%",
      x: "-8%",
      y: "-5.7%",
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
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
      "in": "shadowMatrixOuter1"
    }), /*#__PURE__*/React.createElement("feMergeNode", {
      "in": "SourceGraphic"
    }))), /*#__PURE__*/React.createElement("linearGradient", {
      id: "aion_svg__c",
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
      id: "aion_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#aion_svg__a)",
      xlinkHref: "#aion_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00BFEC",
      fillRule: "evenodd",
      xlinkHref: "#aion_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#aion_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#aion_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF",
      filter: "url(#aion_svg__d)",
      transform: "translate(5 4)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10.971 18.15c-3.957 0-7.176-3.199-7.176-7.13 0-3.932 3.22-7.13 7.176-7.13 3.957 0 7.176 3.198 7.176 7.13 0 3.931-3.219 7.13-7.176 7.13zm0-12.864c-3.181 0-5.77 2.572-5.77 5.734 0 3.161 2.589 5.733 5.77 5.733 3.182 0 5.77-2.572 5.77-5.733 0-3.162-2.588-5.734-5.77-5.734zm5.025-2.415a9.638 9.638 0 00-5.025-1.406 9.67 9.67 0 00-4.666 1.198l-.684-1.22a11.083 11.083 0 015.35-1.376c2.04 0 4.032.558 5.761 1.614l-.736 1.19zm2.095 16.51l-.909-1.067a9.519 9.519 0 003.405-7.294h1.406c0 3.226-1.422 6.273-3.902 8.36zm-7.12 2.59c-2.557 0-5.049-.89-7.016-2.505l.896-1.076a9.667 9.667 0 006.12 2.185c1.56 0 3.048-.36 4.422-1.068l.647 1.24a11.107 11.107 0 01-5.069 1.225z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.35 8.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM1.86 16.976A10.742 10.742 0 01.067 11.02c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z",
      opacity: 0.5
    })))));
  };

  var _default = SvgAion;
  _exports["default"] = _default;
});