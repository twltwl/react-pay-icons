function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.Bb = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgBb = function SvgBb(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#FFF101",
      fillRule: "nonzero",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 44.056l1.459-.973 1.458.973L12 46v-1.944zm14-10.112l-1.458.972-1.458-.972L26 32v1.944zm0 7.39L19 46l-7-4.667 8.312-5.541 1.459.971-6.708 4.473 4.083 2.722 1.896-1.264-1.459-.971 3.5-2.334L26 41.333zm-14-4.667L19 32l7 4.667-8.312 5.541-1.459-.972 6.708-4.473-4.083-2.721-1.896 1.264 1.459.971-3.5 2.334L12 36.667zm18 4.334v2.793h3.903c.936 0 3.26-.094 3.26-2.266 0-.185-.01-.361-.033-.527h-2.424c.013.084.018.173.018.267 0 1.198-1.106 1.21-1.597 1.21h-.723V41H30zm8.17 0l-.954 2.793h1.963l.49-1.553h2.106l.48 1.553h2.081l-.934-2.793H41.42l.045.161h-1.508l.04-.16H38.17zm6.627 2.793h1.685v-2.793h-1.685v2.793zm2.56-2.793l1.298 2.793h2.343v-2.793h-1.687v.315l-.147-.315h-1.806zm4.643 0c.022 1.75.27 2.998 2.966 2.998 1.724 0 2.732-.613 2.732-2.525h-1.962c-.025.565-.035 1.456-.77 1.456-.737 0-.918-.353-.951-1.93H52zm6.089 0c.042 1.604.374 2.999 3.033 2.999s2.991-1.395 3.033-2.998h-2.037c-.038 1.338-.228 1.928-.996 1.928s-.96-.59-.996-1.93l-2.037.001zm8.231 0v2.793h2.967c2.506 0 2.862-1.603 2.905-2.792h-2.014c-.058 1.235-.312 1.723-1.124 1.723h-.755V41H66.32zm6.619 0c.04 1.601.366 2.999 3.035 2.999s2.995-1.398 3.035-3l-2.038.001c-.037 1.343-.227 1.934-.997 1.934-.771 0-.96-.591-.997-1.934h-2.038zm8.13 0v2.795h3.903c.936 0 3.26-.095 3.26-2.266 0-.186-.01-.362-.033-.529H85.81c.011.089.016.181.016.28 0 1.197-.9 1.21-1.3 1.21h-1.05V41h-2.407zm7.82 2.792h2.037v-2.792H88.89v2.792zm2.87-2.792l1.352 2.792h3.257l.49-1.554h2.106l.48 1.554 4.73.001c1.307 0 2.631-.156 2.631-1.972 0-.323-.08-.592-.217-.82h-2.947c.605.256 1.074.518 1.074.933 0 .476-.284.796-.864.796h-2.683l-.578-1.73h-1.982l.046.165h-1.509l.042-.165h-1.843l-.746 2.163L93.508 41h-1.75zm15.783 2.793h1.987v-2.793h-1.987v2.793zm3.153-2.793v2.793H115v-1.06h-2.318v-1.733h-1.987z",
      fill: "#005795"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.384 41v-.98l.475-.014h.304c1.014 0 1.42.37 1.505.993h2.403c-.123-.924-.617-1.552-1.924-1.708 1.19-.222 1.784-.962 1.784-1.985 0-1.9-1.378-2.306-3.045-2.306H30v6h2.384zm7.53 0l.673-2.815.74 2.814h1.965l-1.4-4.384h-2.361l-1.429 4.384h1.813zm6.433 0v-1.958L47.215 41h1.79l-1.95-4.384h-2.38V41h1.672zm2.804 0h1.673v-4.385h-1.673v4.384zm4.47 0a41.571 41.571 0 01-.006-.723c0-2.336.19-2.729.911-2.729.52 0 .752.37.752 1.36h1.935c.072-1.597-.87-2.471-2.735-2.471-2.777 0-2.858 1.66-2.858 3.84 0 .247 0 .488.002.72l1.999.002zm6.256 0a25.463 25.463 0 01-.009-.723c0-1.905.115-2.729.997-2.729s.997.824.997 2.729c0 .26-.002.5-.009.721l2.02.001c.006-.237.006-.48.006-.722 0-1.967 0-3.84-3.014-3.84s-3.014 1.873-3.014 3.84c0 .243 0 .485.006.723h2.02zm8.106 0v-3.272h.8c1.078 0 1.078 1.185 1.078 2.532 0 .27-.005.516-.014.738l1.997.001c.01-.299.003-.573.003-.792 0-2.278-.443-3.615-2.812-3.615h-3.014V41h1.962zm6.623 0a27.086 27.086 0 01-.008-.707c0-1.896.115-2.717.997-2.717s.997.82.997 2.717c0 .255-.002.49-.008.706h2.021c.005-.233.005-.47.005-.706 0-1.958 0-3.824-3.015-3.824-3.016 0-3.016 1.866-3.016 3.824 0 .237 0 .473.006.705l2.02.001zm8.428 0v-.966l.6-.015h.492c.82 0 1.152.365 1.224.981h2.37c-.124-.924-.618-1.552-1.925-1.708 1.189-.222 1.783-.962 1.783-1.985 0-1.899-1.377-2.306-3.044-2.306h-3.886v5.998h2.386zm7.39 0v-3.265h.67c.569 0 1.063.39 1.063 1.107 0 .607-.323 1.106-.842 1.074l-.562.008.496 1.075h1.736l-.29-.603c1.005-.176 1.404-.775 1.407-1.874.004-1.241-.783-1.908-2.005-1.908h-3.693V41h2.02zm6.21 0l.67-2.81.738 2.81h1.966l-1.399-4.386h-2.361L94.805 41h1.828zm9.323 0c-.74-1.297-3.142-1.322-3.142-2.492 0-.504.327-.777.88-.777h1.796V36.61h-2.524c-2.074 0-2.587.881-2.587 2.022 0 1.403 1.555 1.877 2.653 2.367l2.924.001zm.946 0h1.97v-4.385h-1.97v4.384zm3.127 0H112v-4.385h-1.97v4.384zm-77.646-2.356v-2.276h.855c.776 0 1.324.481 1.324 1.135 0 .863-.7 1.134-1.203 1.134h-.8l-.176.007zm50.65.014v-2.276h1.154c.633 0 1.078.481 1.078 1.135 0 .862-.57 1.134-.979 1.134h-.652l-.6.007z",
      fill: "#005795"
    }))));
  };

  var _default = SvgBb;
  _exports["default"] = _default;
});