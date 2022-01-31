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
    global.Xcp = mod.exports;
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

  var SvgXcp = function SvgXcp(props) {
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
      r: 16,
      fill: "#ED1650"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M23.48 10h-4.044a.616.616 0 00-.44.186l-7.375 7.529a.616.616 0 01-.44.186H9.829a.616.616 0 01-.44-.186l-.956-.974a.639.639 0 01-.183-.447v-1.377a.64.64 0 01.183-.448l.956-.974a.617.617 0 01.44-.186h1.352c.165 0 .323.067.44.186l.587.598a.614.614 0 00.88 0l1.419-1.444a.642.642 0 000-.896l-1.54-1.567a.617.617 0 00-.44-.186H8.483a.617.617 0 00-.44.186l-2.86 2.912a.64.64 0 00-.182.448v4.118c0 .168.066.33.182.448l2.86 2.913a.617.617 0 00.44.185h4.045a.617.617 0 00.44-.186l7.375-7.528a.617.617 0 01.44-.187h1.352c.165 0 .323.067.44.186l.956.974a.64.64 0 01.183.448v1.377a.64.64 0 01-.183.447l-.956.974a.616.616 0 01-.44.186h-1.352a.616.616 0 01-.44-.186l-.592-.603a.614.614 0 00-.875-.005l-1.75 1.742a.64.64 0 00-.187.453v4.04c0 .35.279.634.622.634h2.04a.628.628 0 00.623-.633v-1.5c0-.35.279-.633.622-.633h2.635a.617.617 0 00.44-.185l2.86-2.913a.64.64 0 00.183-.448v-4.118a.64.64 0 00-.182-.448l-2.86-2.912a.617.617 0 00-.44-.186"
    }))));
  };

  var _default = SvgXcp;
  _exports["default"] = _default;
});