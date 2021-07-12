import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import { useState, useEffect } from 'react';
import {
  useHistory,
  Route,
  Switch,
  useLocation,
  Redirect,
} from 'react-router-dom';
import {
  createProfile,
  login,
  getUser,
  updateProfile,
  createMovie,
  deleteMovie,
  getUserMovies,
} from '../../utils/MainApi';
import {
  CONFLICT_EMAIL_MESSAGE,
  INVALID_DATA_MESSAGE,
  AUTH_DATA_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  MOVIES_SERVER_ERROR_MESSAGE,
  MOVIES_NOT_FOUND_MESSAGE,
  SAVED_MOVIE_NOT_FOUND_MESSAGE,
  SUCCSESS_UPDATE_MESSAGE,
} from '../../utils/responseMessages';
import { DURATION_FOR_SORTING_SHORT_FILM } from '../../utils/constants';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { getMovies } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFoud';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponseMessage, setResponseMessage] = useState(' ');
  const [allMovies, setAllmovies] = useState([]);
  const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesSearchResponse, setMoviesSearchResponse] = useState('');
  const [savedMoviesSearchResponse, setSavedMoviesSearchResponse] =
    useState('');
  const history = useHistory();
  let location = useLocation().pathname;

  function tokenCheck() {
    const token = localStorage.getItem('jwt');
    if (token) {
      getUser(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push(location);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('token');
          history.push('/');
        });
    }
  }

  function handleRegister({ name, email, password }) {
    createProfile(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
          history.push('/movies');
        }
      })
      .catch((err) => {
        if (err === 'Error 400') {
          return showResponseMessageTimer(INVALID_DATA_MESSAGE);
        }
        if (err === 'Error 409') {
          return showResponseMessageTimer(CONFLICT_EMAIL_MESSAGE);
        }
        if (err === 'Error 500') {
          return showResponseMessageTimer(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        if (err === 'Error 400') {
          return showResponseMessageTimer(INVALID_DATA_MESSAGE);
        }
        if (err === 'Error 401') {
          return showResponseMessageTimer(AUTH_DATA_ERROR_MESSAGE);
        }
        if (err === 'Error 500') {
          console.log(SERVER_ERROR_MESSAGE);
          return showResponseMessageTimer(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    updateProfile(userData)
      .then((res) => {
        if (res) {
          setCurrentUser({
            ...currentUser,
            name: res.name,
            email: res.email,
          });
          showResponseMessageTimer(SUCCSESS_UPDATE_MESSAGE);
        }
      })
      .catch((err) => {
        showResponseMessageTimer(SERVER_ERROR_MESSAGE);
        console.log(err);
      });
  }

  function handleLogOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('searchResult');
    setCurrentUser({ name: '', email: '' });
    setAllmovies([]);
    setSearchMoviesResult([]);
    setMoviesSearchResponse([]);
    setSavedMovies([]);
    setLoggedIn(false);
    history.push('/');
  }

  function showResponseMessageTimer(error) {
    setResponseMessage(error);
    setTimeout(() => setResponseMessage(''), 10000);
  }

  function getBeatMovies() {
    setIsLoading(true);
    getMovies()
      .then((data) => {
        const moviesArray = data.map((item) => {
          const imageURL = item.image
            ? `https://api.nomoreparties.co${item.image.url}`
            : 'image not found';
          const thumbnailURL = item.image
            ? `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`
            : 'image not found';
          const noAdaptedName = item.nameEN ? item.nameEN : item.nameRU;
          const countryValue = item.country ? item.country : 'none';
          return {
            country: countryValue,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: imageURL,
            trailer: item.trailerLink,
            thumbnail: thumbnailURL,
            movieId: item.id,
            nameRU: item.nameRU,
            nameEN: noAdaptedName,
          };
        });
        localStorage.setItem('movies', JSON.stringify(moviesArray));
      })
      .catch((err) => {
        setMoviesSearchResponse(MOVIES_SERVER_ERROR_MESSAGE);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getFavoriteMovies() {
    getUserMovies()
      .then((favouriteMovies) => {
        setSavedMovies(favouriteMovies);
      })
      .catch((error) => {
        setMoviesSearchResponse(MOVIES_SERVER_ERROR_MESSAGE);
        console.log(error);
      });
  }

  function search(data, keyword) {
    const result = data.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.description.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    if (result.length === 0 && location === '/movies') {
      setMoviesSearchResponse(MOVIES_NOT_FOUND_MESSAGE);
    }
    if (result.length === 0 && location === '/saved-movies') {
      setSavedMoviesSearchResponse(SAVED_MOVIE_NOT_FOUND_MESSAGE);
    }
    return result;
  }

  function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter(
      (movie) => movie.duration <= DURATION_FOR_SORTING_SHORT_FILM
    );
    return shortMoviesArray;
  }

  function submitSearch(keyword) {
    getBeatMovies();
    setTimeout(() => setIsLoading(false), 3000);
    setSearchMoviesResult(search(allMovies, keyword));
    localStorage.setItem(
      'searchResult',
      JSON.stringify(search(allMovies, keyword))
    );
  }

  function submitFavoriteSearch(keyword) {
    setTimeout(() => setIsLoading(false), 3000);
    setSavedMovies(search(savedMovies, keyword));
  }

  function addMovie(movie) {
    createMovie(movie)
      .then((data) => {
        const movies = [...savedMovies, data];
        setSavedMovies((prev) => [...prev, data]);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  function removeMovies(movie) {
    const movieId = savedMovies.find(
      (item) => item.movieId === movie.movieId
    )._id;
    deleteMovie(movieId)
      .then((res) => {
        getFavoriteMovies();
        console.log(res.message);
      })
      .catch((err) => console.log(err));
  }

  function checkBookmarkStatus(movie) {
    return savedMovies.some(
      (savedMovie) => savedMovie.movieId === movie.movieId
    );
  }

  function toggleMovieLike(movie, isLiked) {
    isLiked ? removeMovies(movie) : addMovie(movie);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return;
    } else {
      Promise.all([getUser(token), getFavoriteMovies()])
        .then(([userData, favoriteMovieData]) => {
          setCurrentUser({
            ...currentUser,
            name: userData.name,
            email: userData.email,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      setAllmovies(movies);
      const searchResult = JSON.parse(localStorage.getItem('searchResult'));
      if (searchResult) {
        setSearchMoviesResult(searchResult);
      }
    } else {
      getBeatMovies();
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path='/signup'>
            {loggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path='/signin'>
            {loggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </Route>
          <Route exact path='/'>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/' />}
          </Route>
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            isLoading={isLoading}
            onSubmitSearch={submitSearch}
            sortShortMovies={sortShortMovies}
            setPreloader={setIsLoading}
            moviesSearchResponse={moviesSearchResponse}
            movies={searchMoviesResult}
            toggleMovieLike={toggleMovieLike}
            checkBookmarkStatus={checkBookmarkStatus}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            isLoading={isLoading}
            onSubmitSearch={submitFavoriteSearch}
            sortShortMovies={sortShortMovies}
            setPreloader={setIsLoading}
            moviesSearchResponse={savedMoviesSearchResponse}
            movies={savedMovies}
            toggleMovieLike={toggleMovieLike}
            checkBookmarkStatus={checkBookmarkStatus}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            userData={currentUser}
            apiResponseMessage={apiResponseMessage}
            onEditProfile={handleUpdateUser}
            onLogOut={handleLogOut}
          />
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
