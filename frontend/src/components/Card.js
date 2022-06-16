import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ onCardClick, card, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_visible" : "element__delete_hidden"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="element">
      <img
        className="element__img"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__box">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__likes">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
        <button
          className={cardDeleteButtonClassName}
          type="button"
          onClick={handleDeleteClick}
        ></button>
      </div>
    </div>
  );
}
export default Card;
