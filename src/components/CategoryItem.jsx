import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = (category) => {
  const { imageUrl, title, id } = category;
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${imageUrl})`,
  };

  const navigate = useNavigate();

  return (
    <div className='category-container' key={id}>
      <div className='background-image' style={divStyle}>
        <div
          className='category-body-container'
          onClick={() => navigate(`/shop/${title.toLowerCase()}`)}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
