import React, { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useValidationForm/useFormValidation';

function Profile({ onEditProfile, onLogOut }) {
  const { name, email } = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ email: email, name: name });

  const [isValuesNotMatched, setisValuesNotMatched] = useState(false);

  function checkValues() {
    if (
      email === values.email &&
      name === values.name
    ) {
      setisValuesNotMatched(false);
    } else {
      setisValuesNotMatched(true);
    }
  }

  useEffect(() => {
    checkValues();
  }, [handleChange]);

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onEditProfile(values);
    resetForm();
  }
  return (
    <section className='profile'>
      <form className='profile__form' onSubmit={handleOnSubmit} noValidate>
        <h2 className='profile__title'>Привет, {name}!</h2>
        <div className='profile__container'>
          <label className='profile__label'>
            <div className='profile__label-container'>
              <p className='profile__input-name'>Имя</p>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Изменить имя'
                className={`profile__input ${
                  errors.name && 'profile__input_invalid'
                }`}
                minLength='2'
                maxLength='200'
                required
                defaultValue={name || ''}
                onChange={handleChange}
              />
            </div>

            <span id='error' className='error-text'>{errors.name}</span>
          </label>

          <label className='profile__label'>
            <div className='profile__label-container'>
              <p className='profile__input-name'>E-mail</p>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Изменить E-mail'
                className={`profile__input ${
                  errors.email && 'profile__input_invalid'
                }`}
                minLength='1'
                maxLength='40'
                required
                defaultValue={email || ''}
                onChange={handleChange}
              />
            </div>

            <span id='error' className='error-text'>
              {' '}
              {errors.email}
            </span>
          </label>
        </div>
        <button
          className='profile__edit-btn hover'
          type='submit'
          onClick={handleOnSubmit}
          disabled={!isValid || !isValuesNotMatched}
        >
          Редактировать
        </button>

        <button
          className='profile__signout-btn hover'
          type='button'
          onClick={onLogOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
