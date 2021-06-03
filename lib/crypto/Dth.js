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
    global.Dth = mod.exports;
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

  var SvgDth = function SvgDth(props) {
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
      id: "dth_svg__c"
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
      id: "dth_svg__a"
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
      id: "dth_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#dth_svg__a)",
      xlinkHref: "#dth_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#3C80F1",
      xlinkHref: "#dth_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#dth_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#dth_svg__b"
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
      d: "M16.076 4a8.926 8.926 0 00-8.92 8.915c.005.48.06.959.16 1.429a.138.138 0 00.218.082 2.012 2.012 0 011.168-.376.137.137 0 00.138-.161 5.382 5.382 0 01-.091-.965 7.326 7.326 0 1114.652 0c0 4.04-5.17 9.203-7.02 11.025a.436.436 0 01-.61 0 54.694 54.694 0 01-2.28-2.362h-.037a7.763 7.763 0 01-2.065-.495l-.122-.05a.137.137 0 00-.16.214 51.75 51.75 0 003.641 3.921 1.898 1.898 0 002.65 0c3.258-3.219 7.597-7.98 7.597-12.262A8.926 8.926 0 0016.075 4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.783 13.816c0 .126-.01.25-.02.372a4.325 4.325 0 01-.322 1.363 4.651 4.651 0 01-.768 1.184l.01.008a6.323 6.323 0 01-2.25 1.607 5.594 5.594 0 01-2.704.434 5.001 5.001 0 01-2.436-.924c.231-.008.461-.043.684-.104.202-.056.395-.14.574-.246a2.059 2.059 0 00.857-1.005c.078-.191.132-.391.16-.596.018-.172.023-.345.016-.518V9.504a.34.34 0 01.29-.275h1.928a3.73 3.73 0 011.318.354 4.8 4.8 0 012.073 1.883c.12.202.223.413.31.63.084.217.15.44.198.669.048.226.076.456.082.688v.364zm1.588-.419a5.416 5.416 0 00-.116-.964 5.858 5.858 0 00-.699-1.78 6.384 6.384 0 00-2.769-2.513 5.32 5.32 0 00-1.875-.498c-.082 0-.161 0-.251-.01h-1.798c-.058 0-.118 0-.176.013-.235.028-.464.1-.673.21a1.929 1.929 0 00-1.016 1.57v5.967c0 .104-.007.208-.02.311a.903.903 0 01-.052.206.511.511 0 01-.082.137.607.607 0 01-.309.178 1.58 1.58 0 01-.543.042 3.015 3.015 0 01-1.747-.781.796.796 0 00-1.239.964 8.346 8.346 0 002.263 2.63 6.71 6.71 0 001.562.869c.56.218 1.146.359 1.744.418a7.184 7.184 0 003.476-.544 7.417 7.417 0 002.824-2.058l.01.008a6.236 6.236 0 001.025-1.596 5.916 5.916 0 00.437-1.858c.013-.16.02-.306.026-.458v-.227c.006-.066.001-.157 0-.236h-.002z"
    })))));
  };

  var _default = SvgDth;
  _exports["default"] = _default;
});