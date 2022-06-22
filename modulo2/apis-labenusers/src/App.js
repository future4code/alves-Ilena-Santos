import React from "react";
import axios from "axios";
import TelaListaUsuarios from "./componentes/TelaListaUsuarios";
import TelaCadastroUsuario from "./componentes/TelaCadastroUsuario";
import DetalheDoUsuario from "./componentes/DetalheDoUsuario";


import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
`


const ContainerTela = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  min-height: 500px;
  border: 1px solid black;
`

export default class App extends React.Component {
  state = {
    listaDeUsuarios: [],
    dadosDoUsuario: [],
    tela: "cadastro"
  }
  componentDidMount() {
    this.pegaUsuarios()
  }
  
  componentDidUpdate() {
    this.pegaUsuarios()
  }

  mudaTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }

  exibeTela = () => {
    if (this.state.tela === "cadastro") {
      return <TelaCadastroUsuario mudaTela={this.mudaTela} />
    } else if (this.state.tela === "lista de usuarios") {
      return <TelaListaUsuarios listaDeUsuarios={this.state.listaDeUsuarios}
        mudaTela={this.mudaTela}
        tela={this.state.tela}
        handleOnClick={this.handleOnClick}
        deletaUsuario={this.deletaUsuario}
        pegaUsuarios={this.pegaUsuarios} />
    } else {
      return <DetalheDoUsuario mudaTela={this.mudaTela}
        dadosDoUsuario={this.state.dadosDoUsuario}
        deletaUsuario={this.deletaUsuario}
      />
    }
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
        this.setState({ listaDeUsuarios: resposta.data })
      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data })
      })
  }

  deletaUsuario = (id) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "ilena-acioli-alves"
        }
      }
    ).then((resposta) => {

      alert("Tem certeza de que deseja deletar?")
      this.pegaUsuarios()
    }).catch((erro) => {
      alert(erro.response.data)
    })
  }



  pegaDadosUsuario = (id) => {
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "ilena-acioli-alves"
        }
      }
    ).then((resposta) => {
      // console.log(resposta.data)
      this.setState({ dadosDoUsuario: resposta.data })
    })
      .catch((erro) => {
        alert(erro.response.data)
      })

  }




  handleOnClick = (id) => {
    this.pegaDadosUsuario(id)
    this.mudaTela("tela de detalhes")
  }
  

  render() {

    return (
      <Container>
        <ContainerTela>
          {this.exibeTela()}
        </ContainerTela>
      </Container>
    )
  }
}
