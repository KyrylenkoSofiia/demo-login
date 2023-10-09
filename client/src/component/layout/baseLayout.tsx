import React, { FC } from "react";
import { baseLayoutType } from "./baseLayout.type";
import SubmitButton from "../general/submitButton/submitButton";
import { useNavigate } from "react-router-dom";
import "./baseLayout.css";
const BaseLayout: FC<baseLayoutType> = ({ children }) => {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    navigate(route);
  };
  return (
    <>
      <header className="header">
        <SubmitButton
          onClick={() => {
            handleNavigate("/login");
          }}
          text={"Login"}
        />
        <SubmitButton
          onClick={() => {
            handleNavigate("/register");
          }}
          text={"Register"}
        />
      </header>
      <div>{children}</div>
    </>
  );
};

export default BaseLayout;
