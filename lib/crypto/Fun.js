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
    global.Fun = mod.exports;
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

  var SvgFun = function SvgFun(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "fun_svg__a",
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
      id: "fun_svg__d",
      width: "113.6%",
      height: "113.6%",
      x: "-6.8%",
      y: "-6.8%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
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
      id: "fun_svg__c",
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
      id: "fun_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "fun_svg__e",
      d: "M12.841 25.538a9.568 9.568 0 01-3.447-1.754c-1-.763-1.865-1.685-2.56-2.729A10.887 10.887 0 015.26 17.45a10.709 10.709 0 010-4.678 12.7 12.7 0 011.477-3.703 10.126 10.126 0 014.136-3.704 10.78 10.78 0 011.87-.78c.985 1.17 1.97 2.437 2.955 3.704.098.195.295.293.394.487a7.647 7.647 0 00-2.856.683 6.723 6.723 0 00-2.068 1.656 8.176 8.176 0 00-1.28 2.437 5.954 5.954 0 00.098 3.216l4.235-3.314c.984 1.267 1.97 2.437 2.954 3.704-1.379 1.072-2.856 2.144-4.235 3.313 1.38 1.755 2.856 3.606 4.235 5.458-1.456.17-2.932.038-4.333-.39zm9.384-11.806a5.964 5.964 0 00-.127-.474c-.134.104-3.064 2.32-4.235 3.314-.985-1.267-1.97-2.436-2.954-3.703 1.379-1.072 2.856-2.144 4.234-3.314a917.874 917.874 0 00-4.234-5.36c0-.098-.099-.098-.099-.195h1.38a10.9 10.9 0 016.892 2.534c.94.769 1.74 1.692 2.364 2.729a8.812 8.812 0 011.378 3.703c.264 1.52.23 3.074-.098 4.58a9.58 9.58 0 01-1.576 3.51 10.5 10.5 0 01-2.462 2.63 8.663 8.663 0 01-3.25 1.755 68.087 68.087 0 01-2.461-3.119 7.44 7.44 0 01-.788-1.072 6.089 6.089 0 004.825-2.339c.567-.718.97-1.55 1.182-2.436.183-.74.193-1.654.029-2.743zm-4.65 8.16a60.909 60.909 0 002.117 2.7 8.037 8.037 0 002.548-1.487 9.831 9.831 0 002.309-2.474 8.849 8.849 0 001.455-3.239c.309-1.415.34-2.875.088-4.332a8.127 8.127 0 00-1.281-3.423 9.836 9.836 0 00-2.206-2.545 10.151 10.151 0 00-6.328-2.36c.913 1.15 1.837 2.323 3.45 4.374l.432.55-.535.454a55.363 55.363 0 01-2.145 1.716c-.07.053-.906.69-1.534 1.171.26.327.559.7 1.018 1.267.454.561.753.933 1.012 1.26.457-.373.956-.765 1.553-1.223.096-.074 1.67-1.272 2.113-1.617l.844-.656.318 1.014a6.671 6.671 0 01.112 3.6 7 7 0 01-1.316 2.715 6.815 6.815 0 01-4.06 2.494l.035.041z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#fun_svg__a)",
      xlinkHref: "#fun_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#ED1968",
      xlinkHref: "#fun_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#fun_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#fun_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#fun_svg__d)",
      xlinkHref: "#fun_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#fun_svg__e"
    })))));
  };

  var _default = SvgFun;
  _exports["default"] = _default;
});