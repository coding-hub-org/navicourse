import React from "react";
import { InputBlock } from "../../components/InputBlock";
import { Title } from "../../components/Title";
import logo from "../../assets/pablo-sign-in.svg";
import logo2 from "../../assets/Group 262 copy.svg";
import { AuthButton } from "../../components/Button";
// import iPhoneSize from "../LoginPage/utils";
import "./index.css";

// const size = iPhoneSize();
// let termsTextsize = 13;

// if (size === "small") termsTextsize = 12;

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="logo-container">
          <header>
            <img src={logo2} alt="navilogo" />
          </header>
        </div>
        <div className="loginlt">
          <div className="login-landing">
            <img src={logo} alt="Man" />
          </div>
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              amet saepe blanditiis rem veritatis soluta expedita qui placeat
            </p>
          </div>
        </div>

        <div className="loginrt">
          <div className="form-landing">
            <div className="navicourse">
              <Title color={"red"} size={"sm"} uppercase={true}>
                Sign in to navicourse
              </Title>
            </div>

            <div className="welcome">
              <p>Welcome! Please sign in to review and read people’s reviews</p>
            </div>

            <div className="form">
              <InputBlock
                type={"text"}
                placeholder={"Username"}
                onChange={value => {
                  console.log(value, "this is what we logged");
                }}
              />

              <div className="pass">
                <InputBlock
                  className="pass"
                  type={"password"}
                  placeholder={"Password"}
                />
              </div>
            </div>
            <div className="submit">
              <a href="">
                <AuthButton type={"submit"}>Take Me In</AuthButton>
              </a>
            </div>
            <div className="doyou">
              <label htmlFor="link">Don't have an account? </label>
              <a href="#">Create an Account</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
