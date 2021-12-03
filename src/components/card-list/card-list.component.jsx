import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default CardList;
