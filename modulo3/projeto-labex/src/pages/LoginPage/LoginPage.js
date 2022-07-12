import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, goToAdminHomePag } from "../../routes/coordinator"
import { ContainerLoginPage, SectionPage, ContainerLogin, ContainerButton } from './LoginPage-styled'

export default function LoginPage() {
  const navigate = useNavigate()
  return (
    <ContainerLoginPage>
      <SectionPage>
        <h1>LoginPage</h1>
        <ContainerLogin>
          <input placeholder='E-mail'/>
          <input placeholder='senha'/>
          <ContainerButton>
          <button onClick={() => goToAdminHomePag(navigate)}>Página Adm</button>
          <button onClick={() => goBack(navigate)}>Voltar</button>
          </ContainerButton>
        </ContainerLogin>
      </SectionPage>
    </ContainerLoginPage>
  )
}
