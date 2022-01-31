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
      width: 60,
      height: 40,
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      cx: "52.423%",
      cy: "-6.855%",
      fx: "52.423%",
      fy: "-6.855%",
      r: "115.006%",
      gradientTransform: "matrix(.56667 0 0 1 .227 0)",
      id: "razer_gold_svg__b"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FA0",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.735%",
      cy: "-29.699%",
      fx: "49.735%",
      fy: "-29.699%",
      r: "71.474%",
      gradientTransform: "matrix(.56667 0 0 1 .216 0)",
      id: "razer_gold_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FA0",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "50.001%",
      cy: "97.683%",
      fx: "50.001%",
      fy: "97.683%",
      r: "39.954%",
      id: "razer_gold_svg__f"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#D17600",
      stopOpacity: 0.948,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#D67600",
      stopOpacity: 0.703,
      offset: "52.82%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#E28D0C",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.876%",
      cy: "50.125%",
      fx: "49.876%",
      fy: "50.125%",
      r: "49.938%",
      id: "razer_gold_svg__i"
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
      cx: "49.812%",
      cy: "24.172%",
      fx: "49.812%",
      fy: "24.172%",
      r: "70.089%",
      id: "razer_gold_svg__j"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFFAEB",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#C9C595",
      stopOpacity: 0,
      offset: "47.18%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "49.704%",
      cy: "25.811%",
      fx: "49.704%",
      fy: "25.811%",
      r: "48.299%",
      gradientTransform: "matrix(.96154 0 0 1 .02 0)",
      id: "razer_gold_svg__k"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8DD88",
      stopOpacity: 0.3,
      offset: "58.46%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7962F",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "51.917%",
      cy: "1.906%",
      fx: "51.917%",
      fy: "1.906%",
      r: "64.427%",
      gradientTransform: "matrix(.56667 0 0 1 .225 0)",
      id: "razer_gold_svg__o"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FA0",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "52.584%",
      cy: "1.314%",
      fx: "52.584%",
      fy: "1.314%",
      r: "64.468%",
      gradientTransform: "matrix(.56667 0 0 1 .228 0)",
      id: "razer_gold_svg__p"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FA0",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      cx: "50.401%",
      cy: "49.974%",
      fx: "50.401%",
      fy: "49.974%",
      r: "55.235%",
      gradientTransform: "matrix(1 0 0 .83333 0 .083)",
      id: "razer_gold_svg__r"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FA0",
      stopOpacity: 0,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#9C6322",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "49.735%",
      y1: "39.875%",
      x2: "49.735%",
      y2: "102.257%",
      id: "razer_gold_svg__a"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#965609",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#874E0A",
      stopOpacity: 0.632,
      offset: "26.43%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#5E370B",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.001%",
      y1: "2.761%",
      x2: "50.001%",
      y2: "97.578%",
      id: "razer_gold_svg__d"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFFBC9",
      offset: "7.692%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFD22E",
      offset: "17.44%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#EB920C",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.001%",
      y1: "2.761%",
      x2: "50.001%",
      y2: "97.578%",
      id: "razer_gold_svg__e"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFC421",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#E38900",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "16.286%",
      y1: "-21.281%",
      x2: "73.327%",
      y2: "56.884%",
      id: "razer_gold_svg__g"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFD900",
      stopOpacity: 0,
      offset: "43.08%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#D67D00",
      offset: "62.05%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#C45A03",
      stopOpacity: 0.262,
      offset: "81.03%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFBD08",
      stopOpacity: 0,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "16.055%",
      y1: "30.402%",
      x2: "79.552%",
      y2: "67.061%",
      id: "razer_gold_svg__h"
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
      stopOpacity: 0.833,
      offset: "48.21%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7F1E3",
      offset: "52.31%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8E9AE",
      stopOpacity: 0.885,
      offset: "61.54%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F9DD5F",
      stopOpacity: 0.802,
      offset: "66.15%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FBE262",
      stopOpacity: 0.661,
      offset: "72.31%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8E6AB",
      stopOpacity: 0.088,
      offset: "80.51%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7E5BC",
      stopOpacity: 0,
      offset: "93.85%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "49.68%",
      y1: "100%",
      x2: "49.68%",
      y2: ".111%",
      id: "razer_gold_svg__l"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#ED7A00",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F1C130",
      stopOpacity: 0.6,
      offset: "99.49%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.12%",
      y1: "99.88%",
      x2: "50.12%",
      y2: ".12%",
      id: "razer_gold_svg__m"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F8DD88",
      offset: "4.615%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#F7F6F3",
      stopOpacity: 0.031,
      offset: "59.49%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50.123%",
      y1: "100.123%",
      x2: "50.123%",
      y2: ".185%",
      id: "razer_gold_svg__n"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#693619",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#A3620C",
      offset: "100%"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      x1: "49.735%",
      y1: "39.281%",
      x2: "49.735%",
      y2: "97.318%",
      id: "razer_gold_svg__q"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#784507",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#874E0A",
      stopOpacity: 0.632,
      offset: "26.43%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#5C360B",
      offset: "100%"
    }))), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18.63 20.07c-.45.63-3.42 1.26-3.42 1.26l.54-1.35h-1.08l-3.51 6.12h11.61l1.89-3.15H17.1l1.53-2.88Z",
      fill: "url(#razer_gold_svg__a)",
      transform: "translate(12 2)"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#B86A09"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M29.1 17.93h-2.34l-.9 1.62h8.82l.9-1.62h-2.52l3.51-6.03H24.96l-1.89 3.15h7.56l-1.53 2.88ZM30.63 22.07h2.52l.9-1.62h-8.91l-.9 1.62h2.34l-3.42 6.03h11.61l1.89-3.15H29.1l1.53-2.88Z"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M6.3 6.03H3.96l-.9 1.62h8.82l.9-1.62h-2.52L13.77 0H2.16L.27 3.15h7.56L6.3 6.03Z",
      fill: "url(#razer_gold_svg__b)",
      transform: "translate(22.8 11.9)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.82 8.55H2.43l-.9 1.62h2.34L.36 16.2h11.61l1.89-3.15H6.3l1.62-2.88h2.52",
      fill: "url(#razer_gold_svg__c)",
      transform: "translate(22.8 11.9)"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(12 2)"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "url(#razer_gold_svg__d)",
      cx: 18,
      cy: 18,
      r: 18
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 18,
      cy: 18,
      r: 18,
      opacity: 0.64,
      fill: "url(#razer_gold_svg__e)"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "url(#razer_gold_svg__f)",
      cx: 18,
      cy: 18,
      r: 18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M.27 21.06C1.71 29.52 9.09 36 18 36s16.29-6.48 17.73-14.94H.27Z",
      fill: "url(#razer_gold_svg__g)"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "#F7C63B",
      cx: 18,
      cy: 18,
      r: 14.4
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "url(#razer_gold_svg__h)",
      cx: 18,
      cy: 18,
      r: 18
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "url(#razer_gold_svg__i)",
      cx: 17.91,
      cy: 17.91,
      r: 14.4
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.29 31.23c-8.28 0-15.03-6.75-15.03-15.03S8.01 1.17 16.29 1.17 31.32 7.92 31.32 16.2s-6.75 15.03-15.03 15.03Z",
      fill: "url(#razer_gold_svg__j)",
      transform: "translate(1.8 1.8)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.09 3.6c7.92 0 14.4 6.48 14.4 14.4s-6.48 14.4-14.4 14.4S3.69 25.92 3.69 18s6.48-14.4 14.4-14.4Zm0-1.35C9.45 2.25 2.34 9.27 2.34 18s7.02 15.75 15.75 15.75S33.84 26.64 33.84 18 26.73 2.25 18.09 2.25Z",
      fill: "#8F5207"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: 16.47,
      cy: 15.75,
      rx: 16.38,
      ry: 15.75,
      transform: "translate(1.8)",
      fill: "url(#razer_gold_svg__k)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.14 20.34h-7.02c-3.15 0-1.98-1.89-1.98-1.89l-4.77 1.89h-.9l-.27.99-.36-.54 1.17-1.44-3.6-.81c-1.26 2.16-3.06 1.89-3.06 1.89h-5.4c-.9 0-.9.81-.9.81 2.07 9.18 10.53 11.16 13.5 11.61v.09h1.08v-.09c2.97-.45 11.43-2.43 13.5-11.61-.09 0-.09-.9-.99-.9Z",
      fill: "url(#razer_gold_svg__l)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 33.03c-1.98 0-3.96-.36-5.85-1.17-1.8-.72-3.42-1.8-4.77-3.24-1.35-1.35-2.43-2.97-3.24-4.77-.81-1.89-1.17-3.78-1.17-5.85 0-1.98.36-3.96 1.17-5.85.72-1.8 1.8-3.42 3.24-4.77 1.35-1.35 2.97-2.43 4.77-3.24 1.89-.81 3.78-1.17 5.85-1.17 1.98 0 3.96.36 5.85 1.17 1.8.72 3.42 1.8 4.77 3.24 1.35 1.35 2.43 2.97 3.24 4.77.81 1.89 1.17 3.78 1.17 5.85 0 1.98-.36 3.96-1.17 5.85-.72 1.8-1.8 3.42-3.24 4.77-1.35 1.35-2.97 2.43-4.77 3.24-1.8.72-3.78 1.17-5.85 1.17Zm0-29.61C9.99 3.42 3.42 9.99 3.42 18S9.99 32.58 18 32.58 32.58 26.01 32.58 18 26.1 3.42 18 3.42Z",
      fill: "url(#razer_gold_svg__m)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 32.58c-1.98 0-3.87-.36-5.67-1.17-1.71-.72-3.33-1.8-4.68-3.15-1.35-1.35-2.43-2.88-3.15-4.68-.72-1.8-1.17-3.69-1.17-5.67s.36-3.87 1.17-5.67c.72-1.71 1.8-3.33 3.15-4.68C9 6.3 10.62 5.31 12.33 4.5c1.8-.72 3.69-1.17 5.67-1.17s3.87.36 5.67 1.17c1.71.72 3.33 1.8 4.68 3.15 1.35 1.35 2.43 2.88 3.15 4.68.72 1.8 1.17 3.69 1.17 5.67s-.36 3.87-1.17 5.67c-.72 1.71-1.8 3.33-3.15 4.68-1.35 1.35-2.88 2.34-4.59 3.15-1.8.72-3.78 1.08-5.76 1.08Zm0-28.8C10.17 3.78 3.78 10.17 3.78 18c0 7.83 6.39 14.22 14.22 14.22 7.83 0 14.22-6.39 14.22-14.22 0-7.83-6.39-14.22-14.22-14.22Z",
      fill: "url(#razer_gold_svg__n)"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M7.83 10.17h2.52l.9-1.62H2.34l-.9 1.62h2.34L.36 16.2h11.61l1.89-3.15H6.3l1.53-2.88Z",
      fill: "url(#razer_gold_svg__o)",
      transform: "translate(22.8 11.9)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.3 6.03H3.96l-.9 1.62h8.82l.9-1.62h-2.52L13.77 0H2.16L.27 3.15h7.56L6.3 6.03Z",
      fill: "url(#razer_gold_svg__p)",
      transform: "translate(22.8 11.9)"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#B86A09"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M29.1 17.93h-2.34l-.9 1.62h8.82l.9-1.62h-2.52l3.51-6.03H24.96l-1.89 3.15h7.56l-1.53 2.88ZM30.63 22.07h2.52l.9-1.62h-8.91l-.9 1.62h2.34l-3.42 6.03h11.61l1.89-3.15H29.1l1.53-2.88Z"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M18.63 20.07c-.36.45-.9.45-.9.45h-2.16c-.81 0-.9-.45-.9-.45l-3.51 6.03h11.61l1.89-3.15H17.1l1.53-2.88Z",
      fill: "url(#razer_gold_svg__q)",
      transform: "translate(12 2)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.21 13.05h7.56l-1.8 3.15H.36l3.51-6.03H1.53l.9-1.62h8.91l-.9 1.62H7.92l-1.71 2.88Zm.09-7.02H3.96l-.9 1.62h8.82l.9-1.62h-2.52L13.77 0H2.16L.27 3.15h7.56L6.3 6.03Z",
      fill: "url(#razer_gold_svg__r)",
      transform: "translate(22.8 11.9)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M29.01 24.95h7.56l-1.8 3.15H23.16l3.51-6.03h-2.34l.9-1.62h8.91l-.9 1.62h-2.52l-1.71 2.88Zm.09-7.02h-2.34l-.9 1.62h8.82l.9-1.62h-2.52l3.51-6.03H24.96l-1.89 3.15h7.56l-1.53 2.88Z",
      opacity: 0.68,
      fill: "#542400"
    })))));
  };

  var _default = SvgRazerGold;
  _exports["default"] = _default;
});