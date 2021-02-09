const ICONS_PATH = "./Icons";
// const ICONS_PATH = 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods';

export function getFlagSvgUrl(key, transparent = false) {
  const transparentStr = transparent ? "_transparent" : "";
  const FLAGS_SVGS_URLS = {
    adyen: `${ICONS_PATH}${transparentStr}/Adyen.js`,
    amex: `${ICONS_PATH}${transparentStr}/Amex.js`,
    aura: `${ICONS_PATH}${transparentStr}/Aura.js`,
    bin: `${ICONS_PATH}${transparentStr}/Bin.js`,
    boleto: `${ICONS_PATH}${transparentStr}/Boleto.js`,
    cirrus: `${ICONS_PATH}${transparentStr}/Cirrus.js`,
    credit_card: `${ICONS_PATH}${transparentStr}/Credit-card.js`,
    diners: `${ICONS_PATH}${transparentStr}/Diners.js`,
    direct_debit: `${ICONS_PATH}${transparentStr}/DirectDebit.js`,
    discover: `${ICONS_PATH}${transparentStr}/Discover.js`,
    ebay: `${ICONS_PATH}${transparentStr}/Ebay.js`,
    elo: `${ICONS_PATH}${transparentStr}/Elo.js`,
    eway: `${ICONS_PATH}${transparentStr}/Eway.js`,
    hipercard: `${ICONS_PATH}${transparentStr}/Hipercard.js`,
    jcb: `${ICONS_PATH}${transparentStr}/Jcb.js`,
    maestro: `${ICONS_PATH}${transparentStr}/Maestro.js`,
    mastercard: `${ICONS_PATH}${transparentStr}/Mastercard.js`,
    sage: `${ICONS_PATH}${transparentStr}/Sage.js`,
    shopify: `${ICONS_PATH}${transparentStr}/Shopify.js`,
    skrill: `${ICONS_PATH}${transparentStr}/Skrill.js`,
    skrill_moneybookers: `${ICONS_PATH}${transparentStr}/SkrillMoneybookers.js`,
    sodexo: `${ICONS_PATH}${transparentStr}/Sodexo.js`,
    solo: `${ICONS_PATH}${transparentStr}/Solo.js`,
    ticket: `${ICONS_PATH}${transparentStr}/Ticket.js`,
    visa: `${ICONS_PATH}${transparentStr}/Visa.js`,
    visa_electron: `${ICONS_PATH}${transparentStr}/VisaElectron.js`,
    western: `${ICONS_PATH}${transparentStr}/Western.js`,
    wirecard: `${ICONS_PATH}${transparentStr}/Wirecard.js`,
  };
  return FLAGS_SVGS_URLS[key];
}

export function getBankSvgUrls(key, transparent = false) {
  const transparentStr = transparent ? "_transparent" : "";
  const BANKS_SVGS_URLS = {
    boleto: `${ICONS_PATH}/Boleto.js`,
    bb: `${ICONS_PATH}/Bb.js`,
    bradesco: `${ICONS_PATH}/Bradesco.js`,
    caixa: `${ICONS_PATH}/Caixa.js`,
    hsbc: `${ICONS_PATH}/Hsbc.js`,
    itau: `${ICONS_PATH}/Itau.js`,
    santander: `${ICONS_PATH}/Santander.js`,
  };

  return BANKS_SVGS_URLS[key];
}

export function getFacilitatorSvgUrl(key, transparent = false) {
  const transparentStr = transparent ? "/transparent" : "";
  const FACILITATORS_SVGS_URLS = {
    amazon: `${ICONS_PATH}${transparentStr}/Amazon.js`,
    adiq: `${ICONS_PATH}${transparentStr}/Adiq.js`,
    applepay: `${ICONS_PATH}${transparentStr}/Applepay.js`,
    bitcoin: `${ICONS_PATH}${transparentStr}/Bitcoin.js`,
    ebanx: `${ICONS_PATH}${transparentStr}/Ebanx.js`,
    firstdata: `${ICONS_PATH}${transparentStr}/Firstdata.js`,
    wallet: `${ICONS_PATH}${transparentStr}/Wallet.js`,
    paypal: `${ICONS_PATH}${transparentStr}/Paypal.js`,
    cielo: `${ICONS_PATH}${transparentStr}/Cielo.js`,
    global: `${ICONS_PATH}${transparentStr}/Global.js`,
    googlepay: `${ICONS_PATH}${transparentStr}/Googlepay.js`,
    iugu: `${ICONS_PATH}${transparentStr}/Iugu.js`,
    mercadopago: `${ICONS_PATH}${transparentStr}/Mercadopago.js`,
    pagarme: `${ICONS_PATH}${transparentStr}/Pagarme.js`,
    pagseguro: `${ICONS_PATH}${transparentStr}/Pagseguro.js`,
    paghiper: `${ICONS_PATH}${transparentStr}/Paghiper.png`,
    rede: `${ICONS_PATH}${transparentStr}/Rede.js`,
    stelo: `${ICONS_PATH}${transparentStr}/Stelo.js`,
    stone: `${ICONS_PATH}${transparentStr}/Stone.js`,
    elavon: `${ICONS_PATH}${transparentStr}/Elavon.js`,
    getnet: `${ICONS_PATH}${transparentStr}/Getnet.png`,
    worldpay: `${ICONS_PATH}${transparentStr}/Worldpay.js`,
    yapay: `${ICONS_PATH}${transparentStr}/Yapay.js`,
  };

  return FACILITATORS_SVGS_URLS[key];
}

export function getUnknownSvg(key, transparent = false) {
  const transparentStr = transparent ? "/transparent" : "";

  const UNKNOWN_SVGS_URLS = {
    generic: `${ICONS_PATH}/Generic.js`,
  };

  return UNKNOWN_SVGS_URLS[key];
}
