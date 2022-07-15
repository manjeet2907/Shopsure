import React, { useContext } from "react";

import { CategoriesContext } from "../contexts/categoriesContext";
import CategoryPreview from "../containers/CategoryPreview";

const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
