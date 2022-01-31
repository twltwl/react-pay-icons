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
    global.Ebst = mod.exports;
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

  var SvgEbst = function SvgEbst(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#1693d4",
      fillRule: "nonzero",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.928 16.574a8.07 8.07 0 01-.005-1.08h-2.8L4 12.996h6.494A8.049 8.049 0 0117.954 8C22.398 8 26 11.582 26 16s-3.602 8-8.046 8a8.05 8.05 0 01-7.432-4.928H4l3.123-2.498zm12.609-.425c0-.83-.112-1.554-.337-2.172s-.537-1.136-.935-1.55c-.399-.415-.871-.728-1.418-.938s-1.14-.316-1.783-.316c-.694 0-1.34.118-1.938.354s-1.115.568-1.552.995c-.437.428-.78.944-1.031 1.55s-.376 1.28-.376 2.02c0 .752.125 1.425.376 2.018.25.593.597 1.094 1.04 1.502.444.409.968.724 1.572.948a5.688 5.688 0 001.986.335c1.735 0 3.06-.613 3.972-1.838l-1.543-1.224c-.257.37-.584.66-.983.87-.398.21-.887.316-1.465.316-.334 0-.656-.057-.964-.172s-.585-.271-.83-.469a2.262 2.262 0 01-.848-1.617h7.038c.013-.102.019-.204.019-.306zm-2.314-1.034H15.48c.052-.65.318-1.183.8-1.598.483-.414 1.07-.622 1.765-.622.372 0 .697.06.973.182s.505.284.685.488c.18.204.311.44.395.708a2.8 2.8 0 01.125.842z",
      fill: "#fff"
    }))));
  };

  var _default = SvgEbst;
  _exports["default"] = _default;
});