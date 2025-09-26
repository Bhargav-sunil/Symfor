import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import "./App.css";
import Dishes from "./components/Dishes/Dishes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <div className="intro">
        <h1>Simple and Tasty Recipies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius
          ullam recusandae hic harum ab unde, mollitia ipsam.
        </p>
      </div>
      <Dishes />
      <footer>2025 Symfor, All Rights Reserved</footer>
    </div>
  );
};

export default App;
