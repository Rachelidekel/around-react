import React, { useState } from "react";
import trash from '../images/Delete_Icon.svg'
import heart from '../images/Vector_heart.svg'


function Card(props) {
  const [likesCount, setLikesCount] = useState(0);
  

  function handleClick() {
    props.onCardClick(props.card);
  }

 
  return (
    <li className="element">
        <div className="element__wrapper"> 
        <img
        src={props.card.link}
        alt={props.card.name}
        className="element__item"
        onClick={handleClick}
      />
      <button
        type="button"
        className="element__delete-button" onClick={props.onDeleteClick}
      ><img
      src={trash}
      alt=" a drawing of a trash can"
      className="element__delete-icon"
      
    />

      </button>
      </div>
      <div className="element__title">
        <h2 className="element__title-name">{props.card.name}</h2>

        <div className="element__likes">
          <button
            className="element__title-button"
            type="button">
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
};

export default Card;