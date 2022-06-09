import React, { useState } from "react";
import { Button, InputData } from "../components";
import SignUp from "../containers/SignUp";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign In code will go here
  // two meathods for signin Google and Email
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const SigninFunc = (e) => {
    e.preventdefault();
  };

  // end of SignIn code
  return (
    <div className='signin_Page'>
      <div className='sign_in'>
        <h3>I already have an account</h3>
        <h3>Sign In to your Account</h3>
        <form>
          <InputData
            value={email}
            label='Email'
            idlabel='sEmail'
            placeholder='Enter Your Email'
            type='email'
            actionOnChange={(e) => setEmail(e.target.value)}
          />
          <InputData
            value={password}
            label='Password'
            idlabel='sPassword'
            placeholder='Enter Your Password'
            type='password'
            actionOnChange={(e) => setPassword(e.target.value)}
          />
          <div className='actions'>
            <Button Button='Sign In' onclick={SigninFunc} />
            <Button
              Button='Sign In With Google'
              isGoogleSignIn={true}
              onclick={SignInWithGoogle}
            />
          </div>
        </form>
      </div>
      <div className='sign_up'>
        <SignUp />
      </div>
    </div>
  );
};

export default SignIn;
