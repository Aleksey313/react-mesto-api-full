import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(name, link);
  }

  React.useEffect(() => {
    if (!isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      buttonText="Создать"
    >
      <input
        className="form__input"
        value={name}
        onChange={handleNameChange}
        required
        minLength="2"
        maxLength="30"
        id="title-input"
        name="name"
        type="text"
        placeholder="Название"
      />
      <span id="title-error" className="form__error"></span>
      <input
        className="form__input"
        value={link}
        onChange={handleLinkChange}
        required
        id="link-input"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
      />
      <span id="link-error" className="form__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
