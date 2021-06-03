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
    global.Yoyow = mod.exports;
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

  var SvgYoyow = function SvgYoyow(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "yoyow_svg__a",
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
      id: "yoyow_svg__d",
      width: "117.5%",
      height: "143.8%",
      x: "-8.8%",
      y: "-15.6%",
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
      id: "yoyow_svg__c",
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
      id: "yoyow_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "yoyow_svg__e",
      d: "M21.49 15.575c.34.364.546.849.546 1.381 0 1.129-.928 2.044-2.072 2.044-1.143 0-2.07-.915-2.07-2.044 0-.532.206-1.017.544-1.381A.743.743 0 0117.243 15a.72.72 0 01.157-.45c-.369.334-.86.538-1.4.538-.54 0-1.031-.204-1.4-.538a.72.72 0 01.157.45c0 .403-.33.73-.74.73a.743.743 0 01-.455-.155c.338.364.545.849.545 1.381 0 1.129-.928 2.044-2.071 2.044-1.144 0-2.072-.915-2.072-2.044 0-.532.207-1.017.545-1.381A.743.743 0 019.314 15a.72.72 0 01.157-.45c-.369.334-.86.538-1.4.538-1.144 0-2.071-.915-2.071-2.044S6.927 11 8.071 11c1.144 0 2.071.915 2.071 2.044a2.02 2.02 0 01-.545 1.381.743.743 0 011.196.575.72.72 0 01-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 01-.158-.45.743.743 0 111.196-.575 2.022 2.022 0 01-.545-1.381c0-1.129.927-2.044 2.071-2.044 1.144 0 2.071.915 2.071 2.044a2.02 2.02 0 01-.545 1.381.743.743 0 011.196.575.72.72 0 01-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 01-.158-.45.743.743 0 111.196-.575 2.022 2.022 0 01-.545-1.381c0-1.129.927-2.044 2.071-2.044 1.144 0 2.071.915 2.071 2.044s-.927 2.044-2.071 2.044c-.54 0-1.031-.204-1.4-.538a.72.72 0 01.157.45c0 .403-.33.73-.74.73a.743.743 0 01-.455-.155z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#yoyow_svg__a)",
      xlinkHref: "#yoyow_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#21A5DE",
      fillRule: "evenodd",
      xlinkHref: "#yoyow_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#yoyow_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#yoyow_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#yoyow_svg__d)",
      xlinkHref: "#yoyow_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#yoyow_svg__e"
    }))));
  };

  var _default = SvgYoyow;
  _exports["default"] = _default;
});