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
    global.Aywa = mod.exports;
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

  var SvgAywa = function SvgAywa(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 32,
      height: 32,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "aywa_svg__c"
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
      id: "aywa_svg__a"
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
      id: "aywa_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#aywa_svg__a)",
      xlinkHref: "#aywa_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#3355B5",
      xlinkHref: "#aywa_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#aywa_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#aywa_svg__b"
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
      d: "M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 16 4zm0 21.79c-5.959 0-10.79-4.831-10.79-10.79C5.21 9.041 10.042 4.21 16 4.21c5.959 0 10.79 4.831 10.79 10.79A10.79 10.79 0 0 1 16 25.79z",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m19.016 12.708-.028-.1-.027-.101-.028-.11-.036-.092-.028-.1-.037-.092-.045-.101-.037-.092-.046-.082-.046-.092-.045-.083-.055-.082-.046-.073-.055-.083-.055-.064-.064-.073-.055-.065-.055-.064-.065-.055-.064-.055-.064-.055-.064-.046-.073-.045-.065-.037-.073-.046-.064-.027-.074-.037-.073-.028-.073-.027-.083-.019-.073-.018-.073-.018-.083-.01-.082-.008-.074-.01h-.247l-.083.01-.082.009-.092.009-.082.018-.083.019-.082.018-.092.027-.083.028-.091.027-.092.037-.082.037-.092.046-.083.036-.091.046-.092.055-.082.046-.092.055-.092.064-.082.055-.092.064-.092.074-.091.064-.083.073-.091.073-.083.083-.092.082-.091.083-.083.091-.091.092-.083.092-.082.091-.092.101-.083.101-.082.101-.083.11-.082.11-.083.12-.11.155-.11.165-.11.174-.1.165-.101.183-.101.175-.092.174-.091.183-.083.183-.082.184-.074.183-.064.147 6.591-2.154zm-5.949 3.218 5.839-.046.027-.128.028-.129.027-.128.028-.137.018-.129.028-.128.018-.129.01-.128.018-.128.009-.128.009-.12.009-.128.01-.128v-.266z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 4.513C10.208 4.513 5.513 9.208 5.513 15S10.208 25.487 16 25.487 26.487 20.792 26.487 15A10.487 10.487 0 0 0 16 4.513zm5.94 11.33-.183 1.082h-1.641l-.055.183-.101.275-.1.275-.11.275-.083.275-.12.266-.128.266-.128.266-.138.256-.137.257-.147.248-.147.247-.155.248-.184.238-.082.12-.083.118-.852-1.43.082-.119.083-.119.073-.12.074-.118.073-.12.073-.119.074-.119.064-.119.064-.128.064-.129.064-.128.064-.128.055-.129.055-.128.055-.128.055-.129.055-.128.046-.128v-.11l-6.664.055v1.695l-1.705 1.183v-2.878h-.495l-.183.064-.312-1.091 1.54-.504v-.12l.064-.192.092-.174.064-.183.073-.184.074-.183.073-.183.073-.184.083-.183.082-.183.083-.184.082-.174.092-.174.092-.174.091-.174.092-.175.1-.174.102-.165.1-.165.101-.174.101-.165.11-.156.11-.156.101-.174.11-.156.11-.146.12-.147.155-.128.12-.138.118-.137.12-.138.128-.128.128-.128.128-.129.129-.119.128-.119.128-.12.101-.1.138-.11.137-.1.138-.102.137-.1.138-.092.137-.083.138-.082.137-.074.138-.073.119-.1.165-.047.128-.055.129-.055.128-.045h2.209l.101.045.1.046.102.055.1.055.092.064.092.065.091.073.092.073.083.083.082.082.083.092.082.092.073.1.074.101.073.101.073.11.065.11.064.12.064.118.055.129.055.128.055.128.055.138.046.137v1.623l.916-.293.312 1.09-1.173.385v1.495l-.046.275-.055.275-.064.275v.119l1.604-.028z",
      fillRule: "nonzero"
    })))));
  };

  var _default = SvgAywa;
  _exports["default"] = _default;
});