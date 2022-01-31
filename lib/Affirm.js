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
    global.Affirm = mod.exports;
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

  var SvgAffirm = function SvgAffirm(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 120,
      height: 48,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("mask", {
      id: "affirm_svg__a",
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 26,
      width: 19,
      height: 22
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 26.97h18.34v20.912H0V26.97Z",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      mask: "url(#affirm_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.869 43.758c-1.485 0-2.224-.73-2.224-1.934 0-2.23 2.495-2.993 7.05-3.474 0 2.982-2.017 5.408-4.826 5.408Zm1.963-16.789c-3.253 0-6.999 1.535-9.031 3.155l1.857 3.908c1.63-1.492 4.266-2.766 6.645-2.766 2.258 0 3.506.755 3.506 2.274 0 1.027-.828 1.543-2.392 1.745C4.581 36.045 0 37.655 0 42.156c0 3.568 2.54 5.728 6.51 5.728 2.83 0 5.352-1.575 6.551-3.653v3.07h5.278V34.439c0-5.312-3.692-7.47-8.507-7.47Z",
      fill: "#060809"
    })), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M62.834 27.55v19.752h5.65v-9.516c0-4.525 2.737-5.852 4.647-5.852.745 0 1.75.215 2.415.713l1.03-5.222c-.873-.373-1.785-.455-2.533-.455-2.905 0-4.73 1.287-5.934 3.9v-3.32h-5.275ZM102.766 26.97c-2.988 0-5.22 1.767-6.382 3.47-1.08-2.2-3.368-3.47-6.105-3.47-2.987 0-5.054 1.66-6.01 3.568V27.55h-5.445v19.752h5.653V37.135c0-3.652 1.91-5.4 3.695-5.4 1.615 0 3.1 1.045 3.1 3.74v11.827h5.644V37.135c0-3.692 1.868-5.4 3.735-5.4 1.492 0 3.067 1.085 3.067 3.7v11.867h5.645V33.65c0-4.44-2.987-6.68-6.597-6.68ZM49.082 27.55h-5.118V25.54c0-2.612 1.492-3.36 2.78-3.36 1.42 0 2.527.631 2.527.631l1.742-3.982s-1.766-1.155-4.977-1.155c-3.61 0-7.717 2.035-7.717 8.422v1.453H29.75V25.54c0-2.612 1.493-3.36 2.778-3.36.731 0 1.716.17 2.53.631L36.8 18.83c-1.04-.612-2.71-1.155-4.977-1.155-3.61 0-7.717 2.035-7.717 8.422v1.453h-3.278v4.357h3.278v15.394h5.644V31.907h8.569v15.394h5.645V31.907h5.118V27.55ZM52.452 47.302h5.64V27.551h-5.64v19.751Z",
      fill: "#060809"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M85.354 0C70.106 0 56.515 10.585 52.658 24.194h5.528c3.221-10.135 14.157-19.03 27.168-19.03 15.815 0 29.483 12.04 29.483 30.783 0 4.208-.546 8.002-1.578 11.353h5.363l.053-.183c.878-3.458 1.325-7.214 1.325-11.17C120 15.043 104.768 0 85.354 0Z",
      fill: "#0FA0EA"
    })));
  };

  var _default = SvgAffirm;
  _exports["default"] = _default;
});