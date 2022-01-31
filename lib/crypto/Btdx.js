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
    global.Btdx = mod.exports;
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

  var SvgBtdx = function SvgBtdx(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#0AF"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.962 4.94C9.874 4.94 4.94 9.874 4.94 15.962c0 6.087 4.934 11.023 11.022 11.023 6.087 0 11.023-4.936 11.023-11.023 0-6.088-4.936-11.022-11.023-11.022zm.035 1.746a5.477 5.477 0 015.143 7.365 3.579 3.579 0 00-2.726.632 3.477 3.477 0 001.074-2.517 3.497 3.497 0 00-3.493-3.496 3.495 3.495 0 00-3.474 3.139 5.99 5.99 0 00-1.988-.02 5.478 5.478 0 015.464-5.103zm2.015 10.292l-1.938-1.16a.4.4 0 00-.418.003l-1.7 1.05a.4.4 0 00-.188.396 2.332 2.332 0 01-2.229 2.65 2.323 2.323 0 01-2.396-2.326 2.336 2.336 0 012.286-2.322 2.32 2.32 0 011.773.778c.124.14.33.17.492.08l1.638-.919a.406.406 0 00.206-.351v-.1a.404.404 0 00-.277-.381 2.326 2.326 0 01.844-4.53 2.333 2.333 0 012.206 2.152 2.322 2.322 0 01-1.731 2.419.405.405 0 00-.308.39v.017c0 .14.074.269.192.343l1.721 1.058a.4.4 0 00.522-.088 2.324 2.324 0 011.87-.87 2.326 2.326 0 11-.179 4.65 2.332 2.332 0 01-2.194-2.554.4.4 0 00-.192-.385zm-6.547 6.033a5.421 5.421 0 01-5.423-5.422 5.421 5.421 0 016.46-5.324 3.49 3.49 0 001.074 2.421A3.562 3.562 0 0011.468 14a3.59 3.59 0 000 7.179 3.584 3.584 0 003.33-2.26c.171.746.487 1.435.913 2.043a5.41 5.41 0 01-4.246 2.05zm9.056 0a5.424 5.424 0 01-5.411-5.054 5.885 5.885 0 001.841-.011 3.59 3.59 0 104.562-3.807 5.797 5.797 0 00.338-1.808 5.424 5.424 0 01-1.33 10.68z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3C8.821 3 3 8.821 3 16s5.821 13 13 13 13-5.821 13-13S23.179 3 16 3zm-.038 25.022c-6.66 0-12.058-5.398-12.058-12.058S9.302 3.907 15.962 3.907c6.659 0 12.057 5.398 12.057 12.057 0 6.66-5.398 12.058-12.057 12.058z"
    })))));
  };

  var _default = SvgBtdx;
  _exports["default"] = _default;
});