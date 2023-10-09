import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { unauthorizedRequest } from "../../utils/queries";
import { registerUrl } from "../../utils/network";
import FormError from "../../component/general/formError/formError";
import { useNavigate } from "react-router-dom";
import InputField from "../../component/general/inputField/inputField";
import SubmitButton from "../../component/general/submitButton/submitButton";
import BaseLayout from "../../component/layout/baseLayout";

const Register = () => {
  const [error, setError] = useState(true);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState({ mail: "", password: "" });

  const sendData = async () => {
    try {
      const response = await unauthorizedRequest(registerUrl, "POST", formData);
      const { tokens } = response;
      dispatch({ type: "REGISTER", payload: tokens.accessToken });
      navigate("/");
    } catch (err) {
      setError(true);
      setErrorText(String(err));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendData();
  };
  return (
    <BaseLayout>
      <FormError errorText={errorText} appear={error} />
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          value={formData.mail}
          onChange={handleInputChange}
          placeHolder={"enter your mail"}
          title={"Mail: "}
          type={"email"}
          name={"mail"}
        />
        <InputField
          value={formData.password}
          onChange={handleInputChange}
          placeHolder={"enter your password"}
          title={"Password: "}
          type={"password"}
          name={"password"}
        />
        <SubmitButton text={"Register"} />
      </form>
    </BaseLayout>
  );
};

export default Register;
