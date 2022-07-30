import styled from "styled-components";

export const ContainerHeader = styled.div`
display: flex;
position: absolute;
width: 100vw;
height: 3.125rem;
left: 0px;
top: 0;
background: #EDEDED;
img{
    position: absolute;
width: 1.75rem;
height: 1.79rem;
left: 10.625rem;
top: 0.682rem;
}
button{
    position: absolute;
width: 3.438rem;
height:1.563rem;
left: 18rem;
top: 0.625rem;
background: none;
border: none;

font-family: 'Noto Sans';
font-style: normal;
font-size: 1.125rem;
color: #4088CB;
}
`

export const ContainerHeaderPost = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: absolute;
width: 100vw;
height: 3.125rem;
background: #EDEDED;
img{
width: 1.75rem;
height: 1.79rem;
}
button{
width: 3.438rem;
height:1.563rem;
background: none;
border: none;
font-family: 'Noto Sans';
font-style: normal;
font-size: 1.125rem;
color: #4088CB;
}
`