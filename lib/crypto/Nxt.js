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
    global.Nxt = mod.exports;
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

  var SvgNxt = function SvgNxt(props) {
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
      fill: "#008FBB"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M26.082 16.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V16c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373.918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 01-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373.918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 01-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 01.531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373.918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z"
    }))));
  };

  var _default = SvgNxt;
  _exports["default"] = _default;
});