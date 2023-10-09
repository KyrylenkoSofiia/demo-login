import React, { FC } from "react";
import { inputFieldType } from "./inputField.type";
import "./inputField.css";
const InputField: FC<inputFieldType> = ({
  value,
  onChange,
  placeHolder,
  title,
  type,
  name,
}) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor="form">
        {title}
      </label>
      <input
        className="input-field"
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
