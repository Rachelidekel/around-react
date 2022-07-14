import React, { useState } from "react";
import trash from "../images/Delete_Icon.svg";
import heart from "../images/Vector_heart.svg";

function Card({ card, onCardClick, onDeleteClick }) {
  const [likesCount, setLikesCount] = useState(0);

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <div className="element__wrapper">
        <img
          src={card.link}
          alt={card.name}
          className="element__item"
          onClick={handleClick}
        />
        <button
          type="button"
          className="element__delete-button"
          onClick={onDeleteClick}
        >
          <img
            src={trash}
            alt=" a drawing of a trash can"
            className="element__delete-icon"
          />
        </button>
      </div>
      <div className="element__title">
        <h2 className="element__title-name">{card.name}</h2>

        <div className="element__likes">
          <button className="element__title-button" type="button">
            <img
              src={heart}
              alt="a drawing of a heart"
              className="element__title-heart"
            />
          </button>
          <span className="element__likes-count">{likesCount}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
