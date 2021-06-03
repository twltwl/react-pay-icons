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
    global.Bcbc = mod.exports;
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

  var SvgBcbc = function SvgBcbc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "bcbc_svg__c",
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
    })), /*#__PURE__*/React.createElement("filter", {
      id: "bcbc_svg__a",
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
    })), /*#__PURE__*/React.createElement("circle", {
      id: "bcbc_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#bcbc_svg__a)",
      xlinkHref: "#bcbc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#004AB5",
      fillRule: "evenodd",
      xlinkHref: "#bcbc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#bcbc_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#bcbc_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeLinejoin: "square",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M12.703 7.307A8.207 8.207 0 1022.78 18.956l-7.182-3.97 2.914-7.672a8.206 8.206 0 00-5.809-.007zm.512 1.474a6.645 6.645 0 014.704.006l-2.36 6.212 5.816 3.215a6.645 6.645 0 11-8.16-9.433zm2.753-4.111c1.116.044 2.217.269 3.261.665L15.56 15l9.046 5a10.337 10.337 0 11-8.638-15.33zm7.057 3.573c.247 0 .478.03.69.09.624.171 1.046.559 1.266 1.163.133.367.162.726.087 1.08-.068.35-.23.665-.486.946.481-.02.903.086 1.265.32.36.228.624.575.794 1.043.241.661.168 1.266-.219 1.814-.382.538-1.065.986-2.05 1.344l-3.904 1.421-2.747-7.548 3.688-1.343c.604-.22 1.142-.33 1.616-.33zm-.572 1.562c-.224 0-.485.055-.781.162l-1.736.632.647 1.78 1.737-.632c.43-.157.73-.352.898-.584.168-.232.199-.495.091-.79-.107-.295-.298-.474-.573-.536a1.145 1.145 0 00-.283-.032zm1.464 2.927c-.236.002-.514.061-.832.177l-2.039.742.68 1.866 2.038-.742c.46-.168.777-.369.952-.603.183-.238.216-.514.101-.83-.15-.411-.45-.614-.9-.61z"
    }))));
  };

  var _default = SvgBcbc;
  _exports["default"] = _default;
});