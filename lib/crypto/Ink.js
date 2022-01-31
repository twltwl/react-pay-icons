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
    global.Ink = mod.exports;
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

  var SvgInk = function SvgInk(props) {
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
      fill: "#df1a14",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.86 11.527c.307-.097.656.076.783.378.307.702.582 1.425.9 2.126.19.421.837.475 1.09.087.424-.702.763-1.447 1.176-2.16.339-.442.953-.226 1.419-.269.487-.032.847.583.571 1.004-1.334 2.493-2.678 4.976-4.012 7.47-.223.453-.953.453-1.154-.022-.297-.723-.53-1.479-.816-2.202-.17-.475-.9-.55-1.143-.097-.413.745-.773 1.522-1.186 2.256-.201.334-.625.28-.953.28-.318-.021-.699.076-.942-.194a.696.696 0 01-.096-.842c1.25-2.364 2.52-4.738 3.77-7.124.148-.27.275-.605.593-.69zm-4.363.184a9.55 9.55 0 011.112 0c.413.043.678.572.477.95-1.24 2.342-2.489 4.673-3.727 7.005-.149.26-.265.605-.583.69-.37.055-.751.023-1.122.023-.455.021-.836-.573-.561-.972 1.292-2.418 2.583-4.847 3.875-7.275.106-.205.286-.41.53-.421zm13.14.021c.402-.119.826-.032 1.239-.065.317.011.72-.054.953.227.286.292.2.842-.16 1.026-.73.464-1.45.96-2.19 1.414-.467.323-1.155-.227-.954-.767.18-.432.434-.83.636-1.252.116-.216.222-.496.476-.583zm-3.505 6.455c.212-.13.477-.086.678.022.561.28 1.122.583 1.694.853.244.108.498.313.508.604.043.389-.286.766-.667.734-.815 0-1.63.01-2.435 0-.402 0-.72-.475-.572-.863.106-.281.265-.53.392-.8.095-.204.19-.453.402-.55z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgInk;
  _exports["default"] = _default;
});