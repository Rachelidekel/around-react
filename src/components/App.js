import React, { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick()  {
    setIsEditProfilePopupOpen(true);
  };

 function handleAddPlaceClick()  {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setIsImagePreviewOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
  };

 function handleDeleteClick() {
    setIsDeletePopupOpen(true)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePreviewOpen(false);
    setIsDeletePopupOpen(false);
  }


  return (
    <>
    <div className="App">
      <Header />
      <Main
      onEditProfileClick={handleEditProfileClick}
      onAddPlaceClick={handleAddPlaceClick}
      onEditAvatarClick={handleEditAvatarClick}
      onCardClick={handleCardClick}
      onDeleteClick={handleDeleteClick}
       />
      <Footer />
      <PopupWithForm
        title="Edit profile"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Save">
     
      <div className="form__control">
        <input
          type="text"
          className="form__input form__input_type_name"
          id="name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-error" className="popup__error"></span>
      </div>
      <input
        type="text"
        className="form__input form__input_type_job"
        id="about-me"
        name="job"
        placeholder="About me"
        required
        minLength="2"
        maxLength="200"
      />
      <span id="about-me-error" className="popup__error"></span>
     
   </PopupWithForm>

    <PopupWithForm
        title="New place"
        name="add-place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Create"
      >
       
            <div className="form__control">
              <input
                type="text"
                className="form__input form__input_type_card-title"
                id="card-title"
                name="name"
                placeholder="Title"
                required
                minLength="1"
                maxLength="30"
              />
              <span id="card-title-error" className="popup__error"></span>
            </div>
            <input
              type="url"
              className="form__input form__input_type_card-link"
              id="card-link"
              name="link"
              placeholder="Image link"
              required
            />
            <span id="card-link-error" className="popup__error"></span>
           
          </PopupWithForm>

          <PopupWithForm
        title="Change Profile Picture"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Save">
 
            <div className="form__control form__control-avatar">
              <input
                type="url"
                className="form__input form__input_type_avatar-link"
                id="avatar-link"
                name="link"
                placeholder="Image link"
                required
              />
              <span id="avatar-link-error" className="popup__error"></span>
            </div>
           
        </PopupWithForm>
        
        <PopupWithForm
        title="Are you sure?"
        name="delete-form"
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        buttonText="Yes"/>
          
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePreviewOpen}
        onClose={closeAllPopups}
      />
   </div>
   </> 
  );
}

export default App;
