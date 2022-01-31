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
    global.Lun = mod.exports;
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

  var SvgLun = function SvgLun(props) {
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
      fill: "#f55749",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.813 6.048a.381.381 0 01.372 0l8.225 4.618a.36.36 0 01.186.314c0 .13-.07.25-.185.314l-7.155 4.034a1.656 1.656 0 00-.973-.54v-2.193c.775-.129 1.366-.785 1.366-1.578 0-.885-.736-1.603-1.645-1.603s-1.645.718-1.645 1.603c0 .788.585 1.442 1.354 1.576v2.198a1.654 1.654 0 00-.96.536L7.599 11.31a.358.358 0 01-.001-.628l8.216-4.631m8.62 5.817a.379.379 0 01.372-.001.362.362 0 01.187.314L25 21.147c0 .13-.07.249-.186.314l-7.965 4.49c-.247.14-.557-.035-.557-.314l-.007-7.693c.386-.064.736-.261.987-.555l1.99 1.115a1.56 1.56 0 00-.037.628c.126.877.959 1.487 1.858 1.364.9-.124 1.526-.935 1.4-1.812s-.96-1.487-1.859-1.363a1.644 1.644 0 00-1.122.677l-1.95-1.093c.14-.371.13-.78-.025-1.145l6.908-3.894m-17.427.314c0-.212.178-.363.372-.363.065 0 .13.017.186.05l6.915 3.898c-.153.364-.161.77-.023 1.14l-1.949 1.093a1.645 1.645 0 00-1.122-.677c-.9-.124-1.731.487-1.858 1.363s.5 1.687 1.4 1.811 1.73-.487 1.858-1.363a1.56 1.56 0 00-.037-.629l1.989-1.115c.249.292.595.488.977.554l-.006 7.695c0 .279-.31.453-.558.313l-7.966-4.49A.36.36 0 017 21.146l.008-8.966",
      fill: "#fff"
    }))));
  };

  var _default = SvgLun;
  _exports["default"] = _default;
});