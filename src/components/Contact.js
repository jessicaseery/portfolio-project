import styled from 'styled-components'
const Contact = () => {

return (
<Wrapper>
    <form>
        First Name: <input type="text" placeholder='John'/>
        Last Name: <input type="text" placeholder='Doe'/>
        Email: <input type="email" placeholder='abc@gmail.com'/>
        Additional Info:
        <input type="text" placeholder='Say something...'/>
    </form>
    <p>*Please note that the contact form does not currently work, it is simply a placeholder. If you wish to contact me, send me an email!</p>
</Wrapper>
)
}

const Wrapper =  styled.div`
min-height: 89vh;
background: linear-gradient(180deg, rgba(255,112,2,1) 0%, rgba(217,145,57,1) 56%, rgba(233,227,21,1) 100%);
font-family: 'Titillium Web', sans-serif;
padding: 0px;
`
export default Contact