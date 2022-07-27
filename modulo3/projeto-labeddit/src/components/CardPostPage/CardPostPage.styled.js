import styled from "styled-components";

export const ContainerCardComment = styled.div`
    background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
margin-bottom: 10px;

`
export const TextName = styled.p`
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #6F6F6F;
padding-left: 18px ;
`
export const TextBody = styled.p`
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 16px;
color: #000000;
padding-left: 18px ;
`



export const ContainerCards = styled.div`
display: flex;
flex-direction: column;
margin-top: 35px ;
position: absolute;
top:445px;
left: 30px;
right: 30px;
`
export const SectionClick = styled.div`
display: flex;
flex-direction: row;
gap:20px;
padding-left: 10px;
padding-bottom: 10px;

p{
    font-family: 'Noto Sans';
font-style: normal;
font-size: 10px;
color: #6F6F6F;
}


`
export const SectionLike =styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
min-width: 80px;
left: 5px;
height: 30px;
border: 0.796748px solid #ECECEC;
border-radius: 28px;

`

export const SecttionComment = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
min-width: 50px;
left: 100px;
height: 30px;
border: 0.796748px solid #ECECEC;
border-radius: 28px;
`