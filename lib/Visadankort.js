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
    global.Visadankort = mod.exports;
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

  var SvgVisadankort = function SvgVisadankort(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "visadankort_svg__a",
      d: "M0 0v40h61.538z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#E92127",
      d: "M-1 40h61.538V0H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60.538 7.208l-8.295.022c-.143.058-.232.275-.401.403-1.187 1.47-2.373 2.96-3.6 4.388.147-1.576.215-3.2.427-4.776l-7.057-.015c-.047 1.415-.127 2.81-.21 4.15a4.979 4.979 0 00-3.156-3.66 8.72 8.72 0 00-2.224-.447l-12.197.041c0 .022-.043.022-.21 0v11.03l12.111-.063a6.05 6.05 0 004.594-2.683c.37-.608.683-1.25.932-1.916-.126 1.532-.19 3.108-.36 4.662 2.266-.02 7.01 0 7.01 0 .041-1.916.149-3.917.275-5.813l3.706 5.387c.139.469.535.363.91.363h7.745v-.128a71.797 71.797 0 01-4.524-5.963l.02-.085a59.402 59.402 0 014.504-4.747v-.15zM34.202 13.66c-.976.746-2.405.39-3.664.448l.233-2.896c1.264.096 3.7-.437 4.129 1.214a1.595 1.595 0 01-.698 1.234z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(-1)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "visadankort_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#visadankort_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      mask: "url(#visadankort_svg__b)",
      d: "M0 40h61.538V0H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 38.254h-2.874c-.1-.437-.215-.861-.284-1.29a.491.491 0 00-.585-.491c-1.066.023-2.134-.014-3.2.027a.842.842 0 00-.57.42c-.2.437-.375.886-.522 1.346H28.71c.089-.243.157-.453.243-.656 1.45-3.408 2.915-6.808 4.346-10.222.235-.757.97-1.24 1.758-1.157.787.026 1.574.005 2.396.005.85 4.026 1.694 8 2.546 12.018M.788 26.32a3.41 3.41 0 01.545-.09c1.557-.006 3.115-.006 4.675-.002a1.47 1.47 0 011.685 1.366c.417 2.102.81 4.208 1.215 6.313.018.097.046.192.105.434.137-.273.224-.422.287-.579.939-2.323 1.882-4.641 2.799-6.97.158-.405.335-.602.817-.576.867.046 1.74.012 2.714.012-.485 1.156-.934 2.237-1.393 3.313-1.163 2.73-2.341 5.453-3.48 8.193a.776.776 0 01-.892.565c-.872-.038-1.748-.012-2.692-.012-.356-1.343-.713-2.674-1.063-4.006-.476-1.81-.973-3.614-1.408-5.431a1.887 1.887 0 00-1.306-1.488c-.862-.292-1.73-.57-2.594-.854l-.014-.187zM29.358 26.591l-.512 2.375c-.7-.187-1.414-.327-2.134-.418a4.21 4.21 0 00-1.74.238c-.781.302-.832 1.019-.161 1.517.406.273.827.52 1.261.743.313.179.63.351.945.528a3.4 3.4 0 010 5.968 7.854 7.854 0 01-5.139.823 9.092 9.092 0 01-1.68-.379.63.63 0 01-.333-.513c.112-.722.298-1.433.446-2.091.978.201 1.914.454 2.867.566.53.046 1.062-.03 1.557-.22a.964.964 0 00.24-1.805 9.457 9.457 0 00-.986-.58c-.544-.284-1.074-.6-1.583-.946a3.092 3.092 0 01-.364-4.794 5.087 5.087 0 012.729-1.417 8.088 8.088 0 014.587.405M17.565 38.257H14.42l2.608-11.992h3.141l-2.603 11.992",
      fill: "#29327F",
      mask: "url(#visadankort_svg__b)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.296 29.71c.297 1.414.595 2.826.905 4.29h-2.654l1.592-4.324.157.034z",
      fill: "#FFF",
      mask: "url(#visadankort_svg__b)"
    })))));
  };

  var _default = SvgVisadankort;
  _exports["default"] = _default;
});