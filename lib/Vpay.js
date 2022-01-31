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
    global.Vpay = mod.exports;
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

  var SvgVpay = function SvgVpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#1C3378",
      d: "M43.766 5.662H15.772v30.327h27.994z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M43.066 25.357H16.472V6.363h26.594z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m36.496 9.81-5.218 12.455H27.87l-2.568-9.942a1.372 1.372 0 0 0-.764-1.095 13.792 13.792 0 0 0-3.18-1.06l.075-.358h5.482c.74-.001 1.37.536 1.487 1.267l1.358 7.207 3.352-8.474h3.385",
      fill: "#1C3378"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.884 30.224c.162.036.328.051.495.045.757 0 1.22-.39 1.22-1.067 0-.644-.428-.988-1.13-.988a2.644 2.644 0 0 0-.585.053v1.957Zm-1.004-2.696a8.397 8.397 0 0 1 1.55-.12 2.432 2.432 0 0 1 1.637.472c.36.327.558.795.544 1.281a1.8 1.8 0 0 1-.479 1.314 2.39 2.39 0 0 1-1.753.617 2.893 2.893 0 0 1-.495-.035v2.183H22.88v-5.712ZM30.423 30.8l-.436-1.425c-.108-.352-.197-.748-.28-1.084h-.017c-.082.336-.165.742-.263 1.084L29 30.8h1.424Zm-1.589.799-.478 1.641H27.31l1.778-5.79h1.293l1.805 5.79h-1.088l-.503-1.641h-1.762ZM34.319 33.24v-2.415l-1.754-3.375h1.151l.668 1.485c.19.432.328.756.479 1.153h.014c.14-.371.3-.731.486-1.153l.668-1.485h1.145L35.33 30.8v2.44h-1.012Z",
      fill: "#FFF"
    })))));
  };

  var _default = SvgVpay;
  _exports["default"] = _default;
});