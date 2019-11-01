import React from "react";

import "./index.css";

export const InputBlock = props => {
	const { type, placeholder } = props;

	return (
		<input
			type={type}
			className="input-block"
			placeholder={placeholder}
		></input>
	);
};
