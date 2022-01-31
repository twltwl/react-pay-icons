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
    global.Ant = mod.exports;
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

  var SvgAnt = function SvgAnt(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "ant_svg__a",
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
      id: "ant_svg__d",
      width: "115.9%",
      height: "117.5%",
      x: "-8%",
      y: "-6.2%",
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
      id: "ant_svg__c",
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
      id: "ant_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "ant_svg__e",
      d: "M7.965 16.598a5.289 5.289 0 0 1-.01-.317c0-3.517 2.742-6.376 6.172-6.498.082 0 .17 0 .252.007l-.818-.813s3.293-.55 7.521 1.992c0 0 .062.129 0 .508 0 0 1.992.854 2.162 2.514.17 1.66-.886 2.609-1.739 2.744 0 0 .443-.684-.238-1.05a.91.91 0 0 0-.485-.108c-1.302 0-1.452 1.477-1.452 1.477-.014.074-.014.149-.014.223 0 0-.19 1.879 2.922 2.1a18.46 18.46 0 0 0 1.861-2.934 21.79 21.79 0 0 0 1.853-5.146C24.139 9.811 22 8.537 19.702 7.47c-.862-.4-1.697-.747-2.488-1.045a27.381 27.381 0 0 0-1.22-.43c-.322.104-.73.246-1.22.43-.79.297-1.626.645-2.487 1.045C9.99 8.536 7.85 9.81 6.038 11.298c.098.472.247 1.061.461 1.745a21.528 21.528 0 0 0 1.466 3.555zM27 10.902l-.05.28c-.026.217-.203.995-.421 1.74a22.672 22.672 0 0 1-1.569 3.95c-.906 1.766-2.006 3.306-3.268 4.574-1.557 1.561-3.359 2.714-5.367 3.432l-.112.04L16 25l-.211-.074-.118-.041a14.314 14.314 0 0 1-5.366-3.433c-1.268-1.28-2.367-2.817-3.268-4.574a22.706 22.706 0 0 1-1.89-5.203c-.05-.224-.105-.504-.095-.464L5 10.923l.12-.1.088-.075c1.844-1.552 4.025-2.883 6.38-4.002a34.164 34.164 0 0 1 4.087-1.647L15.993 5l.217.065.108.035c1.08.347 2.515.9 4.084 1.646 2.352 1.117 4.53 2.446 6.372 3.995l.226.16zm-7.602.724c.055-.027.232-.115.437-.325.409.054.811.183.811.183-.743-.447-1.76-.712-2.885-.705 0 0 .43.61 1.623.86l.014-.013z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ant_svg__a)",
      xlinkHref: "#ant_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#2CD3E1",
      xlinkHref: "#ant_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ant_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ant_svg__b"
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
      filter: "url(#ant_svg__d)",
      xlinkHref: "#ant_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#ant_svg__e"
    })))));
  };

  var _default = SvgAnt;
  _exports["default"] = _default;
});