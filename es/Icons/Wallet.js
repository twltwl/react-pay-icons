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
    global.Wallet = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgWallet = function SvgWallet(props) {
    return /*#__PURE__*/_react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
      id: "wallet_svg__a",
      x1: 78.16,
      y1: 37.99,
      x2: 62.12,
      y2: 45.13,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 0,
      stopColor: "#fc0"
    }), /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 1,
      stopColor: "#c90"
    })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
      id: "wallet_svg__b",
      x1: 42.92,
      y1: 28.53,
      x2: 61.15,
      y2: 53.45,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 0,
      stopColor: "#69c"
    }), /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 1,
      stopColor: "#36c"
    })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
      id: "wallet_svg__c",
      x1: 79.29,
      y1: 13.3,
      x2: 79.29,
      y2: 65.09,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 0,
      stopColor: "#57b149"
    }), /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 1,
      stopColor: "#39823e"
    })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
      id: "wallet_svg__d",
      x1: 60.47,
      y1: 19.7,
      x2: 60.47,
      y2: 59.12,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 0,
      stopColor: "#de1f26"
    }), /*#__PURE__*/_react["default"].createElement("stop", {
      offset: 1,
      stopColor: "#c00"
    }))), /*#__PURE__*/_react["default"].createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      "data-name": "Layer 1"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#084d95"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M77.1 65.09h-.29a5.47 5.47 0 01-5.16-5.77 32.27 32.27 0 00-15-29.24 5.5 5.5 0 01-2.15-7.44 5.44 5.44 0 017.4-2.18c.9.5 22.07 12.49 20.67 39.44a5.47 5.47 0 01-5.47 5.19z",
      fill: "url(#wallet_svg__a)"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M58.51 58.63a5.06 5.06 0 01-5.24-5.06c.08-11.67-12-18.27-12.13-18.34A5.2 5.2 0 0139 28.14a5.26 5.26 0 017.15-2.08c.72.4 17.75 9.65 17.63 27.56a5.09 5.09 0 01-5.27 5.01z",
      fill: "url(#wallet_svg__b)"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M77 65.09a5.38 5.38 0 01-2.3-.51 5.51 5.51 0 01-2.7-7.33 43.55 43.55 0 00.32-35.87 5.52 5.52 0 119.8-5.1 54.51 54.51 0 01-.08 45.59A5.56 5.56 0 0177 65.09z",
      fill: "url(#wallet_svg__c)"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M58.5 59.12a5.27 5.27 0 01-4.31-8.3c6.62-9.43.09-23.38 0-23.52a5.28 5.28 0 019.47-4.65c.39.8 9.42 19.6-.86 34.23a5.27 5.27 0 01-4.3 2.24z",
      fill: "url(#wallet_svg__d)"
    }))));
  };

  var _default = SvgWallet;
  _exports["default"] = _default;
});