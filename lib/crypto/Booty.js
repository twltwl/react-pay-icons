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
    global.Booty = mod.exports;
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

  var SvgBooty = function SvgBooty(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 32,
      height: 32,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "booty_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "booty_svg__a"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5,
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0",
      "in": "shadowBlurOuter1"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "booty_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#booty_svg__a)",
      xlinkHref: "#booty_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00B4F4",
      xlinkHref: "#booty_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#booty_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#booty_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("path", {
      d: "M8.459 21.398v.144H6.982v-2.708l-.046.15-1.411-.431.797-2.609-.098.146L5 15.264l1.53-2.267-.146.118-.93-1.147 2.201-1.782-.28.108-.53-1.379 2.629-1.009-.308.022-.102-1.473 2.752-.192-.249-.057.332-1.439 2.63.607-.166-.096L15.1 4l2.293 1.324-.09-.096 1.08-1.007 1.786 1.915-.038-.078 1.327-.647 1.146 2.348-.01-.065 1.457-.231.43 2.712.03-.193 1.459.23-.436 2.754.107-.221 1.327.647-1.228 2.518.18-.192L27 16.725l-1.909 2.047.231-.134.738 1.279-2.399 1.385.241-.056.333 1.438-2.652.612.205.015-.103 1.472-2.654-.185.135.052-.53 1.378-2.54-.975.161.13-.929 1.147-2.097-1.698.104.154-1.224.825-1.5-2.222.045.146-1.412.432-.785-2.569zm0-1.754.922-.282.716 2.344.798-.538 1.362 2.02.609-.751 1.888 1.529.338-.88 2.276.873.066-.953 2.436.17-.22-.948 2.388-.552-.495-.856 2.131-1.23-.73-.68 1.683-1.806-.898-.438 1.083-2.219-.982-.156.386-2.437-.94.15-.385-2.437-.846.413-1.075-2.204-.69.643-1.662-1.783-.476.824-2.105-1.215-.218.942-2.368-.547.069.984-2.431.17.359.936-2.29.879.617.76-1.922 1.556.811.547-1.385 2.054.933.285-.723 2.367h.97v2.466zm3.262-9.028H14.7c.346 0 .69.024 1.032.073.342.049.642.147.902.293.26.147.457.352.592.615.135.263.173.612.113 1.048-.06.452-.24.826-.536 1.122a2.54 2.54 0 0 1-1.088.638v.022c.255.038.483.111.682.22.2.11.363.248.49.417.128.17.219.367.271.592.053.226.06.466.023.722-.06.421-.2.772-.418 1.054-.218.282-.48.51-.789.683a3.484 3.484 0 0 1-1.015.372 5.42 5.42 0 0 1-1.083.112h-3.27l1.116-7.983zm1.309 3.191h1.274c.135 0 .27-.015.406-.045.135-.03.261-.08.378-.147a.916.916 0 0 0 .293-.27.924.924 0 0 0 .152-.406.684.684 0 0 0-.05-.412.607.607 0 0 0-.243-.254 1.173 1.173 0 0 0-.367-.13 2.211 2.211 0 0 0-.411-.039h-1.196l-.236 1.703zm-.463 3.304h1.58c.134 0 .275-.015.422-.045a1.166 1.166 0 0 0 .716-.451.916.916 0 0 0 .17-.44c.022-.188-.004-.34-.08-.457a.707.707 0 0 0-.315-.265 1.654 1.654 0 0 0-.446-.124 3.313 3.313 0 0 0-.457-.034h-1.33l-.26 1.816zm8.488-6.369-1.867 6.82-1.541-.108 1.162-7.031 2.246.32zm-1.627 7.532-.486 2.41-2.05-.598.47-2.312 2.066.5z",
      fill: "#FEFFFF"
    }))));
  };

  var _default = SvgBooty;
  _exports["default"] = _default;
});