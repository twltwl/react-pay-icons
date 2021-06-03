function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.Xtz = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgXtz = function SvgXtz(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "xtz_svg__a",
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
      id: "xtz_svg__d",
      width: "123.3%",
      height: "117.5%",
      x: "-11.7%",
      y: "-6.2%",
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
      id: "xtz_svg__c",
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
      id: "xtz_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "xtz_svg__e",
      d: "M18.19 25c-1.46 0-2.524-.344-3.192-1.03-.667-.688-1.001-1.429-1.001-2.223 0-.29.058-.535.175-.733a1.27 1.27 0 01.477-.47c.202-.114.45-.172.745-.172s.544.058.746.172c.202.115.36.271.477.47.117.198.175.443.175.733 0 .351-.085.637-.256.859a1.184 1.184 0 01-.606.435c.202.275.52.47.955.584.435.123.87.184 1.304.184a2.93 2.93 0 001.643-.481c.489-.321.85-.795 1.082-1.42.233-.627.35-1.337.35-2.131 0-.863-.128-1.6-.384-2.211-.249-.619-.618-1.077-1.107-1.375a2.99 2.99 0 00-1.584-.446c-.372 0-.838.152-1.397.458l-1.025.504v-.504l4.612-6.048h-6.382v6.277c0 .52.116.947.35 1.283.232.336.59.504 1.07.504.373 0 .73-.122 1.072-.367a3.76 3.76 0 00.885-.893.342.342 0 01.117-.15.236.236 0 01.151-.056c.086 0 .186.042.303.125a.619.619 0 01.163.424 2.92 2.92 0 01-.058.321c-.264.58-.63 1.023-1.095 1.329a2.748 2.748 0 01-1.537.458c-1.382 0-2.337-.267-2.865-.802-.528-.534-.792-1.26-.792-2.176v-6.277H8.5V8.986h3.26V6.33l-.744-.734V5h2.166l.815.412v3.574l8.431-.023.84.825-5.172 5.086a3.51 3.51 0 01.978-.23c.56 0 1.188.176 1.887.528.707.343 1.25.817 1.63 1.42.381.596.626 1.169.734 1.719a7.16 7.16 0 01.175 1.466 6.02 6.02 0 01-.629 2.726 4.037 4.037 0 01-1.91 1.878A6.291 6.291 0 0118.19 25z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#xtz_svg__a)",
      xlinkHref: "#xtz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#A6E000",
      xlinkHref: "#xtz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#xtz_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#xtz_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#xtz_svg__d)",
      xlinkHref: "#xtz_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#xtz_svg__e"
    }))));
  };

  var _default = SvgXtz;
  _exports["default"] = _default;
});