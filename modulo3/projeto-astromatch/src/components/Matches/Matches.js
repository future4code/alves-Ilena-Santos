import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardMatch, ContainerMatches, ImgMatches, TextFont, ContainerButtonClear } from './Matches-styles';
import { Button } from '@chakra-ui/react'
import TrashCan from "../../img/trash-can.png"

export default function Matches() {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/matches')
            .then((response) => {
                setMatches(response.data.matches)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getMatches()
    }, [])

    useEffect(() => {
        getMatches()
    }, [matches])


    const clearMatches = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/clear')
            .then((response) => {

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const listOfMatches = matches.map((profile) => {
        return (<CardMatch key={profile.id}>
            <ImgMatches src={profile.photo} alt={profile.photo_alt} />
            <strong>
                <TextFont>{profile.name}</TextFont>
            </strong>
        </CardMatch>)
    })
    return (
        <div>
            <ContainerMatches>
                {listOfMatches}
            </ContainerMatches>
            <ContainerButtonClear>
                <Button leftIcon={<img src={TrashCan} alt="desenho de uma lata de lixo" height={20} width={20} />} onClick={clearMatches}>Limpar swipes e matches</Button>
            </ContainerButtonClear>
        </div>
    )
}
