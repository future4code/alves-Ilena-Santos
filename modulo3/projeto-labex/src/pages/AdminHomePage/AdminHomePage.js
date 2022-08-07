import React, { useState } from 'react'
import { useGetTrips } from "../../hooks/useGetTrips"
import { useNavigate } from "react-router-dom"
import { goBack, goToTripDetailsPage } from "../../routes/coordinator"
import { ContainerButton, ContainerTrips, SectionPage, CardTrips, ContainerAdminHomePage, ContainerTitle, ContainerCreateTrip, ContainerElements, ButtonDelete } from './AdminHomePage-styled'
import Title from '../../components/Title/Title'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import CreateTripForm from '../../components/CreateTripForm/CreateTripForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import {P, Button} from "../../components/Letter-styled"
import TrashCan from "../../img/trashcan.png"
import { toast } from 'react-toastify'

export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false) 
  const { data, loading, error } = useGetTrips("/trips",refresh);
  const trips = data?.trips;
  console.log(data)

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
          toast.success("Viagem deletada!")
           handleDelete()

          })
          .catch((err) => {
            toast.error("Erro ao deletar viagem")
          });
  }
  

  const listOfTrips = trips?.map((trip) => {
    return (<CardTrips key={trip.id}>
      <P >{trip.name}</P>
      <Button onClick={() => { handleOnClick(trip.id) }}>Ver detalhes</Button>
      <ButtonDelete onClick={()=>{deleteTrip(trip.id)}}>
        <img src={TrashCan} alt="desenho mão com polegar para baixo" height={30} width={30} />
      </ButtonDelete>
    </CardTrips>
    )
  })

  return (
    <ContainerAdminHomePage>
      <SectionPage>
      <ContainerTitle>
        <Title/>
      </ContainerTitle>
      <ContainerElements>
        <ContainerTrips >
          {listOfTrips}
        </ContainerTrips>
        <ContainerCreateTrip>
         <CreateTripForm handleCreatePage={handleCreatePage}/>
        </ContainerCreateTrip>
      </ContainerElements>
      <ContainerButton>
        <Button onClick={()=>{goBack(navigate)}}>Voltar</Button>
      </ContainerButton>
      </SectionPage>
    </ContainerAdminHomePage>
  )
}
