import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Cart, Shop, SignIn, Contact } from "./Screens";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
