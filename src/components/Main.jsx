import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import pen from "../images/Vector_pen.svg";
import plus from "../images/Vector_plus.svg";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatarClick}>
          <div className="profile__avatar-image">
            {userAvatar && (
              <img
                src={userAvatar}
                alt="User's Profile"
                className="profile__image"
              />
            )}
          </div>
          <div className="profile__avatar-overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__title-name">{userName}</h1>
            <button
              className="profile__open-button"
              type="button"
              onClick={props.onEditProfileClick}
            >
              <img
                src={pen}
                alt="icon of a pen"
                className="profile__open-icon"
              />
            </button>
          </div>
          <p className="profile__subtitle-job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        >
          {" "}
          <img src={plus} alt="icon of a plus" className="profile__add-icon" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
                onDeleteClick={props.onDeleteClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
