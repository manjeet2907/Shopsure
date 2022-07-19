import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";

import Product from "../components/Product";
// import { CategoriesContext } from "../contexts/categoriesContext";
import { selectCategoriesMap } from "../reducers/category/categorySelector";

const Category = () => {
  const { category } = useParams();
  // const { CategoriesMap } = useContext(CategoriesContext);
  const CategoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(CategoriesMap[category]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
