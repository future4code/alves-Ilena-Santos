import React from "react";
import axios from "axios"
import TelaListaUsuarios from "./componentes/TelaListaUsuarios";
import TelaCadastroUsuario from "./componentes/TelaCadastroUsuario";



export default class App extends React.Component {
  state = {
    listaDeUsuarios: [],
    erro: "",
    nomeDoUsuario: "",
    emailDoUsuario: "",
    tela: "cadastro"

  }

  mudaTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }

  exibeTela = () => {
    if (this.state.tela === "cadastro") {
      return <TelaCadastroUsuario mudaTela={this.mudaTela}
        nomeDoUsuario={this.state.nomeDoUsuario}
        emailDoUsuario={this.state.emailDoUsuario}
        novoNomeUsuario={this.novoNomeUsuario}
        novoEmailUsuario={this.novoEmailUsuario}
        criaUsuario={this.criaUsuario} />
    } else {
      return <TelaListaUsuarios mudaTela={this.mudaTela}
        listaDeUsuarios={this.state.listaDeUsuarios}
        pegaUsuarios={this.pegaUsuarios}
        deletaUsuario={this.deletaUsuario}
      />
    }
  }

  criaUsuario = () => {
    const novoUsuario = {
      name: this.state.nomeDoUsuario,
      email: this.state.emailDoUsuario
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      novoUsuario,
      {
        headers: {
          Authorization: "ilena-acioli-alves"
        }
      }
    ).then((resposta) => {
      // console.log(resposta)
      alert("Usuário cadastrado!");
    }).catch((erro) => {
      alert(erro.response.data.message)
    })
  }

  novoNomeUsuario = (event) => {
    this.setState({ nomeDoUsuario: event.target.value })
  }

  novoEmailUsuario = (event) => {
    this.setState({ emailDoUsuario: event.target.value })
  }

  pegaUsuarios = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "ilena-acioli-alves"
        }
      }
    )
      .then((resposta) => {
        console.log(resposta.data)
        this.setState({ listaDeUsuarios: resposta.data })
      })
      .catch((erro) => {
        console.log(erro.response.data)
        this.setState({ erro: erro.response.data })
      })
  }

  deletaUsuario = (id) =>{

  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
        headers: {
          Authorization: "ilena-acioli-alves"
        }
      }
    ).then((resposta)=>{

        alert("Usuário removido")
        this.pegaUsuarios()
    }).catch((erro)=>{
      console.log(erro.response.data)
        alert(erro.response.data)
    })
  }

  render() {
 
    return (
      <div>
        {this.exibeTela()}
      </div>
    )
  }
}
