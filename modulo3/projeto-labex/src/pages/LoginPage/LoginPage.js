import React from 'react'
import { useNavigate } from "react-router-dom"
import useForm from '../../hooks/useForm';
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToAdminHomePag, goToHomePage } from "../../routes/coordinator"
import { ContainerLoginPage, SectionPage, ContainerLogin, ContainerButton } from './LoginPage-styled'
import Title from '../../components/Title/Title';
import { Button } from '../../components/Letter-styled';

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
        console.log("entrou aqui!!!!!!")
      })
      .catch((err) => {
        alert("Usuário não autorizado!")
      });

    cleanFields()
  }

  return (
    <ContainerLoginPage>
      <SectionPage>
        <Title />
        <ContainerLogin>
          <form onSubmit={onSubmitLogin}>
            <input placeholder='E-mail'
              name="email"
              type={"email"}
              value={form.email}
              onChange={onChange}
              required
            />
            <input placeholder='senha'
              name="password"
              type={"password"}
              value={form.password}
              onChange={onChange}
              required
              pattern={"^.{6,}"}
              title={"Sua senha deve ter no mínimo 6 caracteres"}
            />
            <Button>Entrar</Button>
          </form>
        </ContainerLogin>
      </SectionPage>
    </ContainerLoginPage>
  )
}
