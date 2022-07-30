import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


export default function useRequestData(inicialData, url, refresh, setIsLoading) {
    const [data, setData] = useState(inicialData)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                setIsLoading(false)
                toast.error("Erro no carregamento da página :(")

            })
    }, [url, refresh])
    return (data)
}
