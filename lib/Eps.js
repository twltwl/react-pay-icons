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
    global.Eps = mod.exports;
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

  var SvgEps = function SvgEps(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "eps"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
      id: "eps",
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(-1.000000, 0.000000)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("rect", {
      id: "Rectangle",
      fill: "#C81B71",
      x: 0,
      y: 0,
      width: 61.5384615,
      height: 40
    }), /*#__PURE__*/React.createElement("g", {
      id: "EPS",
      transform: "translate(12.307692, 6.153846)"
    }, /*#__PURE__*/React.createElement("g", {
      id: "Group-3",
      transform: "translate(13.846154, 9.230769)",
      fill: "#FFFFFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.58972308,10.9102308 L3.58972308,16.2070462 C2.81931416,16.2818217 2.04479685,16.3054633 1.27126154,16.2778154 C1.12419075,16.0341098 1.07401625,15.7440553 1.13067692,15.4651077 C1.12472821,12.288041 1.12370256,9.11087692 1.1276,5.93361538 C1.09161321,4.15439304 2.0130478,2.49266761 3.54125704,1.58079934 C5.06946627,0.668931075 6.9694396,0.647148584 8.51815287,1.52374107 C10.0668661,2.40033356 11.0261557,4.04049719 11.0309692,5.82007692 C11.0608885,7.16443791 10.5457428,8.46373622 9.60273924,9.42235285 C8.65973564,10.3809695 7.36907101,10.9173797 6.0244,10.9095385 C5.24921538,10.9139231 4.47386154,10.9101692 3.58984615,10.9101692",
      id: "Fill-1"
    })), /*#__PURE__*/React.createElement("g", {
      id: "Group-6",
      transform: "translate(23.076923, 9.230769)",
      fill: "#FFFFFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0.167953846,10.8978462 C1.03482831,10.3993364 1.72539439,9.64379571 2.14415385,8.73570769 C2.32555385,8.36944615 2.60704615,8.38415385 2.9234,8.38461538 C4.79983077,8.38775385 6.67631282,8.38812308 8.55284615,8.38572308 C8.7611855,8.39309496 8.96977645,8.38847193 9.17758462,8.37187692 C9.55758462,8.32746154 9.8358,8.12276923 9.82313846,7.72264615 C9.82370652,7.54877219 9.7488081,7.38320505 9.61784463,7.26883265 C9.48688116,7.15446024 9.31273746,7.10253509 9.14052308,7.12650769 C8.1242,7.12189231 7.1074,7.13918462 6.09153846,7.11526154 C4.56996095,7.14560484 3.24468628,6.08278767 2.94384615,4.59093846 C2.76991459,3.79001714 2.9261413,2.952797 3.3772166,2.26850303 C3.8282919,1.58420906 4.53613754,1.11060703 5.34076923,0.954738462 C7.19027703,0.823736062 9.04602828,0.805040193 10.8978,0.898753846 C10.973809,1.69083938 10.9736544,2.48839014 10.8973385,3.28044615 L6.98,3.28044615 C6.82361538,3.28044615 6.66707692,3.28232308 6.51076923,3.28013846 C5.99769231,3.27263077 5.41641538,3.27123077 5.39498462,3.94523077 C5.37263077,4.64598462 5.96812308,4.63112308 6.47403077,4.63315385 C7.41215385,4.63675385 8.35076923,4.62001538 9.28858462,4.63776923 C10.9167886,4.70013519 12.2249306,6.00098956 12.2963916,7.62881976 C12.3678525,9.25664996 11.1787369,10.6671327 9.56226154,10.8719385 C6.50249231,10.9615538 3.43833846,10.8977538 0.167923077,10.8977538",
      id: "Fill-4"
    })), /*#__PURE__*/React.createElement("g", {
      id: "Group-9",
      transform: "translate(0.000000, 7.692308)",
      fill: "#FFFFFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.6894308,9.91504615 C11.3415077,9.91504615 9.10258462,9.94850769 6.86553846,9.89784615 C5.98582508,9.90010362 5.18572635,9.38872901 4.81833846,8.5894 L11.9783385,8.5894 C12.2867157,7.2501208 12.039514,5.84304382 11.2931112,4.68907322 C10.5467084,3.53510261 9.36475049,2.73263775 8.0168,2.46469231 C6.17835441,2.13875536 4.31085701,2.85968359 3.16830837,4.33640282 C2.02575972,5.81312204 1.79680963,7.80180651 2.5738965,9.49952647 C3.35098337,11.1972464 5.00579995,12.323686 6.87021538,12.4240462 C8.82201538,12.4975385 10.7783538,12.4446769 12.7326615,12.4482769 C13.0114923,12.4487538 13.2903231,12.4482769 13.5796308,12.4482769 C13.5085238,13.3369941 12.7645951,14.0207932 11.8730462,14.0169231 C8.69410256,14.0392821 5.51506154,14.0393846 2.33592308,14.0172308 C1.31363399,14.0030272 0.493291492,13.1685363 0.496569231,12.1461538 C0.464969231,8.99349744 0.464235897,5.84057436 0.494369231,2.68738462 C0.48570087,2.18214936 0.687317636,1.69602048 1.05101731,1.3452209 C1.41471698,0.994421316 1.90780694,0.81048408 2.4124,0.837384615 C5.53926154,0.818769231 8.66617436,0.819025641 11.7931385,0.838153846 C12.2718661,0.813789854 12.7403232,0.982702762 13.0933431,1.30697225 C13.4463629,1.63124174 13.6543678,2.08369906 13.6706615,2.56276923 C13.7291231,4.97887692 13.6894308,7.39716923 13.6894308,9.91507692",
      id: "Fill-7"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M9.41661538,13.8360769 L4.81209231,13.8360769 C5.15641315,13.1229527 5.82551317,12.6213773 6.60658462,12.4908769 C7.73663202,12.2766412 8.87481498,12.8215049 9.41661538,13.8360769",
      id: "Fill-10",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.9805692,6.92367692 L9.88590769,6.92367692 C9.76146453,6.92370549 9.6421089,6.87428855 9.55410708,6.78630116 C9.46610526,6.69831376 9.41666876,6.57896624 9.41667692,6.45452308 L9.41667692,5.53312308 C9.43022867,4.26525372 8.45242588,3.20692559 7.18744615,3.12030769 C6.54528234,3.08866646 5.91819213,3.32148606 5.45226392,3.76452831 C4.98633571,4.20757057 4.72225349,4.82214983 4.72153846,5.46509231 L4.72153846,6.44452308 C4.7214875,6.70359998 4.51147691,6.91361058 4.2524,6.91366154 L3.15772308,6.91366154 C2.89864016,6.91361907 2.68862019,6.70360599 2.68856923,6.44452308 L2.68856923,5.55813846 C2.67004238,3.16711396 4.5477109,1.19053596 6.93653846,1.0864 C8.12043381,1.05189179 9.26794903,1.49771952 10.1180152,2.32245378 C10.9680813,3.14718805 11.4484101,4.28069487 11.4497231,5.46509231 L11.4497231,6.45452308 C11.4497312,6.57895292 11.4003053,6.69828877 11.3123201,6.78627396 C11.2243349,6.87425914 11.1049991,6.92368508 10.9805692,6.92367692",
      id: "Fill-12",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.4685846,17.6087385 C17.4685846,16.6405846 17.4360615,15.7823538 17.4760923,14.9277385 C17.5200818,13.6436708 18.5535344,12.6143855 19.8377692,12.5755846 C21.0879878,12.5343841 22.1733731,13.4302692 22.3699077,14.6656308 C22.6206546,15.9590397 21.7977412,17.2174611 20.5123077,17.5063231 C19.5041476,17.6470439 18.4839854,17.6813711 17.4686462,17.6087385",
      id: "Fill-14",
      fill: "#C81B71"
    }))))));
  };

  var _default = SvgEps;
  _exports["default"] = _default;
});