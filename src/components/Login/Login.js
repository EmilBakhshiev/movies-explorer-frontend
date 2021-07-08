import React from 'react';
import Auth from '../Auth/Auth';
import useFormWithValidation from '../../hooks/useFormValidation';

function Login({ onLogin }) {
  const { values, errors, isValid, handleChange, resetForm } =
  useFormWithValidation({});

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
}

  return (
    <Auth
      title='Рады видеть!'
      name='sign-in'
      isDisabled={false}
      textButton='Войти'
      onSubmit={handleOnSubmit}
      disabled={!isValid}
    >
      <label className='auth__label'>
        E-mail
        <input
          id='email'
          type='email'
          name='email'
          placeholder='E-mail'
          className={`auth__input ${errors.name && 'auth__input-invalid'}`}
          minLength='1'
          maxLength='40'
          required
          onChange={handleChange}
          value={values.email || ""}
        />
        <span id='input-error' className='error-text'>{errors.email}</span>
      </label>
      <label className='auth__label'>
        Пароль
        <input
          id='password'
          type='password'
          name='password'
          placeholder='Пароль'
          className={`auth__input ${errors.password && 'auth__input-invalid'}`}
          minLength='3'
          maxLength='20'
          required
          onChange={handleChange}
          value={values.password || ""}
        />
        <span id='input-error' className='error-text'>{errors.password}</span>
      </label>
    </Auth>
  );
}

export default Login;
