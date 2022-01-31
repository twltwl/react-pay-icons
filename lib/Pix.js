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
    global.Pix = mod.exports;
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

  var SvgPix = function SvgPix(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 90,
      height: 32,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M36.57 29.542a.568.568 0 0 1-.569-.567v-17.52c0-3.698 3.015-6.706 6.72-6.706l5.452.008c3.694.008 6.698 3.012 6.698 6.697v4.55c0 3.697-3.014 6.706-6.72 6.706h-8.558a.568.568 0 1 1 0-1.135h8.558c3.078 0 5.583-2.5 5.583-5.571v-4.55c0-3.06-2.495-5.556-5.563-5.562l-5.45-.008c-3.078 0-5.583 2.5-5.583 5.571v17.52a.568.568 0 0 1-.568.567ZM60.714 22.791a.568.568 0 0 1-.568-.567V7.833A1.956 1.956 0 0 0 58.19 5.88h-2.365a.568.568 0 1 1 0-1.135h2.365a3.093 3.093 0 0 1 3.093 3.087v14.391a.568.568 0 0 1-.569.567Z",
      fill: "#97979B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m60.208 3.301-1.073-1.07a.68.68 0 0 1 0-.962l1.072-1.07a.683.683 0 0 1 .965 0l1.072 1.07a.679.679 0 0 1 0 .962L61.17 3.3a.682.682 0 0 1-.963 0Z",
      fill: "#4BB8A9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M67.568 22.71h-2.346a.568.568 0 1 1 0-1.135h2.346a3.958 3.958 0 0 0 2.814-1.163l5.486-5.373c.45-.45 1.05-.698 1.688-.698.638 0 1.238.248 1.689.698l5.465 5.352a3.958 3.958 0 0 0 2.814 1.164h1.907a.568.568 0 1 1 0 1.135h-1.907a5.089 5.089 0 0 1-3.618-1.496l-5.465-5.352a1.245 1.245 0 0 0-.885-.366c-.334 0-.648.13-.884.366l-5.486 5.372a5.088 5.088 0 0 1-3.618 1.496ZM67.568 4.747h-2.346a.568.568 0 1 0 0 1.135h2.346c1.063 0 2.062.413 2.814 1.163l5.486 5.373c.45.45 1.05.698 1.688.698.638 0 1.238-.248 1.689-.698l5.465-5.353a3.958 3.958 0 0 1 2.814-1.163h1.907a.568.568 0 1 0 0-1.135h-1.907a5.09 5.09 0 0 0-3.618 1.496l-5.465 5.352c-.237.236-.55.366-.885.366-.334 0-.648-.13-.884-.366l-5.486-5.372a5.089 5.089 0 0 0-3.618-1.496Z",
      fill: "#97979B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.603 24.656a4.384 4.384 0 0 0 3.116-1.288l4.5-4.49a.856.856 0 0 1 1.182 0l4.517 4.506a4.385 4.385 0 0 0 3.116 1.288h.887l-5.7 5.687a4.564 4.564 0 0 1-6.445 0l-5.715-5.703h.542ZM23.034 8.772a4.384 4.384 0 0 0-3.116 1.288L15.4 14.567a.838.838 0 0 1-1.182 0l-4.5-4.491a4.385 4.385 0 0 0-3.116-1.287H6.06l5.715-5.704a4.564 4.564 0 0 1 6.446 0l5.698 5.687h-.886Z",
      fill: "#4BB8A9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m1.335 13.506 3.404-3.397h1.865c.812 0 1.607.329 2.18.901l4.5 4.49c.421.42.975.631 1.527.631.553 0 1.106-.21 1.527-.63l4.517-4.507a3.107 3.107 0 0 1 2.18-.902h2.21l3.42 3.414a4.541 4.541 0 0 1 0 6.432l-3.42 3.414h-2.21a3.107 3.107 0 0 1-2.18-.902l-4.516-4.507c-.816-.813-2.24-.814-3.055 0l-4.5 4.49a3.106 3.106 0 0 1-2.18.902H4.74l-3.404-3.397a4.541 4.541 0 0 1 0-6.432Z",
      fill: "#4BB8A9"
    })));
  };

  var _default = SvgPix;
  _exports["default"] = _default;
});