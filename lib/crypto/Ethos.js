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
    global.Ethos = mod.exports;
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

  var SvgEthos = function SvgEthos(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "ethos_svg__a",
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
      id: "ethos_svg__d",
      width: "117.5%",
      height: "116.7%",
      x: "-8.8%",
      y: "-6%",
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
      id: "ethos_svg__c",
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
      id: "ethos_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ethos_svg__a)",
      xlinkHref: "#ethos_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00FFBA",
      fillRule: "evenodd",
      xlinkHref: "#ethos_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ethos_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ethos_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF",
      filter: "url(#ethos_svg__d)",
      transform: "translate(6 5)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4.871 4.904a1.707 1.707 0 00-.194 2.148 1.693 1.693 0 001.42.756 2.188 2.188 0 01-.001 4.377A6.086 6.086 0 011.819 1.767 6.084 6.084 0 0110 1.425a6.085 6.085 0 00-2.182 4.673 2.188 2.188 0 002.175 2.189 2.188 2.188 0 01-2.188-2.189 1.69 1.69 0 00-.29-.955 1.727 1.727 0 00-.754-.622 1.723 1.723 0 00-1.33 0 1.714 1.714 0 00-.56.383zm14.64 6.628a6.094 6.094 0 01-1.242 6.613 6.084 6.084 0 01-10.45-4.243 2.188 2.188 0 114.375 0 1.7 1.7 0 001.045 1.577c.43.18.913.178 1.341-.005a1.721 1.721 0 00.905-.918 1.717 1.717 0 00-.916-2.23 1.694 1.694 0 00-.665-.134 2.188 2.188 0 010-4.377 6.081 6.081 0 015.606 3.717z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.994 11.714c1.208 0 2.188.98 2.188 2.188a6.085 6.085 0 01-10.467 4.226A6.087 6.087 0 016.096 7.815a2.188 2.188 0 010 4.377c-.34-.001-.672.1-.954.29a1.726 1.726 0 00-.622.755 1.71 1.71 0 00.346 1.852v.002a1.706 1.706 0 002.184.23 1.7 1.7 0 00.755-1.42c0-1.207.98-2.187 2.189-2.187zm9.326-8.396a6.09 6.09 0 01-5.417 8.868 2.189 2.189 0 010-4.378 1.71 1.71 0 001.577-1.045 1.721 1.721 0 00-.054-1.444 1.705 1.705 0 00-2.477-.64 1.698 1.698 0 00-.756 1.42 2.188 2.188 0 11-4.375-.001 6.085 6.085 0 019.717-4.886l.004.003a6.103 6.103 0 011.78 2.103z",
      opacity: 0.7
    })))));
  };

  var _default = SvgEthos;
  _exports["default"] = _default;
});