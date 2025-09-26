import React from "react";
import "./Category.css";

const Category = () => {
  const categoriesList = [
    { img: "", name: "Breakfast" },
    { img: "", name: "Lunch" },
    { img: "", name: "Dinner" },
    { img: "", name: "Snacks" },
    { img: "", name: "Sweets" },
    { img: "", name: "Drinks" },
  ];
  return (
    <div className="category">
      <div className="category-header">
        <h1>Category</h1>
        <button>View All Categories</button>
      </div>
      <div className="categories-list">
        <ul>
          {categoriesList.map((item, index) => (
            <div>
              <img src={item.img} alt={item.name} />
              <p key={index}>{item.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
