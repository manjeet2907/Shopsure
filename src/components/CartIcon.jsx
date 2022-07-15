import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

import { CartContext } from "../contexts/cartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cartIcon_Container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
