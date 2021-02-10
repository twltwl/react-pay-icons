(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Amazon", "./Amex", "./Applepay", "./Aura", "./Bb", "./Bitcoin", "./Boleto", "./Bradesco", "./Caixa", "./Cielo", "./Cirrus", "./Diners", "./DirectDebit", "./Discover", "./Ebay", "./Elavon", "./Elo", "./Eway", "./Generic", "./Global", "./Googlepay", "./Hsbc", "./Itau", "./Jcb", "./Maestro", "./Mastercard", "./Pagseguro", "./Paypal", "./Rede", "./Sage", "./Santander", "./Shopify", "./Skrill", "./SkrillMoneybookers", "./Solo", "./Stone", "./Visa", "./VisaElectron", "./Wallet", "./Western", "./Worldpay"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Amazon"), require("./Amex"), require("./Applepay"), require("./Aura"), require("./Bb"), require("./Bitcoin"), require("./Boleto"), require("./Bradesco"), require("./Caixa"), require("./Cielo"), require("./Cirrus"), require("./Diners"), require("./DirectDebit"), require("./Discover"), require("./Ebay"), require("./Elavon"), require("./Elo"), require("./Eway"), require("./Generic"), require("./Global"), require("./Googlepay"), require("./Hsbc"), require("./Itau"), require("./Jcb"), require("./Maestro"), require("./Mastercard"), require("./Pagseguro"), require("./Paypal"), require("./Rede"), require("./Sage"), require("./Santander"), require("./Shopify"), require("./Skrill"), require("./SkrillMoneybookers"), require("./Solo"), require("./Stone"), require("./Visa"), require("./VisaElectron"), require("./Wallet"), require("./Western"), require("./Worldpay"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Amazon, global.Amex, global.Applepay, global.Aura, global.Bb, global.Bitcoin, global.Boleto, global.Bradesco, global.Caixa, global.Cielo, global.Cirrus, global.Diners, global.DirectDebit, global.Discover, global.Ebay, global.Elavon, global.Elo, global.Eway, global.Generic, global.Global, global.Googlepay, global.Hsbc, global.Itau, global.Jcb, global.Maestro, global.Mastercard, global.Pagseguro, global.Paypal, global.Rede, global.Sage, global.Santander, global.Shopify, global.Skrill, global.SkrillMoneybookers, global.Solo, global.Stone, global.Visa, global.VisaElectron, global.Wallet, global.Western, global.Worldpay);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Amazon, _Amex, _Applepay, _Aura, _Bb, _Bitcoin, _Boleto, _Bradesco, _Caixa, _Cielo, _Cirrus, _Diners, _DirectDebit, _Discover, _Ebay, _Elavon, _Elo, _Eway, _Generic, _Global, _Googlepay, _Hsbc, _Itau, _Jcb, _Maestro, _Mastercard, _Pagseguro, _Paypal, _Rede, _Sage, _Santander, _Shopify, _Skrill, _SkrillMoneybookers, _Solo, _Stone, _Visa, _VisaElectron, _Wallet, _Western, _Worldpay) {
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
  Object.defineProperty(_exports, "Bradesco", {
    enumerable: true,
    get: function get() {
      return _Bradesco["default"];
    }
  });
  Object.defineProperty(_exports, "Caixa", {
    enumerable: true,
    get: function get() {
      return _Caixa["default"];
    }
  });
  Object.defineProperty(_exports, "Cielo", {
    enumerable: true,
    get: function get() {
      return _Cielo["default"];
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
  Object.defineProperty(_exports, "Global", {
    enumerable: true,
    get: function get() {
      return _Global["default"];
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
  Object.defineProperty(_exports, "Itau", {
    enumerable: true,
    get: function get() {
      return _Itau["default"];
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
  Object.defineProperty(_exports, "Paypal", {
    enumerable: true,
    get: function get() {
      return _Paypal["default"];
    }
  });
  Object.defineProperty(_exports, "Rede", {
    enumerable: true,
    get: function get() {
      return _Rede["default"];
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
  _Amazon = _interopRequireDefault(_Amazon);
  _Amex = _interopRequireDefault(_Amex);
  _Applepay = _interopRequireDefault(_Applepay);
  _Aura = _interopRequireDefault(_Aura);
  _Bb = _interopRequireDefault(_Bb);
  _Bitcoin = _interopRequireDefault(_Bitcoin);
  _Boleto = _interopRequireDefault(_Boleto);
  _Bradesco = _interopRequireDefault(_Bradesco);
  _Caixa = _interopRequireDefault(_Caixa);
  _Cielo = _interopRequireDefault(_Cielo);
  _Cirrus = _interopRequireDefault(_Cirrus);
  _Diners = _interopRequireDefault(_Diners);
  _DirectDebit = _interopRequireDefault(_DirectDebit);
  _Discover = _interopRequireDefault(_Discover);
  _Ebay = _interopRequireDefault(_Ebay);
  _Elavon = _interopRequireDefault(_Elavon);
  _Elo = _interopRequireDefault(_Elo);
  _Eway = _interopRequireDefault(_Eway);
  _Generic = _interopRequireDefault(_Generic);
  _Global = _interopRequireDefault(_Global);
  _Googlepay = _interopRequireDefault(_Googlepay);
  _Hsbc = _interopRequireDefault(_Hsbc);
  _Itau = _interopRequireDefault(_Itau);
  _Jcb = _interopRequireDefault(_Jcb);
  _Maestro = _interopRequireDefault(_Maestro);
  _Mastercard = _interopRequireDefault(_Mastercard);
  _Pagseguro = _interopRequireDefault(_Pagseguro);
  _Paypal = _interopRequireDefault(_Paypal);
  _Rede = _interopRequireDefault(_Rede);
  _Sage = _interopRequireDefault(_Sage);
  _Santander = _interopRequireDefault(_Santander);
  _Shopify = _interopRequireDefault(_Shopify);
  _Skrill = _interopRequireDefault(_Skrill);
  _SkrillMoneybookers = _interopRequireDefault(_SkrillMoneybookers);
  _Solo = _interopRequireDefault(_Solo);
  _Stone = _interopRequireDefault(_Stone);
  _Visa = _interopRequireDefault(_Visa);
  _VisaElectron = _interopRequireDefault(_VisaElectron);
  _Wallet = _interopRequireDefault(_Wallet);
  _Western = _interopRequireDefault(_Western);
  _Worldpay = _interopRequireDefault(_Worldpay);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
});