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
    global.Ndz = mod.exports;
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

  var SvgNdz = function SvgNdz(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "ndz_svg__a",
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
      id: "ndz_svg__d",
      width: "119.4%",
      height: "117.5%",
      x: "-9.7%",
      y: "-6.2%",
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
      id: "ndz_svg__c",
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
      id: "ndz_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "ndz_svg__e",
      d: "M18.586 16.376c-.087.027-.171.06-.253.098l-3.676-3.821a1.91 1.91 0 0 0-1.14-2.794V7.186l-.984-.55 2.273-1.315a2.384 2.384 0 0 1 2.388 0l4.519 2.616-1.786 1.033a1.911 1.911 0 0 0-2.686 1.747 1.91 1.91 0 0 0 1.345 1.824v3.835zm1.138 0V12.54a1.91 1.91 0 0 0 1.092-2.773l2.03-1.174.97.56A2.372 2.372 0 0 1 25 11.207v7.586c0 .846-.451 1.628-1.185 2.053l-4.09 2.368v-3.192a1.91 1.91 0 0 0 1.344-1.823 1.91 1.91 0 0 0-1.345-1.823zm-2.227.869a1.91 1.91 0 0 0 1.089 2.777v3.851l-1.392.806a2.384 2.384 0 0 1-2.388 0L9.94 21.863l1.828-1.428a1.91 1.91 0 0 0 1.231.447 1.911 1.911 0 0 0 1.914-1.91 1.91 1.91 0 0 0-1.397-1.838v-3.598c.105-.029.207-.067.304-.113l3.676 3.822zm-5.118-.079a1.91 1.91 0 0 0-1.226 2.308L8.882 21.25l-.697-.403A2.372 2.372 0 0 1 7 18.793v-7.586c0-.846.451-1.628 1.185-2.053l3.205-1.856.99.553v2.04a1.91 1.91 0 0 0-1.294 1.807c0 .837.541 1.55 1.293 1.806v3.662zM13 12.523a.827.827 0 1 1-.002-1.653.827.827 0 0 1 .002 1.653zm0 7.275a.827.827 0 1 1-.002-1.653.827.827 0 0 1 .002 1.653zm6.155-8.255a.827.827 0 1 1-.002-1.653.827.827 0 0 1 .002 1.653zm0 7.482a.827.827 0 1 1-.002-1.654.827.827 0 0 1 .002 1.654z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ndz_svg__a)",
      xlinkHref: "#ndz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#622FBA",
      fillRule: "evenodd",
      xlinkHref: "#ndz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ndz_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ndz_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    })), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ndz_svg__d)",
      xlinkHref: "#ndz_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#ndz_svg__e"
    }))));
  };

  var _default = SvgNdz;
  _exports["default"] = _default;
});