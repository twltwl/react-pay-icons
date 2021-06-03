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
    global.Eon = mod.exports;
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

  var SvgEon = function SvgEon(props) {
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
      id: "eon_svg__c"
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
      id: "eon_svg__a"
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
      id: "eon_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#eon_svg__a)",
      xlinkHref: "#eon_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#443F54",
      xlinkHref: "#eon_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#eon_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#eon_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("g", {
      fill: "#FEFFFE"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.508 25.708c-1.416-.862-3.139-1.908-4.554-2.77-.616-.369-1.292-.738-1.908-1.169-.246-.184-.246-.369-.246-.492.615-2.892 1.292-6.03 1.97-8.862l-.432-1.353s-1.476 7.076-2.215 10.215c-.123.43 0 .677.43.923 2.4 1.415 7.262 4.492 7.262 4.492l-.307-.984zm1.169 0c1.415-.862 3.138-1.908 4.554-2.77.615-.369 1.292-.738 1.907-1.169.247-.184.247-.369.247-.492-.616-2.892-1.293-6.03-1.97-8.862l.493-1.292s1.477 7.015 2.154 10.154c.123.43 0 .677-.431.923-2.4 1.415-7.262 4.492-7.262 4.492l.308-.984zm4.677-14.523l-.246-.37h-9.97l-.246.37s.185.492.123.307h10.277c-.123.123.062-.307.062-.307z",
      opacity: 0.7
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.662 10.63S18.277 5.709 16.8 3.555c-.308-.37-.492-.554-.677-.554-.185 0-.43.185-.677.554-1.477 2.092-4.861 7.077-4.861 7.077-.308.43-.308.554-.062 1.107 0 0 2.4 6.647 3.385 9.6.492 1.354 1.784 5.231 1.784 5.231.062.123.308.185.431.185a.665.665 0 00.43-.185s1.355-3.877 1.785-5.23c.985-2.893 3.385-9.6 3.385-9.6.246-.554.246-.677-.061-1.108zm-5.539 13.908a3727.558 3727.558 0 01-4.677-13.415s3.323-4.861 4.616-6.77c1.292 1.909 4.615 6.77 4.615 6.77s-3.139 9.23-4.554 13.415z"
    })))));
  };

  var _default = SvgEon;
  _exports["default"] = _default;
});