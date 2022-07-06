import React from 'react'
import { ContainerHeader, ButtonMatches } from "./Header-styled"
import Fire from "../../img/fire.png"
import { Text, Button } from '@chakra-ui/react'


export default function Header(props) {

    const changeButton = () => {
        switch (props.screen) {
            case "matches":
                return <Button onClick={() => { props.changeScreen("profiles") }}> Ir para Perfis </Button>
            case "profiles":
                return <ButtonMatches onClick={() => { props.changeScreen("matches") }}>
                    <img src={Fire} alt="desenho de chama" height={40} width={40} />
                </ButtonMatches>
            default:
                return <p>Erro</p>
        }

    }

    return (
        <ContainerHeader>
            <Text bgGradient='linear(to-l, #FA8E00, #FA5300)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'>AstroMatch</Text>
            {changeButton()}

        </ContainerHeader>
    )
}
