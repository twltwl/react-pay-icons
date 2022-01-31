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
    global.Bnty = mod.exports;
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

  var SvgBnty = function SvgBnty(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#fd7a3d",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.195 19.4c.77.42 1.027 1.386.513 2.142-.427.756-1.41 1.008-2.18.588a1.632 1.632 0 01-.813-1.302H18.78l-1.882 3.191c0 .042-.043.084-.085.126.427.252.727.756.727 1.302 0 .84-.727 1.553-1.583 1.553-.855 0-1.582-.672-1.582-1.553 0-.546.3-1.008.727-1.302 0-.042-.043-.084-.086-.126l-1.881-3.19H9.2c-.043.545-.342 1.007-.813 1.3-.77.42-1.753.169-2.181-.587s-.171-1.721.599-2.141c.513-.294 1.069-.294 1.54-.042.042-.042.042-.126.085-.168L10.355 16l-1.882-3.19a.316.316 0 01-.086-.169c-.47.21-1.069.252-1.54-.042a1.558 1.558 0 01-.598-2.141C6.676 9.702 7.66 9.45 8.43 9.87c.513.294.77.798.813 1.302h3.977l1.882-3.191c0-.042.043-.084.085-.126a1.53 1.53 0 01-.727-1.302c0-.84.727-1.553 1.583-1.553.855 0 1.582.672 1.582 1.553 0 .546-.3 1.008-.727 1.302 0 .042.043.084.086.126l1.881 3.19H22.8c.043-.545.342-1.007.813-1.3.77-.42 1.753-.169 2.181.587a1.558 1.558 0 01-.599 2.141c-.513.294-1.069.294-1.54.042-.042.042-.042.126-.085.168L21.688 16l1.882 3.19a.316.316 0 01.086.169c.47-.21 1.069-.252 1.54.042zm-7.142-4.45c0-.881-.727-1.595-1.625-1.595h-2.053a.38.38 0 00-.385.378v4.534c0 .21.171.378.385.378h2.053c.898 0 1.625-.714 1.625-1.595 0-.378-.128-.756-.385-1.008.214-.336.385-.672.385-1.092z",
      fill: "#fff"
    }))));
  };

  var _default = SvgBnty;
  _exports["default"] = _default;
});