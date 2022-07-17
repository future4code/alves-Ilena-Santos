import React from 'react'
import useForm from '../../hooks/useForm'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { toast } from 'react-toastify'
import { Input, Select , Button, H3} from '../Letter-styled';


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
            toast.success("Viagem criada!")
           props.handleCreatePage()


          })
          .catch((err) => {
            toast.error("Erro ao criar viagem")
          });
    
          cleanFields()
      }

      
  return (
  <div>
      <H3>Criar viagens</H3>
      <form onSubmit={onSubmitCreate}>
      <Input placeholder='Nome'
      name='name'
      value={form.name} 
      onChange={onChange}
      pattern={"^.{5,}"}
      required
      />
      <Select onChange={onChange} placeholder="Planeta" name='planet' value={form.planet} required >
        <option value={""}>Escolha Planeta</option>
        <option value={"mercury"}>Mercúrio</option>
        <option value={"venus"}>Vênus</option>
        <option value={"earth"}>Terra</option>
        <option value={"mars"}>Marte</option>
        <option value={"jupiter"}>Júpiter</option>
        <option value={"saturn"}>Saturno</option>
        <option value={"uranos"}>Urano</option>
        <option value={"neptune"}>Natuno</option>
        <option value={"pluto"}>Plutão</option>
      </Select>
       <Input placeholder='Descrição'
       onChange={onChange}
       name='description'
       value={form.description}
      //  pattern={"^.{30,}"}
       required
       />
      <Input placeholder='Data'
      onChange={onChange}
       type='date' 
       name='date'
       value={form.date}
    />
       <Input
       placeholder='Duração em dias'
       onChange={onChange}
       type="number"
       name='durationInDays'
       value={form.durationInDays}
       required
       />
      <Button > Criar </Button>
      </form>
  </div>
  )
}
