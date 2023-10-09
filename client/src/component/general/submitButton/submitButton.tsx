import React, { FC } from "react";
import { submitButtonType } from "./submitButton.type";
import "./submitButton.css";
const SubmitButton: FC<submitButtonType> = ({
  text,
  onClick,
  type = "submit",
}) => {
  return (
    <div>
      <button onClick={onClick} className="button" type={type}>
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
