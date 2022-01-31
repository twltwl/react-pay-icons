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
    global.Rlc = mod.exports;
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

  var SvgRlc = function SvgRlc(props) {
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
      fill: "#FFD800"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M23.683 12.886c.057-.057.17-.057.281-.057 1.687 0 3.036 1.428 3.036 3.143 0 1.6-1.18 2.857-2.698 3.142h-.338c-.562 0-1.124-.171-1.63-.457a.939.939 0 00-.562-.171c-.225 0-.45.057-.618.171-.394.229-.562.629-.562 1.086v.514a3.08 3.08 0 01-2.699 2.8h-.337c-.562 0-1.124-.171-1.63-.457-.225-.114-.393-.171-.618-.171-.225 0-.45.057-.619.171-.393.229-.562.629-.562 1.086v.514c-.112 1.486-1.293 2.629-2.754 2.8h-.281c-1.687 0-3.036-1.429-3.036-3.143.056-1.6 1.18-2.914 2.698-3.086h.338c.562 0 1.124.172 1.63.458a.939.939 0 00.562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.069-3.143 2.699-3.314h.337c.562 0 1.124.171 1.63.457.225.114.394.171.619.171.224 0 .45-.057.618-.171.393-.229.562-.629.562-1.086-.112-1.657 1.124-3.143 2.754-3.314zM17.22 8.943c.112-.057.169-.057.337-.057 1.687 0 3.036 1.428 3.036 3.143-.056 1.6-1.18 2.914-2.699 3.085h-.337c-.562 0-1.124-.171-1.63-.457a.939.939 0 00-.562-.171c-.225 0-.45.057-.618.171-.394.229-.563.629-.563 1.086v.514c-.112 1.485-1.292 2.628-2.754 2.8h-.281c-1.686 0-3.036-1.428-3.036-3.143 0-1.542 1.125-2.8 2.642-3.028h.338c.562 0 1.124.171 1.63.457a.939.939 0 00.562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.125-3.143 2.755-3.314zM11.036 5c1.676 0 3.035 1.382 3.035 3.086s-1.36 3.085-3.035 3.085C9.359 11.171 8 9.79 8 8.086S9.36 5 11.036 5z"
    }))));
  };

  var _default = SvgRlc;
  _exports["default"] = _default;
});