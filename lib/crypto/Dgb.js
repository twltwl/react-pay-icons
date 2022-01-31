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
    global.Dgb = mod.exports;
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

  var SvgDgb = function SvgDgb(props) {
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
      fill: "#006AD2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M12.368 25l.479-1.282-.85.084-.306.81c-.024.061-.044.125-.075.183-.067.125-.17.203-.313.204-.63.001-1.258 0-1.888-.001-.015 0-.03-.009-.063-.019l.402-1.085c-.733-.02-1.446-.032-2.156-.113.012-.133 4.062-10.345 4.223-10.652.04-.003.087-.01.135-.01h3.27c.033 0 .066 0 .098.002.331.025.515.305.4.623-.153.42-.315.838-.472 1.256l-2.058 5.474c-.021.056-.039.114-.065.19.058.003.103.009.148.007 3.096-.135 5.368-1.613 6.836-4.39a6.711 6.711 0 00.67-1.935c.073-.395.096-.791-.003-1.186a1.763 1.763 0 00-.698-1.03c-.468-.337-.994-.481-1.562-.484H7.5c.024-.06.035-.1.054-.136l1.388-2.501a.754.754 0 01.706-.418h5.866l.601-1.59h1.782c.044 0 .088-.003.13.003.127.02.2.12.181.25-.008.054-.028.106-.048.158-.123.331-.249.661-.372.992-.021.056-.038.113-.06.18h.805c.02-.043.04-.087.058-.132l.496-1.317c.05-.133.052-.134.185-.134.564 0 1.129-.002 1.693 0 .238.001.323.127.238.357-.135.369-.274.735-.412 1.102-.019.051-.036.103-.06.173.055.01.1.02.145.026.785.096 1.549.274 2.274.601.551.249 1.052.574 1.464 1.03.558.615.835 1.35.879 2.18.042.805-.105 1.581-.372 2.33-.632 1.775-1.53 3.388-2.83 4.747-.896.936-1.93 1.68-3.064 2.282-1.224.65-2.518 1.105-3.858 1.427-.12.03-.183.082-.224.2-.147.41-.303.818-.457 1.226-.095.25-.19.318-.452.318h-1.868z"
    }))));
  };

  var _default = SvgDgb;
  _exports["default"] = _default;
});