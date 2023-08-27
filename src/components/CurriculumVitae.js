import styled from 'styled-components'

const CurriculumVitae = ({data}) => {

    return (
<Wrapper>
    <Qualifications>
        <Intro>Experience</Intro>
        <CVcontainer>
        {(Object.values(data)).map((language) => {
        return (
        <div key={language.id}>
        <Certificate src={language.imageSrc} />
        </div>
        )
        })}
    </CVcontainer>
    </Qualifications>
    <div>
        <CVlink>My CV</CVlink>
    </div>
    
</Wrapper>
    )
}

const CVcontainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
`
const Wrapper = styled.div`
min-height: 89vh;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
padding: 0px;
`
const Intro = styled.h2`
margin-top: 0px;
color: white;
`
const Certificate = styled.img`
width: 400px;
height: 500px;
margin-right: 3%;
margin-top: 15px;
`
const Qualifications = styled.div`
text-align: center;
`

const CVlink = styled.button`
width: 200px;
height: 40px;
color: orangered;
font-weight: bold;
font-style: italic;
background-color: white;
`
export default CurriculumVitae