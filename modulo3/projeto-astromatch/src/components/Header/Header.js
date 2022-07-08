import React from 'react'
import { ContainerHeader, ButtonMatches, ButtonProfile } from "./Header-styled"
import { Text } from '@chakra-ui/react'
import Fire from "../../img/fire.png"
import Profile from "../../img/profile.png"


export default function Header(props) {

    const changeButton = () => {
        switch (props.screen) {
            case "matches":
                return <ButtonProfile onClick={() => { props.changeScreen("profiles") }}>
                    <img src={Profile} alt="desenho de boneco de perfil" height={40} width={40} />
                </ButtonProfile>
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
