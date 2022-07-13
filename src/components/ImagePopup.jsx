import React from "react";

function ImagePopup(props) {

return (
        <div
          className={`popup popup_type_image-prev ${
            props.isOpen ? "popup_opened" : ""
          }`}
        >
          <div className="popup__container popup__container_type_image">
            <button
              className="popup__close-button popup__close-button_type_image"
              type="button"
              onClick={props.onClose}
            ></button>
            <figure>
            <img src={props.card.link} alt="#" className="popup__image" />
            <figcaption className="popup__caption">{props.card.name}</figcaption>
            </figure>
          </div>
        </div>
       
)

}

export default ImagePopup;

