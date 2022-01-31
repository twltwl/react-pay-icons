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
    global.Bacs = mod.exports;
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

  var SvgBacs = function SvgBacs(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "bacs"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
      id: "bacs",
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(-1.000000, 0.000000)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("rect", {
      id: "Rectangle-path",
      fill: "#E71C44",
      x: 0,
      y: 0,
      width: 61.5384615,
      height: 40
    }), /*#__PURE__*/React.createElement("g", {
      id: "Page-1-2",
      transform: "translate(4.615385, 12.307692)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.04769231,15.0032462 C12.0543435,14.8629845 14.5445664,12.6211259 14.9988,9.64567692 L16.7714615,0.412538462 L3.4532,0.412538462 L0.639676923,15.0033077 L9.04769231,15.0032462 Z",
      id: "Fill-1",
      fill: "#E71C44"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.8616615,0.492846154 L19.5662769,6.81363077 L19.6059077,6.81363077 C20.3385331,5.6046202 21.6375382,4.85313827 23.0508308,4.82072308 C25.1986154,4.82072308 26.0078923,6.59229231 26.0078923,8.32361538 C26.0078923,11.3024615 23.8407231,15.0065692 19.9097231,15.0065692 C18.1872615,15.0065692 16.8918923,14.3014462 16.8918923,12.4905077 C16.9053548,11.9837795 16.9586473,11.4788948 17.0512769,10.9805231 L19.1805846,0.492830769 L20.8616615,0.492846154 Z M18.7350154,11.0207692 C18.6342316,11.4219823 18.5929854,11.8358336 18.6126,12.2490462 C18.6126,13.1737692 19.1400923,13.6986769 20.1941385,13.6986769 C22.7267538,13.6986769 24.2660462,10.6988154 24.2660462,8.54407692 C24.2660462,7.33678462 23.7394462,6.20910769 22.4018154,6.20910769 C20.9435231,6.20910769 19.4438615,7.69896923 18.9577692,9.99456923 L18.7350154,11.0207692 Z",
      id: "Fill-3",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.9586769,14.7843538 C32.990503,13.9427577 33.0648852,13.1033105 33.1815385,12.2692308 L33.1410308,12.2692308 C32.5263105,13.8559567 31.0323181,14.9297472 29.3324154,15.0066308 C28.5181289,14.9904803 27.7483442,14.6319426 27.2120108,14.0190236 C26.6756773,13.4061046 26.4224525,12.5955523 26.5144923,11.7863231 C26.4765864,9.95822898 27.1738977,8.19139168 28.4500919,6.88192873 C29.7262861,5.57246578 31.4745973,4.82992633 33.3030615,4.82078462 C34.1951998,4.81992523 35.0827288,4.9487066 35.9378308,5.20309231 L34.9453846,10.2763385 C34.6492177,11.7604558 34.5064157,13.2710896 34.5192308,14.7844154 L32.9586769,14.7843538 Z M34.0532769,6.29050769 C33.6688673,6.19280671 33.2733935,6.14546175 32.8767846,6.14966154 C30.3450615,6.14966154 28.2774,8.78644615 28.2571385,11.4836 C28.2571385,12.5710462 28.6419692,13.6383538 29.9390923,13.6383538 C31.3383692,13.6383538 32.9991846,11.8256769 33.4852462,9.22912308 L34.0532769,6.29050769 Z",
      id: "Fill-5",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("g", {
      id: "Group-9",
      transform: "translate(35.384615, 4.615385)",
      fill: "#FFFFFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.41876923,9.78701538 C6.52848854,10.1923306 5.56053063,10.3986307 4.58235385,10.3915385 C3.55923095,10.4652681 2.55474047,10.0896702 1.83099433,9.36275344 C1.10724818,8.63583663 0.736044837,7.62971391 0.814246154,6.60692308 C0.761374563,4.96473639 1.36401268,3.36898442 2.48921511,2.17169915 C3.61441753,0.974413881 5.16972606,0.273976573 6.81203077,0.224907692 C7.51629835,0.221482725 8.21346347,0.3657227 8.85855385,0.648323077 L8.37158462,1.97635385 C7.8517813,1.73276122 7.28391855,1.60898385 6.70989231,1.61415385 C4.25672004,1.82328758 2.415511,3.94677443 2.55604615,6.40483077 C2.46608474,7.08774299 2.68671299,7.77504983 3.15734406,8.27800961 C3.62797514,8.78096939 4.29913192,9.04670629 4.98650769,9.00224615 C5.77496676,8.99596714 6.5516375,8.81017542 7.25758462,8.45896923 L7.41873846,9.78698462 L7.41876923,9.78701538 Z",
      id: "Fill-7"
    })), /*#__PURE__*/React.createElement("g", {
      id: "Group-15",
      fill: "#FFFFFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.1626,10.3376 C2.62707702,10.3381832 2.09254215,10.291624 1.56518462,10.1984615 L3.38803077,0.7484 C6.97121538,0.834123077 9.84021538,2.94686154 9.84021538,5.54169231 C9.84021538,8.18984615 6.84969231,10.3376 3.1626,10.3376 Z M6.52738462,10.8318923 C9.79178462,10.1477538 12.165,8.08136923 12.165,5.63616923 C12.165,3.15770769 9.72838462,1.06946154 6.39441538,0.413323077 L5.58249231,0.413323077 C8.93670769,0.942553846 11.4455692,3.08510769 11.4455692,5.64929231 C11.4455692,8.33156923 8.6972,10.5554462 5.11050769,10.9508308 C5.20127692,10.9482154 5.29190769,10.9464615 5.38349231,10.9412154 C5.77272308,10.9202205 6.15402564,10.8837692 6.5274,10.8318615 L6.52738462,10.8318923 Z M8.28858462,0.413323077 C11.7898615,1.15869231 14.3356923,3.23909231 14.4739538,5.81463077 C14.6544769,9.22566154 10.5394154,12.2132769 5.28396923,12.4897231 C3.91034546,12.5672989 2.53280944,12.4408217 1.19627692,12.1144154 L0.638861538,15.0040308 L9.04769231,15.0040308 C12.0546871,14.8642402 14.5450511,12.6215507 14.9979231,9.64556923 L16.7714615,0.413261538 L8.28858462,0.413323077 Z M13.7369231,5.17512308 C13.6092308,2.77629231 10.9172308,0.887430769 7.33670769,0.413323077 L6.93863077,0.413323077 C10.4443077,1.07033846 13.0068615,3.15947692 13.0068615,5.63616923 C12.7748202,7.74345852 11.3182059,9.51393591 9.29512308,10.1476923 C12.0338462,9.12069231 13.8461538,7.23538462 13.7369231,5.17512308 Z",
      id: "Fill-13"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M44.3258615,13.0942462 C44.9675232,13.4668305 45.6915443,13.6745281 46.4331385,13.6987538 C46.8939515,13.747413 47.3545093,13.6045374 47.7068732,13.3036121 C48.0592371,13.0026868 48.272432,12.5701652 48.2964923,12.1074154 C48.2964923,11.3428 47.9521846,10.8791231 46.9386154,10.3166462 C45.9327627,9.88765524 45.252394,8.93089326 45.1774,7.83995385 C45.2276297,6.96186736 45.6348552,6.14254235 46.3044772,5.57230963 C46.9740991,5.00207691 47.8478326,4.73057038 48.7227077,4.82086154 C49.4352417,4.80133684 50.1405728,4.96775435 50.7692308,5.30372308 L50.3033846,6.57141538 C49.7821579,6.28246927 49.1962649,6.13017942 48.6003077,6.12873846 C48.1721712,6.08137761 47.7433694,6.21189917 47.4142277,6.48976536 C47.085086,6.76763155 46.8844832,7.16846251 46.8593538,7.59847692 C46.8593538,8.30273846 47.3252,8.7454 48.1961077,9.22924615 C49.2343733,9.67638671 49.9425875,10.6583097 50.0391846,11.7846308 C50.0113194,12.724756 49.5890321,13.6097345 48.8757569,14.222801 C48.1624818,14.8358675 47.2241015,15.1203951 46.2904615,15.0066923 C45.4312853,15.0168319 44.5874118,14.7789912 43.8599846,14.3216769 L44.3258615,13.0942462 Z",
      id: "Fill-10",
      fill: "#FFFFFF"
    }))))));
  };

  var _default = SvgBacs;
  _exports["default"] = _default;
});