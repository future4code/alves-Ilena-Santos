import React from 'react'
import { useGetData } from "../../hooks/useGetData"
import { useNavigate } from "react-router-dom"
import { goBack, goToTripDetailsPage, goToHomePage } from "../../routes/coordinator"
import { ContainerButton, ContainerTrips, SectionPage, CardTrips, ContainerAdminHomePage, ContainerTitle, ContainerCreateTrip, ContainerElements } from './AdminHomePage-styled'
import Title from '../../components/Title/Title'



export default function AdminHomePage() {
  const navigate = useNavigate()
  const { data, loading, erro } = useGetData("/trips");
  const trips = data?.trips;


  const listOfTrips = trips?.map((trip, index) => {
    return (<CardTrips>
      <p key={index}>{trip.name}</p>
      <button onClick={() => { goToTripDetailsPage(navigate) }}>Ver detalhes</button>
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
          <h3>Criar viagem</h3>
          <input />
          <ContainerButton>
          <button onClick={() => { goBack(navigate) }}>Voltar</button>
          <button>Criar</button>
          </ContainerButton>
        </ContainerCreateTrip>
      </ContainerElements>
      </SectionPage>
    </ContainerAdminHomePage>
  )
}
