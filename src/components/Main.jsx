import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props)  {
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
        console.log(res);
        setCards(res);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
      <div className="profile__avatar">
        <div
          className="profile__avatar-image"
          onClick={props.onEditAvatarClick}
        >
          <img
            src={userAvatar}
            alt="User's Profile"
            className="profile__image"
          />
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
            ></button>
          </div>
          <p className="profile__subtitle-job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};


export default Main;