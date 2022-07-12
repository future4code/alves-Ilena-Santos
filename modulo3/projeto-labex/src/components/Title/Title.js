import React from 'react'
import { goToHomePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export default function Title() {
    const navigate = useNavigate()
  return (
    <div>
        <h1 onClick={()=>{goToHomePage(navigate)}}>Testando</h1>
    </div>
  )
}
