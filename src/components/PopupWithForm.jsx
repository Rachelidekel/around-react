import React from "react";

function PopupWithForm(props) {
    return (
        <div
        className={`popup popup_type_${props.name} ${
            props.isOpen ? "popup_opened" : ""
          }`}
        >
<div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form action="submit" className="form popup__form" name={props.name}>
          {props.children}
          <div className="form__control">
            <button className="form__button" type="submit">
              {props.buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
)
}

export default PopupWithForm;