import React from 'react'
import Auth from '../Auth/Auth';

function Login() {
    return (
        <Auth title='Рады видеть!' name='sign-in' isDisabled={false} textButton='Войти'>
    
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
          <span id='input-error' className='error-text'>
          </span>
        </label>
        <label className='auth__label'>
          Пароль
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Пароль'
            className='auth__input'
            minLength='3'
            maxLength='20'
            required
          />
          <span id='input-error' className='error-text'>
            
          </span>
        </label>
      </Auth>
    )
}

export default Login
