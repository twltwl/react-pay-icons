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
    global.Zen = mod.exports;
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

  var SvgZen = function SvgZen(props) {
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
      id: "zen_svg__c"
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
      id: "zen_svg__a"
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
      id: "zen_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#zen_svg__a)",
      xlinkHref: "#zen_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00EAAB",
      xlinkHref: "#zen_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#zen_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#zen_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 16,
      cy: 15,
      r: 14.5
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m24.8 8.568-1.78 2.77a7.835 7.835 0 0 1 .856 3.595c0 4.4-3.56 7.943-7.943 7.943a7.755 7.755 0 0 1-3.577-.856l-2.788 1.797c1.797 1.276 3.98 2.049 6.348 2.049 6.029 0 10.933-4.887 10.933-10.933 0-2.385-.756-4.568-2.049-6.365z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.933 20.39a5.482 5.482 0 0 0 5.39-4.483 12.473 12.473 0 0 0-9.942 2.066 5.458 5.458 0 0 0 4.552 2.418z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.62 14.63c.957 0 1.88.101 2.788.303a5.494 5.494 0 0 0-5.492-5.492 5.48 5.48 0 0 0-5.424 6.23c-1.377 1.059-2.032 1.882-2.066 1.915a8.049 8.049 0 0 1-.453-2.636c0-4.4 3.56-7.944 7.943-7.944 1.293 0 2.502.302 3.577.857l2.771-1.797A10.658 10.658 0 0 0 15.933 4 10.923 10.923 0 0 0 5 14.933c0 2.435.79 4.669 2.133 6.482.52-.94 1.142-1.797 1.864-2.57 0 0 1.075-1.124 1.898-1.695a13.041 13.041 0 0 1 7.725-2.52z"
    })))));
  };

  var _default = SvgZen;
  _exports["default"] = _default;
});