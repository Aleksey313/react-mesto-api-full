import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="editor"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <input
        className="form__input"
        value={name || ""}
        onChange={handleChangeName}
        required
        minLength="2"
        maxLength="40"
        id="name-input"
        name="name"
        type="text"
        placeholder="Имя"
      />
      <span id="name-error" className="form__error"></span>
      <input
        className="form__input"
        value={description || ""}
        onChange={handleChangeDescription}
        required
        minLength="2"
        maxLength="200"
        id="about-input"
        name="about"
        type="text"
        placeholder="Профессиональная деятельность"
      />
      <span id="about-error" className="form__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
