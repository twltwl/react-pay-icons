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
    global.Bpt = mod.exports;
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

  var SvgBpt = function SvgBpt(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "bpt_svg__a",
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
      id: "bpt_svg__d",
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
      id: "bpt_svg__c",
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
      id: "bpt_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "bpt_svg__e",
      d: "M25.884 19.737a6.873 6.873 0 01-.317.58c-.077.138-.151.276-.232.407-.037.061-.067.124-.104.183h-.012a10.897 10.897 0 01-15.292 3.246c-.05-.034-.093-.071-.142-.104a6.998 6.998 0 01-.549-.394 9.346 9.346 0 01-.8-.684 9.664 9.664 0 01-.355-.346c-.124-.127-.232-.25-.358-.393a12.418 12.418 0 01-.37-.436 9.815 9.815 0 01-.273-.366 11.38 11.38 0 01-.354-.515c-.073-.114-.141-.23-.21-.348a9.464 9.464 0 01-.319-.576c-.059-.116-.114-.234-.169-.352a14.421 14.421 0 01-.263-.603c-.05-.126-.095-.254-.14-.382-.069-.2-.137-.409-.196-.605-.04-.142-.065-.277-.109-.423a10.418 10.418 0 01-.133-.59c-.02-.15-.053-.308-.067-.45a12.067 12.067 0 01-.073-.59c-.014-.155-.031-.31-.031-.466C5 15.334 5 15.137 5 14.94c0-.15.012-.3.012-.451a11.272 11.272 0 01.096-1.04 11.047 11.047 0 01.496-2.067c.085-.246.18-.49.285-.733.023-.055.05-.122.064-.167a.34.34 0 01.08-.132c.103-.222.217-.442.337-.66.057-.122.126-.242.197-.36.05-.086.084-.167.15-.261.064-.095.139-.193.206-.291a6.02 6.02 0 01.273-.393c.126-.17.257-.335.393-.496a11.18 11.18 0 01.755-.808c.098-.092.195-.185.295-.273a16.295 16.295 0 01.831-.667c.188-.13.38-.262.574-.393a7.59 7.59 0 01.315-.196c.197-.114.393-.224.59-.327a10.603 10.603 0 011.378-.594 10.556 10.556 0 011.512-.417 12.126 12.126 0 011.016-.154c.222-.024.446-.04.672-.05.122-.01.246-.01.37-.01a10.353 10.353 0 011.065.042 10.559 10.559 0 011.707.29c.143.038.287.078.43.12.21.06.407.125.604.197.147.053.295.11.44.171.11.046.222.081.332.13v.016a10.895 10.895 0 015.472 14.653c-.02.042-.044.077-.063.118zm-14.056 4.5v-.002a10.146 10.146 0 0012.784-3.933c.072-.12.14-.244.208-.366.094-.18.2-.354.291-.55a10.087 10.087 0 00-5.288-13.762 7.786 7.786 0 00-.393-.155 11.33 11.33 0 00-.958-.293 9.896 9.896 0 00-1.594-.271l-.336-.024c-.217-.01-.432-.015-.647-.015h-.338c-.209.009-.416.024-.623.045-.125.014-.249.03-.372.047a9.113 9.113 0 00-.989.19 9.313 9.313 0 00-.97.29c-.141.048-.277.1-.408.153a11.651 11.651 0 00-.86.393 11.112 11.112 0 00-.836.48 7.104 7.104 0 00-.533.366c-.09.061-.18.127-.268.196a10.497 10.497 0 00-.756.659c-.147.148-.291.298-.433.45a10.615 10.615 0 00-.635.765 11.091 11.091 0 00-.582.865c-.065.108-.124.216-.185.324-.12.202-.218.407-.316.62a10.198 10.198 0 00-.478 1.237 7.926 7.926 0 00-.267.991c-.043.21-.079.423-.108.635-.016.122-.034.246-.045.368-.02.197-.042.393-.042.59-.012.134-.012.27-.012.405 0 .187.016.373.016.56a10.262 10.262 0 00.098.97c.026.135.048.263.073.408.036.185.079.37.124.555.032.125.063.251.1.379.055.19.118.377.185.564.041.114.08.23.126.344.075.189.157.372.234.566.051.108.1.217.155.323.098.179.193.356.295.53.067.109.13.215.197.321.102.161.214.318.326.476.083.114.143.208.252.338.108.13.23.271.336.393.106.122.224.254.33.364.106.11.189.188.326.318a8.352 8.352 0 00.734.631 10.13 10.13 0 002.082 1.262zm4.152-.825a8.418 8.418 0 118.412-8.422 8.428 8.428 0 01-8.412 8.422zm0-14.078a5.66 5.66 0 105.653 5.656 5.666 5.666 0 00-5.653-5.66v.004z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#bpt_svg__a)",
      xlinkHref: "#bpt_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#0F63D8",
      fillRule: "evenodd",
      xlinkHref: "#bpt_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#bpt_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#bpt_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#bpt_svg__d)",
      xlinkHref: "#bpt_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#bpt_svg__e"
    }))));
  };

  var _default = SvgBpt;
  _exports["default"] = _default;
});