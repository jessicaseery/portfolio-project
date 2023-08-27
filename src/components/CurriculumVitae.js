import styled from 'styled-components'

const CurriculumVitae = ({data}) => {

    return (
<Wrapper>
    <Qualifications>
        <Intro>Check out the certificates, awards, and diplomas I have acheieved so far! I definitely plan on continuing to learn and add onto this list with future achievements as well.</Intro>
        <div>
        {(Object.values(data)).map((language) => {
        return (
        <div key={language.id}>
        <Certificate src={language.imageSrc} />
        </div>
        )
        })}
    </div>
    </Qualifications>
    <div>
        <button>My CV</button>
    </div>
    
</Wrapper>
    )
}
const Wrapper = styled.div`
min-height: 89vh;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
padding: 0px;
`
const Intro = styled.h3`
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
export default CurriculumVitae