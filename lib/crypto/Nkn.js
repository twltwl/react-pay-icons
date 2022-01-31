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
    global.Nkn = mod.exports;
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

  var SvgNkn = function SvgNkn(props) {
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
      id: "nkn_svg__c"
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
      id: "nkn_svg__a"
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
      id: "nkn_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#nkn_svg__a)",
      xlinkHref: "#nkn_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#23336F",
      xlinkHref: "#nkn_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#nkn_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#nkn_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 16,
      cy: 15,
      r: 14.5
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.485 18.46s2.913.717 5.22-1.096c2.307-1.812 2.235-4.545 2.235-4.545s-2.61-.813-4.982.916c-2.371 1.728-2.473 4.725-2.473 4.725zm-.009 1.367s.476 2.05 2.341 2.92c1.865.87 3.554-.041 3.554-.041s-.317-1.892-2.153-2.83c-1.836-.936-3.742-.049-3.742-.049zm4.389-.887s1.007 1.119 2.476 1.018c1.47-.102 2.21-1.257 2.21-1.257s-.854-1.074-2.325-1.026c-1.47.049-2.361 1.265-2.361 1.265zm-1.473-7.067s-1.552-2.566-4.466-2.916c-2.913-.35-4.794 1.634-4.794 1.634s1.271 2.42 4.17 2.875c2.899.455 5.09-1.593 5.09-1.593zm.973-.96s1.114-1.785.41-3.72C20.07 5.26 18.23 4.71 18.23 4.71s-1.11 1.563-.475 3.522c.634 1.96 2.609 2.682 2.609 2.682zm-3.73-2.475s.079-1.504-1.032-2.472C14.492 5 13.15 5.292 13.15 5.292s-.155 1.364.92 2.37c1.076 1.008 2.564.776 2.564.776zM14.022 15.4s-2.568 1.552-2.917 4.466c-.35 2.913 1.633 4.794 1.633 4.794s2.42-1.269 2.875-4.17c.455-2.901-1.591-5.09-1.591-5.09zm-.962-.974s-1.787-1.114-3.72-.41c-1.933.705-2.484 2.543-2.484 2.543s1.564 1.11 3.522.476c1.96-.634 2.682-2.61 2.682-2.61zm-2.474 3.731s-1.504-.08-2.47 1.031c-.968 1.112-.677 2.453-.677 2.453s1.364.155 2.371-.92c1.007-1.076.776-2.564.776-2.564z",
      fill: "#FFF",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgNkn;
  _exports["default"] = _default;
});