function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
    global.Agi = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgAgi = function SvgAgi(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "agi_svg__a",
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
      id: "agi_svg__d",
      width: "135%",
      height: "117.5%",
      x: "-17.5%",
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
      result: "shadowMatrixOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
      "in": "shadowMatrixOuter1"
    }), /*#__PURE__*/React.createElement("feMergeNode", {
      "in": "SourceGraphic"
    }))), /*#__PURE__*/React.createElement("linearGradient", {
      id: "agi_svg__c",
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
      id: "agi_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#agi_svg__a)",
      xlinkHref: "#agi_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#6916FF",
      fillRule: "evenodd",
      xlinkHref: "#agi_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#agi_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#agi_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF",
      filter: "url(#agi_svg__d)",
      transform: "translate(11 5)"
    }, /*#__PURE__*/React.createElement("path", {
      fillOpacity: 0.5,
      d: "M6.144.424a.28.28 0 0 1-.082-.363.289.289 0 0 1 .313 0A5.63 5.63 0 0 1 8.25 1.333c.303.281.557.609.75.97.204.368.371.753.5 1.152.123.413.187.842.188 1.272-.063.425-.126 2.485-1.313 3.455A.714.714 0 0 1 7.437 8a.627.627 0 0 1-.062-.727A5.047 5.047 0 0 0 7.5 2C7.1 1.434 6.646.907 6.144.424zM4.3 19.006c.125.121.125.242.063.303-.063.06-.188.121-.25.06a5.63 5.63 0 0 1-1.876-1.272 3.709 3.709 0 0 1-.75-.97 6.463 6.463 0 0 1-.5-1.151A4.482 4.482 0 0 1 .8 14.703c.063-.424.125-2.485 1.312-3.455a.714.714 0 0 1 .938.182.539.539 0 0 1 0 .728 5.047 5.047 0 0 0-.125 5.272c.405.567.866 1.095 1.375 1.576z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.694 14.006a5.473 5.473 0 0 0-1.313-3.151 10.816 10.816 0 0 0-2.625-1.94 14.466 14.466 0 0 1-2.375-1.642 4.032 4.032 0 0 1-1.187-2.121 4.243 4.243 0 0 1 .306-2.48A6.692 6.692 0 0 1 4.256.43.26.26 0 0 0 4.32.127a.242.242 0 0 0-.375-.06 5.577 5.577 0 0 0-2.438 2.06A5.01 5.01 0 0 0 .625 5.4a5.25 5.25 0 0 0 .438 1.697 6 6 0 0 0 1 1.455A10.78 10.78 0 0 0 4.75 10.43c.848.44 1.645.969 2.375 1.576a3.603 3.603 0 0 1 1.188 2.182c.176.879.066 1.79-.313 2.606a6.13 6.13 0 0 1-1.813 2.182.207.207 0 0 0-.063.303.242.242 0 0 0 .375.06 7.801 7.801 0 0 0 2.376-2.12 5.18 5.18 0 0 0 .819-3.213z"
    })))));
  };

  var _default = SvgAgi;
  _exports["default"] = _default;
});