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
    global.Paysafecard = mod.exports;
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

  var SvgPaysafecard = function SvgPaysafecard(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#168CC7",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.465 20.077a1.38 1.38 0 01.281-.91c.106-.093.227-.168.358-.22.137-.06.286-.093.436-.095h1.71a1.044 1.044 0 011.149 1.18v2.4a.971.971 0 01-.34.718 1.119 1.119 0 01-.781.326H10.66v1.73H9.465v-5.13zm2.737.226a.254.254 0 00-.27-.28h-.931a.319.319 0 00-.34.344v1.595c.005.223.131.337.376.344h.854a.287.287 0 00.22-.095.224.224 0 00.091-.187v-1.72zM17.11 20.275c.006-.175-.101-.258-.322-.253H14.38v-1.17h2.711c.79.013 1.192.377 1.205 1.093v2.448c.003.284-.105.56-.3.767a1.036 1.036 0 01-.781.316h-1.639c-.798-.007-1.203-.354-1.215-1.043v-.944c.006-.72.392-1.087 1.158-1.1h1.59v-.114zm-1.553 1.853c0 .07.036.137.096.174.06.053.137.082.217.079h.918c.208 0 .316-.084.322-.253v-.356c0-.194-.11-.293-.33-.293h-.91a.393.393 0 00-.249.06.417.417 0 00-.064.272v.317zM21.654 24.037a.397.397 0 00.244-.096.24.24 0 00.096-.188v-.277h-1.53a1.298 1.298 0 01-.48-.073 1.11 1.11 0 01-.377-.242 1.142 1.142 0 01-.34-.855v-3.454h1.196v3.083c0 .247.106.37.32.37h.845a.383.383 0 00.26-.095.239.239 0 00.106-.193v-3.165h1.186v5.095c.01.33-.098.65-.304.908a1.05 1.05 0 01-.817.352h-2.791v-1.17h2.386M24.119 22.306h2.13c.196-.007.297-.08.303-.223v-.106a.224.224 0 00-.029-.1.205.205 0 00-.175-.132h-1.056c-.298 0-.584-.11-.806-.308a.867.867 0 01-.351-.673v-.872c.012-.681.4-1.027 1.166-1.04h2.47v1.17h-2.093c-.246 0-.37.072-.37.215v.113c0 .149.127.223.38.223h1.052a1.06 1.06 0 011.032 1.025v.854c-.023.274-.146.53-.347.718a.96.96 0 01-.333.243 1.426 1.426 0 01-.473.063h-2.5v-1.17M31.372 20.275c.005-.175-.102-.258-.323-.253H28.64v-1.17h2.712c.79.013 1.19.377 1.203 1.093v2.448c.003.284-.104.56-.299.767a1.031 1.031 0 01-.78.316h-1.64c-.798-.007-1.202-.354-1.214-1.043v-.944c.005-.72.391-1.087 1.157-1.1h1.592v-.114zm-1.554 1.853a.2.2 0 00.097.174.304.304 0 00.216.079h.92c.207 0 .314-.084.32-.253v-.356c0-.194-.11-.293-.33-.293h-.91a.39.39 0 00-.248.06.415.415 0 00-.065.272v.317zM33.528 18.19a.95.95 0 01.369-.76 1.42 1.42 0 01.915-.298h.76v1.13h-.46c-.253.005-.382.12-.388.343v.248h.848v1.17h-.848v3.453h-1.196V18.19M37.492 21.907v.073a.307.307 0 00.078.222.171.171 0 00.155.104h2.456v1.17H37.57a1.889 1.889 0 01-.556-.064 1.019 1.019 0 01-.385-.22.973.973 0 01-.266-.38 1.61 1.61 0 01-.073-.539l-.01-2.34c.013-.708.4-1.068 1.163-1.08h1.612a1.016 1.016 0 011.134 1.119v.925l-2.697 1.01zm1.48-1.614v-.032a.223.223 0 00-.077-.175.324.324 0 00-.205-.064h-.833a.345.345 0 00-.26.102.3.3 0 00-.124.249v.55l1.5-.63zM42.72 23.476a2.61 2.61 0 01-.496-.045 1.073 1.073 0 01-.813-.668 1.52 1.52 0 01-.098-.565v-2.183a1.36 1.36 0 01.056-.47.972.972 0 01.253-.397c.126-.126.28-.219.45-.272.168-.038.34-.056.512-.054h1.833v.274h-1.79a1.308 1.308 0 00-.747.185.805.805 0 00-.28.696v2.185c0 .152.024.303.073.447a.908.908 0 00.254.375.977.977 0 00.387.177c.14.028.28.042.423.041h1.708v.274h-1.724M49.416 22.216c0 .157-.012.312-.038.466a1.036 1.036 0 01-.239.426c-.245.249-.584.383-.933.368h-1.429a1.299 1.299 0 01-.905-.316 1.09 1.09 0 01-.359-.867v-.703a1.115 1.115 0 011.246-1.22h2.38v-.308a1.034 1.034 0 00-.23-.667.72.72 0 00-.344-.25 1.848 1.848 0 00-.447-.05h-2.596v-.273h2.461c.205-.001.41.014.613.045a.729.729 0 01.26.104.828.828 0 01.236.212c.218.262.333.595.324.936v2.097zm-.286-1.573h-2.402a.94.94 0 00-.676.254.914.914 0 00-.25.682v.697c-.002.125.013.249.044.37a.573.573 0 00.225.311c.195.159.438.245.689.245h1.456a.815.815 0 00.914-.917v-1.642zM52.103 19.096a.894.894 0 00-.983 1.04v3.34h-.286v-3.34a1.151 1.151 0 011.315-1.314h.318v.274h-.364M57.229 22.182c-.025.882-.515 1.314-1.47 1.296h-1.061a3.076 3.076 0 01-.602-.054 1.152 1.152 0 01-.526-.317 1.036 1.036 0 01-.24-.452 1.642 1.642 0 01-.056-.51v-1.988c.012-.895.486-1.34 1.422-1.333h2.247v-1.51h.286v4.868zm-.286-3.085h-2.265a1.812 1.812 0 00-.441.05.785.785 0 00-.396.24.802.802 0 00-.226.352 1.132 1.132 0 00-.054.425v2.13a.77.77 0 00.326.724c.112.062.233.108.359.136.144.034.293.051.441.05h.99c.32.014.637-.071.906-.245a.902.902 0 00.36-.795v-3.067z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.823 18.677c.09-.04.185-.07.282-.09a1.797 1.797 0 011.777-1.373 1.798 1.798 0 011.778 1.374c.246.038.476.144.664.306.008-.145.001-.29-.018-.433a2.396 2.396 0 00-2.427-2.116 2.39 2.39 0 00-2.433 2.226c-.008.111-.01.223-.006.334a1.56 1.56 0 01.383-.228",
      fill: "#E3001B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.305 18.852h-2.92c-.15.002-.3.034-.437.095a1.215 1.215 0 00-.358.22 1.38 1.38 0 00-.28.91v2.174c-.018.327.081.649.28.909a1.2 1.2 0 00.358.222c.138.06.286.092.436.094h2.921a1.045 1.045 0 001.15-1.18v-2.265a1.044 1.044 0 00-1.15-1.179",
      fill: "#E3001B"
    })))));
  };

  var _default = SvgPaysafecard;
  _exports["default"] = _default;
});