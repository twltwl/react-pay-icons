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
    global.Sls = mod.exports;
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

  var SvgSls = function SvgSls(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "sls_svg__a",
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
      id: "sls_svg__d",
      width: "119.4%",
      height: "125%",
      x: "-9.7%",
      y: "-8.9%",
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
      id: "sls_svg__c",
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
      id: "sls_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "sls_svg__e",
      d: "M7.623 19.711a6.907 6.907 0 0 1-.506-1.547A5.396 5.396 0 0 1 7 17.31h.894a6.195 6.195 0 0 0 .1.688c.097.469.243.935.443 1.36.536 1.136 1.35 1.784 2.532 1.784.924 0 1.64-.37 2.144-1.022.428-.551.67-1.282.67-1.896 0-.787-.298-1.367-.893-1.858-.484-.4-1.041-.68-2.191-1.158l-.203-.084c-1.196-.495-1.748-.767-2.285-1.191-.742-.586-1.136-1.313-1.136-2.244 0-1.115.401-2.06 1.119-2.728A3.663 3.663 0 0 1 10.689 8c1.28 0 2.257.533 2.907 1.467v-1.27h2.888v12.747h.858v-3.577a.898.898 0 0 1 0-.088l.894.03v.045a5.685 5.685 0 0 0 .09.646c.093.465.237.932.437 1.357.533 1.135 1.348 1.784 2.529 1.784.924 0 1.64-.37 2.144-1.022.428-.551.67-1.282.67-1.896 0-.787-.298-1.367-.893-1.858-.484-.4-1.041-.68-2.191-1.158l-.203-.084c-1.196-.495-1.748-.767-2.285-1.191-.742-.586-1.136-1.313-1.136-2.244 0-1.115.401-2.06 1.119-2.728A3.663 3.663 0 0 1 21.012 8c1.28 0 2.257.533 2.907 1.467V8.251h.895v4.422h-.895c0-.924-.212-1.86-.629-2.551-.492-.817-1.232-1.263-2.278-1.263a2.75 2.75 0 0 0-1.873.718c-.54.504-.847 1.225-.847 2.111 0 .66.266 1.15.81 1.58.45.355.954.603 2.071 1.066l.203.084c1.233.511 1.844.82 2.42 1.295.787.65 1.204 1.464 1.204 2.51 0 .796-.302 1.706-.846 2.41-.669.863-1.646 1.367-2.862 1.367-.843 0-1.566-.256-2.16-.73a3.967 3.967 0 0 1-.896-1.025v1.558H15.59V9.056h-1.1v3.617h-.894c0-.924-.212-1.86-.629-2.551-.492-.817-1.232-1.263-2.278-1.263a2.75 2.75 0 0 0-1.873.718c-.54.504-.847 1.225-.847 2.111 0 .66.266 1.15.81 1.58.45.355.954.603 2.071 1.066l.203.084c1.233.511 1.844.82 2.42 1.295.787.65 1.204 1.464 1.204 2.51 0 .796-.302 1.706-.846 2.41-.669.863-1.646 1.367-2.862 1.367-.843 0-1.566-.256-2.16-.73a3.994 3.994 0 0 1-.915-1.053v1.532H7v-4.44h.894v2.908a5.306 5.306 0 0 1-.271-.506z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#sls_svg__a)",
      xlinkHref: "#sls_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#8E9495",
      xlinkHref: "#sls_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#sls_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#sls_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#sls_svg__d)",
      xlinkHref: "#sls_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#sls_svg__e"
    })))));
  };

  var _default = SvgSls;
  _exports["default"] = _default;
});