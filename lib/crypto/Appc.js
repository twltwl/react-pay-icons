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
    global.Appc = mod.exports;
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

  var SvgAppc = function SvgAppc(props) {
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
      fill: "#fd875e",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.66 17.386l2.386-7.112 2.43 7.112zm10.112 4.497l-1.973-5.309h1.178a.849.849 0 00.85-.836c0-.21-.086-.413-.237-.561s-.358-.233-.573-.233h-1.84l-.295-.826h2.095a.839.839 0 00.846-.807c.001-.222-.088-.434-.248-.59s-.376-.244-.602-.243h-2.72L18.78 8.51a3.576 3.576 0 00-1.057-1.461 2.499 2.499 0 00-1.663-.548 2.57 2.57 0 00-1.671.548 3.609 3.609 0 00-1.06 1.46l-1.543 4.004H9.082a.81.81 0 00-.817.797c0 .458.379.829.847.829h2.053l-.316.804h-1.84a.809.809 0 00-.818.8c0 .454.374.821.836.823h1.181l-2.006 5.316c-.123.3-.191.618-.202.941.02.453.222.88.56 1.19a2.04 2.04 0 001.34.483 1.8 1.8 0 001.84-1.305l.776-2.269h7.144l.777 2.323a1.813 1.813 0 001.84 1.24c.31.007.615-.07.884-.22.233-.17.44-.37.614-.598a1.6 1.6 0 00.225-.844 5.446 5.446 0 00-.228-.927z",
      fill: "#fefefe"
    }))));
  };

  var _default = SvgAppc;
  _exports["default"] = _default;
});