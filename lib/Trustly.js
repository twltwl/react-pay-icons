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
    global.Trustly = mod.exports;
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

  var SvgTrustly = function SvgTrustly(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 40 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#0EE06E",
      d: "M0 0h40v26H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.18 20.523v-4.661H7.5V14.84h4.469v1.022h-1.681v4.661H9.181zM11.844 20.524v-4.129h1.027v.654c.267-.551.602-.654.96-.654h.403v1.034h-.352c-.522 0-.982.3-.982 1.215v1.874h-1.056v.006zM14.813 19.03v-2.629h1.057v2.38c0 .527.272.88.755.88.465 0 .812-.353.812-.875v-2.39h1.062v4.128h-1.022V20c-.267.415-.676.613-1.193.613-.869 0-1.47-.579-1.47-1.584zM19.056 19.354l.93-.21c.046.363.342.607.836.607.403 0 .636-.17.636-.391 0-.182-.108-.301-.5-.398l-.67-.153c-.784-.182-1.153-.551-1.153-1.238 0-.699.585-1.255 1.652-1.255 1.13 0 1.596.67 1.659 1.153l-.932.204c-.045-.255-.238-.528-.75-.528-.334 0-.584.153-.584.375 0 .193.148.3.375.358l.908.215c.71.17 1.05.585 1.05 1.193 0 .664-.539 1.317-1.686 1.317-1.249 0-1.715-.744-1.771-1.25zM24.694 20.524c-.71 0-1.159-.404-1.159-1.159v-2.05h-.687v-.92h.687v-.942l1.057-.301v1.243h.84v.92h-.84v1.868c0 .302.147.42.454.42h.46v.92h-.812zM26.193 20.523V14.84h1.056v5.683h-1.056zM30.747 16.395h1.135L30.14 22h-1.136l.483-1.476h-.573l-1.176-4.129h1.136l.897 3.248.977-3.248zM13.865 7.821h4.071V4.574l3.248 3.247-3.248 3.248v1.658h3.941V7.821H25.5V4H13.865v3.821z",
      fill: "#000"
    })));
  };

  var _default = SvgTrustly;
  _exports["default"] = _default;
});