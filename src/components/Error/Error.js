import React from "react";
import "./Error.css";

const Error = ({err}) => {
let message = err ? err : "Invalid URL! Please try again"

  return (
    <div className="err-container">
      <h2 className="error-message">{message}</h2>
    </div>
  );
};

export default Error;
