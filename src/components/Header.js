import { Link } from "react-router-dom"
import styled from 'styled-components'
import menulines from './burgermenuicon.png'
import React, {useState} from "react"

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
`
const TopLeft = styled.div`
color: grey;
margin-top: -15px;
margin-left: 15px;
`
const Dropdown = styled.img`
cursor: pointer;
float: right;
width: 25px;
margin-right: 15px;
margin-top: -50px;
`
const Name = styled.h4`
color: black;
font-style: italic;

`
const Text = styled.p`
margin-top: -20px;
`
const Navbar = styled.div`
border-bottom: black 1px solid;
background-color: darkgray;
display: ${(props) => (props.isVisible ? "flex" : "none")};
min-width: 100%;
max-width: fit-content;
font-family: 'Titillium Web', sans-serif;

`
const Menuoption = styled(Link)`
color: white;
text-decoration: none;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 2%;
padding-right: 2%;
`

export default Header