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
    global.Blik = mod.exports;
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

  var SvgBlik = function SvgBlik(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0V40H60V0Z",
      fill: "#181818"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28.5696 10.9018H25.3355V28.9689H28.5696V10.9018Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.5556 16.9967H31.3215V28.9689H34.5556V16.9967Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M49 28.9689L44.1645 22.6407L48.6268 16.9967H44.8019L40.5417 22.4697V10.9018H37.3077V28.9689H40.5417V22.8273L44.8019 28.9689H49Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.1105 16.8723C16.0687 16.8723 15.0736 17.1366 14.2185 17.6031V10.9018H11V22.9983C11 26.3723 13.7365 29.1244 17.126 29.1244C20.5155 29.1244 23.252 26.3879 23.252 22.9983C23.252 19.6088 20.5 16.8723 17.1105 16.8723ZM17.1105 25.8903C15.509 25.8903 14.2185 24.5998 14.2185 22.9983C14.2185 21.3969 15.509 20.1064 17.1105 20.1064C18.7119 20.1064 20.0024 21.3969 20.0024 22.9983C20.0024 24.5998 18.7119 25.8903 17.1105 25.8903Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.2668 15.7529C21.8554 15.7529 23.1432 14.465 23.1432 12.8764C23.1432 11.2878 21.8554 10 20.2668 10C18.6782 10 17.3904 11.2878 17.3904 12.8764C17.3904 14.465 18.6782 15.7529 20.2668 15.7529Z",
      fill: "#EA3859"
    })));
  };

  var _default = SvgBlik;
  _exports["default"] = _default;
});