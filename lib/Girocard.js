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
    global.Girocard = mod.exports;
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

  var SvgGirocard = function SvgGirocard(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0z",
      fill: "#F3F6F9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M49.508 33.078c-.032-1.146-.032-1.961-.032-3.113 0-1.437.024-2.875.032-4.31H48.45v3.556c-.17-.207-.21-.262-.335-.378a2.171 2.171 0 00-1.46-.538c-.206 0-1.142.013-1.874.813-.885.951-.812 2.238-.812 2.43.014.413.068.873.238 1.3.285.734.96 1.639 2.357 1.639.151 0 .966 0 1.583-.611.113-.091.19-.193.367-.433l.046.906h.998c-.028-.473-.032-.792-.049-1.26zm-1.04-1.653c0 .106-.008.463-.122.826-.277.838-.904 1.296-1.604 1.296-.565 0-1.129-.309-1.442-.977a2.568 2.568 0 01-.22-1.214c0-.148.009-.493.155-.914.386-1.102 1.262-1.21 1.552-1.21.674 0 1.292.453 1.559 1.272.045.175.135.494.122.92zm-5.239-2.135c.288 0 .434.05.72.142V28.39c-.054 0-.374-.05-.64-.05-.43 0-.975.104-1.394.609-.071.08-.167.24-.293.449l-.053-.989h-1c.035.744.053 1.262.053 1.994 0 .86-.005 1.466-.005 2.316v1.62h1.074v-2.903c.038-.562.064-1.306.643-1.812.385-.334.763-.334.895-.334zm-4.764 5.049h.906v-4.14c-.085-.52-.138-.782-.297-1.022-.309-.517-.985-.882-1.916-.882-.172 0-.851 0-1.484.296-.133.069-.233.137-.376.205v.932c.243-.138.923-.562 1.66-.562.72 0 1.163.414 1.312.802.085.242.098.538.107.782a17.292 17.292 0 00-.852-.025c-.585 0-1.285.025-1.87.312-.455.218-1.077.639-1.077 1.589 0 .104.013.22.037.34.063.412.266.786.561 1.037.333.282.78.391 1.232.419.677.02 1.136-.187 1.429-.394.252-.193.406-.377.628-.63v.94zm-.062-2.671c0 .391-.035.619-.09.8-.022.08-.09.277-.266.508a1.464 1.464 0 01-1.22.628c-.488 0-1.137-.254-1.137-.95 0-.692.606-.986 1.136-1.116.16-.033.412-.063.78-.063.265 0 .531.008.797.03v.163zm-5.64 2.762c.711 0 1.096-.16 1.428-.308l-.08-.953c-.204.09-.672.32-1.236.32-.08 0-.447 0-.753-.162-.899-.445-1.12-1.351-1.12-2.026 0-.997.5-1.573 1.005-1.849.458-.256.868-.241 1.032-.241.421.02.753.17.922.253l.055-.964c-.189-.047-.63-.193-1.141-.205-1.187-.035-1.928.516-2.363 1.086-.495.647-.627 1.436-.606 2.094.042 1.576.942 2.426 1.73 2.745.21.095.584.202 1.127.21zm-4.373-.743c.685-.691.882-1.631.872-2.39-.032-1.456-.795-2.326-1.517-2.706a2.895 2.895 0 00-1.292-.284c-1.33 0-2.185.689-2.594 1.398-.29.505-.397 1.09-.413 1.687-.01 1.19.413 1.891.92 2.385.123.102.245.197.378.276.332.218.81.399 1.594.399.601 0 .998-.113 1.253-.231.266-.114.556-.295.799-.534zm-.232-2.37c0 .648-.202 1.598-.998 2.047-.16.08-.433.208-.822.208-.088 0-.41-.012-.718-.161a2.078 2.078 0 01-.29-.188c-.162-.121-.386-.366-.564-.779a2.733 2.733 0 01-.197-1.147c.019-.822.361-1.406.719-1.707a1.764 1.764 0 011.165-.424c.918.011 1.324.642 1.526 1.124.065.173.179.56.179 1.027zm-5.452-2.027c.288 0 .434.05.719.142V28.39c-.053 0-.373-.05-.639-.05-.433 0-.976.104-1.396.609a4.09 4.09 0 00-.29.449l-.054-.989h-.997c.032.744.059 1.262.059 1.994 0 .86-.017 1.466-.017 2.316v1.62h1.077v-2.903c.033-.562.065-1.306.642-1.812.385-.334.764-.334.896-.334zm-4.986-2.292h1.142v-1.17H17.72v1.17zM15.976 36c.441-.584.476-1.19.508-2.432l-.013-5.159h-.993v.917a2.455 2.455 0 00-.48-.56c-.262-.23-.751-.483-1.417-.473a2.41 2.41 0 00-1.993 1.06c-.465.64-.588 1.408-.588 2.06 0 .164 0 .725.176 1.251.045.15.245.813.83 1.306.325.265.822.529 1.575.493.42-.022.997-.16 1.418-.515.134-.115.213-.193.4-.447l-.01.814c-.023.264-.036.528-.137.79a1.281 1.281 0 01-.266.45c-.285.33-.65.5-1.349.525a4.755 4.755 0 01-1.509-.252c-.285-.103-.463-.217-.585-.285l-.11 1.033c.166.067.289.112.467.173.285.091.91.251 1.67.251.82 0 1.341-.187 1.696-.38.391-.228.576-.435.71-.62zm-.532-4.586c0 .148 0 .736-.343 1.273-.355.559-.887.826-1.352.826-.4 0-.81-.173-1.088-.435-.418-.414-.54-1.078-.54-1.712.007-.895.265-1.398.688-1.786.163-.163.495-.379.93-.379.297 0 .673.114.983.365.756.631.722 1.79.722 1.848zm3.389-3.005H17.79v5.93h1.043v-5.93zM31.475 11.68c-.015-.172-.11-.227-.215-.227h-1.95c-.114 0-.199.045-.216.263l-.07 1.545c0 .092.067.227.208.227h2.107c.133 0 .206-.13.206-.238l-.07-1.57zm-1.309 1.398c-.123 0-.2-.021-.34-.046.006-.052.013-.107.014-.166a.946.946 0 00.308.054c.146 0 .358-.052.358-.26 0-.232-.244-.264-.376-.264-.017 0-.055-.003-.146.007a.778.778 0 00-.13.034v-.639h.834v.129h-.63v.325c.005.006.042-.003.07-.006a3.43 3.43 0 01.1-.004c.235 0 .518.118.518.41 0 .347-.392.426-.58.426zM34.451 11.723c-.021-.146-.128-.27-.255-.27h-1.952c-.112 0-.186.109-.186.192l.111 1.616a.255.255 0 00.244.227h2.105c.11-.008.188-.092.188-.184 0-.018-.183-1.058-.255-1.581zm-1.035 1.355c-.436 0-.576-.388-.576-.709 0-.36.136-.595.553-.595.097 0 .215.024.307.05-.005.046-.012.094-.015.146a.67.67 0 00-.264-.054c-.208 0-.358.097-.377.378v.075c.044-.09.236-.134.326-.134.252 0 .5.19.5.46 0 .298-.248.383-.453.383",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.34 12.382c-.16 0-.25.109-.25.25 0 .14.128.303.31.303.135 0 .245-.09.245-.248a.313.313 0 00-.305-.305zM28.114 14.048h-2.14c-.235 0-.253.133-.27.267-.024.174-.303 1.874-.306 1.893-.032.194.07.336.196.336h2.323c.219-.007.259-.163.28-.34l.132-1.937c0-.1-.082-.22-.215-.22zm-.6.527l-.802 1.466h-.272l.814-1.383h-.8c.006-.075.013-.125.021-.175h1.04v.092zM31.595 14.28c.008-.121-.136-.232-.236-.232H29.21c-.09 0-.233.102-.235.22l-.094 2.01c0 .111.095.266.245.266h2.323c.16 0 .236-.167.236-.273l-.09-1.99zm-1.318 1.761c-.234 0-.572-.122-.572-.447 0-.202.139-.33.373-.43-.207-.094-.288-.191-.288-.35 0-.306.322-.367.509-.367.169 0 .537.047.537.354 0 .155-.135.292-.302.369.242.1.337.26.337.43 0 .355-.368.441-.594.441",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.305 15.098c.104 0 .29-.2.291-.288.005-.16-.174-.209-.276-.209-.104 0-.291.036-.291.2 0 .097.173.297.276.297zM30.285 15.258c-.14 0-.333.232-.333.333 0 .196.193.276.332.276.133 0 .341-.062.341-.264 0-.138-.191-.345-.34-.345zM34.857 14.26c-.03-.149-.128-.208-.254-.212h-2.147c-.115 0-.216.12-.216.212 0 .019.146 1.915.146 1.915.018.198.051.37.274.37h2.322c.124 0 .209-.113.209-.232 0-.015-.218-1.491-.334-2.053zm-.637 1.225c-.058.434-.302.556-.616.556-.096 0-.27-.022-.344-.057.006-.109.013-.148.016-.192a.96.96 0 00.303.068c.304 0 .417-.263.417-.483 0-.016.001-.066-.01-.098-.115.148-.213.154-.324.154-.317 0-.58-.212-.58-.548 0-.319.251-.438.504-.438.432 0 .587.348.634.8a.734.734 0 010 .238z",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.6 14.608c-.178 0-.278.115-.278.284 0 .167.14.366.334.366.17 0 .27-.117.27-.28 0-.173-.1-.37-.327-.37z",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38.372 21.938l-3.27-13.655h-.013l-.002-.008h-1.46l.001.223h.015v.008h1.221l3.155 13.173-15.411-.007 3.13-13.166h1.24l-.004-.223h-.015v-.008h-1.461l-3.273 13.65h.017l-.002.008 16.132.005z",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.272 3.054a.578.578 0 00-.24-.054h-5.475a.59.59 0 00-.589.59l.002 5.356h.014v.008h.399l-.002-5.356c0-.106.086-.193.19-.193h1.003v3.897h-1.125l1.515 1.638h.007l.007.008h2.663l1.513-1.638h-.023l.008-.008H32.03V3.405h1.016c.046 0 .086.023.12.051a.194.194 0 01.055.134v5.356h.014v.008h.399V3.598a.59.59 0 00-.363-.544z",
      fill: "#62C6E9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.94 17.259a.241.241 0 00-.114-.03h-2.338c-.17.01-.294.07-.314.26-.021.219-.423 2.577-.427 2.596-.017.085.04.206.138.258.033.02.07.035.112.035h2.618c.168 0 .317-.224.313-.375l.176-2.498a.282.282 0 00-.163-.246zM35.399 17.526c-.016-.146-.084-.236-.197-.272a.395.395 0 00-.142-.026H32.72c-.186 0-.257.152-.257.29 0 0 .193 2.604.178 2.53.018.16.09.261.198.302a.31.31 0 00.128.028h2.603c.155 0 .237-.168.237-.285 0-.019-.316-1.75-.41-2.567zM30.383 17.969a.238.238 0 00-.106-.026c-.324.002-.354.428-.362.758-.008.3.021.692.252.782a.279.279 0 00.121.028c.318 0 .357-.478.357-.834 0-.277-.06-.628-.262-.708z",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.27 19.733a.641.641 0 01-.303-.065c-.245-.139-.326-.465-.334-.914a1.664 1.664 0 01.088-.612h-.005.004c.091-.239.266-.413.582-.413a.58.58 0 01.355.1c.092.07.156.174.2.303.053.161.076.357.079.582.011.571-.143 1.019-.666 1.019zm1.504-1.593l-.024-.55a.337.337 0 00-.18-.321.252.252 0 00-.128-.038h-2.344a.313.313 0 00-.286.254l-.028.647h-.001l-.089 1.896c0 .074.04.235.152.306a.22.22 0 00.134.044h2.61c.188 0 .27-.224.27-.347l-.086-1.891zM32.684 10.474c.081.02.15.043.22.047.085.007.105.007.123.007.09 0 .289-.01.289-.177 0-.084-.061-.136-.132-.167a.508.508 0 00-.198-.049h-.169c.005-.036 0-.075.001-.117h.155c.07 0 .27-.05.27-.157 0-.083-.058-.126-.125-.148a.55.55 0 00-.187-.032c-.081 0-.18.023-.276.047a.666.666 0 01-.02-.107.786.786 0 01.206-.043c.088-.01.224 0 .224 0 .055 0 .145.02.225.062.079.046.144.115.144.213 0 .13-.118.188-.26.217l.022.006-.007.002c.044.008.088.02.128.036.114.05.202.132.202.257 0 .244-.389.276-.486.276a1.59 1.59 0 01-.35-.049v-.124zm1.373-1.055c-.008-.04-.042-.07-.087-.091a.312.312 0 00-.154-.039h-1.718c-.067 0-.208.045-.208.162l.09 1.299c.014.114.05.17.094.2a.19.19 0 00.13.04h1.935a.157.157 0 00.16-.161c0-.017-.154-.941-.242-1.41M29.846 10.48c.056-.035.64-.376.64-.598 0-.08-.051-.122-.11-.143a.424.424 0 00-.163-.03.92.92 0 00-.297.06c-.008-.04-.015-.078-.02-.118.126-.037.259-.059.377-.059.08 0 .182.016.265.057.082.045.144.116.144.23 0 .27-.495.499-.648.64h.025l-.01.009h.67a1.064 1.064 0 000 .118h-.873v-.165zm1.523-1.018c0-.062-.044-.104-.095-.13a.313.313 0 00-.149-.042h-1.718c-.085 0-.215.045-.22.186l-.066 1.318c0 .062.046.14.115.172.024.014.051.024.08.024h1.938c.067 0 .18-.082.18-.174l-.065-1.354zM27.631 10.646h-.186l.105-.867a.543.543 0 00-.016.009l.002-.017c-.07.034-.208.106-.219.112l-.084-.079.369-.197h.142l-.113 1.039zm.918-1.334a.238.238 0 00-.106-.023h-1.718c-.17 0-.22.05-.235.136a60.97 60.97 0 00-.226 1.396c-.01.068.013.109.051.133.03.026.074.037.122.037h1.937c.078 0 .179-.037.2-.213-.003.072.085-1.277.085-1.277 0-.089-.03-.16-.11-.189zM27.528 12.631v.008h.167c0 .065-.006.106 0 .149h-.19c-.012.088-.025.179-.035.279h-.207l.027-.271h-.015v-.008h-.636c.006-.055.02-.154.02-.154s.462-.552.703-.825h.233l-.082.822h.015zm.984-1c0-.064-.055-.134-.123-.163a.168.168 0 00-.08-.023h-1.95c-.133 0-.206.073-.247.179-.065.164-.243 1.578-.246 1.596-.016.12.044.209.115.243a.152.152 0 00.078.025h2.104c.134 0 .215-.08.236-.235-.01.076.113-1.621.113-1.621z",
      fill: "#004090"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.384 11.975l-.523.662h.021l-.006.008h.449l.075-.661-.019.023.003-.032z",
      fill: "#004090"
    })));
  };

  var _default = SvgGirocard;
  _exports["default"] = _default;
});