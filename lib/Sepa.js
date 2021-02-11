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
    global.Sepa = mod.exports;
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

  var SvgSepa = function SvgSepa(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 40 26"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("mask", {
      id: "sepa_svg__a",
      width: 44.62,
      height: 44.81,
      x: -2.31,
      y: -9.41,
      maskUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M-2.31 35.4H42.3V-9.4H-2.3v44.8z"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: 39.27,
      height: 24.77,
      x: 0.11,
      y: 1.44,
      fill: "#c83291",
      rx: 2.42,
      ry: 2.42
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9a1b27",
      d: "M0 25.95h40V0H0v25.95z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M9.9 12.42a7.1 7.1 0 00-1.8-.39 3.85 3.85 0 01-1.04-.21.38.38 0 01-.23-.36.44.44 0 01.18-.35.98.98 0 01.6-.15 1.22 1.22 0 01.7.2.8.8 0 01.3.44l2.3-.23a2.83 2.83 0 00-.6-.99 2.18 2.18 0 00-.9-.54 5.9 5.9 0 00-1.68-.17 5.31 5.31 0 00-1.71.22 2.17 2.17 0 00-1 .68 1.68 1.68 0 00-.37 1.09A1.66 1.66 0 005 12.68a1.86 1.86 0 00.83.64 10.84 10.84 0 001.76.41 5.01 5.01 0 011.04.26.45.45 0 01.28.4.47.47 0 01-.21.4 1.2 1.2 0 01-.76.2 1.24 1.24 0 01-.72-.18 1.2 1.2 0 01-.41-.62l-2.42.23a2.24 2.24 0 00.95 1.41 4.6 4.6 0 002.48.5 5 5 0 001.94-.3 2.24 2.24 0 001.05-.84 1.97 1.97 0 00.33-1.07 1.73 1.73 0 00-.32-1 2 2 0 00-.9-.7zm14.83 1.73a.88.88 0 01-.71.36 1.01 1.01 0 01-.8-.37 1.68 1.68 0 01-.32-1.12 1.83 1.83 0 01.3-1.2.98.98 0 01.79-.36.91.91 0 01.72.37 1.78 1.78 0 01.3 1.13 1.9 1.9 0 01-.28 1.2m.05-4.5a2.47 2.47 0 00-1.18.3 3.03 3.03 0 00-.86.8V9.8h-2.28v9.13h2.46v-3.37a2.44 2.44 0 00.82.57 2.65 2.65 0 001.03.19 2.48 2.48 0 001.92-.84 3.5 3.5 0 00.75-2.42 4.06 4.06 0 00-.7-2.42 2.27 2.27 0 00-1.96-.98m8.16 3.89a1.62 1.62 0 01-.15.74 1.2 1.2 0 01-.5.49 1.5 1.5 0 01-.75.2.84.84 0 01-.6-.19.63.63 0 01.01-.92 2.41 2.41 0 01.94-.39q.54-.14 1.05-.32zm2.43 1.98a3.42 3.42 0 01-.06-.7v-2.81a2.78 2.78 0 00-.18-.95 1.8 1.8 0 00-.49-.76 2.25 2.25 0 00-1.1-.52 10.02 10.02 0 00-1.76-.12 7.4 7.4 0 00-1.26.1 2.97 2.97 0 00-.92.29 2.1 2.1 0 00-.72.6 2.62 2.62 0 00-.38.97l2.33.25a1.05 1.05 0 01.37-.57 1.68 1.68 0 01.9-.19.93.93 0 01.65.18.86.86 0 01.19.63 8.25 8.25 0 01-.86.3q-.41.1-1.78.38a2.86 2.86 0 00-1.56.7 1.71 1.71 0 00-.43 1.19 1.68 1.68 0 00.59 1.3 2.5 2.5 0 001.72.53 3.94 3.94 0 001.5-.26 3.15 3.15 0 00.95-.66 2.8 2.8 0 00.09.4 2.34 2.34 0 00.18.38h2.28a3.17 3.17 0 01-.25-.66zM11.48 7.3v11.4l8.35 1.48V5.83L11.48 7.3zm12.58 11.08a.44.44 0 00.09.3.25.25 0 00.19.1.24.24 0 00.2-.1.43.43 0 00.07-.28.48.48 0 00-.08-.3.25.25 0 00-.2-.1.24.24 0 00-.19.09.47.47 0 00-.08.3zm.55.51v-.13a.32.32 0 01-.29.16.4.4 0 01-.22-.07.44.44 0 01-.16-.19.65.65 0 01-.05-.28.73.73 0 01.05-.27.4.4 0 01.38-.26.34.34 0 01.28.14v-.5h.17v1.4z"
    }), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M25.23 18.9h.21v-1.03h-.2zm0-1.22h.21v-.2h-.2z"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M25.86 18.9v-1.03h.16v.16a.42.42 0 01.1-.15.19.19 0 01.12-.03.34.34 0 01.17.06l-.06.16a.25.25 0 00-.12-.04.16.16 0 00-.1.03.19.19 0 00-.07.1.68.68 0 00-.03.2v.53z"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M26.84 18.29h.57a.35.35 0 00-.07-.2.26.26 0 00-.2-.1.27.27 0 00-.2.08.32.32 0 00-.1.22m.57.27l.17.03a.43.43 0 01-.15.24.53.53 0 01-.65-.05.54.54 0 01-.13-.39.56.56 0 01.14-.4.45.45 0 01.34-.14.43.43 0 01.33.14.55.55 0 01.13.4v.04h-.76a.4.4 0 00.1.25.28.28 0 00.2.1.26.26 0 00.17-.06.33.33 0 00.1-.16"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M28.66 18.52l.17.02a.44.44 0 01-.14.28.41.41 0 01-.28.1.44.44 0 01-.34-.14.56.56 0 01-.13-.4.71.71 0 01.06-.28.38.38 0 01.16-.19.5.5 0 01.25-.06.42.42 0 01.27.08.39.39 0 01.13.24l-.17.03a.28.28 0 00-.08-.16.22.22 0 00-.15-.05.27.27 0 00-.2.1.45.45 0 00-.09.3.46.46 0 00.08.3.25.25 0 00.2.08.24.24 0 00.17-.06.31.31 0 00.09-.2"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M29.55 18.74l.02.15a.64.64 0 01-.13.02.3.3 0 01-.14-.03.17.17 0 01-.08-.08.63.63 0 01-.02-.2V18h-.12v-.13h.12v-.25l.17-.1v.35h.18v.14h-.18v.6a.3.3 0 00.01.09.07.07 0 00.03.03.12.12 0 00.06.02.57.57 0 00.08-.01"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M30.67 18.38a.44.44 0 00.08.3.25.25 0 00.2.1.24.24 0 00.19-.1.43.43 0 00.07-.28.48.48 0 00-.08-.3.25.25 0 00-.2-.1.24.24 0 00-.19.09.47.47 0 00-.07.3zm.54.51v-.13a.32.32 0 01-.28.16.4.4 0 01-.23-.07.44.44 0 01-.15-.19.65.65 0 01-.06-.28.73.73 0 01.05-.27.4.4 0 01.38-.26.34.34 0 01.28.14v-.5h.17v1.4z"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M31.97 18.29h.56a.35.35 0 00-.06-.2.26.26 0 00-.21-.1.27.27 0 00-.2.08.32.32 0 00-.1.22m.57.27l.18.03a.43.43 0 01-.16.24.53.53 0 01-.64-.05.54.54 0 01-.13-.39.56.56 0 01.13-.4.45.45 0 01.34-.14.43.43 0 01.34.14.55.55 0 01.13.4v.04h-.76a.4.4 0 00.1.25.28.28 0 00.2.1.26.26 0 00.17-.06.33.33 0 00.1-.16"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M33.28 18.38a.53.53 0 00.05.26.25.25 0 00.41.04.45.45 0 00.09-.3.46.46 0 00-.08-.3.24.24 0 00-.2-.09.25.25 0 00-.19.1.43.43 0 00-.08.29zm0 .51h-.16v-1.4h.17v.5a.34.34 0 01.28-.14.42.42 0 01.18.04.36.36 0 01.14.1.52.52 0 01.08.17.69.69 0 01.03.2.58.58 0 01-.13.41.4.4 0 01-.3.15.32.32 0 01-.29-.15z"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M34.4 18.9h.21v-1.03h-.2zm0-1.22h.21v-.2h-.2z"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fefefe",
      d: "M35.41 18.74l.03.15a.64.64 0 01-.13.02.3.3 0 01-.15-.03.17.17 0 01-.07-.08.63.63 0 01-.02-.2V18h-.13v-.13h.13v-.25l.17-.1v.35h.17v.14h-.17v.6a.3.3 0 000 .09.07.07 0 00.04.03.12.12 0 00.06.02.57.57 0 00.07-.01"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#sepa_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#9a1b27",
      d: "M16.86 12.44a1.64 1.64 0 00-.38-1.02 1.19 1.19 0 00-1.74.16 1.7 1.7 0 00-.28.86zm2.47 1.17h-4.87a1.58 1.58 0 00.31.87 1.15 1.15 0 00.92.42 1.38 1.38 0 00.68-.18 1.6 1.6 0 00.43-.4l2.4.22a3.44 3.44 0 01-1.33 1.37 4.8 4.8 0 01-2.23.42 4.55 4.55 0 01-1.99-.36 2.92 2.92 0 01-1.2-1.13 3.43 3.43 0 01-.47-1.83 3.22 3.22 0 01.95-2.42 3.62 3.62 0 012.64-.92 4.67 4.67 0 012.15.41 2.79 2.79 0 011.2 1.2 4.4 4.4 0 01.41 2.05z"
    }))));
  };

  var _default = SvgSepa;
  _exports["default"] = _default;
});