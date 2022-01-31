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
    global.Gno = mod.exports;
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

  var SvgGno = function SvgGno(props) {
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
      fill: "#00A6C4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      fillRule: "nonzero",
      d: "M24.777 10.5l.2.331a10.816 10.816 0 011.523 5.537C26.482 22.236 21.785 27 16 27h-.018c-5.785 0-10.5-4.801-10.482-10.669 0-1.968.544-3.881 1.541-5.537l.182-.312.961.975a3.78 3.78 0 00-.453.9 4.09 4.09 0 002.43 5.225 4.024 4.024 0 003.608-.46L16 19.403l2.557-2.594c.236.166.508.295.798.405 2.05.736 4.298-.35 5.023-2.41.435-1.214.236-2.483-.399-3.495l.798-.809zM9.363 12.652l3.01 3.035c-.363.295-.816.46-1.306.46-1.178 0-2.14-.975-2.14-2.17 0-.497.164-.957.436-1.325zm10.5 2.851l2.974-3.016c.236.35.362.772.362 1.214 0 1.195-.96 2.17-2.14 2.17-.453 0-.852-.129-1.196-.368zm-3.827 2.281l-8.668-8.83.344-.367C9.852 6.287 12.772 5 15.91 5h.018c3.174 0 6.22 1.38 8.342 3.77l.327.369-8.56 8.645zm-7.254-8.83l7.254 7.377L23.2 9.102c-1.922-1.95-4.533-3.072-7.253-3.072h-.019c-2.702 0-5.222 1.03-7.145 2.925z"
    }))));
  };

  var _default = SvgGno;
  _exports["default"] = _default;
});