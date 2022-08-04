import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";

import Product from "../components/Product";
import Spinner from "../components/spinner/spinner.component";
// import { CategoriesContext } from "../contexts/categoriesContext";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../reducers/category/categorySelector";

const Category = () => {
  const { category } = useParams();
  // const { CategoriesMap } = useContext(CategoriesContext);
  const CategoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(CategoriesMap[category]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);

  return (
    <div className='category__container'>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='single_category-container'>
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
