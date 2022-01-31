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
    global.Swish = mod.exports;
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

  var SvgSwish = function SvgSwish(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 40 26"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "a",
      x1: -1293.17,
      x2: -1293.17,
      y1: -481.51,
      y2: -482.11,
      gradientTransform: "matrix(3.84279 0 0 -8.56913 4972.5 -4114.44)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#9ed0b7"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.43,
      stopColor: "#a0d7f6"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#2f4e98"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "b",
      x1: -1538.08,
      x2: -1538.08,
      y1: -466.86,
      y2: -467.5,
      gradientTransform: "matrix(8.33865 0 0 -10.21501 12830.52 -4759.9)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#f5da09"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.27,
      stopColor: "#87b958"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.62,
      stopColor: "#a0d7f6"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#517dbc"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "c",
      x1: -1289.03,
      x2: -1289.03,
      y1: -482.58,
      y2: -483.1,
      gradientTransform: "matrix(3.80077 0 0 -8.47538 4908.24 -4079.91)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#ffd701"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#e52038"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "d",
      x1: -1532.95,
      x2: -1532.95,
      y1: -466.28,
      y2: -466.91,
      gradientTransform: "matrix(8.13359 0 0 -10.27749 12475.52 -4780.9)",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: 0,
      stopColor: "#fce245"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.28,
      stopColor: "#f4ab58"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.5,
      stopColor: "#ea736b"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 0.7,
      stopColor: "#d45596"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: 1,
      stopColor: "#3e58a0"
    }))), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h40v26H0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "url(#a)",
      d: "M2.4 11.6v-.2a4.5 4.5 0 00-.5 2.06 4.42 4.42 0 001.54 3.38l.91-1.19-.04-.04a4.3 4.3 0 01-1.92-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "url(#b)",
      d: "M3.2 12.03l.01-.09.02-.08.03-.08v-.02l.02-.06v-.02l.03-.07v-.01l.03-.07v-.02l.03-.06.01-.02.02-.06.02-.02.02-.06.01-.03.03-.05.01-.03.03-.04.01-.04.03-.04.02-.04.02-.04.03-.04.02-.03.02-.04.03-.04.02-.04.03-.03.03-.05.02-.03.05-.07A3.31 3.31 0 017.7 9.49a3.93 3.93 0 00-1.66-.37h-.27l-.03.01-.13.01h-.02l-.1.02h-.05l-.1.02h-.02l-.13.03h-.03l-.1.03-.03.01-.12.03-.12.04-.03.01-.1.04h-.02l-.12.05-.02.01-.1.04-.03.02-.09.04-.02.01-.1.06-.04.02-.08.04-.03.02-.1.06-.01.01-.1.07-.03.02-.08.05-.03.02-.1.08-.01.01-.08.06-.03.03-.07.06-.02.02-.1.09-.02.02-.06.07-.03.03-.08.08-.01.02-.07.08-.03.03-.06.07-.02.03-.08.1-.02.02-.05.08-.03.03-.05.08-.02.03-.06.1-.02.04-.04.07-.03.04-.05.1v.01l-.02.22a4.3 4.3 0 001.92 4 3.71 3.71 0 01-1.12-3.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "url(#c)",
      d: "M9.7 15.3a1.41 1.41 0 01-.02.18 4.5 4.5 0 00.47-2.02 4.42 4.42 0 00-1.52-3.37l-.9 1.18A4.26 4.26 0 019.7 15.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "url(#d)",
      d: "M8.22 16.33a3.32 3.32 0 01-3.7 1.17 3.93 3.93 0 001.51.3 4.1 4.1 0 003.65-2.32 1.41 1.41 0 00.02-.18 4.26 4.26 0 00-1.96-4.03l-.02.02a3.73 3.73 0 01.5 5.04"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#4d4d4f",
      d: "M12.57 15.28l.11-.18c.15-.2.32-.23.56-.1a2.21 2.21 0 001.11.35c.43 0 .7-.2.7-.52 0-.82-2.47-.51-2.47-2.25 0-1 .86-1.52 1.9-1.52a2.74 2.74 0 011.39.37.38.38 0 01.15.55l-.1.18c-.12.24-.3.27-.55.16a2.2 2.2 0 00-.95-.25c-.43 0-.67.18-.67.5 0 .83 2.47.5 2.47 2.23 0 .9-.74 1.56-1.9 1.56a2.88 2.88 0 01-1.66-.52.36.36 0 01-.1-.56m4.09-3.63a.33.33 0 01.34-.47h.47a.4.4 0 01.44.37l.8 2.95.1.54h.02l.1-.54.84-2.95a.41.41 0 01.45-.36h.37a.42.42 0 01.45.36l.83 2.95a3.67 3.67 0 01.11.54H22a5.3 5.3 0 01.1-.54l.8-2.95a.42.42 0 01.45-.37h.45c.29 0 .42.19.34.47l-1.28 4.24a.43.43 0 01-.46.35h-.65a.43.43 0 01-.46-.36l-.75-2.53a4.4 4.4 0 01-.12-.54h-.02s-.05.28-.13.54l-.75 2.53a.42.42 0 01-.45.36h-.67a.42.42 0 01-.45-.35zm8.21-.05a.37.37 0 01.4-.42h.43a.37.37 0 01.4.42v4.22c0 .28-.14.42-.4.42h-.43a.36.36 0 01-.4-.42zm2.05 3.68l.12-.18c.14-.2.31-.23.56-.1a2.21 2.21 0 001.1.35c.44 0 .7-.2.7-.52 0-.82-2.47-.51-2.47-2.25 0-1 .86-1.52 1.9-1.52a2.73 2.73 0 011.4.37.38.38 0 01.14.55l-.1.18c-.11.24-.3.27-.55.16a2.2 2.2 0 00-.94-.25c-.43 0-.68.18-.68.5 0 .83 2.47.5 2.47 2.23 0 .9-.74 1.56-1.9 1.56a2.87 2.87 0 01-1.65-.52.36.36 0 01-.1-.56m4.39-5.67a.37.37 0 01.4-.41h.43a.37.37 0 01.4.41v2.05a2.83 2.83 0 01-.02.42h.02a1.96 1.96 0 011.73-1.02c1.1 0 1.73.59 1.73 1.93v2.83a.37.37 0 01-.4.42h-.43a.37.37 0 01-.4-.42v-2.58c0-.61-.16-1.03-.79-1.03a1.5 1.5 0 00-1.43 1.68v1.93a.37.37 0 01-.41.42h-.42a.37.37 0 01-.41-.42zm6-.26a1.1 1.1 0 11-1.05 1.1 1.07 1.07 0 011.05-1.1zm0 1.99a.9.9 0 10-.84-.9.86.86 0 00.84.9zm-.36-1.37a.09.09 0 01.1-.1h.33a.33.33 0 01.35.35.3.3 0 01-.2.3.3.3 0 01.03.07l.15.3c.04.07.02.12-.05.12h-.04a.11.11 0 01-.11-.07l-.17-.37h-.19v.34c0 .06-.02.1-.09.1h-.02c-.07 0-.1-.04-.1-.1zm.38.44a.17.17 0 00.18-.2.17.17 0 00-.17-.17h-.19v.37z"
    })));
  };

  var _default = SvgSwish;
  _exports["default"] = _default;
});