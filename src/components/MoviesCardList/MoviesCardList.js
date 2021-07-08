import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import {
  LARGE_SCREEN_RESOLUTION,
  MEDIUM_SCREEN_RESOLUTION,
  MAX_NUMBER_MOVIES,
  MID_NUMBER_MOVIES,
  MIN_NUMBER_MOVIES,
  ADD_MAX_NUMBER_MOVIES,
  ADD_MIN_NUMBER_MOVIES,
} from '../../utils/constants';

function MoviesCardList({
  movies,
  toggleMovieLike,
  checkBookmarkStatus,
  isSavedPage,
  isLoading
}) {
  const [extraPortion, setExtraPortion] = useState(3);
  const [currentCount, setCurrenCount] = useState(0);
  const [renderMovies, setRenderMovies] = useState([]);

  function getCount(windowSize) {
    if (windowSize > LARGE_SCREEN_RESOLUTION) {
      return { first: MAX_NUMBER_MOVIES, extra: ADD_MAX_NUMBER_MOVIES };
    } else if (
      windowSize > MEDIUM_SCREEN_RESOLUTION &&
      windowSize <= LARGE_SCREEN_RESOLUTION
    ) {
      return { first: MID_NUMBER_MOVIES, extra: ADD_MIN_NUMBER_MOVIES };
    } else {
      return { first: MIN_NUMBER_MOVIES, extra: ADD_MIN_NUMBER_MOVIES };
    }
  }

  function renderExtraPortion() {
    const count = Math.min(movies.length, currentCount + extraPortion);
    const extraMovies = movies.slice(currentCount, count);
    setRenderMovies([...renderMovies, ...extraMovies]);
    setCurrenCount(count);
  }

  function handleResize() {
    const windowSize = window.innerWidth;
    const sizePortion = getCount(windowSize);
    setExtraPortion(sizePortion.extra);
  }

useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const windowSize = window.innerWidth;
    const sizePortion = getCount(windowSize);
    setExtraPortion(sizePortion.extra);
    const count = Math.min(movies.length, sizePortion.first);
    setRenderMovies(movies.slice(0, count));
    setCurrenCount(count);
  }, [movies]);

  function handleMoreCards() {
    renderExtraPortion();
  }

  return (
    <section className='movies-card-list'>
      {isLoading && <Preloader/>}
      <div className='movies-card-list__container'>
        <div className='movies-card-list__grid'>
          {isSavedPage &&
            movies.map((movie) => (
              <MoviesCard
                key={movie.movieId}
                movie={movie}
                onLikeClick={toggleMovieLike}
                checkBookmarkStatus={checkBookmarkStatus}
              />
            ))}

          {!isSavedPage &&
            renderMovies.map((movie) => (
              <MoviesCard
                key={movie.movieId}
                movie={movie}
                onLikeClick={toggleMovieLike}
                checkBookmarkStatus={checkBookmarkStatus}
              />
            ))}
        </div>
        {!isSavedPage && currentCount < movies.length && (
          <button
            className='movies-card-list__btn-more hover'
            type='button'
            onClick={handleMoreCards}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
