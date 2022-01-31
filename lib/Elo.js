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
    global.Elo = mod.exports;
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

  var SvgElo = function SvgElo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#000",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.838 27.39a11.89 11.89 0 013.856-.637c5.888 0 10.804 4.29 11.928 9.995l8.346-1.746c-1.913-9.69-10.264-16.985-20.274-16.985a20.08 20.08 0 00-6.557 1.092l2.7 8.282z",
      fill: "#FFCB05"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.99 55.14l5.645-6.546c-2.517-2.29-4.105-5.632-4.105-9.357 0-3.72 1.588-7.063 4.105-9.346l-5.645-6.553c-4.278 3.892-6.98 9.574-6.98 15.899 0 6.33 2.702 12.012 6.98 15.904",
      fill: "#00A4E0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.622 41.742c-1.13 5.699-6.04 9.984-11.922 9.984a11.73 11.73 0 01-3.862-.643l-2.701 8.293a20.274 20.274 0 006.563 1.086c9.999 0 18.345-7.284 20.268-16.962l-8.346-1.758z",
      fill: "#EF4123"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M55.946 49.004a14.482 14.482 0 01-.88-1.657c-1.34-3.036-1.4-6.178-.274-9.193 1.242-3.308 3.615-5.836 6.682-7.13 3.856-1.619 8.115-1.304 11.812.84 2.346 1.314 4.008 3.345 5.271 6.22.159.37.3.76.443 1.097l-23.054 9.823zm7.7-13.1c-2.74 1.15-4.151 3.661-3.856 6.6l11.593-4.879c-1.996-2.287-4.588-3.046-7.738-1.72zm9.18 10.615c-.005 0-.005.005-.005.005l-.24-.16c-.695 1.095-1.772 1.988-3.134 2.565-2.592 1.101-4.992.818-6.72-.663l-.159.236s0-.006-.005-.006L59.62 52.8c.732.497 1.514.914 2.335 1.25 3.248 1.32 6.572 1.256 9.848-.133 2.368-1.005 4.227-2.534 5.495-4.474l-4.473-2.923z",
      fill: "#FFF",
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M87.88 24v24.427l4.12 1.54L89.661 55l-4.547-1.747a5.059 5.059 0 01-2.238-1.736c-.503-.715-.876-1.704-.876-3.025V24h5.88zm9.917 18.5c0-2.03.911-3.854 2.344-5.09l-3.847-4.244c-2.608 2.282-4.25 5.613-4.25 9.323-.006 3.716 1.637 7.053 4.24 9.334l3.841-4.243a6.71 6.71 0 01-2.328-5.08zm6.833 6.764a6.929 6.929 0 01-2.167-.351l-1.837 5.4c1.255.415 2.597.644 3.998.644 6.088.006 11.17-4.27 12.35-9.946l-5.647-1.141c-.642 3.086-3.395 5.4-6.698 5.394zm.015-19.221c-1.395 0-2.737.224-3.992.634l1.821 5.405a6.952 6.952 0 012.166-.346c3.308.005 6.067 2.329 6.692 5.42l5.646-1.13c-1.158-5.687-6.239-9.978-12.333-9.983z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgElo;
  _exports["default"] = _default;
});