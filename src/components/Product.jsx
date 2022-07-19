import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItemToCart } from "../reducers/cart/cartAction";
import { selectCartItems } from "../reducers/cart/cartSelector";
// import { CartContext } from "../contexts/cartContext";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const { cartItems } = useSelector(selectCartItems);
  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='productfooter'>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default Product;
