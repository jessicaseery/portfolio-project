import React from "react";
import styled from 'styled-components'

const AboutMe = () => {

    return (
<Wrapper>
    <Title>About me</Title>
            <Bio>Hello! My name is Jessica Chiocchio Seery, I live on the southshore of Montreal in a cozy appartment with my boyfriend and our two kittens Remy and Wall-e (the names are based on my favourite disney movie characters). Currently I am a student of Concordia University in Web-Development. I've been passionate about technology and coding since I was 11 years old. I've always been driven by my motivation to learn more, continuously looking for new things to learn and never backing down from a challenge. I plan on continuing to develop more skills to become the best web developer I can be! If I am not building websites or analysing my code, I can be found watching Marvel movies, playing video games, enjoying coffee, listening to music, watching sunrises and sunsets, or enjoying my favourite meal of the day: breakfast!</Bio>
<Goals>
<ProfessionalGoal>
    <h3>Professional goal</h3>
        <p>To develop multiple websites for several companies and hopefully one day create my own company</p>
</ProfessionalGoal>
<PersonalGoal>
    <h3>Personal goal</h3>
        <p>To travel the world and learn something new everywhere that I visit! </p>
        <p>Dream destination: Italy</p>
</PersonalGoal>
</Goals>
</Wrapper>
    )
}

const Title = styled.h1`
color: white;
text-align: center;
`
const Goals = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: auto auto;
margin-left: 25%;
margin-right: 25%;
@media (max-width: 600px) {
    margin-left:2%;
    margin-right:2%;
}

`
const Wrapper =  styled.div`
min-height: 100vh;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding-top: 1px;
`
const Bio = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: white;
text-align: center;
`

const ProfessionalGoal = styled.div`
max-width: 400px;
background-color: sandybrown;
color: black;
box-shadow: 5px 5px 50px rgb(255,77,0);
text-align: center;
border-radius: 10px;
padding: 10px;
margin-right: 5%;
`
const PersonalGoal = styled.div`
background-color: sandybrown;
color: black;
box-shadow: 5px 5px 50px rgb(255,77,0);

border-radius: 10px;
text-align: center;
max-width: 400px;
padding: 10px;
`

export default AboutMe;