const AMAZON_URL = "./img/svg";
// const AMAZON_URL = 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods';

// export const FLAGS_SVGS_URLS = {
//   amex: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/amex.svg',
//   aura: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/aura.svg',
//   boleto: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/boleto.svg',
//   cirrus: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/cirrus.svg',
//   credit_card: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/credit-card.svg',
//   diners: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/diners.svg',
//   direct_debit: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/direct_debit.svg',
//   discover: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/discover.svg',
//   ebay: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/ebay.svg',
//   elo: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/elo.svg',
//   eway: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/eway.svg',
//   jcb: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/jcb.svg',
//   maestro: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/maestro.svg',
//   mastercard: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/mastercard.svg',
//   sage: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/sage.svg',
//   shopify: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/shopify.svg',
//   skrill: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/skrill.svg',
//   skrill_moneybookers: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/skrill_moneybookers.svg',
//   solo: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/solo.svg',
//   visa: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/visa.svg',
//   visa_electron: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/visa_electron.svg',
//   western: 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods/western.svg',
// };

export function getFlagSvgUrl(key, transparent = false) {
	const transparentStr = transparent ? "_transparent" : "";
	const FLAGS_SVGS_URLS = {
		adyen: `${AMAZON_URL}${transparentStr}/adyen.svg`,
		amex: `${AMAZON_URL}${transparentStr}/amex.svg`,
		aura: `${AMAZON_URL}${transparentStr}/aura.svg`,
		bin: `${AMAZON_URL}${transparentStr}/bin.svg`,
		boleto: `${AMAZON_URL}${transparentStr}/boleto.svg`,
		cirrus: `${AMAZON_URL}${transparentStr}/cirrus.svg`,
		credit_card: `${AMAZON_URL}${transparentStr}/credit-card.svg`,
		diners: `${AMAZON_URL}${transparentStr}/diners.svg`,
		direct_debit: `${AMAZON_URL}${transparentStr}/direct_debit.svg`,
		discover: `${AMAZON_URL}${transparentStr}/discover.svg`,
		ebay: `${AMAZON_URL}${transparentStr}/ebay.svg`,
		elo: `${AMAZON_URL}${transparentStr}/elo.svg`,
		eway: `${AMAZON_URL}${transparentStr}/eway.svg`,
		hipercard: `${AMAZON_URL}${transparentStr}/hipercard.svg`,
		jcb: `${AMAZON_URL}${transparentStr}/jcb.svg`,
		maestro: `${AMAZON_URL}${transparentStr}/maestro.svg`,
		mastercard: `${AMAZON_URL}${transparentStr}/mastercard.svg`,
		sage: `${AMAZON_URL}${transparentStr}/sage.svg`,
		shopify: `${AMAZON_URL}${transparentStr}/shopify.svg`,
		skrill: `${AMAZON_URL}${transparentStr}/skrill.svg`,
		skrill_moneybookers: `${AMAZON_URL}${transparentStr}/skrill_moneybookers.svg`,
		sodexo: `${AMAZON_URL}${transparentStr}/sodexo.svg`,
		solo: `${AMAZON_URL}${transparentStr}/solo.svg`,
		ticket: `${AMAZON_URL}${transparentStr}/ticket.svg`,
		visa: `${AMAZON_URL}${transparentStr}/visa.svg`,
		visa_electron: `${AMAZON_URL}${transparentStr}/visa_electron.svg`,
		western: `${AMAZON_URL}${transparentStr}/western.svg`,
		wirecard: `${AMAZON_URL}${transparentStr}/wirecard.svg`
	};
	return FLAGS_SVGS_URLS[key];
}

export function getBankSvgUrls(key, transparent = false) {
	const transparentStr = transparent ? "_transparent" : "";
	const BANKS_SVGS_URLS = {
		boleto: `${AMAZON_URL}/boleto.svg`,
		bb: `${AMAZON_URL}/bb.svg`,
		bradesco: `${AMAZON_URL}/bradesco.svg`,
		caixa: `${AMAZON_URL}/caixa.svg`,
		hsbc: `${AMAZON_URL}/hsbc.svg`,
		itau: `${AMAZON_URL}/itau.svg`,
		santander: `${AMAZON_URL}/santander.svg`
	};

	return BANKS_SVGS_URLS[key];
}

export function getFacilitatorSvgUrl(key, transparent = false) {
	const transparentStr = transparent ? "/transparent" : "";
	const FACILITATORS_SVGS_URLS = {
		amazon: `${AMAZON_URL}${transparentStr}/amazon.svg`,
		adiq: `${AMAZON_URL}${transparentStr}/adiq.svg`,
		applepay: `${AMAZON_URL}${transparentStr}/applepay.svg`,
		bitcoin: `${AMAZON_URL}${transparentStr}/bitcoin.svg`,
		ebanx: `${AMAZON_URL}${transparentStr}/ebanx.svg`,
		firstdata: `${AMAZON_URL}${transparentStr}/firstdata.svg`,
		wallet: `${AMAZON_URL}${transparentStr}/wallet.svg`,
		paypal: `${AMAZON_URL}${transparentStr}/paypal.svg`,
		cielo: `${AMAZON_URL}${transparentStr}/cielo.svg`,
		global: `${AMAZON_URL}${transparentStr}/global.svg`,
		googlepay: `${AMAZON_URL}${transparentStr}/googlepay.svg`,
		iugu: `${AMAZON_URL}${transparentStr}/iugu.svg`,
		mercadopago: `${AMAZON_URL}${transparentStr}/mercadopago.svg`,
		pagarme: `${AMAZON_URL}${transparentStr}/pagarme.svg`,
		pagseguro: `${AMAZON_URL}${transparentStr}/pagseguro.svg`,
		paghiper: `${AMAZON_URL}${transparentStr}/paghiper.png`,
		rede: `${AMAZON_URL}${transparentStr}/rede.svg`,
		stelo: `${AMAZON_URL}${transparentStr}/stelo.svg`,
		stone: `${AMAZON_URL}${transparentStr}/stone.svg`,
		elavon: `${AMAZON_URL}${transparentStr}/elavon.svg`,
		getnet: `${AMAZON_URL}${transparentStr}/getnet.png`,
		worldpay: `${AMAZON_URL}${transparentStr}/worldpay.svg`,
		yapay: `${AMAZON_URL}${transparentStr}/yapay.svg`
	};

	return FACILITATORS_SVGS_URLS[key];
}

export function getUnknownSvg(key, transparent = false) {
	const transparentStr = transparent ? "/transparent" : "";

	const UNKNOWN_SVGS_URLS = {
		generic: `${AMAZON_URL}/generic.svg`
	};

	return UNKNOWN_SVGS_URLS[key];
}
