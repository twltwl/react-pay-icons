function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.DokuWallet = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgDokuWallet = function SvgDokuWallet(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37.103 15.345a2.558 2.558 0 01-5.069.581 2.741 2.741 0 01.444-2.24 2.548 2.548 0 014.371.455c.175.377.262.789.254 1.204M20.87 12.623c.152.158.372.23.588.19 1.128.005 2.257.003 3.386.017.299 0 .598.03.891.088a2.44 2.44 0 01.747 4.507 2.76 2.76 0 01-1.432.375c-1.215-.01-2.429-.009-3.643-.012-.185 0-.379-.026-.518.198v1.558c.123.23.311.222.5.221 1.244-.002 2.487.014 3.73-.007a4.333 4.333 0 004.298-3.685 4.395 4.395 0 00-4.35-5.175c-1.2.008-2.4 0-3.6 0-.1 0-.2-.002-.3.005a.282.282 0 00-.295.301c-.006.484-.002.968-.002 1.419zm11.032 7.64c-.536 0-.992-.003-1.447.002-.413.004-.479.066-.48.47-.001 1.346-.021 2.69.01 4.035a4.27 4.27 0 001.392 3.127 4.499 4.499 0 003.924 1.153 4.437 4.437 0 003.776-4.256c.047-1.358.013-2.718.008-4.077a2.566 2.566 0 00-.077-.429c-.551-.043-1.063-.024-1.575-.015a.305.305 0 00-.303.305c-.01.114-.012.228-.008.343-.006 1.201-.016 2.403-.014 3.605.006.372-.056.743-.185 1.092a2.51 2.51 0 01-4.381.687 2.816 2.816 0 01-.576-1.762c0-1.244.007-2.489.004-3.733a4.811 4.811 0 00-.068-.546zm-2.636 8.808c-.093-.155-.123-.219-.165-.273-.796-1.028-1.593-2.056-2.391-3.083-.36-.463-.722-.923-1.072-1.392-.18-.24-.165-.346.03-.566.056-.064.122-.12.183-.181l2.89-2.871c.105-.106.197-.225.31-.355-.09-.042-.126-.074-.162-.075-.643-.005-1.286-.021-1.928.002-.18.03-.35.105-.494.218a2.2 2.2 0 00-.336.33l-2.81 2.888c-.093.094-.161.245-.38.218v-.421-2.617c.004-.1.003-.2-.005-.3-.026-.21-.12-.32-.329-.325a25.95 25.95 0 00-1.414 0c-.222.005-.295.097-.318.323a2.494 2.494 0 00-.004.257l.002 7.635c0 .072 0 .144.003.215.016.319.098.413.407.42.414.01.828.01 1.243 0 .308-.007.394-.105.411-.421.005-.086.001-.172.001-.257 0-.53.002-1.058 0-1.588a.818.818 0 01.177-.6c.206-.22.415-.435.637-.636.184-.167.301-.147.472.042.048.053.087.114.13.171.739.964 1.482 1.925 2.213 2.895.176.267.481.419.8.4.471-.016.943-.002 1.415-.006.134-.002.267-.026.484-.047zm5.413-18.18a4.588 4.588 0 00-3.687 1.606 4.288 4.288 0 00-.996 3.358 4.129 4.129 0 001.386 2.729 4.572 4.572 0 004.073 1.083 4.412 4.412 0 003.012-6.643 4.31 4.31 0 00-3.788-2.133zm-4.695 22.104c-3.631 0-7.262 0-10.894.003a2.013 2.013 0 01-1.478-.564A1.91 1.91 0 0117 31.018v-2.271l.014-19.482a2.992 2.992 0 01.053-.724 1.983 1.983 0 011.865-1.502c.686.01 1.372 0 2.059 0l17.669-.01c.714-.001 1.429-.025 2.143-.026a2.079 2.079 0 011.834.92c.26.414.386.9.36 1.388v21.242c0 .185-.006.371-.017.556a2.089 2.089 0 01-2.102 1.901c-3.073-.03-6.147-.01-9.22-.01h-1.673v-.005z",
      fill: "#EF201F",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgDokuWallet;
  _exports["default"] = _default;
});