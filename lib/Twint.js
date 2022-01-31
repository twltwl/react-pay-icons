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
    global.Twint = mod.exports;
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

  var SvgTwint = function SvgTwint(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.225 23.829a.717.717 0 0 1-.334.567l-6.444 3.729a.774.774 0 0 1-.669 0l-6.444-3.729A.732.732 0 0 1 5 23.83v-7.457c0-.213.152-.466.334-.567l6.444-3.729a.774.774 0 0 1 .669 0l6.444 3.729a.732.732 0 0 1 .334.567v7.457ZM55 16.909h-5.765v1.378h2.067v5.896h1.631v-5.896H55v-1.378Zm-26.21 0h-5.776v1.378h2.067v5.896h1.631v-5.896h2.067l.01-1.378Zm16.696-.223c-1.813 0-2.826 1.165-2.826 2.837v4.67h1.62v-4.7c0-.73.426-1.297 1.227-1.297.8 0 1.215.668 1.215 1.296v4.701h1.611v-4.67c.02-1.682-1.023-2.837-2.847-2.837Zm-6.089.223v7.274h1.611V16.91h-1.61Zm-5.481 2.887.05.325 1.52 4.073h.659l2.067-7.275h-1.59l-.984 3.82-.06.415-.082-.415-1.317-3.82h-.526l-1.318 3.82-.08.415-.051-.415-.983-3.82h-1.6l2.066 7.274h.659l1.52-4.072.05-.325Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m15.476 20.12-1.681 2.473-.861-1.317.992-1.49c.183-.263.578-.993.122-1.986-.365-.81-1.165-1.195-1.874-1.195-.71 0-1.47.365-1.875 1.195-.466.963-.06 1.703.112 1.956 0 0 .557.81 1.013 1.49l.75 1.083 1.124 1.723c.01.01.183.283.497.283.293 0 .486-.273.506-.293l2.635-3.901h-1.46v-.02Zm-3.313.061s-.435-.668-.729-1.134a.831.831 0 0 1 .73-1.247c.688 0 1.033.75.729 1.247a41.05 41.05 0 0 1-.73 1.134Z",
      fill: "url(#twint_svg__a)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.552 22.512 8.9 20.192s-.436-.67-.73-1.135a.831.831 0 0 1 .73-1.246c.091 0 .162.01.243.03l.578-1.064a2.168 2.168 0 0 0-.82-.172c-.7 0-1.47.365-1.875 1.195-.466.963-.061 1.703.111 1.956l2.888 4.286c.03.03.213.303.516.303.304 0 .487-.263.507-.293l.871-1.328-.75-1.094-.617.882Z",
      fill: "url(#twint_svg__b)"
    }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "twint_svg__a",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "matrix(7.76419 0 0 8.76421 11.618 17.283)"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FC0"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.092,
      stopColor: "#FFC800"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.174,
      stopColor: "#FFBD00"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.253,
      stopColor: "#FFAB00"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.33,
      stopColor: "#FF9100"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.405,
      stopColor: "#FF7000"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.479,
      stopColor: "#FF4700"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.55,
      stopColor: "#FF1800"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.582,
      stopColor: "red"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "red"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "twint_svg__b",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "matrix(7.11885 0 0 10.7787 6.938 17.731)"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#00B4E6"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.201,
      stopColor: "#00B0E3"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.39,
      stopColor: "#01A5DB"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.574,
      stopColor: "#0292CD"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.755,
      stopColor: "#0377BA"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.932,
      stopColor: "#0455A1"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#054696"
    })))));
  };

  var _default = SvgTwint;
  _exports["default"] = _default;
});