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
    global.ElavonTransparent = mod.exports;
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

  var SvgElavonTransparent = function SvgElavonTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      baseProfile: "tiny",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 500 500"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#231F20",
      d: "M32.511 347.875h77.473v-12.497H47.349v-38.576h57.947v-12.491H47.349v-35.462h62.161v-12.491H32.511v111.517zm92.694 0h13.277V236.357h-13.277v111.518zm82.059-28.114c0 7.341-7.202 18.271-24.676 18.271-8.121 0-15.605-3.121-15.605-11.866 0-9.844 7.497-12.965 16.242-14.526 8.901-1.56 18.901-1.717 24.051-5.468v13.59h-.012zm21.554 17.49a11.349 11.349 0 01-4.063.78c-4.202 0-4.202-2.809-4.202-9.058v-41.542c0-18.901-15.773-22.208-30.3-22.208-17.959 0-33.427 7.028-34.213 27.01h13.276c.601-11.873 8.902-15.306 20.15-15.306 8.434 0 17.959 1.873 17.959 13.434 0 9.993-12.497 9.057-27.179 11.872-13.745 2.653-27.335 6.561-27.335 24.832 0 16.086 12.005 22.646 26.711 22.646 11.242 0 21.086-3.907 28.427-12.497 0 8.745 4.37 12.497 11.242 12.497 4.202 0 7.203-.78 9.526-2.19v-10.27zm75.419-70.125h-13.901l-22.022 67.316h-.313l-22.652-67.316h-14.838l30.012 80.749h14.214l29.5-80.749zm3.848 40.455c0 23.583 13.59 42.173 39.201 42.173 25.612 0 39.201-18.607 39.201-42.173 0-23.739-13.589-42.328-39.201-42.328-25.611 0-39.201 18.607-39.201 42.328m14.058 0c0-19.681 11.248-30.611 25.144-30.611s25.145 10.931 25.145 30.611c0 19.526-11.249 30.457-25.145 30.457s-25.144-10.931-25.144-30.457m78.499 40.294h13.277v-45.617c0-14.526 7.803-25.301 23.895-25.301 10.15 0 16.398 6.405 16.398 16.243v54.669h13.277v-53.097c0-17.335-6.561-29.52-27.803-29.52-11.555 0-20.618 4.688-26.242 14.682h-.313v-12.809h-12.49v80.75z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#67B2E8",
      d: "M286.17 259.179c22.852-36.614 40.457-60.714 53.56-76.53-2.133.44-4.27.932-6.41 1.477-21.849 31.098-47.15 75.053-47.15 75.053z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#001970",
      d: "M386.439 173.813h-.072c.175 2.953.271 6.393.241 10.324a31.1 31.1 0 0110.203 6.314c10.372 9.951 16.633 30.186 4.052 68.925 0 0 3.602-4.718 7.977-19.982 7.185-25.059 8.254-59.596-22.401-65.581z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#67B2E8",
      d: "M386.362 173.795c-.235-4.045-.601-7.203-.943-9.43a52.254 52.254 0 00-1.687-6.807c-.99-3.001-2.533-4.862-3.438-5.474a4.435 4.435 0 00-2.048-.762l-10.762-1.075c-6.219-.162-16.087 10.769-16.087 10.769a165.995 165.995 0 00-11.656 14.231c2.677-.601 5.229-1.141 7.72-1.567 16.686-18.559 23.811-20.864 23.811-20.864 2.665 4.333 3.235 12.725 3.224 19.207 0 4.856-.342 8.644-.366 8.926v.03c-1.921 21.771-6.423 38.373-10.804 50.323-7.75 21.183-15.396 28.104-15.396 28.104 15.576-.079 24.651 7.011 24.651 7.011l.145-.462c10.948-37.215 13.732-64.382 13.877-81.873.046-3.894-.068-7.333-.241-10.287z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#001970",
      d: "M357.004 172.409c-3.175.318-6.309.72-9.543 1.272-2.491.426-5.043.937-7.72 1.567a197.886 197.886 0 00-23.181 7.203c-55.102 20.239-111.781 76.842-111.781 76.842s65.846-59.226 128.54-75.162a146.336 146.336 0 016.41-1.477 112.1 112.1 0 0121.255-2.431 89.216 89.216 0 0113.139.763c0-.288.354-4.076.366-8.925a106.246 106.246 0 00-17.485.348z"
    })));
  };

  var _default = SvgElavonTransparent;
  _exports["default"] = _default;
});