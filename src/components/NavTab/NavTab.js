import React from 'react';

function NavTab() {
  return (
    <nav className='promo__nav'>
      <ul className='promo__nav-list'>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link' href='#about-project'>О проекте</a>
        </li>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link' href='#tech'>Технологии</a>
        </li>
        <li className='promo__nav-item'>
          <a className='promo__nav-item-link' href='#about-me'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
