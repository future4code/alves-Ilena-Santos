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
    display: flex;
    flex-direction: column;
    width: 80%;
    color: white;
`
export const ContainerLogin =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    width: 300px;
    padding-top: 200px;
    padding-left: 370px;

`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
`