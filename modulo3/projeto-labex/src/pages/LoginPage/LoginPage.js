import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToAdminHomePag, goToHomePage } from "../../routes/coordinator"
import { ContainerLoginPage, SectionPage, ContainerLogin, ContainerButton } from './LoginPage-styled'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const OnSubmitLogin = (path) => {
    
    const body ={
      email: email,
      password: password
  }
  
    axios
      .post(`${BASE_URL}${path}`, body)
      .then((res) => {
       localStorage.setItem('token', res.data.token)
       goToAdminHomePag(navigate)
      })
      .catch((err) => {
        alert("Usuário não autorizado!")
      });
  }

  const onChangeEmail = (event) =>{
    setEmail(event.target.value)
  }

  const onChangePassword = (event) =>{
    setPassword(event.target.value)
  }

  return (
    <ContainerLoginPage>
      <SectionPage>
        <h1>LoginPage</h1>
        <ContainerLogin> 
          <input placeholder='E-mail' type={"email"} value={email} onChange={onChangeEmail}/>
          <input placeholder='senha' type={"password"} value={password} onChange={onChangePassword}/>
          <ContainerButton>
          <button onClick={() => goToHomePage(navigate)}>Voltar</button>
          <button onClick={() => OnSubmitLogin("/login")}>Entrar</button>
          </ContainerButton>
        </ContainerLogin>
      </SectionPage>
    </ContainerLoginPage>
  )
}
