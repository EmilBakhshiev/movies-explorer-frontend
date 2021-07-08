import { useLocation } from 'react-router-dom';


function MoviesCard({ movie, onLikeClick, checkBookmarkStatus}){
  const location = useLocation();
  const { nameRU, duration, image, trailer } = movie;

    const isLiked = checkBookmarkStatus(movie);
    const durationConverter = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
    };


    function handleBookmarkClick() {
        onLikeClick(movie, isLiked);
    }

  return (
        <li className='movie-card'>
          <div className='movie-card__container'>
            <div className='movie-card__info-container'>
              <h3 className='movie-card__title'>{nameRU}</h3>
              <button
                className={`movie-card__save-btn ${
                  isLiked && 'movie-card__save-btn_saved'
                }  hover ${
                  location.pathname === '/saved-movies' && '.movie-card__save-btn_remove '
                }`}
                type='button'
                onClick={handleBookmarkClick}
              ></button>
            </div>
            <p className='movie-card__duration'>{durationConverter(duration)}</p>

            <a
              className='movie-card__img-link hover'
              href={trailer} 
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='movie-card__img'
                src={image}
            alt={`Трейлер фильма ${nameRU}`}
              />
            </a>
          </div>
        </li>
  );
}

export default MoviesCard;
