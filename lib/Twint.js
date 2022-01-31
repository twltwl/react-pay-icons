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
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 60,
      height: 40,
      fill: "black"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.2249 23.8288C19.2249 24.0415 19.0729 24.2948 18.8906 24.3961L12.4468 28.1246C12.2644 28.2259 11.9605 28.2259 11.7781 28.1246L5.33435 24.3961C5.15198 24.2948 5 24.0314 5 23.8288V16.3718C5 16.1591 5.15198 15.9058 5.33435 15.8045L11.7781 12.076C11.9605 11.9747 12.2644 11.9747 12.4468 12.076L18.8906 15.8045C19.0729 15.9058 19.2249 16.1692 19.2249 16.3718V23.8288ZM55 16.9088H49.2351V18.2867H51.3019V24.1834H52.9331V18.2867H55V16.9088ZM28.7893 16.9088H23.0142V18.2867H25.0811V24.1834H26.7123V18.2867H28.7791L28.7893 16.9088ZM45.4863 16.6859C43.6727 16.6859 42.6596 17.8511 42.6596 19.5228V24.1935H44.2806V19.4924C44.2806 18.7629 44.7062 18.1955 45.5066 18.1955C46.307 18.1955 46.7224 18.8642 46.7224 19.4924V24.1935H48.3333V19.5228C48.3536 17.8409 47.31 16.6859 45.4863 16.6859ZM39.3972 16.9088V24.1834H41.0081V16.9088H39.3972ZM33.9159 19.7964L33.9666 20.1206L35.4863 24.1935H36.1449L38.2118 16.9189H36.6211L35.6383 20.7386L35.5775 21.154L35.4965 20.7386L34.1793 16.9189H33.6525L32.3354 20.7386L32.2543 21.154L32.2036 20.7386L31.2209 16.9189H29.6201L31.6869 24.1935H32.3455L33.8653 20.1206L33.9159 19.7964Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.4765 20.1206L13.7947 22.5928L12.9335 21.2756L13.9264 19.7863C14.1087 19.5229 14.5039 18.7934 14.048 17.8005C13.6832 16.9899 12.8828 16.6049 12.1736 16.6049C11.4644 16.6049 10.7045 16.9697 10.2992 17.8005C9.83316 18.763 10.2384 19.5026 10.4107 19.7559C10.4107 19.7559 10.9679 20.5664 11.4238 21.2452L12.1736 22.3293L13.2982 24.0517C13.3083 24.0619 13.4806 24.3354 13.7947 24.3354C14.0885 24.3354 14.281 24.0619 14.3013 24.0416L16.9355 20.1409H15.4765V20.1206ZM12.1635 20.1814C12.1635 20.1814 11.7278 19.5127 11.434 19.0467C11.13 18.5502 11.4644 17.8005 12.1635 17.8005C12.8524 17.8005 13.1969 18.5502 12.8929 19.0467C12.6093 19.5127 12.1635 20.1814 12.1635 20.1814Z",
      fill: "url(#paint0_radial)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5516 22.5117L8.90011 20.1915C8.90011 20.1915 8.46444 19.5229 8.17062 19.0568C7.86667 18.5603 8.20102 17.8106 8.90011 17.8106C8.99129 17.8106 9.06221 17.8207 9.14327 17.841L9.72078 16.7772C9.45735 16.6657 9.16353 16.6049 8.90011 16.6049C8.20102 16.6049 7.43101 16.9697 7.02574 17.8005C6.55968 18.763 6.96495 19.5026 7.13719 19.7559L10.0247 24.0416C10.0551 24.072 10.2375 24.3455 10.5414 24.3455C10.8454 24.3455 11.0278 24.0821 11.048 24.0517L11.9194 22.7245L11.1696 21.6302L10.5516 22.5117Z",
      fill: "url(#paint1_radial)"
    }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "paint0_radial",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "translate(11.6185 17.2834) scale(7.76419 8.76421)"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFCC00"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.09157,
      stopColor: "#FFC800"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.1739,
      stopColor: "#FFBD00"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.2528,
      stopColor: "#FFAB00"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.3295,
      stopColor: "#FF9100"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.4046,
      stopColor: "#FF7000"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.4786,
      stopColor: "#FF4700"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.5503,
      stopColor: "#FF1800"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.5822,
      stopColor: "#FF0000"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#FF0000"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "paint1_radial",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "translate(6.93767 17.731) scale(7.11885 10.7787)"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#00B4E6"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.201,
      stopColor: "#00B0E3"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.3898,
      stopColor: "#01A5DB"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.5737,
      stopColor: "#0292CD"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.7546,
      stopColor: "#0377BA"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.9316,
      stopColor: "#0455A1"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#054696"
    })))));
  };

  var _default = SvgTwint;
  _exports["default"] = _default;
});