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
    global.Gxs = mod.exports;
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

  var SvgGxs = function SvgGxs(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "gxs_svg__a",
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
      id: "gxs_svg__d",
      width: "117.5%",
      height: "117.5%",
      x: "-8.8%",
      y: "-6.3%",
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
      id: "gxs_svg__c",
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
      id: "gxs_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "gxs_svg__e",
      d: "M7.02 6.027c1.27-1.327 3.59-1.38 4.901-.09 1.37 1.34 2.726 2.692 4.068 4.057 1.428-1.357 2.764-2.805 4.198-4.156 1.364-1.232 3.684-1.083 4.895.297 1.242 1.302 1.222 3.573-.067 4.837-1.327 1.351-2.671 2.682-4.01 4.022 1.368 1.409 2.793 2.763 4.15 4.19 1.216 1.333 1.1 3.605-.219 4.83-1.297 1.31-3.623 1.314-4.918-.002-1.347-1.322-2.665-2.676-4.003-4.004-1.428 1.374-2.79 2.816-4.233 4.176C10.4 25.41 8.07 25.227 6.88 23.82c-1.2-1.299-1.17-3.512.08-4.77a217.222 217.222 0 013.566-3.567l1.507 1.505c-1.176 1.214-2.413 2.376-3.571 3.608-.781.8-.093 2.292 1.004 2.274.665.059 1.124-.492 1.556-.908 1.147-1.168 2.311-2.315 3.458-3.483-2.5-2.522-5.04-5.009-7.528-7.542-1.298-1.308-1.257-3.64.07-4.91zm1.453 3.39c1.323 1.38 2.697 2.711 4.044 4.068.65-.658 1.304-1.312 1.962-1.963-1.303-1.313-2.601-2.635-3.922-3.93-.421-.455-1.141-.624-1.69-.298-.764.37-1.005 1.506-.395 2.123zm12.94-1.79c-2.486 2.44-4.922 4.932-7.395 7.384.667.647 1.332 1.296 1.983 1.96.499-.492.995-.99 1.492-1.488.502.501 1.001 1.005 1.507 1.503-.491.5-.985.996-1.484 1.49 1.341 1.349 2.656 2.723 4.041 4.028.703.74 2.067.291 2.27-.684.218-.69-.278-1.287-.746-1.721a2157.89 2157.89 0 01-6.596-6.593 266.94 266.94 0 001.501-1.509c.5.498.999.996 1.51 1.486 1.315-1.363 2.709-2.65 4.004-4.034.653-.634.392-1.849-.442-2.192-.56-.289-1.243-.085-1.646.37z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#gxs_svg__a)",
      xlinkHref: "#gxs_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#35A5F3",
      fillRule: "evenodd",
      xlinkHref: "#gxs_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#gxs_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#gxs_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#gxs_svg__d)",
      xlinkHref: "#gxs_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#gxs_svg__e"
    }))));
  };

  var _default = SvgGxs;
  _exports["default"] = _default;
});