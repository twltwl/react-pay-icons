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
    global.Ctxc = mod.exports;
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

  var SvgCtxc = function SvgCtxc(props) {
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
      id: "ctxc_svg__c"
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
      id: "ctxc_svg__a"
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
      id: "ctxc_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ctxc_svg__a)",
      xlinkHref: "#ctxc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      xlinkHref: "#ctxc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ctxc_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ctxc_svg__b"
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
      d: "M15.907 5.362c-.134-.3.346-.513.48-.227 3.12 5.374 6.24 10.751 9.36 16.134-.167 0-.327-.054-.487-.08l-8.327-1.66c-.273-.014-.333-.454-.066-.52l3.266-.9a.272.272 0 00.18-.38L15.907 5.355v.007z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.427 5.389c.03.044.057.09.08.14.986 2.8 2 5.6 2.98 8.4.086.233-.24.426-.4.253-.84-.88-1.64-1.787-2.467-2.667-.133-.12-.327-.04-.413.087L6.62 21.689c-.1.106-.187.266-.353.286-.12 0-.2-.093-.267-.186v-.154c3.147-5.413 6.289-10.829 9.427-16.246z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.8 14.995c.16-.046.373.067.32.26-.333 1.16-.687 2.314-1.033 3.467-.054.147.08.28.22.287 4.493.9 8.986 1.833 13.48 2.733.086.013.146.08.213.133v.187l-.127.133H6.8c2-2.4 3.993-4.813 6-7.2z"
    })))));
  };

  var _default = SvgCtxc;
  _exports["default"] = _default;
});