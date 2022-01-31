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
    global.One = mod.exports;
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

  var SvgOne = function SvgOne(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#00AEE9",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.143 7c-2.124 0-3.857 1.738-3.913 3.869v4.317c-.392 0-.783.056-1.23.056-.447 0-.839 0-1.23.056v-4.43c0-2.13-1.789-3.868-3.969-3.812-2.068 0-3.745 1.738-3.801 3.813v10.317c.056 2.13 1.789 3.869 3.969 3.813 2.124-.056 3.801-1.738 3.801-3.813v-4.318c.391 0 .783-.056 1.23-.056.447 0 .838 0 1.23-.056v4.374c.056 2.13 1.789 3.869 3.969 3.813C23.323 24.887 25 23.204 25 21.13V10.869C25 8.739 23.267 7 21.143 7zm-10.23 1.57a2.27 2.27 0 012.292 2.299v4.542a13.845 13.845 0 00-3.298.953c-.447.224-.895.448-1.286.785v-6.28c0-1.234 1.006-2.299 2.292-2.299zm2.292 12.616a2.27 2.27 0 01-2.292 2.299 2.27 2.27 0 01-2.292-2.3v-1.008c0-.897.727-1.795 1.957-2.3.838-.392 1.733-.616 2.683-.784l-.056 4.093zm7.938 2.299a2.27 2.27 0 01-2.292-2.3v-4.54a13.844 13.844 0 003.298-.954c.447-.224.894-.449 1.286-.785v6.28a2.306 2.306 0 01-2.292 2.299zm.335-9.252c-.838.393-1.733.617-2.683.785v-4.15a2.27 2.27 0 012.292-2.298 2.27 2.27 0 012.292 2.299v1.01c.056.952-.671 1.793-1.9 2.354z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgOne;
  _exports["default"] = _default;
});