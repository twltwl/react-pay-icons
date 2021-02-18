function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.Mada = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgMada = function SvgMada(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46.757 20.246l-.16.028v2.365l-.136-.041-.044-.013a3.213 3.213 0 00-.876-.156c-1.928 0-2.332 1.502-2.332 2.749 0 1.72.94 2.706 2.578 2.706a5.133 5.133 0 001.726-.247c.477-.156.646-.38.646-.856V20c-.462.085-.94.167-1.402.246zm-.154 6.371l-.087.018c-.21.054-.426.082-.643.083-.515 0-1.128-.268-1.128-1.55 0-.659.11-1.531 1.068-1.531h.007c.24.015.477.06.706.136l.077.023v2.821zM51.655 22.4a6.314 6.314 0 00-1.965.35l-.494.153.166 1.14.48-.16a5.536 5.536 0 011.606-.28c.212 0 .86 0 .86.72v.314h-.9c-1.643 0-2.4.534-2.4 1.685 0 .985.7 1.572 1.876 1.572.443-.009.884-.069 1.314-.18l.023-.006h.022l.144.026c.462.084.937.17 1.399.263v-3.763c0-1.216-.715-1.834-2.126-1.834h-.005zm.678 4.261l-.082.024-.295.08c-.232.068-.47.106-.71.113-.452 0-.723-.233-.723-.619 0-.253.11-.674.85-.674h.96v1.076zM40.237 22.4a6.344 6.344 0 00-1.966.35l-.493.153.166 1.14.48-.16a5.515 5.515 0 011.609-.277c.211 0 .858 0 .858.72v.314h-.902c-1.642 0-2.401.534-2.401 1.684 0 .985.702 1.573 1.878 1.573.441-.01.88-.07 1.308-.181l.022-.007h.023l.145.027c.46.083.936.17 1.397.262v-3.764c0-1.217-.715-1.834-2.124-1.834zm.672 4.261l-.08.024-.296.08c-.231.068-.47.106-.71.113-.453 0-.72-.233-.72-.618 0-.254.109-.68.848-.68h.958v1.081zM34.714 22.41a3.86 3.86 0 00-1.593.365l-.059.027-.053-.04c-.314-.236-.781-.352-1.423-.352a5.69 5.69 0 00-1.689.259c-.499.158-.695.4-.695.867v4.298h1.564V23.86l.075-.027c.22-.082.452-.125.686-.127.452 0 .68.246.68.73v3.397h1.543v-3.467a.991.991 0 00-.048-.346l-.05-.105.103-.047c.242-.108.503-.163.767-.162.31 0 .682.127.682.73v3.397h1.542v-3.558c0-1.256-.663-1.866-2.027-1.866M51.173 12h-.042c-.898 0-1.824.252-2.154.748-.186.26-.284.576-.281.899v2.393a.659.659 0 01-.048.3l-.05.107h-2.839V14.78c-.035-1.755-1.047-2.717-2.513-2.717H41.81c-.061.429-.11.729-.164 1.154h1.424c.745 0 1.137.654 1.137 1.654v1.676l-.102-.052a.952.952 0 00-.337-.049h-2.455c-.046.32-.11.734-.172 1.154h7.556c.254-.05.557-.099.816-.147.382.192 1.095.293 1.584.293 1.643 0 2.704-1.123 2.704-2.866 0-1.72-1.03-2.845-2.628-2.88zm0 4.414c-.306 0-.61-.029-.911-.083l-.088-.02v-2.32a.945.945 0 00-.045-.331l-.048-.1.099-.044.074-.028.017-.011.102-.034c.016 0 .029-.01.045-.013.264-.067.536-.1.807-.098h.007c.958 0 1.068.874 1.068 1.53 0 1.282-.613 1.552-1.127 1.552M37.926 18.299h.07c1.643 0 2.402-.556 2.402-1.924 0-.98-.702-1.766-1.877-1.766h-1.513c-.452 0-.721-.263-.721-.709 0-.3.11-.68.85-.68h3.3c.07-.438.11-.718.172-1.152h-3.433c-1.6-.005-2.4.679-2.4 1.828 0 1.132.7 1.724 1.877 1.724h1.512a.698.698 0 01.518.22.733.733 0 01.202.536c0 .252-.11.776-.848.776h-.255l-4.838-.01h-.876c-.746 0-1.272-.44-1.272-1.439v-.695c0-1.047.408-1.7 1.272-1.7h1.44c.067-.45.11-.727.168-1.154h-1.965c-1.467 0-2.478 1.01-2.513 2.762v.784c.035 1.755 1.046 2.59 2.513 2.59h6.215v.009z",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26.8 21.231H7V28h19.8v-6.769z",
      fill: "#80BC00"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26.8 12H7v6.769h19.8V12z",
      fill: "#00A0DF"
    })));
  };

  var _default = SvgMada;
  _exports["default"] = _default;
});