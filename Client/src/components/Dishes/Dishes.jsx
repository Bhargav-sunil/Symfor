import React from "react";
import "./Dishes.css";

const Dishes = () => {
  const dishesList = [
    {
      img: "",
      name: "Spicy seasoned seafood noodles",
      time: "20 min",
      type: "snacks",
    },
    {
      img: "",
      name: "Salted Pasta with mushroom sauce",
      time: "30 min",
      type: "lunch",
    },
    {
      img: "",
      name: "Beef dumpling in hot and sour soup",
      time: "25 min",
      type: "dinner",
    },
    {
      img: "",
      name: "Healthy noodle with spinach leaf",
      time: "15 min",
      type: "lunch",
    },
    {
      img: "",
      name: "Hot spicy fried rice with omelet",
      time: "30 min",
      type: "lunch",
    },
    {
      img: "",
      name: "Spicy instant noodle with special omelette",
      time: "20 min",
      type: "snacks",
    },
    {
      img: "",
      name: "Healthy noodle with spinach leaf",
      time: "15 min",
      type: "lunch",
    },
  ];
  return (
    <div className="dishes">
      <ul className="dishes-list">
        {dishesList.map((dish, index) => (
          <div key={index} className="dish-card">
            <img src={dish.img} alt="dish" />
            <p>{dish.name}</p>
            <div>
              <p>{dish.time}</p>
              <p>{dish.type}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
