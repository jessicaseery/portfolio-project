import styled from 'styled-components'
import React, {useState} from 'react'


const Projects = ({data}) => {
    const [activeImage, setActiveImage] = useState(null)
    const [projectDescribe, setProjectDescribe] = useState(null)

    const handleClick = (imageSrc, description) => {
        setActiveImage(imageSrc);
        setProjectDescribe(description)
    }
    const closepopout = () => {
        setActiveImage(null)
    }

    return (
<Wrapper>
    <Text>View my projects from oldest to most recent! Click on the project for more information!</Text>
    
    <PictureContainter>
        {(Object.values(data)).map((exercise) => {
        return (
        <div key={exercise.id}>
        <ProjectImg src={exercise.imageSrc} onClick={() => handleClick(exercise.imageSrc, exercise.description)}/>
        </div>
        )
        })}
    </PictureContainter>
    <Popout show={activeImage !== null} onClick={closepopout}>
        <Poptext key="clickout">{projectDescribe}  ----- click anywhere to go back to the project page.</Poptext>
        <PoppedImg src={activeImage} alt="Full-Screen" />
        
    </Popout>
</Wrapper>
    )
}

const PictureContainter = styled.div`
display: grid;
grid-template-columns: auto auto;
`
const ProjectImg = styled.img`
width: 90%;
box-shadow: 1px 1px 10px red;
margin-bottom: 10px;

@media (max-width: 600px) {
width: 95%;
height: 90%;
border: 2px black solid;
box-shadow: 1px 1px 5px pink;
}

`
const Text = styled.h4`
color: white;
`

const Popout = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.7);
display: ${(props) => (props.show ? 'block' : 'none')};
z-index: 18;
`
const Poptext = styled.p`
color:white;
`
const PoppedImg = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 90%;
max-height: 90%;
`;
const Wrapper = styled.div`
padding-top: 1px;
min-height: 100vh;
text-align: center;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
`
export default Projects