import  {useEffect,useState} from 'react'
import axios from 'axios'


export default function useRequestData(inicialData, url, refresh) {
    const [data, setData] = useState(inicialData)

    useEffect(()=>{
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[url,refresh])
  return ( data )
}
