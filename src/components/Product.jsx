import React from "react";
import Button from "./Button";

const Product = ({ product }) => {
  // const { name, price, imageUrl } = product;
  return (
    <div className='item_list'>
      {product.map((item) => (
        <div className='item'>
          <div className='img'>
            <img src={item.imageUrl} alt={item.name} />
            <Button buttonType='inverted' type='button' className='action'>
              Add to Cart
            </Button>
          </div>
          <div className='details'>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
