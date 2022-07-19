import React from "react";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../reducers/cart/cartAction";
import { selectCartItems } from "../reducers/cart/cartSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

// import { CartContext } from "../contexts/cartContext";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;
  // // const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(
  //   CartContext
  // );

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems.cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
