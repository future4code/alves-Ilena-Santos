import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import Title from '../../components/Title/Title';
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { useGetTrips } from "../../hooks/useGetTrips"
import { Countries } from '../../constants/Countries';
import { ContainerApplicationFormPage, ContainerForm, DivSelectTrip, DivInputName, DivInputAge, DivInputText, DivInputProfession, DivSelectCountry, DivButton } from './ApplicationFormPage-styled';

export default function ApplicationFormPage() {
  const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" });
  const { data, loading, erro } = useGetTrips("/trips");
  const [id, setId] = useState("")

  const trips = data?.trips;

  const onChangeId = (event) => {
    setId(event.target.value)
  }



  const onSubmitApply = (event) => {

    event.preventDefault();
    console.log(form)
    console.log("aqui o id", id)
    axios
      .post(`${BASE_URL}/trips/${id}/apply`, form,
    )
      .then((res) => {
        alert("Aplicação feita")
      })
      .catch((err) => {
        console.log(err.response.data)
      });

    cleanFields()
  }

  const tripOptions = trips?.map((trip, index) => {
    return <option key={index} value={trip.id}> {trip.name}</option>
  })


  return (
    <ContainerApplicationFormPage>
      <Title/>
      <ContainerForm onSubmit={onSubmitApply}>
        <DivSelectTrip>
          <select onChange={onChangeId} required >
            <option value="" >Escolha uma viagem</option>
            {tripOptions}
          </select>
        </DivSelectTrip>
        <DivInputName>
          <input placeholder='Nome'
            name='name'
            value={form.name}
            onChange={onChange}
            required
          />
        </DivInputName>
        <DivInputAge>
          <input placeholder='Idade'
            onChange={onChange}
            name='age'
            value={form.age}
            required
          />
        </DivInputAge>
        <DivInputText>
          <input placeholder='Texto de candidatura'
            onChange={onChange}
            name='applicationText'
            value={form.applicationText}
            required
          />
        </DivInputText>
        <DivInputProfession>
          <input placeholder='Profissão'
            onChange={onChange}
            name='profession'
            value={form.profession}
            required
          />
        </DivInputProfession>
        <DivSelectCountry>
          <select onChange={onChange} name="country" placeholder='País' required>
            <option value="" >País de Origem</option>
            {Countries.map((country, index) => {
              return (
                <option value={country} key={index}>{country}</option>
              )
            })}
          </select>
        </DivSelectCountry>

<DivButton>


        <button>Aplicar-se</button>
</DivButton>
      </ContainerForm>
    </ContainerApplicationFormPage>

  )
}
