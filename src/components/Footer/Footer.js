import React from 'react'
import { Route, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
    return (
        <footer className={`footer ${
          (location.pathname === '/signup' && 'auth-no-display') ||
          (location.pathname === '/signin' && 'auth-no-display')
        }`}>

        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
  
        <div className='footer__container'>
          <ul className='footer__links-list'>
            <li className='footer__links-list-item'>
              <a
                className='footer__link link'
                href='https://praktikum.yandex.ru/profile/web/'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__links-list-item'>
              <a
                className='footer__link link'
                href='https://github.com/EmilBakhshiev'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </li>
            <li className='footer__links-list-item'>
              <a
                className='footer__link link'
                href='https://www.facebook.com/emil.bahshiev.3'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className='footer__copyright'>&copy;2021</p>
        </div>
      </footer>
    )
}

export default Footer
