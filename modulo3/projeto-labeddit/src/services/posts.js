import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import { toast } from 'react-toastify'

export const addPost = (body,cleanFields, setRefresh,refresh,)=>{
    axios.post(`${BASE_URL}/posts`,body,{
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
      cleanFields()
      setRefresh(!refresh)
    })
    .catch((err)=>{
      toast.error("Erro ao adicionar post :(")
    })
  }