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
    global.Eqli = mod.exports;
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

  var SvgEqli = function SvgEqli(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#C9A35E"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M10.027 19.38a.372.372 0 01-.334.21H5.62a.368.368 0 01-.315-.182.37.37 0 01-.01-.372L12.699 5.69c.133-.239.515-.239.648 0l5.772 10.378a.396.396 0 01-.01.372.346.346 0 01-.315.181h-1.688a.381.381 0 01-.324-.19l-3.75-6.82-4.196 7.755h1.602a.38.38 0 01.315.171.378.378 0 01.019.363l-.744 1.478zm16.674-.344a.35.35 0 01-.01.372.346.346 0 01-.314.181H15.264a.372.372 0 01-.372-.372V17.74c0-.21.171-.372.372-.372h7.908L18.984 9.64l-.792 1.583c-.133.248-.543.248-.667 0l-.744-1.478a.407.407 0 010-.334l1.85-3.71a.39.39 0 01.324-.201.39.39 0 01.334.19l7.412 13.346zm-4.817 1.478l1.84 3.339a.37.37 0 010 .372.346.346 0 01-.314.181H8.587a.381.381 0 01-.325-.19.37.37 0 01.01-.373l2.966-4.817 2.957-5.18c.067-.123.2-.2.334-.19a.35.35 0 01.325.2l.744 1.479a.358.358 0 01-.01.353l-3.758 6.486h8.337l-.773-1.288a.35.35 0 01-.01-.372.381.381 0 01.325-.19h1.85c.134 0 .258.076.325.19z"
    }))));
  };

  var _default = SvgEqli;
  _exports["default"] = _default;
});