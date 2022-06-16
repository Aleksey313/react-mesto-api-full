import React from "react";

function Login({ onLogin }) {
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
    onLogin(email, password);
  }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
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
          onChange={handlePasswordChange}
          required
        />
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
