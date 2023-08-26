import styled from 'styled-components'
import me from './me.jpg'
import htmllogo from './html.png'
import csslogo from './css.png'
import javascriptlogo from './javascript.png'
import reactlogo from './reactlogo.png'
import pythonlogo from './python.png'
import phplogo from './php.png'
import csharp from './csharp.png'
import cplusplus from './cplusplus.png'

const Homepage = () => {

    return (
<Wrapper> 
<ProfilePic src={me} alt='profile picture'/>
<Name>Jessica Chiocchio Seery</Name>
<h3>Web Developper</h3>
<ProgramLangbar>
    <Language src={htmllogo} alt="HTML"/>
    <Language src={csslogo} alt="CSS"/>
    <Language src={javascriptlogo} alt="JavaScript"/>
    <Language src={reactlogo} alt="React"/>
    <Language src={pythonlogo} alt="Python"/>
    <Language src={phplogo} alt="PHP"/>
    <Language src={csharp} alt="C#"/>
    <Language src={cplusplus} alt="C++"/>
    </ProgramLangbar>
</Wrapper>
)
}


const Wrapper = styled.div`
min-height: 100vh;
text-align: center;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
`
const ProfilePic = styled.img`
width: 250px;
border-radius: 50%;
margin-top: 7%;
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