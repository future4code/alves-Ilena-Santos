import React from "react";




export default class TelaCadastroUsuario extends React.Component {
    
  render() {
    return (
      <div>
        <button onClick={()=>this.props.mudaTela("lista de Usuários")}>Troca de Tela</button>
        <section>
            <input placeholder="Usuário"
                value={this.props.nomeDoUsuario}
                onChange = {this.props.novoNomeUsuario}
            />
            <input placeholder="E-mail"
                value={this.props.emailDoUsuario}
                onChange = {this.props.novoEmailUsuario}
            />
            <button onClick={this.props.criaUsuario}>Criar Usuário</button>
        </section>
      </div>
    )
  }
}