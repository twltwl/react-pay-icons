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
    global.Arn = mod.exports;
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

  var SvgArn = function SvgArn(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "arn_svg__a",
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
      id: "arn_svg__d",
      width: "119.4%",
      height: "117.5%",
      x: "-9.7%",
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
      id: "arn_svg__c",
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
      id: "arn_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "arn_svg__e",
      d: "M11.76 13.102l4.282-7.538c.008-.014.024-.023.08 0l4.074 7.401a.976.976 0 00.025 1.532l-3.763 6.788a1.008 1.008 0 00-.86-.006l-3.873-6.899a.971.971 0 00.034-1.278zm-.41 1.534l3.888 6.925a.974.974 0 00-.18.356c-3.139-.752-5.089-1.217-5.852-1.396a9.556 9.556 0 01-.844-1.438l2.492-4.386a1.024 1.024 0 00.496-.06zm-.539-1.883l-3.087-5.5C9.828 6.136 12.439 5.55 15.559 5.5l-4.162 7.326a1.008 1.008 0 00-.586-.073zm-.42.176a.977.977 0 00.034 1.608l-2.29 4.03a9.464 9.464 0 01-.67-2.954l-.463-7.382a.889.889 0 01.332-.748l3.058 5.446zm6.6 8.998a.974.974 0 00-.175-.355l3.818-6.887a1.018 1.018 0 00.496-.024l2.474 4.494c-.21.432-.452.848-.724 1.245l-5.89 1.527zm-.741 1.2a.993.993 0 00.747-.739l5.456-1.415a9.661 9.661 0 01-2.336 2.092l-3.623 2.314a.914.914 0 01-.244.11v-2.361zm-.454 0V25.5a.915.915 0 01-.29-.121l-3.623-2.314a9.664 9.664 0 01-2.246-1.982c.99.235 2.793.665 5.409 1.291.08.373.374.668.75.754zm5.37-10.334a1.011 1.011 0 00-.564-.028l-3.997-7.262c3.032.067 5.58.646 7.641 1.735l-3.08 5.555zm.383.241l3.09-5.572a.89.89 0 01.36.769l-.463 7.383a9.465 9.465 0 01-.7 3.025l-2.314-4.203a.974.974 0 00.027-1.402zM16 10.234a.55.55 0 00-.541.534v1.954L12.573 14.5l.309.667 2.577-.844v1.954l-.722.533v.533L16 16.987l1.263.355v-.533l-.722-.533v-1.954l2.533.89.353-.712-2.886-1.778v-1.954a.55.55 0 00-.54-.533z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#arn_svg__a)",
      xlinkHref: "#arn_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#0092B5",
      fillRule: "evenodd",
      xlinkHref: "#arn_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#arn_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#arn_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#arn_svg__d)",
      xlinkHref: "#arn_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#arn_svg__e"
    }))));
  };

  var _default = SvgArn;
  _exports["default"] = _default;
});