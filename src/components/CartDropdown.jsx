import React from "react";
import Button from "./Button";
import Checkout from "../Screens/Checkout";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  return (
    <div className='cartDropdown_container'>
      <div className='cartItems'>the Cart is empty</div>
      <Button type='button' buttonType='google'>
        <Link classname='checkoutbutton' to='/checkout' element={<Checkout />}>
          Checkout
        </Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
