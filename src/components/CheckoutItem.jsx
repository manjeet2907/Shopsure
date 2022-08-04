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
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  // const cartTotal = useSelector(selectCartTotal);
  // // const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(
  //   CartContext
  // );

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <h6 className='name'> {name} </h6>
      <span className='quantity'>
        <p className='arrow' onClick={removeItemHandler}>
          &#10094;
        </p>
        <p className='value'>{quantity}</p>
        <p className='arrow' onClick={addItemHandler}>
          &#10095;
        </p>
      </span>
      <p className='price'> {price}</p>
      <p className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </p>
    </div>
  );
};

export default CheckoutItem;
