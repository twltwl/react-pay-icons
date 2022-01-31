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
    global.Uma = mod.exports;
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

  var SvgUma = function SvgUma(props) {
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
      id: "uma_svg__a"
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
      id: "uma_svg__d"
    }, /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "SourceGraphic",
      values: "0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-15.6%",
      y: "-62.5%",
      width: "131.2%",
      height: "225%",
      filterUnits: "objectBoundingBox",
      id: "uma_svg__e"
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
      id: "uma_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "uma_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#uma_svg__a)",
      xlinkHref: "#uma_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FF4A4A",
      xlinkHref: "#uma_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#uma_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#uma_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 16,
      cy: 15,
      r: 14.5
    }), /*#__PURE__*/React.createElement("g", {
      filter: "url(#uma_svg__d)"
    }, /*#__PURE__*/React.createElement("g", {
      filter: "url(#uma_svg__e)",
      transform: "translate(4 12)",
      fill: "#FFF",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.328 5.981h-1.012a.346.346 0 0 1-.347-.347V2.972l-1.772 1.106a.458.458 0 0 1-.488 0L9.947 2.972v2.662c0 .188-.15.347-.347.347H8.597a.346.346 0 0 1-.347-.347V.497a.46.46 0 0 1 .46-.46c.093 0 .177.029.252.085l2.794 1.922a.323.323 0 0 0 .385 0L14.934.122a.464.464 0 0 1 .722.375v5.137a.33.33 0 0 1-.328.347zM6.74 5.972H.46a.46.46 0 0 1-.46-.46V.348A.354.354 0 0 1 .356 0H1.37c.187 0 .347.15.347.347v3.928h3.806V.347c0-.188.15-.347.347-.347h.984c.188 0 .347.15.347.347v5.166a.46.46 0 0 1-.46.459zM17.184 0h6.282a.46.46 0 0 1 .459.46v5.165c0 .188-.15.347-.338.347h-1.012a.346.346 0 0 1-.347-.347V1.922a.228.228 0 0 0-.225-.225h-3.347a.228.228 0 0 0-.225.225v3.703c0 .188-.15.347-.347.347h-1.012a.346.346 0 0 1-.347-.347V.459a.46.46 0 0 1 .46-.459z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.819 2.784h1.003c.187 0 .347.15.347.347v1.022c0 .188-.15.347-.347.347h-1.003a.346.346 0 0 1-.347-.347V3.122c0-.188.16-.338.347-.338z"
    }))))));
  };

  var _default = SvgUma;
  _exports["default"] = _default;
});