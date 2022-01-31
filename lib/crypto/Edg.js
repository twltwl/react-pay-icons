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
    global.Edg = mod.exports;
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

  var SvgEdg = function SvgEdg(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "edg_svg__a",
      width: "111.7%",
      height: "111.7%",
      x: "-5.8%",
      y: "-4.2%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "shadowBlurOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
    })), /*#__PURE__*/React.createElement("filter", {
      id: "edg_svg__d",
      width: "119.5%",
      height: "117.5%",
      x: "-9.7%",
      y: "-6.3%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "shadowBlurOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "edg_svg__c",
      x1: "50%",
      x2: "50%",
      y1: "0%",
      y2: "100%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#FFF",
      stopOpacity: 0.5
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopOpacity: 0.5
    })), /*#__PURE__*/React.createElement("circle", {
      id: "edg_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "edg_svg__e",
      d: "M24.99 11.502v6.656c0 .296.015.598-.052.889a3.47 3.47 0 0 1-1.002 1.76c-.236.227-.53.374-.811.54-1.907 1.11-3.808 2.223-5.714 3.335-.582.311-1.27.364-1.916.284a2.609 2.609 0 0 1-.96-.314c-2.007-1.17-4.014-2.343-6.02-3.512-.49-.273-.856-.723-1.125-1.207-.22-.42-.381-.882-.381-1.363v-7.186c.037-.7.347-1.363.788-1.892a2.47 2.47 0 0 1 .639-.564c1.865-1.086 3.73-2.176 5.594-3.266.307-.17.598-.378.93-.492a3.564 3.564 0 0 1 1.735-.098c.257.072.519.148.75.284 2.03 1.191 4.063 2.373 6.092 3.565.541.32.938.855 1.196 1.426.163.36.257.757.257 1.155zm-9.05-2.476a10.676 10.676 0 0 1-1.487 1.76c-.292.277-.573.576-.74.947-.134.262-.224.56-.186.86.045.404.333.76.707.904.38.152.81.118 1.188-.03a.393.393 0 0 1 .217-.03c-.074.474-.362.874-.59 1.283l.01.068c.206.22.423.428.628.644.052.049.1.117.172.14.239-.185.426-.428.646-.632.049-.056.15-.117.097-.204-.213-.4-.449-.805-.516-1.267.04-.094.153-.015.22.008.355.174.784.2 1.155.057.505-.193.819-.784.706-1.318-.086-.48-.34-.92-.684-1.256-.53-.545-1.039-1.127-1.401-1.801a.235.235 0 0 0-.142-.133zm-3.633 6.51c-.6.326-1.001.965-1.1 1.644-.137.953.42 1.949 1.283 2.339.546.235 1.18.23 1.73.015.284-.114.527-.3.736-.519.079-.084.194-.159.194-.288-.01-.129-.126-.2-.201-.288-.098-.087-.176-.2-.288-.269-.18-.079-.288.118-.404.216-.455.462-1.274.466-1.74.015a1.255 1.255 0 0 1-.378-1.12c.056-.383.284-.746.624-.928.22-.11.467-.17.71-.159.343.022.657.204.889.454.792.788 1.554 1.605 2.343 2.396.418.413.997.678 1.587.655.45.01.883-.17 1.249-.424.539-.375.867-1.026.9-1.684.072-1.042-.683-2.093-1.7-2.294-.649-.132-1.382.004-1.882.466-.356.324-.68.688-1.032 1.021-.363-.299-.65-.677-1.005-.983a1.75 1.75 0 0 0-.52-.341c-.036-.023-.048-.034-.096-.053a2.103 2.103 0 0 0-1.899.129zm5.037 1.052c.259-.258.625-.409.99-.379.396.011.78.223.99.564.328.5.232 1.219-.19 1.631-.434.421-1.178.474-1.645.076-.347-.295-.638-.647-.97-.957-.004-.022-.008-.064-.012-.083.277-.288.56-.564.837-.852z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#edg_svg__a)",
      xlinkHref: "#edg_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#2B1544",
      xlinkHref: "#edg_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#edg_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#edg_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#edg_svg__d)",
      xlinkHref: "#edg_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#edg_svg__e"
    })))));
  };

  var _default = SvgEdg;
  _exports["default"] = _default;
});