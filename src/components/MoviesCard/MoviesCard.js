import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import previewTrailer from '../../images/preview.jpg';

function MoviesCard() {
  const [movieIsSaved, setMovieIsSaved] = useState(false);
  function handleClick() {
    setMovieIsSaved(!movieIsSaved);
  }

  return (
    <Switch>
      <Route path='/movies'>
        <li className='movie-card'>
          <div className='movie-card__container'>
            <div className='movie-card__info-container'>
              <h3 className='movie-card__title'>33 слова о дизайне</h3>
              <button
                className={`movie-card__save-btn ${
                  movieIsSaved && 'movie-card__save-btn_saved'
                }  hover`}
                type='button'
                onClick={handleClick}
              ></button>
            </div>
            <p className='movie-card__duration'>1ч 42м</p>

            <a
              className='movie-card__img-link hover'
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='movie-card__img'
                src={previewTrailer}
                alt='33 слова о дизайне'
              />
            </a>
          </div>
        </li>
      </Route>
      <Route path='/saved-movies'>
        <li className='movie-card'>
          <div className='movie-card__container'>
            <div className='movie-card__info-container'>
              <h3 className='movie-card__title'>33 слова о дизайне</h3>
              <button
                className='movie-card__save-btn_remove hover'
                type='button'
              ></button>
            </div>
            <p className='movie-card__duration'>1ч 42м</p>

            <a
              className='movie-card__img-link hover'
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='movie-card__img'
                src={previewTrailer}
                alt='33 слова о дизайне'
              />
            </a>
          </div>
        </li>
      </Route>
    </Switch>
  );
}

export default MoviesCard;
