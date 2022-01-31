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
    global.Bts = mod.exports;
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

  var SvgBts = function SvgBts(props) {
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
      fill: "#35BAEB"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.03 5l6.274 5.565c.073.067.152.123.213.195a.7.7 0 01.009.129c-.003 2.397.006 4.792-.003 7.186a2.876 2.876 0 00-.89.345L9.09 12.878a.163.163 0 01-.059-.146c.006-2.578 0-5.154.006-7.73L9.03 5zm7.447 8.607a6.97 6.97 0 014.112 1.698c-.327.35-.68.68-1.018 1.023-.714.712-1.423 1.43-2.14 2.135a2.707 2.707 0 00-.952-.388c-.008-1.487 0-2.977 0-4.468h-.002zm-7.444.668c1.628 1.613 3.246 3.237 4.871 4.853-.19.295-.326.62-.402.963H9.03v-5.819l.003.003zm11.606 2.333c.213-.204.408-.423.633-.62a6.942 6.942 0 011.7 4.1c-1.467.006-2.937 0-4.404.003-.088.02-.088-.082-.105-.137a2.497 2.497 0 00-.359-.811c.84-.846 1.689-1.689 2.535-2.532v-.003zM9.03 21.042h3.821c.219 0 .438-.01.66.005.068.338.2.66.387.948l-3.1 3.092c-.023.018-.061.073-.088.03a6.918 6.918 0 01-1.68-4.075zm9.462.005c.63-.014 1.254 0 1.884-.005h2.596a6.883 6.883 0 01-1.657 4.045l-1.808-1.802c-.452-.455-.913-.902-1.36-1.363.167-.268.284-.565.345-.875zm-1.254 1.73c.07-.04.14-.082.21-.117l3.156 3.15a6.936 6.936 0 01-4.127 1.707v-4.463a2.61 2.61 0 00.758-.28l.003.003zm-4.591 1.794c.642-.636 1.277-1.28 1.925-1.91.29.186.613.32.95.393v4.463a6.936 6.936 0 01-4.112-1.698c.403-.423.826-.828 1.237-1.245v-.003z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgBts;
  _exports["default"] = _default;
});