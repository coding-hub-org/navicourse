import React from "react"
import "./styles.css"
import { Title } from "../../components/Title"
import { InputBlock } from "../../components/InputBlock";
import Logo from "../../assets/logo.svg"
import Pab from "../../assets/pabloNavi.svg"

export class RegisterPage extends React.Component {
    render() {
        return (
            <div className="registerPage">
                <div className="registerPage--left">
                    <img style={{ textAlign: "left" }} src={Logo} alt=""></img>
                    <div>
                        <h1>REGISTER TO NAVICOURSE</h1>
                        <h3>Welcome! Please register to review and read people’s reviews</h3>

                        <div className="inputWrapper">
                            <div className="userBlock" ><InputBlock type={"text"} placeholder={"Username"} /></div>
                            <div className="passwordBlock" ><InputBlock type={"password"} placeholder={"Password"} /></div>
                        </div>
                        <button>Register</button>
                    </div>
                    <h3>Already have an account? Sign in</h3>
                </div>
                <div className="registerPage--right">
                    <img src={Pab} alt="Man"></img>
                </div>


            </div>
        );
    }
}