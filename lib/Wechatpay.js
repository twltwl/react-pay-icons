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
    global.Wechatpay = mod.exports;
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

  var SvgWechatpay = function SvgWechatpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      d: "M12.857.003C5.756.003 0 4.836 0 10.796a10.175 10.175 0 004.443 8.16.868.868 0 01.314.978l-.58 2.177c-.036.102-.06.208-.068.318a.428.428 0 00.675.351L7.6 21.143c.207-.129.441-.196.682-.202.128 0 .258.022.379.059 1.364.393 2.777.593 4.197.593 7.1 0 12.857-4.834 12.857-10.797a9.403 9.403 0 00-1.464-5.002L9.446 14.407l-.095.053a.845.845 0 01-.385.094.86.86 0 01-.749-.443l-.054-.124L5.82 8.813a.43.43 0 01.384-.614c.095 0 .186.03.26.087l2.762 1.981c.339.224.763.273 1.142.132L23.36 4.573A13.709 13.709 0 0013.143 0c-.094 0-.192 0-.286.003z",
      id: "wechatpay_svg__a"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#16AA16",
      d: "M0 40h60V0H0z"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(17.714 8.932)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "wechatpay_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#wechatpay_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      mask: "url(#wechatpay_svg__b)",
      d: "M-8.086 29.74h40V-7.403h-40z"
    })))));
  };

  var _default = SvgWechatpay;
  _exports["default"] = _default;
});