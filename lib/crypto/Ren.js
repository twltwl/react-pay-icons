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
    global.Ren = mod.exports;
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

  var SvgRen = function SvgRen(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 32,
      height: 32,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "ren_svg__a"
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
    })), /*#__PURE__*/React.createElement("filter", {
      id: "ren_svg__d"
    }, /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "SourceGraphic",
      values: "0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-19.7%",
      y: "-17%",
      width: "139.5%",
      height: "134.1%",
      filterUnits: "objectBoundingBox",
      id: "ren_svg__e"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5,
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0",
      "in": "shadowBlurOuter1",
      result: "shadowMatrixOuter1"
    }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
      "in": "shadowMatrixOuter1"
    }), /*#__PURE__*/React.createElement("feMergeNode", {
      "in": "SourceGraphic"
    }))), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "ren_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "ren_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ren_svg__a)",
      xlinkHref: "#ren_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#080817",
      xlinkHref: "#ren_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ren_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ren_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 16,
      cy: 15,
      r: 14.5
    }), /*#__PURE__*/React.createElement("g", {
      filter: "url(#ren_svg__d)"
    }, /*#__PURE__*/React.createElement("g", {
      filter: "url(#ren_svg__e)",
      transform: "translate(6.5 4.25)",
      fill: "#FFF",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m2.94 4.504 1.564-.901.222.363 5.8-3.35-.427-.253-.428-.236L9.466 0 0 5.469v.236L2.718 4.14zm0 3.444 4.55-2.623.205.365 5.817-3.352-.426-.253-.427-.236-.207-.127L0 8.896v.253l2.718-1.564zm0 1.722 6.036-3.49.205.363 5.817-3.35-.426-.238-.43-.254-.204-.126L0 10.62v.25l2.718-1.578zm0 1.708 7.568-4.363.208.366 5.768-3.335-.429-.239-.426-.25-.205-.113L0 12.343v.236l2.718-1.564zm0 1.722 9.054-5.23.207.38 5.769-3.334-.43-.254-.408-.238-.222-.125L0 14.065v.236l2.718-1.564zm15.675-7.821-.22-.127L0 15.787v.236l2.718-1.564.222.363 9.054-5.23.207.364 6.73-3.871v-.616zM1.17 17.068l1.517-.87.221.364 9.04-5.23.22.377 6.764-3.919V6.574L.965 16.942zm10.778-4.014.22.38 6.764-3.92V8.298L2.45 17.81l.204.127 1.55-.901.219.363m-.282 1.391 1.564-.9.204.38 6.04-3.494.218.363 6.765-3.902v-1.232L3.934 18.663zm1.501.853 1.549-.884.204.363 4.553-2.624.22.363 6.764-3.902v-1.233L5.42 19.533zm1.264.743.221.127 1.55-.902.204.38 3.067-1.77.22.365 6.764-3.905V13.45zm1.707.979 1.55-.884.219.363 1.566-.916.22.38 6.764-3.905v-1.232L8.406 21.256zm3.413-19.896-.426-.236-.427-.254-.221-.126L0 7.19v.236l2.718-1.564.222.363 3.064-1.768.208.363z"
    }))))));
  };

  var _default = SvgRen;
  _exports["default"] = _default;
});