import React from 'react'
import Title from '../../components/Title/Title';
import { useNavigate } from "react-router-dom"
import { useGetTripDetails } from '../../hooks/useGetTripDetails';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ContainerTripDetailsPage, ContainerCandidates, ContainerDetails } from './TripDetailsPage-styled';
import {goBack} from "../../routes/coordinator"
import {P} from "../../components/Letter-styled"

export default function TripDetailsPage() {

  useProtectedPage()
  const navigate = useNavigate()
  const id = localStorage.getItem("id")
  const { data, loading, erro } = useGetTripDetails(`/trip/${id}`);
  const trip = data?.trip;

  const candidates = trip?.candidates.map((candidate, index) => {
    return (<option key={index} >{candidate.name}</option>)
  })

  const approved = trip?.approved.map((approved, index) => {
    return (<option key={index} >{approved.name}</option>)
  })


  console.log(trip)

  const details = () => {
    if (trip) {
      return (
        <ContainerDetails>
          <P>Nome da viagem: {trip.name}</P>
          <P>Planeta: {trip.planet}</P>
          <P>Descrição: {trip.description}</P>
          <P>Data: {trip.date}</P>
          <P>Duração: {trip.durationInDays}</P>
          <P>Candidatos Pendentes:</P>
          <ContainerCandidates>
            <select>
            <option value="" >Candidatos</option>
            {candidates}
            </select>
          </ContainerCandidates>
          <P>Candidatos Aprovados:</P>
          {(approved.length === 0)? (<P> Não há candidatos aprovados  </P>) :(<div><select>
            <option value="" >Candidatos</option>
            {approved}
            </select></div>)  }
            <button onClick={()=>goBack(navigate)}> Voltar </button>
        </ContainerDetails>
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
      </ContainerTripDetailsPage>
    </div>
  )
}
