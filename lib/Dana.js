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
    global.Dana = mod.exports;
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

  var SvgDana = function SvgDana(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0V40H60V0Z",
      fill: "#008CEB"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24.7649 23.8432C25.7152 23.9113 26.8225 23.173 27.2126 22.7516C28.5687 21.2843 28.6014 19.1625 27.2362 17.6258C26.7283 17.0538 25.5345 16.4216 24.7793 16.5106H22.0449V23.8341L24.7714 23.8432H24.7649ZM23.5868 22.2568V18.0878C24.0148 18.0598 24.4442 18.0598 24.8722 18.0878C25.209 18.1269 25.5302 18.2512 25.8055 18.4491C27.3762 19.5224 26.7217 22.0814 24.846 22.2529C24.4269 22.2823 24.0062 22.2836 23.5868 22.2568Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M48.7696 23.8563H50.3285V22.2777H53.4215L53.4307 23.8485H54.9896V21.2463C54.9896 20.4609 55.0551 19.4818 54.8587 18.7711C54.6804 18.1204 54.2941 17.5459 53.7588 17.1353C53.2235 16.7246 52.5686 16.5003 51.894 16.4966C51.2193 16.4929 50.5619 16.71 50.0222 17.1147C49.4824 17.5195 49.0898 18.0897 48.9044 18.7384C48.6949 19.44 48.7656 20.4465 48.7656 21.2253C48.7656 22.1049 48.7565 22.9898 48.7656 23.8694L48.7696 23.8563ZM50.3298 20.69C50.3206 20.0355 50.2513 19.3352 50.5589 18.8313C50.6939 18.5993 50.8879 18.4072 51.1213 18.2745C51.3547 18.1419 51.619 18.0734 51.8874 18.076C52.1545 18.078 52.4164 18.1492 52.6477 18.2828C52.879 18.4163 53.0716 18.6076 53.2068 18.8378C53.5105 19.3614 53.4385 20.0159 53.4307 20.6913L50.3298 20.69Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.9417 23.855H32.4954C32.4954 23.5252 32.4535 22.516 32.5098 22.2764H35.591L35.6015 23.8537H37.1578C37.15 22.9793 37.1578 22.1063 37.1578 21.2358C37.1578 20.4897 37.2272 19.4216 37.0269 18.7593C36.8475 18.1095 36.4606 17.5361 35.9252 17.1264C35.3899 16.7167 34.7353 16.4931 34.0612 16.4897C33.387 16.4863 32.7302 16.7032 32.1907 17.1075C31.6512 17.5118 31.2586 18.0812 31.0726 18.7292C30.8645 19.4099 30.9351 20.4505 30.9351 21.2083C30.9351 22.0827 30.9155 22.9793 30.9351 23.8511L30.9417 23.855ZM32.4967 20.69C32.4862 20.0355 32.4195 19.3261 32.7271 18.8326C32.8621 18.6012 33.0553 18.4092 33.2876 18.2758C33.5199 18.1424 33.7832 18.0721 34.0511 18.0721C34.319 18.0721 34.5822 18.1424 34.8145 18.2758C35.0468 18.4092 35.2401 18.6012 35.3751 18.8326C35.68 19.3562 35.6067 20.0211 35.6015 20.6874L32.4967 20.69Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M39.8924 19.3706L39.8701 20.4609C39.8701 21.3772 39.8256 23.088 39.8701 23.8327H41.3937C41.4291 23.3092 41.3387 19.5905 41.4343 19.4714C41.4343 18.7488 42.1896 18.076 42.9514 18.0734C43.3473 18.071 43.7286 18.2232 44.0142 18.4975C44.2079 18.6742 44.5051 19.0774 44.4998 19.4845C44.5705 19.525 44.5142 23.4113 44.5365 23.8419H46.0614L46.0496 19.3981C46.0876 19.0499 45.8781 18.5119 45.7433 18.2397C45.4933 17.7209 45.103 17.2825 44.6167 16.9741C44.1303 16.6658 43.5674 16.4997 42.9915 16.4948C42.4157 16.4899 41.85 16.6463 41.3585 16.9464C40.8669 17.2464 40.4693 17.6781 40.2104 18.1925C40.0796 18.4609 39.8597 19.0132 39.8924 19.3706Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.1481 27.2962C16.0959 27.2962 19.2962 24.0959 19.2962 20.1481C19.2962 16.2003 16.0959 13 12.1481 13C8.20031 13 5 16.2003 5 20.1481C5 24.0959 8.20031 27.2962 12.1481 27.2962Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.3132 20.1782V22.19C16.3132 22.3209 16.2569 22.3484 16.147 22.2843C15.9999 22.196 15.8468 22.1182 15.6888 22.0513C15.2118 21.8612 14.695 21.7924 14.1849 21.851C13.628 21.9233 13.0816 22.0603 12.5565 22.2594C12.033 22.4361 11.5199 22.6272 10.9858 22.7751C10.5435 22.9065 10.0832 22.967 9.62191 22.9545C9.11073 22.9346 8.61393 22.7797 8.18208 22.5055C8.12782 22.4728 8.0833 22.4262 8.05315 22.3705C8.023 22.3148 8.00831 22.252 8.01061 22.1887C8.01061 20.8711 8.01061 19.5534 8.01061 18.2358C8.01061 18.1716 8.01061 18.0957 8.0682 18.063C8.1258 18.0302 8.1847 18.0839 8.23444 18.1166C8.70339 18.4337 9.2588 18.5983 9.82479 18.5879C10.2295 18.5713 10.6297 18.4968 11.0133 18.3666C11.5578 18.1978 12.084 17.974 12.6194 17.7842C13.0361 17.624 13.4634 17.4928 13.8982 17.3915C14.2714 17.3041 14.6586 17.2949 15.0355 17.3645C15.4123 17.4341 15.7707 17.581 16.088 17.796C16.1608 17.8405 16.2204 17.9037 16.2606 17.9789C16.3009 18.0541 16.3204 18.1387 16.3171 18.224C16.3171 18.8784 16.3171 19.5329 16.3171 20.1874L16.3132 20.1782Z",
      fill: "#008CEB"
    })));
  };

  var _default = SvgDana;
  _exports["default"] = _default;
});