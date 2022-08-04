import React from "react";
import Button from "../components/Button/Button";
// import Checkout from "../Screens/Checkout";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartItems } from "../reducers/cart/cartSelector";

// import { CartContext } from "../contexts/cartContext";

const CartDropdown = () => {
  const navigate = useNavigate();
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className='cartDropdown_container'>
      <div className='cartItems'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className='empty-message'>Your cart is empty</div>
        )}
      </div>
      <Button>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </Button>
    </div>
  );
};

export default CartDropdown;
