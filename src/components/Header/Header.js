import React from 'react';
import headerLogo from '../../images/logo__header.svg';
import Navigation from '../Navigation/Navigation';
import { Route, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        (location.pathname === '/signup' && 'auth-no-display') ||
        (location.pathname === '/signin' && 'auth-no-display')
      }`}
    >
      <img src={headerLogo} alt='logo' />
      {loggedIn ? (
        <Navigation />
      ) : (
        <div className='header__container'>
          <a href='#' className='header__link'>
            Регистрация
          </a>
          <button className='header__button'>Войти</button>
        </div>
      )}
    </header>
  );
}

export default Header;
