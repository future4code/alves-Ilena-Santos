import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import Title from '../../components/Title/Title';
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { useGetTrips } from "../../hooks/useGetTrips"
import { Countries } from '../../constants/Countries';
import { Button, Input, Select } from "../../components/Letter-styled"
import { toast } from 'react-toastify'
import {
  ContainerApplicationFormPage, ContainerForm, DivSelectTrip,
  DivInputName, DivInputAge, DivInputText,
  DivInputProfession, DivSelectCountry, DivButton
} from './ApplicationFormPage-styled';

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
        toast.success("Aplicação feita!")
      })
      .catch((err) => {
        toast.error("Erro ao fazer aplicação")
      });

    cleanFields()
  }

  const tripOptions = trips?.map((trip, index) => {
    return <option key={index} value={trip.id}> {trip.name}</option>
  })

  return (
    <ContainerApplicationFormPage>
      <Title />
      <ContainerForm onSubmit={onSubmitApply}>
        <DivSelectTrip>
          <Select onChange={onChangeId} required >
            <option value="" >Escolha uma viagem</option>
            {tripOptions}
          </Select>
        </DivSelectTrip>
        <DivInputName>
          <Input placeholder='Nome'
            name='name'
            value={form.name}
            onChange={onChange}
            pattern={"^.{3,}"}
            title={"Seu nome deve ter no mínimo 3 letras"}
            required
          />
        </DivInputName>
        <DivInputAge>
          <Input placeholder='Idade'
            onChange={onChange}
            name='age'
            value={form.age}
            min={18}
            title={"Idade mínima 18 anos"}
            required
          />
        </DivInputAge>
        <DivInputText>
          <Input placeholder='Texto de candidatura'
            onChange={onChange}
            name='applicationText'
            value={form.applicationText}
            pattern={"^.{30,}"}
            title={"Seu texto deve ter no mínimo 30 caracteres"}
            required
          />
        </DivInputText>
        <DivInputProfession>
          <Input placeholder='Profissão'
            onChange={onChange}
            name='profession'
            value={form.profession}
            pattern={"^.{10,}"}
            title={"Sua profissão deve ter no mínimo 10 caracteres"}
            required
          />
        </DivInputProfession>
        <DivSelectCountry>
          <Select onChange={onChange} name="country" placeholder='País' required>
            <option value="" >País de Origem</option>
            {Countries.map((country, index) => {
              return (
                <option value={country} key={index}>{country}</option>
              )
            })}
          </Select>
        </DivSelectCountry>
        <DivButton>
          <Button>Aplicar-se</Button>
        </DivButton>
      </ContainerForm>
    </ContainerApplicationFormPage>
  )
}
