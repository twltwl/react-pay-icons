import React from "react";
import ReactDOM from "react-dom";
import Visa from "../lib/Visa";

const element = document.getElementById("root");

const styleProps = {
	width: 100,
	margin: 10
}

ReactDOM.render(
	<div style={{ backgroundColor: "#f1f1f1", display: 'flex', flexWrap: 'wrap' }}>
		<Visa style={styleProps} />
	</div>,
	element
);
