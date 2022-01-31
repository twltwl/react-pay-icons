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
    global.Edoge = mod.exports;
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

  var SvgEdoge = function SvgEdoge(props) {
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
      fill: "#0FACF3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M9.471 9.016h5.432c2.154 0 3.224-.068 4.83.079 1.607.17 3.214.826 4.254 2.083 1.225 1.46 1.583 3.43 1.502 5.263-.08 1.823-.705 3.735-2.138 4.98-1.271 1.144-3.05 1.563-4.738 1.574-3.282.011-6.553 0-9.835 0-.358-.023-.763.011-1.04-.238-.485-.486-.196-1.528.578-1.483 1.826-.056 3.663 0 5.49-.034-.035-1.539-.012-3.078-.012-4.606-1.41-.012-2.809 0-4.218 0-.313-.012-.66-.012-.902-.216-.289-.26-.289-.701-.162-1.04.162-.374.601-.442.971-.442 1.433-.012 2.878 0 4.31 0 .024-1.404-.022-2.808.024-4.2-1.607-.011-3.213 0-4.82 0-.358-.011-.762-.011-1.04-.26-.288-.374-.23-.906.012-1.28.462-.226.994-.18 1.502-.18zm6.334 5.92c.658.011 1.317-.046 1.976.045.786.113.786 1.494-.012 1.607-.647.102-1.317.034-1.976.046.012 1.335 0 2.66 0 3.995.012.227.023.566.312.589.786.068 1.47.045 2.358.045 1.317.057 2.704-.35 3.628-1.313.948-1.007 1.295-2.41 1.318-3.747.035-1.482-.243-3.112-1.33-4.222-.981-.996-2.46-1.335-3.836-1.256-.784 0-1.456-.023-2.184.045-.231.068-.243.351-.254.555v3.61z"
    }))));
  };

  var _default = SvgEdoge;
  _exports["default"] = _default;
});