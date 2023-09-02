import styled, {keyframes} from 'styled-components'
import React, { useState, useEffect } from 'react';
import me from './me.jpg'
import htmllogo from './html.png'
import csslogo from './css.png'
import javascriptlogo from './javascript.png'
import reactlogo from './reactlogo.png'
import pythonlogo from './python.png'
import phplogo from './php.png'
import csharp from './csharp.png'
import cplusplus from './cplusplus.png'

const Homepage = ({flowers, stars, isdarkmode}) => {
    const [flowerPositions, setFlowerPositions] = useState([]);
    const [starPositions, setStarPositions] = useState([]); 
    const [prevMode, setPrevMode] = useState(null);

const handleClick = (event) => {
    const x = event.clientX;
    const y = isdarkmode === 'true' ? event.clientY + window.scrollY : event.clientY;
    if (isdarkmode === 'true') {
        const randomImage = stars[Math.floor(Math.random() * stars.length)];;
        setStarPositions([...starPositions, { x, y, image: randomImage }]);
    } else {
        const randomImage = flowers[Math.floor(Math.random() * flowers.length)];
        setFlowerPositions([...flowerPositions, { x, y, image: randomImage }]);
    }
};

useEffect(() => {
    if (isdarkmode !== prevMode) {
    setPrevMode(isdarkmode);
    }
}, [isdarkmode, prevMode]);

useEffect(() => {
    setFlowerPositions([]);
    setStarPositions([]);
}, [isdarkmode]);

useEffect(() => {
    if (prevMode === null) {
        setPrevMode(isdarkmode);
    }
    setFlowerPositions([]);
    setStarPositions([]);
}, [isdarkmode, prevMode]);

return (
    <Wrapper onClick={handleClick} isdarkmode={isdarkmode}>
        <ProfilePic src={me} alt="profile picture" isdarkmode={isdarkmode}/>
        <Name isdarkmode={isdarkmode}>Jessica Chiocchio Seery</Name>
        <Title isdarkmode={isdarkmode}>Web Developer</Title>
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
    {isdarkmode === 'true' ? (
        <StarsContainer>
        {starPositions.map((position, index) => (
            <Star
            key={index}
            src={position.image}
            style={{ top: position.y + 'px', left: position.x + 'px' }}
            alt="Star"
            />
        ))}
        </StarsContainer>
    ) : (
        <FlowersContainer>
        {flowerPositions.map((position, index) => (
            <Flower
            key={index}
            src={position.image}
            style={{ top: position.y - 10 + 'px', left: position.x - 10 + 'px' }}
            alt="Flower"
            />
        ))}
        </FlowersContainer>
    )}
    <InfoClickBox isdarkmode={isdarkmode}>
        Click anywhere on this page to add {isdarkmode === 'true' ? 'a star' : 'a flower'}!
    </InfoClickBox>
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
const StarsContainer = styled.div`

`
const Star = styled.img`
width: 50px;
height: 50px;
position: absolute;
animation: ${growFlower} 0.5s ease-in-out forwards;
`
const FlowersContainer = styled.div`
`

const Flower = styled.img`
width: 100px;
height: 100px;
position: absolute;
animation: ${growFlower} 0.5s ease-in-out forwards;
`;
const Title = styled.h3`
font-style: italic;
color: ${(props) =>
    props.isdarkmode === 'true' ? 'white' : 'black'};
`
const Wrapper = styled.div`
min-height: 100vh;
text-align: center;
background: ${(props) =>
    props.isdarkmode === 'true'
    ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgb(27, 27, 27) 20%, rgb(42, 30, 54) 40%, rgb(58, 33, 82) 60%, rgb(73, 35, 109) 80%, rgb(88, 38, 136) 100% )'
    : 'linear-gradient(180deg, rgba(255, 112, 2, 1) 0%, rgba(217, 145, 57, 1) 56%, rgba(233, 227, 21, 1) 100%)'};
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
cursor: pointer
`
const ProfilePic = styled.img`
width: 250px;
border-radius: 50%;
margin-top: 7%;
box-shadow: ${(props) =>
    props.isdarkmode === 'true' ? '1px 3px 30px purple' : '1px 3px 30px rgb(255, 77, 0)'};
`
const Name = styled.h1`
color: ${(props) => (props.isdarkmode === 'true' ? 'white' : 'black')};
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
const InfoClickBox = styled.p`
color: ${(props) =>
    props.isdarkmode === 'true' ? 'white' : 'black'};
`
const ProgramLangbar = styled.div`

`
const Language = styled.img`
height: 50px;
margin-right: hpx;
`

export default Homepage