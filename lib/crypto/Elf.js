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
    global.Elf = mod.exports;
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

  var SvgElf = function SvgElf(props) {
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
      fill: "#2b5ebb",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26 15.962c-.001 2.336-1.81 4.158-4.122 4.151-2.264-.007-4.102-1.879-4.09-4.166.012-2.286 1.87-4.15 4.122-4.135 2.299.015 4.091 1.834 4.09 4.15zM9.09 23.92a3.019 3.019 0 01-3.021-3.054c.005-1.706 1.339-3.085 3.016-3.046.482.011.966.191 1.436.338.668.209 1.32.468 1.986.686.413.136.808.04 1.173-.186.53-.33.98-.728 1.267-1.312.29-.594.95-.815 1.537-.563.544.234.827.827.67 1.403-.177.647-.71.995-1.374.879-.589-.103-1.173-.293-1.771-.076-1.07.389-1.54 1.275-1.892 2.286-.192.553-.396 1.134-.74 1.59-.552.736-1.364 1.059-2.287 1.055zM9.026 8.082c1.367 0 2.432.8 2.896 2.117.184.52.46 1.007.696 1.508.583 1.24 2.046 1.362 2.974 1.023.822-.3 1.614.228 1.633 1.08.013.59-.29 1.02-.844 1.194-.49.152-1.042-.055-1.342-.502-.107-.16-.207-.326-.326-.477-.816-1.03-1.722-1.3-2.95-.838-.428.16-.829.4-1.231.623a3.018 3.018 0 01-4.234-1.358c-.956-2.03.504-4.37 2.728-4.37zm9.53 15.908c-.012 1.119-.925 2.03-2.015 2.01-1.053-.02-1.933-.927-1.96-1.947-.029-1.154.819-2.093 1.998-2.104 1.128-.011 1.99.919 1.978 2.04zM14.594 8.02c0-1.132.886-2.03 1.995-2.02 1.078.01 1.98.933 1.971 2.018-.008 1.141-.862 2.056-1.986 2.035-1.279-.024-2.032-1.055-1.98-2.033z",
      fill: "#fff"
    }))));
  };

  var _default = SvgElf;
  _exports["default"] = _default;
});