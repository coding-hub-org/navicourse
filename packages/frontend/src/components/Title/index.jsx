import React from "react";
import classnames from "classnames";

import "./index.css";

export const Title = props => {
	const { uppercase = false, color = "black", children, size = "lg" } = props;

	console.log(
		classnames([
			`title--${size}`,
			{
				"title-upper": uppercase,
				"title-red": color === "red",
				"title-black": color === "black"
			}
		])
	);

	return (
		<div
			className={classnames([
				`title--${size}`,
				{
					"title-upper": uppercase,
					"title-red": color === "red",
					"title-black": color === "black"
				}
			])}
		>
			{children}
		</div>
	);
};
