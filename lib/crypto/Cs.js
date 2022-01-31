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
    global.Cs = mod.exports;
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

  var SvgCs = function SvgCs(props) {
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
      fill: "#262626"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M16.931 9.625c2.453.181 3.643 1.645 3.643 1.91 0 .187-.045.595-.045.845 0 .167.06.434.18.8-.03.25-.195.376-.496.376-.45 0-.324-.505-.992-1.505-.72-1.077-1.448-1.303-2.294-1.35.017 2.296.08 8.616.085 10.79 2.255-.328 3.507-2.012 3.832-2.012.18 0 .406.14.406.47 0 .695-1.782 2.267-4.272 2.578C16.792 24.556 15.832 27 13.45 27c-1.127 0-2.074-.87-2.074-1.88 0-.658.496-.94.947-.94.45 0 .901.329.901.94 0 .407-.135.69-.405.846.27.188.54.282.811.282.902 0 1.58-1.632 1.696-3.73-2.628-.422-5.077-2.926-5.077-6.565 0-4.093 2.55-5.863 5.051-6.258.05-1.84 1.011-4.65 3.47-4.695 1.487 0 2.118 1.222 2.118 1.88 0 .658-.473.94-.946.94-.474 0-.947-.376-.947-.94 0-.376.15-.642.45-.799-.21-.188-.48-.282-.81-.282-1.251 0-1.644 2.638-1.705 3.826zm-1.587 11.788c-.004-2.434-.035-8.043-.043-10.62-2.308.567-3.067 3.313-3.067 5.16 0 2.928 1.384 4.939 3.11 5.46z"
    }))));
  };

  var _default = SvgCs;
  _exports["default"] = _default;
});