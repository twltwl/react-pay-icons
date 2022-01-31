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
    global.Fun = mod.exports;
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

  var SvgFun = function SvgFun(props) {
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
      fill: "#ed1968",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.7 26.9a9.68 9.68 0 01-3.5-1.8 11.56 11.56 0 01-2.6-2.8A11.23 11.23 0 015 18.6a11.1 11.1 0 010-4.8A13.11 13.11 0 016.5 10a10.32 10.32 0 014.2-3.8 10.84 10.84 0 011.9-.8c1 1.2 2 2.5 3 3.8.1.2.3.3.4.5a7.7 7.7 0 00-2.9.7 6.84 6.84 0 00-2.1 1.7 8.42 8.42 0 00-1.3 2.5 6.17 6.17 0 00.1 3.3l4.3-3.4c1 1.3 2 2.5 3 3.8-1.4 1.1-2.9 2.2-4.3 3.4 1.4 1.8 2.9 3.7 4.3 5.6a10.68 10.68 0 01-4.4-.4zm9.53-12.114a6.17 6.17 0 00-.13-.486c-.135.106-3.11 2.38-4.3 3.4-1-1.3-2-2.5-3-3.8 1.4-1.1 2.9-2.2 4.3-3.4-1.4-1.8-2.8-3.6-4.3-5.5 0-.1-.1-.1-.1-.2h1.4a11 11 0 017 2.6 10.8 10.8 0 012.4 2.8 9.1 9.1 0 011.4 3.8 12.35 12.35 0 01-.1 4.7 9.88 9.88 0 01-1.6 3.6 10.73 10.73 0 01-2.5 2.7 8.77 8.77 0 01-3.3 1.8c-.9-1.1-1.7-2.1-2.5-3.2a7.63 7.63 0 01-.8-1.1 6.16 6.16 0 004.9-2.4 6.47 6.47 0 001.2-2.5c.186-.759.196-1.697.03-2.814zm-4.723 8.373a62.41 62.41 0 002.15 2.77 8.143 8.143 0 002.588-1.525 10.05 10.05 0 002.344-2.54 9.126 9.126 0 001.478-3.322c.314-1.452.345-2.951.09-4.446a8.392 8.392 0 00-1.301-3.512 10.063 10.063 0 00-2.24-2.611 10.246 10.246 0 00-6.427-2.422c.927 1.18 1.866 2.383 3.503 4.489l.44.564-.544.465a56.326 56.326 0 01-2.178 1.761c-.07.055-.92.708-1.558 1.202.263.335.568.717 1.034 1.3.46.575.765.958 1.028 1.293.464-.383.97-.785 1.576-1.255.098-.076 1.696-1.306 2.147-1.66l.856-.673.323 1.04a6.914 6.914 0 01.114 3.695 7.214 7.214 0 01-1.336 2.786 6.91 6.91 0 01-4.123 2.559l.036.042z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgFun;
  _exports["default"] = _default;
});