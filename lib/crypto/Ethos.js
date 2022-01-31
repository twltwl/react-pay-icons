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
    global.Ethos = mod.exports;
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

  var SvgEthos = function SvgEthos(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#00FFBA"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10.871 10.904a1.707 1.707 0 00-.194 2.148 1.693 1.693 0 001.42.756 2.188 2.188 0 01-.001 4.377A6.086 6.086 0 017.819 7.767 6.084 6.084 0 0116 7.425a6.085 6.085 0 00-2.182 4.673 2.188 2.188 0 002.175 2.189 2.188 2.188 0 01-2.188-2.189 1.69 1.69 0 00-.29-.955 1.727 1.727 0 00-.754-.622 1.723 1.723 0 00-1.33 0 1.714 1.714 0 00-.56.383zm14.64 6.628a6.094 6.094 0 01-1.242 6.613 6.084 6.084 0 01-10.45-4.243 2.188 2.188 0 114.375 0 1.7 1.7 0 001.045 1.577c.43.18.913.178 1.341-.005a1.721 1.721 0 00.905-.918 1.717 1.717 0 00-.916-2.23 1.694 1.694 0 00-.665-.134 2.188 2.188 0 010-4.377 6.081 6.081 0 015.606 3.717z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.994 17.714c1.208 0 2.188.98 2.188 2.188a6.085 6.085 0 01-10.467 4.226 6.087 6.087 0 014.381-10.313 2.188 2.188 0 010 4.377c-.34-.001-.672.1-.954.29a1.726 1.726 0 00-.622.755 1.71 1.71 0 00.346 1.852v.002a1.706 1.706 0 002.184.23 1.7 1.7 0 00.755-1.42c0-1.207.98-2.187 2.189-2.187zm9.326-8.396a6.09 6.09 0 01-5.417 8.868 2.189 2.189 0 010-4.378 1.71 1.71 0 001.577-1.045 1.721 1.721 0 00-.054-1.444 1.705 1.705 0 00-2.477-.64 1.698 1.698 0 00-.756 1.42 2.188 2.188 0 11-4.375-.001 6.085 6.085 0 019.717-4.886l.004.003a6.103 6.103 0 011.78 2.103z",
      opacity: 0.7
    })))));
  };

  var _default = SvgEthos;
  _exports["default"] = _default;
});