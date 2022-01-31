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
    global.Tpay = mod.exports;
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

  var SvgTpay = function SvgTpay(props) {
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
      id: "tpay_svg__c"
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
      id: "tpay_svg__a"
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
      id: "tpay_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#tpay_svg__a)",
      xlinkHref: "#tpay_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#3058A6",
      xlinkHref: "#tpay_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#tpay_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#tpay_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.995 25.292c-5.681 0-10.287-4.606-10.287-10.287 0-5.682 4.606-10.288 10.287-10.288 5.682 0 10.288 4.606 10.288 10.288 0 5.681-4.606 10.287-10.288 10.287m0-21.23c-6.034 0-10.943 4.909-10.943 10.943s4.91 10.943 10.943 10.943c6.034 0 10.944-4.91 10.944-10.943 0-6.034-4.91-10.944-10.944-10.944",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m19.849 18.919-.57 2.473-.139.6-.615-.001-3.157-.001h-.012c-1.266-.022-2.26-.358-2.912-.952.563.993 1.758 1.568 3.427 1.595h.012l3.158.002h.614l.138-.599.57-2.473-.445-.946-.07.302zm-.993-10.607-.45-.938-.065.294-.428 1.95h.656zm2.28 2.255-.569 2.407-.14.594h-3.422l-.869 3.968c-.018.113-.03.229-.03.292a.41.41 0 0 0 .012.11c.02.01.08.03.204.035h.375l.823-3.76h3.422l.14-.595.57-2.407-.444-.95-.072.306zm-8.49 3.001h-2.385l.822.644h1.422z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.398 18.745h-.087c-.664-.017-.977-.362-.977-.917 0-.131.022-.306.043-.438l1.007-4.594h3.432l.568-2.406h-3.431l.634-2.888h-2.8l-.635 2.888h-3.038l-.547 2.406h3.038L12.424 18.2a3.352 3.352 0 0 0-.088.722c0 1.542 1.217 2.265 3.033 2.295l3.157.002.57-2.474h-2.698z"
    })))));
  };

  var _default = SvgTpay;
  _exports["default"] = _default;
});