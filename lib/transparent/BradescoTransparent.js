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
    global.BradescoTransparent = mod.exports;
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

  var SvgBradescoTransparent = function SvgBradescoTransparent(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 354.33 280.43"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "bradesco_transparent_svg__a",
      clipPathUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 934.75V0h1181.1v934.75H0z"
    }))), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#bradesco_transparent_svg__a)",
      transform: "matrix(.3 0 0 -.3 0 280.426)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M823.13 161.59c-26.457 0-56.578-14.551-56.578-50.156 0-55.696 65.277-37.325 65.277-63.43 0-10.641-9.187-12.398-18.605-12.398-16.551 0-32.418 5.316-43.098 10.656V9.481c12.12-4.926 26.27-9.477 45.63-9.477 30.109 0 61.977 10.359 61.977 51.578 0 58.695-68.36 39.723-68.36 63.735 0 8.613 11.274 10.921 21.184 10.691 10.57-.277 26.949-4.68 36.648-11.512v37.903c-14.023 5.996-29.269 9.195-44.066 9.195m-118.43-66.123c0 17.777-7.133 32.309-25.488 32.309-16.555 0-24.461-14.532-25.488-32.309h50.976zm41.289-30.242h-91.742c2.539-21.316 16.563-29.633 39.004-29.633 12.5 0 26.754 3.258 40.535 11.84V9.788c-14.78-6.778-31.62-9.774-48.72-9.774-43.817 0-77.223 29.945-77.223 80.945 0 50.957 29.828 80.645 71.156 80.645 49.199 0 67-40.641 67-86.582v-9.793zm-490.02 96.375c-19.91 0-31.364-12.473-39.297-32.004h-.477v28.43h-41.808V3.59h45.898v65.215c0 30.188 11.828 48.391 33.211 49.93 4.422.32 11.777-.957 15.723-2.489v42.977c-3.887 1.406-9.114 2.379-13.25 2.379m112.66-88.531c-5.871.266-12.773.863-19.652.863-15.563 0-27.801-5.656-27.801-20.449 0-10.676 8.172-16.914 18.875-16.914 12.492 0 22.523 5.45 28.578 16.012v20.488zm.207-69.48v20.395c-8.43-15.697-23.4-23.974-40.76-23.974-26.246 0-49.73 15.133-49.73 48.621 0 47.141 44.133 52.797 68.601 52.797 7.422 0 15.524-.922 21.411-2.117-.278 21.07-13.75 26.703-30.309 26.703-14.793 0-29.605-3.274-42.336-11.57l-.019.414v36.105c16.097 7.438 32.925 10.637 52.257 10.637 33.91 0 63.246-16.926 63.246-64.051V40.016c0-12.133.497-24.238 2.536-36.426h-44.895zm764.87 77.05c0-22.812-8.71-43.266-29.83-43.266-21.17 0-29.82 20.453-29.82 43.266 0 23.144 8.65 43.562 29.82 43.562 21.12 0 29.83-20.418 29.83-43.562m-107.09 0c0-50.964 33.4-80.628 77.3-80.628 43.84 0 77.25 29.664 77.25 80.629 0 51.273-33.41 80.961-77.25 80.961-43.87 0-77.26-29.688-77.26-80.961m-516.5-39.707c-17.328 0-27.777 16.894-27.777 41.504 0 20.433 9.953 38.187 27.777 38.187 16.817 0 28.051-16.84 28.051-40.25 0-22.547-12.746-39.441-28.051-39.441m73.922 170.1h-46.121v-72.879h-.508c-11.75 17.81-27.29 23.45-45.62 23.45-36.73 0-56.87-40.04-56.87-78.004 0-45.625 21.13-83.586 60.66-83.586 19.563 0 36.699 9.625 45.653 26.785h.488V3.594h42.316v207.44zm-536.68-39.692h17.965c15.797 0 31.09-1.762 31.09-20.75 0-17.457-16.09-21.91-31.625-21.91h-17.43v42.66zm0-80.027H66.11c16.32 0 34.933-2.059 34.933-24.57 0-21.035-18.117-24.031-35.437-24.031H47.407v48.602zM-.033 3.572h79.148c31.86 0 69.352 10.375 69.352 59.875 0 25.211-12.254 40.023-35.953 45.683v.574c19.91 7.7 31.348 22.211 31.348 48.325 0 35.562-24.707 52.461-57.86 52.461H-.038V3.57zm1004.6 39.964c1.86-4.832 6.5-17.812 16.56-31.461-2.41-1.168-8.15-3.82-11.69-5.207 0 0-16.258-6.856-37.449-6.84-43.852.024-77.266 29.648-77.266 80.613 0 51.273 33.414 80.961 77.266 80.961 12.258 0 23.222-2.449 32.909-6.817v.04c6.43-3.114 11.23-6.14 14.09-8.204-7.21-9.57-12.95-21.179-16.39-33.414-7.226 4.93-14.93 7.7-25.976 7.72-19.852.02-34.496-14.48-34.496-41.149 0-24.476 17.519-39.613 37.308-39.762 10.301-.039 17.707 3.051 21.854 5.262.7.242 1.61.789 2.11.957.27.09.48-1.012 1.17-2.7",
      fill: "#717073"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M280.19 314.02h620.73v620.73H280.19V314.02z",
      fill: "#e41836"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M531.99 401.27h30.562v156.59H531.99V401.27zm58.36 0h50.062v214.95H590.35V401.27z",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M504.58 765.92s50.469 49.332 135.51 33.101c0 0 37.43-5.82 66.125-31.3 0 0 4.266-4 7.531-.723 0 0 4.168 3.266-.457 8.152 0 0-24.668 34.207-73.344 49.328 0 0-66.882 23.946-135.59-8.41 0 0-42.293-17.527-65.75-65.277 0 0-33.438-10.801-58.504-24.859 0 0-7.41-2.934-4.614-8.692 0 0 2.399-4.137 8.883-1.066 0 0 23.282 8.035 45.719 13.051 0 0-18.051-46.805.797-104.9 8.383-25.863 23.687-52.187 47.078-73.348 0 0 3.809-4.004 7.957-1.273 0 0 3.613 2.625 1.07 6.91 0 0-18.656 28.067-25.894 67.984-6.035 32.547-3.192 77.489 19.41 113.12 0 0 86.066 12.007 159.42-15.614 0 0 124.59-40.656 93.23-116.07 0 0-9.105-26.211-43.504-49.891 0 0-5.761-3.355-2.64-8.164 0 0 2.601-3.746 8.5-1.347 0 0 52.668 17.128 75.406 59.441 0 0 46.106 70.566-62.637 128.14 0 0-29.894 15.976-68.336 24.523 0 0-69.261 17.133-135.36 7.172",
      fill: "#FFF"
    }))));
  };

  var _default = SvgBradescoTransparent;
  _exports["default"] = _default;
});