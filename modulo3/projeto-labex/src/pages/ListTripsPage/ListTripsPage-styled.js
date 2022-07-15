import styled from "styled-components";
import BgListTripsPage from "../../img/background-ListTripPage.jpg"

export const ContainerListTripsPage = styled.div`
display: flex;
justify-content: center;
 width: 100vw;
 min-height: 900px;
 position: absolute;
 background-image: url(${BgListTripsPage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
`

export const CardTrips = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 20px 20px 1fr 20px;
    text-align: center;
    width: 190px;
    height: 300px;
    border-radius: 8px;
    margin: 20px;
    padding: 10px;
    background-color: #ECFBF5;
   align-items: center;
   justify-items: center;
   box-shadow: 5px 5px 10px #7F7E7A;
   color:black;
    
`

export const ContainerTrips = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
overflow-y: scroll;
max-height: 290px;
`

export const SectionPage = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr 50px 1fr ;
    justify-content: center;
    justify-items: center;
    color: white;
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 150px;
    height: 60px;

`