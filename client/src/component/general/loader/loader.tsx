import React, { FC } from "react";
import { loaderType } from "./loader.type";

const Loader: FC<loaderType> = ({ appear, children }) => {
  return (
    <>
      {appear ? (
        <div className="simple-spinner">
          <span></span>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
