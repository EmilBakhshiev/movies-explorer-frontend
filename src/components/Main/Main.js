import React from 'react'
import AboutProject from '../AboutProject/AboutProject'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import Portfolio from '../Portfolio/Portfolio'
import AboutMe from '../AboutMe/AboutMe'

function Main() {
    return (
        <main className='main'>
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </main>

    )
}

export default Main;
