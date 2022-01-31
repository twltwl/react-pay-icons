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
    global.Gto = mod.exports;
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

  var SvgGto = function SvgGto(props) {
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
      fill: "#7f27ff",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.376 14H8.02v7.222c-.008.739.288 1.45.82 1.972s1.257.813 2.01.806h4.527zm.17-3.779h.792c.784-1.35 1.502-2.268 2.177-2.764.832-.613 1.684-.618 2.352.038.624.612.741 1.38.33 2.12-.116.206-.27.408-.463.606h2.908c.679 0 1.358.558 1.358 1.333 0 .667-.569 1.334-1.358 1.334h-7.134V11.11h-1.132v1.778H8.358C7.68 12.888 7 12.33 7 11.554c0-.666.569-1.333 1.358-1.333h2.94a3.294 3.294 0 01-.488-.572c-.487-.744-.428-1.53.207-2.154.668-.656 1.52-.65 2.353-.038.674.496 1.392 1.415 2.177 2.764zm-1.315 0c-.58-.923-1.098-1.55-1.54-1.875-.409-.3-.633-.302-.874-.066-.247.243-.262.451-.055.767.236.361.733.768 1.449 1.174zm3.422 0h1.22c.683-.392 1.134-.788 1.33-1.14.17-.304.134-.535-.136-.8-.241-.237-.465-.236-.873.065-.443.325-.962.952-1.54 1.875zm-1.145 3.778h7.357v7.223a2.725 2.725 0 01-.82 1.972 2.83 2.83 0 01-2.01.806h-4.527z",
      fill: "#fff"
    }))));
  };

  var _default = SvgGto;
  _exports["default"] = _default;
});