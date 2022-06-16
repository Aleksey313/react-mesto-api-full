import logo from "../images/logo/header.svg";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Header({ userEmail, onSignOut }) {

  return (
    <header className='header'>
      <img className="header__logo" src={logo} alt="Лого" />
      <nav className="header__container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <p className="header__text">{userEmail}</p>
                <Link
                  to="/sign-in"
                  className="header__link"
                  onClick={onSignOut}
                >
                  Выйти
                </Link>
              </>
            }
          />
          <Route
            exact
            path="/sign-in"
            element={
              <>
                <Link to="/sign-up" className="header__link">
                  Регистрация
                </Link>
              </>
            }
          />
          <Route
            exact
            path="/sign-up"
            element={
              <>
                <Link to="/sign-in" className="header__link">
                  Войти
                </Link>
              </>
            }
          />
        </Routes>
      </nav>
    </header>
  );
}
export default Header;
