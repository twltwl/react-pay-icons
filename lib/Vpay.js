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
    global.Vpay = mod.exports;
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

  var SvgVpay = function SvgVpay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("title", null, "vpay"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
      id: "vpay",
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
      transform: "translate(14.000000, 4.000000)",
      fillRule: "nonzero",
      id: "VPay_logo_2015"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(0.384615, 0.615385)"
    }, /*#__PURE__*/React.createElement("g", {
      id: "svg3355"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "path8681",
      fill: "#1C3378",
      points: "29.3815385 1.04615385 1.38769231 1.04615385 1.38769231 31.3738462 29.3815385 31.3738462"
    }), /*#__PURE__*/React.createElement("polygon", {
      id: "path8683",
      fill: "#FFFFFF",
      points: "28.6815385 20.7415385 2.08769231 20.7415385 2.08769231 1.74769231 28.6815385 1.74769231"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.1111538,5.19479639 L16.8936615,17.6500462 L13.4846154,17.6500462 L10.9165385,7.70787692 C10.8688501,7.2350718 10.5799513,6.82058911 10.1528615,6.61223077 C9.1395381,6.1311947 8.07131388,5.77557805 6.97186154,5.55326154 L7.04724615,5.1948 L12.5294923,5.1948 C13.2694134,5.19318896 13.9002622,5.73073802 14.0160923,6.46153846 L15.3744308,13.6686923 L18.7265077,5.19484615 L22.1111538,5.19479639",
      id: "path8685",
      fill: "#1C3378"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.49913846,25.6086615 C9.66151096,25.6446433 9.82782127,25.6596938 9.99401538,25.6534462 C10.7515846,25.6534462 11.2138769,25.2644769 11.2138769,24.5863231 C11.2138769,23.9427846 10.7861846,23.5986308 10.0836154,23.5986308 C9.88742897,23.5945348 9.69139623,23.6122903 9.49913846,23.6515692 L9.49913846,25.6086615 Z M8.49515385,22.9123077 C9.00691766,22.8244275 9.52572953,22.7842039 10.0449231,22.7921538 C10.6298214,22.7470424 11.2113174,22.9148412 11.6822615,23.2646308 C12.0420901,23.5915706 12.2407788,24.0596337 12.2260154,24.5455846 C12.2500829,25.030044 12.077509,25.5036959 11.7474308,25.8591231 C11.270196,26.293031 10.6378145,26.5155786 9.99401538,26.4761846 C9.82836961,26.4788354 9.66280221,26.4672543 9.49913846,26.4415692 L9.49913846,28.6246462 L8.49515385,28.6246462 L8.49515385,22.9123077 Z",
      id: "path8687",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.0383385,26.185 L15.6025231,24.7594462 C15.4945846,24.4071385 15.4049846,24.0120462 15.3214769,23.6760308 L15.3051692,23.6760308 C15.2236308,24.0120462 15.1402154,24.4173077 15.0424615,24.7594462 L14.6147692,26.185 L16.0383385,26.185 Z M14.4498615,26.9833077 L13.9712923,28.6247077 L12.9265692,28.6247077 L14.7044308,22.8349538 L15.9976,22.8349538 L17.8019385,28.6247077 L16.7144462,28.6247077 L16.2113692,26.9833077 L14.4498615,26.9833077 Z",
      id: "path8689",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.9341538,28.6247077 L19.9341538,26.2094308 L18.1807231,22.8349538 L19.3313385,22.8349538 L19.9993077,24.3195692 C20.1887077,24.7513231 20.3271846,25.0751231 20.4778923,25.4722308 L20.4921231,25.4722308 C20.6326462,25.1015846 20.7914923,24.7411385 20.9788462,24.3195692 L21.6468154,22.8349538 L22.7913231,22.8349538 L20.9462615,26.185 L20.9462615,28.6247077 L19.9341538,28.6247077 Z",
      id: "path8691",
      fill: "#FFFFFF"
    })))))));
  };

  var _default = SvgVpay;
  _exports["default"] = _default;
});