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
    global.Solo = mod.exports;
  }
})(this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgSolo = function SvgSolo(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), _react["default"].createElement("defs", null, _react["default"].createElement("style", null, ".solo_svg__cls-2{fill:#fff}")), _react["default"].createElement("g", {
      id: "solo_svg__Layer_2",
      "data-name": "Layer 2"
    }, _react["default"].createElement("g", {
      id: "solo_svg__Layer_1-2",
      "data-name": "Layer 1"
    }, _react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#c92f92"
    }), _react["default"].createElement("path", {
      className: "solo_svg__cls-2",
      d: "M67.62 31.84a9.37 9.37 0 01-15.7 10.23l2.69-1.81a6.09 6.09 0 0010.2-6.64z"
    }), _react["default"].createElement("path", {
      d: "M73.89 27.86A9.37 9.37 0 0058.2 38.11l2.74-1.74a6.08 6.08 0 1110.19-6.65z"
    }), _react["default"].createElement("path", {
      className: "solo_svg__cls-2",
      d: "M44.92 34.6a17.8 17.8 0 1117.79 17.79A17.8 17.8 0 0144.92 34.6zm17.79 16.55A16.55 16.55 0 1046.17 34.6a16.55 16.55 0 0016.54 16.55zm2.05 5.03h1.14l-.9 4.21h3l-.21 1h-4.2zm-12.82 3.59a2.55 2.55 0 002.07.94c1 0 1.32-.31 1.39-.77 0-.18.1-.6-.71-.7l-1.31-.14c-1.38-.19-1.61-.75-1.58-1.44.05-.95 1.2-1.66 2.51-1.66a3 3 0 012.52.84l-.79.48a2.53 2.53 0 00-1.94-.52c-.48 0-1.14.23-1.24.7s-.06.54.64.63l1.66.21a1.5 1.5 0 011.33 1.42c-.09.9-.87 2-2.74 1.86a3 3 0 01-2.65-1.32zm5.52-1.04a3.36 3.36 0 013.22-2.82 2.39 2.39 0 012.41 2.82 3.36 3.36 0 01-3.22 2.82 2.38 2.38 0 01-2.41-2.82zM60 60.57a2.19 2.19 0 002.1-1.84 1.55 1.55 0 00-1.57-1.83 2.19 2.19 0 00-2.1 1.83A1.56 1.56 0 0060 60.57zm8.69-1.84a3.37 3.37 0 013.22-2.82 2.39 2.39 0 012.42 2.82 3.36 3.36 0 01-3.22 2.82 2.39 2.39 0 01-2.42-2.82zm2.56 1.84a2.18 2.18 0 002.09-1.84 1.55 1.55 0 00-1.57-1.83 2.18 2.18 0 00-2.09 1.83 1.55 1.55 0 001.57 1.84z"
    }))));
  };

  var _default = SvgSolo;
  _exports["default"] = _default;
});