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
    global.Bancontact = mod.exports;
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

  var SvgBancontact = function SvgBancontact(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 34.88V27.9h2.153c1.565 0 2.572.588 2.572 1.805 0 .688-.319 1.166-.767 1.445.648.3 1.027.878 1.027 1.665 0 1.406-1.027 2.064-2.622 2.064H6Zm1.386-4.078h1.026c.629 0 .898-.309.898-.877 0-.608-.489-.807-1.147-.807h-.777v1.684Zm0 2.861h.857c.837 0 1.326-.209 1.326-.867 0-.648-.419-.917-1.206-.917h-.977v1.784ZM13.672 35c-1.366 0-2.054-.668-2.054-1.565 0-.987.808-1.565 2.004-1.575.297.005.594.032.887.08v-.24c0-.608-.349-.897-1.017-.897a3.498 3.498 0 0 0-1.316.24l-.249-1.077c.429-.18 1.117-.3 1.725-.3 1.465 0 2.193.779 2.193 2.124v2.772c-.409.209-1.176.438-2.173.438Zm.837-1.126v-1.067a3.351 3.351 0 0 0-.708-.08c-.458 0-.817.18-.817.648 0 .419.299.638.827.638.24.008.48-.04.698-.14Zm2.305 1.007v-4.776a6.085 6.085 0 0 1 2.252-.438c1.456 0 2.293.718 2.293 2.043v3.17h-1.375v-3.07c0-.688-.32-1.007-.928-1.007a2.09 2.09 0 0 0-.877.18v3.898h-1.365Zm9.353-4.915-.26 1.087a3.036 3.036 0 0 0-1.126-.25c-.807 0-1.246.569-1.246 1.506 0 1.026.459 1.555 1.316 1.555.383-.01.76-.099 1.107-.26l.219 1.107c-.451.201-.942.3-1.436.29-1.654 0-2.611-1.028-2.611-2.653 0-1.614.947-2.681 2.532-2.681a3.84 3.84 0 0 1 1.505.299Zm2.972 5.034c-1.535 0-2.492-1.066-2.492-2.671 0-1.596.957-2.662 2.492-2.662 1.545 0 2.482 1.067 2.482 2.662 0 1.605-.937 2.671-2.482 2.671Zm0-1.136c.708 0 1.077-.588 1.077-1.535 0-.938-.37-1.526-1.077-1.526-.698 0-1.087.588-1.087 1.526 0 .947.39 1.535 1.087 1.535Zm3.278 1.017v-4.776a6.086 6.086 0 0 1 2.253-.438c1.456 0 2.293.718 2.293 2.043v3.17h-1.376v-3.07c0-.688-.319-1.007-.927-1.007a2.091 2.091 0 0 0-.877.18v3.898h-1.366Zm7.649.12c-1.187 0-1.795-.649-1.795-1.965v-2.153h-.678v-1.097h.678V28.68l1.376-.07v1.176h1.107v1.097h-1.107v2.133c0 .579.24.848.688.848.178 0 .355-.02.528-.06l.07 1.107a3.803 3.803 0 0 1-.867.09Zm3.472 0c-1.366 0-2.053-.669-2.053-1.566 0-.987.807-1.565 2.003-1.575.297.005.594.032.888.08v-.24c0-.608-.35-.897-1.017-.897a3.497 3.497 0 0 0-1.316.24l-.25-1.077c.43-.18 1.117-.3 1.725-.3 1.466 0 2.193.779 2.193 2.124v2.772c-.408.209-1.176.438-2.173.438Zm.838-1.127v-1.067a3.35 3.35 0 0 0-.708-.08c-.459 0-.818.18-.818.648 0 .419.3.638.828.638.24.008.479-.04.698-.14Zm6.042-3.908-.26 1.087a3.036 3.036 0 0 0-1.126-.25c-.807 0-1.246.569-1.246 1.506 0 1.026.459 1.555 1.316 1.555.383-.01.76-.099 1.107-.26l.22 1.107c-.452.201-.942.3-1.436.29-1.655 0-2.612-1.028-2.612-2.653 0-1.614.947-2.681 2.532-2.681a3.84 3.84 0 0 1 1.505.299Zm3.025 5.034c-1.186 0-1.795-.648-1.795-1.964v-2.153h-.678v-1.097h.678V28.68l1.376-.07v1.176h1.107v1.097h-1.107v2.133c0 .579.24.848.688.848.178 0 .355-.02.528-.06l.07 1.107a3.803 3.803 0 0 1-.867.09Z",
      fill: "#1E3764"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.596 24.412c7.28 0 10.92-4.853 14.56-9.706H6v9.706h9.596Z",
      fill: "url(#bancontact_svg__a)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44.714 5c-7.28 0-10.92 4.853-14.559 9.706H54.31V5h-9.596Z",
      fill: "url(#bancontact_svg__b)"
    }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "bancontact_svg__a",
      x1: 10.886,
      y1: 20.007,
      x2: 28.556,
      y2: 13.444,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#005AB9"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#1E3764"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "bancontact_svg__b",
      x1: 31.618,
      y1: 15.548,
      x2: 50.38,
      y2: 9.147,
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FBA900"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#FFD800"
    })))));
  };

  var _default = SvgBancontact;
  _exports["default"] = _default;
});