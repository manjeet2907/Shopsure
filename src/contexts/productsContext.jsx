import React, { createContext, useState } from "react";

import Products from "../SHOP_DATA.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
