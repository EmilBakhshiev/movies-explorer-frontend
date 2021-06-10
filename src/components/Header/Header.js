import React from 'react';
import headerLogo from '../../images/logo__header.svg';

function Header() {
  return (
    <header className='header'>
      <img src={headerLogo} alt='logo' />
      <div className='header__container'>
        <a href='#' className='header__link'>
          Регистрация
        </a>
        <button className='header__button'>Войти</button>
      </div>
    </header>
  );
}

export default Header;
