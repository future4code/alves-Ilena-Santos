import React from 'react'
import axios from 'axios'
import styled from "styled-components";

const ContainerTelaPlaylist = styled.div`
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: 1fr;
    justify-content: center;
   
`

const BotaoCriarPlaylist = styled.button`
    width: 50px;
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

    deletaPlaylist = (id) =>{
    let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url,
        {
            headers: {
              Authorization: "ilena-acioli-alves"
            }
          }).then((resposta) =>{
            alert("Tem certeza que deseja deletar?")
            this.props.pegaPlaylists()
          }).catch((erro)=>{
            alert(erro.response.data)
          })
    }

    novaPlaylist = (event) => {
        this.setState({ nomeDaPlaylist: event.target.value })
    }


    render() {
        const listaDePlaylists = this.props.listaDePlaylists.map((playlist) => {
            return <div key={playlist.id}>
                <p >Nome: {playlist.name}</p>
                <button onClick={()=>this.deletaPlaylist(playlist.id)}>Deletar Playlist</button>
                <button onClick={()=>this.props.handleOnclick(playlist.id)}>Ver músicas</button>
                </div>
        })

        return (

            <ContainerTelaPlaylist>
                <p>Crie sua playlist:</p>
                <input placeholder='Nome da playlist'
                    value={this.state.nomeDaPlaylist}
                    onChange={this.novaPlaylist}
                />
                <BotaoCriarPlaylist onClick={this.criaPlaylist}>Criar</BotaoCriarPlaylist>
                <hr />
                {listaDePlaylists}

            </ContainerTelaPlaylist>
        )
    }
}
