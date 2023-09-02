import styled from 'styled-components'
import React from 'react'
import email from './email.png'
import phone from './phone.png'

const Contact = ({isdarkmode}) => {

return (
<Wrapper isdarkmode={isdarkmode}>
    <FillForm>
        <Title>Contact Me!</Title>
        <Labelled>First Name: <Blank type="text" placeholder='John'/></Labelled>
        <Labelled>Last Name: <Blank type="text" placeholder='Doe'/></Labelled>
        <Labelled>Email: <Blank type="email" placeholder='abc@gmail.com'/></Labelled>
        <Labelled>Additional Info: <Blank type="text" placeholder='Say something...'/></Labelled>
    </FillForm>
    <ContactLinks>
        
            <ContactText key="emailinfo" isdarkmode={isdarkmode}><Email src={email} alt="email logo" isdarkmode={isdarkmode}/> : Jessica13.Seery@gmail.com</ContactText>
            <ContactText key="phonenumber" isdarkmode={isdarkmode}><Phone src={phone} alt="phone logo" isdarkmode={isdarkmode}/> : 514-415-9505</ContactText>
    
    </ContactLinks>
    <Sidenote isdarkmode={isdarkmode}>*Please note that the contact form does not currently work, it is simply a placeholder. If you wish to contact me, send me an email or call me!</Sidenote>
</Wrapper>
)
}

const ContactText = styled.p`
padding-top: 30px;
margin-top: -3px;
color: ${(props) =>
    props.isdarkmode === 'true'
    ? 'white'
    : 'black'};

`
const Wrapper =  styled.div`
min-height: 100vh;
background: ${(props) =>
    props.isdarkmode === 'true'
    ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgb(27, 27, 27) 20%, rgb(42, 30, 54) 40%, rgb(58, 33, 82) 60%, rgb(73, 35, 109) 80%, rgb(88, 38, 136) 100% )'
    : 'linear-gradient(180deg, rgba(255, 112, 2, 1) 0%, rgba(217, 145, 57, 1) 56%, rgba(233, 227, 21, 1) 100%)'};
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding-top: 50px;

`
const ContactLinks = styled.div`
margin-top: 30px;
margin: 0 auto;
text-align: center;
`
const Email = styled.img`
width: 20px;
height: 15px;
margin-right: 10px;
filter: ${(props) => (props.isdarkmode === "true" ? "invert(100%)" : "invert(0%)")};
`

const Phone = styled.img`
width: 20px;
height: 15px;
margin-right: 10px;
filter: ${(props) => (props.isdarkmode === "true" ? "invert(100%)" : "invert(0%)")};
`
const FillForm = styled.form`
background-color: whitesmoke;
text-align: center;
margin-left: auto;
margin-right: auto;
border-radius: 16px;
padding: 24px;
max-width: 475px;
margin-top: 50px;
box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
    @media (max-width: 600px){
display: block;
padding: 5%;
max-width: fit-content;
    }
@media (max-width: 300px){
display: block;
padding: 1%;
max-width: 280px;
margin-right: 0px;
font-size: 12px
}
`
const Title = styled.h1`
margin-top: -1px;
`
const Sidenote = styled.p`
color: ${(props) =>
    props.isdarkmode === 'true'
    ? 'white'
    : 'black'};
text-align: center;
margin-top: 60px;
`
const Blank = styled.input`
border-color: rgb(211, 211, 211);
border-width: 1px;
border-style: solid;
margin-left: 5%;
@media (max-width: 600px){
    border-color: rgb(211, 211, 211);
    border-width: 1px;
    border-style: solid;
    margin-left: 1px;
}
`
const Labelled = styled.label`
display: flex;
justify-content: end;
padding-right: 15%;
margin-bottom: 8px;
@media (max-width: 600px){
    display: flex;
    justify-content: end;
    padding-right: 15%;
    margin-bottom: 8px;
    
}
`
export default Contact