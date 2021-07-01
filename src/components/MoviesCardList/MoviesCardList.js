import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <div className='movies-card-list__grid'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <button type='button' className='movies-card-list__btn-more hover'>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
