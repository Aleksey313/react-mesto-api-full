function InfoTooltip({ isOpen, onClose, image, text }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__registration">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img
          src={image}
          className="popup__result"
          alt="Итог регистрации."
        />
        <h2 className="popup__text-result">
          {text}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
