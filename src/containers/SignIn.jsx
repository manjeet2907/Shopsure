import React, { useState } from "react";
import { Button, InputData } from "../components";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signinWithEP,
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEP = async (e) => {
    e.preventDefault();
    await signinWithEP();
  };
  // sign In code will go here
  // two meathods for signin Google and Email
  const SignInWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithGooglePopup();
    const userDoc = await createUserDocumentFromAuth();
    console.log(userDoc);
  };

  // end of SignIn code
  return (
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
          <Button Button='Sign In' onclick={signInWithEP} />
          <Button
            Button='Sign In With Google'
            isGoogleSignIn={true}
            onclick={SignInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
