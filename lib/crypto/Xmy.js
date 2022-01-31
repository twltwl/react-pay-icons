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
    global.Xmy = mod.exports;
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

  var SvgXmy = function SvgXmy(props) {
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
      fill: "#ec1076",
      fillRule: "nonzero",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.05 21c-.602 0-1.263-.303-1.263-1.212 0-.448.35-1.825 1.048-4.132.143-.356.214-.676.214-.959 0-.545-.42-1.09-1.202-1.09-.454 0-1.443.18-1.743 1.15-.2.647-.661 2.364-1.383 5.152-.28.727-.781 1.091-1.502 1.091-1.082 0-1.263-.788-1.263-1.273 0-.192.288-1.353.865-3.48.225-.71.337-1.227.337-1.55 0-.485-.36-1.09-1.202-1.09-.841 0-1.623.605-1.983 1.938-.24.89-.581 2.223-1.022 4-.24.97-.782 1.455-1.623 1.455-.762 0-1.162-.424-1.202-1.273l1.382-5.757H6.443a1.425 1.425 0 11-.03-2.849h5.139c.721 0 1.162.344 1.322 1.03C13.596 11.243 14.557 11 15.4 11s1.923.485 2.404 1.576c.66-.728 1.803-1.576 3.426-1.576 1.502 0 2.765 1.03 2.765 2.848 0 .687-.341 2.122-1.022 4.304l2.637-.018c.771 0 1.39.642 1.39 1.433S26.381 21 25.617 21z",
      fill: "#fff"
    }))));
  };

  var _default = SvgXmy;
  _exports["default"] = _default;
});