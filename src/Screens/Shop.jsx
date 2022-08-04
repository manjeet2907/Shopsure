import React, { useEffect } from "react";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";
import { Routes, Route } from "react-router-dom";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { fetchCategoriesStart } from "../reducers/category/catergoryAction";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

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
