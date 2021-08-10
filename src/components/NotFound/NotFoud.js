import {useHistory} from "react-router-dom";

function NotFound() {
  const history = useHistory();

  function handleClickGoBack() {
    history.goBack();
  }

  return (
    <section className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button className='page-not-found__button link' type='button' onClick={handleClickGoBack}>
        Назад
      </button>
    </section>
  )
}

export default NotFound;
