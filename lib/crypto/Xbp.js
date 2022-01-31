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
    global.Xbp = mod.exports;
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

  var SvgXbp = function SvgXbp(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 32,
      height: 32,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "xbp_svg__c"
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
      id: "xbp_svg__a"
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
      id: "xbp_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#xbp_svg__a)",
      xlinkHref: "#xbp_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#21AF67",
      xlinkHref: "#xbp_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#xbp_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#xbp_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("path", {
      d: "M16 26C9.925 26 5 21.075 5 15S9.925 4 16 4s11 4.925 11 11-4.925 11-11 11zm4.229-14.986c-.162-.22-.425-.4-.786-.538-.36-.14-.856-.21-1.485-.21h-1.33l1.08-2.964.72-1.977a9.962 9.962 0 0 0-2.21-.295c-.073 0-.146-.005-.22-.005-.112 0-.225.005-.337.008-5.343.18-9.636 4.58-9.636 9.967a9.952 9.952 0 0 0 3.401 7.493l.782-2.15A7.857 7.857 0 0 1 8.113 15c0-3.967 2.945-7.257 6.762-7.805.19-.028.384-.047.578-.063l-2.88 7.915 5.746-.566a.06.06 0 0 0-.01-.003 2.61 2.61 0 0 0 .514-.23 3.744 3.744 0 0 0 1.087-.94 2.56 2.56 0 0 0 .383-.7c.101-.27.158-.554.17-.841a1.171 1.171 0 0 0-.234-.753zm-2.451 1.93c-.126.34-.321.58-.592.719a1.781 1.781 0 0 1-.822.209h-1.036l.695-1.91h1.036c.124 0 .247.015.366.047.11.026.21.08.294.154.081.081.13.189.138.303.01.163-.016.327-.08.477zm1.156-7.479-.717 1.968a7.886 7.886 0 1 1-5.28 14.834 7.978 7.978 0 0 1-.475-.223l.817-2.24h1.328c1.202 0 2.189-.205 2.96-.613.771-.408 1.32-1.06 1.648-1.956.12-.332.164-.624.129-.875a1.588 1.588 0 0 0-.222-.645 1.404 1.404 0 0 0-.422-.432 2.431 2.431 0 0 0-.42-.217l-5.8.572-1.865 5.116-.762 2.094a10.024 10.024 0 0 0 2.37 1.382 9.92 9.92 0 0 0 3.777.745c5.5 0 9.975-4.474 9.975-9.975 0-4.48-2.968-8.279-7.041-9.535zM14.68 15.984h1.21c.145 0 .289.014.43.04.139.023.271.073.39.148.11.074.188.186.22.315.04.138.019.32-.062.544a1.59 1.59 0 0 1-.345.579c-.13.135-.284.244-.454.322a1.777 1.777 0 0 1-.495.142 3.487 3.487 0 0 1-.456.033h-1.213l.775-2.123z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgXbp;
  _exports["default"] = _default;
});