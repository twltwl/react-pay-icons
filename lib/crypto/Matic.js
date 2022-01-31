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
    global.Matic = mod.exports;
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

  var SvgMatic = function SvgMatic(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 96,
      height: 96,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#matic_svg__a)"
    }, /*#__PURE__*/React.createElement("g", {
      filter: "url(#matic_svg__b)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z",
      fill: "#2B6DEF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z",
      fill: "url(#matic_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      }
    }), /*#__PURE__*/React.createElement("path", {
      d: "M91.5 45c0 24.024-19.476 43.5-43.5 43.5S4.5 69.024 4.5 45 23.976 1.5 48 1.5 91.5 20.976 91.5 45z",
      stroke: "#000",
      strokeOpacity: 0.097,
      style: {
        mixBlendMode: "soft-light"
      }
    })), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m66.002 24-8.988 5.182h-.01v10.366l-.033.006L30 24l-8.995 5.183L21 29.18v32.231l8.995 5.186.006-.04v.038L39 61.41V49.926l8.98 5.175.006.012.007-.005 9.012-5.159v11.466l8.958 5.163v.027l.024-.013.015.008.011-.024 8.948-5.154V29.21l.04-.023L66.002 24z",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "matic_svg__c",
      x1: 3,
      y1: 0,
      x2: 3,
      y2: 90,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#fff",
      stopOpacity: 0.5
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopOpacity: 0.5
    })), /*#__PURE__*/React.createElement("clipPath", {
      id: "matic_svg__a"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      transform: "scale(3)",
      d: "M0 0h32v32H0z"
    })), /*#__PURE__*/React.createElement("filter", {
      id: "matic_svg__b",
      x: 0,
      y: -1.5,
      width: 96,
      height: 96,
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /*#__PURE__*/React.createElement("feFlood", {
      floodOpacity: 0,
      result: "BackgroundImageFix"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "SourceAlpha",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    }), /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199474 0"
    }), /*#__PURE__*/React.createElement("feBlend", {
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow"
    }), /*#__PURE__*/React.createElement("feBlend", {
      "in": "SourceGraphic",
      in2: "effect1_dropShadow",
      result: "shape"
    })))));
  };

  var _default = SvgMatic;
  _exports["default"] = _default;
});