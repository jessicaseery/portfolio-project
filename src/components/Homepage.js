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
<ProfiePic src={me} alt='profile picture'/>
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
text-align: center;
`
const ProfiePic = styled.img`
width: 250px;
border-radius: 50%;
margin-top: 7%;
`
const Name = styled.h1`

`
const ProgramLangbar = styled.div`

`
const Language = styled.img`
height: 50px;
margin-right: hpx;
`

export default Homepage