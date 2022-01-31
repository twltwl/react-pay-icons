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
    global.RazerGold = mod.exports;
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

  var SvgRazerGold = function SvgRazerGold(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "pmx-logo-razer-gold"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "49.7346667%",
      y1: "39.875%",
      x2: "49.7346667%",
      y2: "102.257353%",
      id: "linearGradient-1"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#965609",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#874E0A",
      stopOpacity: 0.6322,
      offset: "26.43%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#5E370B",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "52.4226667%",
      cy: "-6.85529412%",
      fx: "52.4226667%",
      fy: "-6.85529412%",
      r: "115.005882%",
      gradientTransform: "translate(0.524227,-0.068553),scale(0.566667,1.000000),translate(-0.524227,0.068553)",
      id: "radialGradient-2"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFAA00",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.7346667%",
      cy: "-29.6988235%",
      fx: "49.7346667%",
      fy: "-29.6988235%",
      r: "71.4741176%",
      gradientTransform: "translate(0.497347,-0.296988),scale(0.566667,1.000000),translate(-0.497347,0.296988)",
      id: "radialGradient-3"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFAA00",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.0005%",
      y1: "2.7615%",
      x2: "50.0005%",
      y2: "97.578%",
      id: "linearGradient-4"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFFBC9",
      offset: "7.692307%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFD22E",
      offset: "17.44%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#EB920C",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.0005%",
      y1: "2.7615%",
      x2: "50.0005%",
      y2: "97.578%",
      id: "linearGradient-5"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFC421",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#E38900",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "50.0005%",
      cy: "97.68325%",
      fx: "50.0005%",
      fy: "97.68325%",
      r: "39.954%",
      id: "radialGradient-6"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#D17600",
      stopOpacity: 0.9481,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#D67600",
      stopOpacity: 0.7026,
      offset: "52.82%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#E28D0C",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "16.2860406%",
      y1: "-21.2807229%",
      x2: "73.3269036%",
      y2: "56.8843373%",
      id: "linearGradient-7"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFD900",
      stopOpacity: 0,
      offset: "43.08%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#D67D00",
      offset: "62.05%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#C45A03",
      stopOpacity: 0.2615,
      offset: "81.03%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFBD08",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "16.05475%",
      y1: "30.40175%",
      x2: "79.5515%",
      y2: "67.0615%",
      id: "linearGradient-8"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF06E",
      stopOpacity: 0,
      offset: "18.97%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FDFBF5",
      stopOpacity: 0.4,
      offset: "31.79%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8F8F8",
      stopOpacity: 0.8327,
      offset: "48.21%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7F1E3",
      offset: "52.31%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8E9AE",
      stopOpacity: 0.8853,
      offset: "61.54%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F9DD5F",
      stopOpacity: 0.8021,
      offset: "66.15%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FBE262",
      stopOpacity: 0.6615,
      offset: "72.31%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8E6AB",
      stopOpacity: 0.08820513,
      offset: "80.51%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7E5BC",
      stopOpacity: 0,
      offset: "93.85%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.875625%",
      cy: "50.125%",
      fx: "49.875625%",
      fy: "50.125%",
      r: "49.9375%",
      id: "radialGradient-9"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8DA7A",
      stopOpacity: 0,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7CC1B",
      offset: "91.28%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7790A",
      stopOpacity: 0.3,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.8122754%",
      cy: "24.1718563%",
      fx: "49.8122754%",
      fy: "24.1718563%",
      r: "70.0892216%",
      id: "radialGradient-10"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFFAEB",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#C9C595",
      stopOpacity: 0,
      offset: "47.18%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "6.03847885%",
      cy: "1.80678438%",
      fx: "6.03847885%",
      fy: "1.80678438%",
      r: "3.57409429%",
      gradientTransform: "translate(0.060385,0.018068),scale(0.945946,1.000000),translate(-0.060385,-0.018068)",
      id: "radialGradient-11"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8DD88",
      stopOpacity: 0.3,
      offset: "58.46%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7962F",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.7043798%",
      cy: "25.8112054%",
      fx: "49.7043798%",
      fy: "25.8112054%",
      r: "48.2985714%",
      gradientTransform: "translate(0.497044,0.258112),scale(0.961538,1.000000),translate(-0.497044,-0.258112)",
      id: "radialGradient-12"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8DD88",
      stopOpacity: 0.3,
      offset: "58.46%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7962F",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "49.6801282%",
      y1: "100%",
      x2: "49.6801282%",
      y2: "0.110559006%",
      id: "linearGradient-13"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#ED7A00",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F1C130",
      stopOpacity: 0.6,
      offset: "99.49%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.1203593%",
      y1: "99.8802395%",
      x2: "50.1203593%",
      y2: "0.119760479%",
      id: "linearGradient-14"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8DD88",
      offset: "4.615385%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7F6F3",
      stopOpacity: 0.03076923,
      offset: "59.49%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.1233129%",
      y1: "100.123077%",
      x2: "50.1233129%",
      y2: "0.184615385%",
      id: "linearGradient-15"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#693619",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#A3620C",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "51.9173333%",
      cy: "1.906408%",
      fx: "51.9173333%",
      fy: "1.906408%",
      r: "64.4270588%",
      gradientTransform: "translate(0.519173,0.019064),scale(0.566667,1.000000),translate(-0.519173,-0.019064)",
      id: "radialGradient-16"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFAA00",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "52.584%",
      cy: "1.31429424%",
      fx: "52.584%",
      fy: "1.31429424%",
      r: "64.4682353%",
      gradientTransform: "translate(0.525840,0.013143),scale(0.566667,1.000000),translate(-0.525840,-0.013143)",
      id: "radialGradient-17"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFAA00",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "49.7346667%",
      y1: "39.280597%",
      x2: "49.7346667%",
      y2: "97.3179104%",
      id: "linearGradient-18"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#784507",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#874E0A",
      stopOpacity: 0.6322,
      offset: "26.43%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#5C360B",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "50.4013333%",
      cy: "49.9744444%",
      fx: "50.4013333%",
      fy: "49.9744444%",
      r: "55.2353333%",
      gradientTransform: "translate(0.504013,0.499744),scale(1.000000,0.833333),translate(-0.504013,-0.499744)",
      id: "radialGradient-19"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFAA00",
      stopOpacity: 0,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "pmx-logo-razer-gold",
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#000000",
      x: 0,
      y: 0,
      width: 60,
      height: 40
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(12.000000, 2.000000)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18.63,20.07 C18.18,20.7 15.21,21.33 15.21,21.33 L15.75,19.98 C14.94,19.98 14.67,19.98 14.67,19.98 L11.16,26.1 C11.16,26.1 22.77,26.1 22.77,26.1 L24.66,22.95 L17.1,22.95 L18.63,20.07 Z",
      id: "Shape",
      fill: "url(#linearGradient-1)"
    }), /*#__PURE__*/React.createElement("g", {
      id: "Group",
      transform: "translate(10.800000, 9.900000)",
      fill: "#B86A09"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.3,6.03 C4.95,6.03 3.96,6.03 3.96,6.03 L3.06,7.65 L5.4,7.65 L9.36,7.65 L11.88,7.65 L12.78,6.03 C12.78,6.03 11.7,6.03 10.26,6.03 L13.77,0 C13.77,0 2.16,0 2.16,0 L0.27,3.15 L7.83,3.15 L6.3,6.03 Z",
      id: "Shape"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.83,10.17 L10.35,10.17 L11.25,8.55 C11.25,8.55 10.17,8.55 8.73,8.55 L4.5,8.55 C3.24,8.55 2.34,8.55 2.34,8.55 L1.44,10.17 L3.78,10.17 L0.36,16.2 C0.36,16.2 11.97,16.2 11.97,16.2 L13.86,13.05 L6.3,13.05 L7.83,10.17 Z",
      id: "Shape"
    })), /*#__PURE__*/React.createElement("g", {
      id: "Group",
      transform: "translate(10.800000, 9.900000)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.3,6.03 C4.95,6.03 3.96,6.03 3.96,6.03 L3.06,7.65 L5.4,7.65 L9.36,7.65 L11.88,7.65 L12.78,6.03 C12.78,6.03 11.7,6.03 10.26,6.03 L13.77,0 C13.77,0 2.16,0 2.16,0 L0.27,3.15 L7.83,3.15 L6.3,6.03 Z",
      id: "Shape",
      fill: "url(#radialGradient-2)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.82,8.55 L4.59,8.55 C3.33,8.55 2.43,8.55 2.43,8.55 L1.53,10.17 L3.87,10.17 L0.36,16.2 C0.36,16.2 11.97,16.2 11.97,16.2 L13.86,13.05 L6.3,13.05 L7.92,10.17 L10.44,10.17",
      id: "Shape",
      fill: "url(#radialGradient-3)"
    })), /*#__PURE__*/React.createElement("g", {
      id: "Group"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      id: "Oval",
      fill: "url(#linearGradient-4)",
      cx: 18,
      cy: 18,
      r: 18
    }), /*#__PURE__*/React.createElement("g", {
      opacity: 0.64,
      fill: "url(#linearGradient-5)",
      id: "Oval"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 18,
      cy: 18,
      r: 18
    })), /*#__PURE__*/React.createElement("circle", {
      id: "Oval",
      fill: "url(#radialGradient-6)",
      cx: 18,
      cy: 18,
      r: 18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0.27,21.06 C1.71,29.52 9.09,36 18,36 C26.91,36 34.29,29.52 35.73,21.06 L0.27,21.06 Z",
      id: "Shape",
      fill: "url(#linearGradient-7)"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "Oval",
      fill: "#F7C63B",
      cx: 18,
      cy: 18,
      r: 14.4
    }), /*#__PURE__*/React.createElement("circle", {
      id: "Oval",
      fill: "url(#linearGradient-8)",
      cx: 18,
      cy: 18,
      r: 18
    }), /*#__PURE__*/React.createElement("circle", {
      id: "Oval",
      fill: "url(#radialGradient-9)",
      cx: 17.91,
      cy: 17.91,
      r: 14.4
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(1.800000, 1.800000)",
      id: "Shape"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16.29,31.23 C8.01,31.23 1.26,24.48 1.26,16.2 C1.26,7.92 8.01,1.17 16.29,1.17 C24.57,1.17 31.32,7.92 31.32,16.2 C31.32,24.48 24.57,31.23 16.29,31.23 Z",
      fill: "url(#radialGradient-10)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.29,1.8 C24.21,1.8 30.69,8.28 30.69,16.2 C30.69,24.12 24.21,30.6 16.29,30.6 C8.37,30.6 1.89,24.12 1.89,16.2 C1.89,8.28 8.37,1.8 16.29,1.8 Z M16.29,0.45 C7.65,0.45 0.54,7.47 0.54,16.2 C0.54,24.93 7.56,31.95 16.29,31.95 C25.02,31.95 32.04,24.84 32.04,16.2 C32.04,7.56 24.93,0.45 16.29,0.45 Z",
      fill: "#8F5207"
    })), /*#__PURE__*/React.createElement("g", {
      id: "SVGID_25_-link",
      transform: "translate(1.800000, 0.000000)",
      fill: "url(#radialGradient-12)"
    }, /*#__PURE__*/React.createElement("ellipse", {
      id: "SVGID_25_",
      cx: 16.47,
      cy: 15.75,
      rx: 16.38,
      ry: 15.75
    })), /*#__PURE__*/React.createElement("path", {
      d: "M31.14,20.34 L24.12,20.34 C20.97,20.34 22.14,18.45 22.14,18.45 L17.37,20.34 L16.47,20.34 L16.2,21.33 L15.84,20.79 L17.01,19.35 L13.41,18.54 C12.15,20.7 10.35,20.43 10.35,20.43 L4.95,20.43 C4.05,20.43 4.05,21.24 4.05,21.24 C6.12,30.42 14.58,32.4 17.55,32.85 L17.55,32.94 C17.55,32.94 17.73,32.94 18.09,32.94 C18.45,32.94 18.63,32.94 18.63,32.94 L18.63,32.85 C21.6,32.4 30.06,30.42 32.13,21.24 C32.04,21.24 32.04,20.34 31.14,20.34 Z",
      id: "Shape",
      fill: "url(#linearGradient-13)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18,33.03 C16.02,33.03 14.04,32.67 12.15,31.86 C10.35,31.14 8.73,30.06 7.38,28.62 C6.03,27.27 4.95,25.65 4.14,23.85 C3.33,21.96 2.97,20.07 2.97,18 C2.97,16.02 3.33,14.04 4.14,12.15 C4.86,10.35 5.94,8.73 7.38,7.38 C8.73,6.03 10.35,4.95 12.15,4.14 C14.04,3.33 15.93,2.97 18,2.97 C19.98,2.97 21.96,3.33 23.85,4.14 C25.65,4.86 27.27,5.94 28.62,7.38 C29.97,8.73 31.05,10.35 31.86,12.15 C32.67,14.04 33.03,15.93 33.03,18 C33.03,19.98 32.67,21.96 31.86,23.85 C31.14,25.65 30.06,27.27 28.62,28.62 C27.27,29.97 25.65,31.05 23.85,31.86 C22.05,32.58 20.07,33.03 18,33.03 Z M18,3.42 C9.99,3.42 3.42,9.99 3.42,18 C3.42,26.01 9.99,32.58 18,32.58 C26.01,32.58 32.58,26.01 32.58,18 C32.58,9.99 26.1,3.42 18,3.42 Z",
      id: "Shape",
      fill: "url(#linearGradient-14)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18,32.58 C16.02,32.58 14.13,32.22 12.33,31.41 C10.62,30.69 9,29.61 7.65,28.26 C6.3,26.91 5.22,25.38 4.5,23.58 C3.78,21.78 3.33,19.89 3.33,17.91 C3.33,15.93 3.69,14.04 4.5,12.24 C5.22,10.53 6.3,8.91 7.65,7.56 C9,6.3 10.62,5.31 12.33,4.5 C14.13,3.78 16.02,3.33 18,3.33 C19.98,3.33 21.87,3.69 23.67,4.5 C25.38,5.22 27,6.3 28.35,7.65 C29.7,9 30.78,10.53 31.5,12.33 C32.22,14.13 32.67,16.02 32.67,18 C32.67,19.98 32.31,21.87 31.5,23.67 C30.78,25.38 29.7,27 28.35,28.35 C27,29.7 25.47,30.69 23.76,31.5 C21.96,32.22 19.98,32.58 18,32.58 Z M18,3.78 C10.17,3.78 3.78,10.17 3.78,18 C3.78,25.83 10.17,32.22 18,32.22 C25.83,32.22 32.22,25.83 32.22,18 C32.22,10.17 25.83,3.78 18,3.78 Z",
      id: "Shape",
      fill: "url(#linearGradient-15)"
    })), /*#__PURE__*/React.createElement("g", {
      transform: "translate(10.800000, 9.900000)",
      id: "Shape"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.83,10.17 L10.35,10.17 L11.25,8.55 C11.25,8.55 10.17,8.55 8.73,8.55 L4.5,8.55 C3.24,8.55 2.34,8.55 2.34,8.55 L1.44,10.17 L3.78,10.17 L0.36,16.2 C0.36,16.2 11.97,16.2 11.97,16.2 L13.86,13.05 L6.3,13.05 L7.83,10.17 Z",
      fill: "url(#radialGradient-16)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.3,6.03 C4.95,6.03 3.96,6.03 3.96,6.03 L3.06,7.65 L5.4,7.65 L9.36,7.65 L11.88,7.65 L12.78,6.03 C12.78,6.03 11.7,6.03 10.26,6.03 L13.77,0 C13.77,0 2.16,0 2.16,0 L0.27,3.15 L7.83,3.15 L6.3,6.03 Z",
      fill: "url(#radialGradient-17)"
    })), /*#__PURE__*/React.createElement("g", {
      transform: "translate(10.800000, 9.900000)",
      fill: "#B86A09",
      id: "Shape"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.3,6.03 C4.95,6.03 3.96,6.03 3.96,6.03 L3.06,7.65 L5.4,7.65 L9.36,7.65 L11.88,7.65 L12.78,6.03 C12.78,6.03 11.7,6.03 10.26,6.03 L13.77,0 C13.77,0 2.16,0 2.16,0 L0.27,3.15 L7.83,3.15 L6.3,6.03 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.83,10.17 L10.35,10.17 L11.25,8.55 C11.25,8.55 10.17,8.55 8.73,8.55 L4.5,8.55 C3.24,8.55 2.34,8.55 2.34,8.55 L1.44,10.17 L3.78,10.17 L0.36,16.2 C0.36,16.2 11.97,16.2 11.97,16.2 L13.86,13.05 L6.3,13.05 L7.83,10.17 Z"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M18.63,20.07 C18.27,20.52 17.73,20.52 17.73,20.52 L15.57,20.52 C14.76,20.52 14.67,20.07 14.67,20.07 L11.16,26.1 C11.16,26.1 22.77,26.1 22.77,26.1 L24.66,22.95 L17.1,22.95 L18.63,20.07 Z",
      id: "Shape",
      fill: "url(#linearGradient-18)"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(10.800000, 9.900000)",
      id: "Shape"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.21,13.05 L13.77,13.05 L11.97,16.2 C11.97,16.2 0.36,16.2 0.36,16.2 L3.87,10.17 L1.53,10.17 L2.43,8.55 C2.43,8.55 3.33,8.55 4.59,8.55 L8.82,8.55 C10.26,8.55 11.34,8.55 11.34,8.55 L10.44,10.17 L7.92,10.17 L6.21,13.05 Z M6.3,6.03 C4.95,6.03 3.96,6.03 3.96,6.03 L3.06,7.65 L5.4,7.65 L9.36,7.65 L11.88,7.65 L12.78,6.03 C12.78,6.03 11.7,6.03 10.26,6.03 L13.77,0 C13.77,0 2.16,0 2.16,0 L0.27,3.15 L7.83,3.15 L6.3,6.03 Z",
      fill: "url(#radialGradient-19)"
    }), /*#__PURE__*/React.createElement("g", {
      opacity: 0.68,
      fill: "#542400"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M6.21,13.05 L13.77,13.05 L11.97,16.2 C11.97,16.2 0.36,16.2 0.36,16.2 L3.87,10.17 L1.53,10.17 L2.43,8.55 C2.43,8.55 3.33,8.55 4.59,8.55 L8.82,8.55 C10.26,8.55 11.34,8.55 11.34,8.55 L10.44,10.17 L7.92,10.17 L6.21,13.05 Z M6.3,6.03 C4.95,6.03 3.96,6.03 3.96,6.03 L3.06,7.65 L5.4,7.65 L9.36,7.65 L11.88,7.65 L12.78,6.03 C12.78,6.03 11.7,6.03 10.26,6.03 L13.77,0 C13.77,0 2.16,0 2.16,0 L0.27,3.15 L7.83,3.15 L6.3,6.03 Z"
    })))))))));
  };

  var _default = SvgRazerGold;
  _exports["default"] = _default;
});