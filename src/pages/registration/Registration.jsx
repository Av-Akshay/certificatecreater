import React from "react";

import "./registration.css";

const Registration = () => {
  return (
    <div className="App">
      <div className="reg_form">
        <div className="form">
          <form action="">
            <h1>Registration</h1>
            <div className="input_filds">
              <div className="input_fild">
                <label htmlFor="">Name:-</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="input_fild">
                <label htmlFor="">Email:-</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="input_fild">
                <label htmlFor="">Phone Number:-</label>
                <input type="tel" placeholder="Enter Your Number" />
              </div>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
        <div className="registration_form_img">
          <h1>Showcase Your Talent To The World</h1>
          <h1>Register Now !</h1>
        </div>
      </div>
    </div>
  );
};

export default Registration;
