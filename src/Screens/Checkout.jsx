import React from "react";
import CheckoutItem from "../components/CheckoutItem";
// import { CartContext } from "../contexts/cartContext";
import {
  selectCartItems,
  selectCartTotal,
} from "../reducers/cart/cartSelector";
import { useSelector } from "react-redux";
import PaymentForm from "../components/PaymentForm/PaymentForm.component";

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <h4>Product</h4>
        </div>
        <div className='header-block'>
          <h4>Description</h4>
        </div>
        <div className='header-block'>
          <h4>Quantity</h4>
        </div>
        <div className='header-block'>
          <h4>Price</h4>
        </div>
        <div className='header-block'>
          <h4>Remove</h4>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
