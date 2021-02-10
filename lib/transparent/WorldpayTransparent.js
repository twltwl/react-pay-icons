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
    global.WorldpayTransparent = mod.exports;
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

  var SvgWorldpayTransparent = function SvgWorldpayTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 43.16 43.16"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M41.819 18.889l-.1.308c-.117.393-.264.778-.396 1.166-.285.824-.571 1.648-.881 2.538-.053-.138-.084-.207-.106-.275l-1.267-3.735h-1.364c.067.215.119.375.177.529.555 1.481 1.061 2.984 1.684 4.437.354.822.076 1.441-.346 2.07-.293.439-.74.617-1.271.559a46.119 46.119 0 01-.479-.062c-.045.357-.084.681-.123 1 1.473.287 2.371-.133 3.039-1.389.071-.135.146-.27.199-.41.848-2.209 1.691-4.42 2.575-6.732l-1.341-.004zM9.044 16.81v-.003c-.49 1.976-.978 3.983-1.484 6.025-.577-2.054-1.128-4.063-1.679-6.025H4.463l-.083.287a523.325 523.325 0 01-.952 3.528c-.199.731-.392 1.466-.594 2.226a1118.95 1118.95 0 01-1.432-5.756l-.064-.284H0c.658 2.546 1.301 5.401 1.952 7.916l1.556-.002c.471-1.687.968-3.832 1.42-5.522.058-.216.098-.436.149-.666.459 1.669.903 3.296 1.354 4.923l.355 1.268h1.532l1.145-4.708c.272-1.043.545-2.134.824-3.207H9.044zm32.237-.003h.152v-1.03h.353v-.128h-.857v.128h.352zm.773-.496c.01-.175.021-.367.021-.511h.004c.031.137.077.285.132.45l.188.551h.113l.205-.561c.059-.16.104-.306.146-.439h.004c0 .142.011.338.019.499l.027.509h.148l-.072-1.157h-.191l-.205.56a4.205 4.205 0 00-.123.39h-.004a5.187 5.187 0 00-.117-.39l-.197-.56h-.189l-.081 1.157h.144l.028-.498zm-4.606 8.227c0-1.494.021-2.953-.014-4.411a1.225 1.225 0 00-.758-1.119c-1.18-.503-2.337-.284-3.515.108l.214.839c.656-.093 1.266-.234 1.876-.251.665-.019.983.364 1.021 1.032.015.26-.051.377-.348.392-.761.038-1.521.123-2.197.525-.78.465-1.072 1.297-.748 2.123.283.719 1.011 1.047 1.891.896.622-.106 1.066-.463 1.482-.997v.862l1.096.001zm-2.706-.786a.682.682 0 01-.651-.51c-.113-.386-.046-.795.344-.938.519-.19 1.08-.263 1.627-.364.057-.011.186.105.199.178.138.709-.653 1.629-1.519 1.634zm-17.446-3.968v-.918h-1.108v5.673h1.226c0-.875-.032-1.728.012-2.573.024-.461.099-.954.295-1.362.11-.228.375-.492.618-.593 0 0 .457-.185.658-.203v-1.077c-.799-.003-1.293.424-1.701 1.053zm8.433-.985c-.271-.018-.479-.027-.688-.047-1.438-.129-2.646.702-3.033 2.093a4.266 4.266 0 00-.013 2.297c.331 1.229 1.329 1.849 2.545 1.47.479-.146.881-.529 1.282-.783.022.832.022.832 1.077.701v-7.794h-1.172c.002.696.002 1.359.002 2.063zm.016 2.163c.021.003-.03 1.105-.189 1.621-.104.34-.357.682-.639.91a.972.972 0 01-1.553-.406c-.334-.871-.335-1.765.09-2.613.331-.663 1.447-.999 2.128-.667.082.04.147.187.156.288.021.287.007.578.007.867zm-5.866 3.579h1.162v-7.806h-1.162v7.806zm-6.31-5.735c-2.138-.422-3.793 1.073-3.604 3.25.154 1.774.977 2.62 2.637 2.665.872-.021 1.685-.312 2.229-1.104.816-1.185.828-2.455.241-3.729-.284-.62-.84-.952-1.503-1.082zm-.852 4.847c-.931 0-1.687-.863-1.687-1.926s.756-1.925 1.687-1.925c.932 0 1.688.862 1.688 1.925-.001 1.063-.757 1.926-1.688 1.926zm18.143-6.797c-.965-.129-1.961-.084-2.953-.084v7.77h1.236v-2.711c.723-.139 1.402-.182 2.019-.405 1.12-.41 1.659-1.417 1.556-2.669-.084-.99-.721-1.749-1.858-1.901zm.302 3.217c-.408.533-1.257.764-2.013.535v-2.829c.807-.043 1.588-.143 2.104.615.321.473.262 1.22-.091 1.679z"
    })));
  };

  var _default = SvgWorldpayTransparent;
  _exports["default"] = _default;
});