import React, { useState } from "react";
import { InputData } from "../components";
import Button from "../components/Button/Button";
import { useDispatch } from "react-redux";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";
import { signUpStart } from "../reducers/user/userAction";

// import { UserContext } from "../contexts/userContext";

// we will set all initial values of all the input field here
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  conpassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  // use useState hook and the initial values set in above as the default values
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destrcture the input fields from form fields
  const { displayName, email, password, conpassword } = formFields;

  // add a generic function to handle all the changes in input and setting them
  // const { setCurrentUser } = useContext(UserContext);
  // const [pic, setPic] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if both password matches
    if (password !== conpassword) {
      alert("password does not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));

      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='signUp'>
      <h3>I don't have an account</h3>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <InputData
          value={displayName}
          label='Full Name'
          placeholder='Enter Your Name'
          required
          type='text'
          actionOnChange={handleChange}
          name='displayName'
        />
        <InputData
          value={email}
          label='Email'
          placeholder='Enter Your Email'
          required
          type='email'
          actionOnChange={handleChange}
          name='email'
        />
        <InputData
          value={password}
          label='Password'
          placeholder='Enter Your Password'
          required
          type='password'
          actionOnChange={handleChange}
          name='password'
        />
        <InputData
          value={conpassword}
          label='Confirm Password'
          placeholder='Confirm Your Password'
          required
          type='password'
          actionOnChange={handleChange}
          name='conpassword'
        />
        <div className='actions'>
          <Button onClick={handleSubmit}>Sign up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
