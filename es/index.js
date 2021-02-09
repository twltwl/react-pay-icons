function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./remoteImages"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./remoteImages"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.remoteImages);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _propTypes, _remoteImages) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function getPaymentImage(id) {
    var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    switch (id) {
      case "adyen":
        return (0, _remoteImages.getFlagSvgUrl)("adyen", transparent);

      case "amazon":
        return (0, _remoteImages.getBankSvgUrls)("amazon", transparent);

      case "amex":
        return (0, _remoteImages.getFlagSvgUrl)("amex", transparent);

      case "aura":
        return (0, _remoteImages.getFlagSvgUrl)("aura", transparent);

      case "bin":
        return (0, _remoteImages.getFlagSvgUrl)("bin", transparent);

      case "cirrus":
        return (0, _remoteImages.getFlagSvgUrl)("cirrus", transparent);

      case "diners":
        return (0, _remoteImages.getFlagSvgUrl)("diners", transparent);

      case "direct_debit":
        return (0, _remoteImages.getFlagSvgUrl)("direct_debit", transparent);

      case "discover":
        return (0, _remoteImages.getFlagSvgUrl)("discover", transparent);

      case "ebay":
        return (0, _remoteImages.getFlagSvgUrl)("ebay", transparent);

      case "elo":
        return (0, _remoteImages.getFlagSvgUrl)("elo", transparent);

      case "eway":
        return (0, _remoteImages.getFlagSvgUrl)("eway", transparent);

      case "hipercard":
        return (0, _remoteImages.getFlagSvgUrl)("hipercard", transparent);

      case "jcb":
        return (0, _remoteImages.getFlagSvgUrl)("jcb", transparent);

      case "maestro":
        return (0, _remoteImages.getFlagSvgUrl)("maestro", transparent);

      case "mastercard":
        return (0, _remoteImages.getFlagSvgUrl)("mastercard", transparent);

      case "paypal":
        return (0, _remoteImages.getFacilitatorSvgUrl)("paypal", transparent);

      case "sage":
        return (0, _remoteImages.getFlagSvgUrl)("sage", transparent);

      case "shopify":
        return (0, _remoteImages.getFlagSvgUrl)("shopify", transparent);

      case "skrill_moneybookers":
        return (0, _remoteImages.getFlagSvgUrl)("skrill_moneybookers", transparent);

      case "skrill":
        return (0, _remoteImages.getFlagSvgUrl)("skrill", transparent);

      case "sodexo":
        return (0, _remoteImages.getFlagSvgUrl)("sodexo", transparent);

      case "solo":
        return (0, _remoteImages.getFlagSvgUrl)("solo", transparent);

      case "ticket":
        return (0, _remoteImages.getFlagSvgUrl)("ticket", transparent);

      case "visa_electron":
        return (0, _remoteImages.getFlagSvgUrl)("visa_electron", transparent);

      case "visa":
        return (0, _remoteImages.getFlagSvgUrl)("visa", transparent);

      case "wallet":
        return (0, _remoteImages.getFacilitatorSvgUrl)("wallet", transparent);

      case "western":
        return (0, _remoteImages.getFlagSvgUrl)("western", transparent);

      case "wirecard":
        return (0, _remoteImages.getFlagSvgUrl)("wirecard", transparent);

      case "worldpay":
        return (0, _remoteImages.getFacilitatorSvgUrl)("worldpay", transparent);

      case "applepay":
        return (0, _remoteImages.getFacilitatorSvgUrl)("applepay", transparent);

      case "bitcoin":
        return (0, _remoteImages.getFacilitatorSvgUrl)("bitcoin", transparent);

      case "boleto":
        return (0, _remoteImages.getBankSvgUrls)("boleto", transparent);

      case "cielo":
        return (0, _remoteImages.getFacilitatorSvgUrl)("cielo", transparent);

      case "ebanx":
        return (0, _remoteImages.getFacilitatorSvgUrl)("ebanx", transparent);

      case "elavon":
        return (0, _remoteImages.getFacilitatorSvgUrl)("elavon", transparent);

      case "firstdata":
        return (0, _remoteImages.getFacilitatorSvgUrl)("firstdata", transparent);

      case "getnet":
        return (0, _remoteImages.getFacilitatorSvgUrl)("getnet", transparent);

      case "global":
        return (0, _remoteImages.getFacilitatorSvgUrl)("global", transparent);

      case "googlepay":
        return (0, _remoteImages.getFacilitatorSvgUrl)("googlepay", transparent);

      case "iugu":
        return (0, _remoteImages.getFacilitatorSvgUrl)("iugu", transparent);

      case "mercadopago":
        return (0, _remoteImages.getFacilitatorSvgUrl)("mercadopago", transparent);

      case "pagarme":
        return (0, _remoteImages.getFacilitatorSvgUrl)("pagarme", transparent);

      case "pagseguro":
        return (0, _remoteImages.getFacilitatorSvgUrl)("pagseguro", transparent);

      case "yapay":
        return (0, _remoteImages.getFacilitatorSvgUrl)("yapay", transparent);

      case "adiq":
        return (0, _remoteImages.getFacilitatorSvgUrl)("adiq", transparent);

      case "rede":
        return (0, _remoteImages.getFacilitatorSvgUrl)("rede", transparent);

      case "stone":
        return (0, _remoteImages.getFacilitatorSvgUrl)("stone", transparent);

      case "stelo":
        return (0, _remoteImages.getFacilitatorSvgUrl)("stelo", transparent);

      case "paghiper":
        return (0, _remoteImages.getFacilitatorSvgUrl)("paghiper", transparent);

      case "bb":
        return (0, _remoteImages.getBankSvgUrls)("bb", transparent);

      case "bradesco":
        return (0, _remoteImages.getBankSvgUrls)("bradesco", transparent);

      case "caixa":
        return (0, _remoteImages.getBankSvgUrls)("caixa", transparent);

      case "hsbc":
        return (0, _remoteImages.getBankSvgUrls)("hsbc", transparent);

      case "itau":
        return (0, _remoteImages.getBankSvgUrls)("itau", transparent);

      case "santander":
        return (0, _remoteImages.getBankSvgUrls)("santander", transparent);

      default:
        return (0, _remoteImages.getUnknownSvg)("generic", transparent);
    }
  }

  var PaymentIcon = /*#__PURE__*/function (_React$Component) {
    _inherits(PaymentIcon, _React$Component);

    var _super = _createSuper(PaymentIcon);

    function PaymentIcon(props) {
      var _this;

      _classCallCheck(this, PaymentIcon);

      _this = _super.call(this, props);
      _this.state = {
        img: ""
      };
      return _this;
    }

    _createClass(PaymentIcon, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        Promise.resolve("".concat(getPaymentImage(this.props.icon, this.props.transparent))).then(function (s) {
          return _interopRequireWildcard(require(s));
        }).then(function (img) {
          _this2.setState({
            img: img
          });
        }, function (err) {
          throw new Error(err);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          style: this.props.style,
          className: this.props.className // dangerouslySetInnerHTML={{
          // 	__html: this.state.img ? ç : ""
          // 	// __html: require(`${getPaymentImage(icon, transparent)}`)
          // }}

        }, this.state.img ? /*#__PURE__*/_react["default"].createElement(this.state.img["default"], {
          style: this.props.style
        }) : ""));
      }
    }]);

    return PaymentIcon;
  }(_react["default"].Component); // const PaymentIcon = ({ style, className, icon, transparent }) => {
  // 	// const [svg, setSvg] = useState();
  // 	// useEffect(() => {
  // 	// 	// require.ensure([], () => {
  // 	// 	// 	require(`${getPaymentImage(icon, transparent)}`);
  // 	// 	// });
  // 	// 	(() => {
  // 	// 		// require.ensure([], require => {
  // 	// 		// 	require(`${getPaymentImage(icon, transparent)}`);
  // 	// 		// });
  // 	// 		import(`${getPaymentImage(icon, transparent)}`).then(
  // 	// 			img => {
  // 	// 				setSvg(img);
  // 	// 			},
  // 	// 			err => {
  // 	// 				throw new Error(err);
  // 	// 			}
  // 	// 		);
  // 	// 	})();
  // 	// }, []);
  // 	return (
  // 		<React.Fragment>
  // 			<div
  // 				style={style}
  // 				className={className}
  // 				dangerouslySetInnerHTML={{
  // 					// __html: svg ? svg.default : ""
  // 					__html: require(`${getPaymentImage(icon, transparent)}`)
  // 				}}
  // 			></div>
  // 		</React.Fragment>
  // 	);
  // 	// <img
  // 	// 	src={require(`${getPaymentImage(icon, transparent)}`)}
  // 	// 	style={style}
  // 	// 	className={className}
  // 	// 	alt={`${icon} payment icon`}
  // 	// />
  // };


  PaymentIcon.propTypes = {
    style: _propTypes["default"].object,
    className: _propTypes["default"].string,
    icon: _propTypes["default"].string.isRequired,
    transparent: _propTypes["default"].bool
  };
  PaymentIcon.defaultProps = {
    transparent: false,
    style: {},
    className: ""
  };
  var _default = PaymentIcon;
  _exports["default"] = _default;
});