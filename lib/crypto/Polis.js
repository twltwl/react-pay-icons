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
    global.Polis = mod.exports;
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

  var SvgPolis = function SvgPolis(props) {
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
      fill: "#2C3E50"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.636 22.68v-1c0-.198-.133-.33-.335-.33h-.665v-1.004c0-.199-.133-.334-.331-.334h-.666v-7.345h.662c.199 0 .335-.132.335-.334v-1h.665a.322.322 0 00.331-.268c.034-.166-.033-.298-.165-.368l-9.318-4.672a.46.46 0 00-.298 0l-9.652 4.672a.333.333 0 00-.166.364c0 .17.133.272.298.272h1v1c0 .198.133.33.331.33h.666v7.349h-.662c-.2 0-.335.132-.335.33v1.004h-.665c-.2 0-.332.132-.332.331v1.003c-.198 0-.334.133-.334.335s.132.334.331.334h19.305c.198 0 .334-.132.334-.33 0-.2-.132-.339-.33-.339h-.004zM7.993 11.998v-.665h15.974v.665H7.993zm13.643.67v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.331v-7.345h1.33zm-3.328 0v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.327v-7.345h1.327zm12.315 8.678H7.997v-.669H23.97v.669h-.003z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgPolis;
  _exports["default"] = _default;
});