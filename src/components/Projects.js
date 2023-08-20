import styled from 'styled-components'
import React from 'react'
import menu from './menu.png'
import himym from './HIMYM.PNG'
import fruitshop from './fruitshop.png'

const Projects = () => {
    return (
<div>
    <p>View my projects from oldest to most recent!</p>
    <div>
        <ProjectImg src={himym} alt="how i met your mother" />
        <ProjectImg src={menu} alt="menu"/>
        <ProjectImg src={fruitshop} alt="fruit store" />
    </div>
</div>
    )
}
const ProjectImg = styled.img`
width: 40%;
height: 15%;
border: 3px black solid;
margin-right: 3%;
margin-left: 3%;
`
export default Projects