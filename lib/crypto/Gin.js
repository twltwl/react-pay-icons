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
    global.Gin = mod.exports;
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

  var SvgGin = function SvgGin(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "gin_svg__c"
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
      id: "gin_svg__a"
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
      id: "gin_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#gin_svg__a)",
      xlinkHref: "#gin_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#008DDE",
      xlinkHref: "#gin_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#gin_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#gin_svg__b"
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
      d: "M23.36 16.3a.666.666 0 100-1.333h-1.52v-1.505h3.18a.666.666 0 100-1.332h-3.194a3.242 3.242 0 00-2.69-2.904V7.623a.666.666 0 10-1.332 0V9.18h-1.505V5.678a.666.666 0 10-1.332 0v3.503h-1.505V7.623a.666.666 0 00-1.332 0v1.603a3.242 3.242 0 00-2.69 2.904H5.678a.666.666 0 100 1.332h3.749v1.505h-1.52a.666.666 0 100 1.332h1.52v1.505H6.529a.666.666 0 100 1.332H9.44a3.242 3.242 0 002.69 2.904v1.036a.666.666 0 101.332 0v-.991h1.505v3.017a.666.666 0 001.332 0v-3.017h1.505v1.558a.666.666 0 101.332 0V22.04a3.242 3.242 0 002.69-2.904h4.41a.666.666 0 100-1.332h-4.397v-1.505h1.52zm-2.585 2.549a2.175 2.175 0 01-2.172 2.172h-5.94a2.174 2.174 0 01-2.172-2.172v-6.432c0-1.198.974-2.172 2.172-2.172h5.94c1.198 0 2.172.974 2.172 2.172v6.432z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.076 11.815a7.64 7.64 0 00-.771.027c-.405.045-.703.413-.716.81-.02.903-.003 1.806-.009 2.708.013.46-.03.925.036 1.382.066.407.463.668.859.668 1.228.008 2.456.003 3.684.004v.508h-3.954l-.509 1.527h3.936c.46-.013.925.03 1.382-.036.407-.066.668-.463.668-.859.009-1.606 0-3.213.004-4.82-.015-.432.038-.87-.05-1.296-.092-.434-.557-.647-.968-.621h-2.82c-.257.005-.514 0-.772-.002zm.03 1.528h3.053v2.544h-3.052v-2.544z"
    })))));
  };

  var _default = SvgGin;
  _exports["default"] = _default;
});