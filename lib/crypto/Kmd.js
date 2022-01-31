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
    global.Kmd = mod.exports;
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

  var SvgKmd = function SvgKmd(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 32,
      height: 32,
      viewBox: "0 0 96 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#kmd_svg__a)"
    }, /*#__PURE__*/React.createElement("g", {
      filter: "url(#kmd_svg__b)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z",
      fill: "#2B6680"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z",
      fill: "url(#kmd_svg__c)",
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
    })), /*#__PURE__*/React.createElement("g", {
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 45a30 30 0 1 0 60 .115v-.23a30.21 30.21 0 0 0-.82-6.855 3.216 3.216 0 0 0-5.871-.941 3.219 3.219 0 0 0-.39 2.432 23.577 23.577 0 1 1-17.452-17.442 3.218 3.218 0 0 0 1.491-6.26A29.997 29.997 0 0 0 18 45"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M63.163 23.058c-.043.04-.071.089-.112.132a4.744 4.744 0 0 0-1.275 2.837v.51c0 .117-.025.232-.038.35a8.567 8.567 0 0 1-11.123 7.32 11.036 11.036 0 0 0-10.134 2.645c-.11.102-.23.189-.337.296a11.1 11.1 0 1 0 15.699 15.698c.46-.466.875-.973 1.244-1.514a11.094 11.094 0 0 0 1.697-8.92 8.502 8.502 0 0 1-.163-.605c0-.03-.018-.059-.025-.09a8.572 8.572 0 0 1 7.633-10.467c.064 0 .125-.018.189-.02.181 0 .362-.021.543-.021h.043a4.748 4.748 0 0 0 2.931-1.379c.187-.193.357-.401.51-.622a4.782 4.782 0 0 0-7.28-6.148"
    }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "kmd_svg__c",
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
      id: "kmd_svg__a"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      transform: "scale(3)",
      d: "M0 0h32v32H0z"
    })), /*#__PURE__*/React.createElement("filter", {
      id: "kmd_svg__b",
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

  var _default = SvgKmd;
  _exports["default"] = _default;
});