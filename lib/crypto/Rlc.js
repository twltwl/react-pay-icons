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
    global.Rlc = mod.exports;
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

  var SvgRlc = function SvgRlc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "rlc_svg__a",
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
      id: "rlc_svg__d",
      width: "118.4%",
      height: "115.9%",
      x: "-9.2%",
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
      id: "rlc_svg__c",
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
      id: "rlc_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "rlc_svg__e",
      d: "M23.683 11.886c.057-.057.17-.057.281-.057 1.687 0 3.036 1.428 3.036 3.143 0 1.6-1.18 2.857-2.698 3.142h-.338c-.562 0-1.124-.171-1.63-.457a.939.939 0 00-.562-.171c-.225 0-.45.057-.618.171-.394.229-.562.629-.562 1.086v.514a3.08 3.08 0 01-2.699 2.8h-.337c-.562 0-1.124-.171-1.63-.457-.225-.114-.393-.171-.618-.171-.225 0-.45.057-.619.171-.393.229-.562.629-.562 1.086v.514c-.112 1.486-1.293 2.629-2.754 2.8h-.281c-1.687 0-3.036-1.429-3.036-3.143.056-1.6 1.18-2.914 2.698-3.086h.338c.562 0 1.124.172 1.63.458a.939.939 0 00.562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.069-3.143 2.699-3.314h.337c.562 0 1.124.171 1.63.457.225.114.394.171.619.171.224 0 .45-.057.618-.171.393-.229.562-.629.562-1.086-.112-1.657 1.124-3.143 2.754-3.314zM17.22 7.943c.112-.057.169-.057.337-.057 1.687 0 3.036 1.428 3.036 3.143-.056 1.6-1.18 2.914-2.699 3.085h-.337c-.562 0-1.124-.171-1.63-.457a.939.939 0 00-.562-.171c-.225 0-.45.057-.618.171-.394.229-.563.629-.563 1.086v.514c-.112 1.485-1.292 2.628-2.754 2.8h-.281c-1.686 0-3.036-1.428-3.036-3.143 0-1.542 1.125-2.8 2.642-3.028h.338c.562 0 1.124.171 1.63.457a.939.939 0 00.562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.125-3.143 2.755-3.314zM11.036 4c1.676 0 3.035 1.382 3.035 3.086s-1.36 3.085-3.035 3.085C9.359 10.171 8 8.79 8 7.086S9.36 4 11.036 4z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#rlc_svg__a)",
      xlinkHref: "#rlc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFD800",
      xlinkHref: "#rlc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#rlc_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#rlc_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#rlc_svg__d)",
      xlinkHref: "#rlc_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#rlc_svg__e"
    }))));
  };

  var _default = SvgRlc;
  _exports["default"] = _default;
});