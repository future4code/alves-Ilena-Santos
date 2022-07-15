import styled from "styled-components";
import BgAdminHomePage from "../../img/background-AdminHomePage.jpg"

export const CardTrips = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 8px;
    margin: 20px;
    padding: 10px;
    background-color: #ECFBF5;
   align-items: center;
   justify-items: center;
   box-shadow: 5px 5px 10px #7F7E7A;
   color:black;
    
`
export const ContainerAdminHomePage = styled.div`
display: flex;
justify-content: center;
 width: 100vw;
 min-height: 100vh;
 position: absolute;
 background-image: url(${BgAdminHomePage}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
`


export const SectionPage = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns:  1fr;
    grid-template-rows: 80px 300px  ;
    justify-content: center;
    justify-items: center;
    color: white;
`



export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const ContainerElements = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    
    

`
export const ContainerTrips = styled.div`
    width: 300px;
    overflow-y: scroll;
    max-height: 145px;
    padding-left: 25px;
`
export const ContainerCreateTrip = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100px;
    flex-direction: column;
    padding-right: 100px;

`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 150px;
    height: 60px;

`

export const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;
  :hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);}
`
