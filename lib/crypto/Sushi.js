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
    global.Sushi = mod.exports;
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

  var SvgSushi = function SvgSushi(props) {
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
      id: "sushi_svg__c"
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
      id: "sushi_svg__a"
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
      id: "sushi_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#sushi_svg__a)",
      xlinkHref: "#sushi_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#D65892",
      xlinkHref: "#sushi_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#sushi_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#sushi_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 16,
      cy: 15,
      r: 14.5
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.794 6.02c1.862.157 4.327 1.18 6.702 2.912 2.366 1.742 4.102 3.815 4.84 5.566.54 1.271.558 2.396.018 3.17l-3.706 5.307c-.54.774-1.593 1.115-2.933 1.005-1.862-.166-4.336-1.18-6.702-2.921-2.375-1.733-4.102-3.806-4.85-5.557-.539-1.271-.557-2.396-.017-3.17l3.715-5.307c.54-.774 1.584-1.115 2.933-1.005zm7.788 12.448a.134.134 0 0 0-.046.264c.732.13 1.387.153 1.934.064a.134.134 0 0 0-.043-.264c-.514.084-1.14.061-1.845-.064zm-1.191-.147a.134.134 0 0 0 .092.166c.176.05.35.095.521.135a.134.134 0 0 0 .06-.26c-.166-.04-.336-.084-.509-.133a.133.133 0 0 0-.164.092zM11.374 7.403l-.018.036c-.405.618-.315 1.493.108 2.488.71 1.677 2.375 3.64 4.633 5.299 2.258 1.658 4.606 2.644 6.378 2.792 1.062.083 1.898-.11 2.34-.691l.026-.046c.432-.609.342-1.512-.08-2.525-.711-1.668-2.376-3.63-4.643-5.29-2.258-1.658-4.606-2.644-6.378-2.791-1.08-.093-1.934.11-2.366.728zM10.63 9.85a.134.134 0 0 0-.09.166c.456 1.564 1.614 3.053 3.435 4.73l.205.188a35 35 0 0 0 .426.38c.056.048.14.042.188-.014a.134.134 0 0 0-.013-.189c-.11-.095-.216-.19-.322-.285l-.207-.188c-1.843-1.683-3.01-3.166-3.457-4.697a.133.133 0 0 0-.165-.091zm5.251-.283c.882.083 2.06.571 3.185 1.4 1.133.83 1.97 1.816 2.32 2.654.208.47.262.885.055 1.17-.198.286-.603.37-1.098.323-.89-.074-2.06-.571-3.193-1.4-1.134-.83-1.97-1.807-2.321-2.645-.198-.47-.252-.885-.054-1.17.198-.286.602-.369 1.106-.332zm-5.397-.778a.134.134 0 0 0-.128.139c.008.182.027.365.059.55a.133.133 0 1 0 .262-.046 4.018 4.018 0 0 1-.055-.515.133.133 0 0 0-.138-.128z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgSushi;
  _exports["default"] = _default;
});