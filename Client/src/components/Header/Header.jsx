import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="description">
        <h1>Spicy delicious chicken wings</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          asperiores repudiandae delectus eius earum accusamus vel
          exercitationem! Vero vitae rem blanditiis libero aliquam itaque porro
          doloribus tenetur provident, mollitia atque.
        </p>
        <div className="ammenties-container">
          <p className="ammenties">30 minutes</p>
          <p className="ammenties">chicken</p>
        </div>
      </div>
      <img src="" alt="dishes" className="img" />
    </div>
  );
};

export default Header;
