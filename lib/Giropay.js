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
    global.Giropay = mod.exports;
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

  var SvgGiropay = function SvgGiropay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M-1 .002h61.462V40H-1z",
      fill: "#22225F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48.42 25.278c.424.09.856.136 1.29.136 1.903 0 2.352-1.428 2.94-2.901l2.203-5.453h-2.076l-1.234 3.822h-.023L50.23 17.06h-2.236l2.432 5.992a1.05 1.05 0 0 1-1.05.81 2.55 2.55 0 0 1-.818-.124l-.138 1.54Zm-.934-2.36a7.04 7.04 0 0 1-.115-1.383v-2.182c0-1.787-1.325-2.429-2.859-2.429a6.341 6.341 0 0 0-2.398.417l.036 1.372a3.972 3.972 0 0 1 1.913-.44c.748 0 1.36.215 1.372 1.013a6.203 6.203 0 0 0-.97-.08c-1.105 0-3.1.215-3.1 2.002 0 1.271 1.06 1.844 2.248 1.844a2.069 2.069 0 0 0 1.902-1.057h.023c0 .305.034.607.047.922h1.9ZM43.3 21.061c0-.562.553-.775 1.257-.775.311 0 .612.022.877.034a1.332 1.332 0 0 1-1.28 1.383c-.485 0-.854-.236-.854-.642Zm-9.577 4.216h2.074v-3.182h.023a2.102 2.102 0 0 0 1.904.956 2.823 2.823 0 0 0 2.743-3.17 2.755 2.755 0 0 0-2.571-2.958 2.382 2.382 0 0 0-2.237 1.193h-.023V17.06h-1.913v8.218Zm4.6-5.351c0 .933-.473 1.574-1.257 1.574a1.385 1.385 0 0 1-1.27-1.496 1.36 1.36 0 0 1 1.27-1.529 1.307 1.307 0 0 1 1.257 1.45ZM4.68 12.672v14.656a2.654 2.654 0 0 0 2.694 2.612h24.595V10.06H7.374a2.654 2.654 0 0 0-2.694 2.612Z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.114 23.052a3.09 3.09 0 1 0 0-6.128 3.09 3.09 0 1 0 0 6.128Zm0-1.416c-.956 0-1.348-.776-1.348-1.641 0-.878.392-1.653 1.348-1.653.958 0 1.35.775 1.35 1.653 0 .865-.392 1.64-1.35 1.64Zm-3.573-4.644a4.594 4.594 0 0 0-.702-.068 1.852 1.852 0 0 0-1.776 1.215h-.023V17.06h-1.89v5.857h2.074v-2.472c0-1.148.543-1.833 1.51-1.833.237-.012.474.01.704.066l.103-1.686Zm-7.852 5.925h2.074V17.06H15.69v5.857Zm-.001-6.813h2.075V14.62h-2.075v1.484Zm-1.432.956h-1.88v1.057h-.02a2.358 2.358 0 0 0-2.042-1.193c-1.868 0-2.71 1.306-2.71 3.048a2.658 2.658 0 0 0 2.674 2.945 2.36 2.36 0 0 0 2.018-1h.023v.315c0 1.146-.645 1.697-1.843 1.697a4.213 4.213 0 0 1-2.03-.483l-.103 1.597c.739.248 1.514.374 2.294.371 2.421 0 3.62-.776 3.62-3.182V17.06ZM9.748 19.94c0-.799.404-1.463 1.177-1.463a1.294 1.294 0 0 1 1.325 1.383 1.38 1.38 0 0 1-1.325 1.506 1.263 1.263 0 0 1-1.177-1.426Z",
      fill: "#EC2024"
    }))));
  };

  var _default = SvgGiropay;
  _exports["default"] = _default;
});