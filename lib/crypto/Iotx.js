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
    global.Iotx = mod.exports;
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

  var SvgIotx = function SvgIotx(props) {
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
      fill: "#00D4D5"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16.519 5v5.457l4.738-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M21.257 7.732v5.457l4.737-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.8,
      d: "M16.519 10.457v5.457l4.738-2.725zm4.738 2.733v5.456l4.737-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.8,
      d: "M16.519 15.914v5.457l4.738-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.257 18.646v5.457l4.737-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.4,
      d: "M4.273 10.273v5.457l4.738-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.2,
      d: "M10.25 12.302v5.457l4.73-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.3,
      d: "M6.738 15.753v5.457l4.737-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M9.86 19.871v5.457l4.73-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.7,
      d: "M16.48 22.22v5.458l4.73-2.733z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M11.039 9.607v5.458l4.73-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.8,
      d: "M16.519 5v5.457l-4.738-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.6,
      d: "M11.039 7.32v5.456L6.3 10.044z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.6,
      d: "M15.777 10.02v5.458l-4.738-2.733z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.95,
      d: "M10.228 12.302v5.457L5.49 15.034z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.6,
      d: "M16.519 15.914v5.457l-4.73-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.55,
      d: "M6.738 17.185v5.457L2 19.909z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.994 10.457v5.457l-4.737-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.95,
      d: "M21.257 13.19v5.456l-4.738-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.9,
      d: "M25.994 15.914v5.457l-4.737-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.7,
      d: "M21.257 18.646v5.457l-4.738-2.732z"
    }), /*#__PURE__*/React.createElement("path", {
      opacity: 0.4,
      d: "M15.47 20.92v5.457l-4.737-2.725z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.257 7.732v5.457l-4.738-2.732z"
    })))));
  };

  var _default = SvgIotx;
  _exports["default"] = _default;
});