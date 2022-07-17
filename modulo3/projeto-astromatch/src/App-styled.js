import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
`

export const ContainerAstroMatch = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px 1fr;
  border-radius: 15px;
  width: 400px;
  height: 500px;
  justify-content: center;
  text-align: center;
  background-color: #FFEDC2;
  box-shadow: 5px 5px 50px #FA8E00;
  margin-top: 40px;
  margin-bottom: 40px;
    
  @media (min-device-width:320px) and (max-device-width:480px){
    width: 95%;
    height: 500px;
  } 
`