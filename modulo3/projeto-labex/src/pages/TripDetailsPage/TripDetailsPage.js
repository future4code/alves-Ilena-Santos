import React from 'react'
import { useGetTripDetails } from '../../hooks/useGetTripDetails';

export default function TripDetailsPage() {
  const id = localStorage.getItem("id")
  const { data, loading, erro } = useGetTripDetails(`/trip/${id}`);
  const trip = data?.trip;
  console.log("chegou nos detalhes", trip)
  
  const details = () =>{
    if(trip) {
      return (<p>{trip.description}</p>)
    } else {
      return (<p>Carregando</p>)
    }

  }
 
  
  
  
  return (
    <div>
      <div>TripDetailsPage</div>
      {details()}
    </div>
  )
}
