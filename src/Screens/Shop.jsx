import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";

const Shop = () => {
  return (
    <div className='shop_page'>
      <h1>Shop Page</h1>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
