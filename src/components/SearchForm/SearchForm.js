import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form' noValidate>
        <div className='search__form-container'>
          <input
            name='name'
            className='search__form-input'
            placeholder='Фильм'
            type='text'
            required
          ></input>
          <button className='search__form-submit-btn hover' type='submit'>
            Поиск
          </button>
        </div>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
