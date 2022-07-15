import React, { useContext } from "react";
import Button from "./Button";

import { CartContext } from "../contexts/cartContext";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
