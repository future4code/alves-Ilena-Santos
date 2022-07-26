import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import useRequestData from '../hooks/useRequestData'

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
      console.log("aqui erro no post",err)
    })
  }