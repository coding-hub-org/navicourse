import React from "react";

import { AuthButton } from "./components/Button";
import { InputBlock } from "./components/InputBlock";
import { Title } from "./components/Title";

function App() {
	return (
		<div>
			<Title>Math Courses</Title>
			<InputBlock type={"text"} placeholder={"Username"} />
		</div>
	);
}

export default App;
