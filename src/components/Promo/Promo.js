import React from 'react'
import NavTab from '../NavTab/NavTab'

function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента <span className='promo__title-span'>факультета Веб-разработки.</span></h1>
            <NavTab></NavTab>
        </section>
    )
}

export default Promo;
