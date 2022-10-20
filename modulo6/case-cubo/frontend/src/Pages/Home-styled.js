import styled from "styled-components";

export const ContainerForm = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color:#00b8e2 ;
height: 6.625rem;

form {
display: flex;
padding: 10px;
}

input{
    margin: 0.8rem;
    height: 2.5rem;
    width: 15rem;
    border: none;
    border-radius: 0.1875rem;
}
button{
    margin: 0.8rem;
    background-color:#00b8e2;
    border: 1px solid white;
    color: white;
    height:2.5rem ;
    width: 8rem;
}

button:hover{
    background-color: white;
    color: #00b8e2;
}

`

export const H1 = styled.h1`
display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`

export const P = styled.p`
display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`

export const ContainerTableAndChart = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 10rem;



table, th, td {
    border: 1px solid black;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}

table {
border-collapse: collapse;
margin: auto;
}


th{
font-weight: bold;
min-width: 6.25rem;
height: 1.875rem;
}

td{
    height: 1.875rem;
}

`