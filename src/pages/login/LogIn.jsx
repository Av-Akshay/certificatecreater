import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import { InputField } from "../../components";
import useLoginHook from "../../hooks/useLoginHook";

const LogIn = () => {
  const { handleChange, handleSignIn, loginInfo, setLoginInfo } =
    useLoginHook();

  return (
    <div className="login_form">
      <div className="loggedin">
        <div className="item1">
          <h1 className="lofin_form_heading">Login Form</h1>
          <form className="log_in_form">
            <InputField
              isLabel={false}
              name={"username"}
              onChange={handleChange}
              placeholder={"Enter username"}
              type={"text"}
              value={loginInfo.username}
            />
            <InputField
              isLabel={false}
              name={"password"}
              onChange={handleChange}
              placeholder={"Enter password "}
              type={"password"}
              value={loginInfo.password}
            />
            <div className="btn" onClick={handleSignIn}>
              SIGN IN
            </div>
            {/* <NavLink to="certificates" className="btn">
              SIGN IN
            </NavLink> */}
          </form>
          <NavLink className="forgote_password">Forgote Password</NavLink>
        </div>
        <div className="item2">
          <p>Don't have an account</p>
          <NavLink to="./registration" className="btn">
            SIGN UP NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
