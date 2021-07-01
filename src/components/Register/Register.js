import React from 'react';
import Auth from '../Auth/Auth';

function Register() {
  return (
    <Auth
      title='Добро пожаловать!'
      name='sign-up'
      isDisabled={false}
      textButton='Зарегистрироваться'
    >
      <label className='auth__label'>
        Имя
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Ваше имя'
          className='auth__input'
          minLength='2'
          maxLength='200'
          required
        />
        <span id='input-error' className='error-text'></span>
      </label>

      <label className='auth__label'>
        E-mail
        <input
          id='email'
          type='email'
          name='email'
          placeholder='E-mail'
          className='auth__input'
          minLength='1'
          maxLength='40'
          required
        />
        <span id='input-error' className='error-text'></span>
      </label>
      <label className='auth__label'>
        Пароль
        <input
          id='password'
          type='password'
          name='password'
          placeholder='Пароль'
          className='auth__input auth__input-invalid'
          minLength='3'
          maxLength='20'
          required
        />
        <span id='input-error' className='error-text'>
          Что-то пошло не так
        </span>
      </label>
    </Auth>
  );
}

export default Register;
