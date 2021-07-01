import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isOpened, setIsOpened] = useState(false);
    return (
        <div className='navigation'>
      <button
        className={`isOpened navigation__burger-btn navigation__burger-btn_hidden hover no-display {
          display: none;
      } ${
          isOpened && 'navigation__close-btn_active'
        }`}
        type='button'
        
      ></button>

      <nav
        className={`navigation__container navigation__container_hidden ${
          isOpened && 'navigation__container_active'
        }`}
      >
        <ul className='navigation__list'>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link navigation__list-item-link_hidden hover'
              exact
              to='/'
              activeClassName='navigation__list-item-link_active'
            >
              Главная
            </NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link hover'
              to='/movies'
              activeClassName='navigation__list-item-link_active'
            >
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link hover'
              to='/saved-movies'
              activeClassName='navigation__list-item-link_active'
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link navigation__list-item-profile hover'
              to='/profile'
            >

            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default Navigation
