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
    global.Paywithgoogle = mod.exports;
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

  var SvgPaywithgoogle = function SvgPaywithgoogle(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "paywithgoogle"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
      id: "paywithgoogle",
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
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(8.000000, 9.000000)",
      id: "GPay-Light-themed-buttons"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(0.979757, 0.356275)"
    }, /*#__PURE__*/React.createElement("g", {
      id: "GPAY---SVGs"
    }, /*#__PURE__*/React.createElement("g", {
      id: "GPay-Brand-Mark"
    }, /*#__PURE__*/React.createElement("g", {
      id: "GPay",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("g", {
      id: "Pay",
      transform: "translate(17.813765, 1.781377)",
      fill: "#5F6369"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2.40642591,2.19013117 L2.40642591,6.41803239 L5.01375547,6.41803239 C5.59262552,6.43525339 6.15199454,6.20794809 6.55477085,5.7918251 C7.15208143,5.17767826 7.32166907,4.26467709 6.98474402,3.47699837 C6.64781896,2.68931964 5.87043254,2.18138119 5.01375547,2.18916923 L2.40642591,2.18916923 L2.40642591,2.19013117 Z M2.40642591,7.90624777 L2.40642591,12.8106089 L0.848879352,12.8106089 L0.848879352,0.701862348 L4.97978462,0.701862348 C5.97553396,0.680937418 6.93843856,1.05837355 7.65473522,1.75038057 C8.36724446,2.41179393 8.77211677,3.34005889 8.77211677,4.31224049 C8.77211677,5.28442208 8.36724446,6.21268704 7.65473522,6.8741004 C6.93602136,7.56038542 5.97318525,7.93153661 4.97978462,7.90523239 L2.40642591,7.90523239 L2.40642591,7.90624777 Z",
      id: "Fill-1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.3460923,10.2738575 C10.3439397,10.6757833 10.53648,11.0538874 10.8627984,11.2885474 C11.2073858,11.55927 11.6349111,11.7026511 12.0730478,11.694434 C12.7301345,11.693277 13.3600252,11.4319595 13.8249603,10.9676324 C14.3148664,10.5353638 14.595358,9.91338874 14.5950316,9.26004049 C14.0023509,8.84413383 13.2861787,8.64143837 12.5634429,8.68504777 C12.0006338,8.6645873 11.4460462,8.82476558 10.9808146,9.14214899 C10.5904634,9.38677301 10.3513208,9.81313012 10.3460923,10.2737684 M12.3612389,4.2532502 C13.3547942,4.19822132 14.3313041,4.52843984 15.0875466,5.17518381 C15.7712528,5.83319739 16.1355181,6.75568425 16.08583,7.70329555 L16.08583,12.8105911 L14.5960826,12.8105911 L14.5960826,11.6606057 L14.5282656,11.6606057 C13.9809861,12.5547284 13.0032292,13.0945002 11.954996,13.0811822 C11.1155958,13.1080735 10.2967795,12.8183093 9.66113522,12.2694267 C9.0634086,11.766616 8.72438268,11.0210077 8.73838219,10.240047 C8.71086157,9.44045237 9.0738206,8.67739989 9.71151255,8.1942251 C10.4666709,7.65382395 11.3827211,7.38538146 12.3101134,7.43272227 C13.1027689,7.40204612 13.8898927,7.57681252 14.595085,7.9400583 L14.595085,7.58444211 C14.5988444,7.05168281 14.3625632,6.54553789 13.9517409,6.20631579 C13.538772,5.83470257 13.0008579,5.63248304 12.4453555,5.64001619 C11.6120583,5.62062031 10.8290597,6.0375393 10.3799919,6.73974899 L9.00808259,5.87677895 C9.7690993,4.79131726 11.0377172,4.17707574 12.3611854,4.25326802",
      id: "Fill-3"
    }), /*#__PURE__*/React.createElement("g", {
      id: "Group-7",
      transform: "translate(16.032389, 3.562753)"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "Fill-5",
      points: "8.60226721 0.96194332 3.40421053 12.9007287 1.79740891 12.9007287 3.72663968 8.72340081 0.306396761 0.96194332 2.00048583 0.96194332 4.47125506 6.91352227 4.50510121 6.91352227 6.90995951 0.96194332"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "G"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.9266235,8.63039514 C13.9272096,8.15624101 13.8870762,7.68291234 13.8066656,7.21562591 L7.23783968,7.21562591 L7.23783968,9.89538623 L11.0001069,9.89538623 C10.8442974,10.7605245 10.3416928,11.5244063 9.60885182,12.0098802 L9.60885182,13.750285 L11.8542591,13.750285 C13.2377563,12.4133675 13.9906224,10.5532491 13.926481,8.63041296",
      id: "Fill-8",
      fill: "#547DBE"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.23782186,15.4298202 C8.93430496,15.4776278 10.5852219,14.8770007 11.8543838,13.7502494 L9.60899433,12.0098445 C8.51398194,12.7109135 7.15717904,12.8688164 5.93043362,12.4379503 C4.7036882,12.0070843 3.74361542,11.0354322 3.32748664,9.80360972 L1.01436923,9.80360972 L1.01436923,11.5962445 C2.19799938,13.9472481 4.60567485,15.4303625 7.23782186,15.4298559",
      id: "Fill-10",
      fill: "#34A751"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.32748664,9.80355628 C3.0359778,8.93970738 3.0359778,8.00406914 3.32748664,7.14022024 L3.32748664,5.34769231 L1.01436923,5.34769231 C0.0250157956,7.31306368 0.0250157956,9.63089097 1.01436923,11.5962623 L3.32748664,9.80355628 Z",
      id: "Fill-12",
      fill: "#F7BA16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.23782186,4.26817814 C8.23098046,4.25183319 9.19073235,4.62670588 9.90988664,5.31186883 L9.90988664,5.31283077 L11.8979028,3.3269166 C10.6368936,2.14357473 8.96699484,1.49393557 7.23782186,1.51400972 C4.60565904,1.51351667 2.19797957,2.99666106 1.01436923,5.34769231 L3.32748664,7.14030931 C3.88140277,5.44434642 5.45382007,4.28940996 7.23782186,4.26817814",
      id: "Fill-14",
      fill: "#E84334"
    }))), /*#__PURE__*/React.createElement("polygon", {
      id: "Shape",
      points: "0.00178137652 1.24340081 42.7512551 1.24340081 42.7512551 19.8819433 0.00178137652 19.8819433"
    }))))))));
  };

  var _default = SvgPaywithgoogle;
  _exports["default"] = _default;
});