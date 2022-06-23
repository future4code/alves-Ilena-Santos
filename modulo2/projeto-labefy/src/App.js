import React from "react";
import TelaDePlaylists from "./components/TelaDePlaylists/TelaDePlaylists";
import TelaDeMusica from "./components/TelaDeMusica/TelaDeMusica";
import axios from "axios"




export default class App extends React.Component {
  state = {
    listaDePlaylists: [],
    musicasDaPlaylist: [],
    tela: "tela inicial"
  }

  

  mudaTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }

  selecionaPagina = () => {

    switch (this.state.tela) {
      case "playlists":
        return <TelaDePlaylists 
        listaDePlaylists = {this.state.listaDePlaylists}
        mudaTela={this.mudaTela} 
        pegaPlaylists={this.pegaPlaylists}
        handleOnclick={this.handleOnclick}/>
      case "musicas":
        return <TelaDeMusica mudaTela={this.mudaTela}
        musicasDaPlaylist={this.state.musicasDaPlaylist}/>
      default:
        return <div>
          <h1>Bem vindo ao Labefy, sua plataforma de streaming!</h1>
          <h3>Confira suas playlists:</h3>
          <button onClick={() => this.mudaTela("playlists")}>Ver playlists</button>
        </div>
    }
  }

  pegaPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url,
      {
        headers: {
          Authorization: "ilena-acioli-alves"
        }
      }
      ).then((resposta)=>{
        this.setState({listaDePlaylists: resposta.data.result.list})
      }).catch((erro)=>{
        console.log(erro.response.data)
       
      }
      )
  }

  pegaMusicasDaPlaylist = (id) =>{
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
axios.get(url,
  {
    headers: {
      Authorization: "ilena-acioli-alves"
    }
  }
  ).then((resposta)=>{
    this.setState({musicasDaPlaylist: resposta.data.result.tracks})
  }).catch((erro)=>{
    console.log(erro.response.data)
  })

  }

  handleOnclick = (id) => {
this.pegaMusicasDaPlaylist(id)
this.mudaTela("musicas")
  }

  render() {
    return (
      <div>
        {this.selecionaPagina()}
      </div>
    )
  }
}

