function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  onSubmit,
  children,
  buttonText,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__containers">
        <div className={`popup__container popup__container_type_${name}`}>
          <h2 className="popup__title">{title}</h2>
          <form className="form" name={name} onSubmit={onSubmit}>
            {children}
            <button
              className={`popup__button popup__button_type_${name}`}
              type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
