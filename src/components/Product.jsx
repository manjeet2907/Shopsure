import React from "react";
import Button from "./Button/Button";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItemToCart } from "../reducers/cart/cartAction";
import { selectCartItems } from "../reducers/cart/cartSelector";
// import { CartContext } from "../contexts/cartContext";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (product) =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='productfooter'>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addProductToCart(product)}>
        Add to card
      </Button>
    </div>
  );
};

export default Product;
