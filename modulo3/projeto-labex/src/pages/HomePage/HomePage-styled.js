import styled from "styled-components";
import BgHomePage from "../../img/background-HomePage.jpg"

export const ContainerHomePage = styled.div`
display: flex;
justify-content: center;
width: 100vw;
min-height: 1100px;
 position: absolute;
 background-image: url(${BgHomePage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
`

export const SectionPage = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 400px;
    grid-template-rows: 50px 500px ;
    color: white;
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 150px;
    height: 60px;
    padding-top: 500px;
`