import React, { useState } from "react";
import { Button, InputData } from "../components";
import {
  signInWithGooglePopup,
  signinAuthWithEP,
} from "../utils/firebase/firebase.utils";

// import { UserContext } from "../contexts/userContext";

// default form fields
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormFields);

  const { email, password } = formField;

  // as this component needs the state we will use Context here
  // const { setCurrentUser } = useContext(UserContext);

  // sign In code will go here
  // two meathods for signin Google and Email
  const SignInWithGoogleeee = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signinAuthWithEP(email, password);
      setFormField(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  // end of SignIn code

  return (
    <div className='sign_in'>
      <h3>Already have an account</h3>
      <h3>Sign In to your Account</h3>
      <form onSubmit={handleSubmit}>
        <InputData
          value={email}
          label='Email'
          idlabel='sEmail'
          placeholder='Enter Your Email'
          type='email'
          name='email'
          actionOnChange={handleChange}
        />
        <InputData
          value={password}
          label='Password'
          idlabel='sPassword'
          placeholder='Enter Your Password'
          type='password'
          name='password'
          actionOnChange={handleChange}
        />
        <div className='actions'>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType='google'
            onClick={SignInWithGoogleeee}
            type='button'>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
