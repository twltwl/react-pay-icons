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
    global.Crpt = mod.exports;
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

  var SvgCrpt = function SvgCrpt(props) {
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
      fill: "#00bdcd",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.833 9.744a7.764 7.764 0 00-5.058-1.847c-4.195 0-7.65 3.317-7.938 7.557h-.822c.288-4.744 4.113-8.397 8.76-8.397 2.057 0 4.03.756 5.634 2.1zm-.288 2.771a5.863 5.863 0 00-4.77-2.477c-3.249 0-5.881 2.687-5.881 5.962 0 3.316 2.632 6.004 5.88 6.004 1.886 0 3.659-.92 4.771-2.478l.577.588c-1.276 1.721-3.25 2.73-5.347 2.73-3.702 0-6.704-3.066-6.704-6.844 0-3.736 3.002-6.802 6.704-6.802a6.655 6.655 0 015.347 2.73zm.946-2.141l.577-.588c.205.21.37.42.534.63l-.576.587a7.357 7.357 0 00-.535-.63zm-5.757 14.61c-4.647 0-8.472-3.652-8.76-8.396h.822c.288 4.24 3.743 7.557 7.938 7.557 1.85 0 3.62-.63 5.058-1.847l.576.587a8.688 8.688 0 01-5.634 2.1zm5.757-3.316c.206-.21.37-.42.535-.63l.576.587c-.165.21-.329.42-.534.63zM6.823 16c0 5.584 4.482 10.16 9.952 10.16 2.961 0 5.757-1.301 7.65-3.694l.575.587C22.944 25.573 19.983 27 16.775 27 10.812 27 6 22.045 6 16 6 9.912 10.853 5 16.775 5 19.94 5 22.945 6.427 25 8.947l-.576.588c-1.892-2.351-4.688-3.695-7.65-3.695-5.47 0-9.951 4.576-9.951 10.16z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgCrpt;
  _exports["default"] = _default;
});