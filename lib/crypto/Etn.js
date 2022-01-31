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
    global.Etn = mod.exports;
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

  var SvgEtn = function SvgEtn(props) {
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
      fill: "#23BEE2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M19.879 13.469l3.239-3.412a9.225 9.225 0 012.153 5.938c0 5.117-4.15 9.266-9.271 9.266a9.232 9.232 0 01-4.468-1.147l8.238-4.246 1.342-.692-1.243-.859-.888-.614 2.59-1.322 1.288-.658-1.154-.872-1.826-1.382zm-7.758 5.534l-3.02 3.18a9.228 9.228 0 01-2.372-6.188c0-5.118 4.15-9.267 9.271-9.267a9.23 9.23 0 014.906 1.404l-8.676 4.472-1.342.693 1.243.858.888.614-2.59 1.323-1.288.657 1.154.873 1.826 1.381zM8.536 22.78l-.625.658A10.95 10.95 0 015 15.995C5 9.932 9.935 5 16 5c2.493 0 4.796.834 6.643 2.237l-.902.465A10.04 10.04 0 0016 5.906c-5.565 0-10.093 4.526-10.093 10.089 0 2.61.996 4.991 2.63 6.784zM23.684 9.46l.628-.66A10.944 10.944 0 0127 15.995c0 6.062-4.935 10.994-11 10.994a10.941 10.941 0 01-6.253-1.954l.924-.477A10.036 10.036 0 0016 26.083c5.565 0 10.093-4.526 10.093-10.088 0-2.49-.907-4.772-2.409-6.534zM10.842 16.9l3.941-2.013-2.137-1.476 11.83-6.098-5.953 6.268 2.635 1.993-3.941 2.013 2.137 1.476-11.83 6.098 5.953-6.268-2.635-1.993z"
    }))));
  };

  var _default = SvgEtn;
  _exports["default"] = _default;
});