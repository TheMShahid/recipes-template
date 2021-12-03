import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img src={props.recipe.image} alt={props.recipe.title} />
    <h3>{props.recipe.title}</h3>
    <span className="rating">&#9733; &#9733; &#9733; &#9733; </span>
    <p className="des">{props.recipe.descrip}</p>
    <div className="buy-know">
      <button>BUY KNOW</button>
      <p>{props.recipe.price}</p>
    </div>
  </div>
);
