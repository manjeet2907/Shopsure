import React from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../reducers/cart/cartSelector";
import { setIsCartOpen } from "../reducers/cart/cartAction";
// import { CartContext } from "../contexts/cartContext";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className='cartIcon_Container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
