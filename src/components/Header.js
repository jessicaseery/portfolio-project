import { Link } from "react-router-dom"
import styled from 'styled-components'
import menulines from './burgermenuicon.png'
import React, {useState} from "react"
import sun from './sunrays.png'

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [isNavigationVisible, setNavigationVisible] = useState(false);
    const [darkModeEnabled, setDarkMode] = useState(false); 


    const handleClick = () => {
        setNavigationVisible(!isNavigationVisible);
}

const handleDarkModeToggle = () => {
    setIsDarkMode(!darkModeEnabled);
    setDarkMode(!darkModeEnabled);
};
        
    return (
        <Wrapper isDarkMode={isDarkMode}>
            
            <TopLeft>
            <Name isDarkMode={isDarkMode}>Jessica Chiocchio Seery</Name>
            <Text>Portfolio</Text>
            <Sun src={sun} alt="sun ray" onClick={handleDarkModeToggle}/>
            </TopLeft>
            <Dropdown src={menulines} alt="dropdown" onClick={handleClick}/>
            <Navbar isvisible={isNavigationVisible}>
            <Menuoption to="/" isDarkMode={isDarkMode}>Home</Menuoption>
            <Menuoption to="/AboutMe" isDarkMode={isDarkMode}>About Me</Menuoption>
            <Menuoption to="/projects" isDarkMode={isDarkMode}>Projects</Menuoption>
            <Menuoption to="/cv" isDarkMode={isDarkMode}>CV</Menuoption>
            <Menuoption to="/contact" isDarkMode={isDarkMode}>Contact</Menuoption>
            </Navbar>
        </Wrapper>
    )
}
const Wrapper = styled.div`
border-bottom-style: solid;
border-bottom-width: 2px;
border-bottom-color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#000000")};
padding-bottom: 1px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding-top: 1px;
background-color: ${(props) => (props.isDarkMode ? "#000" : "#FF8C00")};
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
color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#000000")};
font-style: italic;
`;

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
font-style: italic;
`
const Navbar = styled.div`
display: ${(props) => (props.isvisible ? "flex" : "none")};
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
    /* background-color: rgb(255,77,0); */
    background-color: ${(props) => (props.isDarkMode ? "#7B68EE" : "#FF3300")};
}
`

export default Header