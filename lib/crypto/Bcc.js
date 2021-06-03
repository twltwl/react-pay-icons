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
    global.Bcc = mod.exports;
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

  var SvgBcc = function SvgBcc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "bcc_svg__a",
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
      id: "bcc_svg__d",
      width: "120.2%",
      height: "115.9%",
      x: "-10.1%",
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
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "bcc_svg__c",
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
      id: "bcc_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "bcc_svg__e",
      d: "M7.351 18.32c-.008-3.012 2.113-5.54 5.147-6.109.26-.048.334-.135.327-.389a41.633 41.633 0 010-2.029c.005-.243-.072-.388-.281-.524-.729-.475-1.027-1.339-.76-2.116a1.875 1.875 0 011.888-1.29c.77.036 1.475.609 1.683 1.37.21.764-.082 1.595-.76 2.026-.24.152-.315.305-.307.577.02.676.013 1.352.004 2.029-.003.196.026.301.259.331.443.059.876.178 1.286.354.154.066.237.026.34-.088a1249.61 1249.61 0 014.318-4.733c.149-.162.106-.273.038-.44-.352-.868-.146-1.805.518-2.425.606-.565 1.608-.726 2.332-.375.852.413 1.32 1.205 1.262 2.135-.078 1.244-1.288 2.181-2.516 1.926-.249-.052-.393.008-.554.186a787.317 787.317 0 01-4.024 4.414c-.163.177-.186.272.017.448 2.204 1.922 2.804 4.818 1.548 7.456-.095.2-.074.314.08.46.367.349.722.71 1.074 1.075.14.145.271.183.479.13.81-.204 1.65.16 2.054.863a1.867 1.867 0 01-.261 2.213c-.554.589-1.459.76-2.162.408-.768-.384-1.192-1.205-1.01-2.048.053-.242-.003-.38-.165-.533a19.247 19.247 0 01-.867-.874c-.163-.176-.264-.179-.45-.004-1.899 1.77-4.101 2.228-6.531 1.364-2.416-.857-3.999-3.206-4.006-5.787"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#bcc_svg__a)",
      xlinkHref: "#bcc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#F7931C",
      fillRule: "evenodd",
      xlinkHref: "#bcc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#bcc_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#bcc_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#bcc_svg__d)",
      xlinkHref: "#bcc_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#bcc_svg__e"
    }))));
  };

  var _default = SvgBcc;
  _exports["default"] = _default;
});