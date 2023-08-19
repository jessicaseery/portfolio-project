import { Link } from "react-router-dom"
import styled from 'styled-components'

const Header = () => {

    return (
        <div>
            <Name>Jessica Chiocchio Seery</Name>
            <p>Web-developper</p>

            <div>
            <Link to="/">Home page</Link>
            <Link to="/AboutMe" >About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

const Name = styled.h1`
color: grey;
font-style: italic;
`
export default Header