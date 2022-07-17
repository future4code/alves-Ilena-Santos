import React from 'react'
import { useNavigate } from "react-router-dom"
import useForm from '../../hooks/useForm';
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToAdminHomePag } from "../../routes/coordinator"
import { ContainerLoginPage, SectionPage, ContainerButton, ContainerForm } from './LoginPage-styled'
import Title from '../../components/Title/Title';
import { Button, Input } from '../../components/Letter-styled';
import { toast } from 'react-toastify'

export default function LoginPage() {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const path = "/login"
    axios
      .post(`${BASE_URL}${path}`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToAdminHomePag(navigate)
      })
      .catch((err) => {
        toast.error("Usuário não encontrado")
      });

    cleanFields()
  }

  return (
    <ContainerLoginPage>
      <SectionPage>
        <Title />
        <ContainerForm onSubmit={onSubmitLogin}>
          <Input placeholder='E-mail'
            name="email"
            type={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          <Input placeholder='senha'
            name="password"
            type={"password"}
            value={form.password}
            onChange={onChange}
            required
            pattern={"^.{6,}"}
            title={"Sua senha deve ter no mínimo 6 caracteres"}
          />
          <ContainerButton>
            <Button>Entrar</Button>
          </ContainerButton>
        </ContainerForm>
      </SectionPage>
    </ContainerLoginPage>
  )
}
