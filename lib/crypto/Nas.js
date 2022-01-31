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
    global.Nas = mod.exports;
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

  var SvgNas = function SvgNas(props) {
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
      fill: "#222",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.73 18.655l3.146 6.382 1.616-4.773-4.761-1.609m-5.754-2.769l4.764 1.617 1.618-4.77-6.382 3.153m6.031 2.024c.075.04.106.064.141.076 1.536.522 3.07 1.048 4.61 1.557.125.04.303.006.426-.054 1.761-.859 3.517-1.728 5.273-2.595.5-.247.998-.497 1.543-.769-.12-.046-.182-.072-.247-.094-1.487-.505-2.974-1.013-4.466-1.504a.698.698 0 00-.477.03c-1.872.91-3.737 1.835-5.603 2.756-.389.192-.776.386-1.2.597m6.499-4.065c-1.13-2.294-2.246-4.554-3.39-6.875l-3.48 10.267 6.87-3.392M5 16.002c1.094-.541 2.126-1.055 3.16-1.565 1.758-.867 3.516-1.735 5.277-2.596a.652.652 0 00.364-.414c.688-2.053 1.386-4.102 2.082-6.152.026-.076.057-.15.105-.275.07.136.122.232.17.329 1.345 2.73 2.688 5.46 4.044 8.184.066.132.24.242.389.293 2.036.702 4.076 1.392 6.115 2.085.077.026.153.054.294.104-.188.095-.327.168-.467.237-2.628 1.297-5.255 2.597-7.887 3.885a.88.88 0 00-.493.565c-.679 2.034-1.375 4.062-2.066 6.092-.019.056-.042.11-.087.226-.177-.355-.33-.658-.48-.962-1.224-2.482-2.449-4.964-3.666-7.45a.718.718 0 00-.454-.405c-2.042-.683-4.08-1.38-6.119-2.073-.075-.026-.148-.057-.281-.108",
      fill: "#fff"
    }))));
  };

  var _default = SvgNas;
  _exports["default"] = _default;
});