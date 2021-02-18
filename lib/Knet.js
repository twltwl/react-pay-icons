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
    global.Knet = mod.exports;
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

  var SvgKnet = function SvgKnet(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#0872B9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.919 9.322h-1.246v.773h1.246v-.773zM44.325 9.322H43.08v.773h1.246v-.773zM25.61 7.863h-.765V6.775h-1.538v1.088H12.194l-.134-.284 1.05-1.372V5.22h-1.515L9.93 7.398l.946 2.034h16.27V6.775H25.61v1.088zM27.037 5.34h-1.246v.772h1.246V5.34z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.333 5.576h-1.246v.773h1.246v-.773zM16.95 5.576h-1.246v.773h1.246v-.773zM49.507 6.46h-4.543l-.694-.585h4.827L48.6 5h-6.065l-.102.308 2.082 1.743h3.588v.457h-3.872l-1.317-1.096h-2.627V8.73h-4.322v-.947h3.644V6.412h-5.891v3.446h8.131v-1.83l.915.766h6.806l.955-.978v-.324L49.507 6.46zM31.549 7.193H28.67v1.254h2.879V7.193z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.792 24.078l-7.784-5.852 7.642-4.684H31.96l-6.704 4.1v-4.1h-9.551v10.536h9.55v-5.481l6.137 5.481h14.401z",
      fill: "#FFF200"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.803 33.487v-5.22h1.372v.622c.198-.252.426-.441.694-.567.269-.127.56-.19.892-.19.576 0 1.01.15 1.293.45.284.3.434.75.434 1.348v3.557h-1.396v-3.154c0-.379-.063-.64-.19-.805-.126-.157-.33-.236-.614-.236-.332 0-.592.094-.781.291-.19.198-.292.466-.292.805v3.1h-1.412zM31.083 31.84h1.396c-.142.551-.426.985-.851 1.293-.426.315-.947.465-1.562.465-.757 0-1.357-.252-1.798-.765-.442-.505-.663-1.199-.663-2.066 0-.852.221-1.53.655-2.02.434-.496 1.033-.74 1.79-.74.797 0 1.42.244 1.854.725.433.489.654 1.175.654 2.074v.22c0 .048-.008.095-.016.143h-3.486c.016.41.119.718.3.93.181.206.442.316.78.316.238 0 .435-.047.592-.142a.947.947 0 00.355-.434zm-2.034-1.578h2.058c-.016-.355-.11-.623-.284-.805-.173-.181-.426-.276-.75-.276-.307 0-.543.095-.717.276-.181.19-.284.458-.308.805zM46.423 34.134c-.126 0-.284.008-.457.016-.181.008-.292.016-.34.016-.535 0-.898-.103-1.095-.3-.198-.197-.292-.591-.292-1.183V29.86h-.694v-.978h.694v-1.428h1.38v1.428h.804v.977h-.804v2.895c0 .134.032.229.095.268.063.04.189.063.378.063h.34v1.05h-.009zM51.4 11.341H9v.82h42.4v-.82zM51.4 25.388H9v.82h42.4v-.82z",
      fill: "#fff"
    })));
  };

  var _default = SvgKnet;
  _exports["default"] = _default;
});