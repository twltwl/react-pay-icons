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
    global.Entrp = mod.exports;
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

  var SvgEntrp = function SvgEntrp(props) {
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
      r: 16,
      fill: "#FA5836"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.737 4.502c-.108.015-.525.093-.926.154-2.238.378-4.305 1.474-6.018 3.194-1.72 1.713-2.77 3.696-3.21 6.057-.2 1.073-.2 3.171 0 4.244.44 2.36 1.49 4.343 3.21 6.056 1.713 1.72 3.695 2.77 6.056 3.21 1.073.2 3.171.2 4.244 0 2.36-.44 4.344-1.49 6.057-3.21 1.72-1.713 2.77-3.695 3.21-6.056.2-1.073.2-3.171 0-4.244-.44-2.36-1.49-4.344-3.21-6.057-1.675-1.682-3.565-2.708-5.856-3.17-.71-.147-3.071-.263-3.557-.178zm4.12 4.09c.092.038.123.153.123.462v.417h-.486c-.617 0-1.103.231-1.304.617-.131.247-.139.548-.139 4.205 0 2.16-.03 3.973-.061 4.027-.162.247-1.35.317-1.883.108l-.216-.085v-3.988c0-3.72-.008-4.02-.139-4.267-.2-.386-.687-.617-1.304-.617h-.486v-.417c0-.262.039-.432.1-.455.14-.062 5.648-.062 5.795-.008zm-4.429 3.216v.95l-.224.13c-.331.194-.887.772-1.11 1.15a4.008 4.008 0 00-.325.78l-.123.44h-.887c-1.011 0-.98.038-.764-.81.27-1.027.926-2.069 1.72-2.701.44-.355 1.412-.888 1.605-.888.085 0 .108.201.108.95zm3.827-.678a5.173 5.173 0 012.693 3.317c.216.849.247.81-.764.81h-.887l-.124-.44a4.008 4.008 0 00-.324-.779c-.224-.378-.78-.956-1.111-1.15l-.224-.13v-.95c0-.748.023-.949.108-.949.054 0 .34.124.633.27zm-5.601 4.853c0 .362.239 1.103.486 1.489 1.319 2.09 4.343 2.09 5.663 0 .247-.386.486-1.127.486-1.49v-.262h1.844l-.039.401c-.193 1.875-1.227 3.388-2.847 4.19-.748.37-1.404.525-2.276.525-2.7 0-4.837-1.968-5.123-4.715l-.038-.4h1.844v.262zm4.436 5.578c.1.54.656.872 1.489.872h.401v.848h-6.018v-.826l.563-.038c.363-.023.656-.092.818-.185.24-.139.548-.602.548-.818 0-.077.247-.1 1.072-.1h1.08l.047.247z",
      fill: "#FEFFFF"
    }))));
  };

  var _default = SvgEntrp;
  _exports["default"] = _default;
});