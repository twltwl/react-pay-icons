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
    global.Ary = mod.exports;
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

  var SvgAry = function SvgAry(props) {
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
      fill: "#343434",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.917 21.11a.848.848 0 00.57-.86v1.1a.91.91 0 01-.595.86l-7.588 2.733a.806.806 0 01-.596 0L8.12 22.211a.9.9 0 01-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 00.595 0zm0-1.948a.867.867 0 00.57-.86v1.1a.91.91 0 01-.595.86l-7.588 2.733a.806.806 0 01-.596 0L8.12 20.263a.9.9 0 01-.595-.86V18.29c0 .392.235.733.595.872l7.613 2.733a.806.806 0 00.595 0zm0-1.96a.88.88 0 00.583-.848v1.1a.91.91 0 01-.596.86l-7.588 2.733a.806.806 0 01-.595 0L8.12 18.302a.9.9 0 01-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 00.595 0zM7.5 10.662a.9.9 0 01.595-.86l7.601-2.745a.806.806 0 01.595 0l7.601 2.745a.9.9 0 01.595.86v4.832a.91.91 0 01-.595.86l-7.613 2.732a.806.806 0 01-.595 0l-7.589-2.732a.9.9 0 01-.595-.86z",
      fill: "#fff"
    }))));
  };

  var _default = SvgAry;
  _exports["default"] = _default;
});