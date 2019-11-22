import React, { Component } from 'react'

import { AuthButton } from "./components/Button";
import { InputBlock } from "./components/InputBlock";
import { Title } from "./components/Title";
import { LoginPage } from "./pages/LoginPage"


class App extends Component{
	render() {
		return (
			 <div><LoginPage/> </div>
		);
	}
}



export default App;
