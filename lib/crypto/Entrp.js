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
    global.Entrp = mod.exports;
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

  var SvgEntrp = function SvgEntrp(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "entrp_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "entrp_svg__a"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5,
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0",
      "in": "shadowBlurOuter1"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "entrp_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#entrp_svg__a)",
      xlinkHref: "#entrp_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FA5836",
      xlinkHref: "#entrp_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#entrp_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#entrp_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("path", {
      d: "M14.878 4.382c-.1.014-.483.085-.852.142-2.059.348-3.96 1.356-5.537 2.938-1.583 1.576-2.548 3.4-2.953 5.573-.184.986-.184 2.917 0 3.904.405 2.172 1.37 3.996 2.953 5.572 1.576 1.583 3.4 2.548 5.572 2.953.987.184 2.918.184 3.904 0 2.173-.405 3.997-1.37 5.573-2.953 1.582-1.576 2.548-3.4 2.952-5.572.185-.987.185-2.918 0-3.904-.404-2.173-1.37-3.997-2.952-5.573-1.54-1.547-3.28-2.491-5.388-2.917-.653-.135-2.825-.241-3.272-.163zm3.79 3.762c.085.035.114.142.114.426v.383h-.447c-.568 0-1.015.213-1.2.568-.12.227-.128.504-.128 3.868 0 1.988-.028 3.656-.057 3.706-.149.227-1.242.29-1.732.1l-.198-.079v-3.67c0-3.421-.007-3.698-.128-3.925-.185-.355-.632-.568-1.2-.568h-.447V8.57c0-.242.036-.398.092-.419.128-.057 5.196-.057 5.331-.007zm-4.074 2.96v.873l-.206.12c-.305.178-.816.71-1.022 1.058-.1.17-.234.49-.298.717l-.114.405h-.816c-.93 0-.902.035-.703-.746.249-.944.852-1.902 1.583-2.484.405-.326 1.299-.816 1.476-.816.079 0 .1.184.1.873zm3.52-.625a4.76 4.76 0 012.478 3.052c.199.781.227.746-.703.746h-.816l-.114-.405a3.687 3.687 0 00-.298-.717c-.206-.348-.717-.88-1.022-1.057l-.206-.121v-.873c0-.689.021-.873.1-.873.05 0 .312.113.582.248zm-5.153 4.465c0 .334.22 1.015.447 1.37a3.073 3.073 0 005.21 0c.228-.355.448-1.036.448-1.37v-.241h1.696l-.035.369c-.178 1.725-1.129 3.116-2.62 3.854-.688.34-1.291.483-2.094.483-2.484 0-4.45-1.81-4.713-4.337l-.035-.37h1.696v.242zm4.082 5.132c.092.497.603.802 1.37.802h.369v.78h-5.537V20.9l.518-.035c.334-.021.604-.085.753-.17.22-.128.504-.554.504-.753 0-.07.227-.092.986-.092H17l.043.227z",
      fill: "#FEFFFF"
    }))));
  };

  var _default = SvgEntrp;
  _exports["default"] = _default;
});