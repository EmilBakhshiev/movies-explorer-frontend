import React, { useState } from "react";

function FilterCheckbox({ onCheckboxToggle }) {

  const [isChecked, setChecked] = useState(false);
  function onChange(event) {
      onCheckboxToggle(!isChecked);
      setChecked(event.target.checked);
  }
  return (
    <div className='filter-checkbox'>
      
      <label className='filter-checkbox__toggle'>
        <input className='filter-checkbox__input' type='checkbox' id='toggle' onChange={(e) => onChange(e)} />
        <span className='filter-checkbox__input-visible'></span>
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
