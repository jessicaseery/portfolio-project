import React from "react";
import styled from 'styled-components'

const AboutMe = () => {

    return (
        <div>
            <Bio>Hello! My name is Jessica Chiocchio Seery! I live on the southshore of Montreal in a cozy appartment with my boyfriend and our two kittens Remy and Wall-e (the names are based on my favourite disney movie characters). Currently I am a student of Concordia University in Web-Development. I've been passionate about technology and coding since I was 11. I've always been driven by my motivation to learn more, continuously looking for new things to learn and never backing down from a challenge.</Bio>
            <div>
    <h3>A professional goal:</h3>
        <p>To develop multiple websites for several companies and hopefully one day create my own company</p>
</div>
<div>
    <h3>A personal goal:</h3>
        <p>To travel the world and learn something new everywhere that I visit!</p>
</div>
            <div>
            <TableLD>
                <tbody>
            <TableRow>
                <th>Likes</th>
                <th>Dislikes</th>
            </TableRow>
            <tr>
                <Tabledata>Coffee</Tabledata>
                <Tabledata>Insects</Tabledata>
            </tr>
            <tr>
                <Tabledata>CSS</Tabledata>
                <Tabledata>When your cat steps on your keyboard and messes up your code but hes too cute to scold</Tabledata>
            </tr>
            <tr>
            <Tabledata>Music</Tabledata>
            <Tabledata>Covid-19 (caught it twice, and both times it took a major toll on my health)</Tabledata>
            </tr>
            <tr>
            <Tabledata>Animals</Tabledata>
            <Tabledata>Seafood</Tabledata>
            </tr>
            <tr>
            <Tabledata>Breakfast</Tabledata>
                
            </tr> 
            <tr>
            <Tabledata>Video Games</Tabledata>
            </tr>
            <tr>
            <Tabledata>Sunrise/Sunset</Tabledata>
            </tr>
            <tr>
            <Tabledata>Traveling</Tabledata>
            </tr>
            <tr>
            <Tabledata>Reading</Tabledata>
            </tr>
            <tr>
            <Tabledata>Winter</Tabledata>
            </tr>
            </tbody>
            </TableLD>
</div>

            
            
        </div>
    )
}

const Bio = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
`
const TableLD = styled.table`
text-align: center;
`
const TableRow = styled.tr`
width: 500px;
background-color: pink;
`
const Tabledata = styled.td`
width: 200px;
border-bottom: 1px grey solid;
`
export default AboutMe;