import React from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className='cartIcon_Container'>
      <ShoppingIcon />
      <span>0</span>
    </div>
  );
};

export default CartIcon;
