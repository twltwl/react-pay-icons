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
    global.Bdl = mod.exports;
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

  var SvgBdl = function SvgBdl(props) {
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
      r: 16,
      fill: "#E54C40"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      fillRule: "nonzero",
      d: "M9.328 8.617c-.02-.147.118-.235.197-.335a436.69 436.69 0 002.968-2.965c-.014 2.716.008 5.432-.011 8.148 2.049-1.13 4.63-1.18 6.736-.168-.002.175-.002.349-.002.525-1.681-.904-3.748-1.02-5.541-.39-2.063.71-3.707 2.457-4.35 4.536.003-3.118-.001-6.234.003-9.351zm13.39 11.662a6.652 6.652 0 01-1.897 4.405 6.697 6.697 0 01-8.503.91c-1.48-.974-2.55-2.554-2.878-4.296-.285-1.38-.092-2.845.501-4.12a6.749 6.749 0 013.268-3.252c1.884-.888 4.18-.813 6.004.192-.011 1.494-.01 2.988.001 4.482-.298-.617-.74-1.169-1.325-1.535-1.157-.747-2.765-.712-3.882.098-1.23.846-1.785 2.524-1.296 3.935.437 1.391 1.82 2.412 3.282 2.396 1.406.035 2.763-.884 3.266-2.195.32-.743.24-1.564.247-2.35.006-4.055-.01-8.11-.008-12.164.001-.51.01-1.02-.02-1.528 1.09 1.074 2.17 2.161 3.25 3.246-.022 3.925 0 7.85-.01 11.777z"
    }))));
  };

  var _default = SvgBdl;
  _exports["default"] = _default;
});