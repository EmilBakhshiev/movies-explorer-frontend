import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Header loggedIn={false}/>
      <Switch>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
