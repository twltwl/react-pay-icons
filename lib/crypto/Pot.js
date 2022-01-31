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
    global.Pot = mod.exports;
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

  var SvgPot = function SvgPot(props) {
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
      r: 16,
      fill: "#105B2F"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M12.033 18.18l-.39 1.987-.71 3.651c-.02.11-.048.184-.188.182-.882-.013-1.764-.02-2.646-.03-.021 0-.043-.014-.099-.035l1.99-9.94H8.313c.004-.074.002-.118.01-.16.103-.537.214-1.073.307-1.612.026-.15.093-.188.233-.187.41.004.82-.011 1.228.003.195.006.27-.05.308-.242.228-1.188.472-2.372.706-3.558.028-.141.059-.238.243-.238 2.008.006 4.017-.013 6.025.013 1.172.015 2.347.075 3.5.312.397.082.8.188 1.168.352 1.058.47 1.695 1.284 1.872 2.411.275 1.751-.096 3.36-1.22 4.762-.83 1.032-1.968 1.611-3.239 1.963-1.008.279-2.042.366-3.084.368-1.355.003-2.71 0-4.065-.001h-.272zm.555-2.738h.283c1.433 0 2.866.003 4.3-.002.305 0 .614-.013.917-.05 1.157-.138 2.036-.693 2.598-1.7a2.14 2.14 0 00.229-1.434c-.118-.697-.534-1.152-1.241-1.28a9.826 9.826 0 00-1.569-.17c-1.472-.027-2.944-.016-4.417-.02-.053 0-.106.008-.177.014l-.244 1.248h4.09l-.376 1.938h-4.103l-.29 1.456z"
    }))));
  };

  var _default = SvgPot;
  _exports["default"] = _default;
});