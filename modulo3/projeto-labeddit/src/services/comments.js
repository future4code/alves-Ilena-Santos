import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import { toast } from 'react-toastify'

export const addComment = (body,cleanFields,id,refresh, setRefresh)=>{
    axios.post(`${BASE_URL}/posts/${id}/comments`,body,{
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
      cleanFields()
      setRefresh(!refresh)
    })
    .catch((err)=>{
      toast.error("Erro ao adicionar comentário :(")
    })
  }