import React from "react";
import "./index.css";
import Input from "./Input";

const CreateCertificate = () => {
  return (
    <div className=" generate_certificat_form ">
      <div className=" add_certificate_form">
        <h1>Add certificate</h1>
        <form action="" className=" add_certificate">
          <div className="form_row1">
            <div>
              <label> Salutation:- </label>
              <select>
                <option> -select- </option>
              </select>
            </div>
            <Input label="name" placeholder="Enter Name" />
            <Input label="From" placeholder="MM/DD/YYYY" />
            <Input label="To" placeholder="MM/DD/YYYY" />
          </div>
          <div className="form_row2">
            <Input label="Email Id" placeholder="Enter Email" />

            <Input label="UID" placeholder="UID" />
          </div>
          <div className="form_row3">
            <button className="add_certificate_btn">Close</button>
            <button className="add_certificate_btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCertificate;
