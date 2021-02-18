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
    global.Multibanco = mod.exports;
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

  var SvgMultibanco = function SvgMultibanco(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#236BB4",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M30.897 29.828h10.636c2.429 0 2.453-2.583 2.206-3.858a.919.919 0 00-1.751 0v.995a.829.829 0 01-.827.826H20.77a.829.829 0 01-.826-.826v-.995a.919.919 0 00-1.751 0c-.248 1.275-.224 3.858 2.205 3.858h10.5zm-7.52-24.74h16.4a2.165 2.165 0 012.095 2.219v1.06a1.02 1.02 0 11-2.029.01v-.58c0-.369-.3-.668-.67-.669H22.74a.671.671 0 00-.67.67v.567a.975.975 0 11-1.933.032v-1.09a2.166 2.166 0 012.095-2.219h1.146zM41.459 17.275a3.245 3.245 0 011.92 2.905 3.371 3.371 0 01-3.465 3.249h-5.34a.884.884 0 01-.91-.852V12.41c.002-.492.401-.89.893-.891h4.449a3.398 3.398 0 012.452 5.757m-3.986-.828h1.696v-.02a1.62 1.62 0 001.368-1.594 1.618 1.618 0 00-1.612-1.614h-3.416v8.438h4.332a1.666 1.666 0 100-3.333h-.672v-.004h-1.696a.937.937 0 010-1.873M24.055 32.95a.286.286 0 11.573 0v1.55h-.001a1.288 1.288 0 01-1.285 1.285v.002h-.001v-.002a1.288 1.288 0 01-1.285-1.285h-.002v-1.55a.286.286 0 11.573 0v1.55c.002.394.32.712.714.714h.001a.719.719 0 00.714-.715v-1.55zM26.762 35.214a.287.287 0 010 .573h-.791v-.001a1.077 1.077 0 01-1.076-1.076v-1.76a.286.286 0 11.572 0v1.76h-.001a.508.508 0 00.505.505v-.001h.79zM32.816 22.413a1.072 1.072 0 11-2.131.227l-.878-8.086-3.11 7.906-.004.007v.001l-.009.021-.007.017-.001.004-.008.016-.004.01-.008.016-.003.007-.009.016-.003.006c-.056.106-.13.201-.217.283l-.003.003-.016.014a1.06 1.06 0 01-.185.132l-.005.002-.02.011h-.001l-.019.01-.009.005-.012.006-.012.005-.012.006-.013.005-.012.005-.01.005-.01.004-.006.002-.01.003-.014.006-.008.002a1.067 1.067 0 01-.314.06h-.078a1.067 1.067 0 01-.35-.073l-.015-.006-.004-.002-.014-.005-.014-.007-.011-.005-.012-.005-.013-.006-.008-.004-.02-.01-.001-.001-.017-.01-.01-.005a1.069 1.069 0 01-.163-.113l-.004-.004-.035-.031h-.001l-.027-.027-.026-.026v-.001l-.032-.036-.003-.004a1.067 1.067 0 01-.114-.164l-.005-.009-.01-.017v-.002l-.01-.02-.004-.007-.006-.012-.006-.013-.005-.01-.006-.015-.006-.014-.001-.003-.006-.015-3.114-7.914-.878 8.086a1.072 1.072 0 11-2.132-.227l1.036-9.533v-.007a1.785 1.785 0 011.531-1.566h.002l.059-.007c.09-.01.18-.012.27-.008h.004a1.76 1.76 0 011.57 1.121l2.65 6.736 2.65-6.736a1.76 1.76 0 011.57-1.12h.005c.09-.005.18-.002.27.007l.058.007h.002a1.776 1.776 0 011.532 1.566v.007l1.035 9.533zM21.948 35.467a.286.286 0 11-.568.067l-.246-2.064-.875 2.03a.286.286 0 01-.525 0l-.875-2.03-.246 2.064a.286.286 0 11-.568-.067l.285-2.397a.46.46 0 01.306-.38l.022-.008a.505.505 0 01.084-.018h.005a.494.494 0 01.458.193.472.472 0 01.034.054l.016.032.741 1.721.742-1.721a.47.47 0 01.42-.283.562.562 0 01.062 0h.002l.02.002h.003v.001h.001c.148.018.28.102.357.23.025.042.043.089.053.137l.007.038v.002l.285 2.397zM28.013 35.5a.286.286 0 11-.573 0v-2.264h-.814a.287.287 0 110-.573h2.202a.287.287 0 010 .573h-.815V35.5zM29.821 35.5a.297.297 0 01-.594 0v-2.55a.297.297 0 01.594 0v2.55zM35.675 35.465a.286.286 0 11-.568.07l-.101-.81h-.993a.287.287 0 010-.573h.922l-.027-.21v-.002l-.002-.02a1.056 1.056 0 00-.092-.298.649.649 0 00-.579-.386h-.003v-.001a.61.61 0 00-.272.065.803.803 0 00-.398.639l-.18 1.592a.286.286 0 11-.568-.062l.18-1.593c.039-.458.304-.865.707-1.087a1.147 1.147 0 01.531-.125v-.001h.003c.47.002.894.277 1.09.704a1.51 1.51 0 01.146.476l.005.027v.002l.199 1.593zM36.552 35.5a.286.286 0 11-.573 0v-2.37a.401.401 0 01.027-.141v-.002a.479.479 0 01.023-.051v-.001a.404.404 0 01.224-.188l.039-.011.03-.006h.003v-.001a.418.418 0 01.068-.004h.008c.119.005.23.062.302.156l1.525 1.945v-1.877a.286.286 0 01.573 0v2.36a.403.403 0 01-.208.353l-.036.017-.003.002-.024.01h-.004a.4.4 0 01-.307-.017l-.037-.02a.405.405 0 01-.093-.08l-.01-.011v-.001l-.003-.004-1.524-1.945V35.5zM41.025 35.214a.287.287 0 010 .573h-.844v-.001a1.132 1.132 0 01-1.13-1.13v-.863a1.131 1.131 0 011.13-1.13h.844a.287.287 0 010 .573h-.845v-.001a.561.561 0 00-.557.558v.863c.002.308.25.556.558.559v-.001h.844zM42.682 33.235h-.001a.781.781 0 00-.542.216.703.703 0 00-.221.506h.001v.535h-.001a.703.703 0 00.22.506c.147.14.341.217.543.217v-.001h.001a.78.78 0 00.543-.216.702.702 0 00.22-.506v-.535a.703.703 0 00-.22-.506.783.783 0 00-.543-.216zm0-.572c.35 0 .686.135.939.376.251.24.394.571.395.918h.001v.535a1.272 1.272 0 01-.396.918 1.353 1.353 0 01-.939.376c-.35 0-.687-.134-.94-.376a1.272 1.272 0 01-.395-.918v-.535c.001-.347.144-.679.396-.918.253-.241.589-.376.938-.375v-.001zM30.613 33.236v1.978h1.107a.363.363 0 00.36-.36h-.001v-.001a.358.358 0 00-.095-.243l-.01-.01a.359.359 0 00-.255-.108v.001h-.38a.287.287 0 010-.573h.13a.344.344 0 00.215-.1h.001c.064-.064.1-.151.1-.242a.346.346 0 00-.342-.343h-.83zm-.573.97v-1.245a.295.295 0 01.09-.212l.003-.003a.295.295 0 01.188-.082h.017v-.001h1.105c.504.002.912.41.913.914h.002v.001h-.002a.91.91 0 01-.14.486c.058.038.113.081.162.13l.018.02a.928.928 0 01.254.639h.002-.002c0 .515-.416.932-.93.933h-1.394a.287.287 0 01-.286-.286v-1.293z"
    })))));
  };

  var _default = SvgMultibanco;
  _exports["default"] = _default;
});