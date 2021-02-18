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
    global.AtmMomo = mod.exports;
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

  var SvgAtmMomo = function SvgAtmMomo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "atm_momo_svg__a",
      d: "M.152.244h14.384V13.95H.152z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "atm_momo_svg__c",
      d: "M.388.244H11.23V13.95H.39z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#AE2070",
      d: "M0 39.998h60V22H0z"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(9.86 4.16)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "atm_momo_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#atm_momo_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M7.238 4.232L5.573 8.49h3.35L7.237 4.23zM6.076.244h2.497l5.963 13.706H11.13l-1.181-2.904H4.624L3.482 13.95H.152L6.076.244z",
      fill: "#4B7FD1",
      mask: "url(#atm_momo_svg__b)"
    })), /*#__PURE__*/React.createElement("g", {
      transform: "translate(22.342 4.16)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "atm_momo_svg__d",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#atm_momo_svg__c"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#4B7FD1",
      mask: "url(#atm_momo_svg__d)",
      d: "M4.299 2.915H.389V.244h10.84v2.671H7.32V13.95h-3.02z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#4B7FD1",
      d: "M35.101 4.403h4.569l3.155 8.944h.04l3.174-8.944h4.55v13.706h-3.02V7.597h-.04l-3.6 10.512h-2.304L38.16 7.597h-.04V18.11h-3.019z"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M53.745 26.149c-.698 0-1.266.567-1.266 1.266 0 .698.568 1.266 1.266 1.266.699 0 1.267-.568 1.267-1.266 0-.699-.568-1.266-1.267-1.266m0 4.438a3.177 3.177 0 01-3.172-3.172 3.176 3.176 0 013.172-3.173 3.176 3.176 0 013.173 3.173 3.176 3.176 0 01-3.173 3.172M53.745 33.546c-.698 0-1.266.568-1.266 1.266 0 .698.568 1.266 1.266 1.266.699 0 1.267-.568 1.267-1.266 0-.698-.568-1.266-1.267-1.266m0 4.438a3.177 3.177 0 01-3.172-3.172 3.176 3.176 0 013.172-3.173 3.176 3.176 0 013.173 3.173 3.176 3.176 0 01-3.173 3.172M47.601 24.242c-.545 0-1.05.183-1.454.49a2.393 2.393 0 00-1.454-.49 2.41 2.41 0 00-2.408 2.407v3.939h1.907v-3.939a.502.502 0 011.002 0v3.939H47.1v-3.939a.501.501 0 011.002 0v3.939h1.907v-3.939a2.41 2.41 0 00-2.408-2.407M47.601 31.64c-.545 0-1.05.182-1.454.49a2.393 2.393 0 00-1.454-.49 2.41 2.41 0 00-2.408 2.407v3.938h1.907v-3.938a.502.502 0 011.002 0v3.938H47.1v-3.938a.502.502 0 011.002 0v3.938h1.907v-3.938a2.41 2.41 0 00-2.408-2.408M18.012 28.317c0 .441-.088.77-.262.977-.174.206-.377.307-.62.307a.763.763 0 01-.607-.297c-.168-.199-.254-.515-.254-.939 0-.424.092-.75.273-.97.18-.22.381-.326.613-.326.235 0 .431.1.601.306.17.205.256.522.256.942m-.005-1.568a1.403 1.403 0 00-.797-.233c-.23 0-.43.046-.592.136-.125.07-.24.166-.345.289v-.347h-.627v4.81h.678v-1.577c.086.086.187.16.303.221.16.085.342.128.541.128a1.474 1.474 0 001.343-.894c.127-.284.192-.608.192-.961 0-.33-.059-.639-.174-.916a1.429 1.429 0 00-.522-.656M20.73 29.6a.86.86 0 01-.68-.308c-.181-.206-.273-.525-.273-.946 0-.421.092-.74.273-.945a.862.862 0 01.68-.306.87.87 0 01.676.308c.182.207.274.518.274.924 0 .432-.092.756-.273.964a.854.854 0 01-.677.31m0-3.085a1.64 1.64 0 00-1.104.391c-.36.312-.543.796-.543 1.44 0 .585.153 1.041.455 1.355.303.314.704.474 1.192.474.304 0 .589-.072.847-.215.258-.143.458-.347.594-.606.134-.257.203-.613.203-1.057 0-.551-.155-.991-.46-1.306-.306-.316-.704-.476-1.184-.476M25.92 29.082l-.644-2.489h-.67l-.552 2.033-.13.515-.703-2.548h-.703l1.073 3.506h.678l.647-2.458.087.381.552 2.077h.675l1.096-3.506h-.668l-.738 2.49zM28.232 27.969a.99.99 0 01.28-.626.86.86 0 01.634-.251c.279 0 .5.103.676.315.105.125.172.314.201.562h-1.79zm.907-1.452c-.482 0-.88.165-1.184.49-.303.324-.456.785-.456 1.368 0 .564.152 1.01.451 1.325.3.316.711.476 1.221.476.405 0 .743-.101 1.005-.3a1.51 1.51 0 00.541-.837l.015-.056-.694-.086-.013.038c-.084.233-.198.404-.339.509a.835.835 0 01-.511.157.903.903 0 01-.676-.283c-.172-.18-.272-.44-.3-.774h2.534l.002-.049.003-.155c0-.573-.15-1.024-.446-1.343-.297-.319-.685-.48-1.153-.48zM32.643 26.516a.693.693 0 00-.398.125 1.127 1.127 0 00-.289.333v-.38h-.62v3.505h.678v-1.833c0-.237.032-.46.094-.658a.572.572 0 01.197-.291c.196-.148.457-.133.707.014l.052.031.234-.63-.035-.022a1.185 1.185 0 00-.62-.194M34.07 27.969a.99.99 0 01.28-.626.86.86 0 01.634-.251c.28 0 .5.103.676.315.105.125.173.314.201.562h-1.79zm1.944 1.908c.263-.198.445-.48.542-.838l.015-.056-.694-.086-.013.038c-.085.233-.199.404-.34.509a.835.835 0 01-.511.157.903.903 0 01-.676-.283c-.172-.18-.272-.44-.3-.774h2.534l.002-.049c.003-.069.003-.12.003-.155 0-.573-.15-1.025-.446-1.343-.297-.319-.685-.48-1.153-.48-.482 0-.88.165-1.184.49-.302.324-.456.785-.456 1.368 0 .564.152 1.01.452 1.325.3.316.71.476 1.22.476.405 0 .743-.101 1.005-.3zM38.542 29.6c-.237 0-.437-.1-.612-.305-.175-.206-.264-.524-.264-.946 0-.436.083-.759.247-.958a.746.746 0 01.604-.296c.25 0 .453.1.624.309.171.207.258.542.258.993 0 .41-.085.716-.252.912a.762.762 0 01-.605.292m-.83.342c.235.154.496.233.776.233.379 0 .682-.135.902-.402v.325h.636v-4.801h-.675v1.597a1.19 1.19 0 00-.89-.379c-.287 0-.552.077-.786.23a1.394 1.394 0 00-.529.66 2.481 2.481 0 00-.173.943c0 .354.065.673.192.946.128.277.312.494.547.648M36.258 34.585c0 .42-.09.738-.264.947-.176.209-.377.31-.616.31-.293 0-.52-.138-.694-.421-.106-.173-.16-.462-.16-.859 0-.4.09-.71.265-.919.175-.208.376-.31.615-.31.237 0 .433.098.6.3.169.2.254.521.254.952m.293-1.325a1.27 1.27 0 00-.48-.371c-.193-.087-.4-.131-.616-.131-.347 0-.644.126-.883.375v-1.594h-.677v4.801h.636v-.327c.229.268.53.405.895.405.418 0 .78-.167 1.076-.495.296-.327.446-.793.446-1.386 0-.25-.035-.488-.105-.708a1.78 1.78 0 00-.292-.57M39.78 32.835l-.74 2.017a7.985 7.985 0 00-.191.6 8.317 8.317 0 00-.199-.612l-.707-1.972-.013-.033h-.73l1.312 3.461-.046.124a2.8 2.8 0 01-.17.42.484.484 0 01-.172.163c-.12.067-.319.085-.6.008l-.072-.02.076.648.03.01c.141.048.272.073.388.073a.88.88 0 00.503-.142c.139-.092.263-.239.368-.435.079-.143.189-.406.328-.78l1.32-3.53h-.685z"
    })))));
  };

  var _default = SvgAtmMomo;
  _exports["default"] = _default;
});