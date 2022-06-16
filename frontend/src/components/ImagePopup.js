function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_image ${card && "popup_opened"}`}>
      <div className="popup__image">
        <img
          className="popup__jpg"
          src={card && card.link}
          alt={card && card.name}
        />
        <h2 className="popup__text">{card && card.name}</h2>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
export default ImagePopup;
