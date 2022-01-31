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
    global.Rede = mod.exports;
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

  var SvgRede = function SvgRede(props) {
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
      fill: "#EC7000",
      fillRule: "nonzero",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M109.838 43.008H88.914c-3.049 0-4.341-1.1-4.868-2.564h6.592c4.409 0 7.121-1.795 7.121-5.67 0-3.876-2.712-5.87-7.121-5.87h-2.094c-3.95 0-8.749 2.123-9.758 7.208h-5.897V25h-4.994v11.112h-6.162c-5.909.027-9.197 2.793-9.628 6.896h-10.31c-3.049 0-4.342-1.1-4.87-2.564h6.594c4.408 0 7.12-1.795 7.12-5.67 0-3.876-2.712-5.87-7.12-5.87h-2.095c-3.95 0-8.749 2.123-9.759 7.208H27.34c-2.712 0-5.115.77-6.44 2.28v-1.937H16v15.984c0 .912.31 1.197 1.263 1.197h2.467c.925 0 1.264-.285 1.264-1.197v-6.296c0-4.76 3.235-5.699 6.564-5.699h4.155c1.036 4.72 5.313 6.98 10.268 6.98h10.748c1.237 2.731 4.186 4.161 8.913 4.161h2.864c4.687 0 8.63-3.078 8.63-7.607v-3.534h5.696c1.038 4.72 5.314 6.98 10.267 6.98h20.74c.553 0 1.015-.426 1.015-.969V43.92c0-.514-.462-.912-1.015-.912h-.001zm-68.6-9.774h2.435c1.112 0 1.881.427 1.881 1.453 0 .97-.77 1.425-1.881 1.425h-6.885c.41-1.606 1.554-2.878 4.45-2.878zM67.896 44.12c0 1.795-1.478 3.077-3.39 3.077h-3.203c-2.59 0-4.284-.94-4.284-3.305 0-2.308 1.694-3.447 4.284-3.447h6.593v3.675zm20.463-10.886h2.435c1.109 0 1.878.427 1.878 1.453 0 .97-.77 1.425-1.878 1.425H83.91c.408-1.606 1.552-2.878 4.45-2.878h-.001z",
      fill: "#FFF200"
    }))));
  };

  var _default = SvgRede;
  _exports["default"] = _default;
});