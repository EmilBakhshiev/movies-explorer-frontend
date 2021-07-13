import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../hooks/useFormValidation';
import { useState } from 'react';

function SearchForm({ handleSearch, setPreloader, setIsChecked }) {
  const { values, errors, isValid, handleChange } =
  useFormWithValidation({});

  const [keyword, setKeyword] = useState("");
  const [isShortMovies, setIsShortMovies] = useState(false);

  function onCheckboxToggle(checked) {
      setIsShortMovies(checked);
      setIsChecked(!isShortMovies);
  }

  function handleKeyword(evt) {
      handleChange(evt);
      setKeyword(evt.target.value); 
  }

  function handleSubmit(event) {
      event.preventDefault();
      handleSearch(keyword);
      setPreloader(true);
  }
  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <div className='search__form-container'>
          <input
            name='name'
            className='search__form-input'
            placeholder='Фильм'
            value={values.name || ""}
            onChange={handleKeyword}
            required
          ></input>
          <button className='search__form-submit-btn hover' type='submit'>
            Поиск
          </button>
         <span id='input-error' className={`error-text ${!isValid && 'error-text_hidden'}`}>{errors.keyword}</span>
        </div>
      </form>
      <FilterCheckbox onCheckboxToggle={onCheckboxToggle}/>
    </section>
  );
}

export default SearchForm;
