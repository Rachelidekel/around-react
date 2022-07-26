import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopupForm({ isOpen, onCardDelete, onClose }) {

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete.classList.remove(".element");
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Are you sure?"
      name="delete-form"
      buttonText="Yes"
    >
      <>
        <button type="submit" className="form__button form__button_type_yes">
          Yes
        </button>
      </>
    </PopupWithForm>
  );
}

export default DeletePopupForm;
