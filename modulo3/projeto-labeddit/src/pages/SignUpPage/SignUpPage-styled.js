import styled from "styled-components";

export const ContainerSignup = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
h3{
    position: absolute;
left: 32px;
top: 100px;
padding: 0;
margin: 0;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;

color: #373737;
}
button{
    position: absolute;
/* width: 365px; */
height: 51px;
left: 32px;
right: 32px;
top: 600px;

background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
border: none;

color: #FFFFFF;
font-family: 'Noto Sans';
font-style: normal;
}

`

export const ContainerInput = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 230px;
left:28px;
right: 28px;

input{
    margin-bottom: 8px;
    border: 1px solid #D5D8DE;
    height: 60px;
    border-radius: 4px;
    font-family: 'Noto Sans';
font-style: normal;
padding-left: 10px;
}

`


export const LegalText = styled.p`
position: absolute;
/* width: 361.02px; */
height: 38px;
left: 34px;
right: 34px;
top: 450px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;

color: #000000;
a{
    text-decoration: none;
    color:#4088CB;
}

`
export const ContainerCheckBox = styled.div`
display: flex;
position: absolute;
top: 530px;
left: 20px;
right: 10px;
gap: 5px;
p{
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;

color: #000000;
}

`