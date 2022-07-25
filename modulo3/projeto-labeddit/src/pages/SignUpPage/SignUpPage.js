import React from 'react'
import useForm from '../../hooks/useForm'
import {goToFeed} from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/users'


export default function SignUpPage() {
  useUnprotectedPage()
  
  const navigate = useNavigate()

  const {form, onChange, cleanFields} = useForm({username:"", email: "", password:""})

  const onSubmitForm = (event)=>{
    event.preventDefault()
    signUp(form,cleanFields,navigate)
  }

  return (
    <div>
      <h3>SignUpPage</h3>
      <form onSubmit={onSubmitForm}>
        <input name={"username"}
        value={form.name}
        onChange={onChange}
        placeholder = "Nome"
        required
        />
        <input name={"email"}
        value={form.email}
        onChange={onChange}
        placeholder = "Nome"
        required
        type={"email"}
        />
         <input name={"password"}
        value={form.password}
        onChange={onChange}
        placeholder = "Senha"
        required
        type={"password"}
        />
        <button>Cadastrar</button>
      </form>
    </div>
  )
}
