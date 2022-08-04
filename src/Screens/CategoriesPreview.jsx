import React from "react";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../reducers/category/categorySelector";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CategoryPreview from "../containers/CategoryPreview";
import Spinner from "../components/spinner/spinner.component";
// import { CategoriesContext } from "../contexts/categoriesContext";

const CategoriesPreview = () => {
  // const { CategoriesMap } = useContext(CategoriesContext);
  const CategoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(CategoriesMap).map((title) => {
          const products = CategoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
