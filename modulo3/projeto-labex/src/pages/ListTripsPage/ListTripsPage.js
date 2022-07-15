import React from 'react'
import { useGetTrips } from "../../hooks/useGetTrips"
import { ContainerListTripsPage, CardTrips, ContainerTrips, SectionPage, ContainerButton } from './ListTripsPage-styled';
import { useNavigate } from "react-router-dom"
import { goBack, goToApplicationFormPage } from "../../routes/coordinator"
import Title from '../../components/Title/Title';
import { P, Button } from '../../components/Letter-styled';



export default function ListTripsPage() {
  const navigate = useNavigate()
  const { data, loading, erro } = useGetTrips("/trips");
  const trips = data?.trips;

  const listOfTrips = trips?.map((trip, index) => {
    return (<CardTrips key={trip.id}>
      <P> Viagem: {trip.name}</P>
      <P>Planeta: {trip.planet}</P>
      <P> Data: {trip.date} </P>
      <P> Descrição: {trip.description} </P>
      <P> Duração: {trip.durationInDays} dias</P>
    </CardTrips>

    )
  })

  return (

    <ContainerListTripsPage>
      <SectionPage>
        <Title/>
        <ContainerTrips>
          {listOfTrips}
        </ContainerTrips>
        <ContainerButton>
          <Button onClick={() => { goBack(navigate) }}>Voltar</Button>
          <Button onClick={() => { goToApplicationFormPage(navigate) }}>Bora pro espaço?</Button>
        </ContainerButton>
      </SectionPage>
    </ContainerListTripsPage>

  )
}
