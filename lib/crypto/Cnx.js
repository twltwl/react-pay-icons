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
    global.Cnx = mod.exports;
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

  var SvgCnx = function SvgCnx(props) {
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
      fill: "#4c6bae",
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.383 17.01L5 17.153c.74-2.07 2.203-3.726 4.391-4.968.207 1.716 1.02 3.135 2.44 4.259l-1.3.135a5.503 5.503 0 004.553 4.845 6.084 6.084 0 01-2.987 1.185c.681 1.2 1.487 2.183 2.417 2.947a9.674 9.674 0 01-8.131-8.546zm19.234-2.02L27 14.847c-.74 2.07-2.203 3.726-4.391 4.968-.207-1.716-1.02-3.135-2.44-4.259l1.3-.135a5.503 5.503 0 00-4.626-4.857 6.085 6.085 0 012.972-1.173c-.687-1.209-1.499-2.196-2.438-2.963a9.674 9.674 0 018.24 8.562z",
      opacity: 0.5
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.922 25.626L17.065 27c-2.07-.74-3.726-2.203-4.968-4.391 1.715-.207 3.134-1.02 4.258-2.44l.136 1.31a5.503 5.503 0 004.945-4.636 6.085 6.085 0 011.173 2.972c1.209-.687 2.196-1.499 2.963-2.438a9.674 9.674 0 01-8.65 8.249zM14.99 6.383L14.847 5c2.07.74 3.726 2.203 4.968 4.391-1.716.207-3.135 1.02-4.259 2.44l-.135-1.3a5.503 5.503 0 00-4.857 4.626 6.085 6.085 0 01-1.173-2.972c-1.209.687-2.196 1.499-2.963 2.438a9.674 9.674 0 018.562-8.24z"
    })))));
  };

  var _default = SvgCnx;
  _exports["default"] = _default;
});