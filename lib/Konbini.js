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
    global.Konbini = mod.exports;
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

  var SvgKonbini = function SvgKonbini(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.66 32.267c-.117.008-.234.024-.352.024-2.174.002-4.348.008-6.521-.005a2.892 2.892 0 0 1-.965-.153 2.22 2.22 0 0 1-1.585-1.994c-.062-.816-.029-1.64-.038-2.46.03-.154.094-.3.186-.427 1.79-2.697 3.553-5.413 5.328-8.12 2.012-3.07 4.031-6.134 6.027-9.214.118-.265.303-.494.537-.665.672-.004 1.345-.01 2.018-.01 2.124-.002 4.248.017 6.372-.008a2.172 2.172 0 0 1 2.208 2.095c.01.487-.142.963-.43 1.356l-1.357 2.063c-1.16 1.772-2.32 3.544-3.478 5.317-.064.098-.117.203-.175.305a3.834 3.834 0 0 1-.665 1.146c-1.9 2.877-3.764 5.777-5.673 8.649-.391.589-.772 1.185-1.154 1.781a.737.737 0 0 1-.283.32",
      fill: "#F91E13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.277 9.253c-.762 1.172-1.521 2.346-2.287 3.515-3.164 4.833-6.33 9.666-9.498 14.497-.092.141-.195.276-.293.415-.008-.117-.023-.234-.023-.35-.001-5.147 0-10.293.001-15.44a2.536 2.536 0 0 1 .832-2.03 2.311 2.311 0 0 1 1.536-.616c3.191-.004 6.383-.005 9.574-.001.053 0 .105.006.158.01",
      fill: "#1E32C7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.66 32.267c.272-.442.533-.891.817-1.325 1.691-2.583 3.385-5.163 5.082-7.742.594-.904 1.186-1.808 1.778-2.712.03-.041.063-.08.098-.117.372.552.75 1.1 1.114 1.656 1.5 2.285 2.998 4.57 4.495 6.857a2.16 2.16 0 0 1-1.871 3.405c-2.52-.002-5.039-.002-7.558 0l-3.561-.002c-.131 0-.262-.013-.394-.02",
      fill: "#FEC700"
    }))));
  };

  var _default = SvgKonbini;
  _exports["default"] = _default;
});