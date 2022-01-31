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
    global.Dent = mod.exports;
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

  var SvgDent = function SvgDent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 32,
      height: 32
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "dent_svg__a",
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
      id: "dent_svg__d",
      width: "117.5%",
      height: "115.9%",
      x: "-8.8%",
      y: "-5.7%",
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
      id: "dent_svg__c",
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
      id: "dent_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "dent_svg__e",
      d: "M25.082 20.15a1.533 1.533 0 0 1-2.072.545l-4.779-2.71v-1.72l1.518-.86 4.778 2.709c.726.411.974 1.323.555 2.035zm-7.565 3.659c0 .823-.679 1.49-1.517 1.49-.838 0-1.517-.667-1.517-1.49V18.39L16 17.53l1.517.86v5.418zM8.99 20.695a1.533 1.533 0 0 1-2.072-.546 1.476 1.476 0 0 1 .555-2.035l4.778-2.71 1.518.861v1.72l-4.779 2.71zm-1.517-8.809a1.476 1.476 0 0 1-.555-2.035 1.533 1.533 0 0 1 2.072-.546l4.779 2.71v1.72l-1.518.86-4.778-2.709zm7.01-5.695c0-.823.68-1.49 1.517-1.49.838 0 1.517.667 1.517 1.49v5.418L16 12.47l-1.517-.86V6.191zm3.748 8.354.804.455-.804.455v-.91zm-1.517-1.67.803-.456v.911l-.803-.455zm-2.231.455v-.91l.803.455-.803.455zm-.714 2.125L12.965 15l.804-.455v.91zm1.517 1.67-.803.456v-.911l.803.455zm2.231-.455v.91l-.803-.455.803-.455zM16 16.72l-1.517-.86v-1.72L16 13.28l1.517.86v1.72L16 16.72zm7.01-7.415a1.533 1.533 0 0 1 2.072.546c.42.712.17 1.624-.555 2.035l-4.778 2.71-1.518-.861v-1.72l4.779-2.71zm1.874 8.202L20.463 15l4.421-2.507a2.17 2.17 0 0 0 .817-2.993c-.616-1.048-1.981-1.407-3.048-.802l-4.422 2.507V6.19C18.231 4.981 17.232 4 16 4c-1.232 0-2.231.981-2.231 2.191v5.014L9.347 8.698C8.28 8.093 6.915 8.452 6.3 9.5a2.17 2.17 0 0 0 .817 2.993L11.537 15l-4.42 2.507a2.17 2.17 0 0 0-.818 2.993c.616 1.048 1.981 1.407 3.048.802l4.422-2.507v5.014c0 1.21.999 2.191 2.231 2.191 1.232 0 2.231-.981 2.231-2.191v-5.014l4.422 2.507c1.067.605 2.432.246 3.048-.802a2.17 2.17 0 0 0-.817-2.993z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#dent_svg__a)",
      xlinkHref: "#dent_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#666",
      xlinkHref: "#dent_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#dent_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#dent_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#dent_svg__d)",
      xlinkHref: "#dent_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#dent_svg__e"
    }))));
  };

  var _default = SvgDent;
  _exports["default"] = _default;
});