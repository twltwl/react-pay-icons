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
    global.Carnet = mod.exports;
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

  var SvgCarnet = function SvgCarnet(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 145.8 80.4",
      style: {
        enableBackground: "new 0 0 145.8 80.4"
      },
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M72.5 25.2c25.1 0 46 9.6 50.1 22.2.5-1.5.8-3 .8-4.6 0-14.8-22.8-26.9-51-26.9-28.1 0-51 12-51 26.9 0 1.6.3 3.1.8 4.6 4.3-12.6 25.2-22.2 50.3-22.2zm0-15.9c25.1 0 46 9.6 50.1 22.2.5-1.5.8-3 .8-4.6C123.5 12 100.7 0 72.5 0c-28.1 0-51 12-51 26.9 0 1.6.3 3.1.8 4.6C26.5 18.9 47.4 9.3 72.5 9.3zm20.9 64.3L83 60.2h-5v19.9h4.8v-13l10.3 13h5.1V60.2h-4.8v13.4zM15.1 76c-1 .7-2.2 1-3.5 1-1.8 0-3.4-.5-4.5-1.6-1.2-1.1-1.7-2.9-1.7-5.4 0-2.4.6-4.1 1.8-5.1 1.2-1.1 2.7-1.6 4.6-1.6 1.4 0 2.5.3 3.5.9.9.6 1.6 1.4 1.9 2.4l5.1-.9c-.6-1.6-1.4-2.8-2.6-3.7-1.9-1.4-4.5-2.1-7.6-2.1-3.6 0-6.4.9-8.6 2.7C1.1 64.5 0 67 0 70.4c0 3.1 1.1 5.6 3.3 7.4 2.2 1.8 4.9 2.7 8.3 2.7 2.7 0 5-.5 6.8-1.6 1.8-1.1 3-2.7 3.8-4.9l-5-1.2c-.5 1.5-1.2 2.5-2.1 3.2zm110.5-15.8v3.4h7.6v16.5h5.1V63.6h7.5v-3.4h-20.2zm-16.8 11.2h12.8V68h-12.8v-4.4h13.7v-3.4h-18.8v19.9H123v-3.4h-14.2v-5.3zM69.1 73c-.7-.6-1.6-1.2-2.7-1.7 2.2-.3 3.9-.9 5-1.8 1.1-1 1.7-2.2 1.7-3.7 0-1.2-.4-2.2-1.1-3.1-.7-.9-1.7-1.6-3-1.9-1.2-.4-3.2-.5-5.9-.5H52.3v19.9h5.1v-8.3h1c1.2 0 2 .1 2.6.2.5.1 1.1.4 1.5.8.5.4 1.4 1.4 2.7 2.9l3.7 4.3H75l-3.1-3.9c-1.1-1.5-2-2.6-2.8-3.2zm-7.9-4.3h-3.8v-5.1h4c2.1 0 3.3 0 3.7.1.8.1 1.5.4 1.9.8.5.4.7 1 .7 1.6 0 .6-.2 1.1-.5 1.5-.3.4-.8.7-1.4.8-.6.2-2.1.3-4.6.3zm-27.3-8.5L24 80.1h5.5l2.1-4.5h10.2l2.2 4.5h5.6L39.4 60.2h-5.5zm-.8 12 3.4-7.4 3.5 7.4h-6.9z",
      style: {
        fill: "#d3262b"
      }
    })));
  };

  var _default = SvgCarnet;
  _exports["default"] = _default;
});