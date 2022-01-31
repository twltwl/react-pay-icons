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
    global.Gxs = mod.exports;
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

  var SvgGxs = function SvgGxs(props) {
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
      fill: "#35A5F3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M7.02 7.027c1.27-1.327 3.59-1.38 4.901-.09 1.37 1.34 2.726 2.692 4.068 4.057 1.428-1.357 2.764-2.805 4.198-4.156 1.364-1.232 3.684-1.083 4.895.297 1.242 1.302 1.222 3.573-.067 4.837-1.327 1.351-2.671 2.682-4.01 4.022 1.368 1.409 2.793 2.763 4.15 4.19 1.216 1.333 1.1 3.605-.219 4.83-1.297 1.31-3.623 1.314-4.918-.002-1.347-1.322-2.665-2.676-4.003-4.004-1.428 1.374-2.79 2.816-4.233 4.176C10.4 26.41 8.07 26.227 6.88 24.82c-1.2-1.299-1.17-3.512.08-4.77a217.222 217.222 0 013.566-3.567l1.507 1.505c-1.176 1.214-2.413 2.376-3.571 3.608-.781.8-.093 2.292 1.004 2.274.665.059 1.124-.492 1.556-.908 1.147-1.168 2.311-2.315 3.458-3.483-2.5-2.522-5.04-5.009-7.528-7.542-1.298-1.308-1.257-3.64.07-4.91zm1.453 3.39c1.323 1.38 2.697 2.711 4.044 4.068.65-.658 1.304-1.312 1.962-1.963-1.303-1.313-2.601-2.635-3.922-3.93-.421-.455-1.141-.624-1.69-.298-.764.37-1.005 1.506-.395 2.123zm12.94-1.79c-2.486 2.44-4.922 4.932-7.395 7.384.667.647 1.332 1.296 1.983 1.96.499-.492.995-.99 1.492-1.488.502.501 1.001 1.005 1.507 1.503-.491.5-.985.996-1.484 1.49 1.341 1.349 2.656 2.723 4.041 4.028.703.74 2.067.291 2.27-.684.218-.69-.278-1.287-.746-1.721a2157.89 2157.89 0 01-6.596-6.593 266.94 266.94 0 001.501-1.509c.5.498.999.996 1.51 1.486 1.315-1.363 2.709-2.65 4.004-4.034.653-.634.392-1.849-.442-2.192-.56-.289-1.243-.085-1.646.37z"
    }))));
  };

  var _default = SvgGxs;
  _exports["default"] = _default;
});