import React from "react";
import axios from "axios";




export default class TelaCadastroUsuario extends React.Component {
  state = {
    erro: "",
    nomeDoUsuario: "",
    emailDoUsuario: "",
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
      alert("Usuário cadastrado!");
      this.setState({nomeDoUsuario: ""})
      this.setState({emailDoUsuario: ""})

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



  render() {
    return (
      <div>
        <button onClick={()=>this.props.mudaTela("lista de usuarios")}>Ver lista de usuários</button>
        <section>
            <input placeholder="Usuário"
                value={this.state.nomeDoUsuario}
                onChange = {this.novoNomeUsuario}
            />
            <input placeholder="E-mail"
                value={this.state.emailDoUsuario}
                onChange = {this.novoEmailUsuario}
            />
            <button onClick={this.criaUsuario}>Criar Usuário</button>
        </section>
      </div>
    )
  }
}