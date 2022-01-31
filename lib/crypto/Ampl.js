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
    global.Ampl = mod.exports;
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

  var SvgAmpl = function SvgAmpl(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 32,
      height: 32,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "ampl_svg__a"
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
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-10.3%",
      y: "-7.4%",
      width: "120.6%",
      height: "120.6%",
      filterUnits: "objectBoundingBox",
      id: "ampl_svg__d"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5,
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0",
      "in": "shadowBlurOuter1"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "ampl_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "ampl_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.511 22.25a6.278 6.278 0 0 1-.002-.709c.08-.024.162-.04.246-.05.242-.041.481-.097.717-.167.064-.02.128-.042.19-.066.31-.119.584-.315.792-.569.144-.177.27-.368.378-.57.152-.276.287-.561.406-.853.241-.588.481-1.178.72-1.769l2.459-6.093c.777-1.931 1.54-3.867 2.287-5.809.015-.04.032-.078.049-.118.276-.076.548-.154.83-.227.016.04.032.074.045.11l.95 2.601a919.58 919.58 0 0 0 3.273 8.854c.304.805.61 1.61.919 2.412.122.328.265.648.429.958a5 5 0 0 0 .234.387c.257.392.656.675 1.117.791.248.065.5.114.754.147l.181.026c.026.079.01.155.012.23.003.076 0 .16 0 .241.003.078.001.155-.004.233-.026.004-.046.008-.066.01h-6.363a.16.16 0 0 1-.014-.043v-.639a.134.134 0 0 1 .008-.028.955.955 0 0 1 .161-.03c.262-.033.52-.083.776-.148.102-.028.203-.064.303-.1.05-.02.098-.043.144-.07.251-.138.352-.354.33-.63a2.086 2.086 0 0 0-.067-.37c-.05-.19-.12-.373-.186-.557a1449.129 1449.129 0 0 1-3.911-10.82c-.014-.04-.018-.083-.059-.118-.013.008-.03.014-.04.025a.246.246 0 0 0-.024.058c-.63 1.776-1.301 3.538-1.97 5.3-.493 1.306-.987 2.61-1.447 3.927a84.001 84.001 0 0 0-.535 1.59 3.728 3.728 0 0 0-.15.623 1.49 1.49 0 0 0-.012.427.667.667 0 0 0 .276.466c.102.071.214.128.332.167.188.065.382.114.579.146.217.039.436.069.654.103l.047.008a.205.205 0 0 1 .01.048v.618a.193.193 0 0 1-.008.036.563.563 0 0 1-.059.01H7.511v.001z",
      id: "ampl_svg__e"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ampl_svg__a)",
      xlinkHref: "#ampl_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      xlinkHref: "#ampl_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ampl_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ampl_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 16,
      cy: 15,
      r: 14.5
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ampl_svg__d)",
      xlinkHref: "#ampl_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#ampl_svg__e"
    })))));
  };

  var _default = SvgAmpl;
  _exports["default"] = _default;
});