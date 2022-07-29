import axios from 'axios'
import {BASE_URL} from "../constants/urls"

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
      alert("Erro ao adicionar comentário :(")
    })
  }