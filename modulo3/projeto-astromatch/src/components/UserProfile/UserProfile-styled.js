import styled from "styled-components";


export const ContainerProfiles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.2fr;
`
export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  padding: 10px;
`

export const Img = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  object-fit: cover, contain;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;   
  margin-top: 0.5rem;
  margin-bottom: 8px;
  transition: all 0.5s ease;
  ${(props) => props.status === "like" && "transform:   translate(15rem, 5rem) rotate(15deg)"};
  ${(props) => props.status ==="like" && "opacity: 0"};
  ${(props) => props.status==="normal" && ""}
  ${(props) => props.status==="dislike" && "transform:   translate(-15rem, 5rem) rotate(-15deg)"};
  ${(props) => props.status ==="dislike" && "opacity: 0"};
`

export const TextFont = styled.p`
 @import url('https://fonts.googleapis.com/css2?family=Finlandica:wght@600&display=swap');
  font-family: 'Finlandica', sans-serif;
  font-size: medium;
`

export const ContainerLike = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
`

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