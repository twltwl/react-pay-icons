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
    global.Mnz = mod.exports;
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

  var SvgMnz = function SvgMnz(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "mnz_svg__c",
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
    })), /*#__PURE__*/React.createElement("filter", {
      id: "mnz_svg__a",
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
    })), /*#__PURE__*/React.createElement("circle", {
      id: "mnz_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#mnz_svg__a)",
      xlinkHref: "#mnz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#7F368A",
      fillRule: "evenodd",
      xlinkHref: "#mnz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#mnz_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#mnz_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 15,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeLinejoin: "square",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M23.97 19.984c.062.246-.184.37-.368.308h-3.074a.887.887 0 0 1-.43-.123c-.185-.062-.308-.308-.37-.555v-.061L16.84 8.895c-.061 0-.245.185-.307.185-.061.062-.184.123-.246.062a.297.297 0 0 1-.123-.37c.123-.308.43-.493.738-.554.369-.062.676-.062 1.045-.062h2.275c.184 0 .368 0 .553.062.184.123.246.37.307.554.123.431.185.863.308 1.294l1.475 5.544.553 2.218c.185.677.43 1.417.554 2.156zm-7.13 0c.06.246-.185.37-.37.308h-3.073a.887.887 0 0 1-.43-.123c-.185-.062-.308-.308-.37-.555v-.061L9.709 8.895c-.061 0-.246.185-.307.185-.062.062-.185.123-.246.062-.123-.062-.184-.247-.123-.37.123-.308.43-.493.738-.554.369-.062.676-.062 1.045-.062h2.274c.185 0 .37 0 .554.062.184.123.246.37.307.554.123.431.185.863.307 1.294l1.476 5.544.553 2.218c.185.677.43 1.417.553 2.156zm-5.656-2.341-.738 2.34a.59.59 0 0 1-.553.432H6.635a.617.617 0 0 1-.615-.616v-.123l2.582-9.733c.061-.124.184-.247.307-.247.185 0 .307.123.307.247l1.968 7.7zm7.254-.185-.43 1.294c-.062.123-.123.185-.246.185s-.185-.062-.246-.185l-2.152-7.516.43-1.54c0-.123.123-.185.246-.185s.246.062.246.185l2.152 7.762z"
    }))));
  };

  var _default = SvgMnz;
  _exports["default"] = _default;
});