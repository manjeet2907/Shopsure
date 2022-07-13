import React from "react";
const buttonStyles = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container ${buttonStyles[buttonType]}`}
        {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
