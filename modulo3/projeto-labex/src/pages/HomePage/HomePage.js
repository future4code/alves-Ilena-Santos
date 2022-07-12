import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToLoginPage, goToListTripsPage } from "../../routes/coordinator"
import { ContainerHomePage, ContainerButton, SectionPage } from './HomePage-styled'

export default function HomePage() {
    const navigate = useNavigate()
    return (
        <ContainerHomePage>
            <SectionPage>

            <h1>HomePage</h1>
            <ContainerButton>
                <button onClick={() => { goToLoginPage(navigate) }}>Área Restrita</button>
                <button onClick={() => { goToListTripsPage(navigate) }}>viagens espaciais</button>
            </ContainerButton>
            </SectionPage>
        </ContainerHomePage>
    )
}
