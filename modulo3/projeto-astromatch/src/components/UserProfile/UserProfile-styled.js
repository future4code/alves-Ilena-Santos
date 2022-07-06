import styled from "styled-components";


export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  
`

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`
export const ContainerLike = styled.div`
display: flex;
    justify-content: space-around;
`
export const ContainerProfiles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.2fr;
`
// export const Teste= styled.p`
//  @import url('https://fonts.googleapis.com/css2?family=Finlandica:wght@600&display=swap');
//   /* font-family: 'Finlandica', sans-serif; */
 
// `
export const ButtonLike = styled.button`
  border: none;
  background-color: transparent;
  :hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);}
`

export const ButtonDislike = styled.button`
border: none;
background-color: transparent;
:hover {
-webkit-transform: scale(1.3);
transform: scale(1.3);}
`