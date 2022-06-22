
import React from "react";
import styled from "styled-components";


const CardUsuario = styled.div`
 display: flex;
 justify-content: space-between;
 width: 400px;
 border: 1px solid black;
 padding: 10px;
`




export default class TelaListaUsuarios extends React.Component {
  state = {
    listaDeUsuarios: this.props.listaDeUsuarios,
    erro: "",
  }
  
  componentDidMount() {
    this.props.pegaUsuarios()
  }
  componentDidUpdate() {
    this.props.pegaUsuarios()
  }
  
  



  render() {
    const listaDeUsuarios = this.state.listaDeUsuarios.map((usuario) => {

      return (
        <CardUsuario key={usuario.id}>
          <p>Nome do usuário: {usuario.name}</p>
          <button onClick={() => this.props.deletaUsuario(usuario.id)}>X</button>
          <button onClick={() => this.props.handleOnClick(usuario.id)}>Ver detalhe</button>
        </CardUsuario>
      )
    })


    return (
      <div>
        <button onClick={() => this.props.mudaTela("cadastro")}>Tela de Cadastro</button>
        {listaDeUsuarios}

      </div>
    )
  }
}
