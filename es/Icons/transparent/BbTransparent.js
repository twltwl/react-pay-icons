(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.react);
    global.BbTransparent = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _extends2, _react) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);

  var SvgBbTransparent = props => /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 192.756 192.756"
  }, props), /*#__PURE__*/_react.default.createElement("g", {
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0 0h192.756v192.756H0V0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#33348e",
    d: "M96.396 16.925l-78.85 52.85 32.819 21.311L89.577 64.66 74.023 54.443l21.305-14.274 46.231 30.679-75.845 50.918 16.405 10.865 94.379-62.848-.213-.213-79.889-52.645zm78.631.022l-32.808 21.731 16.404 11.078 16.404-11.078V16.947zM17.005 175.832l32.809-21.73-16.404-11.079-16.405 11.079v21.73z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#33348e",
    d: "M96.36 175.787l78.849-52.851-32.818-21.311-39.211 26.426 15.552 10.217-21.304 14.275-46.231-30.68 75.844-50.917-16.404-10.866-94.38 62.848.213.215 79.89 52.644z"
  })));

  var _default = SvgBbTransparent;
  _exports.default = _default;
});