(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Amazon", "./AmazonTransparent", "./Amex", "./Applepay", "./Aura", "./Bb", "./BbTransparent", "./Bitcoin", "./Boleto", "./BoletoTransparent", "./Bradesco", "./BradescoTransparent", "./Caixa", "./CaixaTransparent", "./Cielo", "./CieloTransparent", "./Cirrus", "./Diners", "./DirectDebit", "./Discover", "./Dotpay", "./Ebay", "./Elavon", "./ElavonTransparent", "./Elo", "./Eway", "./Generic", "./GenericTransparent", "./Global", "./GlobalTransparent", "./Googlepay", "./Hsbc", "./HsbcTransparent", "./Itau", "./ItauTransparent", "./Jcb", "./Maestro", "./Mastercard", "./Pagseguro", "./PagseguroTransparent", "./Paypal", "./PaypalTransparent", "./Rede", "./RedeTransparent", "./Sage", "./Santander", "./SantanderTransparent", "./Sepa", "./Shopify", "./Skrill", "./SkrillMoneybookers", "./Solo", "./Stone", "./StoneTransparent", "./Visa", "./VisaElectron", "./Wallet", "./WalletTransparent", "./Western", "./Worldpay", "./WorldpayTransparent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Amazon"), require("./AmazonTransparent"), require("./Amex"), require("./Applepay"), require("./Aura"), require("./Bb"), require("./BbTransparent"), require("./Bitcoin"), require("./Boleto"), require("./BoletoTransparent"), require("./Bradesco"), require("./BradescoTransparent"), require("./Caixa"), require("./CaixaTransparent"), require("./Cielo"), require("./CieloTransparent"), require("./Cirrus"), require("./Diners"), require("./DirectDebit"), require("./Discover"), require("./Dotpay"), require("./Ebay"), require("./Elavon"), require("./ElavonTransparent"), require("./Elo"), require("./Eway"), require("./Generic"), require("./GenericTransparent"), require("./Global"), require("./GlobalTransparent"), require("./Googlepay"), require("./Hsbc"), require("./HsbcTransparent"), require("./Itau"), require("./ItauTransparent"), require("./Jcb"), require("./Maestro"), require("./Mastercard"), require("./Pagseguro"), require("./PagseguroTransparent"), require("./Paypal"), require("./PaypalTransparent"), require("./Rede"), require("./RedeTransparent"), require("./Sage"), require("./Santander"), require("./SantanderTransparent"), require("./Sepa"), require("./Shopify"), require("./Skrill"), require("./SkrillMoneybookers"), require("./Solo"), require("./Stone"), require("./StoneTransparent"), require("./Visa"), require("./VisaElectron"), require("./Wallet"), require("./WalletTransparent"), require("./Western"), require("./Worldpay"), require("./WorldpayTransparent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Amazon, global.AmazonTransparent, global.Amex, global.Applepay, global.Aura, global.Bb, global.BbTransparent, global.Bitcoin, global.Boleto, global.BoletoTransparent, global.Bradesco, global.BradescoTransparent, global.Caixa, global.CaixaTransparent, global.Cielo, global.CieloTransparent, global.Cirrus, global.Diners, global.DirectDebit, global.Discover, global.Dotpay, global.Ebay, global.Elavon, global.ElavonTransparent, global.Elo, global.Eway, global.Generic, global.GenericTransparent, global.Global, global.GlobalTransparent, global.Googlepay, global.Hsbc, global.HsbcTransparent, global.Itau, global.ItauTransparent, global.Jcb, global.Maestro, global.Mastercard, global.Pagseguro, global.PagseguroTransparent, global.Paypal, global.PaypalTransparent, global.Rede, global.RedeTransparent, global.Sage, global.Santander, global.SantanderTransparent, global.Sepa, global.Shopify, global.Skrill, global.SkrillMoneybookers, global.Solo, global.Stone, global.StoneTransparent, global.Visa, global.VisaElectron, global.Wallet, global.WalletTransparent, global.Western, global.Worldpay, global.WorldpayTransparent);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Amazon, _AmazonTransparent, _Amex, _Applepay, _Aura, _Bb, _BbTransparent, _Bitcoin, _Boleto, _BoletoTransparent, _Bradesco, _BradescoTransparent, _Caixa, _CaixaTransparent, _Cielo, _CieloTransparent, _Cirrus, _Diners, _DirectDebit, _Discover, _Dotpay, _Ebay, _Elavon, _ElavonTransparent, _Elo, _Eway, _Generic, _GenericTransparent, _Global, _GlobalTransparent, _Googlepay, _Hsbc, _HsbcTransparent, _Itau, _ItauTransparent, _Jcb, _Maestro, _Mastercard, _Pagseguro, _PagseguroTransparent, _Paypal, _PaypalTransparent, _Rede, _RedeTransparent, _Sage, _Santander, _SantanderTransparent, _Sepa, _Shopify, _Skrill, _SkrillMoneybookers, _Solo, _Stone, _StoneTransparent, _Visa, _VisaElectron, _Wallet, _WalletTransparent, _Western, _Worldpay, _WorldpayTransparent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Amazon", {
    enumerable: true,
    get: function get() {
      return _Amazon["default"];
    }
  });
  Object.defineProperty(_exports, "AmazonTransparent", {
    enumerable: true,
    get: function get() {
      return _AmazonTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Amex", {
    enumerable: true,
    get: function get() {
      return _Amex["default"];
    }
  });
  Object.defineProperty(_exports, "Applepay", {
    enumerable: true,
    get: function get() {
      return _Applepay["default"];
    }
  });
  Object.defineProperty(_exports, "Aura", {
    enumerable: true,
    get: function get() {
      return _Aura["default"];
    }
  });
  Object.defineProperty(_exports, "Bb", {
    enumerable: true,
    get: function get() {
      return _Bb["default"];
    }
  });
  Object.defineProperty(_exports, "BbTransparent", {
    enumerable: true,
    get: function get() {
      return _BbTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Bitcoin", {
    enumerable: true,
    get: function get() {
      return _Bitcoin["default"];
    }
  });
  Object.defineProperty(_exports, "Boleto", {
    enumerable: true,
    get: function get() {
      return _Boleto["default"];
    }
  });
  Object.defineProperty(_exports, "BoletoTransparent", {
    enumerable: true,
    get: function get() {
      return _BoletoTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Bradesco", {
    enumerable: true,
    get: function get() {
      return _Bradesco["default"];
    }
  });
  Object.defineProperty(_exports, "BradescoTransparent", {
    enumerable: true,
    get: function get() {
      return _BradescoTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Caixa", {
    enumerable: true,
    get: function get() {
      return _Caixa["default"];
    }
  });
  Object.defineProperty(_exports, "CaixaTransparent", {
    enumerable: true,
    get: function get() {
      return _CaixaTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Cielo", {
    enumerable: true,
    get: function get() {
      return _Cielo["default"];
    }
  });
  Object.defineProperty(_exports, "CieloTransparent", {
    enumerable: true,
    get: function get() {
      return _CieloTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Cirrus", {
    enumerable: true,
    get: function get() {
      return _Cirrus["default"];
    }
  });
  Object.defineProperty(_exports, "Diners", {
    enumerable: true,
    get: function get() {
      return _Diners["default"];
    }
  });
  Object.defineProperty(_exports, "DirectDebit", {
    enumerable: true,
    get: function get() {
      return _DirectDebit["default"];
    }
  });
  Object.defineProperty(_exports, "Discover", {
    enumerable: true,
    get: function get() {
      return _Discover["default"];
    }
  });
  Object.defineProperty(_exports, "Dotpay", {
    enumerable: true,
    get: function get() {
      return _Dotpay["default"];
    }
  });
  Object.defineProperty(_exports, "Ebay", {
    enumerable: true,
    get: function get() {
      return _Ebay["default"];
    }
  });
  Object.defineProperty(_exports, "Elavon", {
    enumerable: true,
    get: function get() {
      return _Elavon["default"];
    }
  });
  Object.defineProperty(_exports, "ElavonTransparent", {
    enumerable: true,
    get: function get() {
      return _ElavonTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Elo", {
    enumerable: true,
    get: function get() {
      return _Elo["default"];
    }
  });
  Object.defineProperty(_exports, "Eway", {
    enumerable: true,
    get: function get() {
      return _Eway["default"];
    }
  });
  Object.defineProperty(_exports, "Generic", {
    enumerable: true,
    get: function get() {
      return _Generic["default"];
    }
  });
  Object.defineProperty(_exports, "GenericTransparent", {
    enumerable: true,
    get: function get() {
      return _GenericTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Global", {
    enumerable: true,
    get: function get() {
      return _Global["default"];
    }
  });
  Object.defineProperty(_exports, "GlobalTransparent", {
    enumerable: true,
    get: function get() {
      return _GlobalTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Googlepay", {
    enumerable: true,
    get: function get() {
      return _Googlepay["default"];
    }
  });
  Object.defineProperty(_exports, "Hsbc", {
    enumerable: true,
    get: function get() {
      return _Hsbc["default"];
    }
  });
  Object.defineProperty(_exports, "HsbcTransparent", {
    enumerable: true,
    get: function get() {
      return _HsbcTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Itau", {
    enumerable: true,
    get: function get() {
      return _Itau["default"];
    }
  });
  Object.defineProperty(_exports, "ItauTransparent", {
    enumerable: true,
    get: function get() {
      return _ItauTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Jcb", {
    enumerable: true,
    get: function get() {
      return _Jcb["default"];
    }
  });
  Object.defineProperty(_exports, "Maestro", {
    enumerable: true,
    get: function get() {
      return _Maestro["default"];
    }
  });
  Object.defineProperty(_exports, "Mastercard", {
    enumerable: true,
    get: function get() {
      return _Mastercard["default"];
    }
  });
  Object.defineProperty(_exports, "Pagseguro", {
    enumerable: true,
    get: function get() {
      return _Pagseguro["default"];
    }
  });
  Object.defineProperty(_exports, "PagseguroTransparent", {
    enumerable: true,
    get: function get() {
      return _PagseguroTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Paypal", {
    enumerable: true,
    get: function get() {
      return _Paypal["default"];
    }
  });
  Object.defineProperty(_exports, "PaypalTransparent", {
    enumerable: true,
    get: function get() {
      return _PaypalTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Rede", {
    enumerable: true,
    get: function get() {
      return _Rede["default"];
    }
  });
  Object.defineProperty(_exports, "RedeTransparent", {
    enumerable: true,
    get: function get() {
      return _RedeTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Sage", {
    enumerable: true,
    get: function get() {
      return _Sage["default"];
    }
  });
  Object.defineProperty(_exports, "Santander", {
    enumerable: true,
    get: function get() {
      return _Santander["default"];
    }
  });
  Object.defineProperty(_exports, "SantanderTransparent", {
    enumerable: true,
    get: function get() {
      return _SantanderTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Sepa", {
    enumerable: true,
    get: function get() {
      return _Sepa["default"];
    }
  });
  Object.defineProperty(_exports, "Shopify", {
    enumerable: true,
    get: function get() {
      return _Shopify["default"];
    }
  });
  Object.defineProperty(_exports, "Skrill", {
    enumerable: true,
    get: function get() {
      return _Skrill["default"];
    }
  });
  Object.defineProperty(_exports, "SkrillMoneybookers", {
    enumerable: true,
    get: function get() {
      return _SkrillMoneybookers["default"];
    }
  });
  Object.defineProperty(_exports, "Solo", {
    enumerable: true,
    get: function get() {
      return _Solo["default"];
    }
  });
  Object.defineProperty(_exports, "Stone", {
    enumerable: true,
    get: function get() {
      return _Stone["default"];
    }
  });
  Object.defineProperty(_exports, "StoneTransparent", {
    enumerable: true,
    get: function get() {
      return _StoneTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Visa", {
    enumerable: true,
    get: function get() {
      return _Visa["default"];
    }
  });
  Object.defineProperty(_exports, "VisaElectron", {
    enumerable: true,
    get: function get() {
      return _VisaElectron["default"];
    }
  });
  Object.defineProperty(_exports, "Wallet", {
    enumerable: true,
    get: function get() {
      return _Wallet["default"];
    }
  });
  Object.defineProperty(_exports, "WalletTransparent", {
    enumerable: true,
    get: function get() {
      return _WalletTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "Western", {
    enumerable: true,
    get: function get() {
      return _Western["default"];
    }
  });
  Object.defineProperty(_exports, "Worldpay", {
    enumerable: true,
    get: function get() {
      return _Worldpay["default"];
    }
  });
  Object.defineProperty(_exports, "WorldpayTransparent", {
    enumerable: true,
    get: function get() {
      return _WorldpayTransparent["default"];
    }
  });
  _Amazon = _interopRequireDefault(_Amazon);
  _AmazonTransparent = _interopRequireDefault(_AmazonTransparent);
  _Amex = _interopRequireDefault(_Amex);
  _Applepay = _interopRequireDefault(_Applepay);
  _Aura = _interopRequireDefault(_Aura);
  _Bb = _interopRequireDefault(_Bb);
  _BbTransparent = _interopRequireDefault(_BbTransparent);
  _Bitcoin = _interopRequireDefault(_Bitcoin);
  _Boleto = _interopRequireDefault(_Boleto);
  _BoletoTransparent = _interopRequireDefault(_BoletoTransparent);
  _Bradesco = _interopRequireDefault(_Bradesco);
  _BradescoTransparent = _interopRequireDefault(_BradescoTransparent);
  _Caixa = _interopRequireDefault(_Caixa);
  _CaixaTransparent = _interopRequireDefault(_CaixaTransparent);
  _Cielo = _interopRequireDefault(_Cielo);
  _CieloTransparent = _interopRequireDefault(_CieloTransparent);
  _Cirrus = _interopRequireDefault(_Cirrus);
  _Diners = _interopRequireDefault(_Diners);
  _DirectDebit = _interopRequireDefault(_DirectDebit);
  _Discover = _interopRequireDefault(_Discover);
  _Dotpay = _interopRequireDefault(_Dotpay);
  _Ebay = _interopRequireDefault(_Ebay);
  _Elavon = _interopRequireDefault(_Elavon);
  _ElavonTransparent = _interopRequireDefault(_ElavonTransparent);
  _Elo = _interopRequireDefault(_Elo);
  _Eway = _interopRequireDefault(_Eway);
  _Generic = _interopRequireDefault(_Generic);
  _GenericTransparent = _interopRequireDefault(_GenericTransparent);
  _Global = _interopRequireDefault(_Global);
  _GlobalTransparent = _interopRequireDefault(_GlobalTransparent);
  _Googlepay = _interopRequireDefault(_Googlepay);
  _Hsbc = _interopRequireDefault(_Hsbc);
  _HsbcTransparent = _interopRequireDefault(_HsbcTransparent);
  _Itau = _interopRequireDefault(_Itau);
  _ItauTransparent = _interopRequireDefault(_ItauTransparent);
  _Jcb = _interopRequireDefault(_Jcb);
  _Maestro = _interopRequireDefault(_Maestro);
  _Mastercard = _interopRequireDefault(_Mastercard);
  _Pagseguro = _interopRequireDefault(_Pagseguro);
  _PagseguroTransparent = _interopRequireDefault(_PagseguroTransparent);
  _Paypal = _interopRequireDefault(_Paypal);
  _PaypalTransparent = _interopRequireDefault(_PaypalTransparent);
  _Rede = _interopRequireDefault(_Rede);
  _RedeTransparent = _interopRequireDefault(_RedeTransparent);
  _Sage = _interopRequireDefault(_Sage);
  _Santander = _interopRequireDefault(_Santander);
  _SantanderTransparent = _interopRequireDefault(_SantanderTransparent);
  _Sepa = _interopRequireDefault(_Sepa);
  _Shopify = _interopRequireDefault(_Shopify);
  _Skrill = _interopRequireDefault(_Skrill);
  _SkrillMoneybookers = _interopRequireDefault(_SkrillMoneybookers);
  _Solo = _interopRequireDefault(_Solo);
  _Stone = _interopRequireDefault(_Stone);
  _StoneTransparent = _interopRequireDefault(_StoneTransparent);
  _Visa = _interopRequireDefault(_Visa);
  _VisaElectron = _interopRequireDefault(_VisaElectron);
  _Wallet = _interopRequireDefault(_Wallet);
  _WalletTransparent = _interopRequireDefault(_WalletTransparent);
  _Western = _interopRequireDefault(_Western);
  _Worldpay = _interopRequireDefault(_Worldpay);
  _WorldpayTransparent = _interopRequireDefault(_WorldpayTransparent);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
});