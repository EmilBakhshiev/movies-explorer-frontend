import React from 'react';
import logo from '../../images/logo__header.svg';
import { Link } from 'react-router-dom';

function Auth({ title, name, children, isDisabled, textButton, onSubmit }) {
  return (
    <section className='auth'>
      <form className='auth__form' name={name} onSubmit={onSubmit} noValidate>
        <img src={logo} alt='Логотип' className='auth__logo' />
        <h2 className='auth__title'>{title}</h2>
        <div className='auth__container'>{children}</div>
        <button
          className='auth__submit-btn hover'
          type='submit'
          disabled={isDisabled}
        >
          {textButton}
        </button>
        {name === 'sign-up' ? (
          <p className='auth__text'>
            {' '}
            Уже зарегистрированы?
            <Link className='auth__link hover' exact to='/signin'>
              {' '}
              Войти
            </Link>
          </p>
        ) : (
          <p className='auth__text'>
            {' '}
            Ещё не зарегистрированы?
            <Link className='auth__link' exact to='/signup'>
              {' '}
              Регистрация
            </Link>
          </p>
        )}
      </form>
    </section>
  );
}

export default Auth;
