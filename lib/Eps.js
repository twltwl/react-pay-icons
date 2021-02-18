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
    global.Eps = mod.exports;
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

  var SvgEps = function SvgEps(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#C81B71",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28.744 26.295v5.297c-.77.074-1.545.098-2.319.07a1.135 1.135 0 01-.14-.812c-.006-3.177-.007-6.355-.004-9.532a4.952 4.952 0 119.904-.113 4.979 4.979 0 01-5.007 5.09c-.775.004-1.55 0-2.434 0",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.553 26.282a4.825 4.825 0 001.976-2.162c.181-.366.463-.351.779-.35 1.876.002 3.753.003 5.63 0 .208.008.416.003.624-.014.38-.044.658-.249.646-.649a.6.6 0 00-.683-.596c-1.016-.004-2.033.013-3.049-.011a3.147 3.147 0 01-3.148-2.524 3.045 3.045 0 012.397-3.637c1.85-.13 3.706-.15 5.557-.056.076.792.076 1.59 0 2.382h-3.917c-.157 0-.313.002-.47 0-.513-.008-1.094-.01-1.115.665-.023.7.573.686 1.079.688.938.003 1.876-.013 2.814.004a3.13 3.13 0 01.274 6.235c-3.06.09-6.124.025-9.394.025M24.997 23.761c-2.348 0-4.587.034-6.824-.017-.88.002-1.68-.51-2.047-1.308h7.16a5.082 5.082 0 00-3.962-6.125 5.022 5.022 0 10-1.146 9.96c1.952.073 3.908.02 5.862.023h.847a1.705 1.705 0 01-1.706 1.57c-3.18.021-6.358.022-9.537 0a1.865 1.865 0 01-1.84-1.872 483.1 483.1 0 01-.002-9.458 1.821 1.821 0 011.918-1.85c3.127-.02 6.254-.019 9.38 0a1.788 1.788 0 011.878 1.725c.059 2.416.02 4.834.02 7.352",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.724 19.99H16.12a2.44 2.44 0 011.794-1.345 2.63 2.63 0 012.81 1.345M22.288 13.078h-1.094a.47.47 0 01-.47-.47v-.921a2.393 2.393 0 00-2.229-2.413 2.35 2.35 0 00-2.466 2.345v.98c0 .258-.21.468-.469.469h-1.095a.47.47 0 01-.469-.47v-.886a4.442 4.442 0 014.248-4.472 4.385 4.385 0 014.513 4.379v.99a.47.47 0 01-.469.469",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28.776 23.763c0-.969-.032-1.827.008-2.681a2.437 2.437 0 012.361-2.353 2.481 2.481 0 012.533 2.09 2.436 2.436 0 01-1.858 2.841c-1.008.14-2.028.175-3.044.103",
      fill: "#C81B71"
    }))));
  };

  var _default = SvgEps;
  _exports["default"] = _default;
});