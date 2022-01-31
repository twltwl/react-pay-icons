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
    global.Iop = mod.exports;
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

  var SvgIop = function SvgIop(props) {
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
      r: 16,
      fill: "#0CAFA5"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8.413 11.919c-.033-.02-.06-.004-.06.035v2.302a.134.134 0 00.06.105l2.91 1.682a.134.134 0 01.06.105v8.33a.135.135 0 00.062.105l1.993 1.15c.033.02.06.004.06-.035v-10.77a.134.134 0 00-.06-.106l-5.025-2.903zm15.174 0c.033-.02.06-.004.06.035v2.302a.134.134 0 01-.06.105l-2.91 1.68a.134.134 0 00-.06.106v8.33a.135.135 0 01-.061.106l-1.993 1.15c-.034.02-.061.004-.061-.035v-10.77a.135.135 0 01.06-.106l5.025-2.903z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.98 7.503c0-.038-.027-.054-.06-.035l-7.86 4.546a.134.134 0 01-.12 0L8.08 7.468c-.034-.02-.061-.003-.061.035v2.302a.134.134 0 00.06.105l6.804 3.934a.135.135 0 01.06.105v14.285a.134.134 0 00.061.106l.935.54a.138.138 0 00.122 0l.935-.54a.134.134 0 00.06-.106V13.95a.135.135 0 01.061-.105L23.92 9.91a.134.134 0 00.06-.106v-2.3zm-7.944 5.816c-.008 0-.011-.006-.007-.013.004-.007.01-.007.014 0s0 .013-.007.013z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.012 7.202a.088.088 0 00-.069.084v2.873a.135.135 0 00.061.105l.935.54c.038.02.083.02.122 0l.935-.54a.135.135 0 00.06-.105V7.285a.087.087 0 00-.068-.084l-.92-.169a.456.456 0 00-.137 0l-.919.17z"
    })))));
  };

  var _default = SvgIop;
  _exports["default"] = _default;
});