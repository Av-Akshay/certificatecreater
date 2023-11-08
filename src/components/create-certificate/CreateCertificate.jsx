import React from "react";
import "./index.css";
import Input from "../input-field/Input";
import { Select } from "../index";
import { useCreateCertificateHook } from "../index";

const CreateCertificate = () => {
  const { inputVal, inputChange, handleCreateCertificate } =
    useCreateCertificateHook();
  // const [inputVal, setInputVal] = useState({
  //   name: "",
  //   from: "",
  //   to: "",
  //   email: "",
  //   options: "",
  //   id: "",
  // });

  // const inputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputVal((preValue) => {
  //     return {
  //       ...preValue,
  //       [name]: value,
  //     };
  //   });
  // };

  return (
    <div className=" generate_certificate_form ">
      <div className=" add_certificate_form">
        <h1>Add certificate</h1>
        <form className=" add_certificate">
          <div className="form_row1">
            <Select
              name="options"
              value={inputVal.options}
              onChange={inputChange}
            />
            <Input
              isLabel={true}
              name="name"
              placeholder="Enter Name"
              type="text"
              value={inputVal.name}
              onChange={inputChange}
              label="Name"
              inputClass="input_border"
            />
            <Input
              isLabel={true}
              name="from"
              placeholder="YYYY/MM/DD"
              type="text"
              value={inputVal.from}
              onChange={inputChange}
              label="From"
              inputClass="input_border"
            />
            <Input
              isLabel={true}
              name="to"
              placeholder="YYYY/MM/DD"
              type="text"
              value={inputVal.to}
              onChange={inputChange}
              label="To"
              inputClass="input_border"
            />
          </div>
          <div className="form_row2">
            <Input
              isLabel={true}
              name="email"
              placeholder="Enter Email"
              type="text"
              value={inputVal.email}
              onChange={inputChange}
              label="Email"
              inputClass="input_border"
            />
            <Input
              isLabel={true}
              name="id"
              placeholder="UID"
              type="text"
              value={inputVal.id}
              onChange={inputChange}
              label="Id"
              inputClass="input_border"
            />
          </div>
          <div className="form_row3">
            <button className="add_certificate_btn">Close</button>
            <button
              className="add_certificate_btn"
              onClick={(e) => {
                e.preventDefault();
                handleCreateCertificate();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCertificate;
