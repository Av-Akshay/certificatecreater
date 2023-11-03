import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const LogIn = () => {
  return (
    <div className="login_form">
      <div className="loggedin">
        <div className="item1">
          <h1 className="lofin_form_heading">Login Form</h1>
          <form className="log_in_form">
            <input
              className="login_input_filds"
              type="email"
              placeholder="Username Email"
            />
            <input
              className="login_input_filds"
              type="number"
              placeholder="Enter Password"
            />
            <NavLink to="certificates" className="btn">
              SIGN IN
            </NavLink>
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
