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
    global.CieloTransparent = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgCieloTransparent = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
    id: "cielo_transparent_svg__svg2",
    viewBox: "0 0 595.975 197.745"
  }, props), /*#__PURE__*/_react.default.createElement("defs", {
    id: "cielo_transparent_svg__defs4"
  }, /*#__PURE__*/_react.default.createElement("style", {
    type: "text/css",
    id: "style2989"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(-52.013 -433.49)",
    id: "cielo_transparent_svg__layer1"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(-13.538 48.1) scale(3.5433)",
    id: "cielo_transparent_svg__g3034",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "cielo_transparent_svg__Camada_x0020_1"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M50.405 151.628c-10.277 9.358-23.233.282-22.687-10.044.406-7.675 8.306-15.776 18.357-11.796l3.656-8.466c-21.793-7.1-33.377 11.536-30.902 24.09 4.001 20.294 25.88 24.11 37.926 12.854l-6.35-6.638z",
    id: "cielo_transparent_svg__path2993",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M69.791 135.609c.29-8.16-8.098-9.86-12.604-11.641l-3.656 8.37 7.409 3.271.192 28.093h8.563l.096-28.093z",
    id: "cielo_transparent_svg__path2995",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "cielo_transparent_svg__line2997",
    className: "cielo_transparent_svg__fil0",
    fill: "none",
    d: "M86.05 161.008l4.811-7.696"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M90.861 153.312c6.28 3.31 11.732 2.732 16.356-1.732l6.638 6.639c-9.839 7.627-16.99 8.172-27.805 2.79",
    id: "cielo_transparent_svg__path2999",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M79.316 154.274c-8.265-12.966-1.838-27.738 9.099-32.613 11.605-5.173 27.3-.403 31.598 15.295l-40.697 17.318z",
    id: "cielo_transparent_svg__path3001",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M84.655 143.642c-.155-15.278 15.977-19.286 23.283-10.006l-23.283 10.006z",
    id: "cielo_transparent_svg__path3003",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M132.905 152.927l-.193-43.487h-8.466l.096 43.968c-.026 8.15 8.397 9.259 12.508 11.16l3.367-8.37-7.312-3.271z",
    id: "cielo_transparent_svg__path3005",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M173.217 151.964c-8.495 9.27-27.865-1.282-20.878-15.49l-8.466-4.233c-9.438 21.37 14.666 43.058 35.405 26.458l-6.061-6.735z",
    id: "cielo_transparent_svg__path3007",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M176.248 147.875c5.983-14.747-10.694-24.817-20.878-15.49l-6.253-6.927c16.784-14.983 45.551 1.02 35.501 26.362l-8.37-3.945z",
    id: "cielo_transparent_svg__path3009",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("ellipse", {
    cx: 65.413,
    cy: 114.827,
    rx: 6.109,
    ry: 6.061,
    id: "cielo_transparent_svg__ellipse3011",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M50.405 151.628c-10.277 9.358-23.233.282-22.687-10.044.406-7.675 8.306-15.776 18.357-11.796l3.656-8.466c-21.793-7.1-33.377 11.536-30.902 24.09 4.001 20.294 25.88 24.11 37.926 12.854l-6.35-6.638z",
    id: "cielo_transparent_svg__path3013",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M60.94 135.609l.192 28.093h8.563l.096-28.093c.29-8.16-8.098-9.86-12.604-11.641l-3.656 8.37 7.409 3.271z",
    id: "cielo_transparent_svg__path3015",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M88.415 121.66c-10.937 4.875-17.364 19.648-9.1 32.613l40.698-17.317c-4.298-15.698-19.993-20.469-31.598-15.296zm-3.76 21.982c-.155-15.278 15.977-19.286 23.283-10.006l-23.283 10.006z",
    id: "cielo_transparent_svg__path3017",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M107.217 151.58c-4.624 4.464-10.076 5.041-16.356 1.732l-4.81 7.696c10.814 5.383 17.965 4.837 27.805-2.79l-6.639-6.638z",
    id: "cielo_transparent_svg__path3019",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M124.246 109.44l.096 43.968c-.026 8.15 8.397 9.259 12.507 11.16l3.368-8.37-7.312-3.271-.193-43.487h-8.466z",
    id: "cielo_transparent_svg__path3021",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M143.873 132.241c-9.438 21.37 14.666 43.059 35.405 26.458l-6.061-6.735c-8.495 9.27-27.865-1.282-20.878-15.49l-8.466-4.233z",
    id: "cielo_transparent_svg__path3023",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M155.37 132.386c10.184-9.327 26.86.743 20.878 15.49l8.37 3.945c10.05-25.342-18.717-41.345-35.502-26.362l6.254 6.927z",
    id: "cielo_transparent_svg__path3025",
    fill: "#01aef0"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M65.413 120.888c3.374 0 6.11-2.714 6.11-6.061 0-3.348-2.736-6.061-6.11-6.061s-6.109 2.713-6.109 6.06c0 3.348 2.735 6.062 6.11 6.062z",
    id: "cielo_transparent_svg__path3027",
    fill: "#01aef0"
  })))));

  var _default = SvgCieloTransparent;
  _exports.default = _default;
});