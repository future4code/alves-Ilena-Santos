import styled from "styled-components";
import BgLoginPage from "../../img/background-LoginPage.jpg"


export const ContainerLoginPage = styled.div`
display: flex;
justify-content: center;
 width: 100vw;
 min-height: 100vh;
 position: absolute;
 background-image: url(${BgLoginPage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
`

export const SectionPage = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr ;
    justify-content: center;
    justify-items: center;
    color: white;
    border: 1px green solid;
`
export const ContainerLogin =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    height: 100px;
    width: 300px;
    padding-top: 200px;
    border: 1px red solid;

`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
    /* width: 150px; */
    /* height: 60px; */
`