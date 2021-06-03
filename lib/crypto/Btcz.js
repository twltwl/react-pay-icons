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
    global.Btcz = mod.exports;
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

  var SvgBtcz = function SvgBtcz(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "btcz_svg__a",
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
      id: "btcz_svg__d",
      width: "115.9%",
      height: "115.9%",
      x: "-8%",
      y: "-5.7%",
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
      id: "btcz_svg__c",
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
      id: "btcz_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "btcz_svg__e",
      d: "M16 26C9.934 26 5 21.066 5 15S9.937 4 16 4s11 4.937 11 11c0 1.002-.136 2-.405 2.966a.888.888 0 01-1.71-.478c.225-.81.34-1.647.339-2.488 0-5.086-4.138-9.224-9.224-9.224S6.776 9.914 6.776 15s4.138 9.224 9.224 9.224c.952 0 1.899-.146 2.806-.435a.888.888 0 11.538 1.692A10.97 10.97 0 0116 26zm3.375-11.026c.38.318.636.778.768 1.379.086.346.08.709-.016 1.052a2.125 2.125 0 01-.494.85 3.14 3.14 0 01-.868.637c-.342.177-.423.234-.831.324l-.254.061a.296.296 0 00-.219.352l.15.672a.296.296 0 01-.226.353l-.677.15a.296.296 0 01-.353-.225l-.148-.667a.296.296 0 00-.353-.225l-1.833.406a.722.722 0 01-.86-.55l-1.65-7.459a.722.722 0 01.55-.86l1.833-.406a.296.296 0 00.225-.353l-.15-.672a.296.296 0 01.227-.352l.677-.15a.296.296 0 01.353.225l.148.668a.296.296 0 00.353.224l.56-.122c.29-.068.593-.063.88.015.274.075.53.203.753.377a2.537 2.537 0 01.894 1.434c.094.42.075.858-.054 1.27a2.06 2.06 0 01-.767 1.06c.506.024.99.21 1.382.532zm-5.43-1.597l.098.426a.722.722 0 00.86.55l1.307-.29a.916.916 0 00.55-.357c.141-.188.177-.44.107-.757-.065-.292-.192-.5-.38-.624a.767.767 0 00-.612-.114l-1.38.305a.722.722 0 00-.55.861zm3.909 3.767h.002a.951.951 0 00.11-.745 1.089 1.089 0 00-.393-.647.764.764 0 00-.663-.156l-1.656.367a.722.722 0 00-.55.86l.116.527a.722.722 0 00.861.55l1.569-.347a.916.916 0 00.604-.409zm3.298 5.383l1.533-1.832a.277.277 0 00-.213-.455H21.44a.277.277 0 01-.278-.277v-.216c0-.153.124-.277.278-.277h2.358a.277.277 0 01.277.277v.284a.277.277 0 01-.06.172l-1.467 1.842a.277.277 0 00.217.45h1.051c.153 0 .278.124.278.277v.215a.277.277 0 01-.278.277h-2.452a.277.277 0 01-.277-.277v-.28a.28.28 0 01.065-.18z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#btcz_svg__a)",
      xlinkHref: "#btcz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#F8C24A",
      fillRule: "evenodd",
      xlinkHref: "#btcz_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#btcz_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#btcz_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#btcz_svg__d)",
      xlinkHref: "#btcz_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#btcz_svg__e"
    }))));
  };

  var _default = SvgBtcz;
  _exports["default"] = _default;
});