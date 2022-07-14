import React from "react";
import close from "../images/Close_Icon.svg";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button className="popup__close-button" type="button">
          <img
            src={close}
            alt="icon of x"
            className="popup__close-icon popup__close-icon_image"
            onClick={props.onClose}
          />
        </button>
        <h2
          className={`popup__title ${
            props.name === "delete-form" ? "popup__title_type_delete" : ""
          }`}
        >
          {props.title}
        </h2>
        <form
          action="submit"
          className="form popup__form"
          name={props.name}
          noValidate
        >
          {props.children}
          <div className="form__control"></div>
          <button
            className={`form__button ${
              props.name === "delete-form" ? "form__button_type_yes" : ""
            }`}
            type="submit"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
