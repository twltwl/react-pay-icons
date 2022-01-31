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
    global.Wicc = mod.exports;
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

  var SvgWicc = function SvgWicc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#5783CB"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.24 4h1.24a11.584 11.584 0 017.28 3.04c.34.22.34.76-.06.9-.34.08-.6-.22-.86-.4a10.74 10.74 0 00-14.8 1.72 10.5 10.5 0 0011.6 16.54 10.8 10.8 0 007.04-8c.176-.729.29-1.472.34-2.22a.422.422 0 01.84.08l-.04 1.24a11.66 11.66 0 01-3.44 7.66 11.92 11.92 0 01-7.8 3.44H15.4A12.02 12.02 0 014 16.56v-1.12A12.06 12.06 0 0115.24 4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25 10.22c.8-.88 2.46-.4 2.64.78.26 1.06-.76 1.96-1.8 1.88-1.38 1.4-2.48 3.06-3.42 4.8-.38.52.1 1.2-.2 1.74-.36 1.06-1.92 1.28-2.6.4-.5-.56-.36-1.34-.1-1.96a8.084 8.084 0 00-1.5-2.14l-.6.02a19.28 19.28 0 00-3.22 4.86c.14.54.24 1.18-.14 1.66-.5.82-1.82.9-2.44.14-.46-.52-.4-1.26-.16-1.88a18.8 18.8 0 00-2.92-5.2c-.78-.04-1.6-.5-1.7-1.32-.26-1.12 1.02-2.2 2.08-1.7.94.34 1.2 1.54.74 2.36a19.14 19.14 0 003.14 5.28A16.954 16.954 0 0016.26 15c-.16-.54-.26-1.16.1-1.66.54-.88 1.98-.9 2.54-.02.42.54.28 1.26.04 1.84a8.4 8.4 0 001.46 2.16l.6-.04c1.46-1.54 2.8-3.24 3.7-5.18-.1-.64-.22-1.4.32-1.88H25z"
    })))));
  };

  var _default = SvgWicc;
  _exports["default"] = _default;
});