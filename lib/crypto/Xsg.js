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
    global.Xsg = mod.exports;
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

  var SvgXsg = function SvgXsg(props) {
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
      id: "xsg_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "xsg_svg__a"
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
      id: "xsg_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#xsg_svg__a)",
      xlinkHref: "#xsg_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#D21E2B",
      xlinkHref: "#xsg_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#xsg_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#xsg_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("path", {
      d: "M16.128 6.596V4l9.66 5.574-2.235 1.298zm7.574 13.106V11.15l2.255-1.298V21l-2.255-1.298zm-7.574 4.553l7.425-4.276 2.234 1.298-9.66 5.574v-2.596zm-9.98-2.978l2.256-1.298 7.405 4.276v2.596l-9.66-5.574zM6 9.851l2.234 1.298v8.553L6 21zm.149-.277L15.809 4v2.596l-7.405 4.276zM15.99 6.84l-7.447 4.277v8.596l7.446 4.298 7.426-4.298v-8.596L15.989 6.84zm5.978 7.681l-.32.553-2.127-1.191-2.723 1.532 2.723 1.532 2.128-1.192.32.554-1.788 1 1.787 1-.32.553-1.786-1v2h-.66V17.5l-2.723-1.532v3.064l2.106 1.17-.319.543-1.787-1v2h-.66v-2l-1.787 1-.34-.554 2.127-1.17v-3.053L13.096 17.5v2.362h-.681v-2l-1.766 1-.34-.553 1.787-1-1.787-1 .34-.554 2.106 1.192 2.745-1.532-2.745-1.532-2.106 1.191-.34-.553 1.787-1-1.787-1 .34-.553 1.766 1v-2.01h.68v2.361l2.724 1.532v-3.053l-2.106-1.17.319-.554 1.787 1v-2h.66v2l1.787-1 .32.554-2.107 1.17v3.064l2.723-1.532v-2.373h.66v2l1.787-1 .32.554-1.788 1 1.787 1.01z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgXsg;
  _exports["default"] = _default;
});