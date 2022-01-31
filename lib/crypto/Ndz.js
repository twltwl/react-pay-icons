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
    global.Ndz = mod.exports;
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

  var SvgNdz = function SvgNdz(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#622fba",
      fillRule: "nonzero",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.586 17.376c-.087.027-.171.06-.253.098l-3.676-3.821a1.91 1.91 0 00-1.14-2.794V8.186l-.984-.55 2.273-1.315a2.384 2.384 0 012.388 0l4.519 2.616-1.786 1.033a1.911 1.911 0 00-2.686 1.747 1.91 1.91 0 001.345 1.824zm1.138 0V13.54a1.91 1.91 0 001.092-2.773l2.03-1.174.97.56A2.372 2.372 0 0125 12.207v7.586c0 .846-.451 1.628-1.185 2.053l-4.09 2.368v-3.192a1.91 1.91 0 00-.001-3.646zm-2.227.869a1.91 1.91 0 001.089 2.777v3.851l-1.392.806a2.384 2.384 0 01-2.388 0L9.94 22.863l1.828-1.428a1.91 1.91 0 001.231.447 1.911 1.911 0 001.914-1.91 1.91 1.91 0 00-1.397-1.838v-3.598c.105-.029.207-.067.304-.113zm-5.118-.079a1.91 1.91 0 00-1.226 2.308L8.882 22.25l-.697-.403A2.372 2.372 0 017 19.793v-7.586c0-.846.451-1.628 1.185-2.053l3.205-1.856.99.553v2.04a1.91 1.91 0 00-.001 3.613zM13 13.523a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm0 7.275a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm6.155-8.255a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm0 7.482a.827.827 0 11-.002-1.654.827.827 0 01.002 1.654z",
      fill: "#fff"
    }))));
  };

  var _default = SvgNdz;
  _exports["default"] = _default;
});