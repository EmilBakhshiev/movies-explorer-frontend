import React from 'react';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__text'>Короткометражки</p>
      <label className='filter-checkbox__toggle'>
        <input className='filter-checkbox__input' type='checkbox' id='toggle' />
        <span className='filter-checkbox__input-visible'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
