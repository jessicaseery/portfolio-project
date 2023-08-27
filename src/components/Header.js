import { Link } from "react-router-dom"
import styled from 'styled-components'
import menulines from './burgermenuicon.png'
import React, {useState} from "react"
import sun from './sunrays.png'

const Header = () => {
    const [isNavigationVisible, setNavigationVisible] = useState(false);

    const handleClick = () => {
        setNavigationVisible(!isNavigationVisible);
}
        
    return (
        <Wrapper>
            
            <TopLeft>
            <Name>Jessica Chiocchio Seery</Name>
            <Text>Portfolio</Text>
            <Sun src={sun} alt="sun ray"/>
            </TopLeft>
            <Dropdown src={menulines} alt="dropdown" onClick={handleClick}/>
            <Navbar isVisible={isNavigationVisible}>
            <Menuoption to="/">Home</Menuoption>
            <Menuoption to="/AboutMe" >About Me</Menuoption>
            <Menuoption to="/projects">Projects</Menuoption>
            <Menuoption to="/cv">CV</Menuoption>
            <Menuoption to="/contact">Contact</Menuoption>
            </Navbar>
        </Wrapper>
    )
}
const Wrapper = styled.div`
background-color: darkorange;
border-bottom: solid black 2px;
padding-bottom: 1px;
padding-top: 1px;
`
const TopLeft = styled.div`
color: grey;
margin-top: -15px;
margin-left: 13px;
`
const Dropdown = styled.img`
cursor: pointer;
float: right;
width: 25px;
margin-right: 15px;
margin-top: -50px;
z-index: 7;
position: relative;
`
const Name = styled.h4`
color: black;
font-style: italic;

`

const Sun = styled.img`
text-align: center;
width: 100px;
margin-top: -95px;
margin-bottom: -20px;
position: absolute;
z-index: 0;
margin-left: 140px;
animation: spin 50s linear infinite;
  animation-delay: calc(var(--delay) * -1s);

@keyframes spin {
from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
}

`
const Text = styled.p`
margin-top: -20px;
color: white;
`
const Navbar = styled.div`
display: ${(props) => (props.isVisible ? "flex" : "none")};
min-width: 100%;
max-width: fit-content;
font-family: 'Titillium Web', sans-serif;
z-index: 5;

`
const Menuoption = styled(Link)`
color: white;
position: relative;
text-decoration: none;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 2%;
padding-right: 2%;
cursor: pointer;
z-index: 10;

&:hover {
    color: white;
    background-color: orange;
}
`

export default Header