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
    global.SamsungPay = mod.exports;
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

  var SvgSamsungPay = function SvgSamsungPay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "samsung_pay_svg__a",
      d: "M.461.505h8.161v10.58H.462z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "samsung_pay_svg__c",
      d: "M.292.218h4.663v6.828H.292z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#1428A0",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.286 22.178c-.626 0-1.17.194-1.617.65-.458.476-.635 1.151-.635 1.826 0 .72.172 1.418.62 1.893.448.475 1.001.642 1.645.642.654 0 1.185-.264 1.587-.67.464-.467.683-1.104.683-1.787 0-.748-.22-1.411-.67-1.885-.385-.407-.942-.67-1.613-.67zm-3.84 9.251V20.85h1.713v.778c.237-.378.698-.648 1.06-.768a3.55 3.55 0 011.12-.181c.95 0 1.964.319 2.786 1.168a3.991 3.991 0 011.162 2.87c0 .518-.1 1.03-.3 1.52a3.755 3.755 0 01-.822 1.285c-.374.389-.8.686-1.267.883a3.567 3.567 0 01-1.478.298c-.415 0-.82-.065-1.2-.193-.373-.122-.899-.42-1.087-.745v3.665h-1.687z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(34.71 20.345)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "samsung_pay_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#samsung_pay_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      mask: "url(#samsung_pay_svg__b)",
      d: "M2.333 11.085l1.449-3.337L.462.505h1.807l2.36 5.436L6.806.505h1.817L4.11 11.085z"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M28.684 22.847c-.45.473-.67 1.137-.67 1.885 0 .683.22 1.32.684 1.787.402.406.933.67 1.586.67.645 0 1.198-.167 1.647-.642.447-.475.619-1.174.619-1.893 0-.674-.177-1.35-.634-1.825-.448-.457-.992-.651-1.618-.651-.671 0-1.227.262-1.614.67zm3.767 5.715v-.798c-.188.324-.714.623-1.087.745-.38.128-.785.193-1.2.193-.573 0-1.01-.1-1.478-.298a3.822 3.822 0 01-1.266-.883 3.758 3.758 0 01-.823-1.285c-.2-.49-.3-1.002-.3-1.52 0-1.129.401-2.084 1.162-2.87.822-.85 1.836-1.168 2.785-1.168.38 0 .758.06 1.12.181.363.12.824.39 1.061.768v-.777h1.713v7.712h-1.687zM45.051 15.888l-.088-5.124h1.628v6.463h-2.34l-1.62-5.305h-.042l.092 5.305h-1.614v-6.463h2.437l1.513 5.124zM15.489 11.365l-.9 5.924h-1.773l1.216-6.525h2.926l1.214 6.525h-1.77l-.875-5.924zM23.149 15.754l.812-4.99h2.678l.147 6.526H25.14l-.044-5.87h-.033l-1.096 5.87h-1.665l-1.103-5.87h-.036l-.04 5.87H19.48l.148-6.526h2.68l.806 4.99zM36.926 16.309c.46 0 .6-.31.632-.47.013-.07.015-.164.015-.249v-4.827h1.667v4.678c0 .122-.015.367-.02.432-.112 1.217-1.086 1.609-2.294 1.609-1.21 0-2.177-.392-2.29-1.609a5.357 5.357 0 01-.016-.432v-4.678h1.663v4.827c-.005.085.004.179.013.25.032.159.173.469.63.469M10.05 15.446c.063.16.043.362.014.484-.054.216-.201.44-.642.44-.41 0-.657-.237-.657-.592l-.005-.634H7v.503c0 1.458 1.15 1.895 2.384 1.895 1.193 0 2.17-.4 2.324-1.488a3.23 3.23 0 00-.003-1.073c-.278-1.37-2.773-1.771-2.959-2.537a.796.796 0 01-.008-.342c.048-.213.191-.441.601-.441.387 0 .612.24.612.59v.407h1.64V12.2c0-1.423-1.287-1.646-2.22-1.646-1.165 0-2.118.387-2.295 1.452-.045.288-.05.547.015.876.284 1.337 2.623 1.721 2.959 2.564M31.41 15.438c.067.154.04.355.015.476-.052.215-.203.431-.634.431-.408 0-.654-.23-.654-.584v-.628H28.39v.501c0 1.444 1.142 1.875 2.366 1.875 1.173 0 2.142-.397 2.299-1.477.078-.557.02-.923-.01-1.064-.274-1.35-2.743-1.75-2.922-2.511a.821.821 0 01-.01-.336c.046-.206.188-.434.593-.434.386 0 .607.233.607.58v.403h1.62v-.452c0-1.407-1.272-1.627-2.19-1.627-1.156 0-2.104.375-2.274 1.434a2.07 2.07 0 00.015.871c.281 1.324 2.592 1.702 2.926 2.542",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(48.012 10.37)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "samsung_pay_svg__d",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#samsung_pay_svg__c"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M2.617 5.874c.473 0 .64-.294.669-.474.012-.07.017-.163.016-.248V4.21H2.63v-.958h2.325v1.754c0 .121-.005.21-.02.429-.111 1.183-1.15 1.61-2.316 1.61-1.162 0-2.194-.427-2.303-1.61a3.343 3.343 0 01-.024-.43V2.26c0-.118.013-.324.028-.428C.463.604 1.457.218 2.62.218c1.165 0 2.19.382 2.306 1.613.024.202.014.428.014.428l.003.214H3.286v-.365s0-.156-.02-.249c-.03-.142-.156-.473-.658-.473-.473 0-.615.314-.653.473a1.403 1.403 0 00-.025.308v2.985c0 .085.004.177.01.248.035.18.201.474.677.474",
      fill: "#FFF",
      mask: "url(#samsung_pay_svg__d)"
    })))));
  };

  var _default = SvgSamsungPay;
  _exports["default"] = _default;
});