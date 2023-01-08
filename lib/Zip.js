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
    global.Zip = mod.exports;
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

  var SvgZip = function SvgZip(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 40 26"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h40v26H0V0Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#1A0826",
      d: "m2.81 15.9.31 2.56h11l-.35-2.94H8.64l-.05-.36 4.73-3.31L13 9.27H2l.36 2.94H7.5l.04.37-4.73 3.31Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#AA8FFF",
      d: "m14.28 9.27 1.13 9.2h11l-1.12-9.2H14.28Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#1A0826",
      d: "M37.96 12.58c-.25-2.06-1.87-3.32-4.07-3.3h-7.32l1.12 9.18H31l-.23-1.84h3.49c2.74 0 4-1.71 3.71-4.04Zm-4.07 1.47h-3.44l-.27-2.2h3.46c.81 0 1.23.47 1.3 1.1.04.4-.14 1.1-1.05 1.1Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M17.91 8.05c.58-.62.48-1.66-.22-2.32-.7-.66-1.75-.68-2.33-.06-.57.62-.47 1.66.23 2.32.7.66 1.74.68 2.32.06Z"
    })));
  };

  var _default = SvgZip;
  _exports["default"] = _default;
});