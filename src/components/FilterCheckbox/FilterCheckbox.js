import React from 'react';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      
      <label className='filter-checkbox__toggle'>
        <input className='filter-checkbox__input' type='checkbox' id='toggle' />
        <span className='filter-checkbox__input-visible'></span>
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
