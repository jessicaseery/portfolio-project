import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menulines from "./burgermenuicon.png";
import sun from "./sunrays.png";
import moon from "./moon.png";

const Header = ({ isdarkmode, toggleDarkMode }) => {
const [isNavigationVisible, setNavigationVisible] = useState("false");
const [imageSrc, setImageSrc] = useState(sun);
const [text, setText] = useState("Click on the Sun to view in Dark mode")

const handleClick = () => {
    setNavigationVisible(isNavigationVisible === "false" ? "true" : "false");
};
const handleDarkModeToggle = () => {
    toggleDarkMode();
    if (imageSrc === sun) {
        setImageSrc(moon); 
        setText("Click on the moon to view in Light mode");
    } else {
        setImageSrc(sun);
        setText("Click on the Sun to view in Dark mode");
    }
};

return (
<Wrapper isdarkmode={isdarkmode}>
    <TopLeft>
        <Name isdarkmode={isdarkmode}>Jessica Chiocchio Seery</Name>
        <Text>Portfolio</Text>
        <Sun src={imageSrc} alt="sun ray" onClick={handleDarkModeToggle} />
        <p key="infoLightMode">{text}</p>
    </TopLeft>
        <Dropdown src={menulines} alt="dropdown" isdarkmode={isdarkmode} onClick={handleClick} />
    <Navbar isvisible={isNavigationVisible}>
    <Menuoption to="/" isdarkmode={isdarkmode}>Home</Menuoption>
    <Menuoption to="/AboutMe" isdarkmode={isdarkmode}>About Me</Menuoption>
    <Menuoption to="/projects" isdarkmode={isdarkmode}>Projects</Menuoption>
    <Menuoption to="/cv" isdarkmode={isdarkmode}>CV</Menuoption>
    <Menuoption to="/contact" isdarkmode={isdarkmode}>Contact</Menuoption>
    </Navbar>
</Wrapper>
);
};

const Wrapper = styled.div`
border-bottom-style: solid;
border-bottom-width: 2px;
border-bottom-color: ${(props) => (props.isdarkmode === "true" ? "#FFFFFF" : "#000000")};
padding-bottom: 1px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding-top: 1px;
background-color: ${(props) => (props.isdarkmode === "true" ? "#000" : "#FF8C00")};
`;

const TopLeft = styled.div`
color: grey;
margin-top: -15px;
margin-left: 13px;
`;

const Dropdown = styled.img`
cursor: pointer;
float: right;
width: 25px;
margin-right: 15px;
margin-top: -80px;
z-index: 7;
position: relative;
filter: ${(props) => (props.isdarkmode === "true" ? "brightness(100%)" : "brightness(0%) grayscale(100%)")};
`;

const Name = styled.h4`
color: ${(props) => (props.isdarkmode === "true" ? "#FFFFFF" : "#000000")};
font-style: italic;
`;

const Sun = styled.img`
text-align: center;
width: 100px;
margin-top: -95px;
margin-bottom: -20px;
position: absolute;
z-index: 0;
margin-left: 160px;
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
`;

const Text = styled.p`
margin-top: -20px;
color: white;
font-style: italic;
`;

const Navbar = styled.div`
display: ${(props) => (props.isvisible === "true" ? "flex" : "none")};
min-width: 100%;
max-width: fit-content;
font-family: 'Titillium Web', sans-serif;
z-index: 5;
`;

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
    background-color: ${(props) => (props.isdarkmode === "true" ? "#7B68EE" : "#FF3300")};
}
`;

export default Header;