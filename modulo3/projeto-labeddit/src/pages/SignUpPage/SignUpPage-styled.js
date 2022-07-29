import styled from "styled-components";

export const ContainerSignup = styled.div`
display: flex;
flex-direction: column;
padding: 0.5rem;
h3{
    position: absolute;
left: 2rem;
top: 6.25rem;
padding: 0;
margin: 0;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 2.063rem;
line-height: 2.688rem;
color: #373737;
}

button{
    position: absolute;
height: 3.188rem;
left: 2rem;
right: 2rem;
top: 37.5rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 1.688rem;
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
top: 14.375rem;
left:1.75rem;
right: 1.75rem;
input{
    margin-bottom: 0.5rem;
    border: 1px solid #D5D8DE;
    height: 3.75rem;
    border-radius: 0.25rem;
    font-family: 'Noto Sans';
font-style: normal;
padding-left: 0.625rem;
}
`


export const LegalText = styled.p`
position: absolute;
height: 2.375rem;
left: 2.125rem;
right: 2.125rem;
top: 28.125rem;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size:0.875rem;
line-height: 1.188rem;
color: #000000;
a{
    text-decoration: none;
    color:#4088CB;
}
`
export const ContainerCheckBox = styled.div`
display: flex;
position: absolute;
top:33.125rem;
left:1.25rem;
right: 0.625rem;
gap: 0.313rem;
p{
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.188rem;
color: #000000;
}
`