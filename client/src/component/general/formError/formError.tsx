import { FC } from "react";
import { formErrorProps } from "./formError.type";
import "./formError.css";
const FormError: FC<formErrorProps> = ({ errorText, appear }) => {
  return (
    <>
      {appear ? (
        <div className="error-container">
          <p>{errorText}</p>
        </div>
      ) : null}
    </>
  );
};

export default FormError;
