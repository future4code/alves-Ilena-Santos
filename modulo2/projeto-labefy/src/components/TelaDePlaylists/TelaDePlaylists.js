import React from 'react'
import axios from 'axios'
import styled from "styled-components";

const ContainerTelaPlaylist = styled.div`
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: 0.2fr 20px 0.2fr 0.2fr; 
    justify-content: center;
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family:'Roboto', sans-serif;
    background-color: black;
    color: orangered;
    height: 100vh;
    width: 100vw; 
   
`
const CardPlaylist = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    border: 1px solid orangered;

`

const Botoes = styled.button`

    width: 100px;
    height: 40px;
    border-radius: 10px;
`

export default class TelaDePlaylists extends React.Component {
    state = {
        nomeDaPlaylist: "",
        erro: ""
    }

    componentDidMount() {
        this.props.pegaPlaylists()
    }

    criaPlaylist = () => {
        const novaPlaylist = {
            name: this.state.nomeDaPlaylist
        }
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.post(url, novaPlaylist,
            {
                headers: {
                    Authorization: "ilena-acioli-alves"
                }
            }
        ).then((resposta) => {
            alert("Playlist criada!")
            this.setState({ nomeDaPlaylist: "" })
            this.props.pegaPlaylists()
        }).catch((erro) => {
            alert(erro.response.data.message)
        })
    }

    deletaPlaylist = (id) => {
        let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url,
            {
                headers: {
                    Authorization: "ilena-acioli-alves"
                }
            }).then((resposta) => {
                alert("Tem certeza que deseja deletar?")
                this.props.pegaPlaylists()
            }).catch((erro) => {
                alert(erro.response.data)
            })
    }

    novaPlaylist = (event) => {
        this.setState({ nomeDaPlaylist: event.target.value })
    }


    render() {
        const listaDePlaylists = this.props.listaDePlaylists.map((playlist) => {
            return <CardPlaylist key={playlist.id}>
                <p >Nome: {playlist.name}</p>
                <Botoes onClick={() => this.deletaPlaylist(playlist.id)}>Deletar Playlist</Botoes>
                <Botoes onClick={() => this.props.handleOnclick(playlist.id)}>Ver músicas</Botoes>
            </CardPlaylist>
        })

        return (

            <ContainerTelaPlaylist>
                <p>Crie sua playlist:</p>
                <input placeholder='Nome da playlist'
                    value={this.state.nomeDaPlaylist}
                    onChange={this.novaPlaylist}
                />
                <Botoes onClick={this.criaPlaylist}>Criar</Botoes>
                {listaDePlaylists}

            </ContainerTelaPlaylist>
        )
    }
}
