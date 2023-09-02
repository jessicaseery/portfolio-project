import styled from 'styled-components'
import pdf from './JESSICASEERYCV.pdf'
import React, {useState} from 'react'

const CurriculumVitae = ({data, isdarkmode}) => {
    const [activeImage, setActiveImage] = useState('false')
    const handleClick = (imageSrc) => {
        setActiveImage(imageSrc);
    }
    const closepopout = () => {
        setActiveImage('false')
    }

    return (
<Wrapper isdarkmode={isdarkmode}>
    <Qualifications>
        <Intro>Experience</Intro>
        <Info>Click on a certificate to view it in a bigger format!</Info>
        <CVcontainer>
        {(Object.values(data)).map((language) => {
        return (
        <div key={language.id}>
        <Certificate src={language.imageSrc} onClick={() => handleClick(language.imageSrc)}/>
        </div>
        )
        })}
    </CVcontainer>
    <Popout show={activeImage !== 'false' ? 'true' : 'false'} onClick={closepopout}>
        <Poptext key="clickout">click anywhere to go back.</Poptext>
        <PoppedImg src={activeImage} alt="Full-Screen" />
        
    </Popout>
    </Qualifications>
    <CV>
        <CVlink href={pdf} download="JessicaSeeryCV.pdf" isdarkmode={isdarkmode}>Download my CV</CVlink>
    </CV>
    
</Wrapper>
    )
}
const Popout = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.7);
display: ${(props) => (props.show === 'true' ? 'block' : 'none')};
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
const Info = styled.p`
color: white;
margin-top: -5px;
font-style: italic;
`
const CVcontainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
@media (max-width: 1100px) {
    display: grid;
grid-template-columns: auto auto;
width: 100%;
height: 100%;
}
@media (max-width: 600px) {
    display: grid;
grid-template-columns: auto auto;
width: 100%;
height: 100%;
}
`
const Wrapper = styled.div`
background: ${(props) =>
    props.isdarkmode === 'true'
    ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgb(27, 27, 27) 20%, rgb(42, 30, 54) 40%, rgb(58, 33, 82) 60%, rgb(73, 35, 109) 80%, rgb(88, 38, 136) 100% )'
    : 'linear-gradient(180deg, rgba(255, 112, 2, 1) 0%, rgba(217, 145, 57, 1) 56%, rgba(233, 227, 21, 1) 100%)'};
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding: 0px;
height: 100%;
`
const Intro = styled.h3`
margin-top: 0px;
padding-top: 15px;
color: white;
`
const Certificate = styled.img`
width: 400px;
height: 500px;
margin-right: 3%;
margin-top: 15px;

@media (max-width: 600px) {
width: 95%;
height: 90%;
}
`
const Qualifications = styled.div`
text-align: center;
`
const CV = styled.div`
margin-top: 70px;
margin-bottom: 40px;
text-align: center;
padding-bottom: 100px;
margin-bottom: 0px;
`
const CVlink = styled.a`
padding: 20px;
margin-bottom:20px;
border-radius: 10px;
border: 2px solid black;
font-weight: bold;
font-style: italic;
background-color: white;
color: ${(props) =>
    props.isdarkmode === 'true'
    ? 'purple'
    : 'orangered'};
`
export default CurriculumVitae