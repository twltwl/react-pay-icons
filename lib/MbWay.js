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
    global.MbWay = mod.exports;
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

  var SvgMbWay = function SvgMbWay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.676 22.105c.679-1.49 1.305-2.89 1.95-4.282.51-1.112 1.043-2.212 1.567-3.318a1.723 1.723 0 011.528-1.045c1.038-.074 1.382.208 1.527 1.24l1.376 9.791c.115.815-.068 1.15-.682 1.258-.815.146-1.329-.186-1.44-.982l-.93-6.925a3.128 3.128 0 00-.325-1.24c-.428.93-.834 1.763-1.178 2.612-.66 1.627-1.283 3.27-1.92 4.902l-.131.332a1.394 1.394 0 01-1.295.963 1.326 1.326 0 01-1.33-.904c-.402-.93-.78-1.894-1.168-2.845l-1.794-4.378c-.09-.214-.217-.409-.368-.691-.13.24-.197.508-.199.78-.325 2.43-.644 4.856-.973 7.289-.102.793-.412 1.1-1.103 1.118-.827.025-1.168-.338-1.063-1.162.205-1.602.447-3.204.67-4.806l.697-4.982c.074-.514.053-1.097.722-1.298a1.88 1.88 0 012.051.53c.318.402.577.848.772 1.323l3.04 6.72zM22.935 25.762h-3.139c-.71 0-1.066-.341-1.066-1.06-.014-3.378-.014-6.755 0-10.132 0-.793.31-1.082 1.088-1.091 1.738-.019 3.476-.05 5.211.022 1.84.074 3.186 1.258 3.483 2.903a3.064 3.064 0 01-.462 2.15c-.235.4-.244.642.19.955 1.183.849 1.698 2.045 1.332 3.47a3.484 3.484 0 01-2.922 2.687c-1.218.235-2.473.086-3.715.096zm-2.104-6.179c0 1.264.015 2.529 0 3.79 0 .38.084.514.49.505 1.437-.025 2.881 0 4.322 0a2.48 2.48 0 001.032-.223 1.692 1.692 0 001.044-1.584A1.617 1.617 0 0026.6 20.61a4.134 4.134 0 00-1.568-.251c-.669 0-1.341 0-2.01-.028a.835.835 0 01-.874-.858c0-.506.31-.843.895-.908.254-.028.512 0 .769-.025.452-.028.908-.037 1.357-.1.898-.123 1.496-.786 1.46-1.576a1.614 1.614 0 00-1.63-1.497c-1.24-.031-2.48 0-3.719-.022-.375 0-.458.106-.455.462.006 1.252.006 2.516.006 3.777z",
      fill: "#060606"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.988 32.213H5.797c-.75 0-1.5.05-2.25.03-2.37-.061-2.894-1.828-2.351-3.687.142-.486.57-.641 1.044-.598a.995.995 0 01.951.83.73.73 0 010 .119c.127 1.406.127 1.406 1.55 1.406H28.01a.507.507 0 00.555-.62 7.143 7.143 0 01-.028-.768 1.032 1.032 0 011.992-.31c.62 2.005-.176 3.626-2.404 3.604-4.04-.031-8.087-.006-12.137-.006zM15.898 7h9.004c1.695 0 2.436.57 2.891 2.206.075.267.146.536.205.806a1.01 1.01 0 01-.76 1.26 1.033 1.033 0 01-1.313-.69 1.833 1.833 0 01-.075-.285c-.275-1.308-.371-1.388-1.735-1.388H7.644c-1.305 0-1.42.093-1.689 1.363-.17.8-.62 1.153-1.31 1.023a.911.911 0 01-.819-1.094c.047-.372.12-.741.217-1.103C4.44 7.62 5.236 7 6.776 7h9.122z",
      fill: "#FD0506"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.8 18.774c-.19.375-.33.773-.415 1.184-.27.886-.52 1.779-.784 2.668-.152.511-.428.898-1.029.88-.6-.019-.88-.375-1.013-.905-.527-2.066-1.054-4.131-1.583-6.197-.09-.356-.103-.694.337-.806.44-.111.763 0 .88.521.372 1.633.763 3.263 1.15 4.893.044.24.15.465.31.65l.973-3.548c.152-.551.31-1.103.44-1.657.105-.434.331-.713.808-.71.478.003.682.31.787.735.354 1.416.707 2.832 1.07 4.245.031.308.17.595.393.811.198-.777.387-1.506.567-2.234.26-1.05.527-2.1.762-3.16a.62.62 0 01.855-.555c.471.112.471.452.372.837-.512 1.987-1.021 3.973-1.527 5.958-.052.17-.113.336-.183.499a.93.93 0 01-.982.62.905.905 0 01-.902-.7 438.85 438.85 0 00-1.023-3.462 1 1 0 00-.263-.567zM52.126 22.89a.53.53 0 01-.456.582.56.56 0 01-.725-.344 18.448 18.448 0 01-.477-1.27.796.796 0 00-.88-.62c-.688.024-1.379.021-2.066 0a.75.75 0 00-.803.554c-.14.39-.254.79-.425 1.165a.677.677 0 01-.913.428c-.397-.174-.36-.548-.214-.93.793-2.016 1.581-4.034 2.364-6.054.192-.493.49-.85 1.069-.87.58-.023.812.374.994.842.781 2 1.567 3.997 2.358 5.993.075.198.13.384.174.523zm-3.539-5.975c-.427 1.088-.793 2.008-1.152 2.928-.065.17 0 .255.192.255h2.221c-.424-1.091-.82-2.061-1.26-3.183zM55.073 23.475c-.422 0-.71-.19-.651-.642.21-1.688-.328-3.13-1.323-4.474-.364-.585-.675-1.2-.93-1.84-.16-.31-.247-.651.158-.862a.617.617 0 01.78.074.62.62 0 01.15.236c.485.944.976 1.888 1.472 2.832.077.149.093.387.31.39.216.004.244-.226.31-.374.455-.874.901-1.754 1.35-2.631.227-.45.694-.713.989-.508.427.31.362.678.124 1.084-.57.973-1.09 1.971-1.683 2.925a2.866 2.866 0 00-.468 1.788 13.3 13.3 0 010 1.36c.003.37-.151.642-.588.642z",
      fill: "#060606"
    })));
  };

  var _default = SvgMbWay;
  _exports["default"] = _default;
});