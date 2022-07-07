import styled from "styled-components";

export const CardMatch = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr ;
    grid-template-rows: 1fr;
    border-radius: 8px;
    margin: 20px;
    padding: 10px;
    background-color: #ECFBF5;
   align-items: center;
   justify-items: center;
   box-shadow: 5px 5px 10px #7F7E7A;
` 
export const ImgMatches = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
export const TextFont = styled.p`
 @import url('https://fonts.googleapis.com/css2?family=Finlandica:wght@600&display=swap');
  font-family: 'Finlandica', sans-serif;
`
export const ContainerMatches = styled.div`
  overflow-y: scroll;
  max-height: 300px;
`

export const ContainerButtonClear = styled.div`
padding-top: 35px;
`