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
    align-items: center;
    width: 80%;
    color: white;
`

export const ContainerButton = styled.div`
margin-top: 10px;
    width: 100px;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 190px;

`