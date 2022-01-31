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
    global.Deez = mod.exports;
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

  var SvgDeez = function SvgDeez(props) {
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
      r: 16,
      fill: "#939393",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M13.707 19.86c.365-.237 2.818-1.74 5.208-3.204 1.723-1.054 1.723-1.054 1.693-1.157-.03-.125-10.7-6.609-10.809-6.674a21.481 21.481 0 01-.602-.369c.196-.136.577-.396 1.033-.706L11.34 7l.762.456c.94.562 11.26 6.892 12.706 7.793-.59.355-2.68 1.592-5.49 3.247l-5.583 3.29a36.218 36.218 0 01-.02-.874 46.32 46.32 0 01-.007-1.051zm-2.368-6.296c.185.11.505.303.899.548l1.029.638.022 1.93c.065 5.577.065 5.577.146 5.634l.054.037.06-.022c.03-.009.041-.013 10.871-6.402l.58-.342-.191 2.683-.07.04a5095.12 5095.12 0 01-13.389 7.664c-.004-.699-.01-3.085-.011-6.196v-6.212zM9 24.8l.025-15.967.388.229c.312.182 2.416 1.465 4.793 2.919a1210.99 1210.99 0 005.114 3.118l.715.43-2.364 1.446-.472-.275a279.81 279.81 0 01-2.83-1.732 260.976 260.976 0 00-2.76-1.688l-.652-.38-.005 6.769c-.002 3.054-.005 5.592-.007 6.332-.193-.117-.522-.32-.908-.56L9 24.8z"
    }))));
  };

  var _default = SvgDeez;
  _exports["default"] = _default;
});