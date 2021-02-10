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
    global.Bradesco = mod.exports;
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

  var SvgBradesco = function SvgBradesco(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "bradesco_svg__a",
      d: "M.014.1h93.821v29.886H.015z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#F1F2F2",
      fillRule: "nonzero",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M108.951 43.307c-.042-.105-.055-.173-.073-.167-.033.01-.09.042-.134.058-.262.137-.73.328-1.383.326-1.25-.009-2.36-.945-2.36-2.46 0-1.65.925-2.548 2.183-2.547.698.001 1.185.173 1.643.478a6.284 6.284 0 011.037-2.067 5.912 5.912 0 00-.89-.508v.002A5.144 5.144 0 00106.89 36c-2.775 0-4.89 1.837-4.89 5.01 0 3.155 2.115 4.988 4.89 4.99a6.85 6.85 0 002.37-.425c.223-.085.586-.25.74-.32-.638-.847-.93-1.65-1.049-1.948m-62.757-4.771h1.175c1.048 0 2.13-.304 2.13-1.484 0-1.285-1.03-1.404-2.094-1.404h-1.21v2.888zm0 5.817h1.227c1.166 0 2.387-.203 2.387-1.627 0-1.523-1.253-1.664-2.352-1.664h-1.262v3.29zM43 33h5.796c2.231 0 3.896 1.143 3.896 3.549 0 1.766-.77 2.749-2.111 3.27v.04C52.177 40.24 53 41.242 53 42.95c0 3.348-2.523 4.05-4.67 4.05H43V33zm34.043 11.285c1.025 0 1.88-1.12 1.88-2.616 0-1.554-.753-2.673-1.88-2.673-1.196 0-1.863 1.179-1.863 2.535 0 1.634.7 2.754 1.863 2.754M82 46.763h-2.838v-1.539h-.034c-.6 1.137-1.75 1.776-3.06 1.776C73.418 47 72 44.48 72 41.455c0-2.52 1.35-5.176 3.813-5.176 1.23 0 2.271.374 3.058 1.555h.035V33H82v13.763m34.932-5.753c0-1.433-.562-2.695-1.932-2.695-1.367 0-1.928 1.262-1.928 2.695 0 1.412.56 2.677 1.928 2.677 1.37 0 1.932-1.265 1.932-2.677m-6.932 0c0-3.173 2.162-5.01 5-5.01 2.84 0 5 1.837 5 5.01 0 3.155-2.16 4.99-5 4.99-2.838 0-5-1.835-5-4.99m-41.997 1.737c-.402.653-1.07.99-1.901.99-.712 0-1.254-.386-1.254-1.046 0-.916.814-1.265 1.847-1.265.459 0 .917.037 1.308.053v1.268zM71 45.78c-.134-.755-.17-1.505-.17-2.257v-3.56c0-2.916-1.947-3.963-4.203-3.963-1.283 0-2.403.197-3.474.658v2.26c.849-.514 1.832-.716 2.816-.716 1.1 0 1.997.349 2.015 1.652-.39-.073-.93-.13-1.423-.13-1.627 0-4.561.35-4.561 3.267C62 45.064 63.562 46 65.305 46c1.156 0 2.15-.512 2.711-1.485v1.265H71zM60.162 36c-1.259 0-1.984.79-2.486 2.025h-.03v-1.8H55V46h2.904v-4.128c0-1.91.749-3.062 2.1-3.16.28-.02.747.062.996.158v-2.72a2.707 2.707 0 00-.838-.15m25.828 4.093c.066-1.1.582-1.999 1.66-1.999 1.196 0 1.662.899 1.662 1.999h-3.323zM92 41.358C92 38.515 90.84 36 87.635 36 84.944 36 83 37.837 83 40.99c0 3.156 2.177 5.01 5.03 5.01 1.114 0 2.21-.186 3.174-.606v-2.33a5.185 5.185 0 01-2.64.733c-1.462 0-2.376-.514-2.54-1.833H92v-.606z",
      fill: "#4D4E4C"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(6 24)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "bradesco_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#bradesco_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M90.296 11.548c-1.718 0-3.67.933-3.67 3.22 0 3.576 4.234 2.398 4.234 4.073 0 .684-.596.797-1.207.797-1.075 0-2.104-.341-2.794-.684v2.36c.785.319 1.703.611 2.96.611 1.95 0 4.016-.667 4.016-3.312 0-3.772-4.432-2.553-4.432-4.095 0-.551.73-.7 1.374-.686.684.018 1.748.301 2.377.74v-2.435a7.438 7.438 0 00-2.858-.59",
      fill: "#4D4E4C",
      mask: "url(#bradesco_svg__b)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.197 30H5.072S0 30 0 24.978V.1h25.125s5.072 0 5.072 5.022V30",
      fill: "#D11F3E",
      mask: "url(#bradesco_svg__b)"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFE",
      d: "M19 51h2v-8h-2zm3-1h2V40h-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.394 32.27s2.488-2.405 6.68-1.613c0 0 1.845.283 3.258 1.525 0 0 .21.195.372.036 0 0 .205-.16-.023-.398 0 0-1.216-1.668-3.614-2.404 0 0-3.298-1.168-6.685.41 0 0-2.085.853-3.24 3.18 0 0-1.648.529-2.884 1.213 0 0-.365.145-.226.424 0 0 .117.201.437.052 0 0 1.147-.39 2.253-.635 0 0-.889 2.281.04 5.114a8.25 8.25 0 002.32 3.575s.188.195.393.062c0 0 .177-.127.052-.335 0 0-.919-1.37-1.276-3.317-.298-1.586-.158-3.778.957-5.513 0 0 4.24-.587 7.856.76 0 0 6.143 1.982 4.595 5.658 0 0-.448 1.278-2.143 2.434 0 0-.284.163-.13.398 0 0 .129.182.418.064 0 0 2.597-.834 3.717-2.897 0 0 2.274-3.44-3.087-6.247 0 0-1.473-.78-3.367-1.197 0 0-3.415-.834-6.673-.35",
      fill: "#FFFFFE"
    }))));
  };

  var _default = SvgBradesco;
  _exports["default"] = _default;
});