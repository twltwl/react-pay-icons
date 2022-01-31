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
    global.Bay = mod.exports;
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

  var SvgBay = function SvgBay(props) {
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
      fill: "#6356ab",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.784 15.974c.058-.065.123-.13.188-.196.21-.226.44-.467.657-.7a4.875 4.875 0 001.357-3.369c0-.087.014-.445.014-.496C24.899 8.341 22.481 6 19.623 6h-9v3.631H7V26h12.767C22.604 26 25 23.477 25 20.488c.007-2.137-1.314-3.646-2.216-4.514zm-10.357-4.52l7.167.007-4.503 4.565 4.453 4.52h-7.117zm7.34 12.716H8.804V11.447h1.82v10.915h8.92c.736 0 1.393-.445 1.674-1.13a1.832 1.832 0 00-.39-1.991l-3.182-3.223 3.233-3.274c.52-.525.671-1.305.39-1.99a1.808 1.808 0 00-1.675-1.13h-7.16V7.816h7.196c1.906 0 3.508 1.553 3.573 3.441 0 .08-.015.394-.015.401v.036a3.054 3.054 0 01-.858 2.122c-.224.234-.455.481-.664.7-.354.372-.657.693-.802.839l-.65.641.643.65c.087.087.195.189.325.313.75.7 2.014 1.866 2.014 3.514.007 1.969-1.595 3.697-3.429 3.697z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgBay;
  _exports["default"] = _default;
});