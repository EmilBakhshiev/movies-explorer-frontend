import React, { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  isLoading,
  onSubmitSearch,
  movies,
  setPreloader,
  moviesSearchResponse,
  toggleMovieLike,
  checkBookmarkStatus,
  sortShortMovies,
}) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setShortMovies(sortShortMovies(movies));
    }
  }, [isChecked]);

  return (
    <section className='saved-movies'>
      <SearchForm
        handleSearch={onSubmitSearch}
        setPreloader={setPreloader}
        setIsChecked={setIsChecked}
        isLoading={isLoading}
      />
      {moviesSearchResponse
        ? movies.length === 0 && (
            <p className='movie__response'>{moviesSearchResponse}</p>
          )
        : movies.length === 0 && (
            <p className='movie__response'>Нет сохраненных фильмов</p>
          )}

      {isChecked && movies.length !== 0 && shortMovies.length === 0 && (
        <p className='movie__response'>Среди фильмов нет короткометражек</p>
      )}

      {movies.length !== 0 && (
        <MoviesCardList
          movies={isChecked ? shortMovies : movies}
          toggleMovieLike={toggleMovieLike}
          checkBookmarkStatus={checkBookmarkStatus}
          isSavedPage={true}
          isLoading={isLoading}
        />
      )}
    </section>
  );
}

export default SavedMovies;
