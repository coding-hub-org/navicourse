import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { AuthButton } from "./components/Button";
import { InputBlock } from "./components/InputBlock";
import { Title } from "./components/Title";
import { LoginPage } from "./pages/LoginPage"


const App = () => {
	return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route component={LoginPage} />
      </Switch>
    </Router>
	);
}



export default App;
