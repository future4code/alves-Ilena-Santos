import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { CardMatch } from './Matches-styles';
import { Button } from '@chakra-ui/react'

export default function Matches() {
    const [matches,setMatches] = useState([])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/matches')
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getMatches()
    },[])

    useEffect(()=>{
        getMatches()
    },[matches])


    const clearMatches =()=>{
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/clear')
        .then((response) => {
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const listOfMatches = matches.map((profile)=>{
        return (<CardMatch key={profile.id}>
            <img src={profile.photo} alt={profile.photo_alt} height={50} width={50}/>
            <p>{profile.name}</p>
        </CardMatch>)
    })
  return (
    <div>
        <h3> Matches</h3>
        {listOfMatches}
        <Button onClick={clearMatches}>Limpar swipes e matches</Button>
    </div>
  )
}
