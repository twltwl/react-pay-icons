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
    global.Boost = mod.exports;
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

  var SvgBoost = function SvgBoost(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 60 40",
      style: {
        enableBackground: "new 0 0 60 40"
      },
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", {
      type: "text/css"
    }, ".st0{fill:#FFFFFF;}\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#EC3024;}\n\t.st2{fill:#EC3024;}"), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("title", null, "7-eleven"), /*#__PURE__*/React.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React.createElement("rect", {
      x: -1.2,
      y: -0.3,
      className: "st0",
      width: 62.4,
      height: 40.6
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      className: "st1",
      d: "M52.5,15.7v0.2h0.4V17h0.2v-1.2h0.4v-0.2H52.5z M53.7,15.7L53.6,17h0.2l0.1-1.1l0.4,1.1h0.1l0.4-1.1l0,1.1H55 l-0.1-1.4h-0.2l-0.4,1.1l-0.4-1.1H53.7z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st2",
      d: "M48.5,18.2v-2.6h1.8v2.6H52v1.4h-1.7c0,1.1,0,3.5,0,4.2c0,0.9,0.4,0.9,0.8,1c0.3,0,0.9-0.2,1.1-0.3l0.4,1.4 c-0.3,0.2-1.1,0.7-2.4,0.5c-1.4-0.2-1.7-1.2-1.7-1.9v-4.9h-1.1v-1.4H48.5z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st2",
      d: "M43.4,19.4c1.1,0,2.1,0.6,2.4,0.9l0.8-1.1l0,0c-1-0.8-2.6-1.1-3.3-1.1c-1.2,0-2.9,0.5-3.1,2.4 c-0.2,1.9,1.9,2.1,2.8,2.4c0.3,0.1,2.2,0.4,2.1,1.3c-0.2,1-1.2,0.9-2.1,0.9c-0.7,0-1.9-0.7-2.5-1c-0.3,0.4-0.8,1.2-0.8,1.2 c0.1,0.1,2,1.3,3.9,1.1c2-0.2,3-1,3.1-2.5c0.1-1.5-1.9-2.2-3.3-2.4c-1.4-0.3-1.6-0.8-1.6-1.1C42,20,42,19.4,43.4,19.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st1",
      d: "M26.1,26.5c2.3,0,4.1-1.9,4.1-4.2s-1.9-4.2-4.1-4.2s-4.1,1.9-4.1,4.2S23.8,26.5,26.1,26.5z M26.1,24.9 c1.3,0,2.3-1.2,2.3-2.7c0-1.5-1-2.7-2.3-2.7c-1.3,0-2.3,1.2-2.3,2.7C23.8,23.8,24.8,24.9,26.1,24.9z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st1",
      d: "M35.2,26.5c2.3,0,4.1-1.9,4.1-4.2s-1.9-4.2-4.1-4.2c-2.3,0-4.1,1.9-4.1,4.2S32.9,26.5,35.2,26.5z M35.2,24.9 c1.3,0,2.3-1.2,2.3-2.7c0-1.5-1-2.7-2.3-2.7c-1.3,0-2.3,1.2-2.3,2.7C32.9,23.8,34,24.9,35.2,24.9z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st1",
      d: "M7.4,12C6.1,12,5,13.1,5,14.4v11.2C5,26.9,6.1,28,7.4,28h11.2c1.3,0,2.4-1.1,2.4-2.4V14.4 c0-1.3-1.1-2.4-2.4-2.4H7.4z M10.9,26.2h4.6v0c2.3-0.1,4.1-1.9,4.1-4.2s-1.8-4.1-4.1-4.2v0h0c-0.1-2.3-1.9-4.1-4.2-4.1 c-2.3,0-4.1,1.8-4.2,4.1h0v4.6C7.1,24.5,8.8,26.2,10.9,26.2z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st2",
      d: "M11.1,24.5c-1.3,0-2.3-1-2.3-2.3v-4.4h0c0-1.3,1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4h0v1.8h1.8v0 c1.3,0,2.4,1.1,2.4,2.4c0,1.3-1.1,2.4-2.4,2.5v0H11.1z"
    }))));
  };

  var _default = SvgBoost;
  _exports["default"] = _default;
});