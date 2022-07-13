import React from 'react'
import { useGetTrips } from "../../hooks/useGetTrips"
import { ContainerListTripsPage, CardTrips, ContainerTrips, SectionPage, ContainerButton } from './ListTripsPage-styled';
import { useNavigate } from "react-router-dom"
import { goBack, goToApplicationFormPage } from "../../routes/coordinator"



export default function ListTripsPage() {
  const navigate = useNavigate()
  const { data, loading, erro } = useGetTrips("/trips");
  const trips = data?.trips;

 console.log(trips)
  const listOfTrips = trips?.map((trip, index) => {
    return (<CardTrips key={trip.id}>
      <p> Viagem: {trip.name}</p>
      <p>Planeta: {trip.planet}</p>
      <p> Data: {trip.date} </p>
      <p> Descrição: {trip.description} </p>
      <p> Duração: {trip.durationInDays} dias</p>
    </CardTrips>

    )
  })

  return (

    <ContainerListTripsPage>
      <SectionPage>
        <h1>ListTripsPage</h1>
        <ContainerTrips>
          {listOfTrips}
        </ContainerTrips>
        <ContainerButton>
          <button onClick={() => { goBack(navigate) }}>Voltar</button>
          <button onClick={() => { goToApplicationFormPage(navigate) }}>Bora pro espaço?</button>
        </ContainerButton>
      </SectionPage>
    </ContainerListTripsPage>

  )
}
