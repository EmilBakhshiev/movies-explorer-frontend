import React from 'react';
import headerLogo from '../../images/logo__header.svg';
import Navigation from '../Navigation/Navigation';
import { Route, useLocation, Link } from 'react-router-dom';

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
            <Link className='header__link hover' exact to='/signup'>
            Регистрация
            </Link>
            <Link className='header__button hover' exact to='/signin'>
            Войти
            </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
