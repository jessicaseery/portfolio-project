import styled, {keyframes} from 'styled-components'
import React, {useState} from 'react'
import me from './me.jpg'
import htmllogo from './html.png'
import csslogo from './css.png'
import javascriptlogo from './javascript.png'
import reactlogo from './reactlogo.png'
import pythonlogo from './python.png'
import phplogo from './php.png'
import csharp from './csharp.png'
import cplusplus from './cplusplus.png'
import purpleflower from './purpleflower.png'
import blueflower from './blueflower.png'
import redflower from './redflower.png'
import whiteflower from './whiteflower.png'
import sunflower from './sunflower.png'
import beachroseorange from './beachroseorange.png'
import whitelily from './whitelily.png'
import pinkcarnation from './pinkcarnation.png'
import purplerose from './purplerose.png'
import redtropical from './redtrpoical.png'
import yellowdaisy from './yellowdaisy.png'

const Homepage = () => {
const [flowerPositions, setFlowerPositions] = useState([]);

const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY + window.scrollY;
    const randomFlower = floweroptions[Math.floor(Math.random() * floweroptions.length)];
    setFlowerPositions([...flowerPositions, { x, y, flower: randomFlower }]);
};

const floweroptions = [
    purpleflower ,
    redflower ,
    blueflower ,
    whiteflower,
    sunflower,
    beachroseorange,
    whitelily,
    pinkcarnation,
    purplerose,
    redtropical,
    yellowdaisy,
];

return (
    <Wrapper onClick={handleClick}>
        <ProfilePic src={me} alt="profile picture" />
        <Name>Jessica Chiocchio Seery</Name>
        <Title>Web Developer</Title>
    <ProgramLangbar>
        <Language src={htmllogo} alt="HTML" />
        <Language src={csslogo} alt="CSS" />
        <Language src={javascriptlogo} alt="JavaScript" />
        <Language src={reactlogo} alt="React" />
        <Language src={pythonlogo} alt="Python" />
        <Language src={phplogo} alt="PHP" />
        <Language src={csharp} alt="C#" />
        <Language src={cplusplus} alt="C++" />
    </ProgramLangbar>
    {flowerPositions.map((position, index) => (
        <Flower key={index} src={position.flower} style={{ top: position.y - 10, left: position.x - 10 }} alt="Flower" />
    ))}
    <p>Click anywhere on this page to add a flower! Refresh the page to remove them!</p>
    </Wrapper>
    );
};

const growFlower = keyframes`
0% {
    width: 0;
    height: 0;
}
100% {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`;

const Flower = styled.img`
width: 100px;
height: 100px;
position: absolute;
animation: ${growFlower} 0.5s ease-in-out forwards;
`;
const Title = styled.h3`
font-style: italic;
`
const Wrapper = styled.div`
min-height: 100vh;
text-align: center;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
cursor: pointer
`
const ProfilePic = styled.img`
width: 250px;
border-radius: 50%;
margin-top: 7%;
box-shadow: 1px 3px 30px rgb(255,77,0);
`
const Name = styled.h1`
color: black;
padding-top: 15px;
width: fit-content;
margin: auto;
cursor: pointer;

&:hover {
    color: white;
    transition: 0.5s ease-out;
    letter-spacing: 4px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}
`
const ProgramLangbar = styled.div`

`
const Language = styled.img`
height: 50px;
margin-right: hpx;
`

export default Homepage