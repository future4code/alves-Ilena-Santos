import React from 'react'
import useForm from '../../hooks/useForm'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";


export default function CreateTripForm(props) {
    
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date:"", description:"", durationInDays:""});


    const onSubmitCreate = (event) => {
        event.preventDefault();
     
        const token = localStorage.getItem("token")
        axios
          .post(`${BASE_URL}/trips`, form,
          {headers: {
            auth: token
        }})
          .then((res) => {
           alert("Criou viagem")
           props.handleCreatePage()


          })
          .catch((err) => {
            alert("Erro na requisição")
          });
    
          cleanFields()
      }

      
  return (
  <div>
      <div>CreateTripForm</div>
      <form onSubmit={onSubmitCreate}>
      <input placeholder='Nome'
      name='name'
      value={form.name} 
      onChange={onChange}
      required
      />
      <select onChange={onChange} placeholder="Planeta" name='planet' value={form.planet} required >
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
       <input placeholder='Descrição'
       onChange={onChange}
       name='description'
       value={form.description}
       required
       />
      <input placeholder='Data'
      onChange={onChange}
       type='date' 
       name='date'
       value={form.date}
    />
       <input
       placeholder='Duração em dias'
       onChange={onChange}
       type="number"
       name='durationInDays'
       value={form.durationInDays}
       required
       />
      <button > Criar </button>
      </form>
  </div>
  )
}
