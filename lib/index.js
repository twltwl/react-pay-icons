(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Ach", "./Affirm", "./Afterpay", "./Alfamart", "./Alipay", "./Amazon", "./AmazonTransparent", "./Amex", "./Applepay", "./AtmMomo", "./Aura", "./Bacs", "./Bancontact", "./Bankaxept", "./Bb", "./BbTransparent", "./Benefit", "./Bitcoin", "./Blik", "./Boleto", "./BoletoTransparent", "./Boost", "./Bradesco", "./BradescoTransparent", "./Caixa", "./CaixaTransparent", "./CartesBancaires", "./Cielo", "./CieloTransparent", "./Cirrus", "./Clearpay", "./Dana", "./Dankort", "./Diners", "./DinersClub", "./DirectDebit", "./Discover", "./DokuWallet", "./Dotpay", "./Ebay", "./EftposAustralia", "./Elavon", "./ElavonTransparent", "./Elo", "./Eps", "./Eway", "./Fawry", "./GCash", "./Generic", "./GenericTransparent", "./Girocard", "./Giropay", "./Global", "./GlobalTransparent", "./Googlepay", "./GrabPay", "./Green", "./Hiper", "./Hsbc", "./HsbcTransparent", "./Ideal", "./InteracLogo", "./Itau", "./ItauTransparent", "./Jcb", "./KakaoPay", "./Klarna", "./Knet", "./Konbini", "./MPesa", "./Mada", "./Maestro", "./Mastercard", "./MbWay", "./Meeza", "./MobilePay", "./Multibanco", "./Naps", "./Omannet", "./Oxxo", "./Pagseguro", "./PagseguroTransparent", "./PayEasy", "./Payco", "./Paypal", "./PaypalTransparent", "./Paysafecard", "./Payshop", "./Paywithgoogle", "./Pix", "./Poli", "./Ratepay", "./RazerGold", "./Rede", "./RedeTransparent", "./Sage", "./SamsungPay", "./Santander", "./SantanderTransparent", "./Sepa", "./Shopify", "./Skrill", "./SkrillMoneybookers", "./Solo", "./Stone", "./StoneTransparent", "./Swish", "./Troy", "./Trustly", "./Twint", "./UnionPay", "./Vipps", "./Visa", "./VisaElectron", "./Visadankort", "./Vpay", "./Wallet", "./WalletTransparent", "./Wechatpay", "./Western", "./Worldpay", "./WorldpayTransparent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Ach"), require("./Affirm"), require("./Afterpay"), require("./Alfamart"), require("./Alipay"), require("./Amazon"), require("./AmazonTransparent"), require("./Amex"), require("./Applepay"), require("./AtmMomo"), require("./Aura"), require("./Bacs"), require("./Bancontact"), require("./Bankaxept"), require("./Bb"), require("./BbTransparent"), require("./Benefit"), require("./Bitcoin"), require("./Blik"), require("./Boleto"), require("./BoletoTransparent"), require("./Boost"), require("./Bradesco"), require("./BradescoTransparent"), require("./Caixa"), require("./CaixaTransparent"), require("./CartesBancaires"), require("./Cielo"), require("./CieloTransparent"), require("./Cirrus"), require("./Clearpay"), require("./Dana"), require("./Dankort"), require("./Diners"), require("./DinersClub"), require("./DirectDebit"), require("./Discover"), require("./DokuWallet"), require("./Dotpay"), require("./Ebay"), require("./EftposAustralia"), require("./Elavon"), require("./ElavonTransparent"), require("./Elo"), require("./Eps"), require("./Eway"), require("./Fawry"), require("./GCash"), require("./Generic"), require("./GenericTransparent"), require("./Girocard"), require("./Giropay"), require("./Global"), require("./GlobalTransparent"), require("./Googlepay"), require("./GrabPay"), require("./Green"), require("./Hiper"), require("./Hsbc"), require("./HsbcTransparent"), require("./Ideal"), require("./InteracLogo"), require("./Itau"), require("./ItauTransparent"), require("./Jcb"), require("./KakaoPay"), require("./Klarna"), require("./Knet"), require("./Konbini"), require("./MPesa"), require("./Mada"), require("./Maestro"), require("./Mastercard"), require("./MbWay"), require("./Meeza"), require("./MobilePay"), require("./Multibanco"), require("./Naps"), require("./Omannet"), require("./Oxxo"), require("./Pagseguro"), require("./PagseguroTransparent"), require("./PayEasy"), require("./Payco"), require("./Paypal"), require("./PaypalTransparent"), require("./Paysafecard"), require("./Payshop"), require("./Paywithgoogle"), require("./Pix"), require("./Poli"), require("./Ratepay"), require("./RazerGold"), require("./Rede"), require("./RedeTransparent"), require("./Sage"), require("./SamsungPay"), require("./Santander"), require("./SantanderTransparent"), require("./Sepa"), require("./Shopify"), require("./Skrill"), require("./SkrillMoneybookers"), require("./Solo"), require("./Stone"), require("./StoneTransparent"), require("./Swish"), require("./Troy"), require("./Trustly"), require("./Twint"), require("./UnionPay"), require("./Vipps"), require("./Visa"), require("./VisaElectron"), require("./Visadankort"), require("./Vpay"), require("./Wallet"), require("./WalletTransparent"), require("./Wechatpay"), require("./Western"), require("./Worldpay"), require("./WorldpayTransparent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Ach, global.Affirm, global.Afterpay, global.Alfamart, global.Alipay, global.Amazon, global.AmazonTransparent, global.Amex, global.Applepay, global.AtmMomo, global.Aura, global.Bacs, global.Bancontact, global.Bankaxept, global.Bb, global.BbTransparent, global.Benefit, global.Bitcoin, global.Blik, global.Boleto, global.BoletoTransparent, global.Boost, global.Bradesco, global.BradescoTransparent, global.Caixa, global.CaixaTransparent, global.CartesBancaires, global.Cielo, global.CieloTransparent, global.Cirrus, global.Clearpay, global.Dana, global.Dankort, global.Diners, global.DinersClub, global.DirectDebit, global.Discover, global.DokuWallet, global.Dotpay, global.Ebay, global.EftposAustralia, global.Elavon, global.ElavonTransparent, global.Elo, global.Eps, global.Eway, global.Fawry, global.GCash, global.Generic, global.GenericTransparent, global.Girocard, global.Giropay, global.Global, global.GlobalTransparent, global.Googlepay, global.GrabPay, global.Green, global.Hiper, global.Hsbc, global.HsbcTransparent, global.Ideal, global.InteracLogo, global.Itau, global.ItauTransparent, global.Jcb, global.KakaoPay, global.Klarna, global.Knet, global.Konbini, global.MPesa, global.Mada, global.Maestro, global.Mastercard, global.MbWay, global.Meeza, global.MobilePay, global.Multibanco, global.Naps, global.Omannet, global.Oxxo, global.Pagseguro, global.PagseguroTransparent, global.PayEasy, global.Payco, global.Paypal, global.PaypalTransparent, global.Paysafecard, global.Payshop, global.Paywithgoogle, global.Pix, global.Poli, global.Ratepay, global.RazerGold, global.Rede, global.RedeTransparent, global.Sage, global.SamsungPay, global.Santander, global.SantanderTransparent, global.Sepa, global.Shopify, global.Skrill, global.SkrillMoneybookers, global.Solo, global.Stone, global.StoneTransparent, global.Swish, global.Troy, global.Trustly, global.Twint, global.UnionPay, global.Vipps, global.Visa, global.VisaElectron, global.Visadankort, global.Vpay, global.Wallet, global.WalletTransparent, global.Wechatpay, global.Western, global.Worldpay, global.WorldpayTransparent);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Ach, _Affirm, _Afterpay, _Alfamart, _Alipay, _Amazon, _AmazonTransparent, _Amex, _Applepay, _AtmMomo, _Aura, _Bacs, _Bancontact, _Bankaxept, _Bb, _BbTransparent, _Benefit, _Bitcoin, _Blik, _Boleto, _BoletoTransparent, _Boost, _Bradesco, _BradescoTransparent, _Caixa, _CaixaTransparent, _CartesBancaires, _Cielo, _CieloTransparent, _Cirrus, _Clearpay, _Dana, _Dankort, _Diners, _DinersClub, _DirectDebit, _Discover, _DokuWallet, _Dotpay, _Ebay, _EftposAustralia, _Elavon, _ElavonTransparent, _Elo, _Eps, _Eway, _Fawry, _GCash, _Generic, _GenericTransparent, _Girocard, _Giropay, _Global, _GlobalTransparent, _Googlepay, _GrabPay, _Green, _Hiper, _Hsbc, _HsbcTransparent, _Ideal, _InteracLogo, _Itau, _ItauTransparent, _Jcb, _KakaoPay, _Klarna, _Knet, _Konbini, _MPesa, _Mada, _Maestro, _Mastercard, _MbWay, _Meeza, _MobilePay, _Multibanco, _Naps, _Omannet, _Oxxo, _Pagseguro, _PagseguroTransparent, _PayEasy, _Payco, _Paypal, _PaypalTransparent, _Paysafecard, _Payshop, _Paywithgoogle, _Pix, _Poli, _Ratepay, _RazerGold, _Rede, _RedeTransparent, _Sage, _SamsungPay, _Santander, _SantanderTransparent, _Sepa, _Shopify, _Skrill, _SkrillMoneybookers, _Solo, _Stone, _StoneTransparent, _Swish, _Troy, _Trustly, _Twint, _UnionPay, _Vipps, _Visa, _VisaElectron, _Visadankort, _Vpay, _Wallet, _WalletTransparent, _Wechatpay, _Western, _Worldpay, _WorldpayTransparent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Ach", {
    enumerable: true,
    get: function get() {
      return _Ach["default"];
    }
  });
  Object.defineProperty(_exports, "Affirm", {
    enumerable: true,
    get: function get() {
      return _Affirm["default"];
    }
  });
  Object.defineProperty(_exports, "Afterpay", {
    enumerable: true,
    get: function get() {
      return _Afterpay["default"];
    }
  });
  Object.defineProperty(_exports, "Alfamart", {
    enumerable: true,
    get: function get() {
      return _Alfamart["default"];
    }
  });
  Object.defineProperty(_exports, "Alipay", {
    enumerable: true,
    get: function get() {
      return _Alipay["default"];
    }
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
  Object.defineProperty(_exports, "AtmMomo", {
    enumerable: true,
    get: function get() {
      return _AtmMomo["default"];
    }
  });
  Object.defineProperty(_exports, "Aura", {
    enumerable: true,
    get: function get() {
      return _Aura["default"];
    }
  });
  Object.defineProperty(_exports, "Bacs", {
    enumerable: true,
    get: function get() {
      return _Bacs["default"];
    }
  });
  Object.defineProperty(_exports, "Bancontact", {
    enumerable: true,
    get: function get() {
      return _Bancontact["default"];
    }
  });
  Object.defineProperty(_exports, "Bankaxept", {
    enumerable: true,
    get: function get() {
      return _Bankaxept["default"];
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
  Object.defineProperty(_exports, "Benefit", {
    enumerable: true,
    get: function get() {
      return _Benefit["default"];
    }
  });
  Object.defineProperty(_exports, "Bitcoin", {
    enumerable: true,
    get: function get() {
      return _Bitcoin["default"];
    }
  });
  Object.defineProperty(_exports, "Blik", {
    enumerable: true,
    get: function get() {
      return _Blik["default"];
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
  Object.defineProperty(_exports, "Boost", {
    enumerable: true,
    get: function get() {
      return _Boost["default"];
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
  Object.defineProperty(_exports, "CartesBancaires", {
    enumerable: true,
    get: function get() {
      return _CartesBancaires["default"];
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
  Object.defineProperty(_exports, "Clearpay", {
    enumerable: true,
    get: function get() {
      return _Clearpay["default"];
    }
  });
  Object.defineProperty(_exports, "Dana", {
    enumerable: true,
    get: function get() {
      return _Dana["default"];
    }
  });
  Object.defineProperty(_exports, "Dankort", {
    enumerable: true,
    get: function get() {
      return _Dankort["default"];
    }
  });
  Object.defineProperty(_exports, "Diners", {
    enumerable: true,
    get: function get() {
      return _Diners["default"];
    }
  });
  Object.defineProperty(_exports, "DinersClub", {
    enumerable: true,
    get: function get() {
      return _DinersClub["default"];
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
  Object.defineProperty(_exports, "DokuWallet", {
    enumerable: true,
    get: function get() {
      return _DokuWallet["default"];
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
  Object.defineProperty(_exports, "EftposAustralia", {
    enumerable: true,
    get: function get() {
      return _EftposAustralia["default"];
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
  Object.defineProperty(_exports, "Eps", {
    enumerable: true,
    get: function get() {
      return _Eps["default"];
    }
  });
  Object.defineProperty(_exports, "Eway", {
    enumerable: true,
    get: function get() {
      return _Eway["default"];
    }
  });
  Object.defineProperty(_exports, "Fawry", {
    enumerable: true,
    get: function get() {
      return _Fawry["default"];
    }
  });
  Object.defineProperty(_exports, "GCash", {
    enumerable: true,
    get: function get() {
      return _GCash["default"];
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
  Object.defineProperty(_exports, "Girocard", {
    enumerable: true,
    get: function get() {
      return _Girocard["default"];
    }
  });
  Object.defineProperty(_exports, "Giropay", {
    enumerable: true,
    get: function get() {
      return _Giropay["default"];
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
  Object.defineProperty(_exports, "GrabPay", {
    enumerable: true,
    get: function get() {
      return _GrabPay["default"];
    }
  });
  Object.defineProperty(_exports, "Green", {
    enumerable: true,
    get: function get() {
      return _Green["default"];
    }
  });
  Object.defineProperty(_exports, "Hiper", {
    enumerable: true,
    get: function get() {
      return _Hiper["default"];
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
  Object.defineProperty(_exports, "Ideal", {
    enumerable: true,
    get: function get() {
      return _Ideal["default"];
    }
  });
  Object.defineProperty(_exports, "InteracLogo", {
    enumerable: true,
    get: function get() {
      return _InteracLogo["default"];
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
  Object.defineProperty(_exports, "KakaoPay", {
    enumerable: true,
    get: function get() {
      return _KakaoPay["default"];
    }
  });
  Object.defineProperty(_exports, "Klarna", {
    enumerable: true,
    get: function get() {
      return _Klarna["default"];
    }
  });
  Object.defineProperty(_exports, "Knet", {
    enumerable: true,
    get: function get() {
      return _Knet["default"];
    }
  });
  Object.defineProperty(_exports, "Konbini", {
    enumerable: true,
    get: function get() {
      return _Konbini["default"];
    }
  });
  Object.defineProperty(_exports, "MPesa", {
    enumerable: true,
    get: function get() {
      return _MPesa["default"];
    }
  });
  Object.defineProperty(_exports, "Mada", {
    enumerable: true,
    get: function get() {
      return _Mada["default"];
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
  Object.defineProperty(_exports, "MbWay", {
    enumerable: true,
    get: function get() {
      return _MbWay["default"];
    }
  });
  Object.defineProperty(_exports, "Meeza", {
    enumerable: true,
    get: function get() {
      return _Meeza["default"];
    }
  });
  Object.defineProperty(_exports, "MobilePay", {
    enumerable: true,
    get: function get() {
      return _MobilePay["default"];
    }
  });
  Object.defineProperty(_exports, "Multibanco", {
    enumerable: true,
    get: function get() {
      return _Multibanco["default"];
    }
  });
  Object.defineProperty(_exports, "Naps", {
    enumerable: true,
    get: function get() {
      return _Naps["default"];
    }
  });
  Object.defineProperty(_exports, "Omannet", {
    enumerable: true,
    get: function get() {
      return _Omannet["default"];
    }
  });
  Object.defineProperty(_exports, "Oxxo", {
    enumerable: true,
    get: function get() {
      return _Oxxo["default"];
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
  Object.defineProperty(_exports, "PayEasy", {
    enumerable: true,
    get: function get() {
      return _PayEasy["default"];
    }
  });
  Object.defineProperty(_exports, "Payco", {
    enumerable: true,
    get: function get() {
      return _Payco["default"];
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
  Object.defineProperty(_exports, "Paysafecard", {
    enumerable: true,
    get: function get() {
      return _Paysafecard["default"];
    }
  });
  Object.defineProperty(_exports, "Payshop", {
    enumerable: true,
    get: function get() {
      return _Payshop["default"];
    }
  });
  Object.defineProperty(_exports, "Paywithgoogle", {
    enumerable: true,
    get: function get() {
      return _Paywithgoogle["default"];
    }
  });
  Object.defineProperty(_exports, "Pix", {
    enumerable: true,
    get: function get() {
      return _Pix["default"];
    }
  });
  Object.defineProperty(_exports, "Poli", {
    enumerable: true,
    get: function get() {
      return _Poli["default"];
    }
  });
  Object.defineProperty(_exports, "Ratepay", {
    enumerable: true,
    get: function get() {
      return _Ratepay["default"];
    }
  });
  Object.defineProperty(_exports, "RazerGold", {
    enumerable: true,
    get: function get() {
      return _RazerGold["default"];
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
  Object.defineProperty(_exports, "SamsungPay", {
    enumerable: true,
    get: function get() {
      return _SamsungPay["default"];
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
  Object.defineProperty(_exports, "Swish", {
    enumerable: true,
    get: function get() {
      return _Swish["default"];
    }
  });
  Object.defineProperty(_exports, "Troy", {
    enumerable: true,
    get: function get() {
      return _Troy["default"];
    }
  });
  Object.defineProperty(_exports, "Trustly", {
    enumerable: true,
    get: function get() {
      return _Trustly["default"];
    }
  });
  Object.defineProperty(_exports, "Twint", {
    enumerable: true,
    get: function get() {
      return _Twint["default"];
    }
  });
  Object.defineProperty(_exports, "UnionPay", {
    enumerable: true,
    get: function get() {
      return _UnionPay["default"];
    }
  });
  Object.defineProperty(_exports, "Vipps", {
    enumerable: true,
    get: function get() {
      return _Vipps["default"];
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
  Object.defineProperty(_exports, "Visadankort", {
    enumerable: true,
    get: function get() {
      return _Visadankort["default"];
    }
  });
  Object.defineProperty(_exports, "Vpay", {
    enumerable: true,
    get: function get() {
      return _Vpay["default"];
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
  Object.defineProperty(_exports, "Wechatpay", {
    enumerable: true,
    get: function get() {
      return _Wechatpay["default"];
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
  _Ach = _interopRequireDefault(_Ach);
  _Affirm = _interopRequireDefault(_Affirm);
  _Afterpay = _interopRequireDefault(_Afterpay);
  _Alfamart = _interopRequireDefault(_Alfamart);
  _Alipay = _interopRequireDefault(_Alipay);
  _Amazon = _interopRequireDefault(_Amazon);
  _AmazonTransparent = _interopRequireDefault(_AmazonTransparent);
  _Amex = _interopRequireDefault(_Amex);
  _Applepay = _interopRequireDefault(_Applepay);
  _AtmMomo = _interopRequireDefault(_AtmMomo);
  _Aura = _interopRequireDefault(_Aura);
  _Bacs = _interopRequireDefault(_Bacs);
  _Bancontact = _interopRequireDefault(_Bancontact);
  _Bankaxept = _interopRequireDefault(_Bankaxept);
  _Bb = _interopRequireDefault(_Bb);
  _BbTransparent = _interopRequireDefault(_BbTransparent);
  _Benefit = _interopRequireDefault(_Benefit);
  _Bitcoin = _interopRequireDefault(_Bitcoin);
  _Blik = _interopRequireDefault(_Blik);
  _Boleto = _interopRequireDefault(_Boleto);
  _BoletoTransparent = _interopRequireDefault(_BoletoTransparent);
  _Boost = _interopRequireDefault(_Boost);
  _Bradesco = _interopRequireDefault(_Bradesco);
  _BradescoTransparent = _interopRequireDefault(_BradescoTransparent);
  _Caixa = _interopRequireDefault(_Caixa);
  _CaixaTransparent = _interopRequireDefault(_CaixaTransparent);
  _CartesBancaires = _interopRequireDefault(_CartesBancaires);
  _Cielo = _interopRequireDefault(_Cielo);
  _CieloTransparent = _interopRequireDefault(_CieloTransparent);
  _Cirrus = _interopRequireDefault(_Cirrus);
  _Clearpay = _interopRequireDefault(_Clearpay);
  _Dana = _interopRequireDefault(_Dana);
  _Dankort = _interopRequireDefault(_Dankort);
  _Diners = _interopRequireDefault(_Diners);
  _DinersClub = _interopRequireDefault(_DinersClub);
  _DirectDebit = _interopRequireDefault(_DirectDebit);
  _Discover = _interopRequireDefault(_Discover);
  _DokuWallet = _interopRequireDefault(_DokuWallet);
  _Dotpay = _interopRequireDefault(_Dotpay);
  _Ebay = _interopRequireDefault(_Ebay);
  _EftposAustralia = _interopRequireDefault(_EftposAustralia);
  _Elavon = _interopRequireDefault(_Elavon);
  _ElavonTransparent = _interopRequireDefault(_ElavonTransparent);
  _Elo = _interopRequireDefault(_Elo);
  _Eps = _interopRequireDefault(_Eps);
  _Eway = _interopRequireDefault(_Eway);
  _Fawry = _interopRequireDefault(_Fawry);
  _GCash = _interopRequireDefault(_GCash);
  _Generic = _interopRequireDefault(_Generic);
  _GenericTransparent = _interopRequireDefault(_GenericTransparent);
  _Girocard = _interopRequireDefault(_Girocard);
  _Giropay = _interopRequireDefault(_Giropay);
  _Global = _interopRequireDefault(_Global);
  _GlobalTransparent = _interopRequireDefault(_GlobalTransparent);
  _Googlepay = _interopRequireDefault(_Googlepay);
  _GrabPay = _interopRequireDefault(_GrabPay);
  _Green = _interopRequireDefault(_Green);
  _Hiper = _interopRequireDefault(_Hiper);
  _Hsbc = _interopRequireDefault(_Hsbc);
  _HsbcTransparent = _interopRequireDefault(_HsbcTransparent);
  _Ideal = _interopRequireDefault(_Ideal);
  _InteracLogo = _interopRequireDefault(_InteracLogo);
  _Itau = _interopRequireDefault(_Itau);
  _ItauTransparent = _interopRequireDefault(_ItauTransparent);
  _Jcb = _interopRequireDefault(_Jcb);
  _KakaoPay = _interopRequireDefault(_KakaoPay);
  _Klarna = _interopRequireDefault(_Klarna);
  _Knet = _interopRequireDefault(_Knet);
  _Konbini = _interopRequireDefault(_Konbini);
  _MPesa = _interopRequireDefault(_MPesa);
  _Mada = _interopRequireDefault(_Mada);
  _Maestro = _interopRequireDefault(_Maestro);
  _Mastercard = _interopRequireDefault(_Mastercard);
  _MbWay = _interopRequireDefault(_MbWay);
  _Meeza = _interopRequireDefault(_Meeza);
  _MobilePay = _interopRequireDefault(_MobilePay);
  _Multibanco = _interopRequireDefault(_Multibanco);
  _Naps = _interopRequireDefault(_Naps);
  _Omannet = _interopRequireDefault(_Omannet);
  _Oxxo = _interopRequireDefault(_Oxxo);
  _Pagseguro = _interopRequireDefault(_Pagseguro);
  _PagseguroTransparent = _interopRequireDefault(_PagseguroTransparent);
  _PayEasy = _interopRequireDefault(_PayEasy);
  _Payco = _interopRequireDefault(_Payco);
  _Paypal = _interopRequireDefault(_Paypal);
  _PaypalTransparent = _interopRequireDefault(_PaypalTransparent);
  _Paysafecard = _interopRequireDefault(_Paysafecard);
  _Payshop = _interopRequireDefault(_Payshop);
  _Paywithgoogle = _interopRequireDefault(_Paywithgoogle);
  _Pix = _interopRequireDefault(_Pix);
  _Poli = _interopRequireDefault(_Poli);
  _Ratepay = _interopRequireDefault(_Ratepay);
  _RazerGold = _interopRequireDefault(_RazerGold);
  _Rede = _interopRequireDefault(_Rede);
  _RedeTransparent = _interopRequireDefault(_RedeTransparent);
  _Sage = _interopRequireDefault(_Sage);
  _SamsungPay = _interopRequireDefault(_SamsungPay);
  _Santander = _interopRequireDefault(_Santander);
  _SantanderTransparent = _interopRequireDefault(_SantanderTransparent);
  _Sepa = _interopRequireDefault(_Sepa);
  _Shopify = _interopRequireDefault(_Shopify);
  _Skrill = _interopRequireDefault(_Skrill);
  _SkrillMoneybookers = _interopRequireDefault(_SkrillMoneybookers);
  _Solo = _interopRequireDefault(_Solo);
  _Stone = _interopRequireDefault(_Stone);
  _StoneTransparent = _interopRequireDefault(_StoneTransparent);
  _Swish = _interopRequireDefault(_Swish);
  _Troy = _interopRequireDefault(_Troy);
  _Trustly = _interopRequireDefault(_Trustly);
  _Twint = _interopRequireDefault(_Twint);
  _UnionPay = _interopRequireDefault(_UnionPay);
  _Vipps = _interopRequireDefault(_Vipps);
  _Visa = _interopRequireDefault(_Visa);
  _VisaElectron = _interopRequireDefault(_VisaElectron);
  _Visadankort = _interopRequireDefault(_Visadankort);
  _Vpay = _interopRequireDefault(_Vpay);
  _Wallet = _interopRequireDefault(_Wallet);
  _WalletTransparent = _interopRequireDefault(_WalletTransparent);
  _Wechatpay = _interopRequireDefault(_Wechatpay);
  _Western = _interopRequireDefault(_Western);
  _Worldpay = _interopRequireDefault(_Worldpay);
  _WorldpayTransparent = _interopRequireDefault(_WorldpayTransparent);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
});