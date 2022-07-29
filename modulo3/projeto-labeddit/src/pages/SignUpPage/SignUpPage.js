import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/users'
import { ContainerSignup, ContainerInput, ContainerCheckBox, LegalText } from "./SignUpPage-styled"
import Loading1 from "../../assets/loading1.gif"

export default function SignUpPage() {
  useUnprotectedPage()

  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, cleanFields, navigate, setIsLoading)
  }

  return (
    <ContainerSignup>
      <h3>Olá, boas vindas ao LabEddit ;)</h3>
      <form onSubmit={onSubmitForm}>
        <ContainerInput>
          <input name={"username"}
            value={form.username}
            onChange={onChange}
            placeholder="Nome"
            required
          />
          <input name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
            type={"email"}
          />
          <input name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            type={"password"}
            pattern={'^.{8,30}'}
            title={"A senha deve conter no mínimo 8 e no máximo 30 caracteres"}
          />
        </ContainerInput>

        <LegalText>
          Ao continuar, você concorda com o nosso <a href="http://www.google.com.br"> Contrato de usuário </a> e nossa <a href="http://www.google.com.br">Política de privacidade</a>
        </LegalText>
        <ContainerCheckBox>
          <input type="checkbox" required />
          <p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>
        </ContainerCheckBox>
        <button>
          {isLoading ? <img src={Loading1} width={30} /> : <>Cadastrar</>}
        </button>
      </form>
    </ContainerSignup>
  )
}
