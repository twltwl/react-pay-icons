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
    global.Zilla = mod.exports;
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

  var SvgZilla = function SvgZilla(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "zilla_svg__c",
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
    })), /*#__PURE__*/React.createElement("filter", {
      id: "zilla_svg__a",
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
    })), /*#__PURE__*/React.createElement("circle", {
      id: "zilla_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#zilla_svg__a)",
      xlinkHref: "#zilla_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#00004D",
      fillRule: "evenodd",
      xlinkHref: "#zilla_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#zilla_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#zilla_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 15,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeLinejoin: "square",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M14.535 5.882c-.086.365-.344 1.52-.462 2.291-.047.317-.243.74.306.967-.126.025-.165.041-.204.033-.392-.049-.792-.106-1.184-.155-.086-.008-.196-.024-.274.017a1.14 1.14 0 00-.494 1.495c.149.317.196.61.133.943a.468.468 0 00.047.252c.306.747.36 1.495.118 2.275-.04.122-.016.268-.008.398.015.252.031.504.055.756-.385-.309-.808-.585-1.13-.959A1.869 1.869 0 0111 12.822c.007-.098-.071-.212-.134-.3-.18-.27-.392-.513-.54-.797-.212-.407-.471-.577-.894-.447-.212.065-.408.203-.588.341-.157.114-.29.26-.432.39-.015-.016-.039-.032-.055-.049.024-.057.032-.122.063-.178.22-.407.212-.399-.094-.74-.588-.658-1.098-1.365-1.317-2.26-.11-.446-.243-.885-.36-1.324-.589.732-.667 3.365-.087 4.405-.18-.919-.36-1.788-.157-2.682.04.203.063.398.07.601.032.724.205 1.406.51 2.048.063.138.243.22.377.317.047.033.11.049.164.073-.007.033-.007.065-.015.09-.29-.016-.573-.049-.863-.057-.188-.008-.407-.057-.556.024-.196.106-.353.31-.463.512-.031.057.126.285.243.374.314.236.525.496.478.935-.007.105.11.292.212.333.282.105.36.317.408.585.031.17.055.39.164.488.353.325.463.715.47 1.186.009.3.165.61.126.902-.031.252.016.439.118.585H7.84l.024.025a.945.945 0 00.25.252l.204.195s.353.382.36.755c.009.374-.023.423.087.756.11.325.259.585.306.862.047.276-.055.357.11.536.164.179.345.3.533.504.18.211.439.284.611.463.173.179.447.512.659.723.11.114.259.203.368.268.032.033.047.05.04.065-.15.326.156.317.274.423.204.179.494.293.643.512.266.398.611.601 1.043.723.039.008.086.017.102.041.054.065.094.146.14.22-.015.024-.039.048-.054.073.431.154.862.316 1.293.463a.454.454 0 00.275.008c.36-.122.721-.252 1.082-.382.07-.024.18-.098.172-.13-.055-.26.157-.22.275-.285.282-.154.611-.268.823-.487.259-.276.494-.56.839-.748.14-.081.423-.114.282-.422-.008-.017.07-.082.11-.122.055-.049.117-.09.196-.155.055-.024.117-.065.22-.138a7.56 7.56 0 00.885-.861c.188-.236.494-.529.494-.529s-.196-.463-.07-.87l.666-.495c.141-.3.18-.414.337-.723.15-.309.188-.902.4-1.138.188-.203.416-.366.408-.496a.94.94 0 00.047-.43c-.024-.212.047-.431.07-.642.016-.18 0-.358.047-.529.079-.276.134-.6.306-.796.188-.211.314-.398.337-.683.024-.243.118-.438.36-.552a.51.51 0 00.236-.382c-.008-.366.11-.626.408-.82.086-.058.149-.155.235-.22.141-.106.118-.228.04-.366-.205-.366-.51-.496-.918-.423a6.7 6.7 0 01-.933.09c-.165 0-.047-.122-.047-.122.58-.016.65-.496.784-.886a6.24 6.24 0 00.227-1.008c.055-.325.055-.48.118-.983.063-.504.212.975-.024 2.186.47-.715.322-3.307-.204-4.071-.015.016-.03.024-.03.04-.024.098-.04.195-.064.293-.227 1.243-.697 2.357-1.568 3.267-.321.333-.305.341-.086.772.024.04.024.097.031.154-.188-.09-.329-.22-.47-.341a1.276 1.276 0 00-.933-.358c-.376 0-.478.277-.588.545-.204.487-.682.788-.698 1.438-.023.951-.87 1.43-1.419 2.064-.008.009-.031-.008-.062-.008-.008-.032-.032-.073-.024-.105 0-.586.157-1.179-.102-1.74-.016-.032-.008-.08 0-.113.102-.821.196-1.634.306-2.446.016-.106.07-.204.117-.301.275-.585.071-1.252-.486-1.544a.405.405 0 00-.22-.033c-.305.041-.603.098-.9.138-.15.025-.307.025-.456.033a.437.437 0 00-.023-.065c.25-.081.376-.236.321-.512l-.564-2.812c-.016-.073-.031-.439.055-.252.086.195.36 1.032.517 1.56.15.513.267 1.04.4 1.56-.22-1.454-.557-2.868-1.388-4.16a3.44 3.44 0 00-.525.918 40.95 40.95 0 00-.564 1.788c-.134.463-.479 1.374-.33 1.398.15.024.878-2.706.925-2.901.047-.195.134-.187.047.179z"
    }))));
  };

  var _default = SvgZilla;
  _exports["default"] = _default;
});