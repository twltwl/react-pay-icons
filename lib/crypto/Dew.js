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
    global.Dew = mod.exports;
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

  var SvgDew = function SvgDew(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#fec907",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.161 22.816c.618 0 1.12.49 1.12 1.092 0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 01-.354-.833V8.149c0-.305.124-.597.345-.813.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092 0 .29-.119.567-.329.772-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092 0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07.986-.568 1.618-1.499 2.19-2.503.573-1.003.86-2.124.86-3.362-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 00-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091 0-.29.119-.568.329-.772.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 013.223 3.15z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgDew;
  _exports["default"] = _default;
});