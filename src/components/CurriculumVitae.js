import styled from 'styled-components'
import certihtmlcss from './CertificateHTMLCSS.png'
import diplomaWebApp from './DiplomaWebApp.png'


const CurriculumVitae = () => {

    return (
<Wrapper>
    <Certificate src={certihtmlcss} alt="certification HTML"/>
    <Certificate src={diplomaWebApp} alt="Diploma for web application" />
    <p>My CV</p>
</Wrapper>
    )
}
const Wrapper = styled.div`
min-height: 89vh;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
padding: 0px;
`
const Certificate = styled.img`
width: 400px;
height: 500px;
`
export default CurriculumVitae