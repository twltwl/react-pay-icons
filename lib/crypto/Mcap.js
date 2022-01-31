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
    global.Mcap = mod.exports;
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

  var SvgMcap = function SvgMcap(props) {
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
      fill: "#033B4A"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      fillRule: "nonzero",
      d: "M15.532 7.064c.557-.163 1.148.003 1.629.294a470.684 470.684 0 006.464 3.635c.833.441 1.387 1.346 1.375 2.28-.002 3.094-.01 6.19-.005 9.284.034.215-.112.46-.356.438-.961.006-1.922.002-2.883.001-.21.031-.412-.145-.39-.358-.092-2.635-.057-5.273-.03-7.91 0-.33-.064-.678-.277-.945-.216-.283-.557-.428-.862-.596-.5-.262-.971-.579-1.489-.808-.196-.078-.451-.162-.636-.013-.205.193-.203.498-.224.758a73.454 73.454 0 00-.011 3.88c-.001.306.009.662-.225.9-.239.234-.6.238-.914.243-.568-.006-1.136.015-1.702-.013-.24-.026-.528-.04-.684-.25-.14-.207-.134-.468-.146-.706-.003-1.359.014-2.719 0-4.077-.014-.24-.01-.51-.18-.7-.163-.168-.423-.113-.619-.042-.425.166-.806.42-1.209.63-.403.232-.836.43-1.182.746-.225.205-.285.517-.292.805-.005 2.67.003 5.338-.02 8.008.023.202-.097.448-.333.444-.99.012-1.98.005-2.97.003-.198.019-.38-.155-.36-.352.04-3.245.015-6.491.018-9.737a1.848 1.848 0 01.957-1.67c2.255-1.264 4.514-2.52 6.76-3.799.254-.144.51-.295.796-.373z"
    }))));
  };

  var _default = SvgMcap;
  _exports["default"] = _default;
});