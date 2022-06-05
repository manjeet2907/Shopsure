import React from "react";

const Button = ({ Button, action, isGoogleSignIn }) => {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "google_sign_in" : ""} customButton`}
        onClick={action}>
        {Button}
      </button>
    </div>
  );
};

export default Button;
