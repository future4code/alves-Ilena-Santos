import axios from 'axios'
import {BASE_URL} from "../constants/urls"

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
      alert("Erro ao adicionar post :(")
    })
  }