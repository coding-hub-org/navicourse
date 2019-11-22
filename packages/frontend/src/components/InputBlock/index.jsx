import React, { useState, useEffect } from "react";

import "./index.css";

export const InputBlock = props => {
	const { type, placeholder, onChange } = props;

	const [ value, setValue ] = useState("");
	
	useEffect(() => {
		onChange && onChange(value);
	}, [value])

	return (
		<input
			type={type}
			className="input-block"
			value = {value}
			onChange={(e) => {
				setValue(e.currentTarget.value)
				}}
			placeholder={placeholder}
		></input>
			
	);
};

