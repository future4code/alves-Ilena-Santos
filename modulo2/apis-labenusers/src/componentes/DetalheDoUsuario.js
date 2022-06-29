import React from "react"


export default class DetalheDoUsuario extends React.Component {
   
    render() {
       
      return (
        
        <div>
            <button onClick={()=>this.props.mudaTela("lista de usuarios")}>Voltar para lista</button>
            <p> Nome do Usuário: {this.props.dadosDoUsuario.name} </p>
            <p> E-mail: {this.props.dadosDoUsuario.email} </p>
            <button onClick={()=>this.props.deletaUsuario(this.props.dadosDoUsuario.id)}> Remover usuário</button>
        </div>
      )
    }
  }