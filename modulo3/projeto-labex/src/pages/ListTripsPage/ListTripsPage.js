import React from 'react'
import {useGetData } from "../../hooks/useGetData"
import { ContainerListTripsPage } from './ListTripsPage-styled';


export default function ListTripsPage() {
    const { data, loading, erro } = useGetData("/trips");
  const trips = data?.trips;

//   console.log(trips)
  const listOfTrips = trips?.map((trip,index)=>{
    return (<p key={index}>{trip.name}</p>)
  })

  return (
    
    <ContainerListTripsPage>
        <div>ListTripsPage</div>
        <div>{listOfTrips}</div>
    </ContainerListTripsPage>

  )
}
