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
    global.Stq = mod.exports;
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

  var SvgStq = function SvgStq(props) {
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
      fill: "#2DC4E7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.155 9.036c1.071 0 2.178-.072 3.25.024.476.535.583 1.285.952 1.904 4.81.024 9.643 0 14.453 0 .357.024.797.036.976.393.214.393.06.857-.143 1.214-.976 1.655-1.905 3.334-2.857 5-.357.596-.596 1.262-1.131 1.727-.44.369-1.048.392-1.607.392H12.38c-.357 0-.738-.035-.952-.321-.69-.774-1.06-1.762-1.512-2.667a246.634 246.634 0 01-2.298-4.726c-.155-.357-.345-.678-.524-1.012-.63 0-1.262 0-1.88-.024-.12-.63-.12-1.273-.06-1.904zm7.512 11.94a3.428 3.428 0 011.476-.024c.547.12 1.024.536 1.155 1.084.142.63.142 1.31-.108 1.916-.238.548-.833.81-1.392.858-.643.047-1.381 0-1.858-.477-.511-.571-.511-1.404-.404-2.119.071-.595.547-1.107 1.13-1.238zm5.952 0c.595-.13 1.238-.119 1.81.095.547.227.833.822.88 1.381.072.655 0 1.405-.476 1.905-.44.417-1.083.476-1.666.464-.572-.023-1.19-.238-1.488-.773a2.817 2.817 0 01-.215-1.87c.12-.583.572-1.07 1.155-1.202z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgStq;
  _exports["default"] = _default;
});