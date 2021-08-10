import React from 'react';
import avatar from '../../images/avatar.jpeg'

function AboutMe() {
  return (
    <section id='about-me' className='about-me'>
      <h2 className='section-title'>Студент</h2>
      <div className='about-me__container-info'>
        <img className='about-me__image-student' alt='Мое фото' src={avatar}/>
        <div className='about-me__profile-container'>
          <h3 className='about-me__name'>Эмиль</h3>
          <p className='about-me__description'>Фронтенд-разработчик, 27 лет</p>
          <p className='about-me__about-student'>
            Я живу в Санкт-Петербурге, закончил факультет юриспруденции РАНХиГС.
            Я люблю кинематограф и музыку. С 2020 года занимаюсь веб разработкой. 
          </p>
          <ul className='about-me__social-links-list'>
            <li className='about-me__social-links-list-item'>
              <a
                className='about-me__social-link'
                href='https://www.facebook.com/emil.bahshiev.3'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>

            <li className='about-me__social-links-list-item '>
              <a
                className='about-me__social-link'
                href='https://github.com/EmilBakhshiev'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
