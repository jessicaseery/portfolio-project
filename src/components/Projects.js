import styled from 'styled-components'
import React from 'react'
import menu from './menu.png'
import himym from './HIMYM.PNG'
import fruitshop from './fruitshop.png'

const Projects = () => {
    return (
<Wrapper>
    <p>View my projects from oldest to most recent!</p>
    <div>
        <ProjectImg src={himym} alt="how i met your mother" />
        <ProjectImg src={menu} alt="menu"/>
        <ProjectImg src={fruitshop} alt="fruit store" />
    </div>
</Wrapper>
    )
}
const ProjectImg = styled.img`
width: 40%;
height: 15%;
border: 3px black solid;
margin-right: 3%;
margin-left: 3%;
`
const Wrapper = styled.div`
margin-top: -16px;
min-height: 89vh;
text-align: center;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
`
export default Projects