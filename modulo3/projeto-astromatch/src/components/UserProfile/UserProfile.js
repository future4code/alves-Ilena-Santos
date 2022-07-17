import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from '@chakra-ui/react'
import { ContainerProfile, Img, ContainerLike, ContainerProfiles, ButtonLike, ButtonDislike, TextFont } from './UserProfile-styled';
import Like from "../../img/like.png"
import Dislike from "../../img/dislike.png"
import Refresh from "../../img/refresh.png"
import { toast } from 'react-toastify'


export default function UserProfile(props) {
    const [profile, setProfile] = useState({})
    const [status, setStatus] = useState("normal")
    



    const getProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/person')
            .then((response) => {
                setProfile(response.data.profile)
                changeAnimation("normal")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const changeAnimation =( status)=>{
        setStatus(status)
    }

    useEffect(() => {
        getProfile()
    }, [])

    const chooseProfile = (id) => {
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/choose-person',
            {
                "id": id,
                "choice": true
            }).then((response) => {
                if (response.data.isMatch) {
                    toast.success(`Você e ${profile.name} são um match!` )
                }
                getProfile()
                changeAnimation("like")
            }).catch((error) => {
                console.log(error)
            })
    }

    const clearMatches = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ilena/clear')
            .then((response) => {
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const handleOnclickDislike = ()=> {
        changeAnimation("dislike")
        getProfile()
    }

    const handleOnclickReset = () => {
        clearMatches()
        toast.success("Perfis resetados!" )
        getProfile()
    }


    return (
        <div>
            {profile ? (
                <ContainerProfiles>
                    <ContainerProfile  >
                        <Img src={profile.photo} alt={profile.photo_alt} status={status}/>
                        <strong>
                            <TextFont>{profile.name}, {profile.age}</TextFont>
                        </strong>
                        <TextFont>{profile.bio}</TextFont>
                    </ContainerProfile>
                    <ContainerLike>
                        <ButtonDislike onClick={handleOnclickDislike}>
                            <img src={Dislike} alt="desenho mão com polegar para baixo" height={35} width={35} />
                        </ButtonDislike>
                        <ButtonLike onClick={() => { chooseProfile(profile.id) }}>
                            <img src={Like} alt="desenho mão com polegar para cima" height={40} width={40} />
                        </ButtonLike>
                    </ContainerLike>
                </ContainerProfiles>)
                :
                (<Button leftIcon={<img src={Refresh} alt="desenho de setas em círculo" height={20} width={20} />} onClick={handleOnclickReset}>  Resetar Perfis</Button>)}
        </div>
    )
}
