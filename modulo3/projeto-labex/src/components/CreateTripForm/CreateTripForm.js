import React from 'react'
import { useState } from 'react'

export default function CreateTripForm() {
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState(0)

    const teste =()=>{
        console.log(name,planet)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangePlanet = (event) => {
        setPlanet(event.target.value)
    }
  return (
  <div>
      <div>CreateTripForm</div>
      <input placeholder='nome'value={name} onChange={onChangeName}/>
      <select onChange={onChangePlanet}>
        <option value={"mercury"}>Mercúrio</option>
        <option value={"venus"}>Vênus</option>
        <option value={"earth"}>Terra</option>
        <option value={"mars"}>Marte</option>
        <option value={"jupiter"}>Júpiter</option>
        <option value={"saturn"}>Saturno</option>
        <option value={"uranos"}>Urano</option>
        <option value={"neptune"}>Natuno</option>
        <option value={"pluto"}>Plutão</option>
      </select>
      <button onClick={teste}>Teste</button>
  </div>
  )
}
