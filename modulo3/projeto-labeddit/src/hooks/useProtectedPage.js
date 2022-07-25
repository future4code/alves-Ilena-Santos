import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/cordinator";


export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (token === null) {
            alert("Acesso não autorizado!")
            goToLogin(navigate)
        }
    },[navigate])

} 