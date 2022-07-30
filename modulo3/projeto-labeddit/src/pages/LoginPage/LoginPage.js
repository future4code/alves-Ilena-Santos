import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { goToSignUp } from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/users'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import Logo from "../../assets/logo.png"
import Line from "../../assets/Line.svg"
import { ImgLogo, ContainerLogin, InputName, InputPassword, ButtonContinue, ButtonSignUp, ImgLine } from "./LoginPage-styled"
import Loading1 from "../../assets/loading1.gif"


export default function LoginPage() {
  useUnprotectedPage()

  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, cleanFields, navigate, setIsLoading)
  }

  return (
    <ContainerLogin>
      <ImgLogo src={Logo} alt="Logo LabEddit" />
      <p>O projeto de rede social da Labenu</p>
      <form onSubmit={onSubmitForm}>
        <InputName name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
          type={"email"}
        />
        <InputPassword name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          required
          type={"password"}
        />
        <ButtonContinue>
          {isLoading ? <img src={Loading1} width={30} alt="Carregando"/> : <>Continuar</>}
        </ButtonContinue>
      </form>
      <ImgLine src={Line} />
      <ButtonSignUp onClick={() => goToSignUp(navigate)}>Crie uma conta!</ButtonSignUp>
    </ContainerLogin>
  )
}
