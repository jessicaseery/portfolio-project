import { Link } from "react-router-dom"
import styled from 'styled-components'

const Header = () => {

    return (
        <div>
            <TopLeft>
            <Name>Jessica Chiocchio Seery</Name>
            <Text>Portfolio</Text>
            </TopLeft>
            <Navbar>
            <Menuoption to="/">Home page</Menuoption>
            <Menuoption to="/AboutMe" >About Me</Menuoption>
            <Menuoption to="/projects">Projects</Menuoption>
            <Menuoption to="/cv">CV</Menuoption>
            <Menuoption to="/contact">Contact</Menuoption>
            </Navbar>
        </div>
    )
}
const TopLeft = styled.div`
color: grey;
margin-top: -15px;
margin-left: 15px;
`
const Name = styled.h4`
color: grey;
font-style: italic;
`
const Text = styled.p`
margin-top: -20px;
`
const Navbar = styled.div`
background-color: darkgray;
display: flex;
width: 100%;
`
const Menuoption = styled(Link)`
margin-right: 5%;
color: white;
text-decoration: none;
`

export default Header