import React from 'react';

function Profile() {
  return (
    <section className='profile'>
      <form className='profile__form' noValidate>
        <h2 className='profile__title'>Привет, Эмиль!</h2>
        <div className='profile__container'>
          <label className='profile__label'>
            <div className='profile__label-container'>
            <p className='profile__input-name'>Имя</p>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Изменить имя'
                className='profile__input'
                minLength='2'
                maxLength='200'
                required
              />
            </div>

            <span
              id='error'
              className='error-text'
            >
            </span>
          </label>

          <label className='profile__label'>
            <div className='profile__label-container'>
            <p className='profile__input-name'>E-mail</p>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Изменить E-mail'
                className='profile__input'
                minLength='1'
                maxLength='40'
                required
              />
            </div>

            <span
              id='error'
              className='error-text'
            > 
            </span>
          </label>
        </div>
        <button
          className='profile__edit-btn hover'
          type='submit'
        >
          Редактировать
        </button>

        <button
          className='profile__signout-btn hover'
          type='button'
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
