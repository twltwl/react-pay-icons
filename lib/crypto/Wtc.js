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
    global.Wtc = mod.exports;
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

  var SvgWtc = function SvgWtc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "wtc_svg__a",
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
      id: "wtc_svg__d",
      width: "117.5%",
      height: "126.9%",
      x: "-8.8%",
      y: "-9.6%",
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
      id: "wtc_svg__c",
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
      id: "wtc_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#wtc_svg__a)",
      xlinkHref: "#wtc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#8200FF",
      fillRule: "evenodd",
      xlinkHref: "#wtc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#wtc_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#wtc_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    })), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF",
      filter: "url(#wtc_svg__d)",
      transform: "translate(6 9)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12.414 3.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 01-.836-.492.662.662 0 01-.02-.164V1.52c0-.31.215-.58.522-.656L11.557.02a.69.69 0 01.836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58L.857 9.73a.69.69 0 01-.836-.492A.662.662 0 010 9.075V1.52C0 1.21.215.94.522.864L3.971.02a.69.69 0 01.836.492c.014.053.02.108.02.163v2.45zM15.695.885l3.448-.844a.69.69 0 01.836.491.653.653 0 01.021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V1.54c0-.31.215-.58.522-.655z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.897 3.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164V4.643c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V4.643c0-.31.215-.58.522-.655l2.58-.632z",
      opacity: 0.504
    })))));
  };

  var _default = SvgWtc;
  _exports["default"] = _default;
});