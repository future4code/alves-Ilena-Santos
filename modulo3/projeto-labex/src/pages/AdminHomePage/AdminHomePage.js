import React from 'react'
import { useGetTrips } from "../../hooks/useGetTrips"
import { useNavigate } from "react-router-dom"
import { goBack, goToTripDetailsPage, goToHomePage } from "../../routes/coordinator"
import { ContainerButton, ContainerTrips, SectionPage, CardTrips, ContainerAdminHomePage, ContainerTitle, ContainerCreateTrip, ContainerElements } from './AdminHomePage-styled'
import Title from '../../components/Title/Title'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import CreateTripForm from '../../components/CreateTripForm/CreateTripForm'



export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  const { data, loading, erro } = useGetTrips("/trips");
  const trips = data?.trips;

  const handleOnClick = (id) => {
    localStorage.setItem('id', id)
    goToTripDetailsPage(navigate,id)
  }

  const listOfTrips = trips?.map((trip) => {
    return (<CardTrips key={trip.id}>
      <p >{trip.name}</p>
      <button onClick={() => { handleOnClick(trip.id) }}>Ver detalhes</button>
      <button>Deletar</button>
    </CardTrips>

    )
  })

  return (
    <ContainerAdminHomePage>
      <SectionPage>
      <ContainerTitle>
        {/* <h1 onClick={()=>{goToHomePage(navigate)}}>AdminHomePage</h1> */}
        <Title/>
      </ContainerTitle>
      <ContainerElements>
        <ContainerTrips>
          {listOfTrips}
        </ContainerTrips>
        <ContainerCreateTrip>
         <CreateTripForm/>
          <ContainerButton>
          <button onClick={() => { goBack(navigate) }}>Voltar</button>

          </ContainerButton>
        </ContainerCreateTrip>
      </ContainerElements>
      </SectionPage>
    </ContainerAdminHomePage>
  )
}
