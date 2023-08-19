import styled from 'styled-components'
import React from 'react'
import menu from './menu.png'
import himym from './HIMYM.PNG'
import fruitshop from './fruitshop.png'

const Projects = () => {
    return (
<div>
    <p>project page... insert pics here</p>
    <div>
        <img src={himym} alt="how i met your mother" />
        <img src={menu} alt="menu"/>
        <img src={fruitshop} alt="fruit store" />
    </div>
</div>
    )
}
export default Projects