import React from "react";
import Button from "../components/Button";
import Checkout from "../Screens/Checkout";
import { Link } from "react-router-dom";
import { CartItem } from "../components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartItems } from "../reducers/cart/cartSelector";

// import { CartContext } from "../contexts/cartContext";

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const { cartItems } = useSelector(selectCartItems);

  return (
    <div className='cartDropdown_container'>
      <div className='cartItems'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button type='button' buttonType='google'>
        <Link classname='checkoutbutton' to='/checkout' element={<Checkout />}>
          Checkout
        </Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
