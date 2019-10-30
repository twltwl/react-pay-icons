import React from "react";
import ReactDOM from "react-dom";
import PaymentIcon from "./PaymentIcon";

const element = document.getElementById("root");

ReactDOM.render(
	<div style={{ backgroundColor: "#f1f1f1" }}>
		<PaymentIcon style={{ width: 100 }} icon="visa" />
		<PaymentIcon style={{ width: 100 }} icon="mastercard" />
		<PaymentIcon style={{ width: 100 }} icon="discover" />
		<PaymentIcon style={{ width: 100 }} icon="boleto" />
		<PaymentIcon style={{ width: 100 }} icon="paypal" />
		<PaymentIcon style={{ width: 100 }} icon="shopify" />
		<PaymentIcon style={{ width: 100 }} icon="applepay" />
		<PaymentIcon style={{ width: 100 }} icon="googlepay" />
		<PaymentIcon style={{ width: 100 }} icon="ebay" />
		<PaymentIcon style={{ width: 100 }} icon="aura" />
		<PaymentIcon style={{ width: 100 }} icon="elo" />
		<PaymentIcon style={{ width: 100 }} icon="cielo" />
		<PaymentIcon style={{ width: 100 }} icon="bb" />
		<PaymentIcon style={{ width: 100 }} icon="santander" />
		<PaymentIcon style={{ width: 100 }} icon="rede" />
		<PaymentIcon style={{ width: 100 }} icon="itau" />
		<PaymentIcon style={{ width: 100 }} icon="generic" />
		<PaymentIcon style={{ width: 100 }} icon="worldpay" />
	</div>,
	element
);
