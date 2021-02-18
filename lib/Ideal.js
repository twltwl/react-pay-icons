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
    global.Ideal = mod.exports;
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

  var SvgIdeal = function SvgIdeal(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#F3F6F9"
    }), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#ideal_svg__clip0)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 6.372v27.256A2.38 2.38 0 0014.372 36h16.285c12.311 0 17.648-6.891 17.648-16.036C48.305 10.867 42.968 4 30.657 4H14.372A2.38 2.38 0 0012 6.372z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.9 10.69v20.139h8.765c7.958 0 11.41-4.495 11.41-10.853 0-6.084-3.452-10.805-11.41-10.805h-7.247c-.842 0-1.518.688-1.518 1.518z",
      fill: "#C06"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.657 33.83H16.495a2.278 2.278 0 01-2.277-2.278V8.46a2.278 2.278 0 012.277-2.278h14.162c13.438 0 15.442 8.647 15.442 13.794 0 8.931-5.491 13.854-15.442 13.854zM16.495 6.94c-.842 0-1.518.677-1.518 1.519v23.092c0 .842.676 1.518 1.518 1.518h14.162c9.465 0 14.683-4.649 14.683-13.094 0-11.338-9.204-13.035-14.683-13.035H16.495z",
      fill: "#000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.984 17.26a2.6 2.6 0 01.865.142c.273.095.499.25.7.44.19.201.344.45.463.735.107.296.166.64.166 1.043 0 .356-.047.677-.13.973a2.27 2.27 0 01-.404.771 1.96 1.96 0 01-.676.51 2.39 2.39 0 01-.96.19h-2.076v-4.816h2.052v.012zm-.072 3.926c.155 0 .297-.024.451-.071a.884.884 0 00.38-.25c.107-.118.201-.26.273-.45.07-.19.106-.403.106-.676 0-.237-.023-.463-.07-.652a1.295 1.295 0 00-.238-.498 1.069 1.069 0 00-.427-.32 1.748 1.748 0 00-.652-.107h-.76v3.036h.938v-.012zM32.46 17.26v.89H29.92v1.032h2.337V20h-2.337v1.174h2.598v.89h-3.653v-4.816h3.594v.012zM36.089 17.26l1.803 4.816h-1.103l-.368-1.068h-1.803l-.38 1.068h-1.067l1.815-4.816h1.103zm.06 2.953l-.606-1.767h-.011l-.63 1.767h1.246zM39.612 17.26v3.926h2.348v.89h-3.404V17.26h1.056z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.939 21.886a2.218 2.218 0 100-4.436 2.218 2.218 0 000 4.436zM20.61 30.829a3.353 3.353 0 01-3.356-3.357v-2.621a1.683 1.683 0 113.368 0v5.978h-.011z",
      fill: "#000"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "ideal_svg__clip0"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      transform: "translate(12 4)",
      d: "M0 0h36.305v32H0z"
    })))));
  };

  var _default = SvgIdeal;
  _exports["default"] = _default;
});