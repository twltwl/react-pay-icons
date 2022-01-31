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
    global.Oxxo = mod.exports;
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

  var SvgOxxo = function SvgOxxo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "oxxo"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
      id: "oxxo",
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(-2.000000, 0.000000)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("rect", {
      id: "Rectangle",
      fill: "#EDA42D",
      x: 0.000138461538,
      y: 0,
      width: 61.5383231,
      height: 40
    }), /*#__PURE__*/React.createElement("g", {
      id: "Page-1",
      transform: "translate(0.000000, 7.692308)"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "Fill-4",
      fill: "#FEFEFE",
      points: "0 24.1015385 61.6046154 24.1015385 61.6046154 0.943076923 0 0.943076923"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M52.2079538,6.95789231 C50.1006837,6.92638202 48.1833271,8.17153107 47.3550135,10.1094364 C46.5267,12.0473417 46.9517007,14.2936781 48.4307147,15.7950434 C49.9097288,17.2964086 52.1494383,17.7550522 54.0995488,16.9558966 C56.0496592,16.1567411 57.3234249,14.2582749 57.3235231,12.1507692 C57.3393338,9.30643129 55.0522094,6.9847777 52.2079538,6.95796923",
      id: "Fill-6",
      fill: "#ED1C24"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.0392154,6.95789231 C7.93194525,6.92638202 6.0145886,8.17153107 5.18627507,10.1094364 C4.35796155,12.0473417 4.78296222,14.2936781 6.26197629,15.7950434 C7.74099035,17.2964086 9.98069988,17.7550522 11.9308103,16.9558966 C13.8809208,16.1567411 15.1546864,14.2582749 15.1547846,12.1507692 C15.1705956,9.30641855 12.8834833,6.98474287 10.0392154,6.95789231",
      id: "Fill-7",
      fill: "#ED1C24"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M52.2079538,20.3546308 C48.8786838,20.4041218 45.8496313,18.4366594 44.5412373,15.3748637 C43.2328432,12.3130679 43.904586,8.76414857 46.2414591,6.39233238 C48.5783323,4.02051619 52.1168914,3.29617749 55.197768,4.55898696 C58.2786445,5.82179644 60.2908447,8.821316 60.2907692,12.1509538 C60.3152005,16.6446884 56.7016173,20.3123331 52.2080154,20.3546308 L52.2079538,20.3546308 Z M18.1215385,12.1509538 C18.1462922,16.6446883 14.5327279,20.3124674 10.0391231,20.3546308 C5.55624816,20.2873805 1.95742462,16.6341639 1.95742462,12.1507846 C1.95742462,7.6674053 5.55624816,4.01418873 10.0391231,3.94693846 C14.5329463,3.98890022 18.1466825,7.65700507 18.1215385,12.1509538 Z M51.8066769,2.38787692 C47.0703692,2.27723077 44.8438308,5.35961538 41.6123538,9.16136923 L38.5638308,12.7471692 L43.3912615,18.6123846 C44.5413385,20.4147231 42.3463385,22.2031538 40.9845538,20.5541846 L36.5212308,15.1507692 L32.1723077,20.2678308 C30.7873692,21.8965385 28.6172769,20.0767846 29.7918769,18.2915231 L34.5131077,12.7194615 L31.42,8.97427692 L33.4099231,6.47321538 L36.5555385,10.3084154 L39.2668615,7.1072 C40.50216,5.31869331 42.0011744,3.7275629 43.7129231,2.38792308 L0,2.38792308 L0,22.6578923 L10.2202615,22.6578923 C14.9569231,22.6578923 17.1073846,19.7832769 20.2512462,15.9075231 L23.2177538,12.2502 L18.2574615,6.50026154 C17.0677846,4.72532308 19.2210615,2.88641538 20.6203538,4.50296923 L25.2045231,9.80073846 L29.4371231,4.58307692 C30.7846154,2.92153846 32.9949538,4.69076923 31.8613538,6.50307692 L27.2676923,12.1851077 L30.4452,15.8566462 L28.4430769,18.2630769 L25.2802923,14.6424154 L22.6425846,17.9054923 C21.4465558,19.7012485 19.9833041,21.3038241 18.3034308,22.6578 L61.6041385,22.6578923 L61.6041385,2.38792308 L51.8066769,2.38787692 Z",
      id: "Fill-8",
      fill: "#ED1C24"
    }))))));
  };

  var _default = SvgOxxo;
  _exports["default"] = _default;
});