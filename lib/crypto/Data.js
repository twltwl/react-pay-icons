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
    global.Data = mod.exports;
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

  var SvgData = function SvgData(props) {
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
      fill: "#E9570F"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M24.14 9.914l1.607-1.594c.38-.376.301-1.064-.174-1.535-.475-.472-1.17-.549-1.549-.172l-3.016 2.99-.103.103-2.628 2.605a4.56 4.56 0 00-5.867.45 4.464 4.464 0 00-.454 5.817l-2.006 1.99a7.844 7.844 0 01-1.189-2.293c-.673-2.038-.492-4.27.6-6.11 1.703-2.87 4.75-4.118 7.638-3.752a1.07 1.07 0 001.216-.986 1.307 1.307 0 00-1.174-1.374c-2.901-.297-5.9.65-8.115 2.846-3.67 3.638-3.885 9.409-.66 13.338l-1.84 1.825c-.363.36-.273 1.035.203 1.506.475.471 1.155.562 1.518.202l1.981-1.964h.001l1.432-1.42.003-.004 2.322-2.302a4.558 4.558 0 004.92-.976 4.463 4.463 0 00.985-4.879l2.634-2.611c1.931 2.908 1.548 6.934-1.11 9.568a7.886 7.886 0 01-6.13 2.279.978.978 0 00-1.03.888l-.028.32a1.038 1.038 0 00.991 1.13 10.306 10.306 0 007.832-2.996c3.597-3.567 4.013-9.061 1.19-12.89m-7.001 7.536a2.18 2.18 0 01-3.06 0 2.135 2.135 0 010-3.033 2.179 2.179 0 013.06 0 2.135 2.135 0 010 3.033"
    }))));
  };

  var _default = SvgData;
  _exports["default"] = _default;
});