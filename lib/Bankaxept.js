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
    global.Bankaxept = mod.exports;
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

  var SvgBankaxept = function SvgBankaxept(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#6E256B",
      d: "M36.707 0l-26.4 40H60V0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37.462 0C21.9 23.583 11.308 40 11.308 40H-1V0h38.462",
      fill: "#048388"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.589 25h-7.447c.372 2.09 1.414 3.063 3.39 2.902a26.421 26.421 0 003.786-.854l-2.198 3.381c-1.614.42-3.304.445-4.93.073a5.035 5.035 0 01-4.001-4.276 7.264 7.264 0 011.729-6.705 6.465 6.465 0 016.824-1.404 4.201 4.201 0 012.475 2.845c.18.573.3 1.163.357 1.76.061.7.015 1.407.015 2.277",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.522 30.478H13.4l4.167-6.245a53.85 53.85 0 00-4.057-6.082h4.702l1.727 3.163c.623-1.14 1.15-2.1 1.739-3.176h3.884c-1.246 1.96-2.591 3.92-3.89 5.963a46.424 46.424 0 004.165 6.319H21.04l-1.538-2.94M1.911 21.268l2.263-3.459a15.258 15.258 0 014.897.174 3.068 3.068 0 012.48 3.239c.022 1.807.011 3.615.005 5.422a7.797 7.797 0 00.55 3.727H7.87l-.197-.506c-.1.021-.197.058-.286.109a4.412 4.412 0 01-5.245-.21 3.49 3.49 0 01.391-5.22 14.42 14.42 0 012.642-1.27c.833-.349 1.697-.621 2.517-.917.116-1.834-.638-2.592-2.296-2.219-1.148.259-2.252.722-3.485 1.13",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M1.261 14.451V5.626h1.864v2.878c.244-.046.368-.073.493-.092a2.618 2.618 0 013.385 2.611 5.185 5.185 0 01-.42 2.353 2.812 2.812 0 01-2.584 1.537 5.464 5.464 0 01-2.738-.462",
      fill: "#FBFCFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.166 14.741h-2.168c-.563-.927-1.14-1.88-1.85-3.047V14.7h-1.87V5.64h1.816v5.185l.199.059 1.658-2.429h1.91l-2.008 2.836 2.304 3.461.009-.01zM18.072 14.692c0-1.341.015-2.645-.004-3.949-.019-1.194-.533-1.51-1.793-1.056v5.006h-1.89V8.75a7.171 7.171 0 014.292-.205 1.67 1.67 0 011.301 1.717c.027 1.45.008 2.9.008 4.43h-1.914z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.206 14.403a6.17 6.17 0 01-4.185.297 1.672 1.672 0 01-1.301-1.492 1.692 1.692 0 01.855-1.887 11.47 11.47 0 011.87-.62c.264-.06.532-.103.802-.126.02-1.209-.548-1.365-2.7-.767a3.406 3.406 0 01-.243-.401 5.848 5.848 0 01-.184-.587 4.996 4.996 0 013.955-.208 1.898 1.898 0 011.117 1.89c.053 1.266.014 2.537.014 3.901",
      fill: "#FBFCFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.758 22.349h-3.587c.044-1.376.728-2.238 1.78-2.261 1.057-.024 1.595.616 1.807 2.26",
      fill: "#71286D"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.583 24.816h2.165v2.74c-.972.736-1.854.743-2.51.029-.656-.716-.542-1.742.345-2.77M3.151 13.632c0-1.26-.002-2.45.004-3.642.01-.13.034-.257.07-.382 1.164-.322 1.707.01 1.817 1.13a7.85 7.85 0 010 1.579c-.119 1.125-.582 1.454-1.89 1.315",
      fill: "#0E8489"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.28 11.559v2.185a1.288 1.288 0 01-1.57-.281.972.972 0 01-.1-1.18 1.515 1.515 0 011.67-.724",
      fill: "#17878B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44.568 17.39a3.849 3.849 0 00-3.553 1.777v-.889h-3.553v19.543l3.553-6.218v-1.777c6.218 0 7.994-3.553 7.994-6.218s-1.776-6.218-4.441-6.218zm-2.665 9.771v-6.218s3.553-.888 3.553 3.553c0 3.553-3.553 2.665-3.553 2.665zM54.339 12.949v5.33h3.553l-1.777 1.776H54.34v6.218s.888 3.553 4.441.888l-2.665 3.553s-5.33.889-5.33-2.665v-7.106H49.01l5.33-7.994z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgBankaxept;
  _exports["default"] = _default;
});