import React from "react";

const CategoryItem = (category) => {
  const { imageUrl, title, id } = category;
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className='category-container' key={id}>
      <div className='background-image' style={divStyle}>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
