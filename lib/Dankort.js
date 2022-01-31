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
    global.Dankort = mod.exports;
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

  var SvgDankort = function SvgDankort(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#dankort_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M49.363 3.226c2.469.241 5.317-.482 7.311.82 2.041 1.157 3.418 3.327 3.323 5.834l-14.526.049c-.238.096-.38.482-.665.675-2.041 2.507-4.035 5.11-6.124 7.522.237-2.7.38-5.497.712-8.197h-12.01c-.095 2.459-.238 4.821-.38 7.136-.522-2.652-2.659-5.545-5.364-6.317-1.282-.385-2.469-.675-3.798-.771l-20.746.096c0 .048-.095.048-.095 0C-3.046 7.71-1.907 5.59.087 4.335c.855-.53 1.804-.964 2.848-1.06l46.428-.049ZM59.998 28.637c0 .049-.048.049 0 .097-2.944-3.23-5.554-6.799-8.118-10.27l.047-.145c2.611-2.797 5.08-5.69 8.023-8.15l.095.049v18.42h-.047ZM15.944 18.849c.047.868-.523 1.591-1.187 2.122-1.662 1.302-4.083.675-6.219.771l.38-4.966c2.136.144 6.266-.772 7.026 2.073ZM44.854 28.3c.238.82.902.627 1.567.627h13.577c.095 2.555-1.424 5.111-3.845 6.172a7.461 7.461 0 0 1-2.944.579H30.422l-27.533.096C.61 35.58-1.67 33.845-2.523 31.627a7.621 7.621 0 0 1-.475-2.555l20.318-.097c3.086-.386 6.03-1.736 7.833-4.629.665-1.06 1.14-2.17 1.567-3.279-.19 2.604-.285 5.304-.57 8.005 3.845-.049 11.916 0 11.916 0 .094-3.28.237-6.751.474-9.982l6.314 9.21Z",
      fill: "#ED1C24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ED1C24",
      d: "M0 0h60v10H0zM0 29h60v11H0z"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "dankort_svg__a"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h60v40H0z"
    })))));
  };

  var _default = SvgDankort;
  _exports["default"] = _default;
});