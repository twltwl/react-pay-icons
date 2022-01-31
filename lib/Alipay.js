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
    global.Alipay = mod.exports;
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

  var SvgAlipay = function SvgAlipay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "alipay_hk"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
      id: "alipay_hk",
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#F3F6F9",
      x: 0,
      y: 0,
      width: 60,
      height: 40
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.4878909,21.2175078 C22.8333946,20.6681261 24.3146373,20.5429685 25.7332469,20.8587962 C27.4165433,21.2482868 29.0439466,21.8486877 30.5768716,22.6457637 C29.4417088,24.1491342 27.9243866,25.3208107 26.1828024,26.038865 C24.8916314,26.524769 23.4765299,26.5727448 22.1554146,26.1754044 C21.3757563,25.9583831 20.6943842,25.4799701 20.2254923,24.8203447 C19.8614118,24.2801164 19.7456381,23.6100156 19.9073528,22.9789453 C20.1446455,22.1852104 20.7243917,21.5391418 21.4878909,21.2175954 L21.4878909,21.2175078 Z M20.6829301,7 L39.3074473,7 C40.575604,7.14137505 41.7129658,7.84551894 42.4048956,8.91763897 C42.7518994,9.45307657 42.9537765,10.0695125 42.9907277,10.7064895 C42.9869617,15.1914902 42.9869617,19.6758778 42.9907277,24.1596524 C42.0474211,23.9686048 41.1151115,23.7267912 40.1978657,23.4352664 C38.2430922,22.8642575 36.3387875,22.1424552 34.4186525,21.4744498 C35.3967763,19.8071642 36.1278904,18.0068183 36.5891609,16.1296404 C34.8798563,16.139143 33.1709457,16.133297 31.4624074,16.133297 C31.4661734,15.5370208 31.455992,14.9389272 31.4661734,14.3389945 C33.5593693,14.348519 35.6516675,14.3389945 37.7449948,14.3448625 C37.7370906,14.0066449 37.7551543,13.6669604 37.7318576,13.3291151 C35.6423182,13.3536379 33.5505017,13.3291151 31.4624512,13.3404569 C31.4662172,12.3433862 31.4560358,11.3485051 31.4662172,10.3495514 C30.5976284,10.3550252 29.7301783,10.3381877 28.8631222,10.359054 C28.750742,10.3578006 28.6427268,10.4025078 28.5641048,10.4828165 C28.4854829,10.5631251 28.4430782,10.6720648 28.4467164,10.7843931 C28.4369291,11.6368888 28.4452056,12.4897347 28.4452056,13.340019 C26.3319316,13.3363624 24.2186577,13.3418582 22.1091497,13.3363624 C22.1031285,13.6720182 22.1057559,14.0065792 22.1057559,14.3444246 C24.2186577,14.3385566 26.3315594,14.3462638 28.4429504,14.3385566 C28.4448334,14.9406789 28.4414396,15.5365829 28.4448334,16.1328591 C26.694869,16.1387051 24.9449266,16.121145 23.19459,16.1423835 C23.2103985,16.4743609 23.2066325,16.8067324 23.2024942,17.137615 C26.5943474,17.1354255 29.9877114,17.1434829 33.3803091,17.1354255 C33.0238152,18.3142508 32.5466564,19.4531527 31.9564104,20.5340443 C31.9455756,20.5674108 31.9189641,20.5932751 31.8853027,20.6031554 C31.8516413,20.6130357 31.8152724,20.6056575 31.7881227,20.5834403 C29.5733936,19.8086028 27.2729478,19.3049383 24.9370661,19.0834552 C23.5823109,18.9740918 22.2261217,19.2765976 21.0462616,19.9513214 C19.9712845,20.6022332 19.2242672,21.680025 18.9920832,22.9150766 C18.7590912,24.1531 19.1154789,25.4290451 19.9562889,26.367142 C20.8896706,27.3497374 22.1507265,27.9562896 23.5010155,28.0721114 C25.281396,28.26626 27.0794604,27.9302159 28.6695454,27.1061541 C30.1456549,26.3478899 31.4608926,25.3108486 32.5425709,24.0523432 C32.6438369,23.9520406 32.7177338,23.805276 32.8528062,23.748173 C36.1904465,25.2715861 39.5890654,26.6687505 42.9907277,28.0622366 C43.0618768,29.0789943 42.7213426,30.0816771 42.0457023,30.8448078 C41.3659921,31.6279432 40.4221338,32.1339142 39.3936713,32.2664732 L20.5936627,32.2664732 C19.4422181,32.1131107 18.4049959,31.4916582 17.7266411,30.548695 C17.3335202,29.9976049 17.0837955,29.3573066 17,28.6855755 L17,10.5805255 C17.1086753,9.76876136 17.4535253,9.00683572 17.9916844,8.38945732 C18.6910045,7.61583401 19.6472118,7.12214782 20.6828863,7 L20.6829301,7 Z",
      id: "Combined-Shape",
      fill: "#2CA3DC",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgAlipay;
  _exports["default"] = _default;
});