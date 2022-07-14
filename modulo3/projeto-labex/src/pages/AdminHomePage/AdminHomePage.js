import React, { useState } from 'react'
import { useGetTrips } from "../../hooks/useGetTrips"
import { useNavigate } from "react-router-dom"
import { goBack, goToTripDetailsPage, goToHomePage } from "../../routes/coordinator"
import { ContainerButton, ContainerTrips, SectionPage, CardTrips, ContainerAdminHomePage, ContainerTitle, ContainerCreateTrip, ContainerElements } from './AdminHomePage-styled'
import Title from '../../components/Title/Title'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import CreateTripForm from '../../components/CreateTripForm/CreateTripForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { useEffect } from "react";



export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false) 
  const { data, loading, erro } = useGetTrips("/trips",refresh);
  const trips = data?.trips;

  const handleOnClick = (id) => {
    localStorage.setItem('id', id)
    goToTripDetailsPage(navigate,id)
  }

  const handleCreatePage =() =>{
    setRefresh(!refresh)
  }
  const handleDelete =() =>{
    setRefresh(!refresh)
  }


  const deleteTrip = (id) =>{

    const token = localStorage.getItem("token")
        axios
          .delete(`${BASE_URL}/trips/${id}`,
          {headers: {
            auth: token
        }})
          .then((res) => {
           alert("Viagem deletada")
           handleDelete()

          })
          .catch((err) => {
            alert("Erro ao deletar viagem")
          });
  }
  
  // const logOut =( ) =>{

  // }

  const listOfTrips = trips?.map((trip) => {
    return (<CardTrips key={trip.id}>
      <p >{trip.name}</p>
      <button onClick={() => { handleOnClick(trip.id) }}>Ver detalhes</button>
      <button onClick={()=>{deleteTrip(trip.id)}}>Deletar</button>
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
        <ContainerTrips >
          {listOfTrips}
        </ContainerTrips>
        <ContainerCreateTrip>
         <CreateTripForm handleCreatePage={handleCreatePage}/>
          <ContainerButton>
            <button onClick={() => { goBack(navigate) }}>Voltar</button>
          </ContainerButton>
        </ContainerCreateTrip>
      </ContainerElements>
      </SectionPage>
    </ContainerAdminHomePage>
  )
}
