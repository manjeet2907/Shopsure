import React from "react";
import { SignIn, SignUp } from "../containers";
import { selectCurrentUser } from "../reducers/user/userSelector";
import { Home } from "../Screens";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser ? (
        <Home />
      ) : (
        <div className='signinup_page'>
          <SignIn />
          <SignUp />
        </div>
      )}
    </>
  );
};

export default Authentication;
