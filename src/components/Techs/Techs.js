import React from 'react';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='section-title section-title_place_techs'>Технологии</h2>
      <h3 className='promo__title promo__title_place_techs'>7 технологий</h3>
      <p className='techs__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили <span className='promo__title-span'> в
        дипломном проекте.</span>
      </p>
      <nav className='promo__nav'>
      <ul className='promo__nav-list'>
        <li className='promo__nav-item'>
          HTML
        </li>
        <li className='promo__nav-item'>
          CSS
        </li>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link'>Студент</a>
        </li>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link'>О проекте</a>
        </li>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link'>Технологии</a>
        </li>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link'>Студент</a>
        </li>
      </ul>
    </nav>
    </section>
  );
}

export default Techs;
