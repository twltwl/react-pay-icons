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
    global.Iotx = mod.exports;
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

  var SvgIotx = function SvgIotx(props) {
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
      id: "iotx_svg__c"
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
      id: "iotx_svg__a"
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
      id: "iotx_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#iotx_svg__a)",
      xlinkHref: "#iotx_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00D4D5",
      xlinkHref: "#iotx_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#iotx_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#iotx_svg__b"
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
      d: "M16.31 5v5.002l4.342-2.497z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M20.652 7.505v5.002l4.343-2.505z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.8,
      d: "M16.31 10.002v5.003l4.342-2.498zm4.342 2.505v5.002l4.343-2.504zm-4.342 2.498v5.002l4.342-2.498z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.652 17.51v5.001l4.343-2.504z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.4,
      d: "M5.084 9.834v5.002l4.343-2.505z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.2,
      d: "M10.563 11.693v5.002l4.336-2.497z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.3,
      d: "M7.343 14.857v5.003l4.343-2.505z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M10.205 18.632v5.002l4.336-2.505z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.7,
      d: "M16.274 20.786v5.002l4.336-2.505z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M11.286 9.223v5.003l4.335-2.498z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.8,
      d: "M16.31 5v5.002l-4.344-2.497z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.6,
      d: "M11.286 7.126v5.002L6.943 9.623zm4.343 2.476v5.003L11.286 12.1z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.95,
      d: "M10.542 11.693v5.002L6.2 14.198z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.6,
      d: "M16.31 15.005v5.002l-4.337-2.498z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.55,
      d: "M7.343 16.17v5.002L3 18.667z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.995 10.002v5.003l-4.343-2.498z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.95,
      d: "M20.652 12.507v5.002l-4.343-2.504z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M24.995 15.005v5.002l-4.343-2.498z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.7,
      d: "M20.652 17.51v5.001l-4.343-2.504z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.4,
      d: "M15.348 19.593v5.002l-4.343-2.497z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.652 7.505v5.002l-4.343-2.505z"
    })))));
  };

  var _default = SvgIotx;
  _exports["default"] = _default;
});