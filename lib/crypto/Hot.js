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
    global.Hot = mod.exports;
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

  var SvgHot = function SvgHot(props) {
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
      id: "hot_svg__c"
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
      id: "hot_svg__a"
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
      id: "hot_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#hot_svg__a)",
      xlinkHref: "#hot_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#8834FF",
      xlinkHref: "#hot_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#hot_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#hot_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("path", {
      d: "M7 20.23c.191 0 .392.01.583 0 .363-.027.727-.1 1.082-.19a5.494 5.494 0 0 0 1.928-.965c.164-.127.327-.263.482-.409.327-.327.61-.7.837-1.1.2-.355.345-.737.455-1.128.009-.027.009-.064.018-.091h-1.428a4.1 4.1 0 0 1-.882-.1.248.248 0 0 0-.082-.018.131.131 0 0 1-.037-.028c.082-.181.155-.354.228-.536l.555-1.283a.603.603 0 0 1 .081-.172.207.207 0 0 1 .146-.055c.446-.009.882 0 1.328 0h.118c-.018-.073-.018-.127-.036-.19a4.682 4.682 0 0 0-.837-1.693 6.426 6.426 0 0 0-.628-.69 4.666 4.666 0 0 0-.936-.683 6.341 6.341 0 0 0-1.11-.491 5.91 5.91 0 0 0-.982-.218c-.264-.028-.519-.037-.782-.055-.064 0-.128-.009-.191-.018a.082.082 0 0 1-.055-.055c-.091-.209-.182-.409-.273-.618-.11-.246-.21-.491-.318-.728-.082-.2-.173-.39-.264-.6l.191-.055c.4-.054.81-.072 1.219-.054a8.738 8.738 0 0 1 1.928.282c.4.109.8.245 1.182.409.537.227 1.046.51 1.52.846.208.154.417.318.618.482.09.073.181.155.272.236.455.437.855.937 1.192 1.474.336.536.582 1.118.746 1.728.054.2.09.41.136.61a.08.08 0 0 0 .073.054h1.846c.037-.146.064-.291.091-.437.11-.427.255-.837.437-1.228.145-.327.327-.645.536-.936.191-.264.391-.528.61-.773a5.73 5.73 0 0 1 .518-.537 8.284 8.284 0 0 1 1.237-.928c.455-.282.928-.51 1.428-.691.346-.118.691-.227 1.037-.318.263-.064.518-.11.791-.146.218-.036.446-.054.673-.073.146-.009.282-.018.428-.018.218 0 .427-.009.636 0 .21.01.419.055.628.091.009 0 .009.01.027.027l-.155.364c-.163.382-.327.764-.5 1.155a5.877 5.877 0 0 0-.182.419c-.036.09-.127.054-.19.072-.055.01-.1.01-.155 0a6.308 6.308 0 0 0-2.683.628 5.348 5.348 0 0 0-1.092.71c-.136.118-.29.236-.418.372-.328.328-.61.7-.837 1.11a5.451 5.451 0 0 0-.436 1.064c-.01.027-.01.064-.019.091h.1c.473 0 .955-.01 1.428 0 .282 0 .564.045.837.136.01.01.018.01.027.019l-.263.6c-.182.427-.373.855-.555 1.291-.055.128-.091.155-.237.155h-1.328c.037.127.064.236.1.346.128.382.31.745.537 1.082.137.2.282.382.437.564.09.109.19.218.29.309.337.327.72.61 1.128.837.346.2.719.364 1.101.49.364.128.746.21 1.137.246l.718.055c.091.01.182.01.273.018.018.01.037.018.046.037.154.363.309.727.473 1.091l.39.891c-.127.028-.245.055-.372.064-.31.018-.628.036-.937.036-.282 0-.564-.027-.837-.063a16.283 16.283 0 0 1-1.128-.2 8.51 8.51 0 0 1-1.31-.437 7.936 7.936 0 0 1-1.436-.8 19.28 19.28 0 0 1-.691-.537 4.257 4.257 0 0 1-.419-.391 7.38 7.38 0 0 1-1.4-2 6.055 6.055 0 0 1-.455-1.374c-.018-.046-.027-.1-.037-.146 0-.09-.045-.109-.127-.109h-1.837a6.713 6.713 0 0 1-.437 1.437 5.722 5.722 0 0 1-.609 1.11 9.887 9.887 0 0 1-.61.773 4.653 4.653 0 0 1-.509.527c-.282.246-.582.473-.882.7a7.216 7.216 0 0 1-1.146.665 8.122 8.122 0 0 1-2.365.709c-.282.045-.564.073-.845.1a4.26 4.26 0 0 1-.482 0c-.237 0-.473-.01-.7-.018-.083-.01-.165-.018-.246-.037-.046-.009-.064-.027-.037-.081.182-.419.373-.837.555-1.256.11-.254.21-.49.327-.754z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgHot;
  _exports["default"] = _default;
});