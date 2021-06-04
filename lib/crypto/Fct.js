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
    global.Fct = mod.exports;
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

  var SvgFct = function SvgFct(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "fct_svg__a",
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
      id: "fct_svg__d",
      width: "117.5%",
      height: "117.5%",
      x: "-8.8%",
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
      id: "fct_svg__c",
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
      id: "fct_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "fct_svg__e",
      d: "M7.686 9.633c-.033.222-.024.376.094.493-.152.265-.27.462-.383.682.114-.22.231-.413.383-.64.339.424 1.398.424 2.839-.042.17-.042.17.339.17.339 0 .212-.043.508-1.865.763-.509.084-1.23.042-1.568-.34-.085-.126-.127-.296-.127-.508 0-.042 0-.084.042-.17a2.56 2.56 0 01.005-.007.785.785 0 01.08-.204c.042-.127.127-.212.212-.339-.043.085-.127.254-.212.339a.922.922 0 01.212-.339zm.254-.545c.062-.092.13-.183.221-.275l-.127.17a1.036 1.036 0 00-.022.022c.045-.063.094-.126.149-.192l-.127.17a1.31 1.31 0 00-.094.105zm0 0c-.053.078-.102.155-.16.233a.419.419 0 00-.016.017 7.17 7.17 0 00-.103.167zm.901-1.015c.127-.106.253-.225.38-.32a1.42 1.42 0 00-.255.51c-.042.126-.042.253.042.338a4.529 4.529 0 00-.023.023c.28.312 1.196.22 2.354-.277.381-.17.763-.34 1.102-.55.127-.043.296.169.339.21.042.043.084.17 0 .255-.424.254-.89.508-1.399.678-1.456.624-2.627.717-2.949.319l-.017.02c-.042-.127-.084-.212-.042-.381 0-.043 0-.085.042-.128a1.39 1.39 0 01.125-.141 2.16 2.16 0 00-.167.184c0-.043.042-.127.042-.17.085-.17.17-.296.297-.466.03-.022.058-.045.088-.069.128-.18.317-.335.505-.524.34-.296.34-.296.509-.423a.83.83 0 01.117-.1 21.62 21.62 0 00-.043.036c.12-.09.244-.179.374-.266l.018-.01.065-.046a11.23 11.23 0 011.926-1.012c.11-.062.22-.116.33-.164-.065.026-.117.049-.178.075a6.001 6.001 0 01-.32.13c-.17.043-.17.043-.51.213-.17.084-.17.084-.466.254-.127.085-.127.085-.424.254a9.456 9.456 0 00-.358.25c2.774-1.365 2.58-1.306 2.385-1.229a7.724 7.724 0 00-.713.259c-.982.42-1.906 1.016-2.484 1.569-.087.07-.128.11-.228.21.054-.051.111-.102.17-.153a3.35 3.35 0 00-.255.28c-.133.133-.266.24-.379.362zm-2.407 9.83c.01.036.021.07.032.103a.683.683 0 00.17.296 18.668 18.668 0 01-.223-.695c-.004.275.079.516.223.695a4.414 4.414 0 01-.212-.804c.762 1.059 3.644.804 7.33-.763 4.704-1.991 8.983-5.38 9.577-7.583.127-.551.042-.932-.255-1.229.212.212.424.466.636.678.254.297.296.678.17 1.186-.594 2.245-4.958 5.677-9.789 7.71-4.194 1.826-7.357 1.907-7.66.407-.073-.247-.147-.566-.221-.788.042.127.085.254.17.382l.025.089a.952.952 0 00.006.159 1.382 1.382 0 01-.002-.146 12.671 12.671 0 01-.004-.013zm6.88-12.54l.059-.024c1.271-.339 2.076-.17 1.907.55-.043.255-.212.509-.466.763-.212.085-.678 0-.763-.085.212-.254.339-.466.381-.635.132-.56-.478-.71-1.472-.451l-.044.016zm-.077.03l.178-.054a5.335 5.335 0 00-.101.023zM6.212 16.408v.03c-.12-.12-.165-.277-.17-.472a1.287 1.287 0 01-.007-.255 4.192 4.192 0 01.008.242 1.177 1.177 0 01-.008-.251C6.023 15.48 6 15.226 6 15.04c0 .255.085.424.17.593 0 .128.01.265.02.403-.02-.138-.02-.275-.02-.403 2.838 3.008 15.593-4.787 15.72-8.091.042-.593-.297-.805-.466-.932l.339.212.423.296c.34.297.467.72.34 1.271-.551 2.118-4.704 5.38-9.238 7.287-3.59 1.549-6.363 1.752-7.076.732zm-.021-3.232l.063-.254c-.085.34-.042.636.127.805a2.028 2.028 0 00-.003.01c.083.1.197.172.342.244.127.17.043.593.043.593-.043.127-.085.297-.17.255-.424-.212-.593-.551-.55-1.06a.97.97 0 00.169.72l.004-.024a.983.983 0 01-.131-.653l.017-.11a.465.465 0 00-.017.11l.084-.593.085-.34v-.084l-.063.381zm.622-1.04a2.34 2.34 0 00-.177.532c-.128-.17-.17-.381-.128-.636 0-.084 0-.127.043-.211a5.28 5.28 0 01.296-.72.93.93 0 00.085.762l-.027.063c.531.696 2.467.52 4.942-.529 3.178-1.398 6.102-3.686 6.484-5.126.127-.55-.043-.89-.509-1.06.085-.042.085-.042.339.043.17.043.297.085.381.085.551.212.763.593.594 1.186-.424 1.61-3.602 4.11-7.077 5.592-2.754 1.144-4.873 1.356-5.423.551l.177-.532zm6.538 12.21c-.509.017-.931-.036-1.25-.155-.254-.127-.593-.254-.804-.381.517.214 1.195.267 1.975.19 4.465-.44 12.295-5.132 12.728-8.197l-.042.127a5.14 5.14 0 00-.085.763c0 .042 0 .084-.042.127-.509 1.821-4.11 4.66-8.051 6.354-1.775.757-3.31 1.133-4.427 1.172a.712.712 0 00-.002 0zm.496-1.742l.077-.107c-.026.035-.05.07-.075.106.643-.18 1.335-.413 2.066-.7.466-.127.636.17.636.17.042.042.042.212-.212.339-1.064.416-2.044.715-2.905.895a6.423 6.423 0 00-.019.037l.013-.036c-1.502.315-2.641.27-3.233-.134-.212-.17-.509-.38-.72-.55.682.584 2.26.571 4.372-.02zm-5.305-.912c-.17-.212-.381-.424-.508-.636.17.212.424.508.593.72a.091.091 0 00-.085-.084zm6.738-16.65c.254 0 .593-.042.847-.042.89 0 1.314.339 1.144 1.017-.212.805-1.356 1.949-2.839 2.965-.296.127-.593-.254-.508-.423 0-.043.042-.043.042-.043 1.314-.89 2.288-1.864 2.5-2.584.17-.678-.381-.974-1.356-.89h.17zm5.084.975c.509.254.72.678.551 1.313-.508 1.906-4.237 4.83-8.305 6.567-.763.338-1.525.593-2.203.804-.382.043-.424-.466-.254-.72.042-.084.084-.084.127-.127.635-.17 1.313-.423 2.034-.72 3.855-1.652 7.372-4.448 7.839-6.228.169-.635-.085-1.059-.636-1.27.254.127.593.254.847.38zm4.407 4.194l.127.212c.127.339.127.339.127.508v.042c-.127-.042-.38-.55-.423-.762 0-.254-.043-.424-.17-.593l.34.593zm.89 2.245c.042.212.042.466-.042.763-.509 1.864-3.687 4.617-7.543 6.609-.423.169-.678-.128-.593-.424a.434.434 0 01.212-.254c3.898-2.034 7.16-4.83 7.67-6.736.084-.34.084-.636 0-.89.127.339.254.678.296.932zm.297 1.78v.338c0 .17 0 .297-.043.509-.296 1.144-1.695 2.626-3.601 4.067-.297.212-.467-.085-.424-.297a.772.772 0 01.212-.339c1.991-1.482 3.432-3.008 3.729-4.194.042-.212.084-.423.042-.635l.085.55zM8.415 9.278c-.042-.127-.084-.212-.042-.381-.042.169 0 .254.042.38zm-1.06 1.61c-.084-.127-.126-.297-.126-.509 0 .212 0 .34.127.509zm-.72 1.779c-.127-.17-.169-.381-.127-.636-.042.255 0 .467.128.636zM22.61 14.15a.58.58 0 01-.085.55c-1.864 1.695-4.618 3.39-7.5 4.618-4.28 1.78-7.5 1.907-7.796.381-.043-.127 0-.042.042-.084 0 .042 0 .254.17.508-.043-.085-.085-.127-.127-.212-.043-.042-.043-.084-.085-.127-.085-.127-.127-.296-.212-.423.805 1.059 3.771.847 7.585-.805 2.881-1.229 5.635-2.966 7.5-4.618.339-.17.466.085.508.212zm-10.72 7.752c.042.085.085.255-.085.297-1.525.254-2.627.127-3.136-.424-.169-.212-.423-.508-.593-.72.466.593 1.61.763 3.263.508.297 0 .508.255.55.34zm13.347-3.092c.127-.254.255-.636.34-.89-.51 1.652-3.772 4.194-7.331 5.72-2.204.931-4.026 1.27-5 .974.254.084.635.17.932.212 2.712.423 9.576-2.966 11.06-6.016zm-2.203 3.05c0 .042-.085.17-.254.297-.933.762-2.204 1.525-3.517 2.075-1.102.466-2.077.72-2.797.763h-1.06c.848.042 2.077-.254 3.56-.847 1.483-.636 2.924-1.483 3.983-2.373.043 0 .043-.042.085-.042 0 0 0 .042.042.042 0 0 0 .043-.042.085zM6.508 11.863c0-.042.043-.127.043-.17.085-.254.254-.635.339-.89 0 .128-.043.213-.085.34-.127.212-.212.466-.297.72z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#fct_svg__a)",
      xlinkHref: "#fct_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#417BA4",
      xlinkHref: "#fct_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#fct_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#fct_svg__b"
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
      filter: "url(#fct_svg__d)",
      xlinkHref: "#fct_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#fct_svg__e"
    })))));
  };

  var _default = SvgFct;
  _exports["default"] = _default;
});