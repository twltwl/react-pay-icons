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
    global.Mada = mod.exports;
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

  var SvgMada = function SvgMada(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 60,
      height: 40,
      fill: "#F3F6F9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46.7565 20.246L46.5978 20.2741V22.6394L46.4609 22.5978L46.4171 22.5854C46.1333 22.4929 45.8386 22.4404 45.5411 22.4293C43.6127 22.4293 43.2086 23.9309 43.2086 25.1776C43.2086 26.8982 44.1482 27.8843 45.7874 27.8843C46.3721 27.901 46.9554 27.8175 47.5132 27.6372C47.9896 27.4811 48.1593 27.2565 48.1593 26.7814V20C47.6972 20.0854 47.2197 20.1674 46.7565 20.246ZM46.6032 26.6174L46.5156 26.6354C46.3053 26.6887 46.0895 26.7166 45.8728 26.7185C45.3582 26.7185 44.745 26.4501 44.745 25.1686C44.745 24.5094 44.8545 23.6367 45.8126 23.6367H45.8203C46.06 23.6517 46.2969 23.6973 46.5255 23.7726L46.6032 23.7962V26.6174Z",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M51.6546 22.4001C50.9861 22.4119 50.3234 22.5301 49.6901 22.7505L49.1963 22.9033L49.3616 24.0432L49.8413 23.8826C50.3608 23.7105 50.9019 23.6163 51.4477 23.603C51.6601 23.603 52.3073 23.603 52.3073 24.3229V24.6374H51.4072C49.7646 24.6374 49.0079 25.1708 49.0079 26.322C49.0079 27.307 49.7088 27.8944 50.8837 27.8944C51.327 27.8854 51.7678 27.8252 52.1978 27.7147L52.2208 27.708H52.2427L52.3872 27.7338C52.8493 27.818 53.3235 27.9045 53.7856 27.9966V24.2342C53.7856 23.0178 53.0705 22.4001 51.6601 22.4001H51.6546ZM52.3325 26.6612L52.2514 26.6848L51.9558 26.7657C51.7244 26.8334 51.4856 26.8711 51.2451 26.878C50.7939 26.878 50.5235 26.6455 50.5235 26.2591C50.5235 26.0064 50.633 25.5853 51.3732 25.5853H52.3325V26.6612Z",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.2367 22.4001C39.5678 22.4123 38.9047 22.5305 38.2711 22.7505L37.7783 22.9033L37.9437 24.0432L38.4233 23.8826C38.944 23.711 39.4862 23.6179 40.033 23.6063C40.2443 23.6063 40.8915 23.6063 40.8915 24.3263V24.6396H39.9892C38.3466 24.6396 37.5878 25.1742 37.5878 26.3243C37.5878 27.3093 38.2897 27.8966 39.4658 27.8966C39.9072 27.8869 40.3461 27.8263 40.7743 27.7158L40.7962 27.7091H40.8192L40.9638 27.736C41.4237 27.8192 41.9 27.9068 42.3611 27.9977V24.2342C42.3611 23.0167 41.646 22.4001 40.2367 22.4001V22.4001ZM40.909 26.6612L40.8291 26.6848L40.5334 26.7657C40.302 26.8332 40.0633 26.871 39.8227 26.878C39.3705 26.878 39.1022 26.6455 39.1022 26.2603C39.1022 26.0064 39.2117 25.5796 39.9509 25.5796H40.909V26.6612Z",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.7144 22.4102C34.1643 22.4165 33.6216 22.5409 33.1211 22.7752L33.062 22.8022L33.0094 22.7629C32.6951 22.5259 32.2276 22.4102 31.5859 22.4102C31.0137 22.4108 30.4447 22.4978 29.8973 22.6685C29.398 22.8269 29.202 23.0695 29.202 23.5356V27.8337H30.7657V23.8613L30.8412 23.8343C31.061 23.7522 31.2929 23.7093 31.5267 23.7074C31.979 23.7074 32.2079 23.9534 32.2079 24.4374V27.8337H33.7497V24.3667C33.7542 24.2493 33.7379 24.1321 33.7015 24.0208L33.6511 23.9163L33.7551 23.8691C33.9968 23.7607 34.2579 23.7056 34.5217 23.7074C34.8327 23.7074 35.2039 23.8343 35.2039 24.4374V27.8337H36.7457V24.2757C36.7457 23.0201 36.0832 22.4102 34.7188 22.4102",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M51.1729 12.0001C51.1587 12.0001 51.1444 12.0001 51.1313 12.0001C50.2334 12.0001 49.307 12.2517 48.9773 12.7481C48.7914 13.0085 48.6927 13.3238 48.6959 13.6466V13.6466V16.0399C48.7036 16.1428 48.687 16.246 48.6477 16.3409L48.5974 16.4465H45.759V14.7798C45.724 13.0255 44.7122 12.063 43.2459 12.063H41.8103C41.749 12.492 41.7008 12.7919 41.6461 13.2175H43.0696C43.8153 13.2175 44.2073 13.8712 44.2073 14.8708V16.5465L44.1055 16.4948C43.9967 16.4585 43.8826 16.4422 43.7682 16.4465H41.3132C41.2672 16.7655 41.2037 17.1799 41.1412 17.5999H48.697C48.9511 17.5494 49.2544 17.5011 49.5128 17.4528C49.895 17.6449 50.6079 17.746 51.0973 17.746C52.7399 17.746 53.801 16.6228 53.801 14.8798C53.801 13.1591 52.7717 12.0349 51.1729 12.0001V12.0001ZM51.1729 16.4139C50.8674 16.4131 50.5626 16.3853 50.2618 16.3308L50.1742 16.3117V13.9902C50.1789 13.8783 50.1637 13.7664 50.1293 13.66L50.0811 13.5601L50.1797 13.5163C50.2038 13.5051 50.2301 13.4983 50.2542 13.4882L50.2706 13.477L50.3735 13.4433C50.3889 13.4433 50.402 13.4332 50.4184 13.4298C50.6825 13.3634 50.9536 13.3305 51.2255 13.3321H51.232C52.1902 13.3321 52.2997 14.2059 52.2997 14.8618C52.2997 16.1444 51.6865 16.4139 51.1729 16.4139",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37.9261 18.2985H37.9962C39.6388 18.2985 40.3976 17.7426 40.3976 16.3746C40.3976 15.3953 39.6957 14.6091 38.5207 14.6091H37.0085C36.5562 14.6091 36.2869 14.3463 36.2869 13.9004C36.2869 13.5994 36.3964 13.2209 37.1366 13.2209H40.4371C40.5061 12.7818 40.5466 12.5021 40.609 12.0675H37.176C35.5762 12.063 34.7768 12.747 34.7768 13.8959C34.7768 15.028 35.4754 15.6199 36.6526 15.6199H38.1649C38.2612 15.6188 38.3567 15.6377 38.4457 15.6755C38.5347 15.7133 38.6153 15.7692 38.6827 15.8399C38.75 15.9105 38.8027 15.9944 38.8375 16.0865C38.8724 16.1786 38.8887 16.277 38.8854 16.3758C38.8854 16.6285 38.7759 17.1518 38.0367 17.1518H37.7816L32.9437 17.1417H32.0677C31.3219 17.1417 30.7963 16.7026 30.7963 15.703V15.0078C30.7963 13.9611 31.2037 13.3074 32.0677 13.3074H33.5087C33.5755 12.8582 33.6183 12.5807 33.6763 12.154H31.7107C30.2444 12.154 29.2326 13.1648 29.1976 14.9157V14.9809V15.6996C29.2326 17.4551 30.2444 18.2907 31.7107 18.2907H33.1452H35.7634H37.9261V18.2985Z",
      fill: "#1D252C"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26.7994 21.231H7V28H26.7994V21.231Z",
      fill: "#80BC00"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26.7994 12H7V18.769H26.7994V12Z",
      fill: "#00A0DF"
    })));
  };

  var _default = SvgMada;
  _exports["default"] = _default;
});