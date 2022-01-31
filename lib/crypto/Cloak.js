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
    global.Cloak = mod.exports;
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

  var SvgCloak = function SvgCloak(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#ff3a00",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.003 5C22.07 5.01 27.002 9.946 27 16.003 26.998 22.067 22.062 27 15.996 27h-.01C9.926 26.994 4.997 22.053 5 15.986 5.003 9.93 9.94 5 16.003 5zM16 6.418c-5.277 0-9.572 4.298-9.574 9.58-.001 5.276 4.288 9.572 9.562 9.576 5.283 0 9.585-4.296 9.589-9.576a9.504 9.504 0 00-2.805-6.77 9.512 9.512 0 00-6.77-2.81zm4.728 8.599c.339 1.719-.097 3.163-1.332 4.417l-.17.171-.216-.106a6.326 6.326 0 00-.364-.164l-.489-.204.394-.354c.769-.69 1.178-1.591 1.217-2.677.04-1.086-.345-2.033-1.143-2.814a3.725 3.725 0 00-2.621-1.066 3.764 3.764 0 00-2.83 1.279c-.798.91-1.103 2.018-.88 3.203a3.635 3.635 0 001.114 2.041l.387.359-.489.197c-.122.049-.25.102-.387.16l-.21.088-.16-.163c-.823-.848-1.269-1.824-1.362-2.984-.197-2.445 1.388-4.599 3.77-5.121a4.996 4.996 0 011.07-.118 4.798 4.798 0 014.7 3.856zm-10.755 6.29C8.497 19.661 7.3 16.741 8.37 13.483a8.032 8.032 0 017.625-5.519 8.028 8.028 0 017.605 5.429c.946 2.772.288 5.924-1.675 8.03l-.25.267-.897-1.002.198-.223c1.228-1.383 1.798-3.023 1.695-4.873-.096-1.69-.768-3.162-1.998-4.374a6.605 6.605 0 00-4.667-1.909 6.699 6.699 0 00-4.371 1.625 6.588 6.588 0 00-2.009 3.037 6.618 6.618 0 00-.12 3.626 6.592 6.592 0 001.43 2.77l.196.227-.916.986z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgCloak;
  _exports["default"] = _default;
});