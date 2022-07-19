import React, { useEffect } from "react";
// import { createAction } from "./utils/reducer";
import { useDispatch } from "react-redux/es/exports";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListner,
} from "./utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Checkout, Shop, Authentication, Contact } from "./Screens";
import "./styles/app.css";
import { setCurrentUser } from "./reducers/user/userAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    // return unsubscribe;
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='screens'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
