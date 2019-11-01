import React from "react";

import "./index.css";

export const AuthButton = props => {
	const { onClick, children } = props;

	return (
		<button onClick={onClick} className="auth-button">
			{children}
		</button>
	);
};
