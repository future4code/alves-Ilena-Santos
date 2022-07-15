import React from 'react'
import { goToHomePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { ContainerTitle, H1 } from './Title-styled'


export default function Title() {
  const navigate = useNavigate()
  return (
    <ContainerTitle>
      <H1 onClick={() => { goToHomePage(navigate) }} >LabeX</H1>
    </ContainerTitle>
  )
}
