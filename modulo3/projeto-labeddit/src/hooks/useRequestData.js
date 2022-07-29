import { useEffect, useState } from 'react'
import axios from 'axios'


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
                setIsLoading(false)
            }).catch((err) => {
                setIsLoading(false)
                alert("Erro no carregamento da página :(")

            })
    }, [url, refresh])
    return (data)
}
