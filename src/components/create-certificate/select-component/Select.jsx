import React from "react";

const Select = ({ name, options, value, onChange }) => {
  const salutation = ["-select-", "Mr.", "Mrs.", "Ms."];
  return (
    <div>
      <label> Salutation:- </label>
      <select {...{ name, options, value, onChange }}>
        {salutation?.map((items) => {
          return <option key={items}>{items}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
