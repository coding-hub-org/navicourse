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
                <Title>
                    <h5 style={{ textAlign: "center", color: "#ff5a6e" }}>REGISTER TO NAVICOURSE</h5>
                    <h3 style={{ textAlign: "center", fontFamily: "Times Roman", fontSize: "20px", padding: "15px", top: "100px", color: "Black" }}>Welcome! Please register to review and read people’s reviews</h3>

                </Title>
                <div className="inputWrapper">
                    <InputBlock style={{ textAlign: "center " }} type={"text"} placeholder={"Username"} />
                    <InputBlock style={{ marginTop: "60px", marginLeft: "50px" }} type={"password"} placeholder={"Password"} style={{ padding: "55px" }} />
                </div>
                <button style={{ textAlign: "center", backgroundColor: "#ff5a6e", color: "white", width: "150px", height: "50px", borderRadius: "12%", fontSize: "20px", padding: "0px", marginLeft: "590px", marginTop: "60px" }}>Register</button>
                <h3 style={{ textAlign: "center", fontFamily: "Times Roman", fontSize: "20px", padding: "25px", color: "Black" }}>Already have an account? Sign in</h3>
            </div>
        );
    }
}