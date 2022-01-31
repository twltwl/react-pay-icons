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
    global.Chsb = mod.exports;
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

  var SvgChsb = function SvgChsb(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#01C38D",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.503 5.5l-1.722.978v8.304l.94.534V8.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 7.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.921.921 0 00-.408-.099.948.948 0 00-.94.953c0 .525.421.953.94.953a.94.94 0 00.93-.856l.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V6.478L13.496 5.5 8.017 8.61v2.84L5.5 12.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V17.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.133.065.27.098.408.098.519 0 .94-.427.94-.952a.948.948 0 00-.94-.953.94.94 0 00-.93.856l-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V8.611L18.503 5.5zM8.957 9.17l4.54-2.578.781.444V7.9l-5.32 3.016V9.17zm.488 2.562l4.833-2.74v5.484l-4.833-2.744zm8.277 5.791l4.833 2.745-4.833 2.74v-5.485zm0 7.441V24.1l5.32-3.016v1.747l-4.539 2.577-.781-.444z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgChsb;
  _exports["default"] = _default;
});