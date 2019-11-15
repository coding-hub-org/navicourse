import React from "react"
import "./styles.css"
import { Title } from "../../components/Title"
import { InputBlock } from "../../components/InputBlock";
import Logo from "../../assets/logo.svg"

export class RegisterPage extends React.Component {
    render() {
        return (
            <div style={{ margin: "20px" }}>
                <img style={{ textAlign: "left" }} src={Logo} alt=""></img>
                <h1>
                    <h5 style={{ textAlign: "justify", color: "#ff5a6e", fontSize: "40px" }}>REGISTER TO NAVICOURSE</h5>
                    <h3 style={{ textAlign: "justify", fontFamily: "Times Roman", fontSize: "20px", padding: "15px", top: "100px", color: "Black" }}>Welcome! Please register to review and read people’s reviews</h3>

                </h1>
                <div className="inputWrapper">
                    <div className="userBlock" ><InputBlock type={"text"} placeholder={"Username"} /></div>
                    <div className="passwordBlock" ><InputBlock type={"password"} placeholder={"Password"} /></div>
                </div>
                <button style={{ textAlign: "center", backgroundColor: "#ff5a6e", color: "white", width: "150px", height: "50px", borderRadius: "12%", fontSize: "20px", padding: "0px", marginLeft: "59px", marginTop: "60px" }}>Register</button>
                <h3 style={{ textAlign: "justify", fontFamily: "Times Roman", fontSize: "20px", padding: "25px", color: "Black" }}>Already have an account? Sign in</h3>
            </div>
        );
    }
}