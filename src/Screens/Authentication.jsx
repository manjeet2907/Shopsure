import React from "react";
import { SignIn, SignUp } from "../containers";

const Authentication = () => {
  return (
    <div className='signinup_page'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
