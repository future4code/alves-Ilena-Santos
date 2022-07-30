import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import { goToFeed } from '../routes/cordinator'
import { toast } from 'react-toastify'


export const login = (body,cleanFields,navigate, setIsLoading)=>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`,body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      cleanFields()
      setIsLoading(false)
      goToFeed(navigate)

    })
    .catch((err)=>{
      setIsLoading(false)
      toast.error("Erro ao fazer login, verifique se as informações estão corretas")
    })
  }

  export const signUp = (body,cleanFields,navigate)=>{
    axios.post(`${BASE_URL}/users/signup`,body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      cleanFields()
      goToFeed(navigate)

    })
    .catch((err)=>{
      toast.error("Erro ao cadastrar, verifique se as informações estão corretas")
    })
  }