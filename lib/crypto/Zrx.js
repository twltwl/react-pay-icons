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
    global.Zrx = mod.exports;
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

  var SvgZrx = function SvgZrx(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "zrx_svg__a",
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
      id: "zrx_svg__d",
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
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "zrx_svg__c",
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
      id: "zrx_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "zrx_svg__e",
      d: "M15.496 26c-.27-.028-.54-.053-.81-.085a10.88 10.88 0 01-4.122-1.364c-.019-.01-.036-.025-.073-.05 2.206-1.65 4.402-3.29 6.61-4.94l.665.647c.37.362.742.72 1.105 1.087.09.09.155.089.26.035a7.149 7.149 0 002.728-2.39l.107-.158c.031.036.06.065.084.097.767 1.022 1.533 2.044 2.303 3.063.067.088.059.14-.012.22-1.783 2.026-3.999 3.274-6.67 3.701-.336.054-.677.074-1.016.111-.045.005-.09.017-.134.026h-1.025zm.97-22c.186.019.373.039.56.056 1.576.15 3.05.617 4.423 1.4.02.012.037.026.07.05l-6.718 4.819c-.089-.084-.175-.164-.26-.247-.472-.46-.946-.919-1.415-1.383-.075-.074-.132-.082-.226-.035a7.147 7.147 0 00-2.77 2.424l-.1.15-2.468-3.288c.249-.264.479-.527.728-.77 1.623-1.583 3.55-2.59 5.783-2.995.43-.078.869-.104 1.304-.155.049-.005.098-.017.146-.026h.942zM6.458 9.534l4.995 6.548-1.008 1.034c-.251.257-.5.517-.756.77-.072.072-.075.127-.031.215a7.134 7.134 0 002.423 2.77c.035.022.07.045.103.07.006.004.009.014.027.048L8.95 23.435C7 21.756 5.735 19.687 5.227 17.178c-.544-2.686-.103-5.224 1.232-7.644zm14.175 4.37l.918-.953c.256-.266.508-.535.77-.794.082-.081.081-.142.033-.238a7.137 7.137 0 00-2.45-2.798c-.037-.025-.073-.052-.136-.097l3.279-2.46c1.857 1.59 3.09 3.55 3.656 5.915.707 2.952.077 5.872-1.147 7.928l-4.923-6.503z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#zrx_svg__a)",
      xlinkHref: "#zrx_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#302C2C",
      fillRule: "evenodd",
      xlinkHref: "#zrx_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#zrx_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#zrx_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    })), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#zrx_svg__d)",
      xlinkHref: "#zrx_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#zrx_svg__e"
    }))));
  };

  var _default = SvgZrx;
  _exports["default"] = _default;
});