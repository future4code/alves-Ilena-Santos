import styled from "styled-components";
import BgTripDetailsPage from "../../img/background-TripDetailsPage.jpg"


export const ContainerInformations = styled.div`
    display: flex;
    width: 500px;
    max-height: 900px;
`

export const ContainerDetails =styled.div`
display: flex;
flex-direction: column;
width: 250px;
padding-left: 20px;
`

export const ContainerApplication = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    
`
export const ContainerCandidates = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
max-height: 150px;

`

export const CardCandidates = styled.div`
display: flex;
flex-direction: column;
box-shadow: 5px 5px 10px #7F7E7A;
background-color: #ECFBF5;
color:black;
margin-top: 5px;
margin-bottom: 40px;
margin-right: 8px;
border-radius: 8px;
padding: 10px;

`
export const CardApproved = styled.div`
display: flex;
flex-direction: column;
margin-top: 15px;
padding: 10px;
box-shadow: 5px 5px 10px #7F7E7A;
background-color: #ECFBF5;
color:black;
border-radius: 8px;
margin-right: 8px;

`
export const ContainerApproved = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
max-height: 100px;

`

export const ContainerTripDetailsPage = styled.div`
display: flex;
flex-direction: column;
 width: 100vw;
 height: 100vh;
 position: absolute;
 background-image: url(${BgTripDetailsPage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 color: white;
`
export const ContainerButton = styled.div`
margin-top: 15px;
display: flex;
width: 500px;
justify-content: center;

`
