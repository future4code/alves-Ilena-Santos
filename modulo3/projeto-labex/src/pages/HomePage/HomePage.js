import React from 'react'
import { useNavigate } from "react-router-dom"
import Title from '../../components/Title/Title'
import { goToLoginPage, goToListTripsPage } from "../../routes/coordinator"
import { ContainerHomePage, ContainerButton, SectionPage } from './HomePage-styled'
import { Button } from '../../components/Letter-styled'

export default function HomePage() {
    const navigate = useNavigate()
    return (
        <ContainerHomePage>
            <SectionPage>

            <Title/>
            <ContainerButton>
                <Button onClick={() => { goToLoginPage(navigate) }}>Área Restrita</Button>
                <Button onClick={() => { goToListTripsPage(navigate) }}>viagens espaciais</Button>
            </ContainerButton>
            </SectionPage>
        </ContainerHomePage>
    )
}
