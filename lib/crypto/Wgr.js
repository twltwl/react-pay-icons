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
    global.Wgr = mod.exports;
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

  var SvgWgr = function SvgWgr(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "wgr_svg__a",
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
      id: "wgr_svg__d",
      width: "117.5%",
      height: "129.2%",
      x: "-8.8%",
      y: "-10.4%",
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
      id: "wgr_svg__c",
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
      id: "wgr_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "wgr_svg__e",
      d: "M25.893 10.387c.156.265.135.543-.02.815-.232.37-.446.747-.667 1.12-.606 1.036-1.212 2.072-1.82 3.108a6343.145 6343.145 0 01-3.644 6.182.74.74 0 01-.711.387c-.307-.014-.525-.166-.67-.431-.149-.265-.304-.527-.46-.791-.51-.872-1.022-1.742-1.533-2.611-.114-.197-.231-.39-.362-.608-.128.217-.249.41-.363.608l-1.533 2.61a36.99 36.99 0 00-.46.792c-.145.265-.362.417-.67.431a.746.746 0 01-.711-.387c-.577-.971-1.147-1.942-1.72-2.917a939.803 939.803 0 01-1.924-3.265c-.605-1.036-1.212-2.072-1.82-3.108-.22-.373-.438-.75-.666-1.12-.166-.272-.19-.55-.035-.815.152-.261.397-.387.712-.387 1.968.007 3.937.02 5.905.003.497-.003.794.187 1.026.601.497.887 1.026 1.752 1.537 2.629.214.37.425.743.642 1.113.017.027.045.048.07.071a.272.272 0 00.068-.07c.215-.37.425-.744.643-1.114.514-.877 1.04-1.746 1.537-2.629.231-.414.528-.604 1.025-.6 1.969.016 3.937.003 5.906-.004.321 0 .566.126.718.387zM15.05 16.142a.313.313 0 00.003-.261c-.1-.204-.232-.397-.349-.598-.704-1.202-1.409-2.4-2.11-3.605-.072-.123-.155-.167-.3-.167-1.312.007-2.625.007-3.937.01-.062 0-.124.01-.214.017 1.602 2.733 3.19 5.446 4.797 8.186.138-.23.255-.414.366-.604.586-.99 1.167-1.983 1.744-2.978zm4.01 3.582c1.605-2.74 3.194-5.453 4.8-8.186-.093-.007-.152-.017-.214-.017-1.313-.003-2.625-.003-3.937-.01-.145 0-.228.044-.3.166a2854.38 2854.38 0 01-2.11 3.606c-.118.197-.246.39-.35.598a.314.314 0 000 .261c.58.994 1.161 1.987 1.745 2.978.11.19.228.377.366.604z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#wgr_svg__a)",
      xlinkHref: "#wgr_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#B80000",
      xlinkHref: "#wgr_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#wgr_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#wgr_svg__b"
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
      filter: "url(#wgr_svg__d)",
      xlinkHref: "#wgr_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#wgr_svg__e"
    })))));
  };

  var _default = SvgWgr;
  _exports["default"] = _default;
});