import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Checkout, Shop, Authentication, Contact } from "./Screens";
import "./styles/app.css";

const App = () => {
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
