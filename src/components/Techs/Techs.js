import React from 'react';

function Techs() {
  return (
    <section className='techs' id='tech'>
      <h2 className='section-title section-title_place_techs'>Технологии</h2>
      <h3 className='promo__title promo__title_place_techs'>7 технологий</h3>
      <p className='techs__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили <span className='promo__title-span'> в
        дипломном проекте.</span>
      </p>
      <div className='techs__list-container'>
        <ul className='techs__list'>
          <li className='techs__list-item'>HTML</li>
          <li className='techs__list-item'>CSS</li>
          <li className='techs__list-item'>JS</li>
          <li className='techs__list-item'>React</li>
          <li className='techs__list-item'>Git</li>
          <li className='techs__list-item'>Express.js</li>
          <li className='techs__list-item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
