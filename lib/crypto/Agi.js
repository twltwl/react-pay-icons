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
    global.Agi = mod.exports;
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

  var SvgAgi = function SvgAgi(props) {
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
      fill: "#6916ff",
      r: 16
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.144 6.424a.28.28 0 01-.081-.363.289.289 0 01.312 0 5.63 5.63 0 011.875 1.272c.303.281.557.609.75.97.204.368.371.753.5 1.152.123.413.187.842.188 1.272-.063.425-.125 2.485-1.313 3.455a.714.714 0 01-.938-.182.627.627 0 01-.062-.727A5.047 5.047 0 0018.5 8c-.4-.566-.854-1.093-1.356-1.576zM15.3 25.006c.125.121.125.242.063.303s-.188.121-.25.06a5.63 5.63 0 01-1.875-1.272 3.709 3.709 0 01-.75-.97 6.463 6.463 0 01-.5-1.151 4.482 4.482 0 01-.188-1.273c.063-.424.125-2.485 1.313-3.455a.714.714 0 01.937.182.539.539 0 010 .728 5.047 5.047 0 00-.125 5.272c.405.567.866 1.095 1.375 1.576z",
      fillOpacity: 0.5
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.694 20.006a5.473 5.473 0 00-1.313-3.151 10.816 10.816 0 00-2.625-1.94 14.466 14.466 0 01-2.375-1.642 4.032 4.032 0 01-1.187-2.121 4.243 4.243 0 01.306-2.48 6.692 6.692 0 011.756-2.242.26.26 0 00.063-.303.242.242 0 00-.375-.06 5.577 5.577 0 00-2.438 2.06 5.01 5.01 0 00-.881 3.273 5.25 5.25 0 00.438 1.697 6 6 0 001 1.455 10.78 10.78 0 002.687 1.878c.848.44 1.645.969 2.375 1.576a3.603 3.603 0 011.188 2.182c.176.879.066 1.79-.313 2.606a6.13 6.13 0 01-1.813 2.182.207.207 0 00-.063.303c.035.064.1.11.173.121s.149-.01.203-.06a7.801 7.801 0 002.375-2.122c.62-.958.906-2.084.819-3.212z"
    })))));
  };

  var _default = SvgAgi;
  _exports["default"] = _default;
});