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
    global.Aura = mod.exports;
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

  var SvgAura = function SvgAura(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 126 79"
    }, props), _react["default"].createElement("defs", null, _react["default"].createElement("rect", {
      id: "aura_svg__a",
      x: 0,
      y: 0,
      width: 125.43,
      height: 78.39,
      rx: 4.389
    })), _react["default"].createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, _react["default"].createElement("mask", {
      id: "aura_svg__b",
      fill: "#fff"
    }, _react["default"].createElement("use", {
      xlinkHref: "#aura_svg__a"
    })), _react["default"].createElement("use", {
      fill: "#F90",
      xlinkHref: "#aura_svg__a"
    }), _react["default"].createElement("g", {
      mask: "url(#aura_svg__b)"
    }, _react["default"].createElement("path", {
      d: "M-5-5h134.998l.145 42.025C113.846 30.834 61.993 16.015-5 34.481V-5z",
      fill: "#2C328C"
    }), _react["default"].createElement("path", {
      d: "M-5 85.228h135.143V51.032C105.77 42.753 62.444 30.348-5 47.923v37.305z",
      fill: "#FFF200"
    }), _react["default"].createElement("path", {
      d: "M129.998 50.215C105.65 42.003 62.372 29.7-5 47.131V34.032c66.993-18.63 118.846-3.659 135.143 2.567l-.145 13.616z",
      fill: "#ED1C24"
    }), _react["default"].createElement("path", {
      d: "M38 27.366C41.298 18 48.848 9.911 61.965 10.001c13.116.09 21.864 7.788 24.225 17.86-16.901-1.805-28.17-2.12-48.19-.495z",
      fill: "#FFF200"
    }), _react["default"].createElement("path", {
      d: "M26 67.47L35.02 53h3.323l9.61 14.47h-3.519l-2.738-4.38h-9.832l-2.588 4.38H26zm6.774-5.939h7.965l-2.453-4.001a30.613 30.613 0 01-1.661-3 13.487 13.487 0 01-1.268 2.783l-2.588 4.235.005-.017zm30.98 5.938v-1.536c-1.33 1.184-3.13 1.775-5.404 1.775-.946.008-1.89-.11-2.81-.35a5.063 5.063 0 01-1.935-.89 2.853 2.853 0 01-.89-1.314 5.773 5.773 0 01-.177-1.67v-6.483h2.883v5.805a6.564 6.564 0 00.176 1.875c.232.52.648.921 1.154 1.113.697.285 1.439.42 2.184.395a7.145 7.145 0 002.432-.406 3.092 3.092 0 001.61-1.113c.353-.613.52-1.329.476-2.048v-5.62h2.883v10.467h-2.583zm9.573 0V57.001h2.588v1.586a5.525 5.525 0 011.837-1.469 4.713 4.713 0 011.848-.356 8.334 8.334 0 012.965.556l-.994 1.67a6.043 6.043 0 00-2.111-.39 4 4 0 00-1.703.351 2.186 2.186 0 00-1.071.974 4.461 4.461 0 00-.481 2.07v5.482l-2.878-.006zm24.567-1.29c-.988.525-2.03.922-3.105 1.184a14.102 14.102 0 01-3.183.345c-1.868 0-3.302-.278-4.31-.84-1.01-.562-1.507-1.28-1.507-2.154.005-.532.21-1.04.57-1.407a4.012 4.012 0 011.485-1.019 9.616 9.616 0 012.07-.556c.564-.09 1.418-.184 2.556-.268a40.85 40.85 0 005.144-.612v-.462c.045-.64-.28-1.245-.817-1.524a6.999 6.999 0 00-3.281-.601 7.743 7.743 0 00-3.007.44 2.803 2.803 0 00-1.434 1.552l-2.815-.24a3.797 3.797 0 011.263-1.797 6.386 6.386 0 012.546-1.057 17.981 17.981 0 013.86-.368 16.227 16.227 0 013.54.318c.71.13 1.39.4 2.009.795.406.295.718.717.895 1.208a6.37 6.37 0 01.14 1.636v2.365a15.2 15.2 0 00.186 3.128c.145.477.395.908.73 1.258h-3.012a2.743 2.743 0 01-.575-1.292l.052-.033zm-.243-3.963c-1.554.34-3.127.565-4.71.673-.845.053-1.685.17-2.515.35a2.537 2.537 0 00-1.138.557c-.244.202-.392.51-.404.84 0 .474.295.869.874 1.186.808.36 1.68.521 2.552.473a9.034 9.034 0 002.965-.445 4.014 4.014 0 001.91-1.23 2.855 2.855 0 00.466-1.775v-.63z",
      stroke: "#2C328C",
      strokeWidth: 0.5,
      fill: "#2C328C",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgAura;
  _exports["default"] = _default;
});