import axios from 'axios';
import React from 'react'
import styled from "styled-components";

const ContainerTelaMusica = styled.div`
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: 0.3fr 0.5fr 0.5fr 1fr 1fr ;
    justify-content: center;
   
`


const ContainerMusica = styled.div`
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    border: 1px solid black;

`

export default class TelaDeMusica extends React.Component {
    state = {
        nomeDaMusica: "",
        nomeDoArtista: "",
        urlDaMusica: ""

    }

    novaMusica = (event) => {
        this.setState({ nomeDaMusica: event.target.value })
    }

    novoArtista = (event) => {
        this.setState({ nomeDoArtista: event.target.value })
    }
    novaUrl = (event) => {
        this.setState({ urlDaMusica: event.target.value })
    }

    adicionaMusicas = (id) => {
        const novaMusica = {
            name: this.state.nomeDaMusica,
            artist: this.state.nomeDoArtista,
            url: this.state.urlDaMusica,
        }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.post(url, novaMusica,
            {
                headers: {
                    Authorization: "ilena-acioli-alves"
                }
            }
        ).then((resposta) => {
            alert("Música adicionada!")
            this.props.pegaMusicasDaPlaylist(id)
        }).catch((erro) => {
            alert(erro.response.data)
        })

    }

    deletaMusica = (idDaPlaylist,idDaMusica) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idDaPlaylist}/tracks/${idDaMusica}`
        axios.delete(url,
            {
                headers: {
                  Authorization: "ilena-acioli-alves"
                }
              }).then((resposta)=>{
                alert("Tem certeza que deseja deletar?")
            this.props.pegaMusicasDaPlaylist(idDaPlaylist)
              }).catch((erro)=>{
                alert(erro.response.data)
              })
            
    }

    render() {
        const listaDeMusicas = this.props.musicasDaPlaylist.map((musica) => {
            return <ContainerMusica key={musica.id}>
                <p>Nome da música: {musica.name}</p>
                <p>Artista: {musica.artist}</p>
                <p>link: {musica.url}</p>
                <button onClick={()=>this.deletaMusica(this.props.idDaPlaylist, musica.id)}>Deletar música</button>
                <audio ref="audio_tag" src={musica.url} controls />
                

            </ContainerMusica>
        })


        return (
            <ContainerTelaMusica>
                <button onClick={() => this.props.mudaTela("playlists")}>Voltar para Playlists</button>
                <p>Quantidade de músicas: {this.props.musicasDaPlaylist.length}</p>
                <div>
                    <p>Adicionar músicas:</p>
                    <input placeholder='Nome da música'
                        value={this.state.nomeDaMusica}
                        onChange={this.novaMusica}
                    />
                    <input placeholder='Nome do artista'
                        value={this.state.nomeDoArtista}
                        onChange={this.novoArtista}
                    />
                    <input placeholder='Url'
                        value={this.state.urlDaMusica}
                        onChange={this.novaUrl}
                    />
                    <button onClick={()=>this.adicionaMusicas(this.props.idDaPlaylist)}>Adicionar Música</button>
                </div>

                <p>Lista de Músicas: </p>
                {listaDeMusicas}
            </ContainerTelaMusica>
        )

    }
}
