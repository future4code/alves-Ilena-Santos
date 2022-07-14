import React from 'react'
import { useGetTripDetails } from '../../hooks/useGetTripDetails';
import { useParams } from 'react-router-dom';

export default function TripDetailsPage() {
  const id = localStorage.getItem("id")
  const { data, loading, erro } = useGetTripDetails(`/trip/${id}`);
  const trip = data?.trip;
  console.log("chegou nos detalhes", trip)
  
  const candidates = trip?.candidates.map((candidate,index)=>{
    return (<ul key={index} >{candidate.name}</ul>)
  })
  
  const details = () =>{
    if(trip) {
      return (<div>
        <p>{trip.name}</p>
        <p>{trip.planet}</p>
        <p>{trip.description}</p>
        <p>{trip.date}</p>
        <p>{trip.durationInDays}</p>
        {candidates}
        </div>)
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
