import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Mira estos lugares tan epicos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
