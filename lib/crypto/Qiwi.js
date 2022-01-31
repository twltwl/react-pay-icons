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
    global.Qiwi = mod.exports;
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

  var SvgQiwi = function SvgQiwi(props) {
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
      fill: "#FF8C00"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M22.59 19.445c.051.401-.063.556-.19.556s-.305-.155-.495-.465c-.19-.31-.267-.66-.165-.84.063-.117.203-.169.368-.104.33.13.457.633.482.853zm-1.777.88c.393.336.508.723.304 1.008a.664.664 0 01-.52.232.896.896 0 01-.597-.22c-.355-.31-.457-.827-.229-1.111a.489.489 0 01.407-.181c.203 0 .432.09.635.271zM7 14.894C7 9.981 10.91 6 15.734 6c4.825 0 8.735 3.982 8.735 8.894a9.074 9.074 0 01-1.231 4.564c-.026.039-.09.026-.102-.026-.304-2.185-1.612-3.387-3.516-3.749-.166-.026-.191-.13.025-.155.584-.052 1.409-.039 1.84.039a5.9 5.9 0 00.039-.686c0-3.245-2.59-5.882-5.777-5.882-3.186 0-5.776 2.637-5.776 5.882 0 3.246 2.59 5.883 5.776 5.883h.267a8.078 8.078 0 01-.115-1.59c.013-.362.09-.414.242-.13.8 1.41 1.942 2.677 4.177 3.18 1.828.415 3.656.893 5.624 3.44.177.22-.089.452-.292.271-2.006-1.81-3.834-2.405-5.497-2.405-1.867.014-3.136.26-4.419.26C10.91 23.79 7 19.806 7 14.893z"
    }))));
  };

  var _default = SvgQiwi;
  _exports["default"] = _default;
});