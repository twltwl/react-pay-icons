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
    global.Tpay = mod.exports;
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

  var SvgTpay = function SvgTpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#3058A6",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.995 27.228c-6.198 0-11.223-5.025-11.223-11.223S9.797 4.782 15.995 4.782s11.223 5.025 11.223 11.223-5.025 11.223-11.223 11.223m0-23.161c-6.583 0-11.938 5.355-11.938 11.938s5.355 11.938 11.938 11.938 11.938-5.355 11.938-11.938S22.578 4.067 15.995 4.067",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.199 20.275l-.623 2.699-.15.653h-.67l-3.445-.002h-.014c-1.381-.023-2.465-.39-3.176-1.038.614 1.083 1.918 1.71 3.738 1.74h.014l3.444.002h.67l.151-.653.623-2.699-.486-1.031-.076.329zM19.116 8.704l-.492-1.023-.07.32-.467 2.127h.716zm2.487 2.461l-.62 2.625-.154.648h-3.733l-.948 4.328c-.02.124-.032.25-.032.32 0 .061.007.1.013.119a.6.6 0 00.223.038h.408l.898-4.102h3.733l.153-.649.62-2.625-.482-1.036-.08.334zm-9.262 3.273H9.74l.896.703h1.552z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.434 20.086h-.095c-.724-.019-1.066-.396-1.066-1 0-.144.024-.335.048-.478l1.098-5.012h3.744l.62-2.625h-3.744l.692-3.15h-3.054l-.693 3.15H10.67l-.596 2.625h3.314l-1.29 5.895c-.07.286-.095.62-.095.787 0 1.682 1.327 2.472 3.308 2.505l3.444.001.623-2.698h-2.944z"
    })))));
  };

  var _default = SvgTpay;
  _exports["default"] = _default;
});