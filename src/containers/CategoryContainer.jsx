import React from "react";
import { CategoryItem } from "../components";
import SHOP_DATA from "../SHOP_DATA";

const CategoryContainer = () => {
  return (
    <div className='categories-container'>
      {SHOP_DATA.map((category) => (
        <CategoryItem
          key={category.title}
          title={category.title}
          imageUrl={category.items[1].imageUrl}
          id={category.title}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;
