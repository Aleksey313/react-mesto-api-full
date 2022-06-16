import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(email, password);
  }

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          minLength="4"
          maxLength="40"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          className="login__input"
          minLength="6"
          maxLength="30"
          type="password"
          placeholder="Пароль"
          value={password}
          autoComplete="on"
          onChange={handlePasswordChange}
          required
        />
        <button className="login__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="login__text">
        Уже зарегистрированы?
        <Link to="/sign-in" className="login__link">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
