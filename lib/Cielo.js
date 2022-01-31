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
    global.Cielo = mod.exports;
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

  var SvgCielo = function SvgCielo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#F1F2F2",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M67.792 49a8.815 8.815 0 01-6.138 2.322 8.89 8.89 0 01-4.447-1.26L54 54.877a15.172 15.172 0 007.563 2.122c4.055.06 7.748-1.447 10.437-3.93L67.792 49zm-6.388-20.998c-7.833-.12-14.281 6.153-14.402 14.013A14.22 14.22 0 0049.298 50L75 38.983c-1.446-6.21-6.952-10.88-13.596-10.981zM52.887 43.12a7.814 7.814 0 01-.052-1.016c.07-4.628 3.866-8.322 8.48-8.252a8.31 8.31 0 016.247 2.977l-14.675 6.29zm-21.949 5.485c-1.498 1.504-3.548 2.433-5.81 2.433-4.596 0-8.32-3.823-8.32-8.54 0-4.713 3.724-8.537 8.32-8.537 1.131 0 2.208.233 3.192.655l2.227-5.509A13.774 13.774 0 0025.127 28C17.324 28 11 34.492 11 42.499 11 50.507 17.324 57 25.127 57c3.842 0 7.325-1.576 9.873-4.131l-4.062-4.264zM83.331 22v27.581L88 51.566 85.795 57l-4.62-1.964c-1.046-.459-1.748-1.165-2.276-1.963-.516-.806-.899-1.92-.899-3.418V22h5.331zM37.67 56V38.343L33 36.378 35.206 31l4.62 1.944c1.047.454 1.747 1.155 2.278 1.942.515.798.896 1.904.896 3.383V56h-5.33z",
      fill: "#000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37 25a4 4 0 117.999 0A4 4 0 0137 25zm70.18 9.871a8.494 8.494 0 013.979 11.339l5.347 2.571c3.455-7.182.43-15.806-6.756-19.258-5.46-2.622-11.746-1.505-15.966 2.337l3.996 4.39c2.487-2.262 6.185-2.925 9.4-1.379z",
      fill: "#00AEEF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M99.818 50.19a8.5 8.5 0 01-3.978-11.34l-5.346-2.572c-3.452 7.185-.43 15.807 6.755 19.26 5.46 2.623 11.75 1.503 15.968-2.34l-3.995-4.388a8.505 8.505 0 01-9.404 1.38z",
      fill: "#000"
    }))));
  };

  var _default = SvgCielo;
  _exports["default"] = _default;
});