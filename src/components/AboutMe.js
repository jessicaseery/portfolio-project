import React from "react";
import styled from 'styled-components'

const AboutMe = () => {

    return (
<Wrapper>
    <h1>About me...</h1>
            <Bio>Hello! My name is Jessica Chiocchio Seery, I live on the southshore of Montreal in a cozy appartment with my boyfriend and our two kittens Remy and Wall-e (the names are based on my favourite disney movie characters). Currently I am a student of Concordia University in Web-Development. I've been passionate about technology and coding since I was 11. I've always been driven by my motivation to learn more, continuously looking for new things to learn and never backing down from a challenge.</Bio>
<ProfessionalGoal>
    <h3>Professional goal</h3>
        <p>To develop multiple websites for several companies and hopefully one day create my own company</p>
</ProfessionalGoal>
<PersonalGoal>
    <h3>Personal goal</h3>
        <p>To travel the world and learn something new everywhere that I visit!</p>
</PersonalGoal>

</Wrapper>
    )
}

const Wrapper =  styled.div`
min-height: 100vh;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
padding-top: 1px;

`
const Bio = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const ProfessionalGoal = styled.div`
max-width: 400px;
border: 1px grey solid;
border-radius: 10px;
text-align: center;
background-color: lightgoldenrodyellow;
padding: 10px;
`
const PersonalGoal = styled.div`
background-color: pink;
border: 1px grey solid;
border-radius: 10px;
text-align: center;
max-width: 400px;
padding: 10px;
`

export default AboutMe;