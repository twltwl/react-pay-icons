import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "core-js/stable";
import "regenerator-runtime/runtime";

import {
	getSvg
} from "./remoteImages";



const PaymentIcon = ({icon, transparent, style, className}) => {
	const [img, setImg] = useState('')
	useEffect(() => {
		console.log('run effect, ', `${getSvg(icon, transparent)}`)
		const tasks = async () => {
			try {
				const _img = await import(`${getSvg(icon, transparent)}`)
				console.log('asd', _img)
				setImg(_img.default)
			} catch (e) {
				console.log(e)
			}

		}

		tasks()
	},[])

	console.log('render payment icon', img)

	return (
		<div style={style} className={className}>{img}</div>
	)
}



PaymentIcon.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	icon: PropTypes.string.isRequired,
	transparent: PropTypes.bool
};

PaymentIcon.defaultProps = {
	transparent: false,
	style: {},
	className: ""
};

export default PaymentIcon;
