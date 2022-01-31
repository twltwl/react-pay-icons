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
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 145.8 80.4",
      style: {
        enableBackground: "new 0 0 145.8 80.4"
      },
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", {
      type: "text/css"
    }, ".st0{fill:#d3262b;}"), /*#__PURE__*/React.createElement("path", {
      className: "st0",
      d: "M72.5,25.2c25.1,0,46,9.6,50.1,22.2c0.5-1.5,0.8-3,0.8-4.6c0-14.8-22.8-26.9-51-26.9c-28.1,0-51,12-51,26.9 c0,1.6,0.3,3.1,0.8,4.6C26.5,34.8,47.4,25.2,72.5,25.2z M72.5,9.3c25.1,0,46,9.6,50.1,22.2c0.5-1.5,0.8-3,0.8-4.6 C123.5,12,100.7,0,72.5,0c-28.1,0-51,12-51,26.9c0,1.6,0.3,3.1,0.8,4.6C26.5,18.9,47.4,9.3,72.5,9.3z M93.4,73.6L83,60.2h-5v19.9 h4.8v-13l10.3,13h5.1V60.2h-4.8V73.6z M15.1,76c-1,0.7-2.2,1-3.5,1c-1.8,0-3.4-0.5-4.5-1.6c-1.2-1.1-1.7-2.9-1.7-5.4 c0-2.4,0.6-4.1,1.8-5.1c1.2-1.1,2.7-1.6,4.6-1.6c1.4,0,2.5,0.3,3.5,0.9c0.9,0.6,1.6,1.4,1.9,2.4l5.1-0.9c-0.6-1.6-1.4-2.8-2.6-3.7 c-1.9-1.4-4.5-2.1-7.6-2.1c-3.6,0-6.4,0.9-8.6,2.7C1.1,64.5,0,67,0,70.4c0,3.1,1.1,5.6,3.3,7.4c2.2,1.8,4.9,2.7,8.3,2.7 c2.7,0,5-0.5,6.8-1.6c1.8-1.1,3-2.7,3.8-4.9l-5-1.2C16.7,74.3,16,75.3,15.1,76z M125.6,60.2v3.4h7.6v16.5h5.1V63.6h7.5v-3.4H125.6z  M108.8,71.4h12.8V68h-12.8v-4.4h13.7v-3.4h-18.8v19.9H123v-3.4h-14.2V71.4z M69.1,73c-0.7-0.6-1.6-1.2-2.7-1.7 c2.2-0.3,3.9-0.9,5-1.8c1.1-1,1.7-2.2,1.7-3.7c0-1.2-0.4-2.2-1.1-3.1c-0.7-0.9-1.7-1.6-3-1.9c-1.2-0.4-3.2-0.5-5.9-0.5H52.3v19.9 h5.1v-8.3h1c1.2,0,2,0.1,2.6,0.2c0.5,0.1,1.1,0.4,1.5,0.8c0.5,0.4,1.4,1.4,2.7,2.9l3.7,4.3h6.1l-3.1-3.9 C70.8,74.7,69.9,73.6,69.1,73z M61.2,68.7h-3.8v-5.1h4c2.1,0,3.3,0,3.7,0.1c0.8,0.1,1.5,0.4,1.9,0.8c0.5,0.4,0.7,1,0.7,1.6 c0,0.6-0.2,1.1-0.5,1.5c-0.3,0.4-0.8,0.7-1.4,0.8C65.2,68.6,63.7,68.7,61.2,68.7z M33.9,60.2L24,80.1h5.5l2.1-4.5h10.2l2.2,4.5h5.6 L39.4,60.2H33.9z M33.1,72.2l3.4-7.4l3.5,7.4H33.1z"
    })));
  };

  var _default = SvgCarnet;
  _exports["default"] = _default;
});