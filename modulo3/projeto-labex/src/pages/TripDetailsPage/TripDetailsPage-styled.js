import styled from "styled-components";
import BgTripDetailsPage from "../../img/background-TripDetailsPage.jpg"


export const ContainerTripDetailsPage = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
 width: 100vw;
 height: 100vh;
 position: absolute;
 background-image: url(${BgTripDetailsPage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 color: white;
`


export const ContainerDetails =styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 40px 25px 60px 25px 25px 40px 25px;
/* flex-direction: column; */
width: 300px;
padding-left: 100px;
max-height: 300px;
/* border: 1px solid white; */
`
export const ContainerCandidates = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 50px;
    width: 200px;
    
`