import React from 'react'
import styled from "styled-components";

const ContainerMusica = styled.div`
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: 1fr 1fr 1fr;
    border: 1px solid black;

`

export default class TelaDeMusica extends React.Component {


 
    render() {
        const listaDeMusicas = this.props.musicasDaPlaylist.map((musica) => {
            return <ContainerMusica key={musica.id}>
                <p>Nome da música: {musica.name}</p>
                <p>Artista: {musica.artist}</p>
                <p>link: {musica.url}</p>

            </ContainerMusica>
        })
        
        return (
            <div>
                <button onClick={()=>this.props.mudaTela("playlists")}>Voltar para Playlists</button>
                <p>Quantidade de músicas: {this.props.musicasDaPlaylist.length}</p>
                <p>Lista de Músicas: </p>
                {listaDeMusicas}
            </div>
        )

    }
}
