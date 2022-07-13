import React, { useContext } from "react";
import Product from "../components/Product";

import { ProductsContext } from "../contexts/productsContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='shop_page'>
      <h1>Shop Page</h1>
      {products.map((product) => (
        <div className='item_Cat_list'>
          <h4>{product.title}</h4>
          <Product key={product.items.name} product={product.items} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
