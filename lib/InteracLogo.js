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
    global.InteracLogo = mod.exports;
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

  var SvgInteracLogo = function SvgInteracLogo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 70 70",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M68.99 62.997a5.659 5.659 0 01-5.668 5.641H6.677a5.659 5.659 0 01-5.667-5.641V6.647a5.659 5.659 0 015.667-5.642h56.645a5.659 5.659 0 015.668 5.642v56.35z",
      fill: "#F0B51C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.677 69.157a6.172 6.172 0 01-6.188-6.16V6.647A6.172 6.172 0 016.677.487h56.645a6.172 6.172 0 016.19 6.16v56.382a6.171 6.171 0 01-6.19 6.16l-56.645-.032z",
      fill: "#F0B51C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M63.322 1.005a5.659 5.659 0 015.668 5.642v56.382a5.659 5.659 0 01-5.667 5.642l-56.645-.032a5.659 5.659 0 01-5.668-5.642V6.647a5.659 5.659 0 015.668-5.642h56.645zm0-1.005H6.678A6.671 6.671 0 000 6.647v56.35c.014 3.677 3 6.65 6.678 6.646l56.645.033A6.671 6.671 0 0070 63.029V6.647A6.671 6.671 0 0063.322 0z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38.958 35.568V23.442l3.192-.746v1.588a4.523 4.523 0 012.736-2.56c.282-.101.586-.124.88-.066v3.08a4.293 4.293 0 00-1.662.357 2.872 2.872 0 00-1.759 3.015v6.68l-3.387.778zM22.215 39.49a7.173 7.173 0 01-.521-3.501v-6.03l-1.629.388v-2.496l1.629-.39v-2.69l3.387-.81v2.723l2.378-.551v2.496l-2.378.551v6.128c0 2.789.75 3.34.75 3.34l-3.616.843zM27.818 32.293a9.882 9.882 0 01.977-4.928 5.651 5.651 0 013.941-2.789c3.714-.843 5.05 1.33 4.984 4.28-.033 1.037 0 1.556 0 1.556l-6.515 1.524v.097c0 2.043.424 3.016 1.727 2.756a1.772 1.772 0 001.53-1.815c0-.13.033-.487.033-.487l3.062-.713v.519a5.117 5.117 0 01-4.625 5.058c-4.04.907-5.114-1.524-5.114-5.058zm5.081-5.48c-1.075.26-1.661 1.297-1.661 3.048l3.29-.778v-.519c-.033-1.33-.424-2.01-1.629-1.75zM57.166 25.192c-.13-3.696.847-6.614 4.984-7.554 2.638-.584 3.648.097 4.137.746.52.784.761 1.72.684 2.658v.227l-3.225.778v-.454c0-1.394-.391-1.945-1.433-1.686-1.238.292-1.727 1.46-1.727 3.761v1.07c0 2.335.326 3.405 1.727 3.113 1.237-.26 1.4-1.33 1.4-2.27v-.616l3.225-.745v.486a5.447 5.447 0 01-4.658 5.706c-4.137.973-4.984-1.426-5.114-5.22zM45.993 30.38c0-2.82 1.662-3.696 4.137-4.701 2.248-.908 2.28-1.362 2.28-2.173 0-.68-.293-1.264-1.4-.972a1.658 1.658 0 00-1.336 1.588c-.032.325-.032.616-.032.616l-3.127.746a6.663 6.663 0 01.228-1.848c.488-1.686 1.987-2.82 4.56-3.404 3.322-.779 4.43.68 4.462 2.95v5.35c0 2.594.489 2.983.489 2.983l-3.062.713a6.415 6.415 0 01-.423-1.102 4.257 4.257 0 01-2.997 2.237 2.82 2.82 0 01-3.779-2.983zm6.417-3.858c-.521.349-1.065.663-1.628.94a2.18 2.18 0 00-1.499 2.075 1.066 1.066 0 001.434 1.135 2.357 2.357 0 001.693-2.464v-1.686zM4.56 47.985a1.956 1.956 0 01-1.954-1.945 1.803 1.803 0 01.326-1.07l.032-.032h.033l4.592-1.07v3.469l-.065.032c-1.042.26-2.28.519-2.54.584-.163 0-.293.032-.424.032zM4.56 52.427a1.956 1.956 0 01-1.954-1.945 1.804 1.804 0 01.326-1.07l.032-.032h.033l4.592-1.07v3.469l-.065.032c-1.042.26-2.28.551-2.54.584-.163 0-.293.032-.424.032zM4.56 56.87a1.956 1.956 0 01-1.954-1.946 1.803 1.803 0 01.326-1.07l.032-.033 4.626-1.07v3.47l-.066.032c-1.107.26-2.312.551-2.54.584a2.01 2.01 0 01-.424.032zM4.039 43.737v-19.42l3.55-.843v19.42l-3.55.843zM12.9 42.084a2.183 2.183 0 00-4.366 0v18.157a5.915 5.915 0 005.929 5.9h6.221V50.094a2.832 2.832 0 00-1.27-2.367l-5.538-3.729v8.495a.5.5 0 01-.488.486.453.453 0 01-.457-.486c-.032-.097-.032-9.305-.032-10.408zM15.863 28.532a4.693 4.693 0 00-3.16 2.431v-1.361l-3.192.745v8.722a3.62 3.62 0 011.206-.227c.793-.01 1.56.28 2.15.81v-5.64a2.485 2.485 0 011.628-2.627c.717-.162 1.336.097 1.336 1.394v8.203l3.387-.778v-8.69c0-2.107-.847-3.566-3.355-2.982zM64.886 16.082a2.075 2.075 0 11.02-4.15 2.075 2.075 0 01-.02 4.15zm0-3.891a1.816 1.816 0 10.017 3.631 1.816 1.816 0 00-.017-3.631z",
      fill: "#1C1601"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64.137 12.774h.912a.582.582 0 01.651.649c0 .324-.13.583-.423.616.26.032.39.162.39.519v.518a.233.233 0 00.131.227h-.456a.376.376 0 01-.065-.227 2.613 2.613 0 00-.033-.486c0-.292-.097-.39-.358-.39h-.326v1.103h-.423v-2.529zm.716 1.135a.423.423 0 000-.843h-.358v.81l.358.033z",
      fill: "#1C1601"
    })));
  };

  var _default = SvgInteracLogo;
  _exports["default"] = _default;
});