import React, { useState } from 'react'
import Title from '../../components/Title/Title';
import { useNavigate } from "react-router-dom"
import { useGetTripDetails } from '../../hooks/useGetTripDetails';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ContainerTripDetailsPage, CardCandidates, ContainerApplication,
   ContainerDetails, ContainerInformations, ContainerCandidates, 
   CardApproved, ContainerButton, ContainerApproved } from './TripDetailsPage-styled';
import { goBack } from "../../routes/coordinator"
import { P, Button } from "../../components/Letter-styled"
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';


export default function TripDetailsPage() {

  useProtectedPage()
  const navigate = useNavigate()
  const id = localStorage.getItem("id")
  const [refresh, setRefresh] = useState(false) 
  const { data, loading, erro } = useGetTripDetails(`/trip/${id}`,refresh);
  const trip = data?.trip;

  const decideCadidate = (idCandidate, choice) =>{
    const token = localStorage.getItem("token")
    const body ={
      approve:choice
    }
  
    axios.put(`${BASE_URL}/trips/${trip.id}/candidates/${idCandidate}/decide`, body,{
      headers: {
        auth: token
    }
    })
    .then((res)=>{
      if (choice === true){
        console.log("Aprovado")
        setRefresh(!refresh)
      } else {
        console.log("Reprovado")
        setRefresh(!refresh)
      }
    }).catch((err)=>{
      console.log("Deu ruim", err)
    })
  }

  const candidates = trip?.candidates.map((candidate,index) => {
    return (<CardCandidates key={index} >
      <P>Nome:{candidate.name}</P>
      <P>Idade:{candidate.age}</P>
      <P>Texto de Aplicação:{candidate.applicationText}</P>
      <P>País:{candidate.country}</P>
      <P>Profissão:{candidate.profession}</P>
      <Button onClick={()=>{decideCadidate(candidate.id,true)}}>Aprovar</Button>
      <Button onClick={()=>{decideCadidate(candidate.id,false)}}>Reprovar</Button>
    </CardCandidates>)
  })

  const approved = trip?.approved.map((approved, index) => {
    return (
     
      
      <CardApproved key={index} >
      <P>Nome: {approved.name}</P>
      </CardApproved>
     
    )
  })


  const details = () => {
    if (trip) {
      return (
        <ContainerInformations>
          <ContainerDetails>
            <P>Nome da viagem: {trip.name}</P>
            <P>Planeta: {trip.planet}</P>
            <P>Descrição: {trip.description}</P>
            <P>Data: {trip.date}</P>
            <P>Duração: {trip.durationInDays}</P>
          </ContainerDetails>
          <ContainerApplication>
            <P>Candidatos Pendentes:</P>
            <ContainerCandidates>
                {candidates}
            </ContainerCandidates>
            <P>Candidatos Aprovados:</P>
            {(approved.length === 0) ? (<P> Não há candidatos aprovados  </P>) : (<ContainerApproved>
              {approved}
            </ContainerApproved>)}
          </ContainerApplication>
        </ContainerInformations>
      )
    } else {
      return (<ContainerDetails><h4>Carregando...</h4></ContainerDetails>)
    }
  }

  return (
    <div>
      <ContainerTripDetailsPage>
        <Title />
        {details()}
        <ContainerButton>
        <Button onClick={() => goBack(navigate)}> Voltar </Button>
        </ContainerButton>
      </ContainerTripDetailsPage>
    </div>
  )
}
