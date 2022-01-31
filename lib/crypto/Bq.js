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
    global.Bq = mod.exports;
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

  var SvgBq = function SvgBq(props) {
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
      fill: "#1D1D1D"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M9.962 16.954a3.849 3.849 0 003.869 3.848c2.122-.013 3.846-1.716 3.847-3.8a3.834 3.834 0 00-3.858-3.869c-2.132.003-3.858 1.712-3.858 3.821m.004 4.14v1.273H8V8c.559.01 1.031.21 1.41.605.363.38.544.835.542 1.363-.005.947-.002 1.894-.002 2.886 1.373-1.147 2.902-1.712 4.683-1.44 1.765.27 3.12 1.158 4.044 2.677 1.395 2.295.943 5.226-1.078 7.05-1.971 1.78-5.246 2.056-7.633-.047zm6.359 1.247c.078-.047.119-.075.162-.097a5.713 5.713 0 001.65-1.222.528.528 0 01.38-.179c1.67-.096 3.175-1.44 3.458-3.084.372-2.16-.94-4.066-3.11-4.48a1.282 1.282 0 01-.77-.42c-.4-.442-.886-.787-1.403-1.084-.044-.025-.086-.052-.158-.096.984-.27 1.943-.334 2.915-.113.967.219 1.8.693 2.58 1.34v-1.275H24V26a1.959 1.959 0 01-1.401-.602 1.902 1.902 0 01-.552-1.376v-2.87c-1.698 1.423-3.576 1.849-5.722 1.189z"
    }))));
  };

  var _default = SvgBq;
  _exports["default"] = _default;
});