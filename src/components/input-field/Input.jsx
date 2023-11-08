import React from "react";
import "./index.css";

const InputField = ({
  isLabel,
  name,
  placeholder,
  type,
  value,
  onChange,
  label,
  inputClass,
}) => {
  return (
    <div>
      {isLabel && <label> {label}:- </label>}
      <input
        className={`login_input_field ${inputClass}`}
        {...{ name, placeholder, type, value, onChange }}
      />
    </div>
  );
};

export default InputField;
