import styled from "styled-components";
import BgApplyPage from "../../img/background-ApplicationFormPage.jpg"


export const ContainerApplicationFormPage = styled.div`
display: flex;
flex-direction: column;
 width: 100vw;
 min-height: 1200px;
 position: absolute;
 background-image: url(${BgApplyPage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
`

export const ContainerForm =  styled.form`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 100%;
`

export const DivSelectTrip = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 180px;
    width: 250px;
`

export const DivInputName = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 220px;
    width: 250px;
`

export const DivInputAge = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 260px;
    width: 250px;
`

export const DivInputText = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 300px;
    width: 250px;
`

export const DivInputProfession = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 340px;
    width: 250px;
`

export const DivSelectCountry = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 380px;
    width: 250px;
`
export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 460px;
    width: 100px;
`
