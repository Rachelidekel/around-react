import React, { useState } from "react";

function Card(props) {
  const [likesCount, setLikesCount] = useState(0);

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
        <div class="element__wrapper"> 
        <img
        src={props.card.link}
        alt={props.card.name}
        className="element__item"
        onClick={handleClick}
      />
      <button
        type="button"
        className="element__delete-button"
      ></button>
      </div>
      <div className="element__title">
        <h2 className="element__title-name">{props.card.name}</h2>

        <div className="element__likes">
          <button
            className="element__title-button"
            type="button"
           
          ></button>
          <span className="element__likes-count">{likesCount}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;