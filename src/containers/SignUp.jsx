import React, { useState } from "react";
import { Button, InputData } from "../components";
// import InputData from "./InputData";
// import { auth, createUserProfileDocument } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  // const [pic, setPic] = useState('')

  const signupFunc = async (e) => {
    e.preventDefault();

    // if (password !== conpassword) {
    //   alert("password does not match");
    //   return;
    // }
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });
    //   setEmail("");
    //   setPassword("");
    //   setConPassword("");
    //   setDisplayName("");
    //   // setPic('')
    // } catch (error) {
    //   console.error(error);
    //   alert(error);
    // }
  };

  return (
    <div>
      <h3>I don't have an account</h3>
      <h3>Sign Up</h3>
      <form>
        <InputData
          value={displayName}
          label='Full Name'
          placeholder='Enter Your Name'
          required
          type='text'
          actionOnChange={(e) => setDisplayName(e.target.value)}
        />
        <InputData
          value={email}
          label='Email'
          placeholder='Enter Your Email'
          required
          type='email'
          actionOnChange={(e) => setEmail(e.target.value)}
        />
        <InputData
          value={password}
          label='Password'
          placeholder='Enter Your Password'
          required
          type='password'
          actionOnChange={(e) => setPassword(e.target.value)}
        />
        <InputData
          value={conpassword}
          label='Confirm Password'
          placeholder='Confirm Your Password'
          required
          type='password'
          actionOnChange={(e) => setConPassword(e.target.value)}
        />
        <div className='actions'>
          <Button Button='Sign up' action={signupFunc} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
