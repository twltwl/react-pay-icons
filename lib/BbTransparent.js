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
    global.BbTransparent = mod.exports;
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

  var SvgBbTransparent = function SvgBbTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 192.756 192.756"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "evenodd",
      clipRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h192.756v192.756H0V0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#33348e",
      d: "m96.396 16.925-78.85 52.85 32.819 21.311L89.577 64.66 74.023 54.443l21.305-14.274 46.231 30.679-75.845 50.918 16.405 10.865 94.379-62.848-.213-.213-79.889-52.645zm78.631.022-32.808 21.731 16.404 11.078 16.404-11.078V16.947zM17.005 175.832l32.809-21.73-16.404-11.079-16.405 11.079v21.73z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#33348e",
      d: "m96.36 175.787 78.849-52.851-32.818-21.311-39.211 26.426 15.552 10.217-21.304 14.275-46.231-30.68 75.844-50.917-16.404-10.866-94.38 62.848.213.215 79.89 52.644z"
    }))));
  };

  var _default = SvgBbTransparent;
  _exports["default"] = _default;
});